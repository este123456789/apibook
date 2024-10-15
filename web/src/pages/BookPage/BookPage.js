import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from '@redwoodjs/router';

const GET_BOOK = gql`
  query GetBook($id: Int!) {
    book(id: $id) {
      id
      title
      author
      publicationYear
    }
  }
`;

const BookPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: parseInt(id, 10) },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title, author, publicationYear } = data.book;

  return (
    <div>
      <h1>{title}</h1>
      <p>Autor: {author}</p>
      <p>Año de publicación: {publicationYear}</p>
      <Link to={`/books/${id}/edit`}>Editar Libro</Link>
      <Link to="/books">Volver a la lista</Link>
    </div>
  );
};

export default BookPage;
