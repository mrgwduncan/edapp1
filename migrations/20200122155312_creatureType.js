exports.up = function(knex) {
    return knex.schema.createTable('creature_type', table => {
        table.increments('id')
        table.integer('type_id')
        table.string('type')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('creature_type')
  };