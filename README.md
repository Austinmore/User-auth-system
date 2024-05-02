Project Name
A user authentication system using jwt.
Technologies Used
NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
Prisma: Next-generation ORM for Node.js and TypeScript, making database access easy with an auto-generated query builder for TypeScript & Node.js.
PostgreSQL: Robust, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.
Swagger: API documentation tool that helps developers design, build, document, and consume RESTful web services.
Getting Started
These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
What things you need to install the software and how to install them:

Node.js
PostgreSQL
A package manager like npm or yarn
Installing
A step-by-step series of examples that tell you how to get a development environment running:

Clone the repository:
git clone https://yourprojectrepository.com
cd project-name


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Set up the database:
Ensure PostgreSQL is running.
Create a new database for the project.
Configure your .env file with the database connection details

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

Run Prisma migrations:
npx prisma migrate dev

Generate the Prisma client:
npx prisma generate

Running the Application
Start the server:

npm run start:dev

Access the Swagger UI:
Visit http://localhost:3000/api in your browser to view the Swagger UI and interact with the API.

