const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const thisForm = new FormData(form);

  const data = {
    email: thisForm.get('email').trim(),
    password: thisForm.get('password').trim(),
  };

  if (!data.email || !data.password) {
    alert('All form fields must be filled in');
    return;
  }
  console.log(data);
  form.reset();
});
