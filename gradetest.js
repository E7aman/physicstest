const brTags = document.querySelectorAll('br');

for (let i = 1; i < brTags.length; i += 2) {
  brTags[i].remove();
}

const labels = document.querySelectorAll('label');

labels.forEach((label) => {
  label.removeAttribute('for');
});

const inputs = document.querySelectorAll('input:not([id="sub"])');

inputs.forEach((input) => {
  input.classList.add('radio');
  const fakeSpan = document.createElement('span');
  fakeSpan.classList.add('fake');
  input.parentNode.insertBefore(fakeSpan, input);
});