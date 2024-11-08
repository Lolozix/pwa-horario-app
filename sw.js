let cacheName = "pwa-horario-app";

let filesToCache = ["/", "/index.html", "/pages/horarioAula", "/pages/horarioPE", "/css/index.css", "/css/horarioAula.css", "/css/horarioPE.css", "/js/main.js"];

/*inicializando a service worker e fazendo o download do conteúdo da aplicação */

self.addEventListener("install", (e) => {

    e.waitUntil(caches.open(cacheName).then(function (cache) { return cache.addAll(filesToCache); }));
});

/*disponibilizando o conteudo quando estiver offline */

self.addEventListener("fetch", (e) => {

    e.respondWith(

        caches.match(e.request).then((response) => {

            return response || fetch(e.request);

        })
    );
});