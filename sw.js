self.addEventListener('install', event => {
  self.skipWaiting(); // Activate immediately
});

self.addEventListener('fetch', event => {
  // Allow normal behavior; no caching here unless added manually
});
