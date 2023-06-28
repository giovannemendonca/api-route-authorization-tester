import { FastifyInstance } from 'fastify'
import { authenticate } from './authenticate'


export async function useAuthenticate(app: FastifyInstance) {
  app
  // Auth
    .post('/auth', authenticate) }