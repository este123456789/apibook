import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from '@redwoodjs/router';

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      publicationYear
    }
  }
`;

const BooksPage = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Lista de Libros</h1>
      <Link to="/books/new">Agregar Nuevo Libro</Link>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link> - {book.author}
            <Link to={`/books/${book.id}/edit`}> Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
