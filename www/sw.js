importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app.global.js",
    "revision": "2eab51fa98ed28b23cf1de2416e32427"
  },
  {
    "url": "build/app.js",
    "revision": "e17e105021f398e2c4c3a9faa056139b"
  },
  {
    "url": "build/app.registry.json",
    "revision": "b919f131ea0814cee1def4c43acc799b"
  },
  {
    "url": "build/app/8yf4sryn.js",
    "revision": "34fbc26d799dfd7ac2ab5501f4a053a5"
  },
  {
    "url": "build/app/ajbdpw8g.js",
    "revision": "15cce814d25e18cd79415389e41a3a6a"
  },
  {
    "url": "build/app/app.nhfdtzcg.js",
    "revision": "14a42b130a0dc58e9793128e95998430"
  },
  {
    "url": "build/app/app.p2ckhd5y.pf.js",
    "revision": "7e9b1fd78fb50cc83a51772f3c838d57"
  },
  {
    "url": "build/app/dmcjncaa.css",
    "revision": "e40a8ba930f4eb73a154610c5d7dcf48"
  },
  {
    "url": "build/app/fi7qaqdt.js",
    "revision": "1c80914c03ff206ebb14d20af840438e"
  },
  {
    "url": "build/app/n7dnkpyh.js",
    "revision": "63f13ea10126fb8d9d7cd34da0874da3"
  },
  {
    "url": "build/app/swwg3d1e.js",
    "revision": "8cb940896e8c692fc293337c60008370"
  },
  {
    "url": "build/app/yjborbvy.css",
    "revision": "5f1d66b643de46e4afd2b1231ba453e8"
  },
  {
    "url": "build/app/z0ths4bt.css",
    "revision": "92b45c2246930bfcc64ad275c85cd638"
  },
  {
    "url": "docs-content/addons/stencil-router.html",
    "revision": "2986d549a7eddc7070203cc9e976e175"
  },
  {
    "url": "docs-content/advanced/ssr/index.html",
    "revision": "ba42258303b5dd9e4d42b9d18047b79e"
  },
  {
    "url": "docs-content/basics/building-components.html",
    "revision": "805d62732e1055d29516a80224c2b7d4"
  },
  {
    "url": "docs-content/basics/change-detection.html",
    "revision": "8535ccbf1a1b9337c3f151560637c69e"
  },
  {
    "url": "docs-content/basics/code-splitting.html",
    "revision": "b9caed6ff6a055b4ac9c05822e7fe416"
  },
  {
    "url": "docs-content/basics/component-lifecycle.html",
    "revision": "bfcdd02a6b35979d290ef6bc17a943ed"
  },
  {
    "url": "docs-content/basics/components.html",
    "revision": "ab1bda4baad03cea64089b74f7f4c321"
  },
  {
    "url": "docs-content/basics/decorators.html",
    "revision": "19c4621b1af950f6d0ad6eafe142fce9"
  },
  {
    "url": "docs-content/basics/defining-components.html",
    "revision": "8929e96daf4f74837f7fc3aac5cd43ac"
  },
  {
    "url": "docs-content/basics/learning-jsx.html",
    "revision": "3f41f3a8d753fd2fb0935204beef77c7"
  },
  {
    "url": "docs-content/basics/managing-state.html",
    "revision": "58e73536ecfee107a338ba06aa1af955"
  },
  {
    "url": "docs-content/basics/my-first-component.html",
    "revision": "d0d3ff2ecef30b8187a8cc49c59a14cf"
  },
  {
    "url": "docs-content/basics/nesting-components.html",
    "revision": "65281e952c881fb90a474e5310074c7d"
  },
  {
    "url": "docs-content/basics/stencil-config.html",
    "revision": "1247b36348a4312f9bd909a5ca5625c0"
  },
  {
    "url": "docs-content/basics/stencil-router.html",
    "revision": "e2f079693db64c05e634ed9327d3dd33"
  },
  {
    "url": "docs-content/basics/templating.html",
    "revision": "169d137a513f451cc4484ea3ed4bc0cb"
  },
  {
    "url": "docs-content/basics/using-events.html",
    "revision": "19a6a896852145a3fc6e737d6c938cf9"
  },
  {
    "url": "docs-content/compiler/config.html",
    "revision": "4ea31abcf3133107443e6dbc2baa55d3"
  },
  {
    "url": "docs-content/intro/history.html",
    "revision": "775cdfbd4c9d13f5922b75b9d29fed3e"
  },
  {
    "url": "docs-content/intro/index.html",
    "revision": "c0b731fa4ae07cd540794da401d5eae6"
  },
  {
    "url": "docs-content/intro/why.html",
    "revision": "d307ce93528d8ee21a7c36808ee4fa79"
  },
  {
    "url": "docs-content/start/index.html",
    "revision": "bca27fcf8d3e95fec4eb0f33ba321eb8"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "img/logo.png",
    "revision": "21ba838516e785b6bc724260c55edc26"
  },
  {
    "url": "img/text-logo.png",
    "revision": "983fa7783e22e13fa84159ee8c8ddd1a"
  },
  {
    "url": "img/text-logo.svg",
    "revision": "4f658c2a420d5dd7f30d09c2c87781cf"
  },
  {
    "url": "index.html",
    "revision": "71e6b750cdab9d4fe923622fc37aa2b6"
  },
  {
    "url": "manifest.json",
    "revision": "ab5e18864e5002962d50ca783462119e"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
