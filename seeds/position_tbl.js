
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('position_tbl').del()
    .then(function () {
      // Inserts seed entries
      return knex('position_tbl').insert([
        { positon_name: 'Sale' },
        { positon_name: 'Manager' },
        { positon_name: 'Director' },
        { positon_name: 'General manager' },
        { positon_name: 'Manager Director' },
        { positon_name: 'Accounting' },
        { positon_name: 'Admin' },
      ]);
    });
};
