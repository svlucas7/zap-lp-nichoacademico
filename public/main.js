// Enhanced Main JavaScript with Advanced Features
// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Scroll Progress Bar
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  if (!scrollProgress) return;
  
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  scrollProgress.style.width = scrollPercent + '%';
}

// Back to Top Button
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  
  function toggleBackToTop() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }
  
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', toggleBackToTop);
}

// Lazy Loading for Images
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.setAttribute('data-loaded', 'true');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Parallax Effect
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  }
  
  window.addEventListener('scroll', updateParallax);
}

// Smooth reveal on scroll - enhanced version
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

// Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered successfully');
      })
      .catch(error => {
        console.log('SW registration failed');
      });
  }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
  // Existing functionality
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
  
  // Initialize new features
  initBackToTop();
  initLazyLoading();
  initParallax();
  registerServiceWorker();
});

// Scroll event listener for progress bar
window.addEventListener('scroll', updateScrollProgress);

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

// Enhanced form submission with loading states
if (form) {
  form.addEventListener('submit', function(e) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = '<span class="inline-flex items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Enviando...</span>';
      
      // Re-enable after a delay (in case of errors)
      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Enviar Solicitação de Orçamento';
      }, 5000);
    }
  });
}
