# Book Management API

A RESTful API for managing books.

## API Endpoints and Their Usage

### Author API Endpoints
- **GET /api/v1/authors**: Retrieve a list of all authors.
- **POST /api/v1/authors/new**: Add a new author.
- **GET /api/v1/authors/:id**: Retrieve details of a specific author by its ID.
- **PUT /api/v1/authors/:id**: Update a author's details.
- **DELETE /api/v1/authors/:id**: Delete a author.

### Book API Endpoints
- **GET /api/v1/books**: Retrieve a list of all books.
- **POST /api/v1/books/new**: Add a new book.
- **GET /api/v1/books/:id**: Retrieve details of a specific book by its ID.
- **PUT /api/v1/books/:id**: Update a book's details.
- **DELETE /api/v1/books/:id**: Delete a book.

...

## Setting Up and Running the Application Locally

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

```bash
git clone https://github.com/veerkbharti/book-management-api.git
cd book-management-api
npm install
npm run dev or npm start

