// Tiny Terra Academy -- shared navbar + footer injector
// Inlines HTML directly so it works on file:// and GitHub Pages alike.

(function () {

  // ---- COMPATIBILITY LAYER: INJECT STYLE BASES ----
  // This safely embeds the inline SVG graphics configurations straight into your elements
  var inlineStyleElement = document.createElement('style');
  inlineStyleElement.textContent = `
    .footer-social {
      display: flex !important;
      gap: 12px !important;
      margin-top: 15px !important;
    }
    .soc-btn-svg {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 40px !important;
      height: 40px !important;
      border-radius: 50% !important;
      background-color: rgba(255, 255, 255, 0.1) !important; /* Soft transparent background circle */
      transition: transform 0.2s ease, background-color 0.2s ease !important;
      text-decoration: none !important;
    }
    .soc-btn-svg:hover {
      transform: translateY(-3px) !important;
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
    .soc-btn-svg svg {
      width: 20px !important;
      height: 20px !important;
    }
    .contact-link-with-svg {
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
      text-decoration: none !important;
    }
    .contact-link-with-svg svg {
      width: 16px !important;
      height: 16px !important;
      flex-shrink: 0 !important;
    }
  `;
  document.head.appendChild(inlineStyleElement);

  // ---- NAVBAR HTML ----
  var NAVBAR_HTML = `
<nav class="navbar" id="navbar">
  <a class="nav-brand" href="index.html">
    <img src="asset/tiny_terra_logo.svg" class="nav-logo" alt="🌿">
    <div>
      <div class="nav-name">Tiny Terra Academy</div>
      <div class="nav-sub">A Little Planet for Your Little One</div>
    </div>
  </a>
  <ul class="nav-links" id="nav-links">
    <li><a href="index.html"    data-page="index">Home</a></li>
    <li><a href="about.html"   data-page="about">About</a></li>
    <li><a href="programs.html" data-page="programs">Programs</a></li>
    <li><a href="handbook.html" data-page="handbook">Handbook</a></li>
    <li><a href="contact.html" class="nav-cta" data-page="contact">Enquire Now</a></li>
    <li><a href="https://www.instagram.com/tinyterra_preschool_bavdhan/" class="nav-insta" target="_blank" rel="noopener">📸 Instagram</a></li>
  </ul>
  <div class="hamburger" id="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">🏠 Home</a>
  <a href="about.html">🌿 About Us</a>
  <a href="programs.html">🎓 Programs</a>
  <a href="handbook.html">📋 Parent Handbook</a>
  <a href="contact.html">📞 Contact &amp; Enquire</a>
  <a href="https://www.instagram.com/tinyterra_preschool_bavdhan/" target="_blank" rel="noopener">📸 Instagram</a>
</div>`;

  // ---- FOOTER HTML ----
  var FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <div class="footer-logo-icon">🌿</div>
          <div>
            <div class="footer-brand-name">Tiny Terra Academy</div>
            <div class="footer-brand-sub">A Little Planet for Your Little One</div>
          </div>
        </div>
        <p class="footer-desc">We nurture every child as a seed of potential &mdash; through curiosity-led play, nature-based learning, and a community of care.</p>
        <div class="footer-social">
          <!-- WhatsApp Icon -->
          <a class="soc-btn-svg" href="https://wa.me/917066838080" target="_blank" title="WhatsApp">
            <svg viewBox="0 0 448 512"><path fill="#25D366" d="M386.7 121.2c-42.5-42.5-99-65.9-159.2-65.9-124 0-224.9 101-224.9 224.9 0 39.6 10.3 78.2 30 112.4L0 512l125.1-32.8c32.8 17.9 69.6 27.3 107.4 27.3 124 0 225-101 225-224.9 0-60.2-23.4-116.7-65.8-159.2zM227.1 469.7c-33.6 0-66.6-9-95.2-26.1l-6.8-4-70.8 18.5 18.8-69.2-4.4-7c-18.8-29.8-28.7-64.3-28.7-100 0-104.7 85.2-190 190-190 50.7 0 98.4 19.8 134.2 35.6s65.4 83.3 65.4 134.2c0 104.6-85.2 190-190 190zm104.1-142.3c-5.7-2.8-33.8-16.7-39-18.6-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.8 18.6-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.7-28.2-16.9-15.1-28.3-33.8-31.6-39.5-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.6-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10s-12.8-30.8-17.5-42.2c-4.6-11.2-9.3-9.7-12.8-9.9-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-20 19.5-20 47.5s20.4 55.1 23.2 58.9c2.8 3.8 40.2 61.4 97.4 86.2 13.6 5.9 24.2 9.4 32.5 12.1 13.7 4.4 26.2 3.8 36.1 2.3 11-1.6 33.8-13.8 38.5-27.2 4.8-13.3 4.8-24.7 3.3-27.2-1.4-2.4-5.2-3.8-10.9-6.6z"/></svg>
          </a>
          <!-- Instagram Icon -->
          <a class="soc-btn-svg" href="https://www.instagram.com/tinyterra_preschool_bavdhan/" target="_blank" title="Instagram">
            <svg viewBox="0 0 448 512"><path fill="#E1306C" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.4c-41.1 0-74.5-33.3-74.5-74.5s33.3-74.5 74.5-74.5 74.5 33.3 74.5 74.5-33.4 74.5-74.5 74.5zm146.9-194c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9s-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.8 9.9 67.6 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM402.4 392c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
          <!-- Facebook Icon -->
          <a class="soc-btn-svg" href="#" title="Facebook">
            <svg viewBox="0 0 512 512"><path fill="#1877F2" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Explore</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="programs.html">Our Programs</a></li>
          <li><a href="handbook.html">Parent Handbook</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Programs</div>
        <ul class="footer-links">
          <li><a href="programs.html#playgroup">Playgroup (1.5&ndash;2.5)</a></li>
          <li><a href="programs.html#nursery">Nursery (2.5&ndash;3.5)</a></li>
          <li><a href="programs.html#lkg">LKG (3.5&ndash;4.5)</a></li>
          <li><a href="programs.html#ukg">UKG (4.5&ndash;6)</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <ul class="footer-links">
          <!-- Phone Icon List Link -->
          <li>
            <a href="tel:+917066838080" class="contact-link-with-svg">
              <svg viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              +91 70668 38080
            </a>
          </li>
          <!-- WhatsApp List Link -->
          <li>
            <a href="https://wa.me/917066838080" target="_blank" class="contact-link-with-svg">
              <svg viewBox="0 0 448 512"><path fill="#ffffff" d="M386.7 121.2c-42.5-42.5-99-65.9-159.2-65.9-124 0-224.9 101-224.9 224.9 0 39.6 10.3 78.2 30 112.4L0 512l125.1-32.8c32.8 17.9 69.6 27.3 107.4 27.3 124 0 225-101 225-224.9 0-60.2-23.4-116.7-65.8-159.2zM227.1 469.7c-33.6 0-66.6-9-95.2-26.1l-6.8-4-70.8 18.5 18.8-69.2-4.4-7c-18.8-29.8-28.7-64.3-28.7-100 0-104.7 85.2-190 190-190 50.7 0 98.4 19.8 134.2 35.6s65.4 83.3 65.4 134.2c0 104.6-85.2 190-190 190zm104.1-142.3c-5.7-2.8-33.8-16.7-39-18.6-5.2-1.9-9-2.8-12.8 2.8-3.8 5.7-14.8 18.6-18 22.3-3.3 3.8-6.6 4.3-12.3 1.4-5.7-2.8-24-8.8-45.7-28.2-16.9-15.1-28.3-33.8-31.6-39.5-3.3-5.7-.4-8.8 2.5-11.6 2.6-2.6 5.7-6.6 8.6-10 2.8-3.3 3.8-5.7 5.7-9.5 1.9-3.8.9-7.1-.5-10s-12.8-30.8-17.5-42.2c-4.6-11.2-9.3-9.7-12.8-9.9-3.3-.2-7.1-.2-10.9-.2s-10 1.4-15.2 7.1c-5.2 5.7-20 19.5-20 47.5s20.4 55.1 23.2 58.9c2.8 3.8 40.2 61.4 97.4 86.2 13.6 5.9 24.2 9.4 32.5 12.1 13.7 4.4 26.2 3.8 36.1 2.3 11-1.6 33.8-13.8 38.5-27.2 4.8-13.3 4.8-24.7 3.3-27.2-1.4-2.4-5.2-3.8-10.9-6.6z"/></svg>
              WhatsApp Us
            </a>
          </li>
          <!-- Envelope Enquiry List Link -->
          <li>
            <a href="contact.html" class="contact-link-with-svg">
              <svg viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              Send Enquiry
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="footer-divider">
    <div class="footer-bottom">
      <span>&copy; 2026 Tiny Terra Academy. All rights reserved.</span>
      <span>Made with 🌿 in India</span>
    </div>
  </div>
</footer>`;

  // ---- EXECUTE LAYOUT INJECTION ENGINE ----
  function injectLayout() {
    // 1. Inject Navbar
    var navHolder = document.getElementById('nav-include');
    if (navHolder) {
      navHolder.innerHTML = NAVBAR_HTML;

      var page = location.pathname.split('/').pop().replace('.html', '') || 'index';
      navHolder.querySelectorAll('[data-page]').forEach(function (a) {
        if (a.getAttribute('data-page') === page) {
          a.classList.add('active');
        }
      });

      window.addEventListener('scroll', function () {
        var nb = document.getElementById('navbar');
        if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
      });
    }

    // 2. Inject Footer
    var footerHolder = document.getElementById('footer-include');
    if (footerHolder) {
      footerHolder.innerHTML = FOOTER_HTML;
    }

    // 3. Trigger Scroll Observer
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- RUN CONTROLLER ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectLayout);
  } else {
    injectLayout();
  }

  // ---- MOBILE MENU TOGGLE ----
  window.toggleMenu = function () {
    var m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
  };

})();
