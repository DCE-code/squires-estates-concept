const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.save-button').forEach(button => {
  button.addEventListener('click', () => {
    const saved = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!saved));
    button.textContent = saved ? '♡' : '♥';
    button.setAttribute('aria-label', saved ? 'Save sample property' : 'Remove sample property from saved list');
  });
});

document.querySelector('#property-search')?.addEventListener('submit', event => {
  event.preventDefault();
  const type = document.querySelector('#search-type').value;
  const area = document.querySelector('#search-area').value.trim();
  const property = document.querySelector('#search-property').value;
  const action = type === 'sell' ? 'request a valuation' : `search for ${type === 'rent' ? 'rental' : 'for-sale'} properties`;
  const detail = [area || 'your preferred area', property.toLowerCase()].join(' · ');
  document.querySelector('#search-feedback').textContent = `Prototype interaction: this would ${action} in ${detail}. Live search is not connected.`;
});

document.querySelector('#contact-form')?.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#form-feedback').textContent = 'This is a design prototype. The form is not connected to an inbox and no information has been sent or stored.';
});
