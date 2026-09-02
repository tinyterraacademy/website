// Tiny Terra Academy -- shared navbar + footer injector
// Inlines HTML directly so it works on file:// and GitHub Pages alike.

(function () {

  // ---- DYNAMICALLY INJECT FONT AWESOME (SVG REPLACEMENT ENGINE) ----
  // This loads the clean JavaScript version to display your icons without font/CORS errors
  var faScript = document.createElement('script');
  faScript.src = 'https://cloudflare.com';
  document.head.appendChild(faScript);

  // ---- NAVBAR HTML ----
  var NAVBAR_HTML = `
<nav class="navbar" id="navbar">
  <a class="nav-brand" href="index.html">
    <div class="nav-logo">🌿</div>
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
          <a class="soc-btn" href="https://wa.me/917066838080" target="_blank" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a class="soc-btn" href="https://www.instagram.com/tinyterra_preschool_bavdhan/" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a class="soc-btn" href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
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
          <li><a href="tel:+917066838080"><i class="fa-solid fa-phone"></i> +91 70668 38080</a></li>
          <li><a href="https://wa.me/917066838080" target="_blank"><i class="fa-brands fa-whatsapp"></i> WhatsApp Us</a></li>
          <li><a href="contact.html"><i class="fa-solid fa-envelope"></i> Send Enquiry</a></li>
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

  // ---- INJECT NAVBAR ----
  var navHolder = document.getElementById('nav-include');
  if (navHolder) {
    navHolder.innerHTML = NAVBAR_HTML;

    // Mark the active link based on current filename
    var page = location.pathname.split('/').pop().replace('.html', '') || 'index';
    navHolder.querySelectorAll('[data-page]').forEach(function (a) {
      if (a.getAttribute('data-page') === page) {
        a.classList.add('active');
      }
    });

    // Navbar scroll shadow effect
    window.addEventListener('scroll', function () {
      var nb = document.getElementById('navbar');
      if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // ---- INJECT FOOTER ----
  var footerHolder = document.getElementById('footer-include');
  if (footerHolder) {
    footerHolder.innerHTML = FOOTER_HTML;
  }

  // ---- MOBILE MENU TOGGLE ----
  window.toggleMenu = function () {
    var m = document.getElementById('mobileMenu');
    if (m) m.classList.toggle('open');
  };

  // ---- SCROLL REVEAL ----
  window.addEventListener('DOMContentLoaded', function () {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  });

})();
