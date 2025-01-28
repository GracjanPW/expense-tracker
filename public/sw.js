self.addEventListener('install', () => {
  console.log('service worker installed')
});

self.addEventListener('activate', () => {
  console.log('service worker activated')
});

self.addEventListener("fetch", (event) => {
    console.log("Intercepted request", event.request);
  });
