const config = require('./knexfile').development
const database = require('knex')(config)
function getAll (db=database){
    return db('creatures')
    .join('creature_type' ,'creature_type.type_id', '=', 'creatures.type_id')
    .select()
}
function getCreature (key, db=database ){
    return db('creatures')
    .join('creature_type' ,'creature_type.type_id', '=', 'creatures.type_id')
    .select()
    .where({name: key})
    
}
function getType (key, db=database ){
    return db('creature_type')
    .select()
    // .where({type: key})
    
}
function displaytype (key, db=database ){
    return db('creatures')
    .join('creature_type' ,'creature_type.type_id', '=', 'creatures.type_id')
    .where({type: key})
    
}
function addCreature (newCreature,db=database){
    return db('creatures')
    .insert({name:newCreature.name, aligment:newCreature.aligment, size:newCreature.size, image_url:newCreature.image_url})
}
module.exports = {
    getAll,
    getCreature,
    getType,
    displaytype,
    addCreature
  }