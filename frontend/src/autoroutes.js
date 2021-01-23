const axios = require('axios').default;
var fs = require('fs');

const urls = async function() {
    await  axios.get('http://localhost:5000/api/movies/all-url').then((response) => {
     createFile(response.data);
   }).catch((error) => {
     console.error(error)
   })
 };

function routeGenerator(routes) {
    var contentFile = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"> \n`;
    contentFile += `<link type="text/css" id="dark-mode" rel="stylesheet" href=""/>\n`;
    contentFile += `<style type="text/css" id="dark-mode-custom-style"/>\n`;
    contentFile +=  `<url>\n`;
    contentFile +=  `<loc>http://filmes-temporadas-online.ml/</loc>\n`;
    contentFile += `<lastmod>2021-01-20T15:59:52+00:00</lastmod>\n` ;
    contentFile += `</url>\n` ;
    routes?.map(route => {
      contentFile += route.url? `<url>\n` : ''
      contentFile += route.url? `<loc>http://filmes-temporadas-online.ml/${route.url}</loc>\n` : ''
      contentFile += route.url? `<lastmod>2021-01-20T15:59:52+00:00</lastmod>\n` : ''
      contentFile += route.url? `</url>\n` : ''
      contentFile += route.url1? `<url>\n` : ''
      contentFile += route.url1? `<loc>http://filmes-temporadas-online.ml/assistir/${route.url1}</loc>\n` : ''
      contentFile += route.url1? `<lastmod>2021-01-20T15:59:52+00:00</lastmod>\n` : ''
      contentFile += route.url1? `</url>\n` : ''
    })
    contentFile += "</urlset>\n";
  
    return contentFile;
}

async function createFile(routes){
    fs.writeFile('../public/sitemap.xml', 
    routeGenerator(routes)
    , function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    }); 
}

urls();