exports.up = function(knex) {
    return knex.schema.createTable('creatures', table => {
        table.increments('id')
        table.string('name')
        table.string('aligment')
        table.string('size')
        table.string('type_id')
        table.string('image_url')
        table.integer('str')
        table.integer('dex')
        table.integer('con')
        table.integer('int')
        table.integer('wis')
        table.integer('cha')
        table.integer('hp')
        table.integer('ac')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('creatures')
  };