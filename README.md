## Description

This is server for app, what save banks, transactions and category transactions for user

## Installation

```bash
$ npm install
```

## Running the app
You need a .env faile, what contain information for starting. If you use development mode, youre file should be name ```.develop.env```. And should be name ```.production.env``` for production mode 

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Stack
- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Docker
- Type ORM
- Swagger API docs
## Endpoints
- ```/docs``` for read documentation in this app. Can you read if you want to know about endpoints for CRUD operations
- ```/bank``` get all banks
- ```/bank/:id``` get bank by id
- ```/category``` get all categories
- ```/category/:id``` get category by id
- ```/category/statistics?categoryIds={ids}&fromPeriod={date}&toPeriod={date}``` get transactions statistic
- ```/transactions?page={number}&limit={number}``` get all transactions.
- ```/transactions/:id``` get transaction by id.

## Running app with docker

```bash
docker-compose build
docker-compose up
```
