// External Dependancies
const mongoose = require('mongoose')
const Comment = require('./Comment')
const Schema = mongoose.Schema;
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
  comments: [ { type: Schema.Types.ObjectId, ref: 'Comment' } ]   //comment documents become subdocuments inside dish document
},{
    timestamps: true
});
//every band document can have multiple comments stored within an array

module.exports = mongoose.model('Band', bandSchema);