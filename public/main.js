// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth reveal on scroll
const observers = [];
function handleReveal(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-4');
      observer.unobserve(entry.target);
    }
  });
}

const io = new IntersectionObserver(handleReveal, { threshold: 0.15 });

Array.from(document.querySelectorAll('.reveal')).forEach(el => {
  el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700');
  io.observe(el);
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Dummy form handler (replace with RD Station embed later)
const form = document.getElementById('orcamento-form');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formMsg) {
      formMsg.className = 'mt-3 text-green-700 bg-green-50 border border-green-200 rounded-md p-3';
      formMsg.textContent = 'Obrigado! Em breve entraremos em contato. (Substitua por seu formulário do RD Station)';
    }
    form.reset();
  });
}
