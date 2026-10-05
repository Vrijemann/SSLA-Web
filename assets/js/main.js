(function () {
  // Header berubah solid saat halaman digulir
  var header = document.getElementById('siteHeader');
  if (header && !header.classList.contains('is-solid')) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Menu ponsel
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      document.body.classList.toggle('nav-open', !open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }

  // Saringan kategori di halaman Legal Insight
  var buttons = document.querySelectorAll('.filter__btn');
  var cards = document.querySelectorAll('#daftarArtikel .post-card');
  var empty = document.getElementById('kosongKategori');
  if (buttons.length) {
    var apply = function (id) {
      var shown = 0;
      buttons.forEach(function (b) { b.classList.toggle('is-active', b.dataset.filter === id); });
      cards.forEach(function (c) {
        var match = id === 'semua' || c.dataset.kategori === id;
        c.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown > 0 || !cards.length;
    };
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        apply(b.dataset.filter);
        var url = new URL(window.location);
        if (b.dataset.filter === 'semua') url.searchParams.delete('kategori');
        else url.searchParams.set('kategori', b.dataset.filter);
        history.replaceState(null, '', url);
      });
    });
    var awal = new URLSearchParams(window.location.search).get('kategori');
    if (awal && document.querySelector('.filter__btn[data-filter="' + awal + '"]')) apply(awal);
  }
})();
