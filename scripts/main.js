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
  fancy(),
  markdown({
    backdrop: function(slide, value) {
      slide.setAttribute('data-bespoke-backdrop', value);
    },
    scripts: function(slide, url) {
      var placeToPutScripts = document.body;
      url = !Array.isArray(url) ? [url] : url;

      function loadScriptChain(i) {
        var s = document.createElement('script');
        s.src = url[i];
        if (i < url.length - 1) {
          s.addEventListener('load', function () {
              loadScriptChain(i+1);
          });
        }
        placeToPutScripts.appendChild(s);
      }
      loadScriptChain(0);
    },
    styles: function(slide, value) {
      var placeToPutStyles= document.head;
      value = !Array.isArray(value) ? [value] : value;
      value.forEach(function (url) {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = url;
        placeToPutStyles.appendChild(l);
      });
    }
  }),
  keys(),
  touch(),
  bullets('li, .bullet'),
  hash(),
  progress(),
  math(),
  state(),
  backdrop(),
  tutorial(document.getElementsByClassName('tutorial')[0]),
  function() {
    var deck = arguments[0],
      delayedScale = function() {
        return scale(isMobile.any ? 'transform' : 'zoom')(deck);
      };
    setTimeout(delayedScale, 700);
  }

]);

sleek();
