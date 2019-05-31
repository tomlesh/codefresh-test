const express = require('express');
const mongoose = require('mongoose');
const assert = require('assert');

const mongooseConnection = require('./db/mongo'); 

const app = express();

/**
 * MONGO STUFF
 */
var testSchema = new mongoose.Schema({
  foo: String
});
var TestModel = mongoose.model('testModel', testSchema);
/** END*/

if (mongooseConnection.once) {
  mongooseConnection.once('open', () => {
    console.log('Connected to DB!');
  });
}

app.listen(8080);

app.get('/', function(req, res) {
  console.log('asd')
  res.send({ foo: 'zxc' });
});

app.get('/writeSmth', function(req, res) {
  const value = writeToDb();
  res.send({ status: value + ' saved' });
});

const writeToDb = () => {
  var test = new TestModel({ foo: 'asd' });
  test.save((err, obj) => {
    if (err) return console.error(err);

    console.log(obj + 'saved!');
  })
  return test.foo;
}