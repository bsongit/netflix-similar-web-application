// main.js

const axios = require('axios').default;
const cheerio = require('cheerio');
const url = "https://www.baixarfilmetorrent.net/";


async function fetchData(url,movie){
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
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  async function getFilmes(){
    axios.get('http://localhost:5000/api/movies/just-series')
    .then(function (response) {

        var count = response.data.length - 1;
        const interval = setInterval(() => {
          if(count === 0){
            clearInterval(interval);
          }
        console.log("pausado..." + count)
        var movie = response.data[count];
        console.log(url + toUrlPeace(movie.name));
        fetchData(url + toUrlPeace(movie.name),movie).then( (res) => {
          const html = res.data;
          const $ = cheerio.load(html);
        
          $('.entry-date.item.data').each(function() {
              let res = $(this).text();
              movie.release = convertDate(res);
          });
          $('.entry-content.content.clearfix > p > span').each(function() {
            if($(this).find("strong").text() === "Direção:"){
              let res = $(this).text();
              movie.author = res.replace("Direção: ", "");
            }
          });
          $('.entry-content.content.clearfix > p > span').each(function() {
            if($(this).find("strong").text() === "Gênero:"){
              let res = $(this).text();
              movie.genere = res.replace("Gênero: ", "");
            }
          });
          $('.nt-imdb-ct').each(function() {
              let res = $(this).find("a").text();
              movie.imdb = res;
          });
          $('.entry-content.content.clearfix > p > span').each(function() {
            if($(this).find("strong").text() === "Duração:"){
              let res = $(this).text();
              movie.duration = res.replace("Duração: ", "");
            }
          });
          $('.entry-content.content.clearfix > p > span').each(function() {
            if($(this).find("strong").text() === "Produção:"){
              let res = $(this).text();
              movie.studio =  res.replace("Produção: ", "");
            }
          });
          $('.entry-content.content.clearfix > p > span').each(function() {
            if($(this).find("strong").text() === "Sinopse:"){
              let res = $(this).text();
              movie.synopsis = res.replace("Sinopse: ", "");
            }
          });
        
          var eps = [];
          var arrayDow = $('.td-ep-dow > a');
          var arrayEp = $('.td-ep-eps');
        
          arrayDow.map(a => {
              if(arrayDow[a].attribs != undefined){
                let res = arrayDow[a].attribs.href;
                eps.push({[arrayEp[a].children[0].data] : arrayDow[a].attribs.href});
              }
          });
          movie.eps = eps;
          updateMovie(movie);
        })
        count--;
        }, 100);

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

  async function setCategories(){
    axios.post('http://localhost:5000/api/movies/set-categories')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  async function getAllMovies(){
    axios.get('http://localhost:5000/api/movies/')
    .then(function (response) {
      var count = response.data.length - 1;
      const interval = setInterval(() => {
        if(count === 0){
          clearInterval(interval);
        }
        var movie = response.data[count];
          movie.url = toUrlPeace(movie.name);
          updateMovie(movie);
          count--;
        },50);
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



  function toUrlPeace(name){
    name = name.toLowerCase()
    .replace(/  /g," ")
    .replace(/ /g,"-")
    .replace("(","-")
    .replace(")","-")
    .replace("[","-")
    .replace("]","-")
    .replace("...","")
    .replace(/á/g,"a")
    .replace(/à/g,"a")
    .replace(/ã/g,"a")
    .replace(/â/g,"a")
    .replace(/é/g,"e")
    .replace(/ê/g,"e")
    .replace(/í/g,"i")
    .replace(/ó/g,"o")
    .replace(/õ/g,"o")
    .replace(/ô/g,"o")
    .replace(/ö/g,"o")
    .replace(/ú/g,"u")
    .replace(/ü/g,"u")
    .replace(/ç/g,"c")
    .replace(/ª/g,"a")
    .replace(/º/g,"o")
    .replace(/°/g,"o")
    .replace("...","")
    .replace(/:/g,"")
    .replace(/;/g,"")
    .replace(/%/g,"")
    .replace(/'/g,"")
    .replace(/’/g,"")
    .replace(/‘/g,"")
    .replace(".","")
    .replace("!","")
    .replace("?","")
    .replace(/&/g,"")
    .replace(/–/g,"-")
    .replace(/---/g,"-")
    .replace(/--/g,"-")
    .replace(/š/g,"")
    .replace(/ž/g,"")
    .replace(/~/g,"")
    .replace(/œ/g,"o")
    .replace("...","")
    .replace("…","")
    .replace("#","");
    return name;
  }

  function convertDate(date){
    if(date.includes(" de janeiro de ")){
      date = date.replace(" de janeiro de ", "-01-");
    }
    else if(date.includes(" de fevereiro de ")){
      date = date.replace(" de fevereiro de ", "-02-");
    }
    else if(date.includes(" de março de ")){
      date = date.replace(" de março de ", "-03-");
    }
    else if(date.includes(" de abril de ")){
      date = date.replace(" de abril de ", "-04-");
    }
    else if(date.includes(" de maio de ")){
      date = date.replace(" de maio de ", "-05-");
    }
    else if(date.includes(" de junho de ")){
      date = date.replace(" de junho de ", "-06-");
    }
    else if(date.includes(" de julho de ")){
      date = date.replace(" de julho de ", "-07-");
    }
    else if(date.includes(" de agosto de ")){
      date = date.replace(" de agosto de ", "-08-");
    }
    else if(date.includes(" de setembro de ")){
      date = date.replace(" de setembro de ", "-09-");
    }
    else if(date.includes(" de outubro de ")){
      date = date.replace(" de outubro de ", "-10-");
    }
    else if(date.includes(" de novembro de ")){
      date = date.replace(" de novembro de ", "-11-");
    }
    else if(date.includes(" de dezembro de ")){
      date = date.replace(" de dezembro de ", "-12-");
    }
    return date;
  }

  function replaceFix1(stg){
    for(var char = 0; char < stg.length; char++){
      if(char > 0 && char+1 < stg.length){
        console.log(stg[char] + stg[char+1] + " == --")
        if(stg[char] + stg[char+1] == "--"){
          stg[char] = "";
        }
      }
    }
    return stg;
  }

  getAllMovies();
  // getFilmes();