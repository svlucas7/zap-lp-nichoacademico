// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth reveal on scroll - versão simplificada e confiável
function handleReveal(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}

const revealObserver = new IntersectionObserver(handleReveal, { 
  threshold: 0.1,
  rootMargin: '50px 0px -50px 0px'
});

// Apply reveal animation to all elements with .reveal class
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
  
  // Timer de segurança: após 3 segundos, revela todos os elementos não revelados
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      el.classList.add('revealed');
    });
  }, 3000);
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Netlify forms: se houve redirect com ?sucesso=1, mostra confirmação
const params = new URLSearchParams(window.location.search);
const form = document.getElementById('orcamento-form');
const formMsg = document.getElementById('formMsg');

if (params.get('sucesso') === '1' && formMsg) {
  formMsg.className = 'mt-6 text-center text-zapGreen bg-zapGreen/10 border border-zapGreen/20 rounded-xl p-4';
  formMsg.textContent = '✅ Obrigado! Recebemos seu pedido e retornaremos em breve.';
  formMsg.classList.remove('hidden');
}

// Smooth scroll enhancement for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = 80; // Height of fixed header
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});

// Enhanced card hover effects
document.querySelectorAll('.card-hover').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Add loading states to form submission
if (form) {
  form.addEventListener('submit', function(e) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = 'Enviando...';
      
      // Re-enable after a delay (in case of errors)
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Enviar Solicitação de Orçamento';
      }, 5000);
    }
  });
}
