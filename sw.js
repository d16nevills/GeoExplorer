// GeoExplorer Service Worker
const CACHE_NAME = 'geoexplorer-v3-backgrounds';

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.keys().then(names => {
            return Promise.all(
                names.map(name => caches.delete(name))
            );
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(names => {
            return Promise.all(
                names.map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Network first - always fetch fresh content
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
