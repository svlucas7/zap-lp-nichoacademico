// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth reveal on scroll
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

// Netlify forms: se houve redirect com ?sucesso=1, mostra confirmação
const params = new URLSearchParams(window.location.search);
const form = document.getElementById('orcamento-form');
const formMsg = document.getElementById('formMsg');
if (params.get('sucesso') === '1' && formMsg) {
  formMsg.className = 'mt-3 text-green-700 bg-green-50 border border-green-200 rounded-md p-3';
  formMsg.textContent = 'Obrigado! Recebemos seu pedido e retornaremos em breve.';
}
// Se quiser usar handler manual (sem Netlify), remova data-netlify do form no HTML e descomente abaixo
// if (form) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (formMsg) {
//       formMsg.className = 'mt-3 text-green-700 bg-green-50 border border-green-200 rounded-md p-3';
//       formMsg.textContent = 'Obrigado! Em breve entraremos em contato.';
//     }
//     form.reset();
//   });
// }

// Image fallback: aplica a todas as imagens externas que falharem
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    const isExternal = /^https?:\/\//.test(img.src);
    if (isExternal) {
      const w = img.getAttribute('width') || 1200;
      const h = img.getAttribute('height') || 650;
      const place = `https://placehold.co/${w}x${h}?text=Imagem+indispon%C3%ADvel`;
      img.addEventListener('error', () => {
        if (!img.dataset.fallbackApplied) {
          img.dataset.fallbackApplied = '1';
          img.src = place;
        }
      }, { once: true });
    }
  });
});
