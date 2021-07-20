const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let mail = document.getElementById('email').value;

  localStorage.setItem('e-mail', mail);
  localStorage.setItem('name', name);

  document.createElement;
});
