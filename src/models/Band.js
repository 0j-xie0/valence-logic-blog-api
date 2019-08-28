// External Dependancies
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//define new schema for comments
const commentSchema = new Schema({
  rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true
  },
  comment: {
      type: String,
      required: true
  },
  author: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

//required: every document will have name as required field
const bandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  featured: {
    type: Boolean,
    default: false
  },
  comments: [ commentSchema ]   //comment documents become subdocuments inside dish document
},{
    timestamps: true
});
//every band document can have multiple comments stored within an array

module.exports = mongoose.model('Band', bandSchema);