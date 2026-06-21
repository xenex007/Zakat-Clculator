/* Zakat Calculator — Service Worker (hors-ligne)
   Cache l'app + les polices Google. Stratégie : cache d'abord, puis réseau (et mise à jour du cache).
   Incrémente CACHE à chaque nouvelle version pour forcer la mise à jour. */
const CACHE = 'zakat-v1';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        // Met en cache les réponses valides de l'app et des polices Google
        if (res && res.status === 200 &&
            (req.url.startsWith(self.location.origin) || req.url.indexOf('fonts.g') !== -1)) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
