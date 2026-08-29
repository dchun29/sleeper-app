// Minimal service worker: exists only to satisfy installability requirements.
// Intentionally does NOT cache API responses so your roster/waiver/matchup data
// is always fresh from Sleeper — this app is meant to be used online.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => {
  // pass-through, no caching
});
