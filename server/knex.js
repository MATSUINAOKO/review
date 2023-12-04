const config = require("./knexfile");
require("dotenv").config(); //.envを使えるようにする
const knex = require("knex")(config[process.env.NODE_ENV]); //.envに記載されているNODE_ENVの中身が入る

module.exports = knex;
