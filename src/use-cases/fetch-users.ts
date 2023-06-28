import { User } from '@prisma/client'
import { UserRepository } from '../repositories/users-repository'

interface FecthUsersUseCaseResponse {
  users: Partial<User>[]
}

export class FecthUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<FecthUsersUseCaseResponse> {
    const users = await this.userRepository.findMany()
    return {
      users
    }
  }
}
