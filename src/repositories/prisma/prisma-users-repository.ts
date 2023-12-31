import { Prisma, User } from '@prisma/client'
import { UserRepository } from '../users-repository'
import { prisma } from '../../lib/prisma'

export class PrismaUserRepository implements UserRepository {
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data
    })
    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    return user
  }

  async findMany(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
}
