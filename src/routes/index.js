// Import our Controllers
const bandController = require('../controllers/bandController')
const commentsController = require('../controllers/commentsController')

// Import Swagger documentation
//const documentation = require('./documentation/bandApi')

const routes = [
  {
    method: 'GET',
    url: '/api/bands',
    handler: bandController.getBands
  },
  {
    method: 'GET',
    url: '/api/bands/:id',
    handler: bandController.getSingleBand
  },
  {
    method: 'POST',
    url: '/api/bands',
    handler: bandController.addBand,
    // schema: documentation.addBandSchema
  },
  {
    method: 'PUT',
    url: '/api/bands/:id',
    handler: bandController.updateBand
  },
  {
    method: 'DELETE',
    url: '/api/bands/:id',
    handler: bandController.deleteBand
  },
  {
    method: 'GET',
    url: '/api/bands/:id/comments',
    handler: commentsController.getComments
  },

]

module.exports = routes