## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production, test and launch server
$ npm run build
$ npm test
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## DB

soon available

### Install the DB

We are using postgres for our database.
First you have to create the db, you can do it with the following command: 
```
createdb cjs-web-store
```

Once it's done you have to run migrations in order to have your tables created:
```
knex migrate:latest
```

## Export the DB

```
pg_dump cjs-web-store > dbexport.pgsql
```

## Import the DB

```
psql cjs-web-store < dbexport.pgsql
```

---
## API

Our routes are availables on the `/api` route.

|route       |description                            |
|------------|---------------------------------------|
|`/stickers`    |The stickers of the doc                   |
