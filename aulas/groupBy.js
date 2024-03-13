const users = [
  { name: 'Marcos', role: 'Admin' },
  { name: 'Cintia', role: 'Admin' },
  { name: 'Carol', role: 'Reader' },
  { name: 'Diego', role: 'Admin' }
];

const group = Object.groupBy(users, ({ role }) => role);

console.log(group);
