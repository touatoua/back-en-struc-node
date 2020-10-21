
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('branch_tbl').del()
    .then(function () {
      // Inserts seed entries
      return knex('branch_tbl').insert([
        { branch_id: 1, branch_name: 'Toyota PS Enterprise' },
        { branch_id: 2, branch_name: 'Toyota PS ลำลูกกา' },
      ]);
    });
};
