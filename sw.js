const CACHE_NAME = 'motaofer-v2';
const assets = [
  'index.html',
  'consumer.html',
  'station.html',
  'admin.html',
  'firebase-config.js',
  'style.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
