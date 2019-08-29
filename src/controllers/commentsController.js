// External Dependancies
const boom = require('boom')

// Get Data Models
const Comment = require('../models/Comment')

// Get all comments of a band
exports.getComments = async (req, reply) => {
    try {
      const bands = await Comment.find().where('band').equals(req.params.id)
      return bands
    } catch (err) {
      throw boom.boomify(err)
    }
}
  
// Update an existing comment of a band
exports.postComment = async (req, reply) => {
    try {
      const id = req.params.id
      const band = req.body
      const { ...updateData } = band
      const update = await Band.findByIdAndUpdate(id, updateData, { new: true })
      return update
    } catch (err) {
      throw boom.boomify(err)
    }
  }
  
  