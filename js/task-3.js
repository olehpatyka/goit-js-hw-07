const inputElem = document.querySelector('#name-input');
const userNameElem = document.querySelector('#name-output');

inputElem.addEventListener('input', () => {
  const newName = inputElem.value.trim();
  userNameElem.textContent = newName || 'Anonymous';
});
