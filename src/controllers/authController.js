// fastify.get('/signup', (req, reply) => {
//     // some code
//     const token = fastify.jwt.sign({ user:"hola"})
//     reply.send({ token })
//   })

// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../models/User')


exports.login = async (req, res) => {
     try {
         const user = await User.find({email:req.body.email})
         return await reply.jwtSign(user)
     } catch(err){
        throw boom.boomify(err)

     }

}

exports.register = async (req, res) => {
    try {
        const user = new Post(req.body)
        return user.save()
    } catch(err){
        throw boom.boomify(err)

    }
}