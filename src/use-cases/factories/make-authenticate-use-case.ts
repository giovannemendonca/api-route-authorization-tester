import { PrismaUserRepository } from '../../repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticate() {
  const userRepository = new PrismaUserRepository()
  const useCase = new AuthenticateUseCase(userRepository)

  return useCase
}
