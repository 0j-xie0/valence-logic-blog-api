// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules
const mongoose = require('mongoose')
//JWT middleare "plugin in fastify context"
const jwtPlugin = require('./middleware/authMiddleware')

// Import Routes
const routes = require('./routes')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

//registering the plugin 
fastify.register(jwtPlugin)
// adding the hook or the middleware in some routes
fastify.register(async function (fastify, opts) {

  fastify.addHook('onRequest', fastify.authenticate)
  routes.forEach((route, index) => fastify.route(route))

})


// Connect to DB
mongoose.connect('mongodb://localhost/bandsdata')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

  
// Loop over each route

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.swagger()
    fastify.log.info(`J&E\'s Bandsever is Up on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()