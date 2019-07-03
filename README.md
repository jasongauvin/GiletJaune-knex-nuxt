# yellow-book

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### Install the DB

We are using postgres for our database.
First you have to create the db, you can do it with the following command: 
```
createdb yellow-book
```

Once it's done you have to run migrations in order to have your tables created:
```
knex migrate:latest
```

## Export the DB

```
pg_dump yellow-book > dbexport.pgsql
```

## Import the DB

```
psql yellow-book < dbexport.pgsql
```

---
## API

Our routes are availables on the `/api` route.

|route       |description                            |
|------------|---------------------------------------|
|`/stickers`    |The steps of the doc                   |