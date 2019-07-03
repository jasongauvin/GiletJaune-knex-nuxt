// Update with your config settings.
// listing des db

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/yellow-book'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-yellow-book'
  }
};
