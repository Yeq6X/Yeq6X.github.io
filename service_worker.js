// キャッシュファイルの指定
var CACHE_NAME = 'paw-sample-caches'
var urlsToCache = [
  '/xxx.io/'
];

self.addEventListener('install', function(event) {
  event.waitUnitil(
    caches
        .open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(urlsToCache);
        })
  );
});