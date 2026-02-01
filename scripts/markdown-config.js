// markdownit plugins
import markdownItAnchor from 'markdown-it-anchor';
import markdownItContainer from 'markdown-it-container';
import markdownItDecorate from 'markdown-it-decorate';
import markdownItDefList from 'markdown-it-deflist';
import markdownItEmoji from 'markdown-it-emoji';
import markdownItAbbr from 'markdown-it-abbr';

const config = {
  backdrop: (slide, value) => {
    slide.setAttribute('data-bespoke-backdrop', value);
  },

  scripts: (slide, url) => {
    const placeToPutScripts = document.body;
    url = !Array.isArray(url) ? [url] : url;

    const loadScriptChain = i => {
      const s = document.createElement('script');
      s.src = url[i];
      if (i < url.length - 1) {
        s.addEventListener('load', () => loadScriptChain(i+1));
      }
      placeToPutScripts.appendChild(s);
    }
    loadScriptChain(0);
  },

  styles: (slide, value) => {
    const placeToPutStyles = document.head;
    value = !Array.isArray(value) ? [value] : value;
    value.forEach(url => {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = url;
      placeToPutStyles.appendChild(l);
    });
  },

  embeddedStyles: (slide, styleString) => {
    if (typeof styleString !== 'string') {
      console.log('Esperava que o metadado "embeddedStyles" tivesse como ' +
        'valor uma string, mas foi passado via arquivo markdown um ' +
        typeof styleString);
    }
    const s = document.createElement('style');
    s.innerHTML = styleString;
    document.head.appendChild(s);
  },

  elementStyles: (slideEl, elementsAndTheirStyles) => {
    Object.keys(elementsAndTheirStyles).forEach(selector => {
      Array.from(slideEl.querySelectorAll(selector))
        .forEach(el => el.setAttribute('style', elementsAndTheirStyles[selector]));
    });
  },

  slideHash: (slide, value) => slide.setAttribute('data-bespoke-hash', value),

  layout: (slide, value) => slide.classList.add('layout-' + value),

  slideClass: (slideEl, value) => value.split(' ').forEach(v => slideEl.classList.add(v)),

  state: (slide, value) => slide.setAttribute('data-bespoke-state', value),

  preventSelection: (slide, unselectableElementsSelector) => {
    const els = slide.querySelectorAll(unselectableElementsSelector);
    els.forEach(el => {
      el.onselectstart = () => false;
      el.onmousedown = () => false;
      el.setAttribute('unselectable', 'on');
      el.style.userSelect = 'none';
    });
  },

  fullScreenElement: (slide, elementSelector) => {
    const el = slide.querySelector(elementSelector);
    const requestFullScreenName = document.documentElement.requestFullScreen ?
      'requestFullScreen' : `${['webkit', 'moz'].find(p => document.documentElement[`${p}RequestFullScreen`])}RequestFullScreen`;
    const exitFullScreenName = document.exitFullScreen ?
      'exitFullScreen' : `${['webkitExit', 'webkitCancel', 'mozExit', 'mozCancel']
        .find(p => document[`${p}FullScreen`])}FullScreen`;

    if (requestFullScreenName && exitFullScreenName) {
      this.on('activate', e =>{
        if (e.slide === slide) {
          el[requestFullScreenName]();
        }
      });
      this.on('deactivate', e => {
        if (e.slide === slide) {
          document[exitFullScreenName]();
        }
      });
    }
  },

  fullPageElement: (slide, elementSelector) => {
    const el = slide.querySelector(elementSelector);
    el.style.width = window.getComputedStyle(slide).width;
    el.style.height = window.getComputedStyle(slide).height;
    el.style.position = 'absolute';
    el.style.left = el.style.top = '0';
    // fix for chrome hiding the video controls behind (or under) the video
    // from: https://stackoverflow.com/questions/22217084/video-tag-at-chrome-overlays-on-top
    el.style.backfaceVisibility = 'hidden';
    el.style.transform = 'translateZ(0)';
  },

  playMediaOnActivation: function(slide, { selector, delay = '1500'}) {
    const els = slide.querySelectorAll(selector);
    this.on('activate', e => {
      if (e.slide === slide) {
        setTimeout(() => {
          Array.from(els).forEach(e => e.play ? e.play() : null);
        }, delay);
      }
    });
    this.on('deactivate', e => {
      if (e.slide === slide) {
        setTimeout(() => {
          Array.from(els).forEach(e => e.pause ? e.pause() : null);
        }, delay);
      }
    });
  },

  embedSVG: (slide, selector) => {
    const svgs = slide.querySelectorAll(selector);
    svgs.forEach(el => {
      // pega o id da <img>
      const id = el.id;
      const classes = el.className.split(' ').filter(c => c.trim() !== '');
      const style = el.style.cssText;

      // faz requisição para pegar o conteúdo SVG
      fetch(el.src)
        .then(r => r.text())
        .then(svg => {

          // cria o documento svg
          const svgContainerEl = document.createElement('span');
          svgContainerEl.innerHTML = svg;
          const svgEl = svgContainerEl.querySelector('svg');
          svgEl.id = id;
          if (classes.length > 0) {
            svgEl.classList.add(...classes);
          }
          svgEl.style.cssText = style;

          // substitui a <img src="...svg"> pelo documento
          el.parentElement.replaceChild(svgContainerEl, el);
        })
        .catch(console.error);
    });
  }
}

const extensions = [
  [
    markdownItContainer,
    'div',
    {
      validate: params => params.trim().match(/^div.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: div .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        let m = tokens[idx].info.trim().match(/^div\s+([^\s]*)\s*(.*)?$/),
          className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return '<div class="' + className + '" style="' + styleString + '">\n';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'figure',
    {
      validate: params => params.trim().match(/^figure.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: figure .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        let m = tokens[idx].info.trim().match(/^figure\s+([^\s]*)\s*(.*)?$/),
          className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return '<figure class="' + className + '" style="' + styleString + '">\n';
        } else {
          // closing tag
          return '</figure>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'result',
    {
      validate: params => params.trim().match(/^result.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: result .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        let m = tokens[idx].info.trim().match(/^result\s+([^\s]*)\s*(.*)?$/),
          className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return '<div class="result ' + className + '" style="' + styleString + '" data-before="Resultado">\n';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'did-you-know',
    {
      validate: params => params.trim().match(/^did\-you\-know.*$/),

      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: did-you-know .primeira-classe.segunda.terceira background-color: white; color: black;
        // ...conteúdo markdown...
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        let m = tokens[idx].info.trim().match(/^did\-you\-know\s+([^\s]*)\s*(.*)?$/),
          className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return '<div class="did-you-know ' + className + '" style="' + styleString + '" data-before="Você Sabia??">\n';
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'gallery',
    {
      validate: (params) => params.trim().match(/^gallery.*$/),
      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: gallery .primeira-classe.segunda.terceira background-color: white; color: black;
        // - [![Descricao](imagem)](link)
        // - [![Descricao](imagem)](link)
        // :::
        // as classes devem estar "coladas" uma na outra e são opcionais
        // após as classes, é possível definir uma string de estilos, que
        // também é opcional. Se a string de estilos for definida, é
        // necessário definir pelo menos 1 classe (ou então colocar apenas um
        // ponto final sem nome de classe)
        const m = tokens[idx].info.trim().match(/^gallery\s+([^\s]*)\s*(.*)?$/);
        let  className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }
          return `<div class="gallery ${className}" style="${styleString}">\n`;
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'zoomable',
    {
      validate: (params) => params.trim().match(/^zoomable.*$/),
      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: gallery [1, 2, 4, 8, 16]
        // ![Descricao](imagem)
        // :::
        const m = tokens[idx].info.trim().match(/^zoomable\s+([^\s]*)\s*(.*)?$/)
        let className = '',
          styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m) && m[1]) {
            className = (m[1] || '').trim().replace(/\./g, ' ');
            styleString = (m[2] || '').trim();
          }

          window.zoom = e => {
            if (e.button !== 0) return;
            const containerEl = e.currentTarget;
            const zoomedEls = containerEl.children;
            if (e.type === 'mousedown') {

              containerEl.dataset.zooming = 'true';
              Array.from(zoomedEls).forEach(el => {
                el.classList.add('zoomed-in');
              });
            } else {
              containerEl.dataset.zooming = 'false';
              Array.from(zoomedEls).forEach(el => {
                el.classList.remove('zoomed-in');
              });
            }
          };

          window.moveZoom = e => {
            const containerEl = e.currentTarget;
            if (containerEl.dataset.zooming === 'true') {
              const zoomedEls = containerEl.children;
              const parentRectangle = containerEl.getBoundingClientRect();
              const click = {
                x: e.clientX - parentRectangle.left,
                y: e.clientY - parentRectangle.top
              };

              Array.from(zoomedEls).forEach(el => {
                el.style.transformOrigin = `${100*click.x/parentRectangle.width}% ${100*click.y/parentRectangle.height}%`
              });
            }
          };

          return `<div class="zoomable ${className}" style="${styleString}" onmousedown="window.zoom(event)" onmouseup="window.zoom(event)" onmousemove="window.moveZoom(event)">\n`;
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  [
    markdownItContainer,
    'vis',
    {
      validate: (params) => params.trim().match(/^vis.*$/),
      render: (tokens, idx, options, env, self) => {
        // formato:
        // ::: vis timeline file.json .timeline background-color: white; color: black;
        // ![](../../images/cover-image.png)
        // :::
        const m = tokens[idx].info.trim().match(/^vis\s+([^\s]+)\s+([^\s]*)\s*([^\s]*)\s*(.*)?$/);
        let type = '';
        let url = '';
        let className = '', styleString = '';

        if (tokens[idx].nesting === 1) {
          // opening tag
          if (!!m && Array.isArray(m)) {
            type = (m[1] || '').trim();
            url = (m[2] || '').trim();
            className = (m[3] || '').trim().replace(/\./g, ' ');
            styleString = (m[4] || '').trim();
          }
          return `<div class="vis ${className}" style="${styleString}" data-vis="${type}" data-vis-url="${url}">\n`;
        } else {
          // closing tag
          return '</div>\n';
        }
      }
    }
  ],
  markdownItDefList,
  markdownItAbbr,
  markdownItDecorate,
  markdownItEmoji
];

export { config, extensions };
