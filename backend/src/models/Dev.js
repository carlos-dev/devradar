const mongoose = require('mongoose');
const PointSchema = require('./utils/pointSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github_usename: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dshpere',
  }
});

module.exports = mongoose.model('Dev', DevSchema);