export const schema = gql`
  type Book {
    id: Int!
    title: String!
    author: String!
    publicationYear: Int!
  }

  input CreateBookInput {
    title: String!
    author: String!
    publicationYear: Int!
  }

  input UpdateBookInput {
    title: String
    author: String
    publicationYear: Int
  }

type Query {
  books: [Book!]! @requireAuth
  book(id: Int!): Book @requireAuth
}

type Mutation {
  createBook(input: CreateBookInput!): Book! @requireAuth
  updateBook(id: Int!, input: UpdateBookInput!): Book! @requireAuth
  deleteBook(id: Int!): Book! @requireAuth
}

`;
