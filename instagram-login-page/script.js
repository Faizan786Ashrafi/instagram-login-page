const form = document.getElementById('login-form');
let users = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Create a new user object
  const user = {
    username: username,
    password: password
  };

  // Add the user object to the users array
  users.push(user);

  // Save the users array to a JSON file
  saveUsers();
});

function saveUsers() {
  const json = JSON.stringify(users, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'users.json';
  a.click();
  URL.revokeObjectURL(url);
}