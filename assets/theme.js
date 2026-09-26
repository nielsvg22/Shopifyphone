document.addEventListener('DOMContentLoaded', function () {
  /* Mobile nav */
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var menuClose = document.querySelector('[data-menu-close]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  var backdrop = document.querySelector('[data-menu-backdrop]');

  function openMenu() {
    if (!mobileNav) return;
    mobileNav.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(function () {
      mobileNav.classList.add('is-open');
      backdrop.classList.add('is-open');
    });
    menuToggle && menuToggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    menuToggle && menuToggle.setAttribute('aria-expanded', 'false');
    setTimeout(function () {
      mobileNav.hidden = true;
      backdrop.hidden = true;
    }, 250);
  }
  menuToggle && menuToggle.addEventListener('click', openMenu);
  menuClose && menuClose.addEventListener('click', closeMenu);
  backdrop && backdrop.addEventListener('click', closeMenu);

  /* Search panel */
  var searchToggle = document.querySelector('[data-search-toggle]');
  var searchClose = document.querySelector('[data-search-close]');
  var searchPanel = document.querySelector('[data-search-panel]');
  searchToggle && searchToggle.addEventListener('click', function () {
    var isHidden = searchPanel.hidden;
    searchPanel.hidden = !isHidden;
    searchToggle.setAttribute('aria-expanded', String(isHidden));
    if (isHidden) {
      var input = searchPanel.querySelector('input[type="search"]');
      input && input.focus();
    }
  });
  searchClose && searchClose.addEventListener('click', function () {
    searchPanel.hidden = true;
    searchToggle && searchToggle.setAttribute('aria-expanded', 'false');
  });

  /* Product gallery */
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var thumbs = gallery.querySelectorAll('[data-gallery-thumb]');
    var images = gallery.querySelectorAll('[data-gallery-image]');
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var index = thumb.getAttribute('data-gallery-thumb');
        images.forEach(function (img) {
          img.classList.toggle('is-hidden', img.getAttribute('data-gallery-image') !== index);
        });
        thumbs.forEach(function (t) { t.classList.toggle('is-active', t === thumb); });
      });
    });
  });

  /* Collection filters mobile toggle */
  var filtersToggle = document.querySelector('[data-filters-toggle]');
  var filters = document.querySelector('[data-filters]');
  filtersToggle && filtersToggle.addEventListener('click', function () {
    filters.classList.toggle('is-open');
  });

  /* Sticky add-to-cart on product page (mobile) */
  var stickyAtc = document.querySelector('[data-sticky-atc]');
  var mainForm = document.getElementById('product-form');
  if (stickyAtc && mainForm) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        stickyAtc.hidden = entry.isIntersecting;
        stickyAtc.classList.toggle('is-visible', !entry.isIntersecting);
      });
    }, { rootMargin: '-80% 0px 0px 0px' });
    observer.observe(mainForm);
  }

  /* Cart quantity updates */
  document.querySelectorAll('[data-cart-qty]').forEach(function (input) {
    input.addEventListener('change', function () {
      var form = document.getElementById('cart-form');
      form && form.submit();
    });
  });
});
