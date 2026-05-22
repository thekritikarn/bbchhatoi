"use client";
import { useEffect } from 'react';
import parse from 'html-react-parser';

export default function Home() {
  useEffect(() => {
    /* ============================================================
    B.B. CHHATOI HIGHER SECONDARY SCHOOL — Main JavaScript
    Interactions, Animations & Dynamic Behaviors
    ============================================================ */

    // ── 2. STICKY NAVBAR ON SCROLL ───────────────────────────────
    const navbar = document.getElementById('navbar');
    const eventsBar = document.querySelector('.events-bar');
    
    function handleNavScroll() {
      if (!navbar) return;
      const scrollThreshold = eventsBar ? eventsBar.offsetHeight : 40;
      
      if (window.scrollY >= scrollThreshold) {
        if (!navbar.classList.contains('scrolled')) {
          navbar.classList.add('scrolled');
        }
      } else {
        if (navbar.classList.contains('scrolled')) {
          navbar.classList.remove('scrolled');
        }
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
          const navHeight = navbar ? navbar.offsetHeight : 80;
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

    function closeLightbox() {
      if (lightbox) lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function handleEscapeKey(e) {
      if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    }

    if (lightbox) {
      galleryItems.forEach(item => {
        item.addEventListener('click', () => {
          const img = item.querySelector('img');
          if (lightboxImg && img) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
          }
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      });

      lightboxClose?.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', handleEscapeKey);
    }

    // ── 10. BACK TO TOP BUTTON ───────────────────────────────────
    const backToTop = document.querySelector('.back-to-top');

    function handleBackToTopScroll() {
      if (!backToTop) return;
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    if (backToTop) {
      window.addEventListener('scroll', handleBackToTopScroll, { passive: true });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // ── 11. HERO TEXT TYPING / CYCLING ───────────────────────────
    const heroHighlight = document.querySelector('.hero-cycle');
    let cycleInterval;
    if (heroHighlight) {
      const words = ['Excellence', 'Leadership', 'Knowledge', 'Success'];
      let wordIndex = 0;

      cycleInterval = setInterval(() => {
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
    function handleHeroParallax() {
      if (!heroBg) return;
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
      }
    }
    if (heroBg && window.innerWidth > 768) {
      window.addEventListener('scroll', handleHeroParallax, { passive: true });
    }

    // ── 14. EVENTS TICKER DUPLICATION ────────────────────────────
    const tickerInners = document.querySelectorAll('.events-scroll-inner, .ticker-inner');
    tickerInners.forEach(ticker => {
      // Duplicate content for seamless loop
      if (!ticker.dataset.duplicated) {
        ticker.innerHTML += ticker.innerHTML;
        ticker.dataset.duplicated = 'true';
      }
    });

    // Cleanup functions
    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('scroll', updateActiveNav);
      window.removeEventListener('scroll', handleBackToTopScroll);
      window.removeEventListener('scroll', handleHeroParallax);
      document.removeEventListener('keydown', handleEscapeKey);
      revealObserver.disconnect();
      counterObserver.disconnect();
      if (cycleInterval) clearInterval(cycleInterval);
    };
  }, []);

  const htmlContent = `

  <!-- ============================================================
       TOP EVENTS BAR
       ============================================================ -->
  <div class="events-bar">
    <div class="container">
      <div class="events-label">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        Announcements
      </div>
      <div class="events-scroll">
        <div class="events-scroll-inner">
          <span>Admission Open for 2026-27 Academic Session — Apply Now!</span>
          <span>+2 Science & +2 Arts under CHSE, Odisha</span>
          <span>Hostel & Transport Facilities Available</span>
          <span>Special Support for Economically Weak Students</span>
          <span>NEET & OJEE Competitive Exam Preparation</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ============================================================
       NAVIGATION
       ============================================================ -->
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="#home" class="nav-logo" aria-label="B.B. Chhatoi Higher Secondary School — Home">
        <img src="/assets/images/logo.jpg" alt="B.B. Chhatoi HSS Logo" width="48" height="48">
        <div class="nav-logo-text">
          <h1>B.B. Chhatoi Higher Secondary School</h1>
          <span>(Under Moon Light Charitable Trust)</span>
        </div>
      </a>

      <div class="nav-links">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#fees">Fees</a>
        <a href="#admission">Admission</a>
        <a href="#facilities">Facilities</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="#admission" class="nav-cta">Apply Now</a>
      </div>

      <button class="nav-toggle" aria-label="Toggle navigation menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#courses">Courses</a>
    <a href="#fees">Fees</a>
    <a href="#admission">Admission</a>
    <a href="#facilities">Facilities</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
    <a href="#admission" class="btn btn-primary" style="margin-top: 1rem;">Apply Now</a>
  </div>

  <!-- ============================================================
       HERO SECTION
       ============================================================ -->
  <section class="hero" id="home">
    <div class="hero-bg">
      <img src="/assets/images/hero-campus.png" alt="B.B. Chhatoi Higher Secondary School Campus" width="1920" height="1080">
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-pattern"></div>

    <!-- Decorative elements -->
    <div class="hero-decor hero-decor-1"></div>
    <div class="hero-decor hero-decor-2"></div>
    <div class="hero-decor hero-decor-3"></div>

    <div class="container">
      <div class="hero-content">

        <h1>Nurturing <span class="highlight hero-cycle" style="transition: opacity 0.4s ease, transform 0.4s ease;">Excellence</span>,<br>
        Growing Future Leaders</h1>

        <p class="hero-subtitle">
          Education should not be restricted by money. We provide quality +2 Science & Arts education under CHSE, Odisha — empowering rural and tribal students with affordable, career-oriented learning.
        </p>

        <div class="hero-actions">
          <a href="#admission" class="btn btn-primary btn-lg">
            Apply for Admission 2026-27
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#courses" class="btn btn-outline btn-lg">
            Explore Courses
          </a>
        </div>

        <div class="hero-stats">
          <div class="hero-stat">
            <div class="number" data-count="500" data-suffix="+">0</div>
            <div class="label">Students Enrolled</div>
          </div>
          <div class="hero-stat">
            <div class="number" data-count="15" data-suffix="+">0</div>
            <div class="label">Expert Faculty</div>
          </div>
          <div class="hero-stat">
            <div class="number" data-count="2" data-suffix="">0</div>
            <div class="label">Academic Streams</div>
          </div>
          <div class="hero-stat">
            <div class="number" data-count="15" data-suffix="+">0</div>
            <div class="label">Years of Trust</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       ABOUT SECTION
       ============================================================ -->
  <section class="section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image reveal-left">
          <img src="/assets/images/hero-campus.png" alt="B.B. Chhatoi Higher Secondary School Campus" width="600" height="400">
          <div class="about-image-badge">Est. under MLCT (Regd. No. 48/09)</div>
        </div>
        <div class="about-content reveal-right">
          <span class="section-label">About Our Institution</span>
          <h2 class="section-title">B.B. Chhatoi Higher Secondary School</h2>
          <p>
            Named after the visionary <strong>Late Shri Bhramarbar Chhatoi</strong>, our institution stands as a beacon of educational empowerment in the tribal belt of Nabarangpur, Odisha. Operating under the <strong>Moon Light Charitable Trust</strong>, we are committed to providing quality education that is accessible to all, regardless of financial background.
          </p>
          <p>
            We offer +2 Science and +2 Arts programs affiliated to the <strong>Council of Higher Secondary Education (CHSE), Odisha</strong>, with dedicated support for competitive examinations including NEET and OJEE. Our mission is simple — equal education opportunities for every student.
          </p>

          <div class="recognition-badges">
            <div class="recognition-badge">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              CHSE Odisha
            </div>
            <div class="recognition-badge">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              SAMS Odisha
            </div>
            <div class="recognition-badge">
              <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              Director of HS Education
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       FOUNDER TRIBUTE
       ============================================================ -->
  <section class="section founder-section">
    <div class="container">
      <div class="founder-content reveal">
        <span class="section-label" style="color: var(--gold-light);">Founder's Vision</span>
        <div class="founder-quote">
          Education is the most powerful tool for service to mankind. Every student, regardless of economic status, deserves access to quality learning. Our mission is to empower the tribal and rural youth of Odisha through education, creating employment opportunities and building a brighter future.
        </div>
        <div class="founder-divider"></div>
        <div class="founder-name">Late Shri Bhramarbar Chhatoi</div>
        <div class="founder-title">Founder — Moon Light Charitable Trust</div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       WHY CHOOSE US
       ============================================================ -->
  <section class="section section-alt" id="why-us">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Why Choose Us</span>
        <h2 class="section-title">What Makes Us Different</h2>
        <p class="section-subtitle">We combine academic excellence with a deep commitment to accessible education, creating a nurturing environment where every student can thrive.</p>
      </div>

      <div class="usp-grid reveal-stagger">
        <!-- Card 1 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <h4 class="card-title">Quality Education</h4>
          <p class="card-text">Rigorous CHSE Odisha curriculum delivered by experienced faculty with a focus on conceptual understanding.</p>
        </div>

        <!-- Card 2 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
          </div>
          <h4 class="card-title">Skill-Based Learning</h4>
          <p class="card-text">Activity-based education approach that develops practical skills alongside academic knowledge.</p>
        </div>

        <!-- Card 3 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          </div>
          <h4 class="card-title">Competitive Exam Prep</h4>
          <p class="card-text">Dedicated coaching for NEET, OJEE, and other competitive examinations alongside regular classes.</p>
        </div>

        <!-- Card 4 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <h4 class="card-title">Affordable & Inclusive</h4>
          <p class="card-text">Education based on guardian's financial capability. Special support for orphans, economically weaker sections, and tribal students.</p>
        </div>

        <!-- Card 5 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
          </div>
          <h4 class="card-title">Hostel Facility</h4>
          <p class="card-text">Separate hostel accommodation with food arrangement for outstation students at affordable rates.</p>
        </div>

        <!-- Card 6 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <h4 class="card-title">Career-Oriented</h4>
          <p class="card-text">Focus on career guidance and employment-oriented education to prepare students for future success.</p>
        </div>

        <!-- Card 7 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
          </div>
          <h4 class="card-title">Academic Discipline</h4>
          <p class="card-text">Structured learning environment with regular internal tests, examinations, and academic monitoring systems.</p>
        </div>

        <!-- Card 8 -->
        <div class="card">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          </div>
          <h4 class="card-title">Transport Facility</h4>
          <p class="card-text">Convenient transport arrangements available to ensure safe and easy commute for day scholars.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       COURSES OFFERED
       ============================================================ -->
  <section class="section" id="courses">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Academic Programs</span>
        <h2 class="section-title">Courses Offered</h2>
        <p class="section-subtitle">Choose from our two comprehensive streams under the Council of Higher Secondary Education (CHSE), Odisha.</p>
      </div>

      <div class="course-cards reveal">
        <!-- +2 Science -->
        <div class="course-card">
          <div class="course-card-image">
            <img src="/assets/images/science-lab.png" alt="Science Laboratory at B.B. Chhatoi HSS" width="600" height="400">
            <div class="course-card-badge">+2 Science</div>
          </div>
          <div class="course-card-body">
            <h3>+2 Science</h3>
            <p style="color: var(--text-muted); margin-bottom: 0.75rem;">Comprehensive science education with focus on Physics, Chemistry, Biology/Mathematics and practical laboratory experience.</p>

            <div class="course-meta">
              <div class="course-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                2 Years Duration
              </div>
              <div class="course-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                Under CHSE, Odisha
              </div>
            </div>

            <div class="course-features">
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Physics, Chemistry, Biology / Mathematics
              </div>
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                NEET & OJEE Preparation Support
              </div>
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Modern Laboratory Facilities
              </div>
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Hostel Available — ₹80,000/year (with hostel)
              </div>
            </div>

            <a href="#fees" class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;">View Fee Structure →</a>
          </div>
        </div>

        <!-- +2 Arts -->
        <div class="course-card">
          <div class="course-card-image">
            <img src="/assets/images/arts-classroom.png" alt="Arts Classroom at B.B. Chhatoi HSS" width="600" height="400">
            <div class="course-card-badge">+2 Arts</div>
          </div>
          <div class="course-card-body">
            <h3>+2 Arts</h3>
            <p style="color: var(--text-muted); margin-bottom: 0.75rem;">Broad-based humanities and social science education fostering critical thinking, creativity, and cultural awareness.</p>

            <div class="course-meta">
              <div class="course-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                2 Years Duration
              </div>
              <div class="course-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                Under CHSE, Odisha
              </div>
            </div>

            <div class="course-features">
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                History, Political Science, Economics, Sociology
              </div>
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Competitive Exam Guidance
              </div>
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Activity-Based Learning Environment
              </div>
              <div class="course-feature">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                Hostel Available — ₹50,000/year (with hostel)
              </div>
            </div>

            <a href="#fees" class="btn btn-secondary btn-sm" style="margin-top: 0.5rem;">View Fee Structure →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       FEE STRUCTURE
       ============================================================ -->
  <section class="section section-alt" id="fees">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Fee Structure</span>
        <h2 class="section-title">Transparent & Affordable Fees</h2>
        <p class="section-subtitle">We believe education should not be restricted by money. Our fee structure is designed to be transparent and affordable.</p>
      </div>

      <!-- Course Tabs -->
      <div class="fee-tabs reveal">
        <button class="fee-tab active" data-tab="science">+2 Science</button>
        <button class="fee-tab" data-tab="arts">+2 Arts</button>
      </div>

      <!-- +2 Science Fees -->
      <div class="fee-content active reveal" data-content="science">
        <div class="fee-sub-tabs">
          <button class="fee-sub-tab active" data-subtab="science-hostel">With Hostel</button>
          <button class="fee-sub-tab" data-subtab="science-day">Day Scholar</button>
        </div>

        <!-- Science - With Hostel -->
        <div class="fee-sub-content active" data-subcontent="science-hostel">
          <div class="fee-table-wrapper">
            <table class="fee-table">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission Fee</td>
                  <td class="fee-amount">₹10,000</td>
                </tr>
                <tr>
                  <td>Tuition & Lab Fee</td>
                  <td class="fee-amount">₹30,000</td>
                </tr>
                <tr>
                  <td>Campus Examination & Activity Fee</td>
                  <td class="fee-amount">₹2,500</td>
                </tr>
                <tr>
                  <td>Hostel Fee</td>
                  <td class="fee-amount">₹37,500</td>
                </tr>
                <tr class="fee-total">
                  <td><strong>Total Payable</strong></td>
                  <td class="fee-amount"><strong>₹80,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Science - Day Scholar -->
        <div class="fee-sub-content" data-subcontent="science-day">
          <div class="fee-table-wrapper">
            <table class="fee-table">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission Fee</td>
                  <td class="fee-amount">₹10,000</td>
                </tr>
                <tr>
                  <td>Tuition & Lab Fee</td>
                  <td class="fee-amount">₹30,000</td>
                </tr>
                <tr>
                  <td>Campus Examination & Activity Fee</td>
                  <td class="fee-amount">₹5,000</td>
                </tr>
                <tr>
                  <td>Hostel Fee</td>
                  <td class="fee-amount" style="color: var(--text-light);">Not Applicable</td>
                </tr>
                <tr class="fee-total">
                  <td><strong>Total Payable</strong></td>
                  <td class="fee-amount"><strong>₹45,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- +2 Arts Fees -->
      <div class="fee-content" data-content="arts">
        <div class="fee-sub-tabs">
          <button class="fee-sub-tab active" data-subtab="arts-hostel">With Hostel</button>
          <button class="fee-sub-tab" data-subtab="arts-day">Day Scholar</button>
        </div>

        <!-- Arts - With Hostel -->
        <div class="fee-sub-content active" data-subcontent="arts-hostel">
          <div class="fee-table-wrapper">
            <table class="fee-table">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission Fee</td>
                  <td class="fee-amount">₹5,000</td>
                </tr>
                <tr>
                  <td>Tuition & Lab Fee</td>
                  <td class="fee-amount">₹5,000</td>
                </tr>
                <tr>
                  <td>Campus Examination & Activity Fee</td>
                  <td class="fee-amount">₹2,500</td>
                </tr>
                <tr>
                  <td>Hostel Fee</td>
                  <td class="fee-amount">₹37,500</td>
                </tr>
                <tr class="fee-total">
                  <td><strong>Total Payable</strong></td>
                  <td class="fee-amount"><strong>₹50,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Arts - Day Scholar -->
        <div class="fee-sub-content" data-subcontent="arts-day">
          <div class="fee-table-wrapper">
            <table class="fee-table">
              <thead>
                <tr>
                  <th>Particular</th>
                  <th>Amount (Per Year)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission Fee</td>
                  <td class="fee-amount">₹5,000</td>
                </tr>
                <tr>
                  <td>Tuition & Lab Fee</td>
                  <td class="fee-amount">₹5,000</td>
                </tr>
                <tr>
                  <td>Campus Examination & Activity Fee</td>
                  <td class="fee-amount">₹2,500</td>
                </tr>
                <tr>
                  <td>Hostel Fee</td>
                  <td class="fee-amount" style="color: var(--text-light);">Not Applicable</td>
                </tr>
                <tr class="fee-total">
                  <td><strong>Total Payable</strong></td>
                  <td class="fee-amount"><strong>₹12,500</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p class="text-center reveal" style="margin-top: var(--space-xl); color: var(--text-light); font-size: 0.875rem;">
        * Fees are applicable per academic year. Fees once paid are non-refundable. Fee concessions available for eligible students — contact the office for details.
      </p>
    </div>
  </section>

  <!-- ============================================================
       ADMISSION SECTION
       ============================================================ -->
  <section class="section" id="admission">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Admission 2026-27</span>
        <h2 class="section-title">Admission Process</h2>
        <p class="section-subtitle">Follow these simple steps to secure your admission to B.B. Chhatoi Higher Secondary School.</p>
      </div>

      <!-- Timeline -->
      <div class="admission-timeline reveal">
        <div class="timeline-step">
          <div class="timeline-dot">1</div>
          <div class="timeline-content">
            <h4>Apply through SAMS Odisha</h4>
            <p>Complete the SAMS (Student Academic Management System) online application for +2 admission in Odisha.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot">2</div>
          <div class="timeline-content">
            <h4>Receive Allotment</h4>
            <p>Get your Govt. Counselling Allotment Card from SAMS after the merit-based selection process.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot">3</div>
          <div class="timeline-content">
            <h4>Submit Documents</h4>
            <p>Visit the campus with all required original documents and the SAMS allotment card for verification.</p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot">4</div>
          <div class="timeline-content">
            <h4>Pay Fees & Complete Admission</h4>
            <p>Pay the applicable fees, complete the admission form, and finalize enrollment. Welcome to B.B. Chhatoi HSS!</p>
          </div>
        </div>
      </div>

      <!-- Required Documents -->
      <div class="documents-wrapper reveal">
        <h3 class="text-center" style="margin-bottom: var(--space-xl); color: var(--primary);">Required Documents</h3>
        <div class="documents-grid reveal-stagger">
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            10th Board Certificate & Marksheet (Original)
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Migration Certificate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            SLC / CLC & Conduct Certificate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Medical Fitness Certificate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Govt. Counselling Allotment Card
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Caste Certificate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Resident Certificate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Income Certificate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Aadhaar Card of Candidate
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Passport Size Photographs
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Bank Passbook with Aadhaar Seeding
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Aadhaar of Parents / Local Guardian
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Parent & Guardian Photos
          </div>
          <div class="doc-item">
            <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            Other Form-C Documents
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       FACILITIES
       ============================================================ -->
  <section class="section section-alt" id="facilities">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Campus Facilities</span>
        <h2 class="section-title">Everything You Need to Succeed</h2>
        <p class="section-subtitle">Our campus is equipped with modern facilities to ensure a comfortable and productive learning experience.</p>
      </div>

      <div class="facilities-grid reveal-stagger">
        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <h4>Hostel</h4>
          <p>Separate hostel with safe accommodation</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
          </div>
          <h4>Transport</h4>
          <p>Convenient transport arrangements</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <h4>Science Labs</h4>
          <p>Modern laboratory equipment</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          </div>
          <h4>Library</h4>
          <p>Reference books & study materials</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 003 16.5v-9C3 6.12 4.12 5 5.5 5S8 6.12 8 7.5V12m13 3.546V9"/><path d="M12 12H8"/></svg>
          </div>
          <h4>Fooding</h4>
          <p>Quality food arrangement available</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          </div>
          <h4>Exam Prep</h4>
          <p>NEET & OJEE coaching support</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          </div>
          <h4>Academic Monitoring</h4>
          <p>Regular tests & internal exams</p>
        </div>

        <div class="facility-card">
          <div class="facility-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/></svg>
          </div>
          <h4>Cultural Activities</h4>
          <p>Events, programs & celebrations</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       STUDENT SUPPORT & SCHOLARSHIPS
       ============================================================ -->
  <section class="section" id="support">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Student Support</span>
        <h2 class="section-title">Supporting Those Who Need It Most</h2>
        <p class="section-subtitle">We provide special consideration and support for students from underprivileged backgrounds. Education is a right, not a privilege.</p>
      </div>

      <div class="support-cards reveal-stagger">
        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <h4>Orphan Students</h4>
          <p>Special support for students without parents</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h4>Economically Weak</h4>
          <p>Fee concessions based on financial status</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <h4>Single Guardians</h4>
          <p>Support for widows & single parent families</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
          </div>
          <h4>Merit Scholars (90%+)</h4>
          <p>Rewarding academic excellence</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <h4>Tribal Students</h4>
          <p>Empowering tribal belt education</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <h4>Physically Challenged</h4>
          <p>Accessible education for all abilities</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <h4>Helpless Families</h4>
          <p>Comprehensive support for dependent families</p>
        </div>

        <div class="support-card">
          <div class="support-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <h4>Guardian Support</h4>
          <p>Local guardian system for outstation students</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       RULES & REGULATIONS
       ============================================================ -->
  <section class="section section-alt" id="rules">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Guidelines</span>
        <h2 class="section-title">Rules & Regulations</h2>
        <p class="section-subtitle">Maintaining discipline and academic integrity for a productive learning environment.</p>
      </div>

      <div class="accordion reveal">
        <div class="accordion-item">
          <button class="accordion-header">
            Student Responsibilities
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="accordion-body">
            <div class="accordion-body-inner">
              <ul>
                <li>Maintain discipline and decorum at all times on campus</li>
                <li>Attend all examinations, internal tests, and academic activities</li>
                <li>Participate actively in campus activities and events</li>
                <li>Maintain hygiene and cleanliness in classrooms, hostels, and campus</li>
                <li>Follow all institutional rules and regulations without exception</li>
                <li>Respect faculty, staff, and fellow students</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            Institutional Policies
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="accordion-body">
            <div class="accordion-body-inner">
              <ul>
                <li>Fees once paid are non-refundable under any circumstances</li>
                <li>Original certificates may remain deposited with the institution during the course</li>
                <li>Misconduct, indiscipline, or violation of rules may lead to removal or rustication</li>
                <li>Any damage to institutional property must be compensated by the student/guardian</li>
                <li>Providing false or misleading information can lead to cancellation of admission</li>
                <li>The institution's decision on disciplinary matters shall be final</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            Local Guardian Requirements
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="accordion-body">
            <div class="accordion-body-inner">
              <ul>
                <li>A local guardian undertaking form must be submitted at the time of admission</li>
                <li>Parent authorization is required for local guardian designation</li>
                <li>The local guardian assumes discipline responsibility during the study period</li>
                <li>Guardian must be available for parent-teacher meetings and emergencies</li>
                <li>Change of local guardian requires prior written approval from the institution</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header">
            Academic Requirements
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="accordion-body">
            <div class="accordion-body-inner">
              <ul>
                <li>Minimum 75% attendance is mandatory for appearing in examinations</li>
                <li>All internal tests and evaluations are compulsory</li>
                <li>Students must complete all assignments and practical work on time</li>
                <li>Academic progress is monitored regularly and reported to parents/guardians</li>
                <li>Students scoring below minimum grades may be given additional support or counseling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       GALLERY
       ============================================================ -->
  <section class="section" id="gallery">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Campus Life</span>
        <h2 class="section-title">Life at B.B. Chhatoi HSS</h2>
        <p class="section-subtitle">A glimpse into our vibrant campus, academic activities, and student life.</p>
      </div>

      <div class="gallery-grid reveal">
        <div class="gallery-item">
          <img src="/assets/images/hero-campus.png" alt="B.B. Chhatoi HSS Campus Building" width="600" height="400">
          <div class="gallery-overlay"><span>Our Campus</span></div>
        </div>
        <div class="gallery-item">
          <img src="/assets/images/science-lab.png" alt="Students in Science Laboratory" width="600" height="400">
          <div class="gallery-overlay"><span>Science Laboratory</span></div>
        </div>
        <div class="gallery-item">
          <img src="/assets/images/arts-classroom.png" alt="Arts Classroom Session" width="600" height="400">
          <div class="gallery-overlay"><span>Classroom Learning</span></div>
        </div>
        <div class="gallery-item">
          <img src="/assets/images/hostel.png" alt="Student Hostel Building" width="600" height="400">
          <div class="gallery-overlay"><span>Hostel Facility</span></div>
        </div>
        <div class="gallery-item">
          <img src="/assets/images/sports.png" alt="Students Playing Sports" width="600" height="400">
          <div class="gallery-overlay"><span>Sports Activities</span></div>
        </div>
        <div class="gallery-item">
          <img src="/assets/images/cultural.png" alt="Cultural Program Performance" width="600" height="400">
          <div class="gallery-overlay"><span>Cultural Events</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div class="lightbox" role="dialog" aria-label="Image lightbox">
    <button class="lightbox-close" aria-label="Close lightbox">✕</button>
    <img src="" alt="Enlarged gallery image">
  </div>

  <!-- ============================================================
       CTA BANNER
       ============================================================ -->
  <section class="section cta-banner">
    <div class="container">
      <div class="cta-content reveal">
        <h2>Ready to Begin Your Journey?</h2>
        <p>Applications for the 2026-27 academic session are now open. Take the first step toward a brighter future with B.B. Chhatoi Higher Secondary School.</p>
        <div class="cta-actions">
          <a href="#contact" class="btn btn-primary btn-lg">
            Inquire Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="tel:+918637264915" class="btn btn-outline btn-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            Call: +91 8637264915
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       CONTACT SECTION
       ============================================================ -->
  <section class="section" id="contact">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom: var(--space-3xl);">
        <span class="section-label">Get In Touch</span>
        <h2 class="section-title">Contact Us</h2>
        <p class="section-subtitle">Have questions about admissions, courses, or campus facilities? We're here to help.</p>
      </div>

      <div class="contact-grid">
        <!-- Left: Contact Info -->
        <div class="contact-info-cards reveal-left">
          <div class="contact-card">
            <div class="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <h4>Campus Address</h4>
              <p>At/Po: Dhodra, Ps: Umerkote<br>Dist: Nabarangpur<br>Odisha – 764073</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <h4>Phone</h4>
              <p><a href="tel:+918637264915">+91 8637264915</a> (School)<br>
              <a href="tel:+919937653872">+91 9937653872</a> (Trust)</p>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:mlctdhodra2009@gmail.com">mlctdhodra2009@gmail.com</a></p>
            </div>
          </div>

          <!-- Map -->
          <div class="map-container">
            <iframe src="https://maps.google.com/maps?q=B.B.%20CHHATOI%20SCHOOL%20%26%20COLLEGE%20OF%20NURSING&t=&z=14&ie=UTF8&iwloc=&output=embed" allowfullscreen="" loading="lazy" title="B.B. Chhatoi HSS Location Map"></iframe>
          </div>
        </div>

        <!-- Right: Inquiry Form -->
        <div class="contact-form reveal-right">
          <h3 style="margin-bottom: var(--space-lg); color: var(--primary);">Send an Inquiry</h3>
          <form id="inquiry-form">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Full Name *</label>
                <input type="text" id="name" name="name" class="form-input" placeholder="Enter your full name" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="+91 XXXXXXXXXX" required>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="your.email@example.com">
              </div>
              <div class="form-group">
                <label class="form-label" for="course">Course Interest *</label>
                <select id="course" name="course" class="form-select" required>
                  <option value="" disabled selected>Select a course</option>
                  <option value="science">+2 Science</option>
                  <option value="arts">+2 Arts</option>
                  <option value="both">Not sure / Both</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">Message</label>
              <textarea id="message" name="message" class="form-textarea" placeholder="Tell us about your inquiry, questions, or any specific requirements..." rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">
              Send Inquiry
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================
       FOOTER
       ============================================================ -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- About -->
        <div class="footer-about">
          <div class="footer-logo">
            <img src="/assets/images/logo.jpg" alt="B.B. Chhatoi HSS Logo" width="48" height="48">
            <div>
              <h3>B.B. Chhatoi HSS</h3>
              <span>Under Moon Light Charitable Trust</span>
            </div>
          </div>
          <p>Named after Late Shri Bhramarbar Chhatoi, our institution is dedicated to empowering rural and tribal students through quality and affordable education under CHSE, Odisha.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://wa.me/918637264915" aria-label="WhatsApp" target="_blank" rel="noopener">
              <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#fees">Fee Structure</a></li>
            <li><a href="#admission">Admission</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <!-- Courses -->
        <div class="footer-column">
          <h4>Academics</h4>
          <ul>
            <li><a href="#courses">+2 Science</a></li>
            <li><a href="#courses">+2 Arts</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#support">Scholarships</a></li>
            <li><a href="#rules">Rules</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-column">
          <h4>Contact Info</h4>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            At/Po: Dhodra, Ps: Umerkote, Dist: Nabarangpur, Odisha – 764073
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +91 8637264915
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            mlctdhodra2009@gmail.com
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>© 2026 B.B. Chhatoi Higher Secondary School. All Rights Reserved. | Under Moon Light Charitable Trust (Regd. No. 48/09)</p>
        <div class="footer-bottom-links">
          <a href="#rules">Terms & Conditions</a>
          <a href="#rules">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- ============================================================
       BACK TO TOP
       ============================================================ -->
  <button class="back-to-top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
    </svg>
  </button>

  <!-- JavaScript -->
  

`;

  return (
    <>
      {parse(htmlContent)}
    </>
  );
}