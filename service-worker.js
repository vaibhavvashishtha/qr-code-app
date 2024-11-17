const CACHE_NAME = "qr-reader-cache-v1";
const urlsToCache = ["index.html", "css/styles.css", "js/app.js", "js/qr-scanner.js"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
