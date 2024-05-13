## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## main.ts
- boostrap function to start application
- it also has the port on which application will run

## app.controller.ts
- controller api definition

## Prisma
- pnpm i --save-dev prisma@5.3.1
- pnpm prisma init : to initialize prisma in this project
  - it creates prisma folder and schema.prisma file which has database provider and url
- generator client: prisma client will be used.
- data model definition
- migration : sync database with current prisma schema
  - pnpm prisma migrate dev --name init: dev command -> track changes in sql commands
  - pnpm prisma migrate push: without generating sql commands
  - pnpm prisma migrate deploy: for production
  

