const axios = require('axios').default;
var fs = require('fs');

const urls = async function() {
    await  axios.get('http://185.212.128.162:3000/api/movies/all-url').then((response) => {
     createFile(response.data);
   }).catch((error) => {
     console.error(error)
   })
 };

function routeGenerator(routes) {
    var contentFile = "import React from 'react'; \n";
    contentFile += "import {Route, Switch} from 'react-router-dom';\n";
    contentFile += "import Detail from '../pages/Detail';\n";
    contentFile += "type Props = {}\n";
    contentFile += "export default function MyRoutes(props: Props) { \n return (";
    contentFile += "<Switch>\n";
    routes?.map(route => {
      contentFile += `<Route exact path={'/${route.url}'} component={Detail}/>\n`
    })
    contentFile += "</Switch>\n";
    contentFile += ")}"
  
    return contentFile;
}

async function createFile(routes){
    fs.writeFile('./components/MyRoutes.tsx', 
    routeGenerator(routes)
    , function (err) {
      if (err) throw err;
      console.log('File is created successfully.');
    }); 
}

urls();