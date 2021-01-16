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
    // console.log(response.data)
    return response;
}

async function getPageSource2(url){
  fetchData(url).then( (res) => {
    const html = res.data;
    const $ = cheerio.load(html);


    var arrayMovie = []

    $('.shakeImg2 > img').each(function() {
      console.log($(this).find('a')._root[0].next.attribs.onclick)
    });

  }).catch(function (error) {
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
// var count = 1;
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

getPageSource("https://topflix.tv/filmes/assistir-online-bob-esponja-o-filme/")