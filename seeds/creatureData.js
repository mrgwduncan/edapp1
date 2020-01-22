
exports.seed = function(knex) {
  return knex('creatures').del()
    .then(function () {
      return knex('creatures').insert([
        {name: 'Planetar', aligment: 'Lawful Good', size:'Large', type_id:20001 , image_url:'/images/planetar.png',str:24, dex:20, con:24, int:19, wis:22, cha:25, hp:200, ac:19,},
        {name: 'Glabrezu', aligment: 'Chaotic Evil', size:'Large', type_id:20002, image_url:'/images/glabrezu.jpg',str:20, dex:15, con:21, int:19, wis:17, cha:16, hp:157, ac:17,},
        {name: 'Pit Fiend', aligment: 'Lawful Evil', size:'Large', type_id:20003, image_url:'/images/pitfiend.jpg',str:26, dex:14, con:24, int:22, wis:18, cha:24, hp:300, ac:19,},
      ]);
    });
};
