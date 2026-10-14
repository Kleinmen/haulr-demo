// Generado por scripts/pwa.mjs. No editar a mano.
const CACHE = 'haulr-mv85mi34';
const BASE = "C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo";
const PRECACHE = ["C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/bg-dark.1f42b397fedc2ce6f5b425bdcdd360ff.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/glow-top.26cc32e1c39b00a7af8e86dab61634a9.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/hatch.067780771a466d8a69ea08633487d3ac.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/map-dark.079b013c2fe0c86490c9ac840a4a2cc2.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/portrait-1.5907ddce107103f8d0d2fa681975b2be.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/portrait-2.4af6571695e6e1f9832794b5f83a9968.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/portrait-3.8a904f2567961994dcb293bdd09f627d.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/truck-cab-red-prev.d0ef34cc378e139de5fbf6dad8957c30.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/truck-cab-red.70491c88d74c1c80b42c7a0ae0f0ac97.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/truck-hero-red-prev.feeb36b9a2c0e8eee6edc5344746fb03.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/truck-hero-red.87411fef284fd7d24824fbc41c80eec5.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/truck-road-strip-prev.a9feecf949c4d107f00c6dad75370bba.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/assets/art/truck-road-strip.346351b2feae8331eac34209dc656650.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/@expo-google-fonts/manrope/300Light/Manrope_300Light.7c8bdfd65f2d0d081069e438f953359f.ttf","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/@expo-google-fonts/manrope/400Regular/Manrope_400Regular.8ca1a84037fdb644723129315c390ad9.ttf","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/@expo-google-fonts/manrope/500Medium/Manrope_500Medium.de7b3026c153d63d5732582887fecbf4.ttf","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/@expo-google-fonts/manrope/600SemiBold/Manrope_600SemiBold.80cb1b1a8ba262608706cb7f2b017835.ttf","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/@expo-google-fonts/manrope/700Bold/Manrope_700Bold.8e8fe178c0f147b91ed2a2b3097ad8a4.ttf","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/@expo-google-fonts/manrope/800ExtraBold/Manrope_800ExtraBold.f8f555c6d9efacc1b0af255e815a97da.ttf","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/favicon.ico","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/icons/apple-touch-icon.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/icons/icon-192.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/icons/icon-512.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/icons/maskable-512.png","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/index.html","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/manifest.webmanifest","C:/Users/juarx/AppData/Local/Programs/Git/haulr-demo/_expo/static/js/web/entry-474be1880e3ddd375a30e510c9c99005.js"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('haulr-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    // Con red: siempre la última versión. Sin red: la copia guardada de la app.
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) caches.open(CACHE).then((c) => c.put(BASE + '/', res.clone()));
          return res;
        })
        .catch(() => caches.match(BASE + '/').then((r) => r || caches.match(req))),
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
          return res;
        }),
    ),
  );
});
