const CACHE_NAME = 'my-app-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        '/',
        'index.html',
        'app.html',
        'light.html',
        'dark.html',
        'f7.css',
        'css/styles.css',
        'js/app.js',
        'js/nobounce.js',
        'js/routes.js',
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
