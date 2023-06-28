import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFetchUsersUseCase } from '../../../use-cases/factories/make-find-many-users-use-case'
import { ResourceNotFoundError } from '../../../use-cases/errors/resouce-not-found-error'

export async function fetchUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const listUsersUseCase = makeFetchUsersUseCase()
    const { users } = await listUsersUseCase.execute()
    return reply.status(200).send(users)
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(400).send({ message: error.message })
    }
    throw error
  }
}
