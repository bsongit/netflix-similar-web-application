const mongoose = require('mongoose')
const mongoURI = require('./index').get('database.mongo-uri')

const connect = async (URI = mongoURI) => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })

    console.log('Server connected to mongodb')
  } catch (err) {
    console.error(
      `An error occurred while trying to connect to database: ${err}`
    )
  }
}
module.exports = {
  connect
}
