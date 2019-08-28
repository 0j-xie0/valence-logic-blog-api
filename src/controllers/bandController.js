// External Dependancies
const boom = require('boom')

// Get Data Models
const Band = require('../models/Band')

// Get all bands
exports.getBands = async (req, reply) => {
  try {
    const bands = await Band.find()
    return bands
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single band by ID
exports.getSingleBand = async (req, reply) => {
  try {
    const id = req.params.id
    const band = await Band.findById(id)
    return band
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new band
exports.addBand = async (req, reply) => {
  try {
    const band = new Band(req.body)
    return band.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing band
exports.updateBand = async (req, reply) => {
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

// Delete a band
exports.deleteBand = async (req, reply) => {
  try {
    const id = req.params.id
    const band = await Band.findByIdAndRemove(id)
    return band
  } catch (err) {
    throw boom.boomify(err)
  }
}