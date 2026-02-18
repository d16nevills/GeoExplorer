// GeoExplorer Service Worker - Cleanup/Unregister
// This service worker unregisters itself and clears all caches

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.keys().then(names => {
            return Promise.all(
                names.map(name => caches.delete(name))
            );
        }).then(() => {
            return self.registration.unregister();
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(names => {
            return Promise.all(
                names.map(name => caches.delete(name))
            );
        }).then(() => {
            return self.registration.unregister();
        })
    );
});
