const mongoose = require('mongoose')
const contacts = require('./contacts')

const username = process.env.MONGO_INITDB_ROOT_USERNAME
const password = process.env.MONGO_INITDB_ROOT_PASSWORD

const databaseName = 'api'
const url = `mongodb://${username}:${password}@database:27017/${databaseName}?authMechanism=SCRAM-SHA-1&authSource=admin`
const options = {
  useNewUrlParser: true,
  reconnectTries: 60,
  reconnectInterval: 1000,
  useFindAndModify: false,
}

const startDatabase = () => new Promise((resolve, reject) => {
  mongoose.connect(url, options, (err) => {
    if (err) {
      console.log(`FATAL MONGODB CONNECTION ERROR: ${err}:${err.stack}`) // eslint-disable-line no-console
      reject(err)
      return
    }

    const appDbMethods = {
      contacts,
    }

    resolve(appDbMethods)
  })
})

module.exports = startDatabase
