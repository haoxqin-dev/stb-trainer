/* Netz zuerst, Zwischenspeicher nur als Rückfallebene.
   Dadurch ist die App offline nutzbar, zeigt bei Netz aber immer den aktuellen Stand. */
const CACHE = 'stb-trainer-v1';

self.addEventListener('install',  e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
