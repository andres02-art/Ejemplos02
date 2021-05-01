/**  Inicializador del evento para el servidor local
 *if (`serviceWorker` in navigator) {
     window.addEventListener(`load`, ()=>{
        navigator.serviceWorker.register(`Service-worker.js`).then((reg)=>{
          console.log(`Se ha registrado ${reg}, en el navegador`)
        })
      })
    }
 * 
 */ 

    const Name_cache= `appCache`,
    Files_cache=[
        // direcciones de los archivos desde el repositorio padre
        `/index.html`,
        `/Character.js`,
        `/Entity.js`,
        `/Game.js`,
        `/game.css`,
        `/main.js`,
        `/Opponent.js`,
        `/Player.js`,
        `/Service-worcker.js`,
        `/Shot.js`,
        `/assets/files/Manifest.json`,
        `/assets/files/Install.js`,
        `/assets/files/iconos/Icono192x192`,
        `/assets/files/iconos/Icono322x322`,
        `/assets/files/iconos/Icono512x512`,
        `/assets/bueno_muerto.png`,
        `/assets/bueno.png`,
        `/assets/clases.png`,
        `/assets/game_over.png`,
        `/assets/jefe_muerto.png`,
        `/assets/jefe.png`,
        `/assets/malo_muero.png`,
        `/assets/malo.png`,
        `/assets/screenshot.png`,
        `/assets/shot1.png`,
        `/assets/shot2.png`,
        `/assets/you_win.png`
    ];
    self.addEventListener(`instal`, (ev)=>{
      ev.waitUntil(
        caches.open(Name_cache).then((caches)=>{return(caches.addAll(Files_cache))})
      );self.skipWaiting();
    });
    self.addEventListener(`activate`, (ev)=>{
      ev.waitUntil(
        caches.keys().then((keys)=>{return(Promise.all(keys.map((k)=>{if(k!==Name_cache);return(cahces.delete(k))})))})
      );self.clients.claim();
    });
    self.addEventListener(`fetch`, (ev)=>{
      ev.respondWith(
        caches.open(Name_cache).then((caches)=>{return(caches.match(ev.request)).then((response)=>{return(response || fetch(ev.request))})})
      )      
    });