exports.up = function(knex) {
    return knex.schema.createTable('creatures', table => {
        table.increments('id')
        table.string('name')
        table.string('aligment')
        table.string('size')
        table.string('type_id')
        table.string('image_url')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('creatures')
  };