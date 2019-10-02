// External Dependancies
const boom = require('boom')

// Get Data Models
const Post = require('../models/Post')

// Get all posts
exports.getPosts = async (req, response) => {
  try {
    const posts = await Post.find().populate('comments')
    return posts
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single band by ID
exports.getSinglePost = async (req, response) => {
  try {
    const id = req.params.id
    const band = await Post.findById(id).populate('comments')
    return band
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new band
exports.addPost = async (req, response) => {
  try {
    const band = new Post(req.body)
    return band.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing band
exports.updatePost = async (req, response) => {
  try {
    const id = req.params.id
    const band = req.body
    const { ...updateData } = band
    const update = await Post.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing comment of a band
exports.postPost = async (req, response) => {
  try {
    const id = req.params.id
    const band = req.body
    const { ...updateData } = band
    const update = await Post.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}


// Delete a band
exports.deletePost = async (req, response) => {
  try {
    const id = req.params.id
    const band = await Post.findByIdAndRemove(id)
    return band
  } catch (err) {
    throw boom.boomify(err)
  }
}