
const CACHE_NAME = 'kvsv-cache-v1';
const urlsToCache = [
    './',
    './kvsv.html',
    './public_search.html'
];
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
