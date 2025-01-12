# Library Management System

A RESTful API for managing a library's book borrowing system, built with Node.js, Express, TypeScript, and PostgreSQL.

## Features

- User Management
  - Create new users
  - View user details including borrowing history
  - List all users

- Book Management
  - Add new books to the library
  - View book details
  - List all available books

- Transaction Management
  - Borrow books
  - Return books with ratings
  - Prevent multiple borrowings of the same book

## API Endpoints

### Users
- `GET /users` - Get all users
- `POST /users` - Create a new user
- `GET /users/:userId` - Get user details with borrowing history
- `POST /users/:userId/borrow/:bookId` - Borrow a book
- `POST /users/:userId/return/:bookId` - Return a book with rating

### Books
- `GET /books` - Get all books
- `POST /books` - Add a new book
- `GET /books/:bookId` - Get book details

## Database Schema

### Users
- id (Primary Key)
- name
- createdAt
- updatedAt

### Books
- id (Primary Key)
- name
- createdAt
- updatedAt

### Transactions
- id (Primary Key)
- userId (Foreign Key)
- bookId (Foreign Key)
- borrowedAt
- returnedAt
- score (1-5)
- createdAt
- updatedAt

## Technologies Used

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Sequelize ORM
- Express Validator

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| POSTGRES_DB | Database name | - |
| POSTGRES_USER | Database username | - |
| POSTGRES_PASSWORD | Database password | - |
| POSTGRES_HOST | Database host | localhost |
| POSTGRES_PORT | Database port | 5432 |
| NODE_ENV | Environment | development |
