// Require Node modules in the browser thanks to Browserify: http://browserify.org

var bespoke = require('bespoke'),
    isMobile = require('ismobilejs'),
    fancy = require('bespoke-theme-fancy'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    state = require('bespoke-state'),
    math = require('bespoke-math'),
    markdown = require('bespoke-meta-markdown'),
    backdrop = require('bespoke-backdrop'),
    tutorial = require('./tutorial'),
    sleek = require('./sleek-menu');

// Bespoke.js
bespoke.from('article', [
  markdown({
    backdrop: function(slide, value) {
      slide.setAttribute('data-bespoke-backdrop', value);
    }
  }),
  fancy(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  scale(isMobile.any ? 'transform' : {}),
  hash(),
  progress(),
  math(),
  state(),
  backdrop(),
  tutorial(document.getElementsByClassName('tutorial')[0])
]);

sleek();
