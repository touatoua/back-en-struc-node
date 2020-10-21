
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workflow_tbl').del()
    .then(function () {
      // Inserts seed entries
      return knex('workflow_tbl').insert([
        { workflow_name: 'requester' },
        { workflow_name: 'reviewer' },
        { workflow_name: 'approve manager' },
        { workflow_name: 'approve director' },
        { workflow_name: 'approve general manager' },
        { workflow_name: 'approve manager director' },
        { workflow_name: 'finance cashier' },
        { workflow_name: 'อนุมัติ leasing' },
        { workflow_name: 'ทำจอง' },
        { workflow_name: 'จับคู่รถ' },
        { workflow_name: 'รถถึงผู้แทน' },
        { workflow_name: 'กำลังติดตั้งอุปกรณ์' },
        { workflow_name: 'ติดตั้งอุปกรณ์เรียบร้อย' },
      ]);
    });
};
