const axios = require('axios').default;

async function updateID(){
  await axios.post('http://localhost:5000/api/movies/update-id')
  .then(function (response) {
      console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

async function updateOne(movie){
  await axios.post('http://localhost:5000/api/movies/update-one', {...movie})
  .then(function (response) {
      console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });  
}

async function fixPlayer(){
  await axios.post('http://localhost:5000/api/movies/get-player-video')
  .then(function (response) {
    response.data.map(m => {
      m.playerVideo2 = m.playerVideo2.replace("option_1.php","")
      updateOne(m);
    })
    
  })
  .catch(function (error) {
    console.log(error);
  });  
}

fixPlayer();

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