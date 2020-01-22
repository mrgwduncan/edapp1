
exports.seed = function(knex) {
  return knex('creatures').del()
    .then(function () {
      return knex('creatures').insert([
        {name: 'Planetar', aligment: 'Lawful Good', size:'Large', type_id:20001 , image_url:'./images/planetar.png'},
        {name: 'Glabrezu', aligment: 'Chaotic Evil', size:'Large', type_id:20002, image_url:'./images/glabrezu.jpg'},
        {name: 'Pit Fiend', aligment: 'Lawful Evil', size:'Large', type_id:20003, image_url:'./images/pitfiend.jpg'},
      ]);
    });
};
