# koaPractice

### Environment

* Node.js version - >=16
* docker

### Run project

* run <code>npm install</code>
* run <code>npm run build</code> and <code>npm start </code> to run project
* run <code>npm run dev</code> to run dev mode

### Test

* <code>test:migrate</code> run migrations for test database (same as app but delete all nodes before tests)
* <code>test:migrate:rollback</code> rollback migrations in test db
* <code> npm run test</code> run tests
* <code> npm run test:coverage</code> check test coverage

### Migration commands

IMPORTANT: without --database migrations log will be saved to default db

* <code> npm run neo4j:migrate:run -- --database [dbname]</code> run all migrations
* <code> index=[number] npm run neo4j:migrate:rollback -- --database [dbname]</code> rollback migration
* <code> Index=zero npm run neo4j:migrate:rollback:all -- --database [dbname]</code> rollback all migrations

### Env file variables

| Variable                | Default value | Comment                    |
|-------------------------|:-------------:|----------------------------|
| PORT                    |     3000      |                            |
| HOST                    |   localhost   |                            |
| TOKEN_EXPIRE_TIME       |      1d       | JWT token expiration time  |