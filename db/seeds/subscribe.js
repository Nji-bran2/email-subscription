exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('subscribe').del();
  await knex('subscribe').insert([
    {
      email: 'blessedsonlove@gmail.com'
    }
  ]);
};