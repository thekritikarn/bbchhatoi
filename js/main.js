/* ============================================================
   B.B. CHHATOI HIGHER SECONDARY SCHOOL — Main JavaScript
   Interactions, Animations & Dynamic Behaviors
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAVBAR SCROLL EFFECT ──────────────────────────────────
  const navbar = document.querySelector('.navbar');
  const scrollThreshold = 80;

  function handleNavScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run on load

  // ── 2. MOBILE MENU TOGGLE ───────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ── 3. SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ── 4. ACTIVE NAV LINK HIGHLIGHT ────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinksAll = document.querySelectorAll('.nav-links a:not(.nav-cta), .mobile-menu a:not(.nav-cta)');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinksAll.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ── 5. SCROLL REVEAL (Intersection Observer) ─────────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target); // only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── 6. ANIMATED COUNTERS ─────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  function animateCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        counter.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // ── 7. FEE STRUCTURE TABS ───────────────────────────────────
  const feeTabs = document.querySelectorAll('.fee-tab');
  const feeContents = document.querySelectorAll('.fee-content');

  feeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      feeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      feeContents.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('data-content') === target) {
          content.classList.add('active');
        }
      });
    });
  });

  // Fee sub-tabs (Hostel / Day Scholar)
  document.querySelectorAll('.fee-sub-tab').forEach(subTab => {
    subTab.addEventListener('click', () => {
      const parent = subTab.closest('.fee-content');
      const target = subTab.getAttribute('data-subtab');

      parent.querySelectorAll('.fee-sub-tab').forEach(t => t.classList.remove('active'));
      subTab.classList.add('active');

      parent.querySelectorAll('.fee-sub-content').forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('data-subcontent') === target) {
          content.classList.add('active');
        }
      });
    });
  });

  // ── 8. ACCORDION (Rules & Regulations) ──────────────────────
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.accordion-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.accordion-body').style.maxHeight = '0';
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // ── 9. GALLERY LIGHTBOX ──────────────────────────────────────
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox img');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // ── 10. BACK TO TOP BUTTON ───────────────────────────────────
  const backToTop = document.querySelector('.back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── 11. HERO TEXT TYPING / CYCLING ───────────────────────────
  const heroHighlight = document.querySelector('.hero-cycle');
  if (heroHighlight) {
    const words = ['Excellence', 'Leadership', 'Knowledge', 'Success'];
    let wordIndex = 0;

    setInterval(() => {
      heroHighlight.style.opacity = '0';
      heroHighlight.style.transform = 'translateY(10px)';

      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        heroHighlight.textContent = words[wordIndex];
        heroHighlight.style.opacity = '1';
        heroHighlight.style.transform = 'translateY(0)';
      }, 400);
    }, 3000);
  }

  // ── 12. CONTACT FORM HANDLING ────────────────────────────────
  const contactForm = document.querySelector('#inquiry-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple client-side validation
      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = 'var(--error)';
          isValid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (isValid) {
        // Show success message
        const formData = new FormData(contactForm);
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;

        // Simulate submission (replace with real endpoint)
        setTimeout(() => {
          btn.textContent = '✓ Message Sent!';
          btn.style.background = 'var(--success)';
          btn.style.borderColor = 'var(--success)';

          setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = '';
            btn.style.borderColor = '';
            contactForm.reset();
          }, 3000);
        }, 1000);
      }
    });

    // Clear error on input
    contactForm.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => {
        field.style.borderColor = '';
      });
    });
  }

  // ── 13. PARALLAX SUBTLE EFFECT ON HERO ──────────────────────
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
      }
    }, { passive: true });
  }

  // ── 14. EVENTS TICKER DUPLICATION ────────────────────────────
  const tickerInners = document.querySelectorAll('.events-scroll-inner, .ticker-inner');
  tickerInners.forEach(ticker => {
    // Duplicate content for seamless loop
    ticker.innerHTML += ticker.innerHTML;
  });

});
