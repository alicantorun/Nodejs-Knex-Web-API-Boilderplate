const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "nodejs_knex_web_api_db"
  }
});

module.exports = knex;
