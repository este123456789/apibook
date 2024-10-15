import React from 'react';
import BookForm from './BookForm';

const CreateBookPage = () => {
  const handleSubmit = (newBook) => {
    // Lógica para manejar el nuevo libro, por ejemplo, hacer una llamada a la API
    console.log('Nuevo libro creado:', newBook);
  };

  return (
    <div>
      <h1>Crear Nuevo Libro</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBookPage;
