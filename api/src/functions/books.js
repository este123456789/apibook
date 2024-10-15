// api/src/functions/books.js

import { books, book, createBook, updateBook, deleteBook } from 'src/services/books'

export const handler = async (event) => {
  const { httpMethod, path, body } = event
  const idMatch = path.match(/\/api\/books\/(\d+)/)

  if (httpMethod === 'GET') {
    if (idMatch) {
      // Obtener un libro por id
      const id = idMatch[1]
      const foundBook = await book({ id })
      if (!foundBook) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Book not found' }),
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(foundBook),
      }
    } else {
      // Listar todos los libros
      const allBooks = await books()
      return {
        statusCode: 200,
        body: JSON.stringify(allBooks),
      }
    }
  }

  if (httpMethod === 'POST') {
    const input = JSON.parse(body)
    const newBook = await createBook({ input })
    return {
      statusCode: 201,
      body: JSON.stringify(newBook),
    }
  }

  if (httpMethod === 'PUT' && idMatch) {
    const id = idMatch[1]
    const input = JSON.parse(body)
    const updatedBook = await updateBook({ id, input })
    return {
      statusCode: 200,
      body: JSON.stringify(updatedBook),
    }
  }

  if (httpMethod === 'DELETE' && idMatch) {
    const id = idMatch[1]
    await deleteBook({ id })
    return {
      statusCode: 204, // No content
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  }
}
