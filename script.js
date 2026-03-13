/* =========================================
   BRECHÓ FINA ESTAMPA — script.js
========================================= */

(function () {
  'use strict';

  /* ── NAV: scroll state ── */
  const nav = document.getElementById('nav');

  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ── NAV: mobile hamburger ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  });

  /* ── REVEAL on scroll ── */
  const revealEls = document.querySelectorAll(
    '.section__header, .peca, .sobre__deco, .sobre__text, ' +
    '.novidades__card, .info__block, .mapa, .contato__card, ' +
    '.pagamento, .horarios'
  );

  revealEls.forEach(function (el) {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  /* ── PEÇAS: link to Instagram on click ── */
  document.querySelectorAll('.peca').forEach(function (peca) {
    peca.addEventListener('click', function () {
      window.open('https://www.instagram.com/finaestampa_brecho/', '_blank', 'noopener');
    });
    peca.style.cursor = 'pointer';
  });

  /* ── Stagger reveal for peças grid ── */
  document.querySelectorAll('.peca').forEach(function (peca, i) {
    peca.style.transitionDelay = (i * 0.07) + 's';
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 64;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── WhatsApp float: hide on footer ── */
  const waFloat = document.querySelector('.wa-float');
  const footer  = document.querySelector('.footer');

  if (waFloat && footer) {
    const floatObs = new IntersectionObserver(
      function (entries) {
        waFloat.style.opacity = entries[0].isIntersecting ? '0' : '1';
        waFloat.style.pointerEvents = entries[0].isIntersecting ? 'none' : 'auto';
      },
      { threshold: 0.3 }
    );
    floatObs.observe(footer);
  }

  

})();