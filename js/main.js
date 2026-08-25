// Technical Recovery Solutions — site scripts

// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// Contact form — placeholder handler.
// The form endpoint is not wired yet. See docs/FORMS.md for the two options
// (Formspree-style service, or AWS Lambda + SES). Once you have an endpoint,
// set it on the form's `action` attribute and delete this block.
(function () {
  var form = document.getElementById('assignment-form');
  if (!form) return;
  var status = document.getElementById('form-status');
  form.addEventListener('submit', function (e) {
    var action = form.getAttribute('action') || '';
    if (action === '#' || action === '') {
      e.preventDefault();
      if (status) {
        status.className = 'form-status err';
        status.textContent = 'This form is not connected to a submission service yet. ' +
          'Please call (704) 315-5137 or email mikem@techrecoverysolutions.com directly.';
      }
    }
  });
})();
