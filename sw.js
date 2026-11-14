const C='autobilanz-v1.68',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==C).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
// Immer zuerst beim Server nachfragen (am Browser-Zwischenspeicher vorbei), offline aus dem eigenen Speicher
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;const same=new URL(q.url).origin===self.location.origin;
e.respondWith(fetch(same?new Request(q,{cache:'no-cache'}):q).then(r=>{if(same&&r.ok){const c=r.clone();caches.open(C).then(x=>x.put(q,c))}return r}).catch(()=>caches.match(q).then(r=>r||caches.match('index.html'))))});
