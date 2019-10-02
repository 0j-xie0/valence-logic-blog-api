// External Dependancies
const mongoose = require('mongoose')
const Comment = require('./Comment')
const Schema = mongoose.Schema;
//required: every document will have name as required field
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true,
  },
  tags : {
    type : Array,
    required:false
  }
},{
    timestamps: true
});
//every band document can have multiple comments stored within an array

module.exports = mongoose.model('Post', postSchema);