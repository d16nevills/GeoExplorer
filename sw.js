// GeoExplorer Service Worker
const CACHE_NAME = 'geoexplorer-v1';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    self.clients.claim();
});

// Network first - always fetch fresh content
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});