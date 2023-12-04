/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("lists", function (table) {
    table.increments("id").primary();
    table.string("task").notNullable();
    table.integer("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    //.defaultTo(knex.fn.now())　=>insertした際の時間を自動で入れれる
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("lists");
};
