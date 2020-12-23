
                var cacheName = 'spreadaurora_prod-v1';
                var appShellFiles = [
                    '/',
                    '/admin/themes/metronic/development/plugins/global/plugins.bundle.js',
                    '/admin/themes/metronic/development/plugins/custom/prismjs/prismjs.bundle.js',
                    '/admin/themes/metronic/development/plugins/custom/fullcalendar/fullcalendar.bundle.css',
                    '/admin/themes/metronic/development/plugins/global/plugins.bundle.css',
                    '/admin/themes/metronic/development/plugins/custom/prismjs/prismjs.bundle.css',
                    '/admin/themes/metronic/development/css/style.bundle.css',
                    '/admin/themes/metronic/language/lang_fr.js',
                    '/admin/themes/metronic/favicons/favicon.ico'
                ];

                self.addEventListener('install', (e) => {
                    console.log('[Service Worker] Installation');
                    e.waitUntil(
                        caches.open(cacheName).then((cache) => {
                            console.log('[Service Worker] Mise en cache globale: app shell et contenu');
                            return cache.addAll(appShellFiles);
                        })
                    );
                });

                self.addEventListener('fetch', (e) => {
                    e.respondWith(
                        caches.match(e.request).then((r) => {
                            console.log('[Service Worker] Récupération de la ressource: ' + e.request.url);
                            return r || fetch(e.request).then((response) => {
                                return caches.open(cacheName).then((cache) => {
                                    console.log('[Service Worker] Mise en cache de la nouvelle ressource: ' + e.request.url);
                                    cache.put(e.request, response.clone());
                                    return response;
                                });
                            });
                        })
                    );
                });

                //Delete cache 
                self.addEventListener('activate', (e) => {
                    e.waitUntil(
                        caches.keys().then((keyList) => {
                            return Promise.all(keyList.map((key) => {
                                if (cacheName.indexOf(key) === -1) {
                                    return caches.delete(key);
                                }
                            }));
                        })
                    );
                });