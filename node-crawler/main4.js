// main.js

const axios = require('axios').default;
const cheerio = require('cheerio');
const url = "https://www.baixarfilmetorrent.net/";



async function fetchData(url){
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));
    if(response.status !== 200){
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}

async function getPageSource(url,movie){
  fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);

    movie.cast = [];

    $('.translated').each(function() {
      movie.plot = $(this).text();
    });
    $('.classifBR').each(function() {
      movie.classifBR = $(this).text();
    });
    $('.dt-lanc-cin').each(function() {
      movie.releaseCinemaBr = $(this).text();
    });
    $('.dt-lanc-dig').each(function() {
      movie.releaseDigital = $(this).text();
    });
    $('.dt-lanc-dvd').each(function() {
      movie.releaseDvD = $(this).text();
    });
    $('strong').each(function() {
      if($(this).text() === "Orçamento:"){
        movie.budget = $(this)[0].next.data;
      }
      if($(this).text() === "Bilheterias:"){
        movie.ticketgain = $(this)[0].next.data;
      }
    });
    $('.youtube').each(function() {
        movie.trailer = $(this)[0].attribs['data-embed'];
    });

    $('.lazyload.alignleft').each(function() {
      movie.urlImg3 = $(this)[0].attribs['data-src'];
  });
  $('.elenco-list-ol > li > p > a').each(function() {
    // console.log($(this)[0].attribs.href)
    if($(this)[0].attribs.href !== undefined){
      if(!movie.cast.includes("https://www.baixarfilmetorrent.net" + $(this)[0].attribs.href))
        movie.cast.push("https://www.baixarfilmetorrent.net" + $(this)[0].attribs.href);
    }
});
  
  updateMovie(movie);
  }).catch(function (error) {
    console.log(error);
  });  
}

async function getAllUrls(){
  axios.get('http://localhost:5000/api/movies/all-url')
  .then(function (response) {
    var count = response.data.length - 1;
    const interval = setInterval(() => {
      if(count === 0){
        clearInterval(interval);
      }
      var movie = response.data[count];
        getPageSource(url + movie.url, movie);
        count--;
      },100);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

async function updateMovie(movie){
  axios.post('http://localhost:5000/api/movies/update-one',{...movie})
  .then(function (response) {
      console.log(`id: ${response.data.id}   ok: ${response.data.item.ok}`);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

getAllUrls()