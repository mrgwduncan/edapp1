const config = require('./knexfile').development
const database = require('knex')(config)
function getAll (db=database){
    return db('creatures').select()
}
function getCreature (key, db=database ){
    return db('creatures')
    .join('creature_type' ,'creature_type.type_id', '=', 'creatures.type_id')
    .select()
    .where({name: key})
    
}
module.exports = {
    getAll,
    getCreature
  }