
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('creature_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('creature_type').insert([
        {type_id: '20001', type:'Celestial'},
        {type_id: '20002', type:'Demon'},
        {type_id: '20003', type:'Devil'}
      ]);
    });
};
