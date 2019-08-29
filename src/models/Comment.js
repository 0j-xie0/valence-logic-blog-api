const mongoose = require('mongoose')
const Schema = mongoose.Schema
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
  },
  band: { type: Schema.Types.ObjectId, ref: 'Band' },
},{
  timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);