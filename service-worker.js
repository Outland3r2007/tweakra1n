const CACHE_NAME = 'tweakra1n';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        '/',
        'app.html',
        'css/f7.css',
        'css/styles.css',
        'js/app.js',
        'js/nobounce.js',
        'js/routes.js',
        'assets/default.png',
        './data.js',
        'https://cdn.jsdelivr.net/npm/framework7@7/framework7-bundle.min.js',
        'assets/favicon.ico',
        'manifest.json',
        'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
