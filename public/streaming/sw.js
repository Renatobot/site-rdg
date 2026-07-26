// RDG IPTV Service Worker
const CACHE_NAME = "rdg-iptv-v21";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/logo.png",
  "/manifest.json"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Network first strategy so changes always reflect immediately
  if (e.request.url.includes(".m3u8") || e.request.url.includes(".ts") || e.request.url.includes("corsproxy")) {
    return;
  }
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
