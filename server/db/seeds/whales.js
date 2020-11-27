
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('whales').del()
    .then(function () {
      // Inserts seed entries
      return knex('whales').insert([
        {id: 1, name: 'Dolphin 1'},
        {id: 2, name: 'Humpback'},
        {id: 3, name: 'Dolphin 2'}
      ]);
    });
};
