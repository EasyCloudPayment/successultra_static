const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = 'Your request successfully submitted.';
    form.reset();
  });
}
