import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UserRepository } from '../repositories/users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists.error'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}
interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    data: RegisterUseCaseRequest
  ): Promise<RegisterUseCaseResponse> {
    const { email, name, password } = data

    const password_hash = await hash(password, 6)

    const emailAlreadyExists = await this.userRepository.findByEmail(email)

    if (emailAlreadyExists) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.userRepository.create({
      name,
      email,
      password_hash
    })

    return { user }
  }
}
