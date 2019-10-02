// Import our Controllers
const postController = require('../controllers/postController')
const commentsController = require('../controllers/commentsController')

// Import Swagger documentation
//const documentation = require('./documentation/postApi')

const routes = [
  {
    method: 'GET',
    url: '/api/posts',
    handler: postController.getPosts
  },
  {
    method: 'GET',
    url: '/api/posts/:id',
    handler: postController.getSinglePost
  },
  {
    method: 'POST',
    url: '/api/posts',
    handler: postController.addPost,
  },
  {
    method: 'PUT',
    url: '/api/posts/:id',
    handler: postController.updatePost
  },
  {
    method: 'DELETE',
    url: '/api/posts/:id',
    handler: postController.deletePost
  },
  {
    method: 'GET',
    url: '/api/posts/:id/comments',
    handler: commentsController.getComments
  },

]

module.exports = routes