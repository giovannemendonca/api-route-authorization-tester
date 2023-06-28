import { FastifyInstance } from 'fastify'
import { register } from './register'
import { fetchUsers } from './fetch'
import { verifyJWT } from '../../middlewares/verify-jwt'

export async function userRoutes(app: FastifyInstance){
  app
    .post('/users', register)
    .get('/users', {onRequest: [verifyJWT]} ,fetchUsers)
}