# Node.js Authentication with RBAC

This is a project developed during the **JStack course**, focusing on implementing an authentication and authorization system using **Node.js** with **RBAC (Role-Based Access Control)**. Throughout the project, we followed best practices in software development, such as **Clean Architecture**, **SOLID principles**, and modular design.

## Features

- User authentication (sign-up, login) with secure password hashing.
- Role-Based Access Control (RBAC) for managing permissions based on user roles.
- Modular design, enabling easy scalability and maintainability.
- Structured following **Clean Architecture** principles to separate concerns and maintain low coupling between components.
- Environment-based configurations for secure and flexible deployment.

## Technologies Used

- **Node.js**
- **TypeScript**
- **Fastify**
- **Prisma** (ORM for database management)
- **JWT** (JSON Web Tokens for authentication)
- **BCrypt** (password hashing)
- **PostgreSQL** (database)

## Project Structure

The project is structured following **Clean Architecture** principles, with clear separation of concerns between the different layers:

- **Domain**: Contains the business logic and entities of the application.
- **Application**: Implements use cases, which interact with the domain layer.
- **Infrastructure**: Handles external dependencies such as the database (via Prisma), third-party APIs, and services.
- **Presentation**: Handles the HTTP layer using Fastify, managing routes, controllers, and middlewares.

### Project Tree

```bash
.
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
├── prisma
│   ├── migrations
│   │   ├── 20240917174113_create_accounts_table
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── src
│   ├── application
│   │   ├── config
│   │   │   └── env.ts
│   │   ├── controllers
│   │   │   ├── ListLeadsController.ts
│   │   │   ├── SignInController.ts
│   │   │   └── SignUpController.ts
│   │   ├── errors
│   │   │   ├── AccountAlreadyExists.ts
│   │   │   └── InvalidCredentials.ts
│   │   ├── interfaces
│   │   │   ├── IController.ts
│   │   │   └── IMiddleware.ts
│   │   ├── libs
│   │   │   └── prismaClient.ts
│   │   ├── middlewares
│   │   │   └── AuthenticationMiddleware.ts
│   │   └── useCases
│   │       ├── SignInUseCase.ts
│   │       └── SignUpUseCase.ts
│   ├── factories
│   │   ├── makeAuthenticationMiddleware.ts
│   │   ├── makeListLeadsController.ts
│   │   ├── makeSignInController.ts
│   │   ├── makeSignInUseCase.ts
│   │   ├── makeSignUpController.ts
│   │   └── makeSignUpUseCase.ts
│   ├── index.ts
│   ├── server
│   │   ├── adapters
│   │   │   ├── middlewareAdapter.ts
│   │   │   └── routeAdapters.ts
│   │   └── index.ts
│   └── @types
│       └── fastify.d.ts
└── tsconfig.json
```

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- [PostgreSQL](https://www.postgresql.org/) (or any SQL database of your choice)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/seu-usuario/nodejs-auth-rbac.git
cd nodejs-auth-rbac
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure the environment variables:

Create a `.env` file in the root directory and add your environment variables. An example `.env.example` is provided for guidance.

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=your_jwt_secret_key
```

4. Run database migrations:

```bash
pnpm prisma migrate dev
```

5. Start the application:

```bash
pnpm run dev
```

## Clean Architecture

This project follows the **Clean Architecture** pattern, ensuring that the business logic remains decoupled from external frameworks and systems. This allows for easy maintenance, scalability, and testability.

The use of **SOLID principles** ensures that the system is modular and adheres to good object-oriented design practices.
