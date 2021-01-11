const axios = require('axios').default;
export default axios.create({baseURL: 'http://localhost:3000/api'})
