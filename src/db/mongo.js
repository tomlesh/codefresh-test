const mongoose = require('mongoose');

const DB_HOST = process.env.MODE === 'development'
  ? 'mongo'
  : '<prod-ip>';

const url = `mongodb://${DB_HOST}:27017/test`

mongoose.connect(url)
  .catch(err => console.error(err));

const { connection } = mongoose;

module.exports = connection;