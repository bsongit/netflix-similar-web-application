var axios = require('axios').default;
export default axios.create({baseURL: 'http://185.212.128.162:3000/api'})
// export default axios.create({baseURL: 'http://localhost:5000/api'});