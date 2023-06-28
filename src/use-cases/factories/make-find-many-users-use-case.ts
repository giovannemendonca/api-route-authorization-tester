import { PrismaUserRepository } from '../../repositories/prisma/prisma-users-repository'
import { FecthUsersUseCase } from '../fetch-users'

export function makeFetchUsersUseCase() {
  const userRepository = new PrismaUserRepository()
  const useCase = new FecthUsersUseCase(userRepository)
  return useCase
}
