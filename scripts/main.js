// bespoke and its plugins
const bespoke = require('bespoke'),
  keys = require('bespoke-keys'),
  hash = require('bespoke-hash'),
  math = require('bespoke-math'),
  touch = require('bespoke-touch'),
  scale = require('bespoke-scale'),
  state = require('bespoke-state'),
  qrcode = require('bespoke-qrcode'),
  bullets = require('bespoke-bullets'),
  sandy = require('bespoke-theme-sandy'),
  progress = require('bespoke-progress'),
  backdrop = require('bespoke-backdrop'),
  markdown = require('bespoke-markdownit'),
  overview = require('bespoke-simple-overview');

// utilities
const tutorial = require('./tutorial'),
  markdownItConfig = require('./markdown-config');

bespoke.from('article', [
  markdown(markdownItConfig.config, markdownItConfig.extensions),
  sandy({ insertFonts: false }),
  scale('transform'),
  keys(),
  touch(),
  overview({ insertStyles: false }),
  bullets(
    '.bullet, .bulleted li, .bulleted dd, .bulleted-dt dt, .bulleted-dt dd'
  ),
  progress(),
  hash(),
  math(),
  state(),
  backdrop(),
  //search()
  qrcode(),
  tutorial(document.getElementsByClassName('tutorial')[0]),
  deck => {
    // waits 200ms to avoid FoUC
    setTimeout(() => deck.parent.closest('#presentation-container').style.visibility = 'visible', 200);
  }
]);
