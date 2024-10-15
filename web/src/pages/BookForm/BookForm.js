// web/src/pages/BookForm/BookForm.js
import React, { useState } from 'react';
import { useNavigate } from '@reach/router';

const BookForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [publicationYear, setPublicationYear] = useState(book ? book.publicationYear : '');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      publicationYear,
    };

    onSubmit(newBook);
    navigate('/books'); // Redirige a la lista de libros
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Autor:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <label>Año de publicación:</label>
        <input type="number" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} required />
      </div>
      <button type="submit">{book ? 'Actualizar' : 'Crear'} Libro</button>
    </form>
  );
};

export default BookForm;