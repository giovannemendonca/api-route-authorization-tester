import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeAuthenticate } from '../../../use-cases/factories/make-authenticate-use-case'
import { InvalidCredentialsError } from '../../../use-cases/errors/invalid-credentials-error'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { email, password } = authenticateBodySchema.parse(request.body)
  try {
    const authenticateUseCase = makeAuthenticate()

    const { user } = await authenticateUseCase.execute({
      email,
      password
    })

    const token = await reply.jwtSign(
      {
        
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '1d'
        }
      }
    )

    return reply.status(200).send({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message })
    }
    throw new Error('Unexpected error')
  }
}
