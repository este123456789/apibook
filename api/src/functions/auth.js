// api/src/functions/auth.js

import { register, login } from 'src/services/auth'

export const handler = async (event) => {
  const { httpMethod, body } = event

  if (httpMethod === 'POST') {
    const { action } = JSON.parse(body)

    switch (action) {
      case 'register':
        const { name, email, password } = JSON.parse(body)
        const newUser = await register({ name, email, password })
        return {
          statusCode: 201,
          body: JSON.stringify(newUser),
        }

      case 'login':
        const { email: loginEmail, password: loginPassword } = JSON.parse(body)
        const loggedInUser = await login({ email: loginEmail, password: loginPassword })
        return {
          statusCode: 200,
          body: JSON.stringify(loggedInUser),
        }

      default:
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Invalid action' }),
        }
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  }
}
