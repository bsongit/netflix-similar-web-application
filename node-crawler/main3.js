const axios = require('axios').default;
const cheerio = require('cheerio');
const url = "https://vizer.tv/filme/online/";
const link = 'https://vizer.tv/'


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


var arrayMovie = []
async function getVizerMovies(url){
  console.log("Crawling data...")
  // make http call to url
  let response = await axios(url).catch((err) => console.log(err));
  if(response.status !== 200){
      console.log("Error occurred while fetching data");
      return;
  }
  const {list} = response.data;
  Object.entries(list).map(item => {
    if(item[1]){
    let i = {
      // name : item[1].title,
      title : item[1]?.title,
      urlImg3 : 'https://image.tmdb.org/t/p/w342' + item[1]?.poster,
      // url3 : item[1].url
    }
    arrayMovie.push(i);
  }
  })
}

var pageIndex = 0;
var interval = setInterval(function () {
  if(pageIndex > 493){
    updateImg(arrayMovie)
    clearInterval(interval);
  }
  var vizerUrl = `https://vizer.tv/includes/ajax/ajaxPagination.php?categoriesListMovies=all&search=&page=${pageIndex}&categoryFilterYear=all&categoryFilterOrderBy=year&categoryFilterOrderWay=desc&categoryFilterQuantity=28`;
  getVizerMovies(vizerUrl);
  pageIndex++;
},5000)


async function updateOneByName(movie){
  if(movie !== undefined)
  await axios.post('http://localhost:5000/api/movies/update-one-by-name', {title: movie.title, urlImg3 : movie.urlImg3})
  .then(function (response) {
      console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

function updateImg(arrayMovie){
  var count = 0;
  var interval2 = setInterval(function () {
    if(count >= arrayMovie.length){
      clearInterval(interval2);
    }
    updateOneByName(arrayMovie[count])
    count++;
  },500)

}