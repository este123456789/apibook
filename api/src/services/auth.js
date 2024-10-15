// api/src/services/auth.js

import { db } from 'src/lib/db'
import bcrypt from 'bcryptjs'
import { AuthenticationError } from '@redwoodjs/api'

export const register = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  return user
}

export const login = async ({ email, password }) => {
  const user = await db.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new AuthenticationError('Invalid credentials')
  }

  const isValidPassword = await bcrypt.compare(password, user.password)

  if (!isValidPassword) {
    throw new AuthenticationError('Invalid credentials')
  }

  return user
}
