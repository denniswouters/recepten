self.addEventListener('install', e => {
 e.waitUntil(
   // Nadat de ServiceWorker is geïnstalleerd opent hij een cache
   // Dat zijn de dingen die lokaal worden opgeslagen
   caches.open('mattie-pwa-cache').then(cache => {
     // Alle URL's van de dingen die we willen toevoegen aan de cache
     return cache.addAll([
       '/mattie-master/',
       '/mattie-master/css/style.css',
       '/mattie-master/css/style-nieuws.css',
       '/mattie-master/css/style-spiekbriefje.css',
       '/mattie-master/css/style-recepten.css',
       '/mattie-master/css/style-restaurants.css',
       '/mattie-master/css/style-intro.css',
       '/mattie-master/main.js',
       '/mattie-master/manifest.json',
       '/mattie-master/img/mattie.png',
       '/mattie-master/img/icons/icon-192x192.png',
       '/mattie-master/img/icons/icon-512x512.png',
       '/mattie-master/img/icons/apple-icon.png',
       '/mattie-master/js/chat.js',
       '/mattie-master/js/dialogflow.js',
       '/mattie-master/js/nieuws.js',
       '/mattie-master/js/recepten.js',
       '/mattie-master/js/restaurants.js',
       '/mattie-master/js/spiekbriefje.js',
       '/mattie-master/js/intro.js',
       '/mattie-master/footer.php',
       '/mattie-master/headerChatbot.php',
       '/mattie-master/headerHoofdmenu.php',
       '/mattie-master/index.php',
       '/mattie-master/menu.php',
       '/mattie-master/recepten.php',
       '/mattie-master/restaurants.php',
       '/mattie-master/recepten.php',
       '/mattie-master/nieuws.php',
       '/mattie-master/spiekbriefje.php',
       '/mattie-master/intro.php',
       '/mattie-master/sw.js',
     ]);
   })
 );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});