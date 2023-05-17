const CACHE_NAME = 'tweakra1n';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        '/',
        'index.html',
        'home.html',
        'css/f7.css',
        'css/styles.css',
        'js/app.js',
        'js/nobounce.js',
        'js/routes.js',
        './data.js'
        'https://cdn.jsdelivr.net/npm/framework7@7/framework7-bundle.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css',
        'assets/favicon.ico'
        'manifest.json',
        'manifest2.json',
        'ipasource/home.html',
        'ipasource/search.html',
        'ipasource/settings.html',
        'ipasource/terms.html',
        'ipasource/start.html',
        'ipasource/css/styles.css',
        'ipasource/manifest.json',
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
