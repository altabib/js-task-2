const inputText = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputText.addEventListener('input', () => {
  const trimValue = inputText.value.trim();
  spanName.textContent = trimValue === '' ? 'Anonymous' : trimValue;
});

