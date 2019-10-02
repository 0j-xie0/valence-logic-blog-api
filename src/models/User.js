// External Dependancies
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//required: every document will have name as required field
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
},{
    timestamps: true
});
//every band document can have multiple comments stored within an array

module.exports = mongoose.model('User', userSchema);