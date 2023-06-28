import { FastifyInstance } from 'fastify'

export async function userRoutes(app: FastifyInstance){
  app.get('/users', () => {
    return 'Users'
  })
}