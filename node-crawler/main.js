// main.js

const axios = require('axios').default;
const cheerio = require('cheerio');
const url = "https://www.baixarfilmetorrent.net/page/";



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

async function insertMovies(movie){
    axios.post('http://localhost:5000/api/movies/create', {name: movie.name, urlImg: movie.urlImg},)
    .then(function (response) {
    //   console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  async function getMovies(){
    axios.get('http://localhost:5000/api/movies/')
    .then(function (response) {
    var movies = response.data;
    movies.map(movie => {
        // deleMovies(movie.name);
        // console.log(movie.name);
        var count = 0;
        movies.map(m => {
            if(movie.name == m.name){
                count = count + 1;
                if(count >= 2 ){
                    // deleteMovie(m._id);
                }
            }
            
        })
    })
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  async function deleMovies(name){
    axios.post('http://localhost:5000/api/movies/delete-duplicated', {name: name})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  async function deleteMovie(_id){
    axios.post('http://localhost:5000/api/movies/delete', {_id: _id})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

getMovies()

// deleMovies('Os Croods 2: Uma Nova Era (2020) Torrent Dublado e Legendado');



//   var number = 0;
//   var interval =  setInterval(() => {

//         if (number >= 924) {
//             clearInterval(interval);
//         }
//         var currentUrl = url + number + '/';
//         console.log(currentUrl);
//         fetchData(currentUrl).then( (res) => {
//             const html = res.data;
//             const $ = cheerio.load(html);
//             const statsTable = $('.imagem');
//             statsTable.each(function() {
//                 let d = $(this).find('img').attr();
//                 const movie = {
//                     name: d.alt,
//                     urlImg: d['data-src']
//                 }
//                 insertMovies(movie)
//                 // console.log(d['data-src'])
//             });
//         })
//         number = number + 1;
//     }
//         , 2000);

