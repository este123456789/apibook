// web/src/Routes.tsx

import { Router, Route } from '@redwoodjs/router'
import BooksPage from './pages/BooksPage/BooksPage'
import BookPage from './pages/BookPage/BookPage'
import BookForm from './pages/BookForm/BookForm'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />
      <Route path="/books" page={BooksPage} name="books" />
      <Route path="/books/new" page={BookForm} name="newBook" />
      <Route path="/books/{id}/edit" page={BookForm} name="editBook" />
      <Route path="/books/{id}" page={BookPage} name="book" />
    </Router>
  )
}

export default Routes
