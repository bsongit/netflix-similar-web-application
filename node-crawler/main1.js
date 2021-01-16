// main.js

const axios = require('axios').default;
const cheerio = require('cheerio');
const url = "https://topflix.tv/filmes/";
const link = 'https://topflix.tv/'


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

async function getPageSource(url){
  fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);


    var arrayMovie = []
    $('.movie-item-style-2.movie-item-style-1').each(function() {
      let title = "";
      let linkToPage = "";
      let urlImg2 = "";
      let res = $(this).find('.mv-item-infor > h6 > a')[0]?.attribs;
      urlImg2 = link +  $(this).find('.mv-img3 > img')[0].attribs['data-src'];
      if(res !== undefined){
        title = res.title
        linkToPage = link + res.href;
        arrayMovie.push({title, linkToPage, urlImg2})
      }
    });

    $('.movie-item-style-2.movie-item-style-1').each(function() {
      let title = "";
      let linkToPage = "";
      let urlImg2 = "";
      let res2 = $(this).find('.mv-item-infor > div > h6 > a')[0];
      urlImg2 = link + $(this).find('.mv-img3 > img')[0].attribs['data-src'];
      if(res2 !== undefined){
        title = res2.children[0].children[0]?.data;
        linkToPage = link + res2?.attribs.href;
        arrayMovie.push({title, linkToPage, urlImg2})
      }

    });
    arrayMovie.map(movie => {
      setTimeout(function () {
        getPageSource2(movie.linkToPage, movie.title)
        console.log('wait...')},500);

    })
  }).catch(function (error) {
    console.log(error);
  });  
}


async function getPageSource2(url, title){
  fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);


    var arrayMovie = []

    $('.shakeImg2 > img').each(function() {
      let res = $(this).find('a')._root[0].next.attribs.onclick.replace(`if (!window.__cfRLUnblockHandlers) return false; ChangeSource("")`,"").replace(`", "2"); return false;`,"");
      let playerVideo2 = `<video  controls playsinline  id='player' type='video/mp4' src='http://cdn-player.ml/_player2/option_1.php?id=${res}'  ></video>`
      updateMovie(title,playerVideo2);
    });

  }).catch(function (error) {
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




async function updateOneByName(movie){
  await axios.post('http://localhost:5000/api/movies/update-one-by-name', {title: movie.title, urlImg2 : movie.urlImg2})
  .then(function (response) {
      console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });  
}
var count = 1;
// var interval = setInterval(function (){
//   if(count > 61)
//       clearInterval(interval)
//   getPageSource(url + count)
//   count++;
// }
// ,10000)

async function getCorrect(){
  await axios.get('http://localhost:5000/api/movies/find-corrects')
  .then(function (response) {
      console.log(response.data.length);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

async function createRest(movie){
  await axios.post('http://localhost:5000/api/movies/create-rest', {title: movie.title, urlImg2 : movie.urlImg2})
  .then(function (response) {
      console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

  async function setFix(){
    await axios.get('http://localhost:5000/api/movies/fix')
    .then(function (response) {
        fixItems(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function fixItems(items){
    var count = 0;
    var interval = setInterval(function(){
      if(count >= items.length){
        clearInterval(interval);
      }
      var item = items[count];
      if(item.playerVideo2.includes(`if (!window.__cfRLUnblockHandlers) return false; ChangeSource("`)){
        item.playerVideo2 = item.playerVideo2.replace(`if (!window.__cfRLUnblockHandlers) return false; ChangeSource("`,"");
         
          updateMovie(item);
      }
      count++;
    },100)
  }


  setFix();  

  // getPageSource(url + 1)