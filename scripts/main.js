// bespoke and its plugins
import bespoke from 'bespoke';
import vis from 'bespoke-vis';
import keys from 'bespoke-keys';
import hash from 'bespoke-hash';
import math from 'bespoke-math';
import touch from 'bespoke-touch';
import scale from 'bespoke-scale';
import state from 'bespoke-state';
import qrcode from 'bespoke-qrcode';
import bullets from 'bespoke-bullets';
import sandy from 'bespoke-theme-sandy';
import progress from 'bespoke-progress';
import backdrop from 'bespoke-backdrop';
import markdown from 'bespoke-markdownit/lazy-hljs';
import overview from 'bespoke-simple-overview';

// utilities
import tutorial from './tutorial.js';
import { config as mdConfig, extensions as mdExtensions } from './markdown-config.js';

const markdownItConfig = {
  config: mdConfig,
  extensions: mdExtensions,
  hljsOptions: {
    languagePath: '../hljs-languages/'
  }
};

bespoke.from('article', [
  markdown(markdownItConfig.config, markdownItConfig.extensions, markdownItConfig.hljsOptions),
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
  vis(),
  state(),
  backdrop(),
  //search()
  qrcode(),
  tutorial(document.querySelector('.tutorial')),
  deck => {
    // waits 200ms to avoid FoUC
    setTimeout(() => deck.parent.closest('#presentation-container').style.visibility = 'visible', 200);
  },
  deck => {
    // adds a class to the presentation parent with the name of the class, from
    // the URL
    const path = location.pathname;
    const startOfClassName = path.indexOf('/classes/') === -1 ? 0 : path.indexOf('/classes/') + '/classes/'.length;
    const className = path.substring(startOfClassName, path.indexOf('/', startOfClassName));

    deck.parent.classList.add(className || 'syllabus');
  }
]);
