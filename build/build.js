(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/*! bespoke-theme-sandy v1.0.0 © 2019 Flávio Coutinho, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;(t=(t=(t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bespoke||(t.bespoke={})).theme||(t.theme={})).sandy=e()}}(function(){return function l(n,r,s){function p(t,e){if(!r[t]){if(!n[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(b)return b(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var a=r[t]={exports:{}};n[t][0].call(a.exports,function(e){return p(n[t][1][e]||e)},a,a.exports,l,n,r,s)}return r[t].exports}for(var b="function"==typeof require&&require,e=0;e<s.length;e++)p(s[e]);return p}({1:[function(e,t,o){var i=e("bespoke-classes"),a=e("insert-css");t.exports=function(e){var t=t="@import url(https://fonts.googleapis.com/css?family=Maitree:400,700|Roboto:400,700|Cousine);\n/*# sourceMappingURL=fonts.css.map */\n/*# sourceMappingURL=fonts.css.map */\n";return(e=e||{insertFonts:!0}).insertFonts&&a(t,{prepend:!0}),a('/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\n@-webkit-keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@-webkit-keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@-webkit-keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@-webkit-keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}@keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.figure-slides>p,body,figure.embedded-caption p{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,ol,section,summary,ul{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0;color:#209934;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:initial}b{font-weight:700}dfn{font-style:italic}h1,mark{color:#000}h1{font-family:\'Maitree\',times,serif;font-size:2.5em}mark{background:#ff0}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre,samp{font-size:1em}pre{overflow:auto}samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend,pre>code{border:0;padding:0}textarea{overflow:auto}optgroup,strong{font-weight:700}table{border-collapse:collapse;border-spacing:0;border:2px solid gray;max-width:100%}td,th{border:1px solid gray}*{-webkit-box-sizing:border-box;box-sizing:border-box}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:#f7f9fb;color:#333;font-size:24px}.bespoke-parent:not(.emphatic){-webkit-transition:background-color 400ms ease;transition:background-color 400ms ease}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;will-change:transform}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{-webkit-transition:opacity .4s ease;transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2):not(.bespoke-after-3):not(.bespoke-before-3){display:none}.emphatic{background-color:#3507a3}.emphatic,.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#fff}.emphatic strong{color:#38088e}}h2{font-size:1.5em}h3,ol.columns-3>li>h1,ol.columns-3>li>h2,ol.columns-3>li>h3,ol.columns-3>li>h4,ol.columns-3>li>h5,ol.columns-3>li>h6,ul.columns-3>li>h1,ul.columns-3>li>h2,ul.columns-3>li>h3,ul.columns-3>li>h4,ul.columns-3>li>h5,ul.columns-3>li>h6{font-size:1.25em}h4,h5,h6{font-size:1em}code,h2,h3,h4,h5,h6,pre{font-family:\'Roboto\',\'San Francisco\',helvetica,arial,sans-serif;color:#000}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em;line-height:1em}li,p{font-size:24px;line-height:1.5em}strong{color:#3507a3}strong.alternate-color{color:#7b9c02}article{font-family:\'Roboto\',\'San Francisco\',helvetica,arial,sans-serif}a:hover{text-decoration:underline}code,pre{border:1px solid rgba(0,20,80,.1);border-radius:.15em;background:#fff;font-family:\'Cousine\',monospace;-webkit-transition:-webkit-box-shadow 200ms ease;transition:box-shadow 200ms ease;transition:box-shadow 200ms ease,-webkit-box-shadow 200ms ease}pre{max-width:1026.6666666666665px;padding:1em;-webkit-box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078);box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078)}pre:hover{-webkit-box-shadow:0 8px 32px rgba(0,20,80,.078),0 4px 24px rgba(0,0,0,.078);box-shadow:0 8px 32px rgba(0,20,80,.078),0 4px 24px rgba(0,0,0,.078)}code{font-size:.75em;background-color:#fff;padding:.25em;-webkit-box-shadow:0 4px 8px rgba(0,20,80,.039),0 2px 8px rgba(0,0,0,.078);box-shadow:0 4px 8px rgba(0,20,80,.039),0 2px 8px rgba(0,0,0,.078)}code:hover{-webkit-box-shadow:0 4px 24px rgba(0,20,80,.078),0 2px 24px rgba(0,0,0,.078);box-shadow:0 4px 24px rgba(0,20,80,.078),0 2px 24px rgba(0,0,0,.078)}pre>code{font-size:.83333em;background-color:transparent;border:initial}pre>code,pre>code:hover{-webkit-box-shadow:initial;box-shadow:initial}pre code span{word-wrap:break-word;word-break:break-all}pre.hljs{margin:auto}pre.hljs+pre.hljs{margin-top:1em}ol.no-list-icon,ul.no-list-icon{list-style-type:none}ol.columns-3,ul.columns-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}ol.columns-3>li,ul.columns-3>li{-webkit-box-flex:1;-ms-flex:1;flex:1}ol.columns-3>li:not(:last-of-type),ul.columns-3>li:not(:last-of-type){margin-right:1em}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:10.5em}dl.width-40>dt{width:40%}dl.width-40>dd{margin-left:42%}dl.width-50>dt{width:50%}dl.width-50>dd{margin-left:52%}del{color:gray}tr{background-color:rgba(255,255,255,.7);border:1px solid rgba(0,0,0,.4)}tr:nth-of-type(even)>td{background-color:rgba(255,255,255,.4)}td{padding:6px}th{color:#fff;padding:10px;background-color:#333}td:not(:last-child),th:not(:last-child){border-right:1px solid rgba(0,0,0,.2)}thead>tr{background-color:#555;color:#fff}blockquote{margin:.25em 0;padding:.25em 40px;background:#f5f5f5;-webkit-box-shadow:4px 4px 4px silver;box-shadow:4px 4px 4px silver;line-height:1.45;font-size:18px;font-family:Georgia,serif;font-style:italic;color:#383838;border:1px solid silver}blockquote.centered{margin-left:auto;margin-right:auto}blockquote>p{margin:.5em auto}blockquote::before{content:"\\201C";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:#7a7a7a}blockquote cite{display:block;margin-top:5px;font-size:75%;color:#999}blockquote cite::before{content:"\\2014 \\2009"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;-webkit-box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;-webkit-transition:top 40ms ease-out,-webkit-box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out,-webkit-box-shadow 40ms ease-out}kbd:hover{top:4px;-webkit-box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset}figcaption{background-color:#f5f5f5;padding:5px;margin-bottom:3px}blockquote,figure.embedded-caption,kbd{position:relative}figure.embedded-caption figcaption{position:absolute;background-color:rgba(0,0,0,.25)}figure.embedded-caption figcaption.caption-bottom{bottom:1em}figure.embedded-caption figcaption.caption-top{top:1em;left:0;right:0}figure.embedded-caption figcaption.caption-bottom{left:0;right:0}.push-code-right>code,img[alt$=right]{float:right}.push-code-left>code,img[alt$=left]{float:left}.push-right{float:right;margin-left:20px}.push-left{float:left;margin-right:20px}.push-code-right pre{float:right;clear:right}.push-code-left pre{float:left;clear:left}.figure-slides{position:relative}.figure-slides.clean .bespoke-bullet:not(.bespoke-bullet-current){visibility:hidden}.figure-step:not(:first-child){position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}input.switch:empty{display:block;margin-left:-999px}input.switch:empty~label{position:relative;float:left;line-height:1.6em;text-indent:4em;margin:.2em 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input.switch:empty~label:after,input.switch:empty~label:before{position:absolute;display:block;top:0;bottom:0;left:0;content:\' \';width:3.6em;background-color:#c33;border-radius:.3em;-webkit-box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);-webkit-transition:all 100ms ease-in;transition:all 100ms ease-in}input.switch:empty~label:after{width:1.4em;top:.1em;bottom:.1em;margin-left:.1em;background-color:#fff;border-radius:.15em;-webkit-box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2);box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2)}input.switch:checked~label:before{background-color:#393}input.switch:checked~label:after{margin-left:2.1em}img.full-width{width:100%}img.large-width{width:80%}img.medium-width{width:60%}img.small-width{width:40%}img.full-height{height:100%}img.huge-height{height:80%}img.large-height{height:60%}img.medium-height{height:40%}img.small-height{height:20%}img.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;-webkit-animation:floating 2s ease-in-out 0s infinite alternate;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:" ";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0%,rgba(255,255,255,0) 100%);z-index:-1;-webkit-animation:floated-element-shadow 2s ease-in-out 0s infinite alternate;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{-webkit-transition:-webkit-transform 600ms ease-out;transition:transform 600ms ease-out;transition:transform 600ms ease-out,-webkit-transform 600ms ease-out}.flips *{margin:0}.flips:hover{-webkit-transform:rotateY(720deg);transform:rotateY(720deg)}.portrait{shape-outside:circle(50%)}.contain{max-width:100%;max-height:100%}.half-width{width:50%}.three-quarter-width{width:75%}img.centered{display:block;margin-left:auto;margin-right:auto}.full-width,.layout-stripe.bespoke-slide h1+p,.layout-stripe.bespoke-slide h2+p,.layout-stripe.bespoke-slide h3+p,.layout-stripe.bespoke-slide h4+p,.layout-stripe.bespoke-slide h5+p,.layout-stripe.bespoke-slide h6+p{width:100%}.center-aligned{text-align:center}.centered{margin-left:auto;margin-right:auto}.emoji{height:1em;width:1em;vertical-align:middle}.on-line{height:1em;line-height:1em}.no-margin{margin:0}.no-padding{padding:0}.full-page-video-caption{position:absolute;bottom:30px;font-size:.75em;left:50%;width:16em;text-align:center;margin-left:-8em;padding:0;background-color:rgba(255,255,8,.65);border-radius:.25em;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2);box-shadow:3px 3px 3px rgba(0,0,0,.2)}.bullet-no-anim{-webkit-transition:none!important;transition:none!important}.full-width-slides,.full-width-slides img{max-width:100%}.bordered{border:1px solid rgba(0,0,0,.5)}.rounded{border-radius:4px}.clearer{clear:both}.compact-code pre,.compact-code~pre{line-height:1em}.compact-code-more pre,.compact-code-more~pre{line-height:1em;font-size:75%}.code-split-2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.code-split-2 pre.hljs{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:0;margin-bottom:0}.code-split-2 pre.hljs:not(:last-of-type){border-right:3px double #fff}.code-split-2 pre.hljs+pre.hljs{margin-top:0}.horizontal-list{list-style:none}.horizontal-list>li{display:inline-block;width:25%;margin:0 4.5% 0 0;vertical-align:middle}.horizontal-list>li:last-of-type{margin:0}.multi-column-list-2,.multi-column-list-3{padding-left:0;-webkit-column-count:2;column-count:2;list-style-position:inside}.multi-column-list-3{-webkit-column-count:3;column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;-webkit-column-count:4;column-count:4;list-style-position:inside}.multi-column-list-5{-webkit-column-count:5;column-count:5}.horizontal-list-flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.no-bullet,.no-bullet li{list-style-type:none}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.layout-split-2>section{width:50%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-3>section,.layout-split-4>section,.layout-split-5>section{width:33.33333333333333%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-4>section,.layout-split-5>section{width:25%}.layout-split-5>section{width:20%}.item-code-with-image,.item-code-with-result{padding-left:0;list-style-type:none}.item-code-with-image li,.item-code-with-result li{clear:right;margin-bottom:1em}.item-code-with-image li>.result,.item-code-with-image li>img,.item-code-with-result li>.result,.item-code-with-result li>img{float:right;margin-left:1em}.note{border:1px solid transparent;list-style-type:none;border-radius:5px;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2);box-shadow:3px 3px 3px rgba(0,0,0,.2);padding:.3em .5em}.note::before{content:"";margin-right:1rem;color:currentColor;width:1.5em;height:1.5em;display:inline-block;text-align:center;line-height:1.5em;font-size:1em;-webkit-box-sizing:border-box;box-sizing:border-box}.note.info{border-color:#0ba8b8;background:-webkit-gradient(linear,left top,right bottom,from(#ffffe0),to(#a9dbe0));background:linear-gradient(to right bottom,#ffffe0,#a9dbe0)}.note.info strong{color:#0ba8b8}.note.info::before{content:"🛈"}.note.warning{border-color:#b8860b;background:-webkit-gradient(linear,left top,right bottom,from(#ffffe0),to(#fff176));background:linear-gradient(to right bottom,#ffffe0,#fff176)}.note.warning strong{color:#b8860b}.note.warning::before{content:"⚠"}.badge{display:inline-block;background-color:#fff;border-radius:4px;border:1px solid #333;color:#666;font-size:75%;line-height:1em;padding:.1em .2em}.badge.type1{color:teal;border-color:teal}.badge.type2{color:#6495ed;border-color:#6495ed}.bouncing-left{-webkit-animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate;animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate}.delay-1{-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-transition-delay:.2s;transition-delay:.2s}.delay-2{-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-transition-delay:.4s;transition-delay:.4s}.delay-3{-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-transition-delay:.6s;transition-delay:.6s}.delay-4{-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-transition-delay:.8s;transition-delay:.8s}.delay-5{-webkit-animation-delay:1s;animation-delay:1s;-webkit-transition-delay:1s;transition-delay:1s}.delay-6{-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-transition-delay:1.2s;transition-delay:1.2s}.card-list,.card-list li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.card-list{list-style-type:none;padding:0;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around}.card-list li{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:.25em}.card-list li figcaption,.card-list li h1,.card-list li h2,.card-list li h3,.card-list li h4,.card-list li h5,.card-list li h6{font-size:1em;text-align:center;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin-top:.5em!important}.card-list li img{max-width:100%;margin:auto;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}.card-list.polaroid li{background:#fff;-webkit-box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078);box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078)}.card-list.polaroid li img{background-color:#f0f8ff;border:11px solid #fff}.card-list.cover li img{-o-object-fit:cover;object-fit:cover}.card-list.contain li img{-o-object-fit:contain;object-fit:contain}.card-list li img,.card-list.title-top figcaption,.card-list.title-top h1,.card-list.title-top h2,.card-list.title-top h3,.card-list.title-top h4,.card-list.title-top h5,.card-list.title-top h6{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.card-list.title-top img{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}@media screen{.transition-sliding,.transition-subtle,.transition-subtle-to-right{overflow:hidden}.bespoke-slide,.transition-sliding .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity .4s ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity .4s ease;transition:transform 400ms ease,opacity .4s ease,-webkit-transform 400ms ease}.transition-sliding .bespoke-before{-webkit-transform:translate3d(-101%,0,0);transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{-webkit-transform:translate3d(101%,0,0);transform:translate3d(101%,0,0)}.bespoke-slide{-webkit-transition:opacity 400ms ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity 400ms ease;transition:transform 400ms ease,opacity 400ms ease,-webkit-transform 400ms ease}.bespoke-before{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}.bespoke-after{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}.transition-book,.transition-giant-wheel,.transition-subtle-to-bottom,.transition-subtle-to-left,.transition-subtle-to-top{overflow:hidden}.transition-subtle-to-left .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.transition-subtle-to-left .bespoke-before{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}.transition-subtle-to-left .bespoke-after{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}.transition-subtle-to-bottom .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.transition-subtle-to-bottom .bespoke-before{-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}.transition-subtle-to-bottom .bespoke-after{-webkit-transform:translate3d(0,10%,0);transform:translate3d(0,10%,0)}.transition-subtle-to-top .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.transition-subtle-to-top .bespoke-before{-webkit-transform:translate3d(0,10%,0);transform:translate3d(0,10%,0)}.transition-subtle-to-top .bespoke-after{-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}.transition-giant-wheel .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:50% -100%;transform-origin:50% -100%}.transition-giant-wheel .bespoke-before{-webkit-transform:rotateZ(15deg);transform:rotateZ(15deg)}.transition-giant-wheel .bespoke-after{-webkit-transform:rotateZ(-15deg);transform:rotateZ(-15deg)}.transition-book .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:0 0;transform-origin:0 0}.transition-book .bespoke-before{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}.transition-book .bespoke-after{-webkit-transform:rotateY(10deg);transform:rotateY(10deg)}}.layout-title.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.layout-title.bespoke-slide h1{-webkit-box-flex:.65;-ms-flex:.65;flex:.65;margin:0;padding:.25em;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#fff;text-align:left;text-shadow:.025em .025em #000}.layout-title.bespoke-slide h1::before{content:"";position:absolute;left:0;right:0;top:0;bottom:35%;background-size:cover;background-position:50% 100%;z-index:-1}.layout-title.bespoke-slide h2{-webkit-box-flex:.25;-ms-flex:.25;flex:.25;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;padding:.25em;text-align:right;color:#000}.layout-section-header.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.layout-section-header.bespoke-slide::after,.layout-section-header.bespoke-slide::before{content:"";position:absolute;top:0;bottom:0;width:50%}.layout-section-header.bespoke-slide::after{z-index:-1}.layout-section-header.bespoke-slide::before{left:0;-webkit-box-shadow:10px 0 10px rgba(0,0,0,.2);box-shadow:10px 0 10px rgba(0,0,0,.2);z-index:0}.layout-section-header.bespoke-slide::after{right:0;background-color:#fff;background-size:cover}.layout-section-header.bespoke-slide h1+:not(h2),.layout-section-header.bespoke-slide h1+h2~:not(.content){-webkit-box-flex:1;-ms-flex:1;flex:1}.layout-section-header.bespoke-slide .content{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;text-shadow:.05em .05em #000}.layout-section-header.bespoke-slide .content strong{color:#8a5cf8}.layout-section-header.bespoke-slide .content>img{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;justify-self:center;-ms-flex-item-align:center;align-self:center}.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{display:inline}.layout-section-header.bespoke-slide .content p::after{content:" ";display:block;margin-bottom:.5em}.layout-section-header.bespoke-slide .content li::before{content:" ";display:list-item;float:left}.layout-section-header.bespoke-slide .content li::after{content:" ";display:block}.layout-section-header.bespoke-slide>*{width:50%;padding:0 1em}.layout-section-header.bespoke-slide>ol,.layout-section-header.bespoke-slide>ul{padding-left:2em}.layout-section-header.bespoke-slide h1,.layout-section-header.bespoke-slide h2{margin:0;padding:.25em;text-align:left}.layout-section-header.bespoke-slide h1{-webkit-box-flex:.25;-ms-flex:.25;flex:.25;font-weight:700}.layout-section-header.bespoke-slide h2{-webkit-box-flex:.75;-ms-flex:.75;flex:.75;color:inherit}.layout-2-column-content.bespoke-slide,.layout-regular.bespoke-slide,.layout-stripe.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem}.layout-regular.bespoke-slide>h1,.layout-regular.bespoke-slide>h2{font-size:2em}.layout-regular.bespoke-slide h1,.layout-regular.bespoke-slide h2,.layout-regular.bespoke-slide h3,.layout-regular.bespoke-slide h4,.layout-regular.bespoke-slide h5,.layout-regular.bespoke-slide h6{margin:0 0 .75em;padding:0}.layout-stripe.bespoke-slide>h1,.layout-stripe.bespoke-slide>h2{font-size:2em}.layout-stripe.bespoke-slide .stripe{width:100%;height:3em;-o-object-fit:contain;object-fit:contain;background-size:5em;background-repeat:repeat-x;margin-bottom:2em}.layout-stripe.bespoke-slide h1,.layout-stripe.bespoke-slide h2,.layout-stripe.bespoke-slide h3,.layout-stripe.bespoke-slide h4,.layout-stripe.bespoke-slide h5,.layout-stripe.bespoke-slide h6{-ms-flex-item-align:center;align-self:center}.layout-2-column-content.bespoke-slide{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content.bespoke-slide>h1,.layout-2-column-content.bespoke-slide>h2{font-size:2em}.layout-2-column-content.bespoke-slide h1,.layout-2-column-content.bespoke-slide h2,.layout-2-column-content.bespoke-slide h3,.layout-2-column-content.bespoke-slide h4,.layout-2-column-content.bespoke-slide h5,.layout-2-column-content.bespoke-slide h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-content.bespoke-slide>*+*{width:49%;margin-left:1%;margin-right:0}.layout-2-column-content.bespoke-slide>*+::last-child,.layout-2-column-highlight-and-list>*+::last-child{margin-left:0}.layout-centered-horizontal.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1.5rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-2-column-content-zigzag.bespoke-slide>h1,.layout-2-column-content-zigzag.bespoke-slide>h2,.layout-centered-horizontal.bespoke-slide>h1,.layout-centered-horizontal.bespoke-slide>h2,.layout-regular-block.bespoke-slide>h1,.layout-regular-block.bespoke-slide>h2,.layout-regular-horizontal.bespoke-slide>h1,.layout-regular-horizontal.bespoke-slide>h2{font-size:2em}.layout-regular-horizontal.bespoke-slide{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content-zigzag.bespoke-slide,.layout-regular-block.bespoke-slide,.layout-regular-horizontal.bespoke-slide,[class*=layout-2-column-content-]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;padding:1.5rem;align-items:flex-start}.layout-regular-block.bespoke-slide{display:block}.layout-2-column-content-zigzag.bespoke-slide,[class*=layout-2-column-content-]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-2-column-content-zigzag.bespoke-slide h1,.layout-2-column-content-zigzag.bespoke-slide h2{width:100%}.layout-2-column-content-zigzag.bespoke-slide>:not(:first-child){width:48%}.layout-2-column-content-result.bespoke-slide{display:-webkit-box;display:-ms-flexbox;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1.5rem;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.layout-2-column-content-result.bespoke-slide>h1,.layout-2-column-content-result.bespoke-slide>h2,.layout-2-column-highlight-and-list>h1,.layout-2-column-highlight-and-list>h2,[class*=layout-2-column-content-]>h1,[class*=layout-2-column-content-]>h2{font-size:2em}.layout-2-column-content-result.bespoke-slide>*{width:48%}[class*=layout-2-column-content-]>:first-child{width:100%;-ms-flex-item-align:end;align-self:flex-end}[class*=layout-2-column-content-]>pre{max-height:calc(100% - .25em - 1.5em - 24px - 4em)}.layout-2-column-highlight-and-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-perspective:900px;perspective:900px}.layout-2-column-highlight-and-list h1,.layout-2-column-highlight-and-list h2,.layout-2-column-highlight-and-list h3,.layout-2-column-highlight-and-list h4,.layout-2-column-highlight-and-list h5,.layout-2-column-highlight-and-list h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-highlight-and-list>:nth-child(2){width:30%;-webkit-box-shadow:20px 20px 20px rgba(0,0,0,.2);box-shadow:20px 20px 20px rgba(0,0,0,.2);-webkit-transition:all 500ms ease 400ms;transition:all 500ms ease 400ms;opacity:.5;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:right;transform-origin:right;margin-top:1em}.layout-2-column-highlight-and-list>:nth-child(2)>img,.layout-tall-figure-left>:nth-child(2)>img,.layout-tall-figure-right>:nth-child(2)>img{max-width:100%;max-height:100%}.layout-2-column-highlight-and-list.bespoke-active>:nth-child(2){-webkit-transform:rotateY(30deg) scale(1);transform:rotateY(30deg) scale(1);opacity:1}.layout-2-column-highlight-and-list>*+*{width:60%;margin-left:1%;margin-right:0}.layout-3-column-element-with-titles-expansible{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.layout-3-column-element-with-titles-expansible>*{width:calc(33% - 1rem)}.layout-3-column-element-with-titles-expansible h1,.layout-3-column-element-with-titles-expansible h2,.layout-3-column-element-with-titles-expansible h3,.layout-3-column-element-with-titles-expansible h4,.layout-3-column-element-with-titles-expansible h5,.layout-3-column-element-with-titles-expansible h6{margin:auto 0}.layout-3-column-element-with-titles-expansible h1:not(:last-of-type),.layout-3-column-element-with-titles-expansible h2:not(:last-of-type),.layout-3-column-element-with-titles-expansible h3:not(:last-of-type),.layout-3-column-element-with-titles-expansible h4:not(:last-of-type),.layout-3-column-element-with-titles-expansible h5:not(:last-of-type),.layout-3-column-element-with-titles-expansible h6:not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n){height:calc(100% - 2.5em);margin:0;-webkit-transition:all 100ms ease;transition:all 100ms ease;position:relative}.layout-3-column-element-with-titles-expansible>:nth-child(2n):not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n):hover{left:0;width:100%;z-index:1}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2){-webkit-transition-duration:50ms;transition-duration:50ms}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2):hover{left:-33%}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3){-webkit-transition:none;transition:none}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3):hover{left:-67%}.layout-main-point.bespoke-slide{background-image:-webkit-gradient(linear,left top,right bottom,from(#3507a3),to(#1d045a));background-image:linear-gradient(to right bottom,#3507a3,#1d045a)}.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6{color:#fff}.layout-circling-balloons h1,.layout-circling-balloons h2,.layout-circling-balloons h3,.layout-circling-balloons h4,.layout-circling-balloons h5,.layout-circling-balloons h6{z-index:1}.layout-circling-balloons>ul{position:absolute;left:0;top:0;width:100%;height:100%;margin:0}.layout-circling-balloons>ul>li{position:absolute;width:200px;height:200px;left:calc(50% - 100px);top:calc(50% - 100px);padding:0;margin:0;border-radius:50%;background:gold;overflow:hidden;list-style-type:none;-webkit-transition:all 250ms ease;transition:all 250ms ease;-webkit-animation:circling 36s linear 0s infinite;animation:circling 36s linear 0s infinite}.layout-circling-balloons>ul>li:nth-of-type(1){-webkit-animation-delay:0s;animation-delay:0s}.layout-circling-balloons>ul>li:nth-of-type(2){-webkit-animation-delay:-12s;animation-delay:-12s}.layout-circling-balloons>ul>li:nth-of-type(3){-webkit-animation-delay:-24s;animation-delay:-24s}.layout-circling-balloons>ul>li>p:first-child{margin:0}.layout-circling-balloons>ul>li>img:first-child,.layout-circling-balloons>ul>li>p:first-child{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transition:all 250ms ease;transition:all 250ms ease}.layout-circling-balloons>ul>li>img:first-child,.layout-circling-balloons>ul>li>img:first-child img,.layout-circling-balloons>ul>li>p:first-child img{display:block;width:125px;height:125px;margin:37.5px auto}.layout-circling-balloons>ul>li>:nth-child(2){margin-top:200px;padding:1em}.layout-circling-balloons>ul>li:hover{width:26em;height:10em;top:calc(50% - 5em);left:calc(50% - 13em);border-radius:2em;overflow:visible;z-index:2}.layout-circling-balloons>ul>li:hover>:first-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.layout-circling-balloons>ul>li:hover>:nth-child(2){margin-top:1em}.layout-circling-balloons>ul:hover>li{-webkit-animation-play-state:paused;animation-play-state:paused}.layout-tall-figure-left,.layout-tall-figure-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-tall-figure-left>h1,.layout-tall-figure-left>h2,.layout-tall-figure-right>h1,.layout-tall-figure-right>h2{font-size:2em}.layout-tall-figure-left h1,.layout-tall-figure-left h2,.layout-tall-figure-left h3,.layout-tall-figure-left h4,.layout-tall-figure-left h5,.layout-tall-figure-left h6,.layout-tall-figure-right h1,.layout-tall-figure-right h2,.layout-tall-figure-right h3,.layout-tall-figure-right h4,.layout-tall-figure-right h5,.layout-tall-figure-right h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(2){-ms-flex-preferred-size:30%;flex-basis:30%}.layout-tall-figure-left>:nth-child(3),.layout-tall-figure-right>:nth-child(3){-ms-flex-preferred-size:70%;flex-basis:70%}.layout-tall-figure-right>:nth-child(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(3){-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.layout-tall-figure-left>:nth-child(3){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.show-active-slide-and-previous .bespoke-before-1{-webkit-transform:translate3d(-30%,0,-250px) rotateY(10deg);transform:translate3d(-30%,0,-250px) rotateY(10deg);opacity:1}.show-active-slide-and-previous .bespoke-active{-webkit-transform:translate3d(30%,0,-250px) rotateY(-10deg);transform:translate3d(30%,0,-250px) rotateY(-10deg)}[data-bespoke-state=show-active-slide-and-previous].bespoke-before-1{-webkit-transform:translate3d(-30%,0,-250px) rotateY(10deg);transform:translate3d(-30%,0,-250px) rotateY(10deg);opacity:0}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-bullet{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .4s ease;transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);-webkit-transition:all .2s ease;transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bullet-old{color:gray}.bullet-no-anim{-webkit-transition-property:opacity;transition-property:opacity}.bullet-no-anim.bespoke-bullet-inactive{-webkit-transform:none;transform:none}.bullet.bullet.bullet-no-anim.bespoke-bullet-inactive{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}.bespoke-progress-parent{position:absolute;bottom:0;left:0;right:0;height:5px;z-index:2}.bespoke-progress-bar{position:absolute;height:100%;-webkit-transition:width .3s ease;transition:width .3s ease}.bespoke-progress-bar::before{content:" ";position:absolute;display:block;width:100%;height:100%;background:#3507a3}.bespoke-progress-number{position:absolute;font-size:9px;min-width:2em;height:2em;right:1rem;top:1rem;-webkit-box-sizing:content-box;box-sizing:content-box;background-color:rgba(204,204,204,.6);background-clip:content-box;color:#3507a3;text-align:center;line-height:2em;padding:0;border:3px double rgba(204,204,204,.6)}.bespoke-parent,.bespoke-scale-parent{-webkit-perspective:900px;perspective:900px}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4):not(.bespoke-after-5):not(.bespoke-after-6){-webkit-transform:translate3d(7634.667338669354px,0,-2000px);transform:translate3d(7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4):not(.bespoke-before-5):not(.bespoke-before-6){-webkit-transform:translate3d(-7634.667338669354px,0,-2000px);transform:translate3d(-7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(1090.6667626670505px,0,-2000px);transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-1090.6667626670505px,0,-2000px);transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(2181.333525334101px,0,-2000px);transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-2181.333525334101px,0,-2000px);transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(3272.0002880011516px,0,-2000px);transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-3272.0002880011516px,0,-2000px);transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(4362.667050668202px,0,-2000px);transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-4362.667050668202px,0,-2000px);transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(5453.333813335253px,0,-2000px);transform:translate3d(5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-5453.333813335253px,0,-2000px);transform:translate3d(-5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-6{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(6544.000576002303px,0,-2000px);transform:translate3d(6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-6{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transform:translate3d(-6544.000576002303px,0,-2000px);transform:translate3d(-6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);-webkit-transition:opacity 100ms ease-out;transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:0;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:0;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);-webkit-transition:bottom 140ms ease-out;transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:orange}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:0 0!important}body,html{overflow:visible!important}body{margin:0!important;padding:.1in!important;height:auto!important}body,code{line-height:1em!important}code,ol,pre,ul{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{-webkit-box-sizing:border-box!important;box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;transform:none!important;-webkit-transition:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-column-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */\n/*# sourceMappingURL=theme.css.map */\n',{prepend:!0}),function(e){i()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,o){t.exports=function(){return function(l){var n=function(e,t){e.classList.add("bespoke-"+t)},r=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},t=function(e,t){var o=l.slides[l.slide()],i=t-l.slide(),a=0<i?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(r.bind(null,e)),e!==o&&["inactive",a,a+"-"+Math.abs(i)].map(n.bind(null,e))};n(l.parent,"parent"),l.slides.map(function(e){n(e,"slide")}),l.on("activate",function(e){l.slides.map(t),n(e.slide,"active"),r(e.slide,"inactive")})}}},{}],3:[function(e,t,o){var r=[],s=[];function i(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i,a=!0===t.prepend?"prepend":"append",l=void 0!==t.container?t.container:document.querySelector("head"),n=r.indexOf(l);return-1===n&&(n=r.push(l)-1,s[n]={}),void 0!==s[n]&&void 0!==s[n][a]?o=s[n][a]:(o=s[n][a]=((i=document.createElement("style")).setAttribute("type","text/css"),i),"prepend"===a?l.insertBefore(o,l.childNodes[0]):l.appendChild(o)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),o.styleSheet?o.styleSheet.cssText+=e:o.textContent+=e,o}t.exports=i,t.exports.insertCss=i},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var backdrops;

    function createBackdropForSlide(slide) {
      var backdropAttribute = slide.getAttribute('data-bespoke-backdrop');

      if (backdropAttribute) {
        var backdrop = document.createElement('div');
        backdrop.className = backdropAttribute;
        backdrop.classList.add('bespoke-backdrop');
        deck.parent.appendChild(backdrop);
        return backdrop;
      }
    }

    function updateClasses(el) {
      if (el) {
        var index = backdrops.indexOf(el),
          currentIndex = deck.slide();

        removeClass(el, 'active');
        removeClass(el, 'inactive');
        removeClass(el, 'before');
        removeClass(el, 'after');

        if (index !== currentIndex) {
          addClass(el, 'inactive');
          addClass(el, index < currentIndex ? 'before' : 'after');
        } else {
          addClass(el, 'active');
        }
      }
    }

    function removeClass(el, className) {
      el.classList.remove('bespoke-backdrop-' + className);
    }

    function addClass(el, className) {
      el.classList.add('bespoke-backdrop-' + className);
    }

    backdrops = deck.slides
      .map(createBackdropForSlide);

    deck.on('activate', function() {
      backdrops.forEach(updateClasses);
    });
  };
};

},{}],3:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var activeSlideIndex,
      activeBulletIndex,
      isBullettingDisabled = false,

      bullets = deck.slides.map(function(slide) {
        return [].slice.call(slide.querySelectorAll((typeof options === 'string' ? options : '[data-bespoke-bullet]')), 0);
      }),

      next = function() {
        var nextSlideIndex = activeSlideIndex + 1,
          activeSlideHasNextBullet = activeSlideHasBulletByOffset(1),
          bulletToActivate;

        if ((isBullettingDisabled || !activeSlideHasNextBullet) && bullets[nextSlideIndex]) {
          bulletToActivate = isBullettingDisabled ? bullets[nextSlideIndex].length - 1 : 0;
          activateBullet(nextSlideIndex, bulletToActivate);
        } else if (!isBullettingDisabled && activeSlideHasNextBullet) {
          activateBullet(activeSlideIndex, activeBulletIndex+1);
          return false;
        }
      },

      prev = function() {
        var prevSlideIndex = activeSlideIndex - 1,
          activeSlideHasPreviousBullet = activeSlideHasBulletByOffset(-1);

        if ((isBullettingDisabled || !activeSlideHasPreviousBullet) && bullets[prevSlideIndex]) {
          activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
        } else if (!isBullettingDisabled  && activeSlideHasPreviousBullet) {
          activateBullet(activeSlideIndex, activeBulletIndex - 1);
          return false;
        }
      },

      activateBullet = function(slideIndex, bulletIndex) {
        activeSlideIndex = slideIndex;
        activeBulletIndex = bulletIndex;

        bullets.forEach(function(slide, s) {
          slide.forEach(function(bullet, b) {
            bullet.classList.add('bespoke-bullet');

            if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
              bullet.classList.add('bespoke-bullet-active');
              bullet.classList.remove('bespoke-bullet-inactive');
            } else {
              bullet.classList.add('bespoke-bullet-inactive');
              bullet.classList.remove('bespoke-bullet-active');
            }

            if (s === slideIndex && b === bulletIndex) {
              bullet.classList.add('bespoke-bullet-current');
            } else {
              bullet.classList.remove('bespoke-bullet-current');
            }
          });
        });
      },

      activeSlideHasBulletByOffset = function(offset) {
        return bullets[activeSlideIndex][activeBulletIndex + offset] !== undefined;
      };

    deck.on('next', next);
    deck.on('prev', prev);

    deck.on('slide', function(e) {
      activateBullet(e.index, 0);
    });

    deck.on('bullets.enable', function() {
      isBullettingDisabled = false;
    });
    deck.on('bullets.disable', function() {
      isBullettingDisabled = true;
      activateBullet(deck.slide(), bullets[deck.slide()].length - 1);
    });

    activateBullet(0, 0);
  };
};

},{}],4:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var activateSlide = function(index) {
      var indexToActivate = -1 < index && index < deck.slides.length ? index : 0;
      if (indexToActivate !== deck.slide()) {
        deck.slide(indexToActivate);
      }
    };

    var parseHash = function() {
      var hash = window.location.hash.slice(1),
        slideNumberOrName = parseInt(hash, 10);

      if (hash) {
        if (slideNumberOrName) {
          activateSlide(slideNumberOrName - 1);
        } else {
          deck.slides.forEach(function(slide, i) {
            if (slide.getAttribute('data-bespoke-hash') === hash || slide.id === hash) {
              activateSlide(i);
            }
          });
        }
      }
    };

    setTimeout(function() {
      parseHash();

      deck.on('activate', function(e) {
        var slideName = e.slide.getAttribute('data-bespoke-hash') || e.slide.id;
        window.location.hash = slideName || e.index + 1;
      });

      window.addEventListener('hashchange', parseHash);
    }, 0);
  };
};

},{}],5:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var isHorizontal = options !== 'vertical';

    document.addEventListener('keydown', function(e) {
      if (e.which == 34 || // PAGE DOWN
        (e.which == 32 && !e.shiftKey) || // SPACE WITHOUT SHIFT
        (isHorizontal && e.which == 39) || // RIGHT
        (!isHorizontal && e.which == 40) // DOWN
      ) { deck.next(); }

      if (e.which == 33 || // PAGE UP
        (e.which == 32 && e.shiftKey) || // SPACE + SHIFT
        (isHorizontal && e.which == 37) || // LEFT
        (!isHorizontal && e.which == 38) // UP
      ) { deck.prev(); }
    });
  };
};

},{}],6:[function(require,module,exports){
const isEmpty = require('lodash.isempty');
const isFunction = require('lodash.isfunction');
const markdownIt = require('markdown-it');
const hljs = require('highlight.js/lib/highlight');

hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('dust', require('highlight.js/lib/languages/dust'));
hljs.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'));
hljs.registerLanguage('http', require('highlight.js/lib/languages/http'));
hljs.registerLanguage('less', require('highlight.js/lib/languages/less'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('apache', require('highlight.js/lib/languages/apache'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('gherkin', require('highlight.js/lib/languages/gherkin'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
hljs.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));


const md = markdownIt({
  // enable HTML tags in source
  html: true,
  // do not use '/' to close single tags (<br />)
  xhtmlOut: false,

  // do not convert '\n' in paragraphs into <br>
  breaks: false,

  // CSS language prefix for fenced blocks
  langPrefix: 'language-',
  // autoconvert URL-like text to links
  linkify: true,

  // enable some language-neutral replacement + quotes beautification
  typographer: true,

  // double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const highlightedCode = hljs.highlight(lang, str, true).value;

        return `<pre class="hljs"><code>${highlightedCode}</code></pre>`;
      } catch (_) {
        console.info(
          'Could not highlight a piece of code with Highlight.js. Code: ' + str
        );
      }
    }

    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

let slideMetadata = {};

/**
 * Fetches the content of a file through AJAX.
 * @param {string} path the path of the file to fetch
 * @param {Function} callbackSuccess
 * @param {Function} callbackError
 */
const fetchFile = (path, callbackSuccess, callbackError) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        callbackSuccess(xhr.responseText);
      } else {
        callbackError();
      }
    }
  };
  xhr.open('GET', path, false);
  xhr.send();
};

const checkForMetadata = (deck, slide, content) => {
  const tempSlide = document.createElement('section');
  tempSlide.innerHTML = content;

  if (
    tempSlide &&
    tempSlide.firstChild &&
    tempSlide.firstChild.nodeType === Node.COMMENT_NODE
  ) {
    const slideIndex = deck.slides.indexOf(slide);
    try {
      const metadata = JSON.parse(tempSlide.firstChild.nodeValue.trim());
      slideMetadata[`${slideIndex}`] = metadata;
      return true;
    } catch (e) {}
    return false;
  }
};

const removeMetadata = slide => slide.removeChild(slide.firstChild);

const callMetadata = (deck, callbacks) => {
  Object.keys(slideMetadata).forEach(slideIndex => {
    const metadata = slideMetadata[slideIndex];

    Object.keys(metadata).forEach(metadataFunctionName => {
      if (metadataFunctionName in callbacks) {
        callbacks[metadataFunctionName].call(
          deck,
          deck.slides[parseInt(slideIndex)],
          metadata[metadataFunctionName]
        );
      }
    });
  });
};

const markdownSlide = (deck, slide, content) => {
  const hadMetadata = checkForMetadata(deck, slide, content);
  slide.innerHTML = md.render(content);
  if (hadMetadata) {
    removeMetadata(slide);
  }
};

const createSlide = (deck, slide) => {
  const newSlide = document.createElement('section');
  let index;

  newSlide.className = 'bespoke-slide';
  if (typeof slide !== 'undefined' && slide instanceof HTMLElement) {
    deck.parent.insertBefore(newSlide, slide);
    index = deck.slides.indexOf(slide);
    deck.slides.splice(index, 0, newSlide);
  } else {
    deck.parent.appendChild(newSlide);
    deck.slides.push(newSlide);
  }

  return newSlide;
};

const removeSlide = (deck, slide) => {
  const slideIndex = deck.slides.indexOf(slide);
  deck.slides.splice(slideIndex, 1);
  deck.parent.removeChild(slide);
};

const slidify = (deck, slide) => {
  const markdownAttribute = slide.getAttribute('data-markdown');

  switch (true) {
    // data-markdown="path-to-file.md" (so we load the .md file)
    case markdownAttribute && markdownAttribute.trim() !== '':
      fetchFile(
        markdownAttribute.trim(),
        fileContents => {
          var slidesContent = fileContents.split(/\r?\n---+\r?\n/);
          slidesContent.forEach(function(slideContent) {
            var slideContainer = createSlide(deck, slide);
            markdownSlide(deck, slideContainer, slideContent);
          });

          // removes original slide
          removeSlide(deck, slide);
        },
        () => {
          slide.innerHTML = 'Error loading the .md file for this slide.';
        }
      );
      break;

    // data-markdown="" or data-markdown (so we markdown the content)
    case markdownAttribute !== null:
      markdownSlide(deck, slide, slide.innerHTML);
      break;

    // plain html slide. Don't do anything
    default:
      break;
  }
};

const processDeckForMarkdownAttributes = deck => {
  const markdownAttribute = deck.parent.getAttribute('data-markdown');
  let slide;

  if (markdownAttribute && markdownAttribute.trim()) {
    // <article data-markdown="...">
    // load the whole deck from md file
    // we create an initial slide with the same markdown attribute
    slide = createSlide(deck);
    slide.setAttribute('data-markdown', markdownAttribute);
  }

  // traverse slides to see which are html and which are md (data-markdown)
  deck.slides.forEach(slide => slidify(deck, slide));
};

/**
 * Checks whether we should consider for markdown rendering:
 * - elements with the attribute data-markdown, if at least one element has
 * that. It can be one or some slides or the parent object (full presentation).
 * - the content of all slides, if no element has data-markdown.
 */
const getPluginMode = deck => {
  const elements = [];
  let hasDataMarkdownAttribute;

  elements.push(deck.parent);
  deck.slides.forEach(slide => elements.push(slide));
  hasDataMarkdownAttribute = elements.some(
    current => current.getAttribute('data-markdown') !== null
  );

  return hasDataMarkdownAttribute
    ? 'transform-marked-elements-only'
    : 'transform-content-of-all-slides';
};

module.exports = (metadataCallbacks, pluginsArray) => {
  metadataCallbacks = metadataCallbacks || {};
  slideMetadata = {};

  // installs the markdown-it plugins provided by the user
  pluginsArray = !!pluginsArray
    ? Array.isArray(pluginsArray)
      ? pluginsArray
      : [pluginsArray]
    : [];
  pluginsArray.forEach(function(plugin) {
    if (isFunction(plugin)) {
      md.use(plugin);
    } else if (Array.isArray(plugin) && plugin.length > 0) {
      md.use.apply(md, plugin);
    }
  });

  return deck => {
    const mode = getPluginMode(deck);

    switch (mode) {
      case 'transform-marked-elements-only':
        processDeckForMarkdownAttributes(deck);
        break;
      case 'transform-content-of-all-slides':
        deck.slides.forEach(function(slideEl) {
          markdownSlide(deck, slideEl, slideEl.innerHTML);
        });
        break;
    }

    if (!isEmpty(metadataCallbacks) && !isEmpty(slideMetadata)) {
      callMetadata(deck, metadataCallbacks);
    }
  };
};

},{"highlight.js/lib/highlight":15,"highlight.js/lib/languages/apache":16,"highlight.js/lib/languages/bash":17,"highlight.js/lib/languages/cpp":18,"highlight.js/lib/languages/css":19,"highlight.js/lib/languages/dust":20,"highlight.js/lib/languages/gherkin":21,"highlight.js/lib/languages/glsl":22,"highlight.js/lib/languages/handlebars":23,"highlight.js/lib/languages/http":24,"highlight.js/lib/languages/java":25,"highlight.js/lib/languages/javascript":26,"highlight.js/lib/languages/json":27,"highlight.js/lib/languages/less":28,"highlight.js/lib/languages/makefile":29,"highlight.js/lib/languages/markdown":30,"highlight.js/lib/languages/php":31,"highlight.js/lib/languages/python":32,"highlight.js/lib/languages/scss":33,"highlight.js/lib/languages/sql":34,"highlight.js/lib/languages/typescript":35,"highlight.js/lib/languages/xml":36,"lodash.isempty":39,"lodash.isfunction":40,"markdown-it":52}],7:[function(require,module,exports){
(function (global){
/*! bespoke-math v1.3.1 © 2019 Flávio, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;(t=(t=(t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bespoke||(t.bespoke={})).plugins||(t.plugins={})).math=e()}}(function(){return function(){return function e(t,r,n){function i(s,o){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var m=r[s]={exports:{}};t[s][0].call(m.exports,function(e){return i(t[s][1][e]||e)},m,m.exports,e,t,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}}()({1:[function(e,t,r){const n=e("katex"),i=(e("fs"),function(e,t){try{return n.renderToString(e,{displayMode:t})}catch(t){console.log('Katex error trying to parse: "'+e+'". Description: '+t)}});t.exports=function(t,r){const n=void 0!==r?"separateSelector":"spanIsInline";return t=arguments.length>0?t:".math",function(a){let s,o=!1;switch(n){case"separateSelector":s=a.parent.querySelectorAll(t),Array.from(s).forEach(e=>{e.innerHTML=i(e.innerHTML,!1),o=!0}),s=a.parent.querySelectorAll(r),Array.from(s).forEach(e=>{e.innerHTML=i(e.innerHTML,!0),o=!0});break;case"spanIsInline":s=a.parent.querySelectorAll(t),Array.from(s).forEach(e=>{e.innerHTML=i(e.innerHTML,"span"!==e.tagName.toLowerCase()),o=!0})}if(o)try{e("katex/dist/katex.min.css")}catch(e){console.log("It was not possible to load the CSS from KaTeX. Details: "+e)}}}},{fs:3,katex:4,"katex/dist/katex.min.css":5}],2:[function(e,t,r){"use strict";var n=[],i=function(e,t){var r=document.head||document.getElementsByTagName("head")[0],i=n[n.length-1];if((t=t||{}).insertAt=t.insertAt||"bottom","top"===t.insertAt)i?i.nextSibling?r.insertBefore(e,i.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),n.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}};t.exports={createLink:function(e,t){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("link");for(var i in n.href=e,n.rel="stylesheet",t)if(t.hasOwnProperty(i)){var a=t[i];n.setAttribute("data-"+i,a)}r.appendChild(n)},createStyle:function(e,t,r){r=r||{};var n=document.createElement("style");for(var a in n.type="text/css",t)if(t.hasOwnProperty(a)){var s=t[a];n.setAttribute("data-"+a,s)}n.sheet?(n.innerHTML=e,n.sheet.cssText=e,i(n,{insertAt:r.insertAt})):n.styleSheet?(i(n,{insertAt:r.insertAt}),n.styleSheet.cssText=e):(n.appendChild(document.createTextNode(e)),i(n,{insertAt:r.insertAt}))}}},{}],3:[function(e,t,r){},{}],4:[function(e,t,r){var n,i;n="undefined"!=typeof self?self:this,i=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);var n=function(){function e(e,t,r){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=e,this.start=t,this.end=r}return e.range=function(t,r){return r?t&&t.loc&&r.loc&&t.loc.lexer===r.loc.lexer?new e(t.loc.lexer,t.loc.start,r.loc.end):null:t&&t.loc},e}(),i=function(){function e(e,t){this.text=void 0,this.loc=void 0,this.text=e,this.loc=t}return e.prototype.range=function(t,r){return new e(r,n.range(this,t))},e}(),a=function e(t,r){this.position=void 0;var n,i="KaTeX parse error: "+t,a=r&&r.loc;if(a&&a.start<=a.end){var s=a.lexer.input;n=a.start;var o=a.end;n===s.length?i+=" at end of input: ":i+=" at position "+(n+1)+": ";var l=s.slice(n,o).replace(/[^]/g,"$&̲");i+=(n>15?"…"+s.slice(n-15,n):s.slice(0,n))+l+(o+15<s.length?s.slice(o,o+15)+"…":s.slice(o))}var h=new Error(i);return h.name="ParseError",h.__proto__=e.prototype,h.position=n,h};a.prototype.__proto__=Error.prototype;var s=a,o=/([A-Z])/g,l={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},h=/[&><"']/g;var m=function e(t){return"ordgroup"===t.type?1===t.body.length?e(t.body[0]):t:"color"===t.type?1===t.body.length?e(t.body[0]):t:"font"===t.type?e(t.body):t},c={contains:function(e,t){return-1!==e.indexOf(t)},deflt:function(e,t){return void 0===e?t:e},escape:function(e){return String(e).replace(h,function(e){return l[e]})},hyphenate:function(e){return e.replace(o,"-$1").toLowerCase()},getBaseElem:m,isCharacterBox:function(e){var t=m(e);return"mathord"===t.type||"textord"===t.type||"atom"===t.type}},u=function(){function e(e){this.displayMode=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.allowedProtocols=void 0,e=e||{},this.displayMode=c.deflt(e.displayMode,!1),this.leqno=c.deflt(e.leqno,!1),this.fleqn=c.deflt(e.fleqn,!1),this.throwOnError=c.deflt(e.throwOnError,!0),this.errorColor=c.deflt(e.errorColor,"#cc0000"),this.macros=e.macros||{},this.colorIsTextColor=c.deflt(e.colorIsTextColor,!1),this.strict=c.deflt(e.strict,"warn"),this.maxSize=Math.max(0,c.deflt(e.maxSize,1/0)),this.maxExpand=Math.max(0,c.deflt(e.maxExpand,1e3)),this.allowedProtocols=c.deflt(e.allowedProtocols,["http","https","mailto","_relative"])}var t=e.prototype;return t.reportNonstrict=function(e,t,r){var n=this.strict;if("function"==typeof n&&(n=n(e,t,r)),n&&"ignore"!==n){if(!0===n||"error"===n)throw new s("LaTeX-incompatible input and strict mode is set to 'error': "+t+" ["+e+"]",r);"warn"===n?"undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+t+" ["+e+"]"):"undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '"+n+"': "+t+" ["+e+"]")}},t.useStrictBehavior=function(e,t,r){var n=this.strict;if("function"==typeof n)try{n=n(e,t,r)}catch(e){n="error"}return!(!n||"ignore"===n)&&(!0===n||"error"===n||("warn"===n?("undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+t+" ["+e+"]"),!1):("undefined"!=typeof console&&console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '"+n+"': "+t+" ["+e+"]"),!1)))},e}(),d=function(){function e(e,t,r){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=e,this.size=t,this.cramped=r}var t=e.prototype;return t.sup=function(){return p[f[this.id]]},t.sub=function(){return p[g[this.id]]},t.fracNum=function(){return p[x[this.id]]},t.fracDen=function(){return p[v[this.id]]},t.cramp=function(){return p[z[this.id]]},t.text=function(){return p[y[this.id]]},t.isTight=function(){return this.size>=2},e}(),p=[new d(0,0,!1),new d(1,0,!0),new d(2,1,!1),new d(3,1,!0),new d(4,2,!1),new d(5,2,!0),new d(6,3,!1),new d(7,3,!0)],f=[4,5,4,5,6,7,6,7],g=[5,5,5,5,7,7,7,7],x=[2,3,4,5,6,7,6,7],v=[3,3,5,5,7,7,7,7],z=[1,1,3,3,5,5,7,7],y=[0,1,2,3,2,3,2,3],k={DISPLAY:p[0],TEXT:p[2],SCRIPT:p[4],SCRIPTSCRIPT:p[6]},b=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];var w=[];function S(e){for(var t=0;t<w.length;t+=2)if(e>=w[t]&&e<=w[t+1])return!0;return!1}b.forEach(function(e){return e.blocks.forEach(function(e){return w.push.apply(w,e)})});var M={path:{sqrtMain:"M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",sqrtSize1:"M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",sqrtSize2:"M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",sqrtSize3:"M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",sqrtSize4:"M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",doubleleftarrow:"M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",doublerightarrow:"M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",leftarrow:"M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",leftbrace:"M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",leftbraceunder:"M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",leftgroup:"M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",leftgroupunder:"M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",leftharpoon:"M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",leftharpoonplus:"M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",leftharpoondown:"M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",leftharpoondownplus:"M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",lefthook:"M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",leftlinesegment:"M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",leftmapsto:"M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",leftToFrom:"M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",longequal:"M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",midbrace:"M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",midbraceunder:"M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",oiintSize1:"M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",oiintSize2:"M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",oiiintSize1:"M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",oiiintSize2:"M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",rightarrow:"M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",rightbrace:"M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",rightbraceunder:"M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",rightgroup:"M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",rightgroupunder:"M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",rightharpoon:"M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",rightharpoonplus:"M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",rightharpoondown:"M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",rightharpoondownplus:"M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",righthook:"M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",rightlinesegment:"M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",rightToFrom:"M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",twoheadleftarrow:"M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",twoheadrightarrow:"M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",tilde1:"M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",tilde2:"M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",tilde3:"M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",tilde4:"M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",vec:"M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",widehat1:"M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",widehat2:"M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widehat3:"M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widehat4:"M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",widecheck1:"M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",widecheck2:"M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",widecheck3:"M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",widecheck4:"M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",baraboveleftarrow:"M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",rightarrowabovebar:"M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",baraboveshortleftharpoon:"M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",rightharpoonaboveshortbar:"M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",shortbaraboveleftharpoon:"M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",shortrightharpoonabovebar:"M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"}},T=function(){function e(e){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}var t=e.prototype;return t.hasClass=function(e){return c.contains(this.classes,e)},t.toNode=function(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e},t.toMarkup=function(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e},t.toText=function(){var e=function(e){return e.toText()};return this.children.map(e).join("")},e}(),A=function(e){return e.filter(function(e){return e}).join(" ")},B=function(e,t,r){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=r||{},t){t.style.isTight()&&this.classes.push("mtight");var n=t.getColor();n&&(this.style.color=n)}},C=function(e){var t=document.createElement(e);for(var r in t.className=A(this.classes),this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);for(var n in this.attributes)this.attributes.hasOwnProperty(n)&&t.setAttribute(n,this.attributes[n]);for(var i=0;i<this.children.length;i++)t.appendChild(this.children[i].toNode());return t},N=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+c.escape(A(this.classes))+'"');var r="";for(var n in this.style)this.style.hasOwnProperty(n)&&(r+=c.hyphenate(n)+":"+this.style[n]+";");for(var i in r&&(t+=' style="'+c.escape(r)+'"'),this.attributes)this.attributes.hasOwnProperty(i)&&(t+=" "+i+'="'+c.escape(this.attributes[i])+'"');t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+e+">"},q=function(){function e(e,t,r,n){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,B.call(this,e,r,n),this.children=t||[]}var t=e.prototype;return t.setAttribute=function(e,t){this.attributes[e]=t},t.hasClass=function(e){return c.contains(this.classes,e)},t.toNode=function(){return C.call(this,"span")},t.toMarkup=function(){return N.call(this,"span")},e}(),R=function(){function e(e,t,r,n){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,B.call(this,t,n),this.children=r||[],this.setAttribute("href",e)}var t=e.prototype;return t.setAttribute=function(e,t){this.attributes[e]=t},t.hasClass=function(e){return c.contains(this.classes,e)},t.toNode=function(){return C.call(this,"a")},t.toMarkup=function(){return N.call(this,"a")},e}(),I={"î":"ı̂","ï":"ı̈","í":"ı́","ì":"ı̀"},E=function(){function e(e,t,r,n,i,a,s,o){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=e,this.height=t||0,this.depth=r||0,this.italic=n||0,this.skew=i||0,this.width=a||0,this.classes=s||[],this.style=o||{},this.maxFontSize=0;var l=function(e){for(var t=0;t<b.length;t++)for(var r=b[t],n=0;n<r.blocks.length;n++){var i=r.blocks[n];if(e>=i[0]&&e<=i[1])return r.name}return null}(this.text.charCodeAt(0));l&&this.classes.push(l+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=I[this.text])}var t=e.prototype;return t.hasClass=function(e){return c.contains(this.classes,e)},t.toNode=function(){var e=document.createTextNode(this.text),t=null;for(var r in this.italic>0&&((t=document.createElement("span")).style.marginRight=this.italic+"em"),this.classes.length>0&&((t=t||document.createElement("span")).className=A(this.classes)),this.style)this.style.hasOwnProperty(r)&&((t=t||document.createElement("span")).style[r]=this.style[r]);return t?(t.appendChild(e),t):e},t.toMarkup=function(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=c.escape(A(this.classes)),t+='"');var r="";for(var n in this.italic>0&&(r+="margin-right:"+this.italic+"em;"),this.style)this.style.hasOwnProperty(n)&&(r+=c.hyphenate(n)+":"+this.style[n]+";");r&&(e=!0,t+=' style="'+c.escape(r)+'"');var i=c.escape(this.text);return e?(t+=">",t+=i,t+="</span>"):i},e}(),O=function(){function e(e,t){this.children=void 0,this.attributes=void 0,this.children=e||[],this.attributes=t||{}}var t=e.prototype;return t.toNode=function(){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);for(var r=0;r<this.children.length;r++)e.appendChild(this.children[r].toNode());return e},t.toMarkup=function(){var e="<svg";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+"='"+this.attributes[t]+"'");e+=">";for(var r=0;r<this.children.length;r++)e+=this.children[r].toMarkup();return e+="</svg>"},e}(),L=function(){function e(e,t){this.pathName=void 0,this.alternate=void 0,this.pathName=e,this.alternate=t}var t=e.prototype;return t.toNode=function(){var e=document.createElementNS("http://www.w3.org/2000/svg","path");return this.alternate?e.setAttribute("d",this.alternate):e.setAttribute("d",M.path[this.pathName]),e},t.toMarkup=function(){return this.alternate?"<path d='"+this.alternate+"'/>":"<path d='"+M.path[this.pathName]+"'/>"},e}(),X=function(){function e(e){this.attributes=void 0,this.attributes=e||{}}var t=e.prototype;return t.toNode=function(){var e=document.createElementNS("http://www.w3.org/2000/svg","line");for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);return e},t.toMarkup=function(){var e="<line";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+"='"+this.attributes[t]+"'");return e+="/>"},e}();var _={"AMS-Regular":{65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473]},"Fraktur-Regular":{33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],163:[0,.69444,0,0,.86853],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],163:[0,.69444,0,0,.76909],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],305:[0,.43056,0,.02778,.32246],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],567:[.19444,.43056,0,.08334,.38403],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.12,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,1],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.67,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.9,0,0,.278],8943:[-.19,.31,0,0,1.172],8945:[-.1,.82,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.744,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.744,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333]},"Math-Italic":{65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059]},"Math-Regular":{65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059]},"SansSerif-Bold":{33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212]},"Size1-Regular":{40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},H={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2]},D={"Å":"A","Ç":"C","Ð":"D","Þ":"o","å":"a","ç":"c","ð":"d","þ":"o","А":"A","Б":"B","В":"B","Г":"F","Д":"A","Е":"E","Ж":"K","З":"3","И":"N","Й":"N","К":"K","Л":"N","М":"M","Н":"H","О":"O","П":"N","Р":"P","С":"C","Т":"T","У":"y","Ф":"O","Х":"X","Ц":"U","Ч":"h","Ш":"W","Щ":"W","Ъ":"B","Ы":"X","Ь":"B","Э":"3","Ю":"X","Я":"R","а":"a","б":"b","в":"a","г":"r","д":"y","е":"e","ж":"m","з":"e","и":"n","й":"n","к":"n","л":"n","м":"m","н":"n","о":"o","п":"n","р":"p","с":"c","т":"o","у":"y","ф":"b","х":"x","ц":"n","ч":"n","ш":"w","щ":"w","ъ":"a","ы":"m","ь":"a","э":"e","ю":"m","я":"r"};function P(e,t,r){if(!_[t])throw new Error("Font metrics not found for font: "+t+".");var n=e.charCodeAt(0);e[0]in D&&(n=D[e[0]].charCodeAt(0));var i=_[t][n];if(i||"text"!==r||S(n)&&(i=_[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var K={};var F={bin:1,close:1,inner:1,open:1,punct:1,rel:1},j={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},V={math:{},text:{}},U=V;function G(e,t,r,n,i,a){V[e][i]={font:t,group:r,replace:n},a&&n&&(V[e][n]=V[e][i])}var Y="main",W="ams",$="bin",Z="mathord",J="op-token",Q="rel",ee="spacing";G("math",Y,Q,"≡","\\equiv",!0),G("math",Y,Q,"≺","\\prec",!0),G("math",Y,Q,"≻","\\succ",!0),G("math",Y,Q,"∼","\\sim",!0),G("math",Y,Q,"⊥","\\perp"),G("math",Y,Q,"⪯","\\preceq",!0),G("math",Y,Q,"⪰","\\succeq",!0),G("math",Y,Q,"≃","\\simeq",!0),G("math",Y,Q,"∣","\\mid",!0),G("math",Y,Q,"≪","\\ll",!0),G("math",Y,Q,"≫","\\gg",!0),G("math",Y,Q,"≍","\\asymp",!0),G("math",Y,Q,"∥","\\parallel"),G("math",Y,Q,"⋈","\\bowtie",!0),G("math",Y,Q,"⌣","\\smile",!0),G("math",Y,Q,"⊑","\\sqsubseteq",!0),G("math",Y,Q,"⊒","\\sqsupseteq",!0),G("math",Y,Q,"≐","\\doteq",!0),G("math",Y,Q,"⌢","\\frown",!0),G("math",Y,Q,"∋","\\ni",!0),G("math",Y,Q,"∝","\\propto",!0),G("math",Y,Q,"⊢","\\vdash",!0),G("math",Y,Q,"⊣","\\dashv",!0),G("math",Y,Q,"∋","\\owns"),G("math",Y,"punct",".","\\ldotp"),G("math",Y,"punct","⋅","\\cdotp"),G("math",Y,"textord","#","\\#"),G("text",Y,"textord","#","\\#"),G("math",Y,"textord","&","\\&"),G("text",Y,"textord","&","\\&"),G("math",Y,"textord","ℵ","\\aleph",!0),G("math",Y,"textord","∀","\\forall",!0),G("math",Y,"textord","ℏ","\\hbar",!0),G("math",Y,"textord","∃","\\exists",!0),G("math",Y,"textord","∇","\\nabla",!0),G("math",Y,"textord","♭","\\flat",!0),G("math",Y,"textord","ℓ","\\ell",!0),G("math",Y,"textord","♮","\\natural",!0),G("math",Y,"textord","♣","\\clubsuit",!0),G("math",Y,"textord","℘","\\wp",!0),G("math",Y,"textord","♯","\\sharp",!0),G("math",Y,"textord","♢","\\diamondsuit",!0),G("math",Y,"textord","ℜ","\\Re",!0),G("math",Y,"textord","♡","\\heartsuit",!0),G("math",Y,"textord","ℑ","\\Im",!0),G("math",Y,"textord","♠","\\spadesuit",!0),G("text",Y,"textord","§","\\S",!0),G("text",Y,"textord","¶","\\P",!0),G("math",Y,"textord","†","\\dag"),G("text",Y,"textord","†","\\dag"),G("text",Y,"textord","†","\\textdagger"),G("math",Y,"textord","‡","\\ddag"),G("text",Y,"textord","‡","\\ddag"),G("text",Y,"textord","‡","\\textdaggerdbl"),G("math",Y,"close","⎱","\\rmoustache",!0),G("math",Y,"open","⎰","\\lmoustache",!0),G("math",Y,"close","⟯","\\rgroup",!0),G("math",Y,"open","⟮","\\lgroup",!0),G("math",Y,$,"∓","\\mp",!0),G("math",Y,$,"⊖","\\ominus",!0),G("math",Y,$,"⊎","\\uplus",!0),G("math",Y,$,"⊓","\\sqcap",!0),G("math",Y,$,"∗","\\ast"),G("math",Y,$,"⊔","\\sqcup",!0),G("math",Y,$,"◯","\\bigcirc"),G("math",Y,$,"∙","\\bullet"),G("math",Y,$,"‡","\\ddagger"),G("math",Y,$,"≀","\\wr",!0),G("math",Y,$,"⨿","\\amalg"),G("math",Y,$,"&","\\And"),G("math",Y,Q,"⟵","\\longleftarrow",!0),G("math",Y,Q,"⇐","\\Leftarrow",!0),G("math",Y,Q,"⟸","\\Longleftarrow",!0),G("math",Y,Q,"⟶","\\longrightarrow",!0),G("math",Y,Q,"⇒","\\Rightarrow",!0),G("math",Y,Q,"⟹","\\Longrightarrow",!0),G("math",Y,Q,"↔","\\leftrightarrow",!0),G("math",Y,Q,"⟷","\\longleftrightarrow",!0),G("math",Y,Q,"⇔","\\Leftrightarrow",!0),G("math",Y,Q,"⟺","\\Longleftrightarrow",!0),G("math",Y,Q,"↦","\\mapsto",!0),G("math",Y,Q,"⟼","\\longmapsto",!0),G("math",Y,Q,"↗","\\nearrow",!0),G("math",Y,Q,"↩","\\hookleftarrow",!0),G("math",Y,Q,"↪","\\hookrightarrow",!0),G("math",Y,Q,"↘","\\searrow",!0),G("math",Y,Q,"↼","\\leftharpoonup",!0),G("math",Y,Q,"⇀","\\rightharpoonup",!0),G("math",Y,Q,"↙","\\swarrow",!0),G("math",Y,Q,"↽","\\leftharpoondown",!0),G("math",Y,Q,"⇁","\\rightharpoondown",!0),G("math",Y,Q,"↖","\\nwarrow",!0),G("math",Y,Q,"⇌","\\rightleftharpoons",!0),G("math",W,Q,"≮","\\nless",!0),G("math",W,Q,"","\\nleqslant"),G("math",W,Q,"","\\nleqq"),G("math",W,Q,"⪇","\\lneq",!0),G("math",W,Q,"≨","\\lneqq",!0),G("math",W,Q,"","\\lvertneqq"),G("math",W,Q,"⋦","\\lnsim",!0),G("math",W,Q,"⪉","\\lnapprox",!0),G("math",W,Q,"⊀","\\nprec",!0),G("math",W,Q,"⋠","\\npreceq",!0),G("math",W,Q,"⋨","\\precnsim",!0),G("math",W,Q,"⪹","\\precnapprox",!0),G("math",W,Q,"≁","\\nsim",!0),G("math",W,Q,"","\\nshortmid"),G("math",W,Q,"∤","\\nmid",!0),G("math",W,Q,"⊬","\\nvdash",!0),G("math",W,Q,"⊭","\\nvDash",!0),G("math",W,Q,"⋪","\\ntriangleleft"),G("math",W,Q,"⋬","\\ntrianglelefteq",!0),G("math",W,Q,"⊊","\\subsetneq",!0),G("math",W,Q,"","\\varsubsetneq"),G("math",W,Q,"⫋","\\subsetneqq",!0),G("math",W,Q,"","\\varsubsetneqq"),G("math",W,Q,"≯","\\ngtr",!0),G("math",W,Q,"","\\ngeqslant"),G("math",W,Q,"","\\ngeqq"),G("math",W,Q,"⪈","\\gneq",!0),G("math",W,Q,"≩","\\gneqq",!0),G("math",W,Q,"","\\gvertneqq"),G("math",W,Q,"⋧","\\gnsim",!0),G("math",W,Q,"⪊","\\gnapprox",!0),G("math",W,Q,"⊁","\\nsucc",!0),G("math",W,Q,"⋡","\\nsucceq",!0),G("math",W,Q,"⋩","\\succnsim",!0),G("math",W,Q,"⪺","\\succnapprox",!0),G("math",W,Q,"≆","\\ncong",!0),G("math",W,Q,"","\\nshortparallel"),G("math",W,Q,"∦","\\nparallel",!0),G("math",W,Q,"⊯","\\nVDash",!0),G("math",W,Q,"⋫","\\ntriangleright"),G("math",W,Q,"⋭","\\ntrianglerighteq",!0),G("math",W,Q,"","\\nsupseteqq"),G("math",W,Q,"⊋","\\supsetneq",!0),G("math",W,Q,"","\\varsupsetneq"),G("math",W,Q,"⫌","\\supsetneqq",!0),G("math",W,Q,"","\\varsupsetneqq"),G("math",W,Q,"⊮","\\nVdash",!0),G("math",W,Q,"⪵","\\precneqq",!0),G("math",W,Q,"⪶","\\succneqq",!0),G("math",W,Q,"","\\nsubseteqq"),G("math",W,$,"⊴","\\unlhd"),G("math",W,$,"⊵","\\unrhd"),G("math",W,Q,"↚","\\nleftarrow",!0),G("math",W,Q,"↛","\\nrightarrow",!0),G("math",W,Q,"⇍","\\nLeftarrow",!0),G("math",W,Q,"⇏","\\nRightarrow",!0),G("math",W,Q,"↮","\\nleftrightarrow",!0),G("math",W,Q,"⇎","\\nLeftrightarrow",!0),G("math",W,Q,"△","\\vartriangle"),G("math",W,"textord","ℏ","\\hslash"),G("math",W,"textord","▽","\\triangledown"),G("math",W,"textord","◊","\\lozenge"),G("math",W,"textord","Ⓢ","\\circledS"),G("math",W,"textord","®","\\circledR"),G("text",W,"textord","®","\\circledR"),G("math",W,"textord","∡","\\measuredangle",!0),G("math",W,"textord","∄","\\nexists"),G("math",W,"textord","℧","\\mho"),G("math",W,"textord","Ⅎ","\\Finv",!0),G("math",W,"textord","⅁","\\Game",!0),G("math",W,"textord","k","\\Bbbk"),G("math",W,"textord","‵","\\backprime"),G("math",W,"textord","▲","\\blacktriangle"),G("math",W,"textord","▼","\\blacktriangledown"),G("math",W,"textord","■","\\blacksquare"),G("math",W,"textord","⧫","\\blacklozenge"),G("math",W,"textord","★","\\bigstar"),G("math",W,"textord","∢","\\sphericalangle",!0),G("math",W,"textord","∁","\\complement",!0),G("math",W,"textord","ð","\\eth",!0),G("math",W,"textord","╱","\\diagup"),G("math",W,"textord","╲","\\diagdown"),G("math",W,"textord","□","\\square"),G("math",W,"textord","□","\\Box"),G("math",W,"textord","◊","\\Diamond"),G("math",W,"textord","¥","\\yen",!0),G("text",W,"textord","¥","\\yen",!0),G("math",W,"textord","✓","\\checkmark",!0),G("text",W,"textord","✓","\\checkmark"),G("math",W,"textord","ℶ","\\beth",!0),G("math",W,"textord","ℸ","\\daleth",!0),G("math",W,"textord","ℷ","\\gimel",!0),G("math",W,"textord","ϝ","\\digamma"),G("math",W,"textord","ϰ","\\varkappa"),G("math",W,"open","┌","\\ulcorner",!0),G("math",W,"close","┐","\\urcorner",!0),G("math",W,"open","└","\\llcorner",!0),G("math",W,"close","┘","\\lrcorner",!0),G("math",W,Q,"≦","\\leqq",!0),G("math",W,Q,"⩽","\\leqslant",!0),G("math",W,Q,"⪕","\\eqslantless",!0),G("math",W,Q,"≲","\\lesssim",!0),G("math",W,Q,"⪅","\\lessapprox",!0),G("math",W,Q,"≊","\\approxeq",!0),G("math",W,$,"⋖","\\lessdot"),G("math",W,Q,"⋘","\\lll",!0),G("math",W,Q,"≶","\\lessgtr",!0),G("math",W,Q,"⋚","\\lesseqgtr",!0),G("math",W,Q,"⪋","\\lesseqqgtr",!0),G("math",W,Q,"≑","\\doteqdot"),G("math",W,Q,"≓","\\risingdotseq",!0),G("math",W,Q,"≒","\\fallingdotseq",!0),G("math",W,Q,"∽","\\backsim",!0),G("math",W,Q,"⋍","\\backsimeq",!0),G("math",W,Q,"⫅","\\subseteqq",!0),G("math",W,Q,"⋐","\\Subset",!0),G("math",W,Q,"⊏","\\sqsubset",!0),G("math",W,Q,"≼","\\preccurlyeq",!0),G("math",W,Q,"⋞","\\curlyeqprec",!0),G("math",W,Q,"≾","\\precsim",!0),G("math",W,Q,"⪷","\\precapprox",!0),G("math",W,Q,"⊲","\\vartriangleleft"),G("math",W,Q,"⊴","\\trianglelefteq"),G("math",W,Q,"⊨","\\vDash",!0),G("math",W,Q,"⊪","\\Vvdash",!0),G("math",W,Q,"⌣","\\smallsmile"),G("math",W,Q,"⌢","\\smallfrown"),G("math",W,Q,"≏","\\bumpeq",!0),G("math",W,Q,"≎","\\Bumpeq",!0),G("math",W,Q,"≧","\\geqq",!0),G("math",W,Q,"⩾","\\geqslant",!0),G("math",W,Q,"⪖","\\eqslantgtr",!0),G("math",W,Q,"≳","\\gtrsim",!0),G("math",W,Q,"⪆","\\gtrapprox",!0),G("math",W,$,"⋗","\\gtrdot"),G("math",W,Q,"⋙","\\ggg",!0),G("math",W,Q,"≷","\\gtrless",!0),G("math",W,Q,"⋛","\\gtreqless",!0),G("math",W,Q,"⪌","\\gtreqqless",!0),G("math",W,Q,"≖","\\eqcirc",!0),G("math",W,Q,"≗","\\circeq",!0),G("math",W,Q,"≜","\\triangleq",!0),G("math",W,Q,"∼","\\thicksim"),G("math",W,Q,"≈","\\thickapprox"),G("math",W,Q,"⫆","\\supseteqq",!0),G("math",W,Q,"⋑","\\Supset",!0),G("math",W,Q,"⊐","\\sqsupset",!0),G("math",W,Q,"≽","\\succcurlyeq",!0),G("math",W,Q,"⋟","\\curlyeqsucc",!0),G("math",W,Q,"≿","\\succsim",!0),G("math",W,Q,"⪸","\\succapprox",!0),G("math",W,Q,"⊳","\\vartriangleright"),G("math",W,Q,"⊵","\\trianglerighteq"),G("math",W,Q,"⊩","\\Vdash",!0),G("math",W,Q,"∣","\\shortmid"),G("math",W,Q,"∥","\\shortparallel"),G("math",W,Q,"≬","\\between",!0),G("math",W,Q,"⋔","\\pitchfork",!0),G("math",W,Q,"∝","\\varpropto"),G("math",W,Q,"◀","\\blacktriangleleft"),G("math",W,Q,"∴","\\therefore",!0),G("math",W,Q,"∍","\\backepsilon"),G("math",W,Q,"▶","\\blacktriangleright"),G("math",W,Q,"∵","\\because",!0),G("math",W,Q,"⋘","\\llless"),G("math",W,Q,"⋙","\\gggtr"),G("math",W,$,"⊲","\\lhd"),G("math",W,$,"⊳","\\rhd"),G("math",W,Q,"≂","\\eqsim",!0),G("math",Y,Q,"⋈","\\Join"),G("math",W,Q,"≑","\\Doteq",!0),G("math",W,$,"∔","\\dotplus",!0),G("math",W,$,"∖","\\smallsetminus"),G("math",W,$,"⋒","\\Cap",!0),G("math",W,$,"⋓","\\Cup",!0),G("math",W,$,"⩞","\\doublebarwedge",!0),G("math",W,$,"⊟","\\boxminus",!0),G("math",W,$,"⊞","\\boxplus",!0),G("math",W,$,"⋇","\\divideontimes",!0),G("math",W,$,"⋉","\\ltimes",!0),G("math",W,$,"⋊","\\rtimes",!0),G("math",W,$,"⋋","\\leftthreetimes",!0),G("math",W,$,"⋌","\\rightthreetimes",!0),G("math",W,$,"⋏","\\curlywedge",!0),G("math",W,$,"⋎","\\curlyvee",!0),G("math",W,$,"⊝","\\circleddash",!0),G("math",W,$,"⊛","\\circledast",!0),G("math",W,$,"⋅","\\centerdot"),G("math",W,$,"⊺","\\intercal",!0),G("math",W,$,"⋒","\\doublecap"),G("math",W,$,"⋓","\\doublecup"),G("math",W,$,"⊠","\\boxtimes",!0),G("math",W,Q,"⇢","\\dashrightarrow",!0),G("math",W,Q,"⇠","\\dashleftarrow",!0),G("math",W,Q,"⇇","\\leftleftarrows",!0),G("math",W,Q,"⇆","\\leftrightarrows",!0),G("math",W,Q,"⇚","\\Lleftarrow",!0),G("math",W,Q,"↞","\\twoheadleftarrow",!0),G("math",W,Q,"↢","\\leftarrowtail",!0),G("math",W,Q,"↫","\\looparrowleft",!0),G("math",W,Q,"⇋","\\leftrightharpoons",!0),G("math",W,Q,"↶","\\curvearrowleft",!0),G("math",W,Q,"↺","\\circlearrowleft",!0),G("math",W,Q,"↰","\\Lsh",!0),G("math",W,Q,"⇈","\\upuparrows",!0),G("math",W,Q,"↿","\\upharpoonleft",!0),G("math",W,Q,"⇃","\\downharpoonleft",!0),G("math",W,Q,"⊸","\\multimap",!0),G("math",W,Q,"↭","\\leftrightsquigarrow",!0),G("math",W,Q,"⇉","\\rightrightarrows",!0),G("math",W,Q,"⇄","\\rightleftarrows",!0),G("math",W,Q,"↠","\\twoheadrightarrow",!0),G("math",W,Q,"↣","\\rightarrowtail",!0),G("math",W,Q,"↬","\\looparrowright",!0),G("math",W,Q,"↷","\\curvearrowright",!0),G("math",W,Q,"↻","\\circlearrowright",!0),G("math",W,Q,"↱","\\Rsh",!0),G("math",W,Q,"⇊","\\downdownarrows",!0),G("math",W,Q,"↾","\\upharpoonright",!0),G("math",W,Q,"⇂","\\downharpoonright",!0),G("math",W,Q,"⇝","\\rightsquigarrow",!0),G("math",W,Q,"⇝","\\leadsto"),G("math",W,Q,"⇛","\\Rrightarrow",!0),G("math",W,Q,"↾","\\restriction"),G("math",Y,"textord","‘","`"),G("math",Y,"textord","$","\\$"),G("text",Y,"textord","$","\\$"),G("text",Y,"textord","$","\\textdollar"),G("math",Y,"textord","%","\\%"),G("text",Y,"textord","%","\\%"),G("math",Y,"textord","_","\\_"),G("text",Y,"textord","_","\\_"),G("text",Y,"textord","_","\\textunderscore"),G("math",Y,"textord","∠","\\angle",!0),G("math",Y,"textord","∞","\\infty",!0),G("math",Y,"textord","′","\\prime"),G("math",Y,"textord","△","\\triangle"),G("math",Y,"textord","Γ","\\Gamma",!0),G("math",Y,"textord","Δ","\\Delta",!0),G("math",Y,"textord","Θ","\\Theta",!0),G("math",Y,"textord","Λ","\\Lambda",!0),G("math",Y,"textord","Ξ","\\Xi",!0),G("math",Y,"textord","Π","\\Pi",!0),G("math",Y,"textord","Σ","\\Sigma",!0),G("math",Y,"textord","Υ","\\Upsilon",!0),G("math",Y,"textord","Φ","\\Phi",!0),G("math",Y,"textord","Ψ","\\Psi",!0),G("math",Y,"textord","Ω","\\Omega",!0),G("math",Y,"textord","A","Α"),G("math",Y,"textord","B","Β"),G("math",Y,"textord","E","Ε"),G("math",Y,"textord","Z","Ζ"),G("math",Y,"textord","H","Η"),G("math",Y,"textord","I","Ι"),G("math",Y,"textord","K","Κ"),G("math",Y,"textord","M","Μ"),G("math",Y,"textord","N","Ν"),G("math",Y,"textord","O","Ο"),G("math",Y,"textord","P","Ρ"),G("math",Y,"textord","T","Τ"),G("math",Y,"textord","X","Χ"),G("math",Y,"textord","¬","\\neg",!0),G("math",Y,"textord","¬","\\lnot"),G("math",Y,"textord","⊤","\\top"),G("math",Y,"textord","⊥","\\bot"),G("math",Y,"textord","∅","\\emptyset"),G("math",W,"textord","∅","\\varnothing"),G("math",Y,Z,"α","\\alpha",!0),G("math",Y,Z,"β","\\beta",!0),G("math",Y,Z,"γ","\\gamma",!0),G("math",Y,Z,"δ","\\delta",!0),G("math",Y,Z,"ϵ","\\epsilon",!0),G("math",Y,Z,"ζ","\\zeta",!0),G("math",Y,Z,"η","\\eta",!0),G("math",Y,Z,"θ","\\theta",!0),G("math",Y,Z,"ι","\\iota",!0),G("math",Y,Z,"κ","\\kappa",!0),G("math",Y,Z,"λ","\\lambda",!0),G("math",Y,Z,"μ","\\mu",!0),G("math",Y,Z,"ν","\\nu",!0),G("math",Y,Z,"ξ","\\xi",!0),G("math",Y,Z,"ο","\\omicron",!0),G("math",Y,Z,"π","\\pi",!0),G("math",Y,Z,"ρ","\\rho",!0),G("math",Y,Z,"σ","\\sigma",!0),G("math",Y,Z,"τ","\\tau",!0),G("math",Y,Z,"υ","\\upsilon",!0),G("math",Y,Z,"ϕ","\\phi",!0),G("math",Y,Z,"χ","\\chi",!0),G("math",Y,Z,"ψ","\\psi",!0),G("math",Y,Z,"ω","\\omega",!0),G("math",Y,Z,"ε","\\varepsilon",!0),G("math",Y,Z,"ϑ","\\vartheta",!0),G("math",Y,Z,"ϖ","\\varpi",!0),G("math",Y,Z,"ϱ","\\varrho",!0),G("math",Y,Z,"ς","\\varsigma",!0),G("math",Y,Z,"φ","\\varphi",!0),G("math",Y,$,"∗","*"),G("math",Y,$,"+","+"),G("math",Y,$,"−","-"),G("math",Y,$,"⋅","\\cdot",!0),G("math",Y,$,"∘","\\circ"),G("math",Y,$,"÷","\\div",!0),G("math",Y,$,"±","\\pm",!0),G("math",Y,$,"×","\\times",!0),G("math",Y,$,"∩","\\cap",!0),G("math",Y,$,"∪","\\cup",!0),G("math",Y,$,"∖","\\setminus"),G("math",Y,$,"∧","\\land"),G("math",Y,$,"∨","\\lor"),G("math",Y,$,"∧","\\wedge",!0),G("math",Y,$,"∨","\\vee",!0),G("math",Y,"textord","√","\\surd"),G("math",Y,"open","(","("),G("math",Y,"open","[","["),G("math",Y,"open","⟨","\\langle",!0),G("math",Y,"open","∣","\\lvert"),G("math",Y,"open","∥","\\lVert"),G("math",Y,"close",")",")"),G("math",Y,"close","]","]"),G("math",Y,"close","?","?"),G("math",Y,"close","!","!"),G("math",Y,"close","⟩","\\rangle",!0),G("math",Y,"close","∣","\\rvert"),G("math",Y,"close","∥","\\rVert"),G("math",Y,Q,"=","="),G("math",Y,Q,"<","<"),G("math",Y,Q,">",">"),G("math",Y,Q,":",":"),G("math",Y,Q,"≈","\\approx",!0),G("math",Y,Q,"≅","\\cong",!0),G("math",Y,Q,"≥","\\ge"),G("math",Y,Q,"≥","\\geq",!0),G("math",Y,Q,"←","\\gets"),G("math",Y,Q,">","\\gt"),G("math",Y,Q,"∈","\\in",!0),G("math",Y,Q,"","\\@not"),G("math",Y,Q,"⊂","\\subset",!0),G("math",Y,Q,"⊃","\\supset",!0),G("math",Y,Q,"⊆","\\subseteq",!0),G("math",Y,Q,"⊇","\\supseteq",!0),G("math",W,Q,"⊈","\\nsubseteq",!0),G("math",W,Q,"⊉","\\nsupseteq",!0),G("math",Y,Q,"⊨","\\models"),G("math",Y,Q,"←","\\leftarrow",!0),G("math",Y,Q,"≤","\\le"),G("math",Y,Q,"≤","\\leq",!0),G("math",Y,Q,"<","\\lt"),G("math",Y,Q,"→","\\rightarrow",!0),G("math",Y,Q,"→","\\to"),G("math",W,Q,"≱","\\ngeq",!0),G("math",W,Q,"≰","\\nleq",!0),G("math",Y,ee," ","\\ "),G("math",Y,ee," ","~"),G("math",Y,ee," ","\\space"),G("math",Y,ee," ","\\nobreakspace"),G("text",Y,ee," ","\\ "),G("text",Y,ee," ","~"),G("text",Y,ee," ","\\space"),G("text",Y,ee," ","\\nobreakspace"),G("math",Y,ee,null,"\\nobreak"),G("math",Y,ee,null,"\\allowbreak"),G("math",Y,"punct",",",","),G("math",Y,"punct",";",";"),G("math",W,$,"⊼","\\barwedge",!0),G("math",W,$,"⊻","\\veebar",!0),G("math",Y,$,"⊙","\\odot",!0),G("math",Y,$,"⊕","\\oplus",!0),G("math",Y,$,"⊗","\\otimes",!0),G("math",Y,"textord","∂","\\partial",!0),G("math",Y,$,"⊘","\\oslash",!0),G("math",W,$,"⊚","\\circledcirc",!0),G("math",W,$,"⊡","\\boxdot",!0),G("math",Y,$,"△","\\bigtriangleup"),G("math",Y,$,"▽","\\bigtriangledown"),G("math",Y,$,"†","\\dagger"),G("math",Y,$,"⋄","\\diamond"),G("math",Y,$,"⋆","\\star"),G("math",Y,$,"◃","\\triangleleft"),G("math",Y,$,"▹","\\triangleright"),G("math",Y,"open","{","\\{"),G("text",Y,"textord","{","\\{"),G("text",Y,"textord","{","\\textbraceleft"),G("math",Y,"close","}","\\}"),G("text",Y,"textord","}","\\}"),G("text",Y,"textord","}","\\textbraceright"),G("math",Y,"open","{","\\lbrace"),G("math",Y,"close","}","\\rbrace"),G("math",Y,"open","[","\\lbrack"),G("text",Y,"textord","[","\\lbrack"),G("math",Y,"close","]","\\rbrack"),G("text",Y,"textord","]","\\rbrack"),G("math",Y,"open","(","\\lparen"),G("math",Y,"close",")","\\rparen"),G("text",Y,"textord","<","\\textless"),G("text",Y,"textord",">","\\textgreater"),G("math",Y,"open","⌊","\\lfloor",!0),G("math",Y,"close","⌋","\\rfloor",!0),G("math",Y,"open","⌈","\\lceil",!0),G("math",Y,"close","⌉","\\rceil",!0),G("math",Y,"textord","\\","\\backslash"),G("math",Y,"textord","∣","|"),G("math",Y,"textord","∣","\\vert"),G("text",Y,"textord","|","\\textbar"),G("math",Y,"textord","∥","\\|"),G("math",Y,"textord","∥","\\Vert"),G("text",Y,"textord","∥","\\textbardbl"),G("text",Y,"textord","~","\\textasciitilde"),G("text",Y,"textord","\\","\\textbackslash"),G("text",Y,"textord","^","\\textasciicircum"),G("math",Y,Q,"↑","\\uparrow",!0),G("math",Y,Q,"⇑","\\Uparrow",!0),G("math",Y,Q,"↓","\\downarrow",!0),G("math",Y,Q,"⇓","\\Downarrow",!0),G("math",Y,Q,"↕","\\updownarrow",!0),G("math",Y,Q,"⇕","\\Updownarrow",!0),G("math",Y,J,"∐","\\coprod"),G("math",Y,J,"⋁","\\bigvee"),G("math",Y,J,"⋀","\\bigwedge"),G("math",Y,J,"⨄","\\biguplus"),G("math",Y,J,"⋂","\\bigcap"),G("math",Y,J,"⋃","\\bigcup"),G("math",Y,J,"∫","\\int"),G("math",Y,J,"∫","\\intop"),G("math",Y,J,"∬","\\iint"),G("math",Y,J,"∭","\\iiint"),G("math",Y,J,"∏","\\prod"),G("math",Y,J,"∑","\\sum"),G("math",Y,J,"⨂","\\bigotimes"),G("math",Y,J,"⨁","\\bigoplus"),G("math",Y,J,"⨀","\\bigodot"),G("math",Y,J,"∮","\\oint"),G("math",Y,J,"∯","\\oiint"),G("math",Y,J,"∰","\\oiiint"),G("math",Y,J,"⨆","\\bigsqcup"),G("math",Y,J,"∫","\\smallint"),G("text",Y,"inner","…","\\textellipsis"),G("math",Y,"inner","…","\\mathellipsis"),G("text",Y,"inner","…","\\ldots",!0),G("math",Y,"inner","…","\\ldots",!0),G("math",Y,"inner","⋯","\\@cdots",!0),G("math",Y,"inner","⋱","\\ddots",!0),G("math",Y,"textord","⋮","\\varvdots"),G("math",Y,"accent-token","ˊ","\\acute"),G("math",Y,"accent-token","ˋ","\\grave"),G("math",Y,"accent-token","¨","\\ddot"),G("math",Y,"accent-token","~","\\tilde"),G("math",Y,"accent-token","ˉ","\\bar"),G("math",Y,"accent-token","˘","\\breve"),G("math",Y,"accent-token","ˇ","\\check"),G("math",Y,"accent-token","^","\\hat"),G("math",Y,"accent-token","⃗","\\vec"),G("math",Y,"accent-token","˙","\\dot"),G("math",Y,"accent-token","˚","\\mathring"),G("math",Y,Z,"ı","\\imath",!0),G("math",Y,Z,"ȷ","\\jmath",!0),G("text",Y,"textord","ı","\\i",!0),G("text",Y,"textord","ȷ","\\j",!0),G("text",Y,"textord","ß","\\ss",!0),G("text",Y,"textord","æ","\\ae",!0),G("text",Y,"textord","æ","\\ae",!0),G("text",Y,"textord","œ","\\oe",!0),G("text",Y,"textord","ø","\\o",!0),G("text",Y,"textord","Æ","\\AE",!0),G("text",Y,"textord","Œ","\\OE",!0),G("text",Y,"textord","Ø","\\O",!0),G("text",Y,"accent-token","ˊ","\\'"),G("text",Y,"accent-token","ˋ","\\`"),G("text",Y,"accent-token","ˆ","\\^"),G("text",Y,"accent-token","˜","\\~"),G("text",Y,"accent-token","ˉ","\\="),G("text",Y,"accent-token","˘","\\u"),G("text",Y,"accent-token","˙","\\."),G("text",Y,"accent-token","˚","\\r"),G("text",Y,"accent-token","ˇ","\\v"),G("text",Y,"accent-token","¨",'\\"'),G("text",Y,"accent-token","˝","\\H"),G("text",Y,"accent-token","◯","\\textcircled");var te={"--":!0,"---":!0,"``":!0,"''":!0};G("text",Y,"textord","–","--"),G("text",Y,"textord","–","\\textendash"),G("text",Y,"textord","—","---"),G("text",Y,"textord","—","\\textemdash"),G("text",Y,"textord","‘","`"),G("text",Y,"textord","‘","\\textquoteleft"),G("text",Y,"textord","’","'"),G("text",Y,"textord","’","\\textquoteright"),G("text",Y,"textord","“","``"),G("text",Y,"textord","“","\\textquotedblleft"),G("text",Y,"textord","”","''"),G("text",Y,"textord","”","\\textquotedblright"),G("math",Y,"textord","°","\\degree",!0),G("text",Y,"textord","°","\\degree"),G("text",Y,"textord","°","\\textdegree",!0),G("math",Y,Z,"£","\\pounds"),G("math",Y,Z,"£","\\mathsterling",!0),G("text",Y,Z,"£","\\pounds"),G("text",Y,Z,"£","\\textsterling",!0),G("math",W,"textord","✠","\\maltese"),G("text",W,"textord","✠","\\maltese"),G("text",Y,ee," ","\\ "),G("text",Y,ee," "," "),G("text",Y,ee," ","~");for(var re=0;re<'0123456789/@."'.length;re++){var ne='0123456789/@."'.charAt(re);G("math",Y,"textord",ne,ne)}for(var ie=0;ie<'0123456789!@*()-=+[]<>|";:?/.,'.length;ie++){var ae='0123456789!@*()-=+[]<>|";:?/.,'.charAt(ie);G("text",Y,"textord",ae,ae)}for(var se="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",oe=0;oe<se.length;oe++){var le=se.charAt(oe);G("math",Y,Z,le,le),G("text",Y,"textord",le,le)}G("math",W,"textord","C","ℂ"),G("text",W,"textord","C","ℂ"),G("math",W,"textord","H","ℍ"),G("text",W,"textord","H","ℍ"),G("math",W,"textord","N","ℕ"),G("text",W,"textord","N","ℕ"),G("math",W,"textord","P","ℙ"),G("text",W,"textord","P","ℙ"),G("math",W,"textord","Q","ℚ"),G("text",W,"textord","Q","ℚ"),G("math",W,"textord","R","ℝ"),G("text",W,"textord","R","ℝ"),G("math",W,"textord","Z","ℤ"),G("text",W,"textord","Z","ℤ"),G("math",Y,Z,"h","ℎ"),G("text",Y,Z,"h","ℎ");for(var he="",me=0;me<se.length;me++){var ce=se.charAt(me);G("math",Y,Z,ce,he=String.fromCharCode(55349,56320+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56372+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56424+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56580+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56736+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56788+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56840+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56944+me)),G("text",Y,"textord",ce,he),me<26&&(G("math",Y,Z,ce,he=String.fromCharCode(55349,56632+me)),G("text",Y,"textord",ce,he),G("math",Y,Z,ce,he=String.fromCharCode(55349,56476+me)),G("text",Y,"textord",ce,he))}G("math",Y,Z,"k",he=String.fromCharCode(55349,56668)),G("text",Y,"textord","k",he);for(var ue=0;ue<10;ue++){var de=ue.toString();G("math",Y,Z,de,he=String.fromCharCode(55349,57294+ue)),G("text",Y,"textord",de,he),G("math",Y,Z,de,he=String.fromCharCode(55349,57314+ue)),G("text",Y,"textord",de,he),G("math",Y,Z,de,he=String.fromCharCode(55349,57324+ue)),G("text",Y,"textord",de,he),G("math",Y,Z,de,he=String.fromCharCode(55349,57334+ue)),G("text",Y,"textord",de,he)}for(var pe=0;pe<"ÇÐÞçþ".length;pe++){var fe="ÇÐÞçþ".charAt(pe);G("math",Y,Z,fe,fe),G("text",Y,"textord",fe,fe)}G("text",Y,"textord","ð","ð"),G("text",Y,"textord","–","–"),G("text",Y,"textord","—","—"),G("text",Y,"textord","‘","‘"),G("text",Y,"textord","’","’"),G("text",Y,"textord","“","“"),G("text",Y,"textord","”","”");var ge=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathdefault","textit","Math-Italic"],["mathdefault","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["","",""],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],xe=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],ve=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],ze=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],ye=function(e,t){return t.size<2?e:ve[e-1][t.size-1]},ke=function(){function e(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||e.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=ze[this.size-1],this.maxSize=t.maxSize,this._fontMetrics=void 0}var t=e.prototype;return t.extend=function(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return new e(r)},t.havingStyle=function(e){return this.style===e?this:this.extend({style:e,size:ye(this.textSize,e)})},t.havingCrampedStyle=function(){return this.havingStyle(this.style.cramp())},t.havingSize=function(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:ze[e-1]})},t.havingBaseStyle=function(t){t=t||this.style.text();var r=ye(e.BASESIZE,t);return this.size===r&&this.textSize===e.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})},t.havingBaseSizing=function(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})},t.withColor=function(e){return this.extend({color:e})},t.withPhantom=function(){return this.extend({phantom:!0})},t.withFont=function(e){return this.extend({font:e})},t.withTextFontFamily=function(e){return this.extend({fontFamily:e,font:""})},t.withTextFontWeight=function(e){return this.extend({fontWeight:e,font:""})},t.withTextFontShape=function(e){return this.extend({fontShape:e,font:""})},t.sizingClasses=function(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]},t.baseSizingClasses=function(){return this.size!==e.BASESIZE?["sizing","reset-size"+this.size,"size"+e.BASESIZE]:[]},t.fontMetrics=function(){return this._fontMetrics||(this._fontMetrics=function(e){var t;if(!K[t=e>=5?0:e>=3?1:2]){var r=K[t]={cssEmPerMu:H.quad[t]/18};for(var n in H)H.hasOwnProperty(n)&&(r[n]=H[n][t])}return K[t]}(this.size)),this._fontMetrics},t.getColor=function(){return this.phantom?"transparent":null!=this.color&&e.colorMap.hasOwnProperty(this.color)?e.colorMap[this.color]:this.color},e}();ke.BASESIZE=6,ke.colorMap={"katex-blue":"#6495ed","katex-orange":"#ffa500","katex-pink":"#ff00af","katex-red":"#df0030","katex-green":"#28ae7b","katex-gray":"gray","katex-purple":"#9d38bd","katex-blueA":"#ccfaff","katex-blueB":"#80f6ff","katex-blueC":"#63d9ea","katex-blueD":"#11accd","katex-blueE":"#0c7f99","katex-tealA":"#94fff5","katex-tealB":"#26edd5","katex-tealC":"#01d1c1","katex-tealD":"#01a995","katex-tealE":"#208170","katex-greenA":"#b6ffb0","katex-greenB":"#8af281","katex-greenC":"#74cf70","katex-greenD":"#1fab54","katex-greenE":"#0d923f","katex-goldA":"#ffd0a9","katex-goldB":"#ffbb71","katex-goldC":"#ff9c39","katex-goldD":"#e07d10","katex-goldE":"#a75a05","katex-redA":"#fca9a9","katex-redB":"#ff8482","katex-redC":"#f9685d","katex-redD":"#e84d39","katex-redE":"#bc2612","katex-maroonA":"#ffbde0","katex-maroonB":"#ff92c6","katex-maroonC":"#ed5fa6","katex-maroonD":"#ca337c","katex-maroonE":"#9e034e","katex-purpleA":"#ddd7ff","katex-purpleB":"#c6b9fc","katex-purpleC":"#aa87ff","katex-purpleD":"#7854ab","katex-purpleE":"#543b78","katex-mintA":"#f5f9e8","katex-mintB":"#edf2df","katex-mintC":"#e0e5cc","katex-grayA":"#f6f7f7","katex-grayB":"#f0f1f2","katex-grayC":"#e3e5e6","katex-grayD":"#d6d8da","katex-grayE":"#babec2","katex-grayF":"#888d93","katex-grayG":"#626569","katex-grayH":"#3b3e40","katex-grayI":"#21242c","katex-kaBlue":"#314453","katex-kaGreen":"#71B307"};var be=ke,we={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:1.00375,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:1.00375},Se={ex:!0,em:!0,mu:!0},Me=function(e,t){var r;if(e.unit in we)r=we[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if("mu"===e.unit)r=t.fontMetrics().cssEmPerMu;else{var n;if(n=t.style.isTight()?t.havingStyle(t.style.text()):t,"ex"===e.unit)r=n.fontMetrics().xHeight;else{if("em"!==e.unit)throw new s("Invalid unit: '"+e.unit+"'");r=n.fontMetrics().quad}n!==t&&(r*=n.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*r,t.maxSize)},Te=["\\imath","ı","\\jmath","ȷ","\\pounds","\\mathsterling","\\textsterling","£"],Ae=function(e,t,r){return U[r][e]&&U[r][e].replace&&(e=U[r][e].replace),{value:e,metrics:P(e,t,r)}},Be=function(e,t,r,n,i){var a,s=Ae(e,t,r),o=s.metrics;if(e=s.value,o){var l=o.italic;("text"===r||n&&"mathit"===n.font)&&(l=0),a=new E(e,o.height,o.depth,l,o.skew,o.width,i)}else"undefined"!=typeof console&&console.warn("No character metrics for '"+e+"' in style '"+t+"'"),a=new E(e,0,0,0,0,0,i);if(n){a.maxFontSize=n.sizeMultiplier,n.style.isTight()&&a.classes.push("mtight");var h=n.getColor();h&&(a.style.color=h)}return a},Ce=function(e,t){if(A(e.classes)!==A(t.classes)||e.skew!==t.skew||e.maxFontSize!==t.maxFontSize)return!1;for(var r in e.style)if(e.style.hasOwnProperty(r)&&e.style[r]!==t.style[r])return!1;for(var n in t.style)if(t.style.hasOwnProperty(n)&&e.style[n]!==t.style[n])return!1;return!0},Ne=function(e){for(var t=0,r=0,n=0,i=0;i<e.children.length;i++){var a=e.children[i];a.height>t&&(t=a.height),a.depth>r&&(r=a.depth),a.maxFontSize>n&&(n=a.maxFontSize)}e.height=t,e.depth=r,e.maxFontSize=n},qe=function(e,t,r,n){var i=new q(e,t,r,n);return Ne(i),i},Re=function(e,t,r,n){return new q(e,t,r,n)},Ie=function(e){var t=new T(e);return Ne(t),t},Ee=function(e,t,r){var n="";switch(e){case"amsrm":n="AMS";break;case"textrm":n="Main";break;case"textsf":n="SansSerif";break;case"texttt":n="Typewriter";break;default:n=e}return n+"-"+("textbf"===t&&"textit"===r?"BoldItalic":"textbf"===t?"Bold":"textit"===t?"Italic":"Regular")},Oe={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Le={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Xe={fontMap:Oe,makeSymbol:Be,mathsym:function(e,t,r,n){return void 0===n&&(n=[]),r&&r.font&&"boldsymbol"===r.font&&Ae(e,"Main-Bold",t).metrics?Be(e,"Main-Bold",t,r,n.concat(["mathbf"])):"\\"===e||"main"===U[t][e].font?Be(e,"Main-Regular",t,r,n):Be(e,"AMS-Regular",t,r,n.concat(["amsrm"]))},makeSpan:qe,makeSvgSpan:Re,makeLineSpan:function(e,t,r){var n=qe([e],[],t);return n.height=r||t.fontMetrics().defaultRuleThickness,n.style.borderBottomWidth=n.height+"em",n.maxFontSize=1,n},makeAnchor:function(e,t,r,n){var i=new R(e,t,r,n);return Ne(i),i},makeFragment:Ie,wrapFragment:function(e,t){return e instanceof T?qe([],[e],t):e},makeVList:function(e,t){for(var r=function(e){if("individualShift"===e.positionType){for(var t=e.children,r=[t[0]],n=-t[0].shift-t[0].elem.depth,i=n,a=1;a<t.length;a++){var s=-t[a].shift-i-t[a].elem.depth,o=s-(t[a-1].elem.height+t[a-1].elem.depth);i+=s,r.push({type:"kern",size:o}),r.push(t[a])}return{children:r,depth:n}}var l;if("top"===e.positionType){for(var h=e.positionData,m=0;m<e.children.length;m++){var c=e.children[m];h-="kern"===c.type?c.size:c.elem.height+c.elem.depth}l=h}else if("bottom"===e.positionType)l=-e.positionData;else{var u=e.children[0];if("elem"!==u.type)throw new Error('First child must have type "elem".');if("shift"===e.positionType)l=-u.elem.depth-e.positionData;else{if("firstBaseline"!==e.positionType)throw new Error("Invalid positionType "+e.positionType+".");l=-u.elem.depth}}return{children:e.children,depth:l}}(e),n=r.children,i=r.depth,a=0,s=0;s<n.length;s++){var o=n[s];if("elem"===o.type){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var h=qe(["pstrut"],[]);h.style.height=a+"em";for(var m=[],c=i,u=i,d=i,p=0;p<n.length;p++){var f=n[p];if("kern"===f.type)d+=f.size;else{var g=f.elem,x=f.wrapperClasses||[],v=f.wrapperStyle||{},z=qe(x,[h,g],void 0,v);z.style.top=-a-d-g.depth+"em",f.marginLeft&&(z.style.marginLeft=f.marginLeft),f.marginRight&&(z.style.marginRight=f.marginRight),m.push(z),d+=g.height+g.depth}c=Math.min(c,d),u=Math.max(u,d)}var y,k=qe(["vlist"],m);if(k.style.height=u+"em",c<0){var b=qe([],[]),w=qe(["vlist"],[b]);w.style.height=-c+"em";var S=qe(["vlist-s"],[new E("​")]);y=[qe(["vlist-r"],[k,S]),qe(["vlist-r"],[w])]}else y=[qe(["vlist-r"],[k])];var M=qe(["vlist-t"],y);return 2===y.length&&M.classes.push("vlist-t2"),M.height=u,M.depth=-c,M},makeOrd:function(e,t,r){var n,i=e.mode,a=e.text,o=["mord"],l="math"===i||"text"===i&&t.font,h=l?t.font:t.fontFamily;if(55349===a.charCodeAt(0)){var m=function(e,t){var r=1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536,n="math"===t?0:1;if(119808<=r&&r<120484){var i=Math.floor((r-119808)/26);return[ge[i][2],ge[i][n]]}if(120782<=r&&r<=120831){var a=Math.floor((r-120782)/10);return[xe[a][2],xe[a][n]]}if(120485===r||120486===r)return[ge[0][2],ge[0][n]];if(120486<r&&r<120782)return["",""];throw new s("Unsupported character: "+e)}(a,i),u=m[0],d=m[1];return Be(a,u,i,t,o.concat(d))}if(h){var p,f;if("boldsymbol"===h||"mathnormal"===h){var g="boldsymbol"===h?function(e,t,r,n){return Ae(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}}(a,i):(n=a,c.contains(Te,n)?{fontName:"Main-Italic",fontClass:"mathit"}:/[0-9]/.test(n.charAt(0))?{fontName:"Caligraphic-Regular",fontClass:"mathcal"}:{fontName:"Math-Italic",fontClass:"mathdefault"});p=g.fontName,f=[g.fontClass]}else c.contains(Te,a)?(p="Main-Italic",f=["mathit"]):l?(p=Oe[h].fontName,f=[h]):(p=Ee(h,t.fontWeight,t.fontShape),f=[h,t.fontWeight,t.fontShape]);if(Ae(a,p,i).metrics)return Be(a,p,i,t,o.concat(f));if(te.hasOwnProperty(a)&&"Typewriter"===p.substr(0,10)){for(var x=[],v=0;v<a.length;v++)x.push(Be(a[v],p,i,t,o.concat(f)));return Ie(x)}}if("mathord"===r){var z=function(e,t,r,n){return/[0-9]/.test(e.charAt(0))||c.contains(Te,e)?{fontName:"Main-Italic",fontClass:"mathit"}:{fontName:"Math-Italic",fontClass:"mathdefault"}}(a);return Be(a,z.fontName,i,t,o.concat([z.fontClass]))}if("textord"===r){var y=U[i][a]&&U[i][a].font;if("ams"===y){var k=Ee("amsrm",t.fontWeight,t.fontShape);return Be(a,k,i,t,o.concat("amsrm",t.fontWeight,t.fontShape))}if("main"!==y&&y){var b=Ee(y,t.fontWeight,t.fontShape);return Be(a,b,i,t,o.concat(b,t.fontWeight,t.fontShape))}var w=Ee("textrm",t.fontWeight,t.fontShape);return Be(a,w,i,t,o.concat(t.fontWeight,t.fontShape))}throw new Error("unexpected type: "+r+" in makeOrd")},makeGlue:function(e,t){var r=qe(["mspace"],[],t),n=Me(e,t);return r.style.marginRight=n+"em",r},staticSvg:function(e,t){var r=Le[e],n=r[0],i=r[1],a=r[2],s=new L(n),o=new O([s],{width:i+"em",height:a+"em",style:"width:"+i+"em",viewBox:"0 0 "+1e3*i+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=Re(["overlay"],[o],t);return l.height=a,l.style.height=a+"em",l.style.width=i+"em",l},svgData:Le,tryCombineChars:function(e){for(var t=0;t<e.length-1;t++){var r=e[t],n=e[t+1];r instanceof E&&n instanceof E&&Ce(r,n)&&(r.text+=n.text,r.height=Math.max(r.height,n.height),r.depth=Math.max(r.depth,n.depth),r.italic=n.italic,e.splice(t+1,1),t--)}return e}};function _e(e,t){var r=He(e,t);if(!r)throw new Error("Expected node of type "+t+", but got "+(e?"node of type "+e.type:String(e)));return r}function He(e,t){return e&&e.type===t?e:null}function De(e,t){var r=function(e,t){return e&&"atom"===e.type&&e.family===t?e:null}(e,t);if(!r)throw new Error('Expected node of type "atom" and family "'+t+'", but got '+(e?"atom"===e.type?"atom of family "+e.family:"node of type "+e.type:String(e)));return r}function Pe(e){return e&&("atom"===e.type||j.hasOwnProperty(e.type))?e:null}var Ke={number:3,unit:"mu"},Fe={number:4,unit:"mu"},je={number:5,unit:"mu"},Ve={mord:{mop:Ke,mbin:Fe,mrel:je,minner:Ke},mop:{mord:Ke,mop:Ke,mrel:je,minner:Ke},mbin:{mord:Fe,mop:Fe,mopen:Fe,minner:Fe},mrel:{mord:je,mop:je,mopen:je,minner:je},mopen:{},mclose:{mop:Ke,mbin:Fe,mrel:je,minner:Ke},mpunct:{mord:Ke,mop:Ke,mrel:je,mopen:Ke,mclose:Ke,mpunct:Ke,minner:Ke},minner:{mord:Ke,mop:Ke,mbin:Fe,mrel:je,mopen:Ke,mpunct:Ke,minner:Ke}},Ue={mord:{mop:Ke},mop:{mord:Ke,mop:Ke},mbin:{},mrel:{},mopen:{},mclose:{mop:Ke},mpunct:{},minner:{mop:Ke}},Ge={},Ye={},We={};function $e(e){for(var t=e.type,r=(e.nodeType,e.names),n=e.props,i=e.handler,a=e.htmlBuilder,s=e.mathmlBuilder,o={type:t,numArgs:n.numArgs,argTypes:n.argTypes,greediness:void 0===n.greediness?1:n.greediness,allowedInText:!!n.allowedInText,allowedInMath:void 0===n.allowedInMath||n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,consumeMode:n.consumeMode,handler:i},l=0;l<r.length;++l)Ge[r[l]]=o;t&&(a&&(Ye[t]=a),s&&(We[t]=s))}function Ze(e){$e({type:e.type,names:[],props:{numArgs:0},handler:function(){throw new Error("Should never be called.")},htmlBuilder:e.htmlBuilder,mathmlBuilder:e.mathmlBuilder})}var Je=function(e){var t=He(e,"ordgroup");return t?t.body:[e]},Qe=Xe.makeSpan,et=["leftmost","mbin","mopen","mrel","mop","mpunct"],tt=["rightmost","mrel","mclose","mpunct"],rt={display:k.DISPLAY,text:k.TEXT,script:k.SCRIPT,scriptscript:k.SCRIPTSCRIPT},nt={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},it=function(e,t,r,n){void 0===n&&(n=[null,null]);for(var i=[],a=0;a<e.length;a++){var s=ht(e[a],t);if(s instanceof T){var o=s.children;i.push.apply(i,o)}else i.push(s)}if(!r)return i;var l=t;if(1===e.length){var h=He(e[0],"sizing")||He(e[0],"styling");h&&("sizing"===h.type?l=t.havingSize(h.size):"styling"===h.type&&(l=t.havingStyle(rt[h.style])))}var m=Qe([n[0]||"leftmost"],[],t),u=Qe([n[1]||"rightmost"],[],t);return at(i,function(e,t){var r=t.classes[0],n=e.classes[0];"mbin"===r&&c.contains(tt,n)?t.classes[0]="mord":"mbin"===n&&c.contains(et,r)&&(e.classes[0]="mord")},{node:m},u),at(i,function(e,t){var r=ot(t),n=ot(e),i=r&&n?e.hasClass("mtight")?Ue[r][n]:Ve[r][n]:null;if(i)return Xe.makeGlue(i,l)},{node:m},u),i},at=function e(t,r,n,i){i&&t.push(i);for(var a=0;a<t.length;a++){var s=t[a],o=st(s);if(o)e(o.children,r,n);else if("mspace"!==s.classes[0]){var l=r(s,n.node);l&&(n.insertAfter?n.insertAfter(l):(t.unshift(l),a++)),n.node=s,n.insertAfter=function(e){return function(r){t.splice(e+1,0,r),a++}}(a)}}i&&t.pop()},st=function(e){return e instanceof T||e instanceof R?e:null},ot=function(e,t){return e?(t&&(e=function e(t,r){var n=st(t);if(n){var i=n.children;if(i.length){if("right"===r)return e(i[i.length-1],"right");if("left"===r)return e(i[0],"left")}}return t}(e,t)),nt[e.classes[0]]||null):null},lt=function(e,t){var r=["nulldelimiter"].concat(e.baseSizingClasses());return Qe(t.concat(r))},ht=function(e,t,r){if(!e)return Qe();if(Ye[e.type]){var n=Ye[e.type](e,t);if(r&&t.size!==r.size){n=Qe(t.sizingClasses(r),[n],t);var i=t.sizeMultiplier/r.sizeMultiplier;n.height*=i,n.depth*=i}return n}throw new s("Got group of unknown type: '"+e.type+"'")};function mt(e,t){var r=Qe(["base"],e,t),n=Qe(["strut"]);return n.style.height=r.height+r.depth+"em",n.style.verticalAlign=-r.depth+"em",r.children.unshift(n),r}function ct(e,t){var r=null;1===e.length&&"tag"===e[0].type&&(r=e[0].tag,e=e[0].body);for(var n,i=it(e,t,!0),a=[],s=[],o=0;o<i.length;o++)if(s.push(i[o]),i[o].hasClass("mbin")||i[o].hasClass("mrel")||i[o].hasClass("allowbreak")){for(var l=!1;o<i.length-1&&i[o+1].hasClass("mspace")&&!i[o+1].hasClass("newline");)o++,s.push(i[o]),i[o].hasClass("nobreak")&&(l=!0);l||(a.push(mt(s,t)),s=[])}else i[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(mt(s,t)),s=[]),a.push(i[o]));s.length>0&&a.push(mt(s,t)),r&&((n=mt(it(r,t,!0))).classes=["tag"],a.push(n));var h=Qe(["katex-html"],a);if(h.setAttribute("aria-hidden","true"),n){var m=n.children[0];m.style.height=h.height+h.depth+"em",m.style.verticalAlign=-h.depth+"em"}return h}function ut(e){return new T(e)}var dt=function(){function e(e,t){this.type=void 0,this.attributes=void 0,this.children=void 0,this.type=e,this.attributes={},this.children=t||[]}var t=e.prototype;return t.setAttribute=function(e,t){this.attributes[e]=t},t.getAttribute=function(e){return this.attributes[e]},t.toNode=function(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);for(var r=0;r<this.children.length;r++)e.appendChild(this.children[r].toNode());return e},t.toMarkup=function(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=c.escape(this.attributes[t]),e+='"');e+=">";for(var r=0;r<this.children.length;r++)e+=this.children[r].toMarkup();return e+="</"+this.type+">"},t.toText=function(){return this.children.map(function(e){return e.toText()}).join("")},e}(),pt=function(){function e(e){this.text=void 0,this.text=e}var t=e.prototype;return t.toNode=function(){return document.createTextNode(this.text)},t.toMarkup=function(){return c.escape(this.toText())},t.toText=function(){return this.text},e}(),ft={MathNode:dt,TextNode:pt,SpaceNode:function(){function e(e){this.width=void 0,this.character=void 0,this.width=e,this.character=e>=.05555&&e<=.05556?" ":e>=.1666&&e<=.1667?" ":e>=.2222&&e<=.2223?" ":e>=.2777&&e<=.2778?"  ":e>=-.05556&&e<=-.05555?" ⁣":e>=-.1667&&e<=-.1666?" ⁣":e>=-.2223&&e<=-.2222?" ⁣":e>=-.2778&&e<=-.2777?" ⁣":null}var t=e.prototype;return t.toNode=function(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",this.width+"em"),e},t.toMarkup=function(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+this.width+'em"/>'},t.toText=function(){return this.character?this.character:" "},e}(),newDocumentFragment:ut},gt=function(e,t,r){return!U[t][e]||!U[t][e].replace||55349===e.charCodeAt(0)||te.hasOwnProperty(e)&&r&&(r.fontFamily&&"tt"===r.fontFamily.substr(4,2)||r.font&&"tt"===r.font.substr(4,2))||(e=U[t][e].replace),new ft.TextNode(e)},xt=function(e){return 1===e.length?e[0]:new ft.MathNode("mrow",e)},vt=function(e,t){if("texttt"===t.fontFamily)return"monospace";if("textsf"===t.fontFamily)return"textit"===t.fontShape&&"textbf"===t.fontWeight?"sans-serif-bold-italic":"textit"===t.fontShape?"sans-serif-italic":"textbf"===t.fontWeight?"bold-sans-serif":"sans-serif";if("textit"===t.fontShape&&"textbf"===t.fontWeight)return"bold-italic";if("textit"===t.fontShape)return"italic";if("textbf"===t.fontWeight)return"bold";var r=t.font;if(!r||"mathnormal"===r)return null;var n=e.mode;if("mathit"===r)return"italic";if("boldsymbol"===r)return"bold-italic";var i=e.text;return c.contains(["\\imath","\\jmath"],i)?null:(U[n][i]&&U[n][i].replace&&(i=U[n][i].replace),P(i,Xe.fontMap[r].fontName,n)?Xe.fontMap[r].variant:null)},zt=function(e,t){for(var r,n=[],i=0;i<e.length;i++){var a=kt(e[i],t);if(a instanceof dt&&r instanceof dt){if("mtext"===a.type&&"mtext"===r.type&&a.getAttribute("mathvariant")===r.getAttribute("mathvariant")){var s;(s=r.children).push.apply(s,a.children);continue}if("mn"===a.type&&"mn"===r.type){var o;(o=r.children).push.apply(o,a.children);continue}if("mi"===a.type&&1===a.children.length&&"mn"===r.type){var l=a.children[0];if(l instanceof pt&&"."===l.text){var h;(h=r.children).push.apply(h,a.children);continue}}}n.push(a),r=a}return n},yt=function(e,t){return xt(zt(e,t))},kt=function(e,t){if(!e)return new ft.MathNode("mrow");if(We[e.type])return We[e.type](e,t);throw new s("Got group of unknown type: '"+e.type+"'")};var bt=function(e){return new be({style:e.displayMode?k.DISPLAY:k.TEXT,maxSize:e.maxSize})},wt=function(e,t){if(t.displayMode){var r=["katex-display"];t.leqno&&r.push("leqno"),t.fleqn&&r.push("fleqn"),e=Xe.makeSpan(r,[e])}return e},St=function(e,t,r){var n=bt(r),i=function(e,t,r){var n,i=zt(e,r);n=1===i.length&&i[0]instanceof dt&&c.contains(["mrow","mtable"],i[0].type)?i[0]:new ft.MathNode("mrow",i);var a=new ft.MathNode("annotation",[new ft.TextNode(t)]);a.setAttribute("encoding","application/x-tex");var s=new ft.MathNode("semantics",[n,a]),o=new ft.MathNode("math",[s]);return Xe.makeSpan(["katex-mathml"],[o])}(e,t,n),a=ct(e,n),s=Xe.makeSpan(["katex"],[i,a]);return wt(s,r)},Mt={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⎵",overbrace:"⏞",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋"},Tt={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},At=function(e){return"ordgroup"===e.type?e.body.length:1},Bt=function(e,t,r,n){var i,a=e.height+e.depth+2*r;if(/fbox|color/.test(t)){if(i=Xe.makeSpan(["stretchy",t],[],n),"fbox"===t){var s=n.color&&n.getColor();s&&(i.style.borderColor=s)}}else{var o=[];/^[bx]cancel$/.test(t)&&o.push(new X({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&o.push(new X({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var l=new O(o,{width:"100%",height:a+"em"});i=Xe.makeSvgSpan([],[l],n)}return i.height=a,i.style.height=a+"em",i},Ct=function(e){var t=new ft.MathNode("mo",[new ft.TextNode(Mt[e.substr(1)])]);return t.setAttribute("stretchy","true"),t},Nt=function(e,t){var r=function(){var r=4e5,n=e.label.substr(1);if(c.contains(["widehat","widecheck","widetilde","utilde"],n)){var i,a,s,o=At(e.base);if(o>5)"widehat"===n||"widecheck"===n?(i=420,r=2364,s=.42,a=n+"4"):(i=312,r=2340,s=.34,a="tilde4");else{var l=[1,1,2,2,3,3][o];"widehat"===n||"widecheck"===n?(r=[0,1062,2364,2364,2364][l],i=[0,239,300,360,420][l],s=[0,.24,.3,.3,.36,.42][l],a=n+l):(r=[0,600,1033,2339,2340][l],i=[0,260,286,306,312][l],s=[0,.26,.286,.3,.306,.34][l],a="tilde"+l)}var h=new L(a),m=new O([h],{width:"100%",height:s+"em",viewBox:"0 0 "+r+" "+i,preserveAspectRatio:"none"});return{span:Xe.makeSvgSpan([],[m],t),minWidth:0,height:s}}var u,d,p=[],f=Tt[n],g=f[0],x=f[1],v=f[2],z=v/1e3,y=g.length;if(1===y)u=["hide-tail"],d=[f[3]];else if(2===y)u=["halfarrow-left","halfarrow-right"],d=["xMinYMin","xMaxYMin"];else{if(3!==y)throw new Error("Correct katexImagesData or update code here to support\n                    "+y+" children.");u=["brace-left","brace-center","brace-right"],d=["xMinYMin","xMidYMin","xMaxYMin"]}for(var k=0;k<y;k++){var b=new L(g[k]),w=new O([b],{width:"400em",height:z+"em",viewBox:"0 0 "+r+" "+v,preserveAspectRatio:d[k]+" slice"}),S=Xe.makeSvgSpan([u[k]],[w],t);if(1===y)return{span:S,minWidth:x,height:z};S.style.height=z+"em",p.push(S)}return{span:Xe.makeSpan(["stretchy"],p,t),minWidth:x,height:z}}(),n=r.span,i=r.minWidth,a=r.height;return n.height=a,n.style.height=a+"em",i>0&&(n.style.minWidth=i+"em"),n},qt=function(e,t){var r,n,i,a=He(e,"supsub");a?(r=(n=_e(a.base,"accent")).base,a.base=r,i=function(e){if(e instanceof q)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}(ht(a,t)),a.base=n):r=(n=_e(e,"accent")).base;var s=ht(r,t.havingCrampedStyle()),o=0;if(n.isShifty&&c.isCharacterBox(r)){var l=c.getBaseElem(r);o=function(e){if(e instanceof E)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}(ht(l,t.havingCrampedStyle())).skew}var h,m=Math.min(s.height,t.fontMetrics().xHeight);if(n.isStretchy)h=Nt(n,t),h=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"elem",elem:h,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+2*o+"em)",marginLeft:2*o+"em"}:void 0}]},t);else{var u,d;"\\vec"===n.label?(u=Xe.staticSvg("vec",t),d=Xe.svgData.vec[1]):((u=Xe.makeSymbol(n.label,"Main-Regular",n.mode,t)).italic=0,d=u.width),h=Xe.makeSpan(["accent-body"],[u]);var p="\\textcircled"===n.label;p&&(h.classes.push("accent-full"),m=s.height);var f=o;p||(f-=d/2),h.style.left=f+"em","\\textcircled"===n.label&&(h.style.top=".2em"),h=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:s},{type:"kern",size:-m},{type:"elem",elem:h}]},t)}var g=Xe.makeSpan(["mord","accent"],[h],t);return i?(i.children[0]=g,i.height=Math.max(g.height,i.height),i.classes[0]="mord",i):g},Rt=function(e,t){var r=e.isStretchy?Ct(e.label):new ft.MathNode("mo",[gt(e.label,e.mode)]),n=new ft.MathNode("mover",[kt(e.base,t),r]);return n.setAttribute("accent","true"),n},It=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(function(e){return"\\"+e}).join("|"));$e({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:function(e,t){var r=t[0],n=!It.test(e.funcName),i=!n||"\\widehat"===e.funcName||"\\widetilde"===e.funcName||"\\widecheck"===e.funcName;return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:n,isShifty:i,base:r}},htmlBuilder:qt,mathmlBuilder:Rt}),$e({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!1},handler:function(e,t){var r=t[0];return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:qt,mathmlBuilder:Rt}),$e({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0];return{type:"accentUnder",mode:r.mode,label:n,base:i}},htmlBuilder:function(e,t){var r=ht(e.base,t),n=Nt(e,t),i="\\utilde"===e.label?.12:0,a=Xe.makeVList({positionType:"bottom",positionData:n.height+i,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:r}]},t);return Xe.makeSpan(["mord","accentunder"],[a],t)},mathmlBuilder:function(e,t){var r=Ct(e.label),n=new ft.MathNode("munder",[kt(e.base,t),r]);return n.setAttribute("accentunder","true"),n}}),$e({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium"],props:{numArgs:1,numOptionalArgs:1},handler:function(e,t,r){var n=e.parser,i=e.funcName;return{type:"xArrow",mode:n.mode,label:i,body:t[0],below:r[0]}},htmlBuilder:function(e,t){var r,n=t.style,i=t.havingStyle(n.sup()),a=Xe.wrapFragment(ht(e.body,i,t),t);a.classes.push("x-arrow-pad"),e.below&&(i=t.havingStyle(n.sub()),(r=Xe.wrapFragment(ht(e.below,i,t),t)).classes.push("x-arrow-pad"));var s,o=Nt(e,t),l=-t.fontMetrics().axisHeight+.5*o.height,h=-t.fontMetrics().axisHeight-.5*o.height-.111;if((a.depth>.25||"\\xleftequilibrium"===e.label)&&(h-=a.depth),r){var m=-t.fontMetrics().axisHeight+r.height+.5*o.height+.111;s=Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:h},{type:"elem",elem:o,shift:l},{type:"elem",elem:r,shift:m}]},t)}else s=Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:a,shift:h},{type:"elem",elem:o,shift:l}]},t);return s.children[0].children[0].children[1].classes.push("svg-align"),Xe.makeSpan(["mrel","x-arrow"],[s],t)},mathmlBuilder:function(e,t){var r,n,i=Ct(e.label);if(e.body){var a=kt(e.body,t);e.below?(n=kt(e.below,t),r=new ft.MathNode("munderover",[i,n,a])):r=new ft.MathNode("mover",[i,a])}else e.below?(n=kt(e.below,t),r=new ft.MathNode("munder",[i,n])):r=new ft.MathNode("mover",[i]);return r}}),$e({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler:function(e,t){for(var r=e.parser,n=_e(t[0],"ordgroup").body,i="",a=0;a<n.length;a++){i+=_e(n[a],"textord").text}var o=parseInt(i);if(isNaN(o))throw new s("\\@char has non-numeric argument "+i);return{type:"textord",mode:r.mode,text:String.fromCharCode(o)}}});var Et=function(e,t){var r=it(e.body,t.withColor(e.color),!1);return Xe.makeFragment(r)},Ot=function(e,t){var r=zt(e.body,t),n=new ft.MathNode("mstyle",r);return n.setAttribute("mathcolor",e.color),n};$e({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,greediness:3,argTypes:["color","original"]},handler:function(e,t){var r=e.parser,n=_e(t[0],"color-token").color,i=t[1];return{type:"color",mode:r.mode,color:n,body:Je(i)}},htmlBuilder:Et,mathmlBuilder:Ot}),$e({type:"color",names:["\\blue","\\orange","\\pink","\\red","\\green","\\gray","\\purple","\\blueA","\\blueB","\\blueC","\\blueD","\\blueE","\\tealA","\\tealB","\\tealC","\\tealD","\\tealE","\\greenA","\\greenB","\\greenC","\\greenD","\\greenE","\\goldA","\\goldB","\\goldC","\\goldD","\\goldE","\\redA","\\redB","\\redC","\\redD","\\redE","\\maroonA","\\maroonB","\\maroonC","\\maroonD","\\maroonE","\\purpleA","\\purpleB","\\purpleC","\\purpleD","\\purpleE","\\mintA","\\mintB","\\mintC","\\grayA","\\grayB","\\grayC","\\grayD","\\grayE","\\grayF","\\grayG","\\grayH","\\grayI","\\kaBlue","\\kaGreen"],props:{numArgs:1,allowedInText:!0,greediness:3},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0];return{type:"color",mode:r.mode,color:"katex-"+n.slice(1),body:Je(i)}},htmlBuilder:Et,mathmlBuilder:Ot}),$e({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,greediness:3,argTypes:["color"]},handler:function(e,t){var r=e.parser,n=e.breakOnTokenText,i=_e(t[0],"color-token").color,a=r.parseExpression(!0,n);return{type:"color",mode:r.mode,color:i,body:a}},htmlBuilder:Et,mathmlBuilder:Ot}),$e({type:"cr",names:["\\cr","\\newline"],props:{numArgs:0,numOptionalArgs:1,argTypes:["size"],allowedInText:!0},handler:function(e,t,r){var n=e.parser,i=e.funcName,a=r[0],s="\\cr"===i,o=!1;return s||(o=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode")),{type:"cr",mode:n.mode,newLine:o,newRow:s,size:a&&_e(a,"size").value}},htmlBuilder:function(e,t){if(e.newRow)throw new s("\\cr valid only within a tabular/array environment");var r=Xe.makeSpan(["mspace"],[],t);return e.newLine&&(r.classes.push("newline"),e.size&&(r.style.marginTop=Me(e.size,t)+"em")),r},mathmlBuilder:function(e,t){var r=new ft.MathNode("mspace");return e.newLine&&(r.setAttribute("linebreak","newline"),e.size&&r.setAttribute("height",Me(e.size,t)+"em")),r}});var Lt=function(e,t,r){var n=P(U.math[e]&&U.math[e].replace||e,t,r);if(!n)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return n},Xt=function(e,t,r,n){var i=r.havingBaseStyle(t),a=Xe.makeSpan(n.concat(i.sizingClasses(r)),[e],r),s=i.sizeMultiplier/r.sizeMultiplier;return a.height*=s,a.depth*=s,a.maxFontSize=i.sizeMultiplier,a},_t=function(e,t,r){var n=t.havingBaseStyle(r),i=(1-t.sizeMultiplier/n.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=i+"em",e.height-=i,e.depth+=i},Ht=function(e,t,r,n,i,a){var s=function(e,t,r,n){return Xe.makeSymbol(e,"Size"+t+"-Regular",r,n)}(e,t,i,n),o=Xt(Xe.makeSpan(["delimsizing","size"+t],[s],n),k.TEXT,n,a);return r&&_t(o,n,k.TEXT),o},Dt=function(e,t,r){var n;return n="Size1-Regular"===t?"delim-size1":"delim-size4",{type:"elem",elem:Xe.makeSpan(["delimsizinginner",n],[Xe.makeSpan([],[Xe.makeSymbol(e,t,r)])])}},Pt=function(e,t,r,n,i,a){var s,o,l,h;s=l=h=e,o=null;var m="Size1-Regular";"\\uparrow"===e?l=h="⏐":"\\Uparrow"===e?l=h="‖":"\\downarrow"===e?s=l="⏐":"\\Downarrow"===e?s=l="‖":"\\updownarrow"===e?(s="\\uparrow",l="⏐",h="\\downarrow"):"\\Updownarrow"===e?(s="\\Uparrow",l="‖",h="\\Downarrow"):"["===e||"\\lbrack"===e?(s="⎡",l="⎢",h="⎣",m="Size4-Regular"):"]"===e||"\\rbrack"===e?(s="⎤",l="⎥",h="⎦",m="Size4-Regular"):"\\lfloor"===e||"⌊"===e?(l=s="⎢",h="⎣",m="Size4-Regular"):"\\lceil"===e||"⌈"===e?(s="⎡",l=h="⎢",m="Size4-Regular"):"\\rfloor"===e||"⌋"===e?(l=s="⎥",h="⎦",m="Size4-Regular"):"\\rceil"===e||"⌉"===e?(s="⎤",l=h="⎥",m="Size4-Regular"):"("===e||"\\lparen"===e?(s="⎛",l="⎜",h="⎝",m="Size4-Regular"):")"===e||"\\rparen"===e?(s="⎞",l="⎟",h="⎠",m="Size4-Regular"):"\\{"===e||"\\lbrace"===e?(s="⎧",o="⎨",h="⎩",l="⎪",m="Size4-Regular"):"\\}"===e||"\\rbrace"===e?(s="⎫",o="⎬",h="⎭",l="⎪",m="Size4-Regular"):"\\lgroup"===e||"⟮"===e?(s="⎧",h="⎩",l="⎪",m="Size4-Regular"):"\\rgroup"===e||"⟯"===e?(s="⎫",h="⎭",l="⎪",m="Size4-Regular"):"\\lmoustache"===e||"⎰"===e?(s="⎧",h="⎭",l="⎪",m="Size4-Regular"):"\\rmoustache"!==e&&"⎱"!==e||(s="⎫",h="⎩",l="⎪",m="Size4-Regular");var c=Lt(s,m,i),u=c.height+c.depth,d=Lt(l,m,i),p=d.height+d.depth,f=Lt(h,m,i),g=f.height+f.depth,x=0,v=1;if(null!==o){var z=Lt(o,m,i);x=z.height+z.depth,v=2}var y=u+g+x,b=Math.ceil((t-y)/(v*p)),w=y+b*v*p,S=n.fontMetrics().axisHeight;r&&(S*=n.sizeMultiplier);var M=w/2-S,T=[];if(T.push(Dt(h,m,i)),null===o)for(var A=0;A<b;A++)T.push(Dt(l,m,i));else{for(var B=0;B<b;B++)T.push(Dt(l,m,i));T.push(Dt(o,m,i));for(var C=0;C<b;C++)T.push(Dt(l,m,i))}T.push(Dt(s,m,i));var N=n.havingBaseStyle(k.TEXT),q=Xe.makeVList({positionType:"bottom",positionData:M,children:T},N);return Xt(Xe.makeSpan(["delimsizing","mult"],[q],N),k.TEXT,n,a)},Kt=function(e,t,r,n){var i;"sqrtTall"===e&&(i="M702 80H400000v40H742v"+(r-54-80)+"l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");var a=new L(e,i),s=new O([a],{width:"400em",height:t+"em",viewBox:"0 0 400000 "+r,preserveAspectRatio:"xMinYMin slice"});return Xe.makeSvgSpan(["hide-tail"],[s],n)},Ft=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"],jt=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"],Vt=["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"],Ut=[0,1.2,1.8,2.4,3],Gt=[{type:"small",style:k.SCRIPTSCRIPT},{type:"small",style:k.SCRIPT},{type:"small",style:k.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Yt=[{type:"small",style:k.SCRIPTSCRIPT},{type:"small",style:k.SCRIPT},{type:"small",style:k.TEXT},{type:"stack"}],Wt=[{type:"small",style:k.SCRIPTSCRIPT},{type:"small",style:k.SCRIPT},{type:"small",style:k.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],$t=function(e){if("small"===e.type)return"Main-Regular";if("large"===e.type)return"Size"+e.size+"-Regular";if("stack"===e.type)return"Size4-Regular";throw new Error("Add support for delim type '"+e.type+"' here.")},Zt=function(e,t,r,n){for(var i=Math.min(2,3-n.style.size);i<r.length&&"stack"!==r[i].type;i++){var a=Lt(e,$t(r[i]),"math"),s=a.height+a.depth;if("small"===r[i].type&&(s*=n.havingBaseStyle(r[i].style).sizeMultiplier),s>t)return r[i]}return r[r.length-1]},Jt=function(e,t,r,n,i,a){var s;"<"===e||"\\lt"===e||"⟨"===e?e="\\langle":">"!==e&&"\\gt"!==e&&"⟩"!==e||(e="\\rangle"),s=c.contains(Vt,e)?Gt:c.contains(Ft,e)?Wt:Yt;var o=Zt(e,t,s,n);return"small"===o.type?function(e,t,r,n,i,a){var s=Xe.makeSymbol(e,"Main-Regular",i,n),o=Xt(s,t,n,a);return r&&_t(o,n,t),o}(e,o.style,r,n,i,a):"large"===o.type?Ht(e,o.size,r,n,i,a):Pt(e,t,r,n,i,a)},Qt=function(e,t){var r,n,i=t.havingBaseSizing(),a=Zt("\\surd",e*i.sizeMultiplier,Wt,i),s=i.sizeMultiplier,o=0,l=0,h=0;return"small"===a.type?(e<1?s=1:e<1.4&&(s=.7),l=1/s,(r=Kt("sqrtMain",o=1.08/s,h=1080,t)).style.minWidth="0.853em",n=.833/s):"large"===a.type?(h=1080*Ut[a.size],l=Ut[a.size]/s,o=(Ut[a.size]+.08)/s,(r=Kt("sqrtSize"+a.size,o,h,t)).style.minWidth="1.02em",n=1/s):(o=e+.08,l=e,h=Math.floor(1e3*e)+80,(r=Kt("sqrtTall",o,h,t)).style.minWidth="0.742em",n=1.056),r.height=l,r.style.height=o+"em",{span:r,advanceWidth:n,ruleWidth:t.fontMetrics().sqrtRuleThickness*s}},er=function(e,t,r,n,i){if("<"===e||"\\lt"===e||"⟨"===e?e="\\langle":">"!==e&&"\\gt"!==e&&"⟩"!==e||(e="\\rangle"),c.contains(Ft,e)||c.contains(Vt,e))return Ht(e,t,!1,r,n,i);if(c.contains(jt,e))return Pt(e,Ut[t],!1,r,n,i);throw new s("Illegal delimiter: '"+e+"'")},tr=Jt,rr=function(e,t,r,n,i,a){var s=n.fontMetrics().axisHeight*n.sizeMultiplier,o=5/n.fontMetrics().ptPerEm,l=Math.max(t-s,r+s),h=Math.max(l/500*901,2*l-o);return Jt(e,h,!0,n,i,a)},nr={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},ir=["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."];function ar(e,t){var r=Pe(e);if(r&&c.contains(ir,r.text))return r;throw new s("Invalid delimiter: '"+(r?r.text:JSON.stringify(e))+"' after '"+t.funcName+"'",e)}function sr(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}$e({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1},handler:function(e,t){var r=ar(t[0],e);return{type:"delimsizing",mode:e.parser.mode,size:nr[e.funcName].size,mclass:nr[e.funcName].mclass,delim:r.text}},htmlBuilder:function(e,t){return"."===e.delim?Xe.makeSpan([e.mclass]):er(e.delim,e.size,t,e.mode,[e.mclass])},mathmlBuilder:function(e){var t=[];"."!==e.delim&&t.push(gt(e.delim,e.mode));var r=new ft.MathNode("mo",t);return"mopen"===e.mclass||"mclose"===e.mclass?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r}}),$e({type:"leftright-right",names:["\\right"],props:{numArgs:1},handler:function(e,t){return{type:"leftright-right",mode:e.parser.mode,delim:ar(t[0],e).text}}}),$e({type:"leftright",names:["\\left"],props:{numArgs:1},handler:function(e,t){var r=ar(t[0],e),n=e.parser;++n.leftrightDepth;var i=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var a=_e(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:i,left:r.text,right:a.delim}},htmlBuilder:function(e,t){sr(e);for(var r,n,i=it(e.body,t,!0,["mopen","mclose"]),a=0,s=0,o=!1,l=0;l<i.length;l++)i[l].isMiddle?o=!0:(a=Math.max(i[l].height,a),s=Math.max(i[l].depth,s));if(a*=t.sizeMultiplier,s*=t.sizeMultiplier,r="."===e.left?lt(t,["mopen"]):rr(e.left,a,s,t,e.mode,["mopen"]),i.unshift(r),o)for(var h=1;h<i.length;h++){var m=i[h].isMiddle;m&&(i[h]=rr(m.delim,a,s,m.options,e.mode,[]))}return n="."===e.right?lt(t,["mclose"]):rr(e.right,a,s,t,e.mode,["mclose"]),i.push(n),Xe.makeSpan(["minner"],i,t)},mathmlBuilder:function(e,t){sr(e);var r=zt(e.body,t);if("."!==e.left){var n=new ft.MathNode("mo",[gt(e.left,e.mode)]);n.setAttribute("fence","true"),r.unshift(n)}if("."!==e.right){var i=new ft.MathNode("mo",[gt(e.right,e.mode)]);i.setAttribute("fence","true"),r.push(i)}return xt(r)}}),$e({type:"middle",names:["\\middle"],props:{numArgs:1},handler:function(e,t){var r=ar(t[0],e);if(!e.parser.leftrightDepth)throw new s("\\middle without preceding \\left",r);return{type:"middle",mode:e.parser.mode,delim:r.text}},htmlBuilder:function(e,t){var r;if("."===e.delim)r=lt(t,[]);else{r=er(e.delim,1,t,e.mode,[]);var n={delim:e.delim,options:t};r.isMiddle=n}return r},mathmlBuilder:function(e,t){var r=new ft.MathNode("mo",[gt(e.delim,e.mode)]);return r.setAttribute("fence","true"),r}});var or=function(e,t){var r,n,i=Xe.wrapFragment(ht(e.body,t),t),a=e.label.substr(1),s=t.sizeMultiplier,o=0,l=c.isCharacterBox(e.body);if("sout"===a)(r=Xe.makeSpan(["stretchy","sout"])).height=t.fontMetrics().defaultRuleThickness/s,o=-.5*t.fontMetrics().xHeight;else{/cancel/.test(a)?l||i.classes.push("cancel-pad"):i.classes.push("boxpad");var h=0;h=/box/.test(a)?"colorbox"===a?.3:.34:l?.2:0,r=Bt(i,a,h,t),o=i.depth+h,e.backgroundColor&&(r.style.backgroundColor=e.backgroundColor,e.borderColor&&(r.style.borderColor=e.borderColor))}return n=e.backgroundColor?Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:r,shift:o},{type:"elem",elem:i,shift:0}]},t):Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:i,shift:0},{type:"elem",elem:r,shift:o,wrapperClasses:/cancel/.test(a)?["svg-align"]:[]}]},t),/cancel/.test(a)&&(n.height=i.height,n.depth=i.depth),/cancel/.test(a)&&!l?Xe.makeSpan(["mord","cancel-lap"],[n],t):Xe.makeSpan(["mord"],[n],t)},lr=function(e,t){var r=new ft.MathNode("menclose",[kt(e.body,t)]);switch(e.label){case"\\cancel":r.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":r.setAttribute("notation","downdiagonalstrike");break;case"\\sout":r.setAttribute("notation","horizontalstrike");break;case"\\fbox":case"\\fcolorbox":r.setAttribute("notation","box");break;case"\\xcancel":r.setAttribute("notation","updiagonalstrike downdiagonalstrike")}return e.backgroundColor&&r.setAttribute("mathbackground",e.backgroundColor),r};$e({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,greediness:3,argTypes:["color","text"]},handler:function(e,t,r){var n=e.parser,i=e.funcName,a=_e(t[0],"color-token").color,s=t[1];return{type:"enclose",mode:n.mode,label:i,backgroundColor:a,body:s}},htmlBuilder:or,mathmlBuilder:lr}),$e({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,greediness:3,argTypes:["color","color","text"]},handler:function(e,t,r){var n=e.parser,i=e.funcName,a=_e(t[0],"color-token").color,s=_e(t[1],"color-token").color,o=t[2];return{type:"enclose",mode:n.mode,label:i,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:or,mathmlBuilder:lr}),$e({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0},handler:function(e,t){return{type:"enclose",mode:e.parser.mode,label:"\\fbox",body:t[0]}}}),$e({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout"],props:{numArgs:1},handler:function(e,t,r){var n=e.parser,i=e.funcName,a=t[0];return{type:"enclose",mode:n.mode,label:i,body:a}},htmlBuilder:or,mathmlBuilder:lr});var hr={};function mr(e){for(var t=e.type,r=e.names,n=e.props,i=e.handler,a=e.htmlBuilder,s=e.mathmlBuilder,o={type:t,numArgs:n.numArgs||0,greediness:1,allowedInText:!1,numOptionalArgs:0,handler:i},l=0;l<r.length;++l)hr[r[l]]=o;a&&(Ye[t]=a),s&&(We[t]=s)}function cr(e){var t=[];e.consumeSpaces();for(var r=e.nextToken.text;"\\hline"===r||"\\hdashline"===r;)e.consume(),t.push("\\hdashline"===r),e.consumeSpaces(),r=e.nextToken.text;return t}function ur(e,t,r){var n=t.hskipBeforeAndAfter,i=t.addJot,a=t.cols,o=t.arraystretch;if(e.gullet.beginGroup(),e.gullet.macros.set("\\\\","\\cr"),!o){var l=e.gullet.expandMacroAsText("\\arraystretch");if(null==l)o=1;else if(!(o=parseFloat(l))||o<0)throw new s("Invalid \\arraystretch: "+l)}var h=[],m=[h],c=[],u=[];for(u.push(cr(e));;){var d=e.parseExpression(!1,"\\cr");d={type:"ordgroup",mode:e.mode,body:d},r&&(d={type:"styling",mode:e.mode,style:r,body:[d]}),h.push(d);var p=e.nextToken.text;if("&"===p)e.consume();else{if("\\end"===p){1===h.length&&"styling"===d.type&&0===d.body[0].body.length&&m.pop(),u.length<m.length+1&&u.push([]);break}if("\\cr"!==p)throw new s("Expected & or \\\\ or \\cr or \\end",e.nextToken);var f=_e(e.parseFunction(),"cr");c.push(f.size),u.push(cr(e)),h=[],m.push(h)}}return e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:i,arraystretch:o,body:m,cols:a,rowGaps:c,hskipBeforeAndAfter:n,hLinesBeforeRow:u}}function dr(e){return"d"===e.substr(0,1)?"display":"text"}var pr=function(e,t){var r,n,i=e.body.length,a=e.hLinesBeforeRow,o=0,l=new Array(i),h=[],m=1/t.fontMetrics().ptPerEm,u=5*m,d=12*m,p=3*m,f=e.arraystretch*d,g=.7*f,x=.3*f,v=0;function z(e){for(var t=0;t<e.length;++t)t>0&&(v+=.25),h.push({pos:v,isDashed:e[t]})}for(z(a[0]),r=0;r<e.body.length;++r){var y=e.body[r],k=g,b=x;o<y.length&&(o=y.length);var w=new Array(y.length);for(n=0;n<y.length;++n){var S=ht(y[n],t);b<S.depth&&(b=S.depth),k<S.height&&(k=S.height),w[n]=S}var M=e.rowGaps[r],T=0;M&&(T=Me(M,t))>0&&(b<(T+=x)&&(b=T),T=0),e.addJot&&(b+=p),w.height=k,w.depth=b,v+=k,w.pos=v,v+=b+T,l[r]=w,z(a[r+1])}var A,B,C=v/2+t.fontMetrics().axisHeight,N=e.cols||[],q=[];for(n=0,B=0;n<o||B<N.length;++n,++B){for(var R=N[B]||{},I=!0;"separator"===R.type;){if(I||((A=Xe.makeSpan(["arraycolsep"],[])).style.width=t.fontMetrics().doubleRuleSep+"em",q.push(A)),"|"===R.separator){var E=Xe.makeSpan(["vertical-separator"],[],t);E.style.height=v+"em",E.style.verticalAlign=-(v-C)+"em",q.push(E)}else{if(":"!==R.separator)throw new s("Invalid separator type: "+R.separator);var O=Xe.makeSpan(["vertical-separator","vs-dashed"],[],t);O.style.height=v+"em",O.style.verticalAlign=-(v-C)+"em",q.push(O)}R=N[++B]||{},I=!1}if(!(n>=o)){var L=void 0;(n>0||e.hskipBeforeAndAfter)&&0!==(L=c.deflt(R.pregap,u))&&((A=Xe.makeSpan(["arraycolsep"],[])).style.width=L+"em",q.push(A));var X=[];for(r=0;r<i;++r){var _=l[r],H=_[n];if(H){var D=_.pos-C;H.depth=_.depth,H.height=_.height,X.push({type:"elem",elem:H,shift:D})}}X=Xe.makeVList({positionType:"individualShift",children:X},t),X=Xe.makeSpan(["col-align-"+(R.align||"c")],[X]),q.push(X),(n<o-1||e.hskipBeforeAndAfter)&&0!==(L=c.deflt(R.postgap,u))&&((A=Xe.makeSpan(["arraycolsep"],[])).style.width=L+"em",q.push(A))}}if(l=Xe.makeSpan(["mtable"],q),h.length>0){for(var P=Xe.makeLineSpan("hline",t,.05),K=Xe.makeLineSpan("hdashline",t,.05),F=[{type:"elem",elem:l,shift:0}];h.length>0;){var j=h.pop(),V=j.pos-C;j.isDashed?F.push({type:"elem",elem:K,shift:V}):F.push({type:"elem",elem:P,shift:V})}l=Xe.makeVList({positionType:"individualShift",children:F},t)}return Xe.makeSpan(["mord"],[l],t)},fr=function(e,t){return new ft.MathNode("mtable",e.body.map(function(e){return new ft.MathNode("mtr",e.map(function(e){return new ft.MathNode("mtd",[kt(e,t)])}))}))},gr=function(e,t){var r,n=[],i=ur(e.parser,{cols:n,addJot:!0},"display"),a=0,o={type:"ordgroup",mode:e.mode,body:[]},l=He(t[0],"ordgroup");if(l){for(var h="",m=0;m<l.body.length;m++){h+=_e(l.body[m],"textord").text}r=Number(h),a=2*r}var c=!a;i.body.forEach(function(e){for(var t=1;t<e.length;t+=2){var n=_e(e[t],"styling");_e(n.body[0],"ordgroup").body.unshift(o)}if(c)a<e.length&&(a=e.length);else{var i=e.length/2;if(r<i)throw new s("Too many math in a row: expected "+r+", but got "+i,e[0])}});for(var u=0;u<a;++u){var d="r",p=0;u%2==1?d="l":u>0&&c&&(p=1),n[u]={type:"align",align:d,pregap:p,postgap:0}}return i};mr({type:"array",names:["array","darray"],props:{numArgs:1},handler:function(e,t){var r={cols:(Pe(t[0])?[t[0]]:_e(t[0],"ordgroup").body).map(function(e){var t=function(e){var t=Pe(e);if(!t)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return t}(e).text;if(-1!=="lcr".indexOf(t))return{type:"align",align:t};if("|"===t)return{type:"separator",separator:"|"};if(":"===t)return{type:"separator",separator:":"};throw new s("Unknown column alignment: "+t,e)}),hskipBeforeAndAfter:!0};return ur(e.parser,r,dr(e.envName))},htmlBuilder:pr,mathmlBuilder:fr}),mr({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],props:{numArgs:0},handler:function(e){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName],r=ur(e.parser,{hskipBeforeAndAfter:!1},dr(e.envName));return t?{type:"leftright",mode:e.mode,body:[r],left:t[0],right:t[1]}:r},htmlBuilder:pr,mathmlBuilder:fr}),mr({type:"array",names:["cases","dcases"],props:{numArgs:0},handler:function(e){var t=ur(e.parser,{arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},dr(e.envName));return{type:"leftright",mode:e.mode,body:[t],left:"\\{",right:"."}},htmlBuilder:pr,mathmlBuilder:fr}),mr({type:"array",names:["aligned"],props:{numArgs:0},handler:gr,htmlBuilder:pr,mathmlBuilder:fr}),mr({type:"array",names:["gathered"],props:{numArgs:0},handler:function(e){return ur(e.parser,{cols:[{type:"align",align:"c"}],addJot:!0},"display")},htmlBuilder:pr,mathmlBuilder:fr}),mr({type:"array",names:["alignedat"],props:{numArgs:1},handler:gr,htmlBuilder:pr,mathmlBuilder:fr}),$e({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler:function(e,t){throw new s(e.funcName+" valid only within array environment")}});var xr=hr;$e({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0];if("ordgroup"!==i.type)throw new s("Invalid environment name",i);for(var a="",o=0;o<i.body.length;++o)a+=_e(i.body[o],"textord").text;if("\\begin"===n){if(!xr.hasOwnProperty(a))throw new s("No such environment: "+a,i);var l=xr[a],h=r.parseArguments("\\begin{"+a+"}",l),m=h.args,c=h.optArgs,u={mode:r.mode,envName:a,parser:r},d=l.handler(u,m,c);r.expect("\\end",!1);var p=r.nextToken,f=_e(r.parseFunction(),"environment");if(f.name!==a)throw new s("Mismatch: \\begin{"+a+"} matched by \\end{"+f.name+"}",p);return d}return{type:"environment",mode:r.mode,name:a,nameGroup:i}}});var vr=Xe.makeSpan;function zr(e,t){var r=it(e.body,t,!0);return vr([e.mclass],r,t)}function yr(e,t){var r=zt(e.body,t);return ft.newDocumentFragment(r)}$e({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+n.substr(5),body:Je(i)}},htmlBuilder:zr,mathmlBuilder:yr});var kr=function(e){var t="ordgroup"===e.type&&e.body.length?e.body[0]:e;return"atom"!==t.type||"bin"!==t.family&&"rel"!==t.family?"mord":"m"+t.family};$e({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler:function(e,t){return{type:"mclass",mode:e.parser.mode,mclass:kr(t[0]),body:[t[1]]}}}),$e({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler:function(e,t){var r,n=e.parser,i=e.funcName,a=t[1],s=t[0];r="\\stackrel"!==i?kr(a):"mrel";var o={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,symbol:!1,suppressBaseShift:"\\stackrel"!==i,body:Je(a)},l={type:"supsub",mode:s.mode,base:o,sup:"\\underset"===i?null:s,sub:"\\underset"===i?s:null};return{type:"mclass",mode:n.mode,mclass:r,body:[l]}},htmlBuilder:zr,mathmlBuilder:yr});var br=function(e,t){var r=e.font,n=t.withFont(r);return ht(e.body,n)},wr=function(e,t){var r=e.font,n=t.withFont(r);return kt(e.body,n)},Sr={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};$e({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,greediness:2},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0],a=n;return a in Sr&&(a=Sr[a]),{type:"font",mode:r.mode,font:a.slice(1),body:i}},htmlBuilder:br,mathmlBuilder:wr}),$e({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1,greediness:2},handler:function(e,t){var r=e.parser,n=t[0];return{type:"mclass",mode:r.mode,mclass:kr(n),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:n}]}}}),$e({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it"],props:{numArgs:0,allowedInText:!0},handler:function(e,t){var r=e.parser,n=e.funcName,i=e.breakOnTokenText,a=r.mode,s=r.parseExpression(!0,i);return{type:"font",mode:a,font:"math"+n.slice(1),body:{type:"ordgroup",mode:r.mode,body:s}}},htmlBuilder:br,mathmlBuilder:wr});var Mr=function(e,t){var r=t.style;"display"===e.size?r=k.DISPLAY:"text"===e.size&&r.size===k.DISPLAY.size?r=k.TEXT:"script"===e.size?r=k.SCRIPT:"scriptscript"===e.size&&(r=k.SCRIPTSCRIPT);var n,i=r.fracNum(),a=r.fracDen();n=t.havingStyle(i);var s=ht(e.numer,n,t);if(e.continued){var o=8.5/t.fontMetrics().ptPerEm,l=3.5/t.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}n=t.havingStyle(a);var h,m,c,u,d,p,f,g,x,v,z=ht(e.denom,n,t);if(e.hasBarLine?(e.barSize?(m=Me(e.barSize,t),h=Xe.makeLineSpan("frac-line",t,m)):h=Xe.makeLineSpan("frac-line",t),m=h.height,c=h.height):(h=null,m=0,c=t.fontMetrics().defaultRuleThickness),r.size===k.DISPLAY.size?(u=t.fontMetrics().num1,d=m>0?3*c:7*c,p=t.fontMetrics().denom1):(m>0?(u=t.fontMetrics().num2,d=c):(u=t.fontMetrics().num3,d=3*c),p=t.fontMetrics().denom2),h){var y=t.fontMetrics().axisHeight;u-s.depth-(y+.5*m)<d&&(u+=d-(u-s.depth-(y+.5*m))),y-.5*m-(z.height-p)<d&&(p+=d-(y-.5*m-(z.height-p)));var b=-(y-.5*m);f=Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:z,shift:p},{type:"elem",elem:h,shift:b},{type:"elem",elem:s,shift:-u}]},t)}else{var w=u-s.depth-(z.height-p);w<d&&(u+=.5*(d-w),p+=.5*(d-w)),f=Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:z,shift:p},{type:"elem",elem:s,shift:-u}]},t)}return n=t.havingStyle(r),f.height*=n.sizeMultiplier/t.sizeMultiplier,f.depth*=n.sizeMultiplier/t.sizeMultiplier,g=r.size===k.DISPLAY.size?t.fontMetrics().delim1:t.fontMetrics().delim2,x=null==e.leftDelim?lt(t,["mopen"]):tr(e.leftDelim,g,!0,t.havingStyle(r),e.mode,["mopen"]),v=e.continued?Xe.makeSpan([]):null==e.rightDelim?lt(t,["mclose"]):tr(e.rightDelim,g,!0,t.havingStyle(r),e.mode,["mclose"]),Xe.makeSpan(["mord"].concat(n.sizingClasses(t)),[x,Xe.makeSpan(["mfrac"],[f]),v],t)},Tr=function(e,t){var r=new ft.MathNode("mfrac",[kt(e.numer,t),kt(e.denom,t)]);if(e.hasBarLine){if(e.barSize){var n=Me(e.barSize,t);r.setAttribute("linethickness",n+"em")}}else r.setAttribute("linethickness","0px");if(null!=e.leftDelim||null!=e.rightDelim){var i=[];if(null!=e.leftDelim){var a=new ft.MathNode("mo",[new ft.TextNode(e.leftDelim)]);a.setAttribute("fence","true"),i.push(a)}if(i.push(r),null!=e.rightDelim){var s=new ft.MathNode("mo",[new ft.TextNode(e.rightDelim)]);s.setAttribute("fence","true"),i.push(s)}return xt(i)}return r};$e({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,greediness:2},handler:function(e,t){var r,n=e.parser,i=e.funcName,a=t[0],s=t[1],o=null,l=null,h="auto";switch(i){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":r=!0;break;case"\\\\atopfrac":r=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":r=!1,o="(",l=")";break;case"\\\\bracefrac":r=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":r=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}switch(i){case"\\cfrac":case"\\dfrac":case"\\dbinom":h="display";break;case"\\tfrac":case"\\tbinom":h="text"}return{type:"genfrac",mode:n.mode,continued:"\\cfrac"===i,numer:a,denom:s,hasBarLine:r,leftDelim:o,rightDelim:l,size:h,barSize:null}},htmlBuilder:Mr,mathmlBuilder:Tr}),$e({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler:function(e){var t,r=e.parser,n=e.funcName,i=e.token;switch(n){case"\\over":t="\\frac";break;case"\\choose":t="\\binom";break;case"\\atop":t="\\\\atopfrac";break;case"\\brace":t="\\\\bracefrac";break;case"\\brack":t="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:r.mode,replaceWith:t,token:i}}});var Ar=["display","text","script","scriptscript"],Br=function(e){var t=null;return e.length>0&&(t="."===(t=e)?null:t),t};$e({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,greediness:6,argTypes:["math","math","size","text","math","math"]},handler:function(e,t){var r=e.parser,n=t[4],i=t[5],a=He(t[0],"atom");a&&(a=De(t[0],"open"));var s=a?Br(a.text):null,o=He(t[1],"atom");o&&(o=De(t[1],"close"));var l,h=o?Br(o.text):null,m=_e(t[2],"size"),c=null;l=!!m.isBlank||(c=m.value).number>0;var u="auto",d=He(t[3],"ordgroup");if(d){if(d.body.length>0){var p=_e(d.body[0],"textord");u=Ar[Number(p.text)]}}else d=_e(t[3],"textord"),u=Ar[Number(d.text)];return{type:"genfrac",mode:r.mode,numer:n,denom:i,continued:!1,hasBarLine:l,barSize:c,leftDelim:s,rightDelim:h,size:u}},htmlBuilder:Mr,mathmlBuilder:Tr}),$e({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler:function(e,t){var r=e.parser,n=(e.funcName,e.token);return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:_e(t[0],"size").value,token:n}}}),$e({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:function(e,t){var r=e.parser,n=(e.funcName,t[0]),i=function(e){if(!e)throw new Error("Expected non-null, but got "+String(e));return e}(_e(t[1],"infix").size),a=t[2],s=i.number>0;return{type:"genfrac",mode:r.mode,numer:n,denom:a,continued:!1,hasBarLine:s,barSize:i,leftDelim:null,rightDelim:null,size:"auto"}},htmlBuilder:Mr,mathmlBuilder:Tr});var Cr=function(e,t){var r,n,i=t.style,a=He(e,"supsub");a?(r=a.sup?ht(a.sup,t.havingStyle(i.sup()),t):ht(a.sub,t.havingStyle(i.sub()),t),n=_e(a.base,"horizBrace")):n=_e(e,"horizBrace");var s,o=ht(n.base,t.havingBaseStyle(k.DISPLAY)),l=Nt(n,t);if(n.isOver?(s=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:l}]},t)).children[0].children[0].children[1].classes.push("svg-align"):(s=Xe.makeVList({positionType:"bottom",positionData:o.depth+.1+l.height,children:[{type:"elem",elem:l},{type:"kern",size:.1},{type:"elem",elem:o}]},t)).children[0].children[0].children[0].classes.push("svg-align"),r){var h=Xe.makeSpan(["mord",n.isOver?"mover":"munder"],[s],t);s=n.isOver?Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:h},{type:"kern",size:.2},{type:"elem",elem:r}]},t):Xe.makeVList({positionType:"bottom",positionData:h.depth+.2+r.height+r.depth,children:[{type:"elem",elem:r},{type:"kern",size:.2},{type:"elem",elem:h}]},t)}return Xe.makeSpan(["mord",n.isOver?"mover":"munder"],[s],t)};$e({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler:function(e,t){var r=e.parser,n=e.funcName;return{type:"horizBrace",mode:r.mode,label:n,isOver:/^\\over/.test(n),base:t[0]}},htmlBuilder:Cr,mathmlBuilder:function(e,t){var r=Ct(e.label);return new ft.MathNode(e.isOver?"mover":"munder",[kt(e.base,t),r])}}),$e({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:function(e,t){var r=e.parser,n=t[1],i=_e(t[0],"url").url;return{type:"href",mode:r.mode,href:i,body:Je(n)}},htmlBuilder:function(e,t){var r=it(e.body,t,!1);return Xe.makeAnchor(e.href,[],r,t)},mathmlBuilder:function(e,t){var r=yt(e.body,t);return r instanceof dt||(r=new dt("mrow",[r])),r.setAttribute("href",e.href),r}}),$e({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:function(e,t){for(var r=e.parser,n=_e(t[0],"url").url,i=[],a=0;a<n.length;a++){var s=n[a];"~"===s&&(s="\\textasciitilde"),i.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:r.mode,font:"\\texttt",body:i};return{type:"href",mode:r.mode,href:n,body:Je(o)}}}),$e({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInText:!0},handler:function(e,t){return{type:"htmlmathml",mode:e.parser.mode,html:Je(t[0]),mathml:Je(t[1])}},htmlBuilder:function(e,t){var r=it(e.html,t,!1);return Xe.makeFragment(r)},mathmlBuilder:function(e,t){return yt(e.mathml,t)}}),$e({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],allowedInText:!0},handler:function(e,t){var r=e.parser,n=e.funcName,i=_e(t[0],"size");if(r.settings.strict){var a="m"===n[1],s="mu"===i.value.unit;a?(s||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, not "+i.value.unit+" units"),"math"!==r.mode&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):s&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:i.value}},htmlBuilder:function(e,t){return Xe.makeGlue(e.dimension,t)},mathmlBuilder:function(e,t){var r=Me(e.dimension,t);return new ft.SpaceNode(r)}}),$e({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0];return{type:"lap",mode:r.mode,alignment:n.slice(5),body:i}},htmlBuilder:function(e,t){var r;"clap"===e.alignment?(r=Xe.makeSpan([],[ht(e.body,t)]),r=Xe.makeSpan(["inner"],[r],t)):r=Xe.makeSpan(["inner"],[ht(e.body,t)]);var n=Xe.makeSpan(["fix"],[]),i=Xe.makeSpan([e.alignment],[r,n],t),a=Xe.makeSpan(["strut"]);return a.style.height=i.height+i.depth+"em",a.style.verticalAlign=-i.depth+"em",i.children.unshift(a),i=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:i}]},t),Xe.makeSpan(["mord"],[i],t)},mathmlBuilder:function(e,t){var r=new ft.MathNode("mpadded",[kt(e.body,t)]);if("rlap"!==e.alignment){var n="llap"===e.alignment?"-1":"-0.5";r.setAttribute("lspace",n+"width")}return r.setAttribute("width","0px"),r}}),$e({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1,consumeMode:"math"},handler:function(e,t){var r=e.funcName,n=e.parser,i=n.mode;n.switchMode("math");var a="\\("===r?"\\)":"$",s=n.parseExpression(!1,a);return n.expect(a,!1),n.switchMode(i),n.consume(),{type:"styling",mode:n.mode,style:"text",body:s}}}),$e({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler:function(e,t){throw new s("Mismatched "+e.funcName)}});var Nr=function(e,t){switch(t.style.size){case k.DISPLAY.size:return e.display;case k.TEXT.size:return e.text;case k.SCRIPT.size:return e.script;case k.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};$e({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4},handler:function(e,t){return{type:"mathchoice",mode:e.parser.mode,display:Je(t[0]),text:Je(t[1]),script:Je(t[2]),scriptscript:Je(t[3])}},htmlBuilder:function(e,t){var r=Nr(e,t),n=it(r,t,!1);return Xe.makeFragment(n)},mathmlBuilder:function(e,t){var r=Nr(e,t);return yt(r,t)}});var qr=function(e,t){var r,n,i,a=!1,s=He(e,"supsub");s?(r=s.sup,n=s.sub,i=_e(s.base,"op"),a=!0):i=_e(e,"op");var o,l=t.style,h=!1;if(l.size===k.DISPLAY.size&&i.symbol&&!c.contains(["\\smallint"],i.name)&&(h=!0),i.symbol){var m=h?"Size2-Regular":"Size1-Regular",u="";if("\\oiint"!==i.name&&"\\oiiint"!==i.name||(u=i.name.substr(1),i.name="oiint"===u?"\\iint":"\\iiint"),o=Xe.makeSymbol(i.name,m,"math",t,["mop","op-symbol",h?"large-op":"small-op"]),u.length>0){var d=o.italic,p=Xe.staticSvg(u+"Size"+(h?"2":"1"),t);o=Xe.makeVList({positionType:"individualShift",children:[{type:"elem",elem:o,shift:0},{type:"elem",elem:p,shift:h?.08:0}]},t),i.name="\\"+u,o.classes.unshift("mop"),o.italic=d}}else if(i.body){var f=it(i.body,t,!0);1===f.length&&f[0]instanceof E?(o=f[0]).classes[0]="mop":o=Xe.makeSpan(["mop"],Xe.tryCombineChars(f),t)}else{for(var g=[],x=1;x<i.name.length;x++)g.push(Xe.mathsym(i.name[x],i.mode));o=Xe.makeSpan(["mop"],g,t)}var v=0,z=0;if((o instanceof E||"\\oiint"===i.name||"\\oiiint"===i.name)&&!i.suppressBaseShift&&(v=(o.height-o.depth)/2-t.fontMetrics().axisHeight,z=o.italic),a){var y,b,w;if(o=Xe.makeSpan([],[o]),r){var S=ht(r,t.havingStyle(l.sup()),t);b={elem:S,kern:Math.max(t.fontMetrics().bigOpSpacing1,t.fontMetrics().bigOpSpacing3-S.depth)}}if(n){var M=ht(n,t.havingStyle(l.sub()),t);y={elem:M,kern:Math.max(t.fontMetrics().bigOpSpacing2,t.fontMetrics().bigOpSpacing4-M.height)}}if(b&&y){var T=t.fontMetrics().bigOpSpacing5+y.elem.height+y.elem.depth+y.kern+o.depth+v;w=Xe.makeVList({positionType:"bottom",positionData:T,children:[{type:"kern",size:t.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:-z+"em"},{type:"kern",size:y.kern},{type:"elem",elem:o},{type:"kern",size:b.kern},{type:"elem",elem:b.elem,marginLeft:z+"em"},{type:"kern",size:t.fontMetrics().bigOpSpacing5}]},t)}else if(y){var A=o.height-v;w=Xe.makeVList({positionType:"top",positionData:A,children:[{type:"kern",size:t.fontMetrics().bigOpSpacing5},{type:"elem",elem:y.elem,marginLeft:-z+"em"},{type:"kern",size:y.kern},{type:"elem",elem:o}]},t)}else{if(!b)return o;var B=o.depth+v;w=Xe.makeVList({positionType:"bottom",positionData:B,children:[{type:"elem",elem:o},{type:"kern",size:b.kern},{type:"elem",elem:b.elem,marginLeft:z+"em"},{type:"kern",size:t.fontMetrics().bigOpSpacing5}]},t)}return Xe.makeSpan(["mop","op-limits"],[w],t)}return v&&(o.style.position="relative",o.style.top=v+"em"),o},Rr=function(e,t){var r;if(e.symbol)r=new dt("mo",[gt(e.name,e.mode)]);else{if(!e.body)return ut([r=new dt("mi",[new pt(e.name.slice(1))]),new dt("mo",[gt("⁡","text")])]);r=new dt("mo",zt(e.body,t))}return r},Ir={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};$e({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:function(e,t){var r=e.parser,n=e.funcName;return 1===n.length&&(n=Ir[n]),{type:"op",mode:r.mode,limits:!0,symbol:!0,name:n}},htmlBuilder:qr,mathmlBuilder:Rr}),$e({type:"op",names:["\\mathop"],props:{numArgs:1},handler:function(e,t){var r=e.parser,n=t[0];return{type:"op",mode:r.mode,limits:!1,symbol:!1,body:Je(n)}},htmlBuilder:qr,mathmlBuilder:Rr});var Er={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};function Or(e,t,r){for(var n=it(e,t,!1),i=t.sizeMultiplier/r.sizeMultiplier,a=0;a<n.length;a++){var s=n[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(n[a].classes,t.sizingClasses(r)):n[a].classes[s+1]==="reset-size"+t.size&&(n[a].classes[s+1]="reset-size"+r.size),n[a].height*=i,n[a].depth*=i}return Xe.makeFragment(n)}$e({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler:function(e){var t=e.parser,r=e.funcName;return{type:"op",mode:t.mode,limits:!1,symbol:!1,name:r}},htmlBuilder:qr,mathmlBuilder:Rr}),$e({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler:function(e){var t=e.parser,r=e.funcName;return{type:"op",mode:t.mode,limits:!0,symbol:!1,name:r}},htmlBuilder:qr,mathmlBuilder:Rr}),$e({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0},handler:function(e){var t=e.parser,r=e.funcName;return 1===r.length&&(r=Er[r]),{type:"op",mode:t.mode,limits:!1,symbol:!0,name:r}},htmlBuilder:qr,mathmlBuilder:Rr}),$e({type:"operatorname",names:["\\operatorname"],props:{numArgs:1},handler:function(e,t){var r=e.parser,n=t[0];return{type:"operatorname",mode:r.mode,body:Je(n)}},htmlBuilder:function(e,t){if(e.body.length>0){for(var r=e.body.map(function(e){var t=e.text;return"string"==typeof t?{type:"textord",mode:e.mode,text:t}:e}),n=it(r,t.withFont("mathrm"),!0),i=0;i<n.length;i++){var a=n[i];a instanceof E&&(a.text=a.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}return Xe.makeSpan(["mop"],n,t)}return Xe.makeSpan(["mop"],[],t)},mathmlBuilder:function(e,t){for(var r=zt(e.body,t.withFont("mathrm")),n=!0,i=0;i<r.length;i++){var a=r[i];if(a instanceof ft.SpaceNode);else if(a instanceof ft.MathNode)switch(a.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":var s=a.children[0];1===a.children.length&&s instanceof ft.TextNode?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break;default:n=!1}else n=!1}if(n){var o=r.map(function(e){return e.toText()}).join("");r=[new ft.TextNode(o)]}var l=new ft.MathNode("mi",r);l.setAttribute("mathvariant","normal");var h=new ft.MathNode("mo",[gt("⁡","text")]);return ft.newDocumentFragment([l,h])}}),Ze({type:"ordgroup",htmlBuilder:function(e,t){return e.semisimple?Xe.makeFragment(it(e.body,t,!1)):Xe.makeSpan(["mord"],it(e.body,t,!0),t)},mathmlBuilder:function(e,t){return yt(e.body,t)}}),$e({type:"overline",names:["\\overline"],props:{numArgs:1},handler:function(e,t){var r=e.parser,n=t[0];return{type:"overline",mode:r.mode,body:n}},htmlBuilder:function(e,t){var r=ht(e.body,t.havingCrampedStyle()),n=Xe.makeLineSpan("overline-line",t),i=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*n.height},{type:"elem",elem:n},{type:"kern",size:n.height}]},t);return Xe.makeSpan(["mord","overline"],[i],t)},mathmlBuilder:function(e,t){var r=new ft.MathNode("mo",[new ft.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new ft.MathNode("mover",[kt(e.body,t),r]);return n.setAttribute("accent","true"),n}}),$e({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:function(e,t){var r=e.parser,n=t[0];return{type:"phantom",mode:r.mode,body:Je(n)}},htmlBuilder:function(e,t){var r=it(e.body,t.withPhantom(),!1);return Xe.makeFragment(r)},mathmlBuilder:function(e,t){var r=zt(e.body,t);return new ft.MathNode("mphantom",r)}}),$e({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:function(e,t){var r=e.parser,n=t[0];return{type:"hphantom",mode:r.mode,body:n}},htmlBuilder:function(e,t){var r=Xe.makeSpan([],[ht(e.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var n=0;n<r.children.length;n++)r.children[n].height=0,r.children[n].depth=0;return r=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t),Xe.makeSpan(["mord"],[r],t)},mathmlBuilder:function(e,t){var r=zt(Je(e.body),t),n=new ft.MathNode("mphantom",r);return n.setAttribute("height","0px"),n}}),$e({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:function(e,t){var r=e.parser,n=t[0];return{type:"vphantom",mode:r.mode,body:n}},htmlBuilder:function(e,t){var r=Xe.makeSpan(["inner"],[ht(e.body,t.withPhantom())]),n=Xe.makeSpan(["fix"],[]);return Xe.makeSpan(["mord","rlap"],[r,n],t)},mathmlBuilder:function(e,t){var r=zt(Je(e.body),t),n=new ft.MathNode("mphantom",r);return n.setAttribute("width","0px"),n}});var Lr=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],Xr=function(e,t){var r=t.havingSize(e.size);return Or(e.body,r,t)};$e({type:"sizing",names:Lr,props:{numArgs:0,allowedInText:!0},handler:function(e,t){var r=e.breakOnTokenText,n=e.funcName,i=e.parser,a=i.parseExpression(!1,r);return{type:"sizing",mode:i.mode,size:Lr.indexOf(n)+1,body:a}},htmlBuilder:Xr,mathmlBuilder:function(e,t){var r=t.havingSize(e.size),n=zt(e.body,r),i=new ft.MathNode("mstyle",n);return i.setAttribute("mathsize",r.sizeMultiplier+"em"),i}}),$e({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","text"],allowedInText:!0},handler:function(e,t){var r=e.parser,n=_e(t[0],"size").value,i=t[1];return{type:"raisebox",mode:r.mode,dy:n,body:i}},htmlBuilder:function(e,t){var r={type:"text",mode:e.mode,body:Je(e.body),font:"mathrm"},n={type:"sizing",mode:e.mode,body:[r],size:6},i=Xr(n,t),a=Me(e.dy,t);return Xe.makeVList({positionType:"shift",positionData:-a,children:[{type:"elem",elem:i}]},t)},mathmlBuilder:function(e,t){var r=new ft.MathNode("mpadded",[kt(e.body,t)]),n=e.dy.number+e.dy.unit;return r.setAttribute("voffset",n),r}}),$e({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,argTypes:["size","size","size"]},handler:function(e,t,r){var n=e.parser,i=r[0],a=_e(t[0],"size"),s=_e(t[1],"size");return{type:"rule",mode:n.mode,shift:i&&_e(i,"size").value,width:a.value,height:s.value}},htmlBuilder:function(e,t){var r=Xe.makeSpan(["mord","rule"],[],t),n=0;e.shift&&(n=Me(e.shift,t));var i=Me(e.width,t),a=Me(e.height,t);return r.style.borderRightWidth=i+"em",r.style.borderTopWidth=a+"em",r.style.bottom=n+"em",r.width=i,r.height=a+n,r.depth=-n,r.maxFontSize=1.125*a*t.sizeMultiplier,r},mathmlBuilder:function(e,t){return new ft.MathNode("mrow")}}),$e({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:function(e,t,r){var n=e.parser,i=!1,a=!1,s=r[0]&&_e(r[0],"ordgroup");if(s)for(var o="",l=0;l<s.body.length;++l){if("t"===(o=s.body[l].text))i=!0;else{if("b"!==o){i=!1,a=!1;break}a=!0}}else i=!0,a=!0;var h=t[0];return{type:"smash",mode:n.mode,body:h,smashHeight:i,smashDepth:a}},htmlBuilder:function(e,t){var r=Xe.makeSpan([],[ht(e.body,t)]);if(!e.smashHeight&&!e.smashDepth)return r;if(e.smashHeight&&(r.height=0,r.children))for(var n=0;n<r.children.length;n++)r.children[n].height=0;if(e.smashDepth&&(r.depth=0,r.children))for(var i=0;i<r.children.length;i++)r.children[i].depth=0;var a=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r}]},t);return Xe.makeSpan(["mord"],[a],t)},mathmlBuilder:function(e,t){var r=new ft.MathNode("mpadded",[kt(e.body,t)]);return e.smashHeight&&r.setAttribute("height","0px"),e.smashDepth&&r.setAttribute("depth","0px"),r}}),$e({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler:function(e,t,r){var n=e.parser,i=r[0],a=t[0];return{type:"sqrt",mode:n.mode,body:a,index:i}},htmlBuilder:function(e,t){var r=ht(e.body,t.havingCrampedStyle());0===r.height&&(r.height=t.fontMetrics().xHeight),r=Xe.wrapFragment(r,t);var n=t.fontMetrics().defaultRuleThickness,i=n;t.style.id<k.TEXT.id&&(i=t.fontMetrics().xHeight);var a=n+i/4,s=r.height+r.depth+a+n,o=Qt(s,t),l=o.span,h=o.ruleWidth,m=o.advanceWidth,c=l.height-h;c>r.height+r.depth+a&&(a=(a+c-r.height-r.depth)/2);var u=l.height-r.height-a-h;r.style.paddingLeft=m+"em";var d=Xe.makeVList({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+u)},{type:"elem",elem:l},{type:"kern",size:h}]},t);if(e.index){var p=t.havingStyle(k.SCRIPTSCRIPT),f=ht(e.index,p,t),g=.6*(d.height-d.depth),x=Xe.makeVList({positionType:"shift",positionData:-g,children:[{type:"elem",elem:f}]},t),v=Xe.makeSpan(["root"],[x]);return Xe.makeSpan(["mord","sqrt"],[v,d],t)}return Xe.makeSpan(["mord","sqrt"],[d],t)},mathmlBuilder:function(e,t){var r=e.body,n=e.index;return n?new ft.MathNode("mroot",[kt(r,t),kt(n,t)]):new ft.MathNode("msqrt",[kt(r,t)])}});var _r={display:k.DISPLAY,text:k.TEXT,script:k.SCRIPT,scriptscript:k.SCRIPTSCRIPT};$e({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0},handler:function(e,t){var r=e.breakOnTokenText,n=e.funcName,i=e.parser,a=i.parseExpression(!0,r),s=n.slice(1,n.length-5);return{type:"styling",mode:i.mode,style:s,body:a}},htmlBuilder:function(e,t){var r=_r[e.style],n=t.havingStyle(r).withFont("");return Or(e.body,n,t)},mathmlBuilder:function(e,t){var r={display:k.DISPLAY,text:k.TEXT,script:k.SCRIPT,scriptscript:k.SCRIPTSCRIPT}[e.style],n=t.havingStyle(r),i=zt(e.body,n),a=new ft.MathNode("mstyle",i),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]}[e.style];return a.setAttribute("scriptlevel",s[0]),a.setAttribute("displaystyle",s[1]),a}});Ze({type:"supsub",htmlBuilder:function(e,t){var r=function(e,t){var r=e.base;return r?"op"===r.type?r.limits&&(t.style.size===k.DISPLAY.size||r.alwaysHandleSupSub)?qr:null:"accent"===r.type?c.isCharacterBox(r.base)?qt:null:"horizBrace"===r.type&&!e.sub===r.isOver?Cr:null:null}(e,t);if(r)return r(e,t);var n,i,a,s=e.base,o=e.sup,l=e.sub,h=ht(s,t),m=t.fontMetrics(),u=0,d=0,p=s&&c.isCharacterBox(s);if(o){var f=t.havingStyle(t.style.sup());n=ht(o,f,t),p||(u=h.height-f.fontMetrics().supDrop*f.sizeMultiplier/t.sizeMultiplier)}if(l){var g=t.havingStyle(t.style.sub());i=ht(l,g,t),p||(d=h.depth+g.fontMetrics().subDrop*g.sizeMultiplier/t.sizeMultiplier)}a=t.style===k.DISPLAY?m.sup1:t.style.cramped?m.sup3:m.sup2;var x,v=t.sizeMultiplier,z=.5/m.ptPerEm/v+"em",y=null;if(i){var b=e.base&&"op"===e.base.type&&e.base.name&&("\\oiint"===e.base.name||"\\oiiint"===e.base.name);(h instanceof E||b)&&(y=-h.italic+"em")}if(n&&i){u=Math.max(u,a,n.depth+.25*m.xHeight),d=Math.max(d,m.sub2);var w=4*m.defaultRuleThickness;if(u-n.depth-(i.height-d)<w){d=w-(u-n.depth)+i.height;var S=.8*m.xHeight-(u-n.depth);S>0&&(u+=S,d-=S)}var M=[{type:"elem",elem:i,shift:d,marginRight:z,marginLeft:y},{type:"elem",elem:n,shift:-u,marginRight:z}];x=Xe.makeVList({positionType:"individualShift",children:M},t)}else if(i){d=Math.max(d,m.sub1,i.height-.8*m.xHeight);var T=[{type:"elem",elem:i,marginLeft:y,marginRight:z}];x=Xe.makeVList({positionType:"shift",positionData:d,children:T},t)}else{if(!n)throw new Error("supsub must have either sup or sub.");u=Math.max(u,a,n.depth+.25*m.xHeight),x=Xe.makeVList({positionType:"shift",positionData:-u,children:[{type:"elem",elem:n,marginRight:z}]},t)}var A=ot(h,"right")||"mord";return Xe.makeSpan([A],[h,Xe.makeSpan(["msupsub"],[x])],t)},mathmlBuilder:function(e,t){var r,n=!1,i=He(e.base,"horizBrace");i&&!!e.sup===i.isOver&&(n=!0,r=i.isOver);var a,s=[kt(e.base,t)];if(e.sub&&s.push(kt(e.sub,t)),e.sup&&s.push(kt(e.sup,t)),n)a=r?"mover":"munder";else if(e.sub)if(e.sup){var o=e.base;a=o&&"op"===o.type&&o.limits&&t.style===k.DISPLAY?"munderover":"msubsup"}else{var l=e.base;a=l&&"op"===l.type&&l.limits&&t.style===k.DISPLAY?"munder":"msub"}else{var h=e.base;a=h&&"op"===h.type&&h.limits&&t.style===k.DISPLAY?"mover":"msup"}return new ft.MathNode(a,s)}}),Ze({type:"atom",htmlBuilder:function(e,t){return Xe.mathsym(e.text,e.mode,t,["m"+e.family])},mathmlBuilder:function(e,t){var r=new ft.MathNode("mo",[gt(e.text,e.mode)]);if("bin"===e.family){var n=vt(e,t);"bold-italic"===n&&r.setAttribute("mathvariant",n)}else"punct"===e.family&&r.setAttribute("separator","true");return r}});var Hr={mi:"italic",mn:"normal",mtext:"normal"};Ze({type:"mathord",htmlBuilder:function(e,t){return Xe.makeOrd(e,t,"mathord")},mathmlBuilder:function(e,t){var r=new ft.MathNode("mi",[gt(e.text,e.mode,t)]),n=vt(e,t)||"italic";return n!==Hr[r.type]&&r.setAttribute("mathvariant",n),r}}),Ze({type:"textord",htmlBuilder:function(e,t){return Xe.makeOrd(e,t,"textord")},mathmlBuilder:function(e,t){var r,n=gt(e.text,e.mode,t),i=vt(e,t)||"normal";return r="text"===e.mode?new ft.MathNode("mtext",[n]):/[0-9]/.test(e.text)?new ft.MathNode("mn",[n]):"\\prime"===e.text?new ft.MathNode("mo",[n]):new ft.MathNode("mi",[n]),i!==Hr[r.type]&&r.setAttribute("mathvariant",i),r}});var Dr={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Pr={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};Ze({type:"spacing",htmlBuilder:function(e,t){if(Pr.hasOwnProperty(e.text)){var r=Pr[e.text].className||"";if("text"===e.mode){var n=Xe.makeOrd(e,t,"textord");return n.classes.push(r),n}return Xe.makeSpan(["mspace",r],[Xe.mathsym(e.text,e.mode,t)],t)}if(Dr.hasOwnProperty(e.text))return Xe.makeSpan(["mspace",Dr[e.text]],[],t);throw new s('Unknown type of space "'+e.text+'"')},mathmlBuilder:function(e,t){if(!Pr.hasOwnProperty(e.text)){if(Dr.hasOwnProperty(e.text))return new ft.MathNode("mspace");throw new s('Unknown type of space "'+e.text+'"')}return new ft.MathNode("mtext",[new ft.TextNode(" ")])}}),Ze({type:"tag",mathmlBuilder:function(e,t){var r=new ft.MathNode("mtable",[new ft.MathNode("mlabeledtr",[new ft.MathNode("mtd",[yt(e.tag,t)]),new ft.MathNode("mtd",[yt(e.body,t)])])]);return r.setAttribute("side","right"),r}});var Kr={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Fr={"\\textbf":"textbf"},jr={"\\textit":"textit"},Vr=function(e,t){var r=e.font;return r?Kr[r]?t.withTextFontFamily(Kr[r]):Fr[r]?t.withTextFontWeight(Fr[r]):t.withTextFontShape(jr[r]):t};$e({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textit"],props:{numArgs:1,argTypes:["text"],greediness:2,allowedInText:!0,consumeMode:"text"},handler:function(e,t){var r=e.parser,n=e.funcName,i=t[0];return{type:"text",mode:r.mode,body:Je(i),font:n}},htmlBuilder:function(e,t){var r=Vr(e,t),n=it(e.body,r,!0);return Xe.makeSpan(["mord","text"],Xe.tryCombineChars(n),r)},mathmlBuilder:function(e,t){var r=Vr(e,t);return yt(e.body,r)}}),$e({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler:function(e,t){return{type:"underline",mode:e.parser.mode,body:t[0]}},htmlBuilder:function(e,t){var r=ht(e.body,t),n=Xe.makeLineSpan("underline-line",t),i=Xe.makeVList({positionType:"top",positionData:r.height,children:[{type:"kern",size:n.height},{type:"elem",elem:n},{type:"kern",size:3*n.height},{type:"elem",elem:r}]},t);return Xe.makeSpan(["mord","underline"],[i],t)},mathmlBuilder:function(e,t){var r=new ft.MathNode("mo",[new ft.TextNode("‾")]);r.setAttribute("stretchy","true");var n=new ft.MathNode("munder",[kt(e.body,t),r]);return n.setAttribute("accentunder","true"),n}}),$e({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler:function(e,t,r){throw new s("\\verb ended by end of line instead of matching delimiter")},htmlBuilder:function(e,t){for(var r=Ur(e),n=[],i=t.havingStyle(t.style.text()),a=0;a<r.length;a++){var s=r[a];"~"===s&&(s="\\textasciitilde"),n.push(Xe.makeSymbol(s,"Typewriter-Regular",e.mode,i,["mord","texttt"]))}return Xe.makeSpan(["mord","text"].concat(i.sizingClasses(t)),Xe.tryCombineChars(n),i)},mathmlBuilder:function(e,t){var r=new ft.TextNode(Ur(e)),n=new ft.MathNode("mtext",[r]);return n.setAttribute("mathvariant","monospace"),n}});var Ur=function(e){return e.body.replace(/ /g,e.star?"␣":" ")},Gr=Ge,Yr=new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$"),Wr=new RegExp("[̀-ͯ]+$"),$r="([ \r\n\t]+)|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])",Zr=function(){function e(e,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=e,this.settings=t,this.tokenRegex=new RegExp($r,"g"),this.catcodes={"%":14}}var t=e.prototype;return t.setCatcode=function(e,t){this.catcodes[e]=t},t.lex=function(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new i("EOF",new n(this,t,t));var r=this.tokenRegex.exec(e);if(null===r||r.index!==t)throw new s("Unexpected character: '"+e[t]+"'",new i(e[t],new n(this,t,t+1)));var a=r[2]||" ";if(14===this.catcodes[a]){var o=e.indexOf("\n",this.tokenRegex.lastIndex);return-1===o?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=o+1,this.lex()}var l=a.match(Yr);return l&&(a=l[1]),new i(a,new n(this,t,this.tokenRegex.lastIndex))},e}(),Jr=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=e,this.undefStack=[]}var t=e.prototype;return t.beginGroup=function(){this.undefStack.push({})},t.endGroup=function(){if(0===this.undefStack.length)throw new s("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(void 0===e[t]?delete this.current[t]:this.current[t]=e[t])},t.has=function(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)},t.get=function(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]},t.set=function(e,t,r){if(void 0===r&&(r=!1),r){for(var n=0;n<this.undefStack.length;n++)delete this.undefStack[n][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var i=this.undefStack[this.undefStack.length-1];i&&!i.hasOwnProperty(e)&&(i[e]=this.current[e])}this.current[e]=t},e}(),Qr={},en=Qr;function tn(e,t){Qr[e]=t}tn("\\@firstoftwo",function(e){return{tokens:e.consumeArgs(2)[0],numArgs:0}}),tn("\\@secondoftwo",function(e){return{tokens:e.consumeArgs(2)[1],numArgs:0}}),tn("\\@ifnextchar",function(e){var t=e.consumeArgs(3),r=e.future();return 1===t[0].length&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}}),tn("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}"),tn("\\TextOrMath",function(e){var t=e.consumeArgs(2);return"text"===e.mode?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var rn={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};tn("\\char",function(e){var t,r=e.popToken(),n="";if("'"===r.text)t=8,r=e.popToken();else if('"'===r.text)t=16,r=e.popToken();else if("`"===r.text)if("\\"===(r=e.popToken()).text[0])n=r.text.charCodeAt(1);else{if("EOF"===r.text)throw new s("\\char` missing argument");n=r.text.charCodeAt(0)}else t=10;if(t){if(null==(n=rn[r.text])||n>=t)throw new s("Invalid base-"+t+" digit "+r.text);for(var i;null!=(i=rn[e.future().text])&&i<t;)n*=t,n+=i,e.popToken()}return"\\@char{"+n+"}"});var nn=function(e,t){var r=e.consumeArgs(1)[0];if(1!==r.length)throw new s("\\gdef's first argument must be a macro name");var n=r[0].text,i=0;for(r=e.consumeArgs(1)[0];1===r.length&&"#"===r[0].text;){if(1!==(r=e.consumeArgs(1)[0]).length)throw new s('Invalid argument number length "'+r.length+'"');if(!/^[1-9]$/.test(r[0].text))throw new s('Invalid argument number "'+r[0].text+'"');if(i++,parseInt(r[0].text)!==i)throw new s('Argument number "'+r[0].text+'" out of order');r=e.consumeArgs(1)[0]}return e.macros.set(n,{tokens:r,numArgs:i},t),""};tn("\\gdef",function(e){return nn(e,!0)}),tn("\\def",function(e){return nn(e,!1)}),tn("\\global",function(e){var t=e.consumeArgs(1)[0];if(1!==t.length)throw new s("Invalid command after \\global");var r=t[0].text;if("\\def"===r)return nn(e,!0);throw new s("Invalid command '"+r+"' after \\global")});var an=function(e,t,r){var n=e.consumeArgs(1)[0];if(1!==n.length)throw new s("\\newcommand's first argument must be a macro name");var i=n[0].text,a=e.isDefined(i);if(a&&!t)throw new s("\\newcommand{"+i+"} attempting to redefine "+i+"; use \\renewcommand");if(!a&&!r)throw new s("\\renewcommand{"+i+"} when command "+i+" does not yet exist; use \\newcommand");var o=0;if(1===(n=e.consumeArgs(1)[0]).length&&"["===n[0].text){for(var l="",h=e.expandNextToken();"]"!==h.text&&"EOF"!==h.text;)l+=h.text,h=e.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new s("Invalid number of arguments: "+l);o=parseInt(l),n=e.consumeArgs(1)[0]}return e.macros.set(i,{tokens:n,numArgs:o}),""};tn("\\newcommand",function(e){return an(e,!1,!0)}),tn("\\renewcommand",function(e){return an(e,!0,!1)}),tn("\\providecommand",function(e){return an(e,!0,!0)}),tn("\\bgroup","{"),tn("\\egroup","}"),tn("\\lq","`"),tn("\\rq","'"),tn("\\aa","\\r a"),tn("\\AA","\\r A"),tn("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}"),tn("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"),tn("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"),tn("ℬ","\\mathscr{B}"),tn("ℰ","\\mathscr{E}"),tn("ℱ","\\mathscr{F}"),tn("ℋ","\\mathscr{H}"),tn("ℐ","\\mathscr{I}"),tn("ℒ","\\mathscr{L}"),tn("ℳ","\\mathscr{M}"),tn("ℛ","\\mathscr{R}"),tn("ℭ","\\mathfrak{C}"),tn("ℌ","\\mathfrak{H}"),tn("ℨ","\\mathfrak{Z}"),tn("·","\\cdotp"),tn("\\llap","\\mathllap{\\textrm{#1}}"),tn("\\rlap","\\mathrlap{\\textrm{#1}}"),tn("\\clap","\\mathclap{\\textrm{#1}}"),tn("\\not","\\mathrel{\\mathrlap\\@not}"),tn("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"),tn("\\ne","\\neq"),tn("≠","\\neq"),tn("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"),tn("∉","\\notin"),tn("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"),tn("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"),tn("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"),tn("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"),tn("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"),tn("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"),tn("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"),tn("⟂","\\perp"),tn("‼","\\mathclose{!\\mkern-0.8mu!}"),tn("∌","\\notni"),tn("⌜","\\ulcorner"),tn("⌝","\\urcorner"),tn("⌞","\\llcorner"),tn("⌟","\\lrcorner"),tn("©","\\copyright"),tn("®","\\textregistered"),tn("️","\\textregistered"),tn("\\vdots","\\mathord{\\varvdots\\rule{0pt}{15pt}}"),tn("⋮","\\vdots"),tn("\\varGamma","\\mathit{\\Gamma}"),tn("\\varDelta","\\mathit{\\Delta}"),tn("\\varTheta","\\mathit{\\Theta}"),tn("\\varLambda","\\mathit{\\Lambda}"),tn("\\varXi","\\mathit{\\Xi}"),tn("\\varPi","\\mathit{\\Pi}"),tn("\\varSigma","\\mathit{\\Sigma}"),tn("\\varUpsilon","\\mathit{\\Upsilon}"),tn("\\varPhi","\\mathit{\\Phi}"),tn("\\varPsi","\\mathit{\\Psi}"),tn("\\varOmega","\\mathit{\\Omega}"),tn("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"),tn("\\boxed","\\fbox{$\\displaystyle{#1}$}"),tn("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;"),tn("\\implies","\\DOTSB\\;\\Longrightarrow\\;"),tn("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");var sn={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"};tn("\\dots",function(e){var t="\\dotso",r=e.expandAfterFuture().text;return r in sn?t=sn[r]:"\\not"===r.substr(0,4)?t="\\dotsb":r in U.math&&c.contains(["bin","rel"],U.math[r].group)&&(t="\\dotsb"),t});var on={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};tn("\\dotso",function(e){return e.future().text in on?"\\ldots\\,":"\\ldots"}),tn("\\dotsc",function(e){var t=e.future().text;return t in on&&","!==t?"\\ldots\\,":"\\ldots"}),tn("\\cdots",function(e){return e.future().text in on?"\\@cdots\\,":"\\@cdots"}),tn("\\dotsb","\\cdots"),tn("\\dotsm","\\cdots"),tn("\\dotsi","\\!\\cdots"),tn("\\dotsx","\\ldots\\,"),tn("\\DOTSI","\\relax"),tn("\\DOTSB","\\relax"),tn("\\DOTSX","\\relax"),tn("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),tn("\\,","\\tmspace+{3mu}{.1667em}"),tn("\\thinspace","\\,"),tn("\\>","\\mskip{4mu}"),tn("\\:","\\tmspace+{4mu}{.2222em}"),tn("\\medspace","\\:"),tn("\\;","\\tmspace+{5mu}{.2777em}"),tn("\\thickspace","\\;"),tn("\\!","\\tmspace-{3mu}{.1667em}"),tn("\\negthinspace","\\!"),tn("\\negmedspace","\\tmspace-{4mu}{.2222em}"),tn("\\negthickspace","\\tmspace-{5mu}{.277em}"),tn("\\enspace","\\kern.5em "),tn("\\enskip","\\hskip.5em\\relax"),tn("\\quad","\\hskip1em\\relax"),tn("\\qquad","\\hskip2em\\relax"),tn("\\tag","\\@ifstar\\tag@literal\\tag@paren"),tn("\\tag@paren","\\tag@literal{({#1})}"),tn("\\tag@literal",function(e){if(e.macros.get("\\df@tag"))throw new s("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"}),tn("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"),tn("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"),tn("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}"),tn("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"),tn("\\pmb","\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\mathrlap{\\mkern0.4mu\\raisebox{0.4mu}{$#1$}}{\\mkern0.8mu#1}}}{\\mathbf{#1}}"),tn("\\\\","\\newline"),tn("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var ln=_["Main-Regular"]["T".charCodeAt(0)][1]-.7*_["Main-Regular"]["A".charCodeAt(0)][1]+"em";tn("\\LaTeX","\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{"+ln+"}{\\scriptsize A}\\kern-.15em\\TeX}{LaTeX}}"),tn("\\KaTeX","\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{"+ln+"}{\\scriptsize A}\\kern-.15em\\TeX}{KaTeX}}"),tn("\\hspace","\\@ifstar\\@hspacer\\@hspace"),tn("\\@hspace","\\hskip #1\\relax"),tn("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax"),tn("\\ordinarycolon",":"),tn("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}"),tn("\\dblcolon","\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}"),tn("\\coloneqq","\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}"),tn("\\Coloneqq","\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}"),tn("\\coloneq","\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"),tn("\\Coloneq","\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"),tn("\\eqqcolon","\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),tn("\\Eqqcolon","\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}"),tn("\\eqcolon","\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),tn("\\Eqcolon","\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}"),tn("\\colonapprox","\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}"),tn("\\Colonapprox","\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}"),tn("\\colonsim","\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}"),tn("\\Colonsim","\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}"),tn("≔","\\coloneqq"),tn("≕","\\eqqcolon"),tn("⩴","\\Coloneqq"),tn("\\ratio","\\vcentcolon"),tn("\\coloncolon","\\dblcolon"),tn("\\colonequals","\\coloneqq"),tn("\\coloncolonequals","\\Coloneqq"),tn("\\equalscolon","\\eqqcolon"),tn("\\equalscoloncolon","\\Eqqcolon"),tn("\\colonminus","\\coloneq"),tn("\\coloncolonminus","\\Coloneq"),tn("\\minuscolon","\\eqcolon"),tn("\\minuscoloncolon","\\Eqcolon"),tn("\\coloncolonapprox","\\Colonapprox"),tn("\\coloncolonsim","\\Colonsim"),tn("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),tn("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"),tn("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"),tn("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"),tn("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"),tn("\\limsup","\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"),tn("\\liminf","\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits"),tn("⟦","\\mathopen{[\\mkern-3.2mu[}"),tn("⟧","\\mathclose{]\\mkern-3.2mu]}"),tn("\\darr","\\downarrow"),tn("\\dArr","\\Downarrow"),tn("\\Darr","\\Downarrow"),tn("\\lang","\\langle"),tn("\\rang","\\rangle"),tn("\\uarr","\\uparrow"),tn("\\uArr","\\Uparrow"),tn("\\Uarr","\\Uparrow"),tn("\\N","\\mathbb{N}"),tn("\\R","\\mathbb{R}"),tn("\\Z","\\mathbb{Z}"),tn("\\alef","\\aleph"),tn("\\alefsym","\\aleph"),tn("\\Alpha","\\mathrm{A}"),tn("\\Beta","\\mathrm{B}"),tn("\\bull","\\bullet"),tn("\\Chi","\\mathrm{X}"),tn("\\clubs","\\clubsuit"),tn("\\cnums","\\mathbb{C}"),tn("\\Complex","\\mathbb{C}"),tn("\\Dagger","\\ddagger"),tn("\\diamonds","\\diamondsuit"),tn("\\empty","\\emptyset"),tn("\\Epsilon","\\mathrm{E}"),tn("\\Eta","\\mathrm{H}"),tn("\\exist","\\exists"),tn("\\harr","\\leftrightarrow"),tn("\\hArr","\\Leftrightarrow"),tn("\\Harr","\\Leftrightarrow"),tn("\\hearts","\\heartsuit"),tn("\\image","\\Im"),tn("\\infin","\\infty"),tn("\\Iota","\\mathrm{I}"),tn("\\isin","\\in"),tn("\\Kappa","\\mathrm{K}"),tn("\\larr","\\leftarrow"),tn("\\lArr","\\Leftarrow"),tn("\\Larr","\\Leftarrow"),tn("\\lrarr","\\leftrightarrow"),tn("\\lrArr","\\Leftrightarrow"),tn("\\Lrarr","\\Leftrightarrow"),tn("\\Mu","\\mathrm{M}"),tn("\\natnums","\\mathbb{N}"),tn("\\Nu","\\mathrm{N}"),tn("\\Omicron","\\mathrm{O}"),tn("\\plusmn","\\pm"),tn("\\rarr","\\rightarrow"),tn("\\rArr","\\Rightarrow"),tn("\\Rarr","\\Rightarrow"),tn("\\real","\\Re"),tn("\\reals","\\mathbb{R}"),tn("\\Reals","\\mathbb{R}"),tn("\\Rho","\\mathrm{R}"),tn("\\sdot","\\cdot"),tn("\\sect","\\S"),tn("\\spades","\\spadesuit"),tn("\\sub","\\subset"),tn("\\sube","\\subseteq"),tn("\\supe","\\supseteq"),tn("\\Tau","\\mathrm{T}"),tn("\\thetasym","\\vartheta"),tn("\\weierp","\\wp"),tn("\\Zeta","\\mathrm{Z}"),tn("\\argmin","\\DOTSB\\mathop{\\operatorname{arg\\,min}}\\limits"),tn("\\argmax","\\DOTSB\\mathop{\\operatorname{arg\\,max}}\\limits");var hn={"\\relax":!0,"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0},mn=function(){function e(e,t,r){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new Jr(en,t.macros),this.mode=r,this.stack=[]}var t=e.prototype;return t.feed=function(e){this.lexer=new Zr(e,this.settings)},t.switchMode=function(e){this.mode=e},t.beginGroup=function(){this.macros.beginGroup()},t.endGroup=function(){this.macros.endGroup()},t.future=function(){return 0===this.stack.length&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]},t.popToken=function(){return this.future(),this.stack.pop()},t.pushToken=function(e){this.stack.push(e)},t.pushTokens=function(e){var t;(t=this.stack).push.apply(t,e)},t.consumeSpaces=function(){for(;;){if(" "!==this.future().text)break;this.stack.pop()}},t.consumeArgs=function(e){for(var t=[],r=0;r<e;++r){this.consumeSpaces();var n=this.popToken();if("{"===n.text){for(var i=[],a=1;0!==a;){var o=this.popToken();if(i.push(o),"{"===o.text)++a;else if("}"===o.text)--a;else if("EOF"===o.text)throw new s("End of input in macro argument",n)}i.pop(),i.reverse(),t[r]=i}else{if("EOF"===n.text)throw new s("End of input expecting macro argument");t[r]=[n]}}return t},t.expandOnce=function(){var e=this.popToken(),t=e.text,r=this._getExpansion(t);if(null==r)return this.pushToken(e),e;if(this.expansionCount++,this.expansionCount>this.settings.maxExpand)throw new s("Too many expansions: infinite loop or need to increase maxExpand setting");var n=r.tokens;if(r.numArgs)for(var i=this.consumeArgs(r.numArgs),a=(n=n.slice()).length-1;a>=0;--a){var o=n[a];if("#"===o.text){if(0===a)throw new s("Incomplete placeholder at end of macro body",o);if("#"===(o=n[--a]).text)n.splice(a+1,1);else{if(!/^[1-9]$/.test(o.text))throw new s("Not a valid argument number",o);var l;(l=n).splice.apply(l,[a,2].concat(i[+o.text-1]))}}}return this.pushTokens(n),n},t.expandAfterFuture=function(){return this.expandOnce(),this.future()},t.expandNextToken=function(){for(;;){var e=this.expandOnce();if(e instanceof i){if("\\relax"!==e.text)return this.stack.pop();this.stack.pop()}}throw new Error},t.expandMacro=function(e){if(this.macros.get(e)){var t=[],r=this.stack.length;for(this.pushToken(new i(e));this.stack.length>r;){this.expandOnce()instanceof i&&t.push(this.stack.pop())}return t}},t.expandMacroAsText=function(e){var t=this.expandMacro(e);return t?t.map(function(e){return e.text}).join(""):t},t._getExpansion=function(e){var t=this.macros.get(e);if(null==t)return t;var r="function"==typeof t?t(this):t;if("string"==typeof r){var n=0;if(-1!==r.indexOf("#"))for(var i=r.replace(/##/g,"");-1!==i.indexOf("#"+(n+1));)++n;for(var a=new Zr(r,this.settings),s=[],o=a.lex();"EOF"!==o.text;)s.push(o),o=a.lex();return s.reverse(),{tokens:s,numArgs:n}}return r},t.isDefined=function(e){return this.macros.has(e)||Gr.hasOwnProperty(e)||U.math.hasOwnProperty(e)||U.text.hasOwnProperty(e)||hn.hasOwnProperty(e)},e}(),cn={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"}},un={"á":"á","à":"à","ä":"ä","ǟ":"ǟ","ã":"ã","ā":"ā","ă":"ă","ắ":"ắ","ằ":"ằ","ẵ":"ẵ","ǎ":"ǎ","â":"â","ấ":"ấ","ầ":"ầ","ẫ":"ẫ","ȧ":"ȧ","ǡ":"ǡ","å":"å","ǻ":"ǻ","ḃ":"ḃ","ć":"ć","č":"č","ĉ":"ĉ","ċ":"ċ","ď":"ď","ḋ":"ḋ","é":"é","è":"è","ë":"ë","ẽ":"ẽ","ē":"ē","ḗ":"ḗ","ḕ":"ḕ","ĕ":"ĕ","ě":"ě","ê":"ê","ế":"ế","ề":"ề","ễ":"ễ","ė":"ė","ḟ":"ḟ","ǵ":"ǵ","ḡ":"ḡ","ğ":"ğ","ǧ":"ǧ","ĝ":"ĝ","ġ":"ġ","ḧ":"ḧ","ȟ":"ȟ","ĥ":"ĥ","ḣ":"ḣ","í":"í","ì":"ì","ï":"ï","ḯ":"ḯ","ĩ":"ĩ","ī":"ī","ĭ":"ĭ","ǐ":"ǐ","î":"î","ǰ":"ǰ","ĵ":"ĵ","ḱ":"ḱ","ǩ":"ǩ","ĺ":"ĺ","ľ":"ľ","ḿ":"ḿ","ṁ":"ṁ","ń":"ń","ǹ":"ǹ","ñ":"ñ","ň":"ň","ṅ":"ṅ","ó":"ó","ò":"ò","ö":"ö","ȫ":"ȫ","õ":"õ","ṍ":"ṍ","ṏ":"ṏ","ȭ":"ȭ","ō":"ō","ṓ":"ṓ","ṑ":"ṑ","ŏ":"ŏ","ǒ":"ǒ","ô":"ô","ố":"ố","ồ":"ồ","ỗ":"ỗ","ȯ":"ȯ","ȱ":"ȱ","ő":"ő","ṕ":"ṕ","ṗ":"ṗ","ŕ":"ŕ","ř":"ř","ṙ":"ṙ","ś":"ś","ṥ":"ṥ","š":"š","ṧ":"ṧ","ŝ":"ŝ","ṡ":"ṡ","ẗ":"ẗ","ť":"ť","ṫ":"ṫ","ú":"ú","ù":"ù","ü":"ü","ǘ":"ǘ","ǜ":"ǜ","ǖ":"ǖ","ǚ":"ǚ","ũ":"ũ","ṹ":"ṹ","ū":"ū","ṻ":"ṻ","ŭ":"ŭ","ǔ":"ǔ","û":"û","ů":"ů","ű":"ű","ṽ":"ṽ","ẃ":"ẃ","ẁ":"ẁ","ẅ":"ẅ","ŵ":"ŵ","ẇ":"ẇ","ẘ":"ẘ","ẍ":"ẍ","ẋ":"ẋ","ý":"ý","ỳ":"ỳ","ÿ":"ÿ","ỹ":"ỹ","ȳ":"ȳ","ŷ":"ŷ","ẏ":"ẏ","ẙ":"ẙ","ź":"ź","ž":"ž","ẑ":"ẑ","ż":"ż","Á":"Á","À":"À","Ä":"Ä","Ǟ":"Ǟ","Ã":"Ã","Ā":"Ā","Ă":"Ă","Ắ":"Ắ","Ằ":"Ằ","Ẵ":"Ẵ","Ǎ":"Ǎ","Â":"Â","Ấ":"Ấ","Ầ":"Ầ","Ẫ":"Ẫ","Ȧ":"Ȧ","Ǡ":"Ǡ","Å":"Å","Ǻ":"Ǻ","Ḃ":"Ḃ","Ć":"Ć","Č":"Č","Ĉ":"Ĉ","Ċ":"Ċ","Ď":"Ď","Ḋ":"Ḋ","É":"É","È":"È","Ë":"Ë","Ẽ":"Ẽ","Ē":"Ē","Ḗ":"Ḗ","Ḕ":"Ḕ","Ĕ":"Ĕ","Ě":"Ě","Ê":"Ê","Ế":"Ế","Ề":"Ề","Ễ":"Ễ","Ė":"Ė","Ḟ":"Ḟ","Ǵ":"Ǵ","Ḡ":"Ḡ","Ğ":"Ğ","Ǧ":"Ǧ","Ĝ":"Ĝ","Ġ":"Ġ","Ḧ":"Ḧ","Ȟ":"Ȟ","Ĥ":"Ĥ","Ḣ":"Ḣ","Í":"Í","Ì":"Ì","Ï":"Ï","Ḯ":"Ḯ","Ĩ":"Ĩ","Ī":"Ī","Ĭ":"Ĭ","Ǐ":"Ǐ","Î":"Î","İ":"İ","Ĵ":"Ĵ","Ḱ":"Ḱ","Ǩ":"Ǩ","Ĺ":"Ĺ","Ľ":"Ľ","Ḿ":"Ḿ","Ṁ":"Ṁ","Ń":"Ń","Ǹ":"Ǹ","Ñ":"Ñ","Ň":"Ň","Ṅ":"Ṅ","Ó":"Ó","Ò":"Ò","Ö":"Ö","Ȫ":"Ȫ","Õ":"Õ","Ṍ":"Ṍ","Ṏ":"Ṏ","Ȭ":"Ȭ","Ō":"Ō","Ṓ":"Ṓ","Ṑ":"Ṑ","Ŏ":"Ŏ","Ǒ":"Ǒ","Ô":"Ô","Ố":"Ố","Ồ":"Ồ","Ỗ":"Ỗ","Ȯ":"Ȯ","Ȱ":"Ȱ","Ő":"Ő","Ṕ":"Ṕ","Ṗ":"Ṗ","Ŕ":"Ŕ","Ř":"Ř","Ṙ":"Ṙ","Ś":"Ś","Ṥ":"Ṥ","Š":"Š","Ṧ":"Ṧ","Ŝ":"Ŝ","Ṡ":"Ṡ","Ť":"Ť","Ṫ":"Ṫ","Ú":"Ú","Ù":"Ù","Ü":"Ü","Ǘ":"Ǘ","Ǜ":"Ǜ","Ǖ":"Ǖ","Ǚ":"Ǚ","Ũ":"Ũ","Ṹ":"Ṹ","Ū":"Ū","Ṻ":"Ṻ","Ŭ":"Ŭ","Ǔ":"Ǔ","Û":"Û","Ů":"Ů","Ű":"Ű","Ṽ":"Ṽ","Ẃ":"Ẃ","Ẁ":"Ẁ","Ẅ":"Ẅ","Ŵ":"Ŵ","Ẇ":"Ẇ","Ẍ":"Ẍ","Ẋ":"Ẋ","Ý":"Ý","Ỳ":"Ỳ","Ÿ":"Ÿ","Ỹ":"Ỹ","Ȳ":"Ȳ","Ŷ":"Ŷ","Ẏ":"Ẏ","Ź":"Ź","Ž":"Ž","Ẑ":"Ẑ","Ż":"Ż","ά":"ά","ὰ":"ὰ","ᾱ":"ᾱ","ᾰ":"ᾰ","έ":"έ","ὲ":"ὲ","ή":"ή","ὴ":"ὴ","ί":"ί","ὶ":"ὶ","ϊ":"ϊ","ΐ":"ΐ","ῒ":"ῒ","ῑ":"ῑ","ῐ":"ῐ","ό":"ό","ὸ":"ὸ","ύ":"ύ","ὺ":"ὺ","ϋ":"ϋ","ΰ":"ΰ","ῢ":"ῢ","ῡ":"ῡ","ῠ":"ῠ","ώ":"ώ","ὼ":"ὼ","Ύ":"Ύ","Ὺ":"Ὺ","Ϋ":"Ϋ","Ῡ":"Ῡ","Ῠ":"Ῠ","Ώ":"Ώ","Ὼ":"Ὼ"},dn=function(){function e(e,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new mn(e,t,this.mode),this.settings=t,this.leftrightDepth=0}var t=e.prototype;return t.expect=function(e,t){if(void 0===t&&(t=!0),this.nextToken.text!==e)throw new s("Expected '"+e+"', got '"+this.nextToken.text+"'",this.nextToken);t&&this.consume()},t.consume=function(){this.nextToken=this.gullet.expandNextToken()},t.switchMode=function(e){this.mode=e,this.gullet.switchMode(e)},t.parse=function(){this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor"),this.consume();var e=this.parseExpression(!1);return this.expect("EOF",!1),this.gullet.endGroup(),e},t.parseExpression=function(t,r){for(var n=[];;){"math"===this.mode&&this.consumeSpaces();var i=this.nextToken;if(-1!==e.endOfExpression.indexOf(i.text))break;if(r&&i.text===r)break;if(t&&Gr[i.text]&&Gr[i.text].infix)break;var a=this.parseAtom(r);if(!a)break;n.push(a)}return"text"===this.mode&&this.formLigatures(n),this.handleInfixNodes(n)},t.handleInfixNodes=function(e){for(var t,r=-1,n=0;n<e.length;n++){var i=He(e[n],"infix");if(i){if(-1!==r)throw new s("only one infix operator per group",i.token);r=n,t=i.replaceWith}}if(-1!==r&&t){var a,o,l=e.slice(0,r),h=e.slice(r+1);return a=1===l.length&&"ordgroup"===l[0].type?l[0]:{type:"ordgroup",mode:this.mode,body:l},o=1===h.length&&"ordgroup"===h[0].type?h[0]:{type:"ordgroup",mode:this.mode,body:h},["\\\\abovefrac"===t?this.callFunction(t,[a,e[r],o],[]):this.callFunction(t,[a,o],[])]}return e},t.handleSupSubscript=function(t){var r=this.nextToken,n=r.text;this.consume(),this.consumeSpaces();var i=this.parseGroup(t,!1,e.SUPSUB_GREEDINESS);if(!i)throw new s("Expected group after '"+n+"'",r);return i},t.handleUnsupportedCmd=function(){for(var e=this.nextToken.text,t=[],r=0;r<e.length;r++)t.push({type:"textord",mode:"text",text:e[r]});var n={type:"text",mode:this.mode,body:t},i={type:"color",mode:this.mode,color:this.settings.errorColor,body:[n]};return this.consume(),i},t.parseAtom=function(e){var t,r,n=this.parseGroup("atom",!1,null,e);if("text"===this.mode)return n;for(;;){this.consumeSpaces();var i=this.nextToken;if("\\limits"===i.text||"\\nolimits"===i.text){var a=He(n,"op");if(!a)throw new s("Limit controls must follow a math operator",i);var o="\\limits"===i.text;a.limits=o,a.alwaysHandleSupSub=!0,this.consume()}else if("^"===i.text){if(t)throw new s("Double superscript",i);t=this.handleSupSubscript("superscript")}else if("_"===i.text){if(r)throw new s("Double subscript",i);r=this.handleSupSubscript("subscript")}else{if("'"!==i.text)break;if(t)throw new s("Double superscript",i);var l={type:"textord",mode:this.mode,text:"\\prime"},h=[l];for(this.consume();"'"===this.nextToken.text;)h.push(l),this.consume();"^"===this.nextToken.text&&h.push(this.handleSupSubscript("superscript")),t={type:"ordgroup",mode:this.mode,body:h}}}return t||r?{type:"supsub",mode:this.mode,base:n,sup:t,sub:r}:n},t.parseFunction=function(e,t,r){var n=this.nextToken,i=n.text,a=Gr[i];if(!a)return null;if(null!=r&&a.greediness<=r)throw new s("Got function '"+i+"' with no arguments"+(t?" as "+t:""),n);if("text"===this.mode&&!a.allowedInText)throw new s("Can't use function '"+i+"' in text mode",n);if("math"===this.mode&&!1===a.allowedInMath)throw new s("Can't use function '"+i+"' in math mode",n);if(a.argTypes&&"url"===a.argTypes[0]&&this.gullet.lexer.setCatcode("%",13),a.consumeMode){var o=this.mode;this.switchMode(a.consumeMode),this.consume(),this.switchMode(o)}else this.consume();var l=this.parseArguments(i,a),h=l.args,m=l.optArgs;return this.callFunction(i,h,m,n,e)},t.callFunction=function(e,t,r,n,i){var a={funcName:e,parser:this,token:n,breakOnTokenText:i},o=Gr[e];if(o&&o.handler)return o.handler(a,t,r);throw new s("No function handler for "+e)},t.parseArguments=function(e,t){var r=t.numArgs+t.numOptionalArgs;if(0===r)return{args:[],optArgs:[]};for(var n=t.greediness,i=[],a=[],o=0;o<r;o++){var l=t.argTypes&&t.argTypes[o],h=o<t.numOptionalArgs;o>0&&!h&&this.consumeSpaces(),0!==o||h||"math"!==this.mode||this.consumeSpaces();var m=this.nextToken,c=this.parseGroupOfType("argument to '"+e+"'",l,h,n);if(!c){if(h){a.push(null);continue}throw new s("Expected group after '"+e+"'",m)}(h?a:i).push(c)}return{args:i,optArgs:a}},t.parseGroupOfType=function(e,t,r,n){switch(t){case"color":return this.parseColorGroup(r);case"size":return this.parseSizeGroup(r);case"url":return this.parseUrlGroup(r);case"math":case"text":return this.parseGroup(e,r,n,void 0,t);case"raw":if(r&&"{"===this.nextToken.text)return null;var i=this.parseStringGroup("raw",r,!0);if(i)return{type:"raw",mode:"text",string:i.text};throw new s("Expected raw group",this.nextToken);case"original":case null:case void 0:return this.parseGroup(e,r,n);default:throw new s("Unknown group type as "+e,this.nextToken)}},t.consumeSpaces=function(){for(;" "===this.nextToken.text;)this.consume()},t.parseStringGroup=function(e,t,r){var n=t?"[":"{",i=t?"]":"}",a=this.nextToken;if(a.text!==n){if(t)return null;if(r&&"EOF"!==a.text&&/[^{}[\]]/.test(a.text))return this.gullet.lexer.setCatcode("%",14),this.consume(),a}var o=this.mode;this.mode="text",this.expect(n);for(var l="",h=this.nextToken,m=0,c=h;r&&m>0||this.nextToken.text!==i;){switch(this.nextToken.text){case"EOF":throw new s("Unexpected end of input in "+e,h.range(c,l));case n:m++;break;case i:m--}l+=(c=this.nextToken).text,this.consume()}return this.mode=o,this.gullet.lexer.setCatcode("%",14),this.expect(i),h.range(c,l)},t.parseRegexGroup=function(e,t){var r=this.mode;this.mode="text";for(var n=this.nextToken,i=n,a="";"EOF"!==this.nextToken.text&&e.test(a+this.nextToken.text);)a+=(i=this.nextToken).text,this.consume();if(""===a)throw new s("Invalid "+t+": '"+n.text+"'",n);return this.mode=r,n.range(i,a)},t.parseColorGroup=function(e){var t=this.parseStringGroup("color",e);if(!t)return null;var r=/^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!r)throw new s("Invalid color: '"+t.text+"'",t);var n=r[0];return/^[0-9a-f]{6}$/i.test(n)&&(n="#"+n),{type:"color-token",mode:this.mode,color:n}},t.parseSizeGroup=function(e){var t,r=!1;if(!(t=e||"{"===this.nextToken.text?this.parseStringGroup("size",e):this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size")))return null;e||0!==t.text.length||(t.text="0pt",r=!0);var n=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!n)throw new s("Invalid size: '"+t.text+"'",t);var i,a={number:+(n[1]+n[2]),unit:n[3]};if("string"!=typeof(i=a)&&(i=i.unit),!(i in we||i in Se||"ex"===i))throw new s("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:r}},t.parseUrlGroup=function(e){var t=this.parseStringGroup("url",e,!0);if(!t)return null;var r=t.text.replace(/\\([#$%&~_^{}])/g,"$1"),n=/^\s*([^\\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(r);n=null!=n?n[1]:"_relative";var i=this.settings.allowedProtocols;if(!c.contains(i,"*")&&!c.contains(i,n))throw new s("Forbidden protocol '"+n+"'",t);return{type:"url",mode:this.mode,url:r}},t.parseGroup=function(t,r,i,a,o){var l,h,m=this.mode,c=this.nextToken,u=c.text;if(o&&this.switchMode(o),r?"["===u:"{"===u||"\\begingroup"===u){l=e.endOfGroup[u],this.gullet.beginGroup(),this.consume();var d=this.parseExpression(!1,l),p=this.nextToken;this.gullet.endGroup(),h={type:"ordgroup",mode:this.mode,loc:n.range(c,p),body:d,semisimple:"\\begingroup"===u||void 0}}else if(r)h=null;else if(null==(h=this.parseFunction(a,t,i)||this.parseSymbol())&&"\\"===u[0]&&!hn.hasOwnProperty(u)){if(this.settings.throwOnError)throw new s("Undefined control sequence: "+u,c);h=this.handleUnsupportedCmd()}return o&&this.switchMode(m),l&&this.expect(l),h},t.formLigatures=function(e){for(var t=e.length-1,r=0;r<t;++r){var i=e[r],a=i.text;"-"===a&&"-"===e[r+1].text&&(r+1<t&&"-"===e[r+2].text?(e.splice(r,3,{type:"textord",mode:"text",loc:n.range(i,e[r+2]),text:"---"}),t-=2):(e.splice(r,2,{type:"textord",mode:"text",loc:n.range(i,e[r+1]),text:"--"}),t-=1)),"'"!==a&&"`"!==a||e[r+1].text!==a||(e.splice(r,2,{type:"textord",mode:"text",loc:n.range(i,e[r+1]),text:a+a}),t-=1)}},t.parseSymbol=function(){var e=this.nextToken,t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var r=t.slice(5),i="*"===r.charAt(0);if(i&&(r=r.slice(1)),r.length<2||r.charAt(0)!==r.slice(-1))throw new s("\\verb assertion failed --\n                    please report what input caused this bug");return{type:"verb",mode:"text",body:r=r.slice(1,-1),star:i}}un.hasOwnProperty(t[0])&&!U[this.mode][t[0]]&&(this.settings.strict&&"math"===this.mode&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=un[t[0]]+t.substr(1));var a,o=Wr.exec(t);if(o&&("i"===(t=t.substring(0,o.index))?t="ı":"j"===t&&(t="ȷ")),U[this.mode][t]){this.settings.strict&&"math"===this.mode&&"ÇÐÞçþ".indexOf(t)>=0&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var l,h=U[this.mode][t].group,m=n.range(e);if(F.hasOwnProperty(h)){var c=h;l={type:"atom",mode:this.mode,family:c,loc:m,text:t}}else l={type:h,mode:this.mode,loc:m,text:t};a=l}else{if(!(t.charCodeAt(0)>=128))return null;this.settings.strict&&(S(t.charCodeAt(0))?"math"===this.mode&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'" ('+t.charCodeAt(0)+")",e)),a={type:"textord",mode:this.mode,loc:n.range(e),text:t}}if(this.consume(),o)for(var u=0;u<o[0].length;u++){var d=o[0][u];if(!cn[d])throw new s("Unknown accent ' "+d+"'",e);var p=cn[d][this.mode];if(!p)throw new s("Accent "+d+" unsupported in "+this.mode+" mode",e);a={type:"accent",mode:this.mode,loc:n.range(e),label:p,isStretchy:!1,isShifty:!0,base:a}}return a},e}();dn.endOfExpression=["}","\\endgroup","\\end","\\right","&"],dn.endOfGroup={"[":"]","{":"}","\\begingroup":"\\endgroup"},dn.SUPSUB_GREEDINESS=1;var pn=function(e,t){if(!("string"==typeof e||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var r=new dn(e,t);delete r.gullet.macros.current["\\df@tag"];var n=r.parse();if(r.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new s("\\tag works only in display equations");r.gullet.feed("\\df@tag"),n=[{type:"tag",mode:"text",body:n,tag:r.parse()}]}return n},fn=function(e,t,r){t.textContent="";var n=xn(e,r).toNode();t.appendChild(n)};"undefined"!=typeof document&&"CSS1Compat"!==document.compatMode&&("undefined"!=typeof console&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),fn=function(){throw new s("KaTeX doesn't work in quirks mode.")});var gn=function(e,t,r){if(r.throwOnError||!(e instanceof s))throw e;var n=Xe.makeSpan(["katex-error"],[new E(t)]);return n.setAttribute("title",e.toString()),n.setAttribute("style","color:"+r.errorColor),n},xn=function(e,t){var r=new u(t);try{var n=pn(e,r);return St(n,e,r)}catch(t){return gn(t,e,r)}},vn={version:"0.10.1",render:fn,renderToString:function(e,t){return xn(e,t).toMarkup()},ParseError:s,__parse:function(e,t){var r=new u(t);return pn(e,r)},__renderToDomTree:xn,__renderToHTMLTree:function(e,t){var r=new u(t);try{return function(e,t,r){var n=ct(e,bt(r)),i=Xe.makeSpan(["katex"],[n]);return wt(i,r)}(pn(e,r),0,r)}catch(t){return gn(t,e,r)}},__setFontMetrics:function(e,t){_[e]=t},__defineSymbol:G,__defineMacro:tn,__domTree:{Span:q,Anchor:R,SymbolNode:E,SvgNode:O,PathNode:L,LineNode:X}};t.default=vn}]).default},"object"==typeof r&&"object"==typeof t?t.exports=i():"object"==typeof r?r.katex=i():n.katex=i()},{}],5:[function(e,t,r){var n='@font-face{font-family:KaTeX_AMS;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_AMS-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_AMS-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_AMS-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Caligraphic-Bold.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Caligraphic-Bold.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Caligraphic-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Caligraphic-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Fraktur-Bold.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Fraktur-Bold.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Fraktur-Bold.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Fraktur-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Fraktur-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Fraktur-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Bold.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Bold.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Bold.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-BoldItalic.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-BoldItalic.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-BoldItalic.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Italic.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Italic.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Italic.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Main-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Math-BoldItalic.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Math-BoldItalic.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Math-BoldItalic.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Math-Italic.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Math-Italic.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Math-Italic.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Bold.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Bold.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Bold.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_SansSerif;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Italic.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Italic.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Italic.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_SansSerif-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Script-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Script-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Script-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size1-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size1-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size1-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size2-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size2-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size2-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size3-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size3-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size3-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size4-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size4-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Size4-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Typewriter-Regular.woff2) format("woff2"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Typewriter-Regular.woff) format("woff"),url(https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/fonts/KaTeX_Typewriter-Regular.ttf) format("truetype");font-weight:400;font-style:normal}.katex{font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathdefault{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:700;font-style:italic}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:0 solid;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer,.katex .sizing{display:inline-block}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;margin:0 -.025em;border-right:.05em solid;min-width:1px}.katex .mtable .vs-dashed{border-right:.05em dashed}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy:after,.katex .stretchy:before{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left}';e("browserify-css").createStyle(n,{href:"katex.min.css"},{insertAt:"bottom"}),t.exports=n},{"browserify-css":2}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      slideNumber = document.createElement('aside'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressParent.appendChild(progressBar);
    progressBar.className = 'bespoke-progress-bar';
    slideNumber.className = 'bespoke-progress-number';
    deck.parent.appendChild(progressParent);
    deck.parent.appendChild(slideNumber);

    deck.on('activate', function(e) {
      var percentage = e.index * 100 / (deck.slides.length - 1),
        number = (e.index + 1) + '';
      progressBar.style[prop] = percentage + '%';
      slideNumber.innerHTML = number.padStart(2, '0');
    });
  };
};

},{}],9:[function(require,module,exports){
(function (global){
/*! bespoke-qrcode v1.0.0 © 2016 Flávio Coutinho, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.qrcode=e()}}(function(){return function e(t,r,n){function i(s,o){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!o&&u)return u(s,!0);if(a)return a(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return i(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(e,t,r){var n=e("insert-css"),i=e("qr-image");t.exports=function(){return function(e){var t,r,a=function(e){t.classList.toggle("active",e)},r=e.parent.querySelectorAll('a[href^="http"]');if(r.length>0){Array.prototype.forEach.call(r,function(e){var r=document.createElement("i");r.classList.add("bespoke-qrcode-icon"),r.dataset.url=e.getAttribute("href"),e.insertBefore(r,e.children[0]),r.addEventListener("click",function(e){e.preventDefault(),t.innerHTML=i.imageSync(e.currentTarget.dataset.url,{type:"svg"}),a(!0)})}),t=document.createElement("aside"),t.classList.add("bespoke-qrcode-modal"),e.parent.parentElement.appendChild(t),t.addEventListener("click",a.bind({},!1));try{n('.bespoke-qrcode-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAV+SURBVHhe7VtNjBRFFB48gAcTsiYGhWWNBzx4EYPLTld3z+BAwnrQGMlEI8YQCHsyhp9kORBcuUI0GA4aD9zYwIULRGO8GD16kQSumEg0KgQTTqwxge/1vJ5+XVvVU7vd2z0z2y/50tOvXr2q9+2r11293Y11LwsLC0/5vr/o++r/IPAfW/CfUuo8dxl6QTyf05y1GPqgWIFFir0RhuFuk5EJMzMzW3iMoZVOp7PFNHcTWi1vmtjaY2rUAcZ+73a7G3mcoRWaI+Z61xSDDop9GQFI9YtBEMzjGCEI1LzvN48hU7bzGEMviGmK5qzH0YttAAG0JNjP2Im+3GsCagJqAvY0UCjaUolC8Trbj514njctY8V5iwiYwGXjHiv/aLfbz7D92AnFRjFSrIj5H4o9bphEOnyA4/ORwiK+752D3aUiELHPQlloslklzrFbo2AZvIAsP9jpNLexyl3A2m+cKbmBiR5ht0TAUZPNaoA53mG3xUuRBIShOsRuQYAaPQLw+wdM/Gv8/iqNTN19gCerjrLbVAYgM8jG1Neq682lZAKwjt5jtbMguJtx/3QGSALUTVY7C+rJ+6J/OQQggFwEoKAeZjUI8OYS/QgS0OnMYAsa7NKB7eZrbBJJmgBzEdQJIB+6X4LcmldCgFwC+GuejPUaltgkEvsSSIqgTgD5iNskaEw2qT4DbAQg4EdsEokkwF4E0wTg3EKAXy0BLhmQRYBrEbQTMOIZgD5ORRC6cSXArQji3EgA+pxgk/VaBCuuATIDQMbWMPSUjnbbb7JJJJIA1yJIPky+aUw2qT4DXMWeAXYCXKTyDHAVSYBrEXSRSghACn+LgL5cGfoPXjBRaxG8t7xfNmguon9ZBOSDrQjmxcgQYCuCebGmBGDSF4DLBAy0GP9ejQ6VvP9IDAX1jbz+xPkFdltLLUVLGIYvtVqtHVizL9NR/l6pbt++XZvZbUpmZ2c3STuoNvRaovG3k06203HQ0+zCBGutwCLozbHblKAe7JR2RAg3UQ36WbYJXGGTtZViCQj6VwEpWQTgmv+jbEugrrLJ2krVBOD8J9kmUH4G4K9xuNlsPotAJiSydepWMunkPgC+PoLvf3EEvIeJjf8Y6/tpNsvIAH+p1189gN9f2bx4kQTk3QyBEHEjZL8TdFsCCTDH0dgMySJIZCT6NByLYB+lESAzAGQcQHDfG3CDTSLBuSUDUpuhOzifxSVvPx0RNG262B+leNzfjNIIkBmAyTk+ElMWApLtsL6GobM8EjOjIgJcnwlKAmyboTQB6DOcBMglYMsAQHsmaM4A+u9PGPpnCCDgU/j7jHE21hPk+Gj7TrYJfMxuixc5gfwZYL4TRJ9XpQ97EUyeCpcm9gxY+WNxmQFSsm6E0F9cBismQGYAJvMOJnddB/5i19gkknQGJATAdgp4C8G/jcz4JLGJSHyX2hjfAOw7OE066iOP0O9lt8WLjQBXSROw8idCrZYKuQuRRm+EL7PBGOUXQVexZQCRkejtkASg2H1hsimNAAQwR6+mE2g/Hv/O0qH/7aS/vBNUH0L3NwE24jWaCND5f/HxzdgXzun1mMgGfR4Ju1/YbfGSJiAv8hZBiXo7nG873G7vnsTABwe/KFkkAUkRlKIT4LYdds+A+EVJ+J2MFPhLOL8qi339Ns/zXiwCtnG63Vc2Sjuo+s8E6b0g2RYDMTzHJplCYyLWPynWXszBBBGQelkaDqfZfuyEYpOxUuyUVvX3AlJZE1ATsM4JwCXiInSnUCDmE6jj0E2xn6EXmqv8bA7zjz+fG/zZnA24bNwdyw8n9bTIAr0TzOMMrfTeWzbPX0e03HsfT6tBH08vga3MT1GGSWiuNGcthj4oVtj0Pp5e39JoPAHt/A/N3ITBRwAAAABJRU5ErkJggg==");width:1.2em;height:1.2em;opacity:0;background-color:#fff;background-size:contain;border-radius:.15em;position:absolute;bottom:0;left:0;transition:left 100ms ease-out,opacity 100ms ease-out}a[href^=http]{position:relative}a[href^=http]:hover>.bespoke-qrcode-icon{opacity:1;left:-1.5em;cursor:pointer;-webkit-animation:sizing 500ms ease-out 100ms infinite alternate-reverse;animation:sizing 500ms ease-out 100ms infinite alternate-reverse}@-webkit-keyframes sizing{0%{-webkit-transform:none;transform:none}to{-webkit-transform:scale(1.1);transform:scale(1.1)}}@keyframes sizing{0%{-webkit-transform:none;transform:none}to{-webkit-transform:scale(1.1);transform:scale(1.1)}}.bespoke-qrcode-modal{width:100%;height:100%;box-sizing:border-box;position:absolute;top:0;left:0;-webkit-transform:translate3d(0,100%,0) scale3d(.3,.3,.3);transform:translate3d(0,100%,0) scale3d(.3,.3,.3);background-color:rgba(255,255,255,.5);text-align:center;vertical-align:middle;padding:5em;opacity:0;transition:transform 300ms ease-out,opacity 300ms ease-out;transition:transform 300ms ease-out,opacity 300ms ease-out,-webkit-transform 300ms ease-out}.bespoke-qrcode-modal.active{-webkit-transform:translate3d(0,0,0) scale3d(1,1,1);transform:translate3d(0,0,0) scale3d(1,1,1);opacity:1}.bespoke-qrcode-modal>img,.bespoke-qrcode-modal>svg{height:100%}')}catch(s){console.error(s)}}}}},{"insert-css":13,"qr-image":41}],2:[function(e,t,r){function n(e,t){return d.isUndefined(t)?""+t:d.isNumber(t)&&!isFinite(t)?t.toString():d.isFunction(t)||d.isRegExp(t)?t.toString():t}function i(e,t){return d.isString(e)?e.length<t?e:e.slice(0,t):e}function a(e){return i(JSON.stringify(e.actual,n),128)+" "+e.operator+" "+i(JSON.stringify(e.expected,n),128)}function s(e,t,r,n,i){throw new _.AssertionError({message:r,actual:e,expected:t,operator:n,stackStartFunction:i})}function o(e,t){e||s(e,!0,t,"==",_.ok)}function u(e,t){if(e===t)return!0;if(d.isBuffer(e)&&d.isBuffer(t)){if(e.length!=t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return d.isDate(e)&&d.isDate(t)?e.getTime()===t.getTime():d.isRegExp(e)&&d.isRegExp(t)?e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase:d.isObject(e)||d.isObject(t)?l(e,t):e==t}function f(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function l(e,t){if(d.isNullOrUndefined(e)||d.isNullOrUndefined(t))return!1;if(e.prototype!==t.prototype)return!1;if(d.isPrimitive(e)||d.isPrimitive(t))return e===t;var r=f(e),n=f(t);if(r&&!n||!r&&n)return!1;if(r)return e=p.call(e),t=p.call(t),u(e,t);var i,a,s=v(e),o=v(t);if(s.length!=o.length)return!1;for(s.sort(),o.sort(),a=s.length-1;a>=0;a--)if(s[a]!=o[a])return!1;for(a=s.length-1;a>=0;a--)if(i=s[a],!u(e[i],t[i]))return!1;return!0}function h(e,t){return e&&t?"[object RegExp]"==Object.prototype.toString.call(t)?t.test(e):e instanceof t?!0:t.call({},e)===!0?!0:!1:!1}function c(e,t,r,n){var i;d.isString(r)&&(n=r,r=null);try{t()}catch(a){i=a}if(n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),e&&!i&&s(i,r,"Missing expected exception"+n),!e&&h(i,r)&&s(i,r,"Got unwanted exception"+n),e&&i&&r&&!h(i,r)||!e&&i)throw i}var d=e("util/"),p=Array.prototype.slice,g=Object.prototype.hasOwnProperty,_=t.exports=o;_.AssertionError=function(e){this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=a(this),this.generatedMessage=!0);var t=e.stackStartFunction||s;if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var r=new Error;if(r.stack){var n=r.stack,i=t.name,o=n.indexOf("\n"+i);if(o>=0){var u=n.indexOf("\n",o+1);n=n.substring(u+1)}this.stack=n}}},d.inherits(_.AssertionError,Error),_.fail=s,_.ok=o,_.equal=function(e,t,r){e!=t&&s(e,t,r,"==",_.equal)},_.notEqual=function(e,t,r){e==t&&s(e,t,r,"!=",_.notEqual)},_.deepEqual=function(e,t,r){u(e,t)||s(e,t,r,"deepEqual",_.deepEqual)},_.notDeepEqual=function(e,t,r){u(e,t)&&s(e,t,r,"notDeepEqual",_.notDeepEqual)},_.strictEqual=function(e,t,r){e!==t&&s(e,t,r,"===",_.strictEqual)},_.notStrictEqual=function(e,t,r){e===t&&s(e,t,r,"!==",_.notStrictEqual)},_["throws"]=function(e,t,r){c.apply(this,[!0].concat(p.call(arguments)))},_.doesNotThrow=function(e,t){c.apply(this,[!1].concat(p.call(arguments)))},_.ifError=function(e){if(e)throw e};var v=Object.keys||function(e){var t=[];for(var r in e)g.call(e,r)&&t.push(r);return t}},{"util/":57}],3:[function(e,t,r){!function(e){"use strict";function t(e){var t=l[e.charCodeAt(0)];return void 0!==t?t:-1}function r(e){function r(e){u[l++]=e}var n,i,a,s,o,u;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var f=e.length;o="="===e.charAt(f-2)?2:"="===e.charAt(f-1)?1:0,u=new h(3*e.length/4-o),a=o>0?e.length-4:e.length;var l=0;for(n=0,i=0;a>n;n+=4,i+=3)s=t(e.charAt(n))<<18|t(e.charAt(n+1))<<12|t(e.charAt(n+2))<<6|t(e.charAt(n+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s);return 2===o?(s=t(e.charAt(n))<<2|t(e.charAt(n+1))>>4,r(255&s)):1===o&&(s=t(e.charAt(n))<<10|t(e.charAt(n+1))<<4|t(e.charAt(n+2))>>2,r(s>>8&255),r(255&s)),u}function n(e){return f[e]}function i(e){return n(e>>18&63)+n(e>>12&63)+n(e>>6&63)+n(63&e)}function a(e,t,r){for(var n,a=[],s=t;r>s;s+=3)n=(e[s]<<16)+(e[s+1]<<8)+e[s+2],a.push(i(n));return a.join("")}function s(e){var t,r,i,s=e.length%3,o="",u=[],f=16383;for(t=0,i=e.length-s;i>t;t+=f)u.push(a(e,t,t+f>i?i:t+f));switch(s){case 1:r=e[e.length-1],o+=n(r>>2),o+=n(r<<4&63),o+="==";break;case 2:r=(e[e.length-2]<<8)+e[e.length-1],o+=n(r>>10),o+=n(r>>4&63),o+=n(r<<2&63),o+="="}return u.push(o),u.join("")}var o,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f=[];for(o=0;o<u.length;o++)f[o]=u[o];var l=[];for(o=0;o<u.length;++o)l[u.charCodeAt(o)]=o;l["-".charCodeAt(0)]=62,l["_".charCodeAt(0)]=63;var h="undefined"!=typeof Uint8Array?Uint8Array:Array;e.toByteArray=r,e.fromByteArray=s}("undefined"==typeof r?this.base64js={}:r)},{}],4:[function(e,t,r){},{}],5:[function(e,t,r){(function(t,n){function i(e){if(e<r.DEFLATE||e>r.UNZIP)throw new TypeError("Bad argument");this.mode=e,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function a(e,t){for(var r=0;r<e.length;r++)this[t+r]=e[r]}var s=e("pako/lib/zlib/messages"),o=e("pako/lib/zlib/zstream"),u=e("pako/lib/zlib/deflate.js"),f=e("pako/lib/zlib/inflate.js"),l=e("pako/lib/zlib/constants");for(var h in l)r[h]=l[h];r.NONE=0,r.DEFLATE=1,r.INFLATE=2,r.GZIP=3,r.GUNZIP=4,r.DEFLATERAW=5,r.INFLATERAW=6,r.UNZIP=7,i.prototype.init=function(e,t,n,i,a){switch(this.windowBits=e,this.level=t,this.memLevel=n,this.strategy=i,(this.mode===r.GZIP||this.mode===r.GUNZIP)&&(this.windowBits+=16),this.mode===r.UNZIP&&(this.windowBits+=32),(this.mode===r.DEFLATERAW||this.mode===r.INFLATERAW)&&(this.windowBits=-this.windowBits),this.strm=new o,this.mode){case r.DEFLATE:case r.GZIP:case r.DEFLATERAW:var s=u.deflateInit2(this.strm,this.level,r.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case r.INFLATE:case r.GUNZIP:case r.INFLATERAW:case r.UNZIP:var s=f.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}return s!==r.Z_OK?void this._error(s):(this.write_in_progress=!1,void(this.init_done=!0))},i.prototype.params=function(){throw new Error("deflateParams Not supported")},i.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init");if(this.mode===r.NONE)throw new Error("already finalized");if(this.write_in_progress)throw new Error("write already in progress");if(this.pending_close)throw new Error("close is pending")},i.prototype.write=function(e,r,n,i,a,s,o){this._writeCheck(),this.write_in_progress=!0;var u=this;return t.nextTick(function(){u.write_in_progress=!1;var t=u._write(e,r,n,i,a,s,o);u.callback(t[0],t[1]),u.pending_close&&u.close()}),this},i.prototype.writeSync=function(e,t,r,n,i,a,s){return this._writeCheck(),this._write(e,t,r,n,i,a,s)},i.prototype._write=function(e,t,i,s,o,l,h){if(this.write_in_progress=!0,e!==r.Z_NO_FLUSH&&e!==r.Z_PARTIAL_FLUSH&&e!==r.Z_SYNC_FLUSH&&e!==r.Z_FULL_FLUSH&&e!==r.Z_FINISH&&e!==r.Z_BLOCK)throw new Error("Invalid flush value");null==t&&(t=new n(0),s=0,i=0),o._set?o.set=o._set:o.set=a;var c=this.strm;switch(c.avail_in=s,c.input=t,c.next_in=i,c.avail_out=h,c.output=o,c.next_out=l,this.mode){case r.DEFLATE:case r.GZIP:case r.DEFLATERAW:var d=u.deflate(c,e);break;case r.UNZIP:case r.INFLATE:case r.GUNZIP:case r.INFLATERAW:var d=f.inflate(c,e);break;default:throw new Error("Unknown mode "+this.mode)}return d!==r.Z_STREAM_END&&d!==r.Z_OK&&this._error(d),this.write_in_progress=!1,[c.avail_in,c.avail_out]},i.prototype.close=function(){return this.write_in_progress?void(this.pending_close=!0):(this.pending_close=!1,this.mode===r.DEFLATE||this.mode===r.GZIP||this.mode===r.DEFLATERAW?u.deflateEnd(this.strm):f.inflateEnd(this.strm),void(this.mode=r.NONE))},i.prototype.reset=function(){switch(this.mode){case r.DEFLATE:case r.DEFLATERAW:var e=u.deflateReset(this.strm);break;case r.INFLATE:case r.INFLATERAW:var e=f.inflateReset(this.strm)}e!==r.Z_OK&&this._error(e)},i.prototype._error=function(e){this.onerror(s[e]+": "+this.strm.msg,e),this.write_in_progress=!1,this.pending_close&&this.close()},r.Zlib=i}).call(this,e("_process"),e("buffer").Buffer)},{_process:33,buffer:7,"pako/lib/zlib/constants":22,"pako/lib/zlib/deflate.js":24,"pako/lib/zlib/inflate.js":27,"pako/lib/zlib/messages":29,"pako/lib/zlib/zstream":31}],6:[function(e,t,r){(function(t,n){function i(e,t,r){function i(){for(var t;null!==(t=e.read());)o.push(t),u+=t.length;e.once("readable",i)}function a(t){e.removeListener("end",s),e.removeListener("readable",i),r(t)}function s(){var t=n.concat(o,u);o=[],r(null,t),e.close()}var o=[],u=0;e.on("error",a),e.on("end",s),e.end(t),i()}function a(e,t){if("string"==typeof t&&(t=new n(t)),!n.isBuffer(t))throw new TypeError("Not a string or buffer");var r=g.Z_FINISH;return e._processChunk(t,r)}function s(e){return this instanceof s?void d.call(this,e,g.DEFLATE):new s(e)}function o(e){return this instanceof o?void d.call(this,e,g.INFLATE):new o(e)}function u(e){return this instanceof u?void d.call(this,e,g.GZIP):new u(e)}function f(e){return this instanceof f?void d.call(this,e,g.GUNZIP):new f(e)}function l(e){return this instanceof l?void d.call(this,e,g.DEFLATERAW):new l(e)}function h(e){return this instanceof h?void d.call(this,e,g.INFLATERAW):new h(e)}function c(e){return this instanceof c?void d.call(this,e,g.UNZIP):new c(e)}function d(e,t){if(this._opts=e=e||{},this._chunkSize=e.chunkSize||r.Z_DEFAULT_CHUNK,p.call(this,e),e.flush&&e.flush!==g.Z_NO_FLUSH&&e.flush!==g.Z_PARTIAL_FLUSH&&e.flush!==g.Z_SYNC_FLUSH&&e.flush!==g.Z_FULL_FLUSH&&e.flush!==g.Z_FINISH&&e.flush!==g.Z_BLOCK)throw new Error("Invalid flush flag: "+e.flush);if(this._flushFlag=e.flush||g.Z_NO_FLUSH,e.chunkSize&&(e.chunkSize<r.Z_MIN_CHUNK||e.chunkSize>r.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+e.chunkSize);if(e.windowBits&&(e.windowBits<r.Z_MIN_WINDOWBITS||e.windowBits>r.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+e.windowBits);if(e.level&&(e.level<r.Z_MIN_LEVEL||e.level>r.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+e.level);if(e.memLevel&&(e.memLevel<r.Z_MIN_MEMLEVEL||e.memLevel>r.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+e.memLevel);if(e.strategy&&e.strategy!=r.Z_FILTERED&&e.strategy!=r.Z_HUFFMAN_ONLY&&e.strategy!=r.Z_RLE&&e.strategy!=r.Z_FIXED&&e.strategy!=r.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+e.strategy);if(e.dictionary&&!n.isBuffer(e.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._binding=new g.Zlib(t);var i=this;this._hadError=!1,this._binding.onerror=function(e,t){i._binding=null,i._hadError=!0;var n=new Error(e);n.errno=t,n.code=r.codes[t],i.emit("error",n)};var a=r.Z_DEFAULT_COMPRESSION;"number"==typeof e.level&&(a=e.level);var s=r.Z_DEFAULT_STRATEGY;"number"==typeof e.strategy&&(s=e.strategy),this._binding.init(e.windowBits||r.Z_DEFAULT_WINDOWBITS,a,e.memLevel||r.Z_DEFAULT_MEMLEVEL,s,e.dictionary),this._buffer=new n(this._chunkSize),this._offset=0,this._closed=!1,this._level=a,this._strategy=s,this.once("end",this.close)}var p=e("_stream_transform"),g=e("./binding"),_=e("util"),v=e("assert").ok;g.Z_MIN_WINDOWBITS=8,g.Z_MAX_WINDOWBITS=15,g.Z_DEFAULT_WINDOWBITS=15,g.Z_MIN_CHUNK=64,g.Z_MAX_CHUNK=1/0,g.Z_DEFAULT_CHUNK=16384,g.Z_MIN_MEMLEVEL=1,g.Z_MAX_MEMLEVEL=9,g.Z_DEFAULT_MEMLEVEL=8,g.Z_MIN_LEVEL=-1,g.Z_MAX_LEVEL=9,g.Z_DEFAULT_LEVEL=g.Z_DEFAULT_COMPRESSION,Object.keys(g).forEach(function(e){e.match(/^Z/)&&(r[e]=g[e])}),r.codes={Z_OK:g.Z_OK,Z_STREAM_END:g.Z_STREAM_END,Z_NEED_DICT:g.Z_NEED_DICT,Z_ERRNO:g.Z_ERRNO,Z_STREAM_ERROR:g.Z_STREAM_ERROR,Z_DATA_ERROR:g.Z_DATA_ERROR,Z_MEM_ERROR:g.Z_MEM_ERROR,Z_BUF_ERROR:g.Z_BUF_ERROR,Z_VERSION_ERROR:g.Z_VERSION_ERROR},Object.keys(r.codes).forEach(function(e){r.codes[r.codes[e]]=e}),r.Deflate=s,r.Inflate=o,r.Gzip=u,r.Gunzip=f,r.DeflateRaw=l,r.InflateRaw=h,r.Unzip=c,r.createDeflate=function(e){return new s(e)},r.createInflate=function(e){return new o(e)},r.createDeflateRaw=function(e){return new l(e)},r.createInflateRaw=function(e){return new h(e)},r.createGzip=function(e){return new u(e)},r.createGunzip=function(e){return new f(e)},r.createUnzip=function(e){return new c(e)},r.deflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new s(t),e,r)},r.deflateSync=function(e,t){return a(new s(t),e)},r.gzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new u(t),e,r)},r.gzipSync=function(e,t){return a(new u(t),e)},r.deflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new l(t),e,r)},r.deflateRawSync=function(e,t){return a(new l(t),e)},r.unzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new c(t),e,r)},r.unzipSync=function(e,t){return a(new c(t),e)},r.inflate=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new o(t),e,r)},r.inflateSync=function(e,t){return a(new o(t),e)},r.gunzip=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new f(t),e,r)},r.gunzipSync=function(e,t){return a(new f(t),e)},r.inflateRaw=function(e,t,r){return"function"==typeof t&&(r=t,t={}),i(new h(t),e,r)},r.inflateRawSync=function(e,t){return a(new h(t),e)},_.inherits(d,p),d.prototype.params=function(e,n,i){if(e<r.Z_MIN_LEVEL||e>r.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+e);if(n!=r.Z_FILTERED&&n!=r.Z_HUFFMAN_ONLY&&n!=r.Z_RLE&&n!=r.Z_FIXED&&n!=r.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+n);if(this._level!==e||this._strategy!==n){var a=this;this.flush(g.Z_SYNC_FLUSH,function(){a._binding.params(e,n),a._hadError||(a._level=e,a._strategy=n,i&&i())})}else t.nextTick(i)},d.prototype.reset=function(){return this._binding.reset()},d.prototype._flush=function(e){this._transform(new n(0),"",e)},d.prototype.flush=function(e,r){var i=this._writableState;if(("function"==typeof e||void 0===e&&!r)&&(r=e,e=g.Z_FULL_FLUSH),i.ended)r&&t.nextTick(r);else if(i.ending)r&&this.once("end",r);else if(i.needDrain){var a=this;this.once("drain",function(){a.flush(r)})}else this._flushFlag=e,this.write(new n(0),"",r)},d.prototype.close=function(e){if(e&&t.nextTick(e),!this._closed){this._closed=!0,this._binding.close();var r=this;t.nextTick(function(){r.emit("close")})}},d.prototype._transform=function(e,t,r){var i,a=this._writableState,s=a.ending||a.ended,o=s&&(!e||a.length===e.length);if(null===!e&&!n.isBuffer(e))return r(new Error("invalid input"));o?i=g.Z_FINISH:(i=this._flushFlag,e.length>=a.length&&(this._flushFlag=this._opts.flush||g.Z_NO_FLUSH));this._processChunk(e,i,r)},d.prototype._processChunk=function(e,t,r){function i(l,d){if(!u._hadError){var p=s-d;if(v(p>=0,"have should not go down"),p>0){var g=u._buffer.slice(u._offset,u._offset+p);u._offset+=p,f?u.push(g):(h.push(g),c+=g.length)}if((0===d||u._offset>=u._chunkSize)&&(s=u._chunkSize,u._offset=0,u._buffer=new n(u._chunkSize)),0===d){if(o+=a-l,a=l,!f)return!0;var _=u._binding.write(t,e,o,a,u._buffer,u._offset,u._chunkSize);return _.callback=i,void(_.buffer=e)}return f?void r():!1}}var a=e&&e.length,s=this._chunkSize-this._offset,o=0,u=this,f="function"==typeof r;if(!f){var l,h=[],c=0;this.on("error",function(e){l=e});do var d=this._binding.writeSync(t,e,o,a,this._buffer,this._offset,s);while(!this._hadError&&i(d[0],d[1]));if(this._hadError)throw l;var p=n.concat(h,c);return this.close(),p}var g=this._binding.write(t,e,o,a,this._buffer,this._offset,s);g.buffer=e,g.callback=i},_.inherits(s,d),_.inherits(o,d),_.inherits(u,d),_.inherits(f,d),_.inherits(l,d),_.inherits(h,d),_.inherits(c,d)}).call(this,e("_process"),e("buffer").Buffer)},{"./binding":5,_process:33,_stream_transform:51,assert:2,buffer:7,util:57}],7:[function(e,t,r){(function(t){"use strict";function n(){try{var e=new Uint8Array(1);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(t){return!1}}function i(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e){return this instanceof a?(a.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof e?s(this,e):"string"==typeof e?o(this,e,arguments.length>1?arguments[1]:"utf8"):u(this,e)):arguments.length>1?new a(e,arguments[1]):new a(e)}function s(e,t){if(e=g(e,0>t?0:0|_(t)),!a.TYPED_ARRAY_SUPPORT)for(var r=0;t>r;r++)e[r]=0;return e}function o(e,t,r){("string"!=typeof r||""===r)&&(r="utf8");var n=0|b(t,r);return e=g(e,n),e.write(t,r),e}function u(e,t){if(a.isBuffer(t))return f(e,t);if(X(t))return l(e,t);if(null==t)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(t.buffer instanceof ArrayBuffer)return h(e,t);if(t instanceof ArrayBuffer)return c(e,t)}return t.length?d(e,t):p(e,t)}function f(e,t){var r=0|_(t.length);return e=g(e,r),t.copy(e,0,0,r),e}function l(e,t){var r=0|_(t.length);e=g(e,r);for(var n=0;r>n;n+=1)e[n]=255&t[n];return e}function h(e,t){var r=0|_(t.length);e=g(e,r);for(var n=0;r>n;n+=1)e[n]=255&t[n];return e}function c(e,t){return t.byteLength,a.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=a.prototype):e=h(e,new Uint8Array(t)),e}function d(e,t){var r=0|_(t.length);e=g(e,r);for(var n=0;r>n;n+=1)e[n]=255&t[n];return e}function p(e,t){var r,n=0;"Buffer"===t.type&&X(t.data)&&(r=t.data,n=0|_(r.length)),e=g(e,n);for(var i=0;n>i;i+=1)e[i]=255&r[i];return e}function g(e,t){a.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t),e.__proto__=a.prototype):e.length=t;var r=0!==t&&t<=a.poolSize>>>1;return r&&(e.parent=K),e}function _(e){if(e>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|e}function v(e,t){if(!(this instanceof v))return new v(e,t);var r=new a(e,t);return delete r.parent,r}function b(e,t){"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"binary":case"raw":case"raws":return r;case"utf8":case"utf-8":return Y(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return W(e).length;default:if(n)return Y(e).length;t=(""+t).toLowerCase(),n=!0}}function m(e,t,r){var n=!1;if(t=0|t,r=void 0===r||r===1/0?this.length:0|r,e||(e="utf8"),0>t&&(t=0),r>this.length&&(r=this.length),t>=r)return"";for(;;)switch(e){case"hex":return T(this,t,r);case"utf8":case"utf-8":return R(this,t,r);case"ascii":return z(this,t,r);case"binary":return B(this,t,r);case"base64":return S(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function w(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var a=t.length;if(a%2!==0)throw new Error("Invalid hex string");n>a/2&&(n=a/2);for(var s=0;n>s;s++){var o=parseInt(t.substr(2*s,2),16);if(isNaN(o))throw new Error("Invalid hex string");e[r+s]=o}return s}function y(e,t,r,n){return q(Y(t,e.length-r),e,r,n)}function k(e,t,r,n){return q(H(t),e,r,n)}function E(e,t,r,n){return k(e,t,r,n)}function A(e,t,r,n){return q(W(t),e,r,n)}function x(e,t,r,n){return q(G(t,e.length-r),e,r,n)}function S(e,t,r){return 0===t&&r===e.length?J.fromByteArray(e):J.fromByteArray(e.slice(t,r))}function R(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;r>i;){var a=e[i],s=null,o=a>239?4:a>223?3:a>191?2:1;if(r>=i+o){var u,f,l,h;switch(o){case 1:128>a&&(s=a);break;case 2:u=e[i+1],128===(192&u)&&(h=(31&a)<<6|63&u,h>127&&(s=h));break;case 3:u=e[i+1],f=e[i+2],128===(192&u)&&128===(192&f)&&(h=(15&a)<<12|(63&u)<<6|63&f,h>2047&&(55296>h||h>57343)&&(s=h));break;case 4:u=e[i+1],f=e[i+2],l=e[i+3],128===(192&u)&&128===(192&f)&&128===(192&l)&&(h=(15&a)<<18|(63&u)<<12|(63&f)<<6|63&l,h>65535&&1114112>h&&(s=h))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return L(n)}function L(e){var t=e.length;if(V>=t)return String.fromCharCode.apply(String,e);for(var r="",n=0;t>n;)r+=String.fromCharCode.apply(String,e.slice(n,n+=V));return r}function z(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;r>i;i++)n+=String.fromCharCode(127&e[i]);return n}function B(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;r>i;i++)n+=String.fromCharCode(e[i]);return n}function T(e,t,r){var n=e.length;(!t||0>t)&&(t=0),(!r||0>r||r>n)&&(r=n);for(var i="",a=t;r>a;a++)i+=F(e[a]);return i}function M(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function I(e,t,r){if(e%1!==0||0>e)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function j(e,t,r,n,i,s){if(!a.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(t>i||s>t)throw new RangeError("value is out of bounds");if(r+n>e.length)throw new RangeError("index out of range")}function O(e,t,r,n){0>t&&(t=65535+t+1);for(var i=0,a=Math.min(e.length-r,2);a>i;i++)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function U(e,t,r,n){0>t&&(t=4294967295+t+1);for(var i=0,a=Math.min(e.length-r,4);a>i;i++)e[r+i]=t>>>8*(n?i:3-i)&255}function N(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("index out of range");if(0>r)throw new RangeError("index out of range")}function D(e,t,r,n,i){return i||N(e,t,r,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(e,t,r,n,23,4),r+4}function Z(e,t,r,n,i){return i||N(e,t,r,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(e,t,r,n,52,8),r+8}function C(e){if(e=P(e).replace($,""),e.length<2)return"";for(;e.length%4!==0;)e+="=";return e}function P(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function F(e){return 16>e?"0"+e.toString(16):e.toString(16)}function Y(e,t){t=t||1/0;for(var r,n=e.length,i=null,a=[],s=0;n>s;s++){if(r=e.charCodeAt(s),r>55295&&57344>r){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(56320>r){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,128>r){if((t-=1)<0)break;a.push(r)}else if(2048>r){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(65536>r){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(1114112>r))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function H(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t}function G(e,t){for(var r,n,i,a=[],s=0;s<e.length&&!((t-=2)<0);s++)r=e.charCodeAt(s),n=r>>8,i=r%256,a.push(i),a.push(n);return a}function W(e){return J.toByteArray(C(e))}function q(e,t,r,n){for(var i=0;n>i&&!(i+r>=t.length||i>=e.length);i++)t[i+r]=e[i];return i}var J=e("base64-js"),Q=e("ieee754"),X=e("isarray");r.Buffer=a,r.SlowBuffer=v,r.INSPECT_MAX_BYTES=50,a.poolSize=8192;var K={};a.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:n(),a._augment=function(e){return e.__proto__=a.prototype,e},a.TYPED_ARRAY_SUPPORT?(a.prototype.__proto__=Uint8Array.prototype,a.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&a[Symbol.species]===a&&Object.defineProperty(a,Symbol.species,{value:null,configurable:!0})):(a.prototype.length=void 0,a.prototype.parent=void 0),a.isBuffer=function(e){return!(null==e||!e._isBuffer)},a.compare=function(e,t){if(!a.isBuffer(e)||!a.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);s>i&&e[i]===t[i];)++i;return i!==s&&(r=e[i],n=t[i]),n>r?-1:r>n?1:0},a.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(e,t){if(!X(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new a(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;r++)t+=e[r].length;var n=new a(t),i=0;for(r=0;r<e.length;r++){var s=e[r];s.copy(n,i),i+=s.length}return n},a.byteLength=b,a.prototype._isBuffer=!0,a.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?R(this,0,e):m.apply(this,arguments)},a.prototype.equals=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===a.compare(this,e)},a.prototype.inspect=function(){var e="",t=r.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"},a.prototype.compare=function(e){if(!a.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:a.compare(this,e)},a.prototype.indexOf=function(e,t){function r(e,t,r){for(var n=-1,i=0;r+i<e.length;i++)if(e[r+i]===t[-1===n?0:i-n]){if(-1===n&&(n=i),i-n+1===t.length)return r+n}else n=-1;return-1}if(t>2147483647?t=2147483647:-2147483648>t&&(t=-2147483648),t>>=0,0===this.length)return-1;if(t>=this.length)return-1;if(0>t&&(t=Math.max(this.length+t,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,t);if(a.isBuffer(e))return r(this,e,t);if("number"==typeof e)return a.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,t):r(this,[e],t);throw new TypeError("val must be string, number or Buffer")},a.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t=0|t,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0);else{var i=n;n=t,t=0|r,r=i}var a=this.length-t;if((void 0===r||r>a)&&(r=a),e.length>0&&(0>r||0>t)||t>this.length)throw new RangeError("attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return w(this,e,t,r);case"utf8":case"utf-8":return y(this,e,t,r);case"ascii":return k(this,e,t,r);case"binary":return E(this,e,t,r);case"base64":return A(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,t,r);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var V=4096;a.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),0>t?(t+=r,0>t&&(t=0)):t>r&&(t=r),e>t&&(t=e);var n;if(a.TYPED_ARRAY_SUPPORT)n=this.subarray(e,t),n.__proto__=a.prototype;else{var i=t-e;n=new a(i,void 0);for(var s=0;i>s;s++)n[s]=this[s+e]}return n.length&&(n.parent=this.parent||this),n},a.prototype.readUIntLE=function(e,t,r){e=0|e,t=0|t,r||I(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},a.prototype.readUIntBE=function(e,t,r){e=0|e,t=0|t,r||I(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},a.prototype.readUInt8=function(e,t){return t||I(e,1,this.length),this[e]},a.prototype.readUInt16LE=function(e,t){return t||I(e,2,this.length),this[e]|this[e+1]<<8},a.prototype.readUInt16BE=function(e,t){return t||I(e,2,this.length),this[e]<<8|this[e+1]},a.prototype.readUInt32LE=function(e,t){return t||I(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},a.prototype.readUInt32BE=function(e,t){return t||I(e,4,this.length),
16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},a.prototype.readIntLE=function(e,t,r){e=0|e,t=0|t,r||I(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},a.prototype.readIntBE=function(e,t,r){e=0|e,t=0|t,r||I(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return i*=128,a>=i&&(a-=Math.pow(2,8*t)),a},a.prototype.readInt8=function(e,t){return t||I(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},a.prototype.readInt16LE=function(e,t){t||I(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt16BE=function(e,t){t||I(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},a.prototype.readInt32LE=function(e,t){return t||I(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},a.prototype.readInt32BE=function(e,t){return t||I(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},a.prototype.readFloatLE=function(e,t){return t||I(e,4,this.length),Q.read(this,e,!0,23,4)},a.prototype.readFloatBE=function(e,t){return t||I(e,4,this.length),Q.read(this,e,!1,23,4)},a.prototype.readDoubleLE=function(e,t){return t||I(e,8,this.length),Q.read(this,e,!0,52,8)},a.prototype.readDoubleBE=function(e,t){return t||I(e,8,this.length),Q.read(this,e,!1,52,8)},a.prototype.writeUIntLE=function(e,t,r,n){e=+e,t=0|t,r=0|r,n||j(this,e,t,r,Math.pow(2,8*r),0);var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},a.prototype.writeUIntBE=function(e,t,r,n){e=+e,t=0|t,r=0|r,n||j(this,e,t,r,Math.pow(2,8*r),0);var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},a.prototype.writeUInt8=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,1,255,0),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},a.prototype.writeUInt16LE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):O(this,e,t,!0),t+2},a.prototype.writeUInt16BE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,2,65535,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):O(this,e,t,!1),t+2},a.prototype.writeUInt32LE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):U(this,e,t,!0),t+4},a.prototype.writeUInt32BE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,4,4294967295,0),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):U(this,e,t,!1),t+4},a.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t=0|t,!n){var i=Math.pow(2,8*r-1);j(this,e,t,r,i-1,-i)}var a=0,s=1,o=0>e?1:0;for(this[t]=255&e;++a<r&&(s*=256);)this[t+a]=(e/s>>0)-o&255;return t+r},a.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t=0|t,!n){var i=Math.pow(2,8*r-1);j(this,e,t,r,i-1,-i)}var a=r-1,s=1,o=0>e?1:0;for(this[t+a]=255&e;--a>=0&&(s*=256);)this[t+a]=(e/s>>0)-o&255;return t+r},a.prototype.writeInt8=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,1,127,-128),a.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[t]=255&e,t+1},a.prototype.writeInt16LE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):O(this,e,t,!0),t+2},a.prototype.writeInt16BE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,2,32767,-32768),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):O(this,e,t,!1),t+2},a.prototype.writeInt32LE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,4,2147483647,-2147483648),a.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):U(this,e,t,!0),t+4},a.prototype.writeInt32BE=function(e,t,r){return e=+e,t=0|t,r||j(this,e,t,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),a.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):U(this,e,t,!1),t+4},a.prototype.writeFloatLE=function(e,t,r){return D(this,e,t,!0,r)},a.prototype.writeFloatBE=function(e,t,r){return D(this,e,t,!1,r)},a.prototype.writeDoubleLE=function(e,t,r){return Z(this,e,t,!0,r)},a.prototype.writeDoubleBE=function(e,t,r){return Z(this,e,t,!1,r)},a.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&r>n&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(0>t)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>n)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,s=n-r;if(this===e&&t>r&&n>t)for(i=s-1;i>=0;i--)e[i+t]=this[i+r];else if(1e3>s||!a.TYPED_ARRAY_SUPPORT)for(i=0;s>i;i++)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t);return s},a.prototype.fill=function(e,t,r){if(e||(e=0),t||(t=0),r||(r=this.length),t>r)throw new RangeError("end < start");if(r!==t&&0!==this.length){if(0>t||t>=this.length)throw new RangeError("start out of bounds");if(0>r||r>this.length)throw new RangeError("end out of bounds");var n;if("number"==typeof e)for(n=t;r>n;n++)this[n]=e;else{var i=Y(e.toString()),a=i.length;for(n=t;r>n;n++)this[n]=i[n%a]}return this}};var $=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":3,ieee754:11,isarray:8}],8:[function(e,t,r){var n={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},{}],9:[function(e,t,r){(function(e){function t(e){return Array.isArray?Array.isArray(e):"[object Array]"===_(e)}function n(e){return"boolean"==typeof e}function i(e){return null===e}function a(e){return null==e}function s(e){return"number"==typeof e}function o(e){return"string"==typeof e}function u(e){return"symbol"==typeof e}function f(e){return void 0===e}function l(e){return"[object RegExp]"===_(e)}function h(e){return"object"==typeof e&&null!==e}function c(e){return"[object Date]"===_(e)}function d(e){return"[object Error]"===_(e)||e instanceof Error}function p(e){return"function"==typeof e}function g(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function _(e){return Object.prototype.toString.call(e)}r.isArray=t,r.isBoolean=n,r.isNull=i,r.isNullOrUndefined=a,r.isNumber=s,r.isString=o,r.isSymbol=u,r.isUndefined=f,r.isRegExp=l,r.isObject=h,r.isDate=c,r.isError=d,r.isFunction=p,r.isPrimitive=g,r.isBuffer=e.isBuffer}).call(this,{isBuffer:e("../../is-buffer/index.js")})},{"../../is-buffer/index.js":14}],10:[function(e,t,r){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function a(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!a(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,r,n,a,u,f;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],o(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),r.apply(this,a)}else if(s(r))for(a=Array.prototype.slice.call(arguments,1),f=r.slice(),n=f.length,u=0;n>u;u++)f[u].apply(this,a);return!0},n.prototype.addListener=function(e,t){var r;if(!i(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var r,n,a,o;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],a=r.length,n=-1,r===t||i(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(o=a;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){n=o;break}if(0>n)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],i(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(i(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}],11:[function(e,t,r){r.read=function(e,t,r,n,i){var a,s,o=8*i-n-1,u=(1<<o)-1,f=u>>1,l=-7,h=r?i-1:0,c=r?-1:1,d=e[t+h];for(h+=c,a=d&(1<<-l)-1,d>>=-l,l+=o;l>0;a=256*a+e[t+h],h+=c,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=n;l>0;s=256*s+e[t+h],h+=c,l-=8);if(0===a)a=1-f;else{if(a===u)return s?NaN:(d?-1:1)*(1/0);s+=Math.pow(2,n),a-=f}return(d?-1:1)*s*Math.pow(2,a-n)},r.write=function(e,t,r,n,i,a){var s,o,u,f=8*a-i-1,l=(1<<f)-1,h=l>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:a-1,p=n?1:-1,g=0>t||0===t&&0>1/t?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-s))<1&&(s--,u*=2),t+=s+h>=1?c/u:c*Math.pow(2,1-h),t*u>=2&&(s++,u/=2),s+h>=l?(o=0,s=l):s+h>=1?(o=(t*u-1)*Math.pow(2,i),s+=h):(o=t*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;e[r+d]=255&o,d+=p,o/=256,i-=8);for(s=s<<i|o,f+=i;f>0;e[r+d]=255&s,d+=p,s/=256,f-=8);e[r+d-p]|=128*g}},{}],12:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],13:[function(e,t,r){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var r=document.createElement("style");r.setAttribute("type","text/css"),"textContent"in r?r.textContent=e:r.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(r,i.childNodes[0]):i.appendChild(r)}}},{}],14:[function(e,t,r){t.exports=function(e){return!(null==e||!(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)))}},{}],15:[function(e,t,r){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],16:[function(e,t,r){"use strict";var n=e("./lib/utils/common").assign,i=e("./lib/deflate"),a=e("./lib/inflate"),s=e("./lib/zlib/constants"),o={};n(o,i,a,s),t.exports=o},{"./lib/deflate":17,"./lib/inflate":18,"./lib/utils/common":19,"./lib/zlib/constants":22}],17:[function(e,t,r){"use strict";function n(e,t){var r=new w(t);if(r.push(e,!0),r.err)throw r.msg;return r.result}function i(e,t){return t=t||{},t.raw=!0,n(e,t)}function a(e,t){return t=t||{},t.gzip=!0,n(e,t)}var s=e("./zlib/deflate.js"),o=e("./utils/common"),u=e("./utils/strings"),f=e("./zlib/messages"),l=e("./zlib/zstream"),h=Object.prototype.toString,c=0,d=4,p=0,g=1,_=2,v=-1,b=0,m=8,w=function(e){this.options=o.assign({level:v,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var r=s.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==p)throw new Error(f[r]);t.header&&s.deflateSetHeader(this.strm,t.header)};w.prototype.push=function(e,t){var r,n,i=this.strm,a=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:t===!0?d:c,"string"==typeof e?i.input=u.string2buf(e):"[object ArrayBuffer]"===h.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(a),i.next_out=0,i.avail_out=a),r=s.deflate(i,n),r!==g&&r!==p)return this.onEnd(r),this.ended=!0,!1;(0===i.avail_out||0===i.avail_in&&(n===d||n===_))&&("string"===this.options.to?this.onData(u.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((i.avail_in>0||0===i.avail_out)&&r!==g);return n===d?(r=s.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===p):n===_?(this.onEnd(p),i.avail_out=0,!0):!0},w.prototype.onData=function(e){this.chunks.push(e)},w.prototype.onEnd=function(e){e===p&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=w,r.deflate=n,r.deflateRaw=i,r.gzip=a},{"./utils/common":19,"./utils/strings":20,"./zlib/deflate.js":24,"./zlib/messages":29,"./zlib/zstream":31}],18:[function(e,t,r){"use strict";function n(e,t){var r=new d(t);if(r.push(e,!0),r.err)throw r.msg;return r.result}function i(e,t){return t=t||{},t.raw=!0,n(e,t)}var a=e("./zlib/inflate.js"),s=e("./utils/common"),o=e("./utils/strings"),u=e("./zlib/constants"),f=e("./zlib/messages"),l=e("./zlib/zstream"),h=e("./zlib/gzheader"),c=Object.prototype.toString,d=function(e){this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0===(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var r=a.inflateInit2(this.strm,t.windowBits);if(r!==u.Z_OK)throw new Error(f[r]);this.header=new h,a.inflateGetHeader(this.strm,this.header)};d.prototype.push=function(e,t){var r,n,i,f,l,h=this.strm,d=this.options.chunkSize,p=!1;if(this.ended)return!1;n=t===~~t?t:t===!0?u.Z_FINISH:u.Z_NO_FLUSH,"string"==typeof e?h.input=o.binstring2buf(e):"[object ArrayBuffer]"===c.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new s.Buf8(d),h.next_out=0,h.avail_out=d),r=a.inflate(h,u.Z_NO_FLUSH),r===u.Z_BUF_ERROR&&p===!0&&(r=u.Z_OK,p=!1),r!==u.Z_STREAM_END&&r!==u.Z_OK)return this.onEnd(r),this.ended=!0,!1;h.next_out&&(0===h.avail_out||r===u.Z_STREAM_END||0===h.avail_in&&(n===u.Z_FINISH||n===u.Z_SYNC_FLUSH))&&("string"===this.options.to?(i=o.utf8border(h.output,h.next_out),f=h.next_out-i,l=o.buf2string(h.output,i),h.next_out=f,h.avail_out=d-f,f&&s.arraySet(h.output,h.output,i,f,0),this.onData(l)):this.onData(s.shrinkBuf(h.output,h.next_out))),0===h.avail_in&&0===h.avail_out&&(p=!0)}while((h.avail_in>0||0===h.avail_out)&&r!==u.Z_STREAM_END);return r===u.Z_STREAM_END&&(n=u.Z_FINISH),n===u.Z_FINISH?(r=a.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===u.Z_OK):n===u.Z_SYNC_FLUSH?(this.onEnd(u.Z_OK),h.avail_out=0,!0):!0},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===u.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=d,r.inflate=n,r.inflateRaw=i,r.ungzip=n},{"./utils/common":19,"./utils/strings":20,"./zlib/constants":22,"./zlib/gzheader":25,"./zlib/inflate.js":27,"./zlib/messages":29,"./zlib/zstream":31}],19:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)return void e.set(t.subarray(r,r+n),i);for(var a=0;n>a;a++)e[i+a]=t[r+a]},flattenChunks:function(e){var t,r,n,i,a,s;for(n=0,t=0,r=e.length;r>t;t++)n+=e[t].length;for(s=new Uint8Array(n),i=0,t=0,r=e.length;r>t;t++)a=e[t],s.set(a,i),i+=a.length;return s}},a={arraySet:function(e,t,r,n,i){for(var a=0;n>a;a++)e[i+a]=t[r+a]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(n)},{}],20:[function(e,t,r){"use strict";function n(e,t){if(65537>t&&(e.subarray&&s||!e.subarray&&a))return String.fromCharCode.apply(null,i.shrinkBuf(e,t));for(var r="",n=0;t>n;n++)r+=String.fromCharCode(e[n]);return r}var i=e("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(o){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(o){s=!1}for(var u=new i.Buf8(256),f=0;256>f;f++)u[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,a,s,o=e.length,u=0;for(a=0;o>a;a++)r=e.charCodeAt(a),55296===(64512&r)&&o>a+1&&(n=e.charCodeAt(a+1),56320===(64512&n)&&(r=65536+(r-55296<<10)+(n-56320),a++)),u+=128>r?1:2048>r?2:65536>r?3:4;for(t=new i.Buf8(u),s=0,a=0;u>s;a++)r=e.charCodeAt(a),55296===(64512&r)&&o>a+1&&(n=e.charCodeAt(a+1),56320===(64512&n)&&(r=65536+(r-55296<<10)+(n-56320),a++)),128>r?t[s++]=r:2048>r?(t[s++]=192|r>>>6,t[s++]=128|63&r):65536>r?(t[s++]=224|r>>>12,t[s++]=128|r>>>6&63,t[s++]=128|63&r):(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63,t[s++]=128|r>>>6&63,t[s++]=128|63&r);return t},r.buf2binstring=function(e){return n(e,e.length)},r.binstring2buf=function(e){for(var t=new i.Buf8(e.length),r=0,n=t.length;n>r;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,i,a,s,o=t||e.length,f=new Array(2*o);for(i=0,r=0;o>r;)if(a=e[r++],128>a)f[i++]=a;else if(s=u[a],s>4)f[i++]=65533,r+=s-1;else{for(a&=2===s?31:3===s?15:7;s>1&&o>r;)a=a<<6|63&e[r++],s--;s>1?f[i++]=65533:65536>a?f[i++]=a:(a-=65536,f[i++]=55296|a>>10&1023,f[i++]=56320|1023&a)}return n(f,i)},r.utf8border=function(e,t){var r;for(t=t||e.length,t>e.length&&(t=e.length),r=t-1;r>=0&&128===(192&e[r]);)r--;return 0>r?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":19}],21:[function(e,t,r){"use strict";function n(e,t,r,n){for(var i=65535&e|0,a=e>>>16&65535|0,s=0;0!==r;){s=r>2e3?2e3:r,r-=s;do i=i+t[n++]|0,a=a+i|0;while(--s);i%=65521,a%=65521}return i|a<<16|0}t.exports=n},{}],22:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],23:[function(e,t,r){"use strict";function n(){for(var e,t=[],r=0;256>r;r++){e=r;for(var n=0;8>n;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}function i(e,t,r,n){var i=a,s=n+r;e=-1^e;for(var o=n;s>o;o++)e=e>>>8^i[255&(e^t[o])];return-1^e}var a=n();t.exports=i},{}],24:[function(e,t,r){"use strict";function n(e,t){return e.msg=M[t],t}function i(e){return(e<<1)-(e>4?9:0)}function a(e){for(var t=e.length;--t>=0;)e[t]=0}function s(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(L.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function o(e,t){z._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,s(e.strm)}function u(e,t){e.pending_buf[e.pending++]=t}function f(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function l(e,t,r,n){var i=e.avail_in;return i>n&&(i=n),0===i?0:(e.avail_in-=i,L.arraySet(t,e.input,e.next_in,i,r),1===e.state.wrap?e.adler=B(e.adler,t,i,r):2===e.state.wrap&&(e.adler=T(e.adler,t,i,r)),e.next_in+=i,e.total_in+=i,i)}function h(e,t){var r,n,i=e.max_chain_length,a=e.strstart,s=e.prev_length,o=e.nice_match,u=e.strstart>e.w_size-fe?e.strstart-(e.w_size-fe):0,f=e.window,l=e.w_mask,h=e.prev,c=e.strstart+ue,d=f[a+s-1],p=f[a+s];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do if(r=t,f[r+s]===p&&f[r+s-1]===d&&f[r]===f[a]&&f[++r]===f[a+1]){a+=2,r++;do;while(f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&f[++a]===f[++r]&&c>a);if(n=ue-(c-a),a=c-ue,n>s){if(e.match_start=t,s=n,n>=o)break;d=f[a+s-1],p=f[a+s]}}while((t=h[t&l])>u&&0!==--i);return s<=e.lookahead?s:e.lookahead}function c(e){var t,r,n,i,a,s=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=s+(s-fe)){L.arraySet(e.window,e.window,s,s,0),e.match_start-=s,e.strstart-=s,e.block_start-=s,r=e.hash_size,t=r;do n=e.head[--t],e.head[t]=n>=s?n-s:0;while(--r);r=s,t=r;do n=e.prev[--t],e.prev[t]=n>=s?n-s:0;while(--r);i+=s}if(0===e.strm.avail_in)break;if(r=l(e.strm,e.window,e.strstart+e.lookahead,i),e.lookahead+=r,e.lookahead+e.insert>=oe)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[a+oe-1])&e.hash_mask,e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<oe)););}while(e.lookahead<fe&&0!==e.strm.avail_in)}function d(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(c(e),0===e.lookahead&&t===I)return be;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,o(e,!1),0===e.strm.avail_out))return be;if(e.strstart-e.block_start>=e.w_size-fe&&(o(e,!1),0===e.strm.avail_out))return be}return e.insert=0,t===U?(o(e,!0),0===e.strm.avail_out?we:ye):e.strstart>e.block_start&&(o(e,!1),0===e.strm.avail_out)?be:be}function p(e,t){for(var r,n;;){if(e.lookahead<fe){if(c(e),e.lookahead<fe&&t===I)return be;if(0===e.lookahead)break}if(r=0,e.lookahead>=oe&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-fe&&(e.match_length=h(e,r)),e.match_length>=oe)if(n=z._tr_tally(e,e.strstart-e.match_start,e.match_length-oe),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=oe){e.match_length--;do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(0!==--e.match_length);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=z._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(o(e,!1),0===e.strm.avail_out))return be}return e.insert=e.strstart<oe-1?e.strstart:oe-1,t===U?(o(e,!0),0===e.strm.avail_out?we:ye):e.last_lit&&(o(e,!1),0===e.strm.avail_out)?be:me}function g(e,t){for(var r,n,i;;){if(e.lookahead<fe){if(c(e),e.lookahead<fe&&t===I)return be;if(0===e.lookahead)break}if(r=0,e.lookahead>=oe&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=oe-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-fe&&(e.match_length=h(e,r),e.match_length<=5&&(e.strategy===H||e.match_length===oe&&e.strstart-e.match_start>4096)&&(e.match_length=oe-1)),e.prev_length>=oe&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-oe,n=z._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-oe),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+oe-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(0!==--e.prev_length);if(e.match_available=0,e.match_length=oe-1,e.strstart++,n&&(o(e,!1),0===e.strm.avail_out))return be}else if(e.match_available){if(n=z._tr_tally(e,0,e.window[e.strstart-1]),n&&o(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return be}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=z._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<oe-1?e.strstart:oe-1,t===U?(o(e,!0),0===e.strm.avail_out?we:ye):e.last_lit&&(o(e,!1),0===e.strm.avail_out)?be:me}function _(e,t){for(var r,n,i,a,s=e.window;;){if(e.lookahead<=ue){if(c(e),e.lookahead<=ue&&t===I)return be;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=oe&&e.strstart>0&&(i=e.strstart-1,n=s[i],n===s[++i]&&n===s[++i]&&n===s[++i])){a=e.strstart+ue;do;while(n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&n===s[++i]&&a>i);e.match_length=ue-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=oe?(r=z._tr_tally(e,1,e.match_length-oe),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=z._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(o(e,!1),0===e.strm.avail_out))return be}return e.insert=0,t===U?(o(e,!0),0===e.strm.avail_out?we:ye):e.last_lit&&(o(e,!1),0===e.strm.avail_out)?be:me}function v(e,t){for(var r;;){if(0===e.lookahead&&(c(e),0===e.lookahead)){if(t===I)return be;break}if(e.match_length=0,r=z._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(o(e,!1),0===e.strm.avail_out))return be}return e.insert=0,t===U?(o(e,!0),0===e.strm.avail_out?we:ye):e.last_lit&&(o(e,!1),0===e.strm.avail_out)?be:me}function b(e){e.window_size=2*e.w_size,a(e.head),e.max_lazy_match=R[e.level].max_lazy,e.good_match=R[e.level].good_length,e.nice_match=R[e.level].nice_length,e.max_chain_length=R[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=oe-1,e.match_available=0,e.ins_h=0}function m(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=X,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new L.Buf16(2*ae),this.dyn_dtree=new L.Buf16(2*(2*ne+1)),this.bl_tree=new L.Buf16(2*(2*ie+1)),a(this.dyn_ltree),a(this.dyn_dtree),a(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new L.Buf16(se+1),this.heap=new L.Buf16(2*re+1),a(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new L.Buf16(2*re+1),a(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function w(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=Q,t=e.state,t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?he:_e,e.adler=2===t.wrap?0:1,t.last_flush=I,z._tr_init(t),D):n(e,C)}function y(e){var t=w(e);return t===D&&b(e.state),t}function k(e,t){return e&&e.state?2!==e.state.wrap?C:(e.state.gzhead=t,D):C}function E(e,t,r,i,a,s){if(!e)return C;var o=1;if(t===Y&&(t=6),0>i?(o=0,i=-i):i>15&&(o=2,i-=16),1>a||a>K||r!==X||8>i||i>15||0>t||t>9||0>s||s>q)return n(e,C);8===i&&(i=9);var u=new m;return e.state=u,u.strm=e,u.wrap=o,u.gzhead=null,u.w_bits=i,u.w_size=1<<u.w_bits,u.w_mask=u.w_size-1,u.hash_bits=a+7,u.hash_size=1<<u.hash_bits,u.hash_mask=u.hash_size-1,u.hash_shift=~~((u.hash_bits+oe-1)/oe),u.window=new L.Buf8(2*u.w_size),u.head=new L.Buf16(u.hash_size),u.prev=new L.Buf16(u.w_size),u.lit_bufsize=1<<a+6,u.pending_buf_size=4*u.lit_bufsize,u.pending_buf=new L.Buf8(u.pending_buf_size),u.d_buf=u.lit_bufsize>>1,u.l_buf=3*u.lit_bufsize,u.level=t,u.strategy=s,u.method=r,y(e)}function A(e,t){return E(e,t,X,V,$,J)}function x(e,t){var r,o,l,h;if(!e||!e.state||t>N||0>t)return e?n(e,C):C;if(o=e.state,!e.output||!e.input&&0!==e.avail_in||o.status===ve&&t!==U)return n(e,0===e.avail_out?F:C);if(o.strm=e,r=o.last_flush,o.last_flush=t,o.status===he)if(2===o.wrap)e.adler=0,u(o,31),u(o,139),u(o,8),o.gzhead?(u(o,(o.gzhead.text?1:0)+(o.gzhead.hcrc?2:0)+(o.gzhead.extra?4:0)+(o.gzhead.name?8:0)+(o.gzhead.comment?16:0)),u(o,255&o.gzhead.time),u(o,o.gzhead.time>>8&255),u(o,o.gzhead.time>>16&255),u(o,o.gzhead.time>>24&255),u(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),u(o,255&o.gzhead.os),o.gzhead.extra&&o.gzhead.extra.length&&(u(o,255&o.gzhead.extra.length),u(o,o.gzhead.extra.length>>8&255)),o.gzhead.hcrc&&(e.adler=T(e.adler,o.pending_buf,o.pending,0)),o.gzindex=0,o.status=ce):(u(o,0),u(o,0),u(o,0),u(o,0),u(o,0),u(o,9===o.level?2:o.strategy>=G||o.level<2?4:0),u(o,ke),o.status=_e);else{var c=X+(o.w_bits-8<<4)<<8,d=-1;d=o.strategy>=G||o.level<2?0:o.level<6?1:6===o.level?2:3,c|=d<<6,0!==o.strstart&&(c|=le),c+=31-c%31,o.status=_e,f(o,c),0!==o.strstart&&(f(o,e.adler>>>16),f(o,65535&e.adler)),e.adler=1}if(o.status===ce)if(o.gzhead.extra){for(l=o.pending;o.gzindex<(65535&o.gzhead.extra.length)&&(o.pending!==o.pending_buf_size||(o.gzhead.hcrc&&o.pending>l&&(e.adler=T(e.adler,o.pending_buf,o.pending-l,l)),s(e),l=o.pending,o.pending!==o.pending_buf_size));)u(o,255&o.gzhead.extra[o.gzindex]),o.gzindex++;o.gzhead.hcrc&&o.pending>l&&(e.adler=T(e.adler,o.pending_buf,o.pending-l,l)),o.gzindex===o.gzhead.extra.length&&(o.gzindex=0,o.status=de)}else o.status=de;if(o.status===de)if(o.gzhead.name){l=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>l&&(e.adler=T(e.adler,o.pending_buf,o.pending-l,l)),s(e),l=o.pending,o.pending===o.pending_buf_size)){h=1;break}h=o.gzindex<o.gzhead.name.length?255&o.gzhead.name.charCodeAt(o.gzindex++):0,u(o,h)}while(0!==h);o.gzhead.hcrc&&o.pending>l&&(e.adler=T(e.adler,o.pending_buf,o.pending-l,l)),0===h&&(o.gzindex=0,o.status=pe)}else o.status=pe;if(o.status===pe)if(o.gzhead.comment){l=o.pending;do{if(o.pending===o.pending_buf_size&&(o.gzhead.hcrc&&o.pending>l&&(e.adler=T(e.adler,o.pending_buf,o.pending-l,l)),s(e),l=o.pending,o.pending===o.pending_buf_size)){h=1;break}h=o.gzindex<o.gzhead.comment.length?255&o.gzhead.comment.charCodeAt(o.gzindex++):0,u(o,h)}while(0!==h);o.gzhead.hcrc&&o.pending>l&&(e.adler=T(e.adler,o.pending_buf,o.pending-l,l)),
0===h&&(o.status=ge)}else o.status=ge;if(o.status===ge&&(o.gzhead.hcrc?(o.pending+2>o.pending_buf_size&&s(e),o.pending+2<=o.pending_buf_size&&(u(o,255&e.adler),u(o,e.adler>>8&255),e.adler=0,o.status=_e)):o.status=_e),0!==o.pending){if(s(e),0===e.avail_out)return o.last_flush=-1,D}else if(0===e.avail_in&&i(t)<=i(r)&&t!==U)return n(e,F);if(o.status===ve&&0!==e.avail_in)return n(e,F);if(0!==e.avail_in||0!==o.lookahead||t!==I&&o.status!==ve){var p=o.strategy===G?v(o,t):o.strategy===W?_(o,t):R[o.level].func(o,t);if((p===we||p===ye)&&(o.status=ve),p===be||p===we)return 0===e.avail_out&&(o.last_flush=-1),D;if(p===me&&(t===j?z._tr_align(o):t!==N&&(z._tr_stored_block(o,0,0,!1),t===O&&(a(o.head),0===o.lookahead&&(o.strstart=0,o.block_start=0,o.insert=0))),s(e),0===e.avail_out))return o.last_flush=-1,D}return t!==U?D:o.wrap<=0?Z:(2===o.wrap?(u(o,255&e.adler),u(o,e.adler>>8&255),u(o,e.adler>>16&255),u(o,e.adler>>24&255),u(o,255&e.total_in),u(o,e.total_in>>8&255),u(o,e.total_in>>16&255),u(o,e.total_in>>24&255)):(f(o,e.adler>>>16),f(o,65535&e.adler)),s(e),o.wrap>0&&(o.wrap=-o.wrap),0!==o.pending?D:Z)}function S(e){var t;return e&&e.state?(t=e.state.status,t!==he&&t!==ce&&t!==de&&t!==pe&&t!==ge&&t!==_e&&t!==ve?n(e,C):(e.state=null,t===_e?n(e,P):D)):C}var R,L=e("../utils/common"),z=e("./trees"),B=e("./adler32"),T=e("./crc32"),M=e("./messages"),I=0,j=1,O=3,U=4,N=5,D=0,Z=1,C=-2,P=-3,F=-5,Y=-1,H=1,G=2,W=3,q=4,J=0,Q=2,X=8,K=9,V=15,$=8,ee=29,te=256,re=te+1+ee,ne=30,ie=19,ae=2*re+1,se=15,oe=3,ue=258,fe=ue+oe+1,le=32,he=42,ce=69,de=73,pe=91,ge=103,_e=113,ve=666,be=1,me=2,we=3,ye=4,ke=3,Ee=function(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i};R=[new Ee(0,0,0,0,d),new Ee(4,4,8,4,p),new Ee(4,5,16,8,p),new Ee(4,6,32,32,p),new Ee(4,4,16,16,g),new Ee(8,16,32,32,g),new Ee(8,16,128,128,g),new Ee(8,32,128,256,g),new Ee(32,128,258,1024,g),new Ee(32,258,258,4096,g)],r.deflateInit=A,r.deflateInit2=E,r.deflateReset=y,r.deflateResetKeep=w,r.deflateSetHeader=k,r.deflate=x,r.deflateEnd=S,r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":19,"./adler32":21,"./crc32":23,"./messages":29,"./trees":30}],25:[function(e,t,r){"use strict";function n(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}t.exports=n},{}],26:[function(e,t,r){"use strict";var n=30,i=12;t.exports=function(e,t){var r,a,s,o,u,f,l,h,c,d,p,g,_,v,b,m,w,y,k,E,A,x,S,R,L;r=e.state,a=e.next_in,R=e.input,s=a+(e.avail_in-5),o=e.next_out,L=e.output,u=o-(t-e.avail_out),f=o+(e.avail_out-257),l=r.dmax,h=r.wsize,c=r.whave,d=r.wnext,p=r.window,g=r.hold,_=r.bits,v=r.lencode,b=r.distcode,m=(1<<r.lenbits)-1,w=(1<<r.distbits)-1;e:do{15>_&&(g+=R[a++]<<_,_+=8,g+=R[a++]<<_,_+=8),y=v[g&m];t:for(;;){if(k=y>>>24,g>>>=k,_-=k,k=y>>>16&255,0===k)L[o++]=65535&y;else{if(!(16&k)){if(0===(64&k)){y=v[(65535&y)+(g&(1<<k)-1)];continue t}if(32&k){r.mode=i;break e}e.msg="invalid literal/length code",r.mode=n;break e}E=65535&y,k&=15,k&&(k>_&&(g+=R[a++]<<_,_+=8),E+=g&(1<<k)-1,g>>>=k,_-=k),15>_&&(g+=R[a++]<<_,_+=8,g+=R[a++]<<_,_+=8),y=b[g&w];r:for(;;){if(k=y>>>24,g>>>=k,_-=k,k=y>>>16&255,!(16&k)){if(0===(64&k)){y=b[(65535&y)+(g&(1<<k)-1)];continue r}e.msg="invalid distance code",r.mode=n;break e}if(A=65535&y,k&=15,k>_&&(g+=R[a++]<<_,_+=8,k>_&&(g+=R[a++]<<_,_+=8)),A+=g&(1<<k)-1,A>l){e.msg="invalid distance too far back",r.mode=n;break e}if(g>>>=k,_-=k,k=o-u,A>k){if(k=A-k,k>c&&r.sane){e.msg="invalid distance too far back",r.mode=n;break e}if(x=0,S=p,0===d){if(x+=h-k,E>k){E-=k;do L[o++]=p[x++];while(--k);x=o-A,S=L}}else if(k>d){if(x+=h+d-k,k-=d,E>k){E-=k;do L[o++]=p[x++];while(--k);if(x=0,E>d){k=d,E-=k;do L[o++]=p[x++];while(--k);x=o-A,S=L}}}else if(x+=d-k,E>k){E-=k;do L[o++]=p[x++];while(--k);x=o-A,S=L}for(;E>2;)L[o++]=S[x++],L[o++]=S[x++],L[o++]=S[x++],E-=3;E&&(L[o++]=S[x++],E>1&&(L[o++]=S[x++]))}else{x=o-A;do L[o++]=L[x++],L[o++]=L[x++],L[o++]=L[x++],E-=3;while(E>2);E&&(L[o++]=L[x++],E>1&&(L[o++]=L[x++]))}break}}break}}while(s>a&&f>o);E=_>>3,a-=E,_-=E<<3,g&=(1<<_)-1,e.next_in=a,e.next_out=o,e.avail_in=s>a?5+(s-a):5-(a-s),e.avail_out=f>o?257+(f-o):257-(o-f),r.hold=g,r.bits=_}},{}],27:[function(e,t,r){"use strict";function n(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function i(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new v.Buf16(320),this.work=new v.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=U,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new v.Buf32(pe),t.distcode=t.distdyn=new v.Buf32(ge),t.sane=1,t.back=-1,L):T}function s(e){var t;return e&&e.state?(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,a(e)):T}function o(e,t){var r,n;return e&&e.state?(n=e.state,0>t?(r=0,t=-t):(r=(t>>4)+1,48>t&&(t&=15)),t&&(8>t||t>15)?T:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,s(e))):T}function u(e,t){var r,n;return e?(n=new i,e.state=n,n.window=null,r=o(e,t),r!==L&&(e.state=null),r):T}function f(e){return u(e,ve)}function l(e){if(be){var t;for(g=new v.Buf32(512),_=new v.Buf32(32),t=0;144>t;)e.lens[t++]=8;for(;256>t;)e.lens[t++]=9;for(;280>t;)e.lens[t++]=7;for(;288>t;)e.lens[t++]=8;for(y(E,e.lens,0,288,g,0,e.work,{bits:9}),t=0;32>t;)e.lens[t++]=5;y(A,e.lens,0,32,_,0,e.work,{bits:5}),be=!1}e.lencode=g,e.lenbits=9,e.distcode=_,e.distbits=5}function h(e,t,r,n){var i,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new v.Buf8(a.wsize)),n>=a.wsize?(v.arraySet(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(i=a.wsize-a.wnext,i>n&&(i=n),v.arraySet(a.window,t,r-n,i,a.wnext),n-=i,n?(v.arraySet(a.window,t,r-n,n,0),a.wnext=n,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=i))),0}function c(e,t){var r,i,a,s,o,u,f,c,d,p,g,_,pe,ge,_e,ve,be,me,we,ye,ke,Ee,Ae,xe,Se=0,Re=new v.Buf8(4),Le=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return T;r=e.state,r.mode===q&&(r.mode=J),o=e.next_out,a=e.output,f=e.avail_out,s=e.next_in,i=e.input,u=e.avail_in,c=r.hold,d=r.bits,p=u,g=f,Ee=L;e:for(;;)switch(r.mode){case U:if(0===r.wrap){r.mode=J;break}for(;16>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(2&r.wrap&&35615===c){r.check=0,Re[0]=255&c,Re[1]=c>>>8&255,r.check=m(r.check,Re,2,0),c=0,d=0,r.mode=N;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&c)<<8)+(c>>8))%31){e.msg="incorrect header check",r.mode=he;break}if((15&c)!==O){e.msg="unknown compression method",r.mode=he;break}if(c>>>=4,d-=4,ke=(15&c)+8,0===r.wbits)r.wbits=ke;else if(ke>r.wbits){e.msg="invalid window size",r.mode=he;break}r.dmax=1<<ke,e.adler=r.check=1,r.mode=512&c?G:q,c=0,d=0;break;case N:for(;16>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(r.flags=c,(255&r.flags)!==O){e.msg="unknown compression method",r.mode=he;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=he;break}r.head&&(r.head.text=c>>8&1),512&r.flags&&(Re[0]=255&c,Re[1]=c>>>8&255,r.check=m(r.check,Re,2,0)),c=0,d=0,r.mode=D;case D:for(;32>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}r.head&&(r.head.time=c),512&r.flags&&(Re[0]=255&c,Re[1]=c>>>8&255,Re[2]=c>>>16&255,Re[3]=c>>>24&255,r.check=m(r.check,Re,4,0)),c=0,d=0,r.mode=Z;case Z:for(;16>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}r.head&&(r.head.xflags=255&c,r.head.os=c>>8),512&r.flags&&(Re[0]=255&c,Re[1]=c>>>8&255,r.check=m(r.check,Re,2,0)),c=0,d=0,r.mode=C;case C:if(1024&r.flags){for(;16>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}r.length=c,r.head&&(r.head.extra_len=c),512&r.flags&&(Re[0]=255&c,Re[1]=c>>>8&255,r.check=m(r.check,Re,2,0)),c=0,d=0}else r.head&&(r.head.extra=null);r.mode=P;case P:if(1024&r.flags&&(_=r.length,_>u&&(_=u),_&&(r.head&&(ke=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),v.arraySet(r.head.extra,i,s,_,ke)),512&r.flags&&(r.check=m(r.check,i,_,s)),u-=_,s+=_,r.length-=_),r.length))break e;r.length=0,r.mode=F;case F:if(2048&r.flags){if(0===u)break e;_=0;do ke=i[s+_++],r.head&&ke&&r.length<65536&&(r.head.name+=String.fromCharCode(ke));while(ke&&u>_);if(512&r.flags&&(r.check=m(r.check,i,_,s)),u-=_,s+=_,ke)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=Y;case Y:if(4096&r.flags){if(0===u)break e;_=0;do ke=i[s+_++],r.head&&ke&&r.length<65536&&(r.head.comment+=String.fromCharCode(ke));while(ke&&u>_);if(512&r.flags&&(r.check=m(r.check,i,_,s)),u-=_,s+=_,ke)break e}else r.head&&(r.head.comment=null);r.mode=H;case H:if(512&r.flags){for(;16>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(c!==(65535&r.check)){e.msg="header crc mismatch",r.mode=he;break}c=0,d=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=q;break;case G:for(;32>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}e.adler=r.check=n(c),c=0,d=0,r.mode=W;case W:if(0===r.havedict)return e.next_out=o,e.avail_out=f,e.next_in=s,e.avail_in=u,r.hold=c,r.bits=d,B;e.adler=r.check=1,r.mode=q;case q:if(t===S||t===R)break e;case J:if(r.last){c>>>=7&d,d-=7&d,r.mode=ue;break}for(;3>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}switch(r.last=1&c,c>>>=1,d-=1,3&c){case 0:r.mode=Q;break;case 1:if(l(r),r.mode=te,t===R){c>>>=2,d-=2;break e}break;case 2:r.mode=V;break;case 3:e.msg="invalid block type",r.mode=he}c>>>=2,d-=2;break;case Q:for(c>>>=7&d,d-=7&d;32>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if((65535&c)!==(c>>>16^65535)){e.msg="invalid stored block lengths",r.mode=he;break}if(r.length=65535&c,c=0,d=0,r.mode=X,t===R)break e;case X:r.mode=K;case K:if(_=r.length){if(_>u&&(_=u),_>f&&(_=f),0===_)break e;v.arraySet(a,i,s,_,o),u-=_,s+=_,f-=_,o+=_,r.length-=_;break}r.mode=q;break;case V:for(;14>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(r.nlen=(31&c)+257,c>>>=5,d-=5,r.ndist=(31&c)+1,c>>>=5,d-=5,r.ncode=(15&c)+4,c>>>=4,d-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=he;break}r.have=0,r.mode=$;case $:for(;r.have<r.ncode;){for(;3>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}r.lens[Le[r.have++]]=7&c,c>>>=3,d-=3}for(;r.have<19;)r.lens[Le[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,Ae={bits:r.lenbits},Ee=y(k,r.lens,0,19,r.lencode,0,r.work,Ae),r.lenbits=Ae.bits,Ee){e.msg="invalid code lengths set",r.mode=he;break}r.have=0,r.mode=ee;case ee:for(;r.have<r.nlen+r.ndist;){for(;Se=r.lencode[c&(1<<r.lenbits)-1],_e=Se>>>24,ve=Se>>>16&255,be=65535&Se,!(d>=_e);){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(16>be)c>>>=_e,d-=_e,r.lens[r.have++]=be;else{if(16===be){for(xe=_e+2;xe>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(c>>>=_e,d-=_e,0===r.have){e.msg="invalid bit length repeat",r.mode=he;break}ke=r.lens[r.have-1],_=3+(3&c),c>>>=2,d-=2}else if(17===be){for(xe=_e+3;xe>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}c>>>=_e,d-=_e,ke=0,_=3+(7&c),c>>>=3,d-=3}else{for(xe=_e+7;xe>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}c>>>=_e,d-=_e,ke=0,_=11+(127&c),c>>>=7,d-=7}if(r.have+_>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=he;break}for(;_--;)r.lens[r.have++]=ke}}if(r.mode===he)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=he;break}if(r.lenbits=9,Ae={bits:r.lenbits},Ee=y(E,r.lens,0,r.nlen,r.lencode,0,r.work,Ae),r.lenbits=Ae.bits,Ee){e.msg="invalid literal/lengths set",r.mode=he;break}if(r.distbits=6,r.distcode=r.distdyn,Ae={bits:r.distbits},Ee=y(A,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,Ae),r.distbits=Ae.bits,Ee){e.msg="invalid distances set",r.mode=he;break}if(r.mode=te,t===R)break e;case te:r.mode=re;case re:if(u>=6&&f>=258){e.next_out=o,e.avail_out=f,e.next_in=s,e.avail_in=u,r.hold=c,r.bits=d,w(e,g),o=e.next_out,a=e.output,f=e.avail_out,s=e.next_in,i=e.input,u=e.avail_in,c=r.hold,d=r.bits,r.mode===q&&(r.back=-1);break}for(r.back=0;Se=r.lencode[c&(1<<r.lenbits)-1],_e=Se>>>24,ve=Se>>>16&255,be=65535&Se,!(d>=_e);){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(ve&&0===(240&ve)){for(me=_e,we=ve,ye=be;Se=r.lencode[ye+((c&(1<<me+we)-1)>>me)],_e=Se>>>24,ve=Se>>>16&255,be=65535&Se,!(d>=me+_e);){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}c>>>=me,d-=me,r.back+=me}if(c>>>=_e,d-=_e,r.back+=_e,r.length=be,0===ve){r.mode=oe;break}if(32&ve){r.back=-1,r.mode=q;break}if(64&ve){e.msg="invalid literal/length code",r.mode=he;break}r.extra=15&ve,r.mode=ne;case ne:if(r.extra){for(xe=r.extra;xe>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}r.length+=c&(1<<r.extra)-1,c>>>=r.extra,d-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=ie;case ie:for(;Se=r.distcode[c&(1<<r.distbits)-1],_e=Se>>>24,ve=Se>>>16&255,be=65535&Se,!(d>=_e);){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(0===(240&ve)){for(me=_e,we=ve,ye=be;Se=r.distcode[ye+((c&(1<<me+we)-1)>>me)],_e=Se>>>24,ve=Se>>>16&255,be=65535&Se,!(d>=me+_e);){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}c>>>=me,d-=me,r.back+=me}if(c>>>=_e,d-=_e,r.back+=_e,64&ve){e.msg="invalid distance code",r.mode=he;break}r.offset=be,r.extra=15&ve,r.mode=ae;case ae:if(r.extra){for(xe=r.extra;xe>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}r.offset+=c&(1<<r.extra)-1,c>>>=r.extra,d-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=he;break}r.mode=se;case se:if(0===f)break e;if(_=g-f,r.offset>_){if(_=r.offset-_,_>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=he;break}_>r.wnext?(_-=r.wnext,pe=r.wsize-_):pe=r.wnext-_,_>r.length&&(_=r.length),ge=r.window}else ge=a,pe=o-r.offset,_=r.length;_>f&&(_=f),f-=_,r.length-=_;do a[o++]=ge[pe++];while(--_);0===r.length&&(r.mode=re);break;case oe:if(0===f)break e;a[o++]=r.length,f--,r.mode=re;break;case ue:if(r.wrap){for(;32>d;){if(0===u)break e;u--,c|=i[s++]<<d,d+=8}if(g-=f,e.total_out+=g,r.total+=g,g&&(e.adler=r.check=r.flags?m(r.check,a,g,o-g):b(r.check,a,g,o-g)),g=f,(r.flags?c:n(c))!==r.check){e.msg="incorrect data check",r.mode=he;break}c=0,d=0}r.mode=fe;case fe:if(r.wrap&&r.flags){for(;32>d;){if(0===u)break e;u--,c+=i[s++]<<d,d+=8}if(c!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=he;break}c=0,d=0}r.mode=le;case le:Ee=z;break e;case he:Ee=M;break e;case ce:return I;case de:default:return T}return e.next_out=o,e.avail_out=f,e.next_in=s,e.avail_in=u,r.hold=c,r.bits=d,(r.wsize||g!==e.avail_out&&r.mode<he&&(r.mode<ue||t!==x))&&h(e,e.output,e.next_out,g-e.avail_out)?(r.mode=ce,I):(p-=e.avail_in,g-=e.avail_out,e.total_in+=p,e.total_out+=g,r.total+=g,r.wrap&&g&&(e.adler=r.check=r.flags?m(r.check,a,g,e.next_out-g):b(r.check,a,g,e.next_out-g)),e.data_type=r.bits+(r.last?64:0)+(r.mode===q?128:0)+(r.mode===te||r.mode===X?256:0),(0===p&&0===g||t===x)&&Ee===L&&(Ee=j),Ee)}function d(e){if(!e||!e.state)return T;var t=e.state;return t.window&&(t.window=null),e.state=null,L}function p(e,t){var r;return e&&e.state?(r=e.state,0===(2&r.wrap)?T:(r.head=t,t.done=!1,L)):T}var g,_,v=e("../utils/common"),b=e("./adler32"),m=e("./crc32"),w=e("./inffast"),y=e("./inftrees"),k=0,E=1,A=2,x=4,S=5,R=6,L=0,z=1,B=2,T=-2,M=-3,I=-4,j=-5,O=8,U=1,N=2,D=3,Z=4,C=5,P=6,F=7,Y=8,H=9,G=10,W=11,q=12,J=13,Q=14,X=15,K=16,V=17,$=18,ee=19,te=20,re=21,ne=22,ie=23,ae=24,se=25,oe=26,ue=27,fe=28,le=29,he=30,ce=31,de=32,pe=852,ge=592,_e=15,ve=_e,be=!0;r.inflateReset=s,r.inflateReset2=o,r.inflateResetKeep=a,r.inflateInit=f,r.inflateInit2=u,r.inflate=c,r.inflateEnd=d,r.inflateGetHeader=p,r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":19,"./adler32":21,"./crc32":23,"./inffast":26,"./inftrees":28}],28:[function(e,t,r){"use strict";var n=e("../utils/common"),i=15,a=852,s=592,o=0,u=1,f=2,l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],h=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,p,g,_,v,b){var m,w,y,k,E,A,x,S,R,L=b.bits,z=0,B=0,T=0,M=0,I=0,j=0,O=0,U=0,N=0,D=0,Z=null,C=0,P=new n.Buf16(i+1),F=new n.Buf16(i+1),Y=null,H=0;for(z=0;i>=z;z++)P[z]=0;for(B=0;p>B;B++)P[t[r+B]]++;for(I=L,M=i;M>=1&&0===P[M];M--);if(I>M&&(I=M),0===M)return g[_++]=20971520,g[_++]=20971520,b.bits=1,0;for(T=1;M>T&&0===P[T];T++);for(T>I&&(I=T),U=1,z=1;i>=z;z++)if(U<<=1,U-=P[z],0>U)return-1;if(U>0&&(e===o||1!==M))return-1;for(F[1]=0,z=1;i>z;z++)F[z+1]=F[z]+P[z];for(B=0;p>B;B++)0!==t[r+B]&&(v[F[t[r+B]]++]=B);if(e===o?(Z=Y=v,A=19):e===u?(Z=l,C-=257,Y=h,H-=257,A=256):(Z=c,Y=d,A=-1),D=0,B=0,z=T,E=_,j=I,O=0,y=-1,N=1<<I,k=N-1,e===u&&N>a||e===f&&N>s)return 1;for(var G=0;;){G++,x=z-O,v[B]<A?(S=0,R=v[B]):v[B]>A?(S=Y[H+v[B]],R=Z[C+v[B]]):(S=96,R=0),m=1<<z-O,w=1<<j,T=w;do w-=m,g[E+(D>>O)+w]=x<<24|S<<16|R|0;while(0!==w);for(m=1<<z-1;D&m;)m>>=1;if(0!==m?(D&=m-1,D+=m):D=0,B++,0===--P[z]){if(z===M)break;z=t[r+v[B]]}if(z>I&&(D&k)!==y){for(0===O&&(O=I),E+=T,j=z-O,U=1<<j;M>j+O&&(U-=P[j+O],!(0>=U));)j++,U<<=1;if(N+=1<<j,e===u&&N>a||e===f&&N>s)return 1;y=D&k,g[y]=I<<24|j<<16|E-_|0}}return 0!==D&&(g[E+D]=z-O<<24|64<<16|0),b.bits=I,0}},{"../utils/common":19}],29:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],30:[function(e,t,r){"use strict";function n(e){for(var t=e.length;--t>=0;)e[t]=0}function i(e){return 256>e?se[e]:se[256+(e>>>7)]}function a(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function s(e,t,r){e.bi_valid>q-r?(e.bi_buf|=t<<e.bi_valid&65535,a(e,e.bi_buf),e.bi_buf=t>>q-e.bi_valid,e.bi_valid+=r-q):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function o(e,t,r){s(e,r[2*t],r[2*t+1])}function u(e,t){var r=0;do r|=1&e,e>>>=1,r<<=1;while(--t>0);return r>>>1}function f(e){16===e.bi_valid?(a(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}function l(e,t){var r,n,i,a,s,o,u=t.dyn_tree,f=t.max_code,l=t.stat_desc.static_tree,h=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,g=0;for(a=0;W>=a;a++)e.bl_count[a]=0;for(u[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;G>r;r++)n=e.heap[r],a=u[2*u[2*n+1]+1]+1,a>p&&(a=p,g++),u[2*n+1]=a,n>f||(e.bl_count[a]++,s=0,n>=d&&(s=c[n-d]),o=u[2*n],e.opt_len+=o*(a+s),h&&(e.static_len+=o*(l[2*n+1]+s)));if(0!==g){do{for(a=p-1;0===e.bl_count[a];)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[p]--,g-=2}while(g>0);for(a=p;0!==a;a--)for(n=e.bl_count[a];0!==n;)i=e.heap[--r],i>f||(u[2*i+1]!==a&&(e.opt_len+=(a-u[2*i+1])*u[2*i],u[2*i+1]=a),n--)}}function h(e,t,r){var n,i,a=new Array(W+1),s=0;for(n=1;W>=n;n++)a[n]=s=s+r[n-1]<<1;for(i=0;t>=i;i++){var o=e[2*i+1];0!==o&&(e[2*i]=u(a[o]++,o))}}function c(){var e,t,r,n,i,a=new Array(W+1);for(r=0,n=0;C-1>n;n++)for(ue[n]=r,e=0;e<1<<$[n];e++)oe[r++]=n;for(oe[r-1]=n,i=0,n=0;16>n;n++)for(fe[n]=i,e=0;e<1<<ee[n];e++)se[i++]=n;for(i>>=7;Y>n;n++)for(fe[n]=i<<7,e=0;e<1<<ee[n]-7;e++)se[256+i++]=n;for(t=0;W>=t;t++)a[t]=0;for(e=0;143>=e;)ie[2*e+1]=8,e++,a[8]++;for(;255>=e;)ie[2*e+1]=9,e++,a[9]++;for(;279>=e;)ie[2*e+1]=7,e++,a[7]++;for(;287>=e;)ie[2*e+1]=8,e++,a[8]++;for(h(ie,F+1,a),e=0;Y>e;e++)ae[2*e+1]=5,ae[2*e]=u(e,5);le=new de(ie,$,P+1,F,W),he=new de(ae,ee,0,Y,W),ce=new de(new Array(0),te,0,H,J)}function d(e){var t;for(t=0;F>t;t++)e.dyn_ltree[2*t]=0;for(t=0;Y>t;t++)e.dyn_dtree[2*t]=0;for(t=0;H>t;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*Q]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function p(e){e.bi_valid>8?a(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function g(e,t,r,n){p(e),n&&(a(e,r),a(e,~r)),B.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}function _(e,t,r,n){var i=2*t,a=2*r;return e[i]<e[a]||e[i]===e[a]&&n[t]<=n[r]}function v(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&_(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!_(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function b(e,t,r){var n,a,u,f,l=0;if(0!==e.last_lit)do n=e.pending_buf[e.d_buf+2*l]<<8|e.pending_buf[e.d_buf+2*l+1],a=e.pending_buf[e.l_buf+l],l++,0===n?o(e,a,t):(u=oe[a],o(e,u+P+1,t),f=$[u],0!==f&&(a-=ue[u],s(e,a,f)),n--,u=i(n),o(e,u,r),f=ee[u],0!==f&&(n-=fe[u],s(e,n,f)));while(l<e.last_lit);o(e,Q,t)}function m(e,t){var r,n,i,a=t.dyn_tree,s=t.stat_desc.static_tree,o=t.stat_desc.has_stree,u=t.stat_desc.elems,f=-1;for(e.heap_len=0,e.heap_max=G,r=0;u>r;r++)0!==a[2*r]?(e.heap[++e.heap_len]=f=r,e.depth[r]=0):a[2*r+1]=0;for(;e.heap_len<2;)i=e.heap[++e.heap_len]=2>f?++f:0,a[2*i]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=s[2*i+1]);for(t.max_code=f,r=e.heap_len>>1;r>=1;r--)v(e,a,r);i=u;do r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],v(e,a,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,a[2*i]=a[2*r]+a[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,a[2*r+1]=a[2*n+1]=i,e.heap[1]=i++,v(e,a,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],l(e,t),h(a,f,e.bl_count)}function w(e,t,r){var n,i,a=-1,s=t[1],o=0,u=7,f=4;for(0===s&&(u=138,f=3),t[2*(r+1)+1]=65535,n=0;r>=n;n++)i=s,s=t[2*(n+1)+1],++o<u&&i===s||(f>o?e.bl_tree[2*i]+=o:0!==i?(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*X]++):10>=o?e.bl_tree[2*K]++:e.bl_tree[2*V]++,o=0,a=i,0===s?(u=138,f=3):i===s?(u=6,f=3):(u=7,f=4))}function y(e,t,r){var n,i,a=-1,u=t[1],f=0,l=7,h=4;for(0===u&&(l=138,h=3),n=0;r>=n;n++)if(i=u,u=t[2*(n+1)+1],!(++f<l&&i===u)){if(h>f){do o(e,i,e.bl_tree);while(0!==--f)}else 0!==i?(i!==a&&(o(e,i,e.bl_tree),f--),o(e,X,e.bl_tree),s(e,f-3,2)):10>=f?(o(e,K,e.bl_tree),s(e,f-3,3)):(o(e,V,e.bl_tree),s(e,f-11,7));f=0,a=i,0===u?(l=138,h=3):i===u?(l=6,h=3):(l=7,h=4)}}function k(e){var t;for(w(e,e.dyn_ltree,e.l_desc.max_code),w(e,e.dyn_dtree,e.d_desc.max_code),m(e,e.bl_desc),t=H-1;t>=3&&0===e.bl_tree[2*re[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}function E(e,t,r,n){var i;for(s(e,t-257,5),s(e,r-1,5),s(e,n-4,4),i=0;n>i;i++)s(e,e.bl_tree[2*re[i]+1],3);y(e,e.dyn_ltree,t-1),y(e,e.dyn_dtree,r-1)}function A(e){var t,r=4093624447;for(t=0;31>=t;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return M;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return I;for(t=32;P>t;t++)if(0!==e.dyn_ltree[2*t])return I;return M}function x(e){ge||(c(),ge=!0),e.l_desc=new pe(e.dyn_ltree,le),e.d_desc=new pe(e.dyn_dtree,he),e.bl_desc=new pe(e.bl_tree,ce),e.bi_buf=0,e.bi_valid=0,d(e)}function S(e,t,r,n){s(e,(O<<1)+(n?1:0),3),g(e,t,r,!0)}function R(e){s(e,U<<1,3),o(e,Q,ie),f(e)}function L(e,t,r,n){var i,a,o=0;e.level>0?(e.strm.data_type===j&&(e.strm.data_type=A(e)),m(e,e.l_desc),m(e,e.d_desc),o=k(e),i=e.opt_len+3+7>>>3,a=e.static_len+3+7>>>3,i>=a&&(i=a)):i=a=r+5,i>=r+4&&-1!==t?S(e,t,r,n):e.strategy===T||a===i?(s(e,(U<<1)+(n?1:0),3),b(e,ie,ae)):(s(e,(N<<1)+(n?1:0),3),E(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),b(e,e.dyn_ltree,e.dyn_dtree)),d(e),n&&p(e)}function z(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(oe[r]+P+1)]++,e.dyn_dtree[2*i(t)]++),e.last_lit===e.lit_bufsize-1}var B=e("../utils/common"),T=4,M=0,I=1,j=2,O=0,U=1,N=2,D=3,Z=258,C=29,P=256,F=P+1+C,Y=30,H=19,G=2*F+1,W=15,q=16,J=7,Q=256,X=16,K=17,V=18,$=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ee=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],te=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ne=512,ie=new Array(2*(F+2));n(ie);var ae=new Array(2*Y);n(ae);var se=new Array(ne);n(se);var oe=new Array(Z-D+1);n(oe);var ue=new Array(C);n(ue);var fe=new Array(Y);n(fe);var le,he,ce,de=function(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length},pe=function(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t},ge=!1;r._tr_init=x,r._tr_stored_block=S,r._tr_flush_block=L,r._tr_tally=z,r._tr_align=R},{"../utils/common":19}],31:[function(e,t,r){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=n},{}],32:[function(e,t,r){(function(e){"use strict";function r(t){for(var r=new Array(arguments.length-1),n=0;n<r.length;)r[n++]=arguments[n];e.nextTick(function(){t.apply(null,r)})}!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports=r:t.exports=e.nextTick}).call(this,e("_process"))},{_process:33}],33:[function(e,t,r){function n(){l=!1,o.length?f=o.concat(f):h=-1,f.length&&i()}function i(){if(!l){var e=setTimeout(n);l=!0;for(var t=f.length;t;){for(o=f,f=[];++h<t;)o&&o[h].run();h=-1,t=f.length}o=null,l=!1,clearTimeout(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var o,u=t.exports={},f=[],l=!1,h=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new a(e,t)),1!==f.length||l||setTimeout(i,0)},a.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=s,u.addListener=s,u.once=s,u.off=s,u.removeListener=s,u.removeAllListeners=s,u.emit=s,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],34:[function(e,t,r){(function(r,n){"use strict";!function(){function i(e,t){for(var r=t.length,n=0;r>n;n++)e=s[255&(e^t[n])]^e>>>8;return e}function a(){for(var e=arguments.length,t=-1,r=0;e>r;r++)t=i(t,n(arguments[r]));return t=(-1^t)>>>0}if("arm"===r.arch)return void(t.exports=e("./crc32buffer"));var s=[];!function(){for(var e=0;256>e;e++){for(var t=e,r=0;8>r;r++)1&t?t=3988292384^t>>>1:t>>>=1;s[e]=t>>>0}}(),t.exports=a}()}).call(this,e("_process"),e("buffer").Buffer)},{"./crc32buffer":35,_process:33,buffer:7}],35:[function(e,t,r){(function(e){"use strict";function r(e,t){for(var r=t.length,n=0;r>n;n++){var a=i[e[3]^t[n]];e[3]=a[3]^e[2],e[2]=a[2]^e[1],e[1]=a[1]^e[0],e[0]=a[0]}}function n(){var t=arguments.length,n=e(4);n.fill(255);for(var i=0;t>i;i++)r(n,e(arguments[i]));return n[0]=255^n[0],n[1]=255^n[1],n[2]=255^n[2],n[3]=255^n[3],n.readUInt32BE(0)}for(var i=[],a=0;256>a;a++){var s=i[a]=e(4);s.writeUInt32BE(a,0);for(var o=0;8>o;o++){var u=1&s[0],f=1&s[1],l=1&s[2],h=1&s[3];s[0]=s[0]>>1^(h?237:0),s[1]=s[1]>>1^(h?184:0)^(u?128:0),s[2]=s[2]>>1^(h?131:0)^(f?128:0),s[3]=s[3]>>1^(h?32:0)^(l?128:0)}}t.exports=n}).call(this,e("buffer").Buffer)},{buffer:7}],36:[function(e,t,r){(function(e){"use strict";function r(e,t,r){for(var n=1<<t-1;n;n>>>=1)e.push(n&r?1:0)}function n(e){for(var t=e.length,n=[],i=0;t>i;i++)r(n,8,e[i]);var a={},s=[0,1,0,0];if(r(s,16,t),a.data10=a.data27=s.concat(n),256>t){var s=[0,1,0,0];r(s,8,t),a.data1=s.concat(n)}return a}function i(e){for(var t=e.length,n=[],i=0;t>i;i+=2){var a=6,s=u[e[i]];e[i+1]&&(a=11,s=45*s+u[e[i+1]]),r(n,a,s)}var o={},f=[0,0,1,0];if(r(f,13,t),o.data27=f.concat(n),2048>t){var f=[0,0,1,0];r(f,11,t),o.data10=f.concat(n)}if(512>t){var f=[0,0,1,0];r(f,9,t),o.data1=f.concat(n)}return o}function a(e){for(var t=e.length,n=[],i=0;t>i;i+=3){var a=e.substr(i,3),s=Math.ceil(10*a.length/3);r(n,s,parseInt(a,10))}var o={},u=[0,0,0,1];if(r(u,14,t),o.data27=u.concat(n),4096>t){var u=[0,0,0,1];r(u,12,t),o.data10=u.concat(n)}if(1024>t){var u=[0,0,0,1];r(u,10,t),o.data1=u.concat(n)}return o}function s(e){var t=e.indexOf("/",8)+1||e.length,r=o(e.slice(0,t).toUpperCase(),!1);if(t>=e.length)return r;var n=o(e.slice(t),!1);return r.data27=r.data27.concat(n.data27),r.data10&&n.data10&&(r.data10=r.data10.concat(n.data10)),r.data1&&n.data1&&(r.data1=r.data1.concat(n.data1)),r}function o(t,r){var o,u=typeof t;if("string"==u||"number"==u)o=""+t,t=e(o);else if(e.isBuffer(t))o=t.toString();else{if(!Array.isArray(t))throw new Error("Bad data");t=e(t),o=t.toString()}if(/^[0-9]+$/.test(o)){if(t.length>7089)throw new Error("Too much data");return a(o)}if(/^[0-9A-Z \$%\*\+\.\/\:\-]+$/.test(o)){if(t.length>4296)throw new Error("Too much data");return i(o)}if(r&&/^https?:/i.test(o))return s(o);if(t.length>2953)throw new Error("Too much data");return n(t)}var u=function(e){for(var t={},r=0;r<e.length;r++)t[e[r]]=r;return t}("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");t.exports=o}).call(this,e("buffer").Buffer)},{buffer:7}],37:[function(e,t,r){(function(e){"use strict";function r(e){for(;0>e;)e+=255;for(;e>255;)e-=255;return s[e]}function n(e){if(1>e||e>255)throw Error("Bad log("+e+")");return o[e]}function i(e){if(l[e])return l[e];var t=i(e-1),a=[];a[0]=t[0];for(var s=1;e>=s;s++)a[s]=n(r(t[s])^r(t[s-1]+e-1));return l[e]=a,a}for(var a=285,s=[1],o=[],u=1;256>u;u++){var f=s[u-1]<<1;f>255&&(f^=a),s[u]=f}for(var u=0;255>u;u++)o[s[u]]=u;var l=[[0],[0,0],[0,25,1]];t.exports=function(t,a){t=[].slice.call(t);for(var s=i(a),o=0;a>o;o++)t.push(0);for(;t.length>a;)if(t[0]){for(var u=n(t[0]),o=0;a>=o;o++)t[o]=t[o]^r(s[o]+u);t.shift()}else t.shift();return e(t)}}).call(this,e("buffer").Buffer)},{buffer:7}],38:[function(e,t,r){(function(e){"use strict";function r(t){var r=4*t+17,n=[],i=e(r);i.fill(0),i=[].slice.call(i);for(var a=0;r>a;a++)n[a]=i.slice();return n}function n(e){for(var t=e.length,r=-3;3>=r;r++)for(var n=-3;3>=n;n++){var i=Math.max(r,n),a=Math.min(r,n),s=2==i&&a>=-2||-2==a&&2>=i?128:129;e[3+r][3+n]=s,e[3+r][t-4+n]=s,e[t-4+r][3+n]=s}for(var r=0;8>r;r++)e[7][r]=e[r][7]=e[7][t-r-1]=e[r][t-8]=e[t-8][r]=e[t-1-r][7]=128}function i(e){var t=e.length;if(t>21){var r=t-13,n=Math.round(r/Math.ceil(r/28));n%2&&n++;for(var i=[],a=r+6;a>10;a-=n)i.unshift(a);i.unshift(6);for(var s=0;s<i.length;s++)for(var o=0;o<i.length;o++){var u=i[s],f=i[o];if(!e[u][f])for(var l=-2;2>=l;l++)for(var h=-2;2>=h;h++){var c=Math.max(l,h),d=Math.min(l,h),p=1==c&&d>=-1||-1==d&&1>=c?128:129;e[u+l][f+h]=p}}}for(var s=8;t-8>s;s++)e[6][s]=e[s][6]=s%2?128:129}function a(e){for(var t=e.length,r=0;8>r;r++)6!=r&&(e[8][r]=e[r][8]=128),e[8][t-1-r]=128,e[t-1-r][8]=128;if(e[8][8]=128,e[t-8][8]=129,!(45>t))for(var r=t-11;t-8>r;r++)for(var n=0;6>n;n++)e[r][n]=e[n][r]=128}function s(e){function t(t){return 1&e[a][u+t]}function r(t){return 1&e[a+t][u]}for(var n=e.length,i=0,a=0;n>a;a++){for(var s=1&e[a][0],o=1,u=1;n>u;u++){var f=1&e[a][u];f!=s?(o>=5&&(i+=o-2),s=f,o=1):o++}o>=5&&(i+=o-2)}for(var u=0;n>u;u++){for(var s=1&e[0][u],o=1,a=1;n>a;a++){var f=1&e[a][u];f!=s?(o>=5&&(i+=o-2),s=f,o=1):o++}o>=5&&(i+=o-2)}for(var a=0;n-1>a;a++)for(var u=0;n-1>u;u++){var l=e[a][u]+e[a][u+1]+e[a+1][u]+e[a+1][u+1]&7;(0==l||4==l)&&(i+=3)}for(var a=0;n>a;a++)for(var u=0;n>u;u++)n-6>u&&t(0)&&!t(1)&&t(2)&&t(3)&&t(4)&&!t(5)&&t(6)&&(u>=4&&!(t(-4)||t(-3)||t(-2)||t(-1))&&(i+=40),n-10>u&&!(t(7)||t(8)||t(9)||t(10))&&(i+=40)),n-6>a&&r(0)&&!r(1)&&r(2)&&r(3)&&r(4)&&!r(5)&&r(6)&&(a>=4&&!(r(-4)||r(-3)||r(-2)||r(-1))&&(i+=40),n-10>a&&!(r(7)||r(8)||r(9)||r(10))&&(i+=40));for(var h=0,a=0;n>a;a++)for(var u=0;n>u;u++)1&e[a][u]&&h++;return i+=10*Math.floor(Math.abs(10-20*h/(n*n)))}function o(e){var t=r(e.version);n(t),i(t),a(t);for(var o=1/0,l=0,h=0;8>h;h++){f(t,e,h),u(t,e.ec_level,h);var c=s(t);o>c&&(o=c,l=h)}return f(t,e,l),u(t,e.ec_level,l),t.map(function(e){return e.map(function(e){return 1&e})})}var u=function(){for(var e=Array(32),t=Array(40),r=1335,n=7973,i=21522,a=0;32>a;a++){for(var s=a<<10,o=5;o>0;o--)s>>>9+o&&(s^=r<<o-1);e[a]=(s|a<<10)^i}for(var u=7;40>=u;u++){for(var s=u<<12,o=6;o>0;o--)s>>>11+o&&(s^=n<<o-1);t[u]=s|u<<12}var f={L:1,M:0,Q:3,H:2};return function(r,n,i){
function a(e){return u>>e&1?129:128}function s(e){return h>>e&1?129:128}for(var o=r.length,u=e[f[n]<<3|i],l=0;8>l;l++)r[8][o-1-l]=a(l),6>l&&(r[l][8]=a(l));for(var l=8;15>l;l++)r[o-15+l][8]=a(l),l>8&&(r[8][14-l]=a(l));r[7][8]=a(6),r[8][8]=a(7),r[8][7]=a(8);var h=t[(o-17)/4];if(h)for(var l=0;6>l;l++)for(var c=0;3>c;c++)r[o-11+c][l]=r[l][o-11+c]=s(3*l+c)}}(),f=function(){var e=[function(e,t){return(e+t)%2==0},function(e,t){return e%2==0},function(e,t){return t%3==0},function(e,t){return(e+t)%3==0},function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0},function(e,t){return e*t%2+e*t%3==0},function(e,t){return(e*t%2+e*t%3)%2==0},function(e,t){return(e*t%3+(e+t)%2)%2==0}];return function(t,r,n){function i(e){for(var r=128;r;r>>=1){var n=!!(r&e);l(s,o)&&(n=!n),t[s][o]=n?1:0,a()}}function a(){do if(o%2^6>o?0>f&&0==s||f>0&&s==u-1?(o--,f=-f):(o++,s+=f):o--,6==o&&o--,0>o)return!1;while(240&t[s][o]);return!0}var s,o,u=t.length,f=-1;s=o=u-1;for(var l=e[n],h=r.blocks[r.blocks.length-1].length,c=0;h>c;c++)for(var d=0;d<r.blocks.length;d++)r.blocks[d].length<=c||i(r.blocks[d][c]);h=r.ec_len;for(var c=0;h>c;c++)for(var d=0;d<r.ec.length;d++)i(r.ec[d][c]);if(o>-1)do t[s][o]=l(s,o)?1:0;while(a())}}();t.exports={getMatrix:o,init:r,fillFinders:n,fillAlignAndTiming:i,fillStub:a,fillReserved:u,fillData:f,calculatePenalty:s}}).call(this,e("buffer").Buffer)},{buffer:7}],39:[function(e,t,r){(function(r){"use strict";function n(t,n){var i=e("zlib"),a=r(25);u.copy(a),a.writeUInt32BE(t.size,8),a.writeUInt32BE(t.size,12),a.writeUInt32BE(s(a.slice(4,-4)),21),n.push(o),n.push(a);var l=[r([0,0,0,0,73,68,65,84])];i.createDeflate({level:9}).on("data",function(e){l.push(e)}).on("end",function(){l.push(r(4)),l=r.concat(l),l.writeUInt32BE(l.length-12,0),l.writeUInt32BE(s(l.slice(4,-4)),l.length-4),n.push(l),n.push(f),n.push(null)}).end(t.data)}function i(t){var n=e("pako"),i=[],a=r(25);u.copy(a),a.writeUInt32BE(t.size,8),a.writeUInt32BE(t.size,12),a.writeUInt32BE(s(a.slice(4,-4)),21),i.push(o),i.push(a);var l=r.concat([r([0,0,0,0,73,68,65,84]),r(n.deflate(t.data,{level:9})),r(4)]);return l.writeUInt32BE(l.length-12,0),l.writeUInt32BE(s(l.slice(4,-4)),l.length-4),i.push(l),i.push(f),r.concat(i)}function a(e,t,n){var i=e.length,a=(i+2*n)*t,s=r((a+1)*a);s.fill(255);for(var o=0;a>o;o++)s[o*(a+1)]=0;for(var o=0;i>o;o++)for(var u=0;i>u;u++)if(e[o][u]){var f=((n+o)*(a+1)+(n+u))*t+1;s.fill(0,f,f+t);for(var l=1;t>l;l++)s.copy(s,f+l*(a+1),f,f+t)}return{data:s,size:a}}var s=e("./crc32"),o=r([137,80,78,71,13,10,26,10]),u=r([0,0,0,13,73,72,68,82,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0]),f=r([0,0,0,0,73,69,78,68,174,66,96,130]);t.exports={bitmap:a,png:n,png_sync:i}}).call(this,e("buffer").Buffer)},{"./crc32":34,buffer:7,pako:16,zlib:6}],40:[function(e,t,r){(function(r){"use strict";function n(e){return JSON.parse(JSON.stringify(e))}function i(e,t){var r,i=1;for(e.data1?r=Math.ceil(e.data1.length/8):i=10;10>i;i++){var a=h[i][t];if(a.data_len>=r)return n(a)}for(e.data10?r=Math.ceil(e.data10.length/8):i=27;27>i;i++){var a=h[i][t];if(a.data_len>=r)return n(a)}for(r=Math.ceil(e.data27.length/8);41>i;i++){var a=h[i][t];if(a.data_len>=r)return n(a)}throw new Error("Too much data")}function a(e,t){var n=r(t.data_len);n.fill(0),e=t.version<10?e.data1:t.version<27?e.data10:e.data27;for(var i=e.length,a=0;i>a;a+=8){for(var s=0,o=0;8>o;o++)s=s<<1|(e[a+o]?1:0);n[a/8]=s}for(var f=236,a=Math.ceil((i+4)/8);a<n.length;a++)n[a]=f,f=236==f?17:236;var l=0;return t.blocks=t.blocks.map(function(e){var r=n.slice(l,l+e);return l+=e,t.ec.push(u(r,t.ec_len)),r}),t}function s(e,t,r){t=l.indexOf(t)>-1?t:"M";var n=o(e,r),s=a(n,i(n,t));return f.getMatrix(s)}var o=e("./encode"),u=e("./errorcode"),f=e("./matrix"),l=["L","M","Q","H"],h=[[],[26,7,1,10,1,13,1,17,1],[44,10,1,16,1,22,1,28,1],[70,15,1,26,1,36,2,44,2],[100,20,1,36,2,52,2,64,4],[134,26,1,48,2,72,4,88,4],[172,36,2,64,4,96,4,112,4],[196,40,2,72,4,108,6,130,5],[242,48,2,88,4,132,6,156,6],[292,60,2,110,5,160,8,192,8],[346,72,4,130,5,192,8,224,8],[404,80,4,150,5,224,8,264,11],[466,96,4,176,8,260,10,308,11],[532,104,4,198,9,288,12,352,16],[581,120,4,216,9,320,16,384,16],[655,132,6,240,10,360,12,432,18],[733,144,6,280,10,408,17,480,16],[815,168,6,308,11,448,16,532,19],[901,180,6,338,13,504,18,588,21],[991,196,7,364,14,546,21,650,25],[1085,224,8,416,16,600,20,700,25],[1156,224,8,442,17,644,23,750,25],[1258,252,9,476,17,690,23,816,34],[1364,270,9,504,18,750,25,900,30],[1474,300,10,560,20,810,27,960,32],[1588,312,12,588,21,870,29,1050,35],[1706,336,12,644,23,952,34,1110,37],[1828,360,12,700,25,1020,34,1200,40],[1921,390,13,728,26,1050,35,1260,42],[2051,420,14,784,28,1140,38,1350,45],[2185,450,15,812,29,1200,40,1440,48],[2323,480,16,868,31,1290,43,1530,51],[2465,510,17,924,33,1350,45,1620,54],[2611,540,18,980,35,1440,48,1710,57],[2761,570,19,1036,37,1530,51,1800,60],[2876,570,19,1064,38,1590,53,1890,63],[3034,600,20,1120,40,1680,56,1980,66],[3196,630,21,1204,43,1770,59,2100,70],[3362,660,22,1260,45,1860,62,2220,74],[3532,720,24,1316,47,1950,65,2310,77],[3706,750,25,1372,49,2040,68,2430,81]];h=h.map(function(e,t){if(!t)return{};for(var r={},n=1;8>n;n+=2){for(var i=e[0]-e[n],a=e[n+1],s=l[n/2|0],o={version:t,ec_level:s,data_len:i,ec_len:e[n]/a,blocks:[],ec:[]},u=a,f=i;u>0;u--){var h=f/u|0;o.blocks.push(h),f-=h}r[s]=o}return r}),t.exports={QR:s,getTemplate:i,fillTemplate:a}}).call(this,e("buffer").Buffer)},{"./encode":36,"./errorcode":37,"./matrix":38,buffer:7}],41:[function(e,t,r){(function(r){"use strict";function n(e,t){e="string"==typeof e?{ec_level:e}:e||{};var r={type:String(t||e.type||"png").toLowerCase()},n="png"==r.type?c:d;for(var i in n)r[i]=i in e?e[i]:n[i];return r}function i(e,t){t=n(t);var i=u(e,t.ec_level,t.parse_url),a=new o;switch(a._read=h,t.type){case"svg":case"pdf":case"eps":r.nextTick(function(){l[t.type](i,a,t.margin,t.size)});break;case"svgpath":r.nextTick(function(){var e=l.svg_object(i,t.margin,t.size);a.push(e.path),a.push(null)});break;case"png":default:r.nextTick(function(){var e=f.bitmap(i,t.size,t.margin);t.customize&&t.customize(e),f.png(e,a)})}return a}function a(e,t){t=n(t);var r,i=u(e,t.ec_level,t.parse_url);switch(t.type){case"svg":case"pdf":case"eps":var a=[];l[t.type](i,a,t.margin,t.size),r=a.filter(Boolean).join("");break;case"png":default:var s=f.bitmap(i,t.size,t.margin);t.customize&&t.customize(s),r=f.png_sync(s)}return r}function s(e,t){t=n(t,"svg");var r=u(e,t.ec_level);return l.svg_object(r,t.margin)}var o=e("stream").Readable,u=e("./qr-base").QR,f=e("./png"),l=e("./vector"),h=function(){},c={parse_url:!1,ec_level:"M",size:5,margin:4,customize:null},d={parse_url:!1,ec_level:"M",margin:1,size:0};t.exports={matrix:u,image:i,imageSync:a,svgObject:s}}).call(this,e("_process"))},{"./png":39,"./qr-base":40,"./vector":42,_process:33,stream:53}],42:[function(e,t,r){"use strict";function n(e){function t(t,r){return 0>t||0>r||t>=n||r>=n?!1:!!e[t][r]}function r(e,r,n){i[e][r]=1;var a=[];a.push(["M",r,e]);var s=e,o=r,u=0;do switch(n){case"right":i[s][o]=1,t(s,o)?(i[s-1][o]=1,t(s-1,o)?(a.push(["h",u]),u=0,n="up"):(u++,o++)):(a.push(["h",u]),u=0,n="down");break;case"left":i[s-1][o-1]=1,t(s-1,o-1)?(i[s][o-1]=1,t(s,o-1)?(a.push(["h",-u]),u=0,n="down"):(u++,o--)):(a.push(["h",-u]),u=0,n="up");break;case"down":i[s][o-1]=1,t(s,o-1)?(i[s][o]=1,t(s,o)?(a.push(["v",u]),u=0,n="right"):(u++,s++)):(a.push(["v",u]),u=0,n="left");break;case"up":i[s-1][o]=1,t(s-1,o)?(i[s-1][o-1]=1,t(s-1,o-1)?(a.push(["v",-u]),u=0,n="left"):(u++,s--)):(a.push(["v",-u]),u=0,n="right")}while(s!=e||o!=r);return a}for(var n=e.length,i=[],a=-1;n>=a;a++)i[a]=[];for(var s=[],a=0;n>a;a++)for(var o=0;n>o;o++)i[a][o]||(i[a][o]=1,t(a,o)?t(a-1,o)||s.push(r(a,o,"right")):t(a,o-1)&&s.push(r(a,o,"down")));return s}function i(e,t,r){n(e).forEach(function(e){for(var n="",i=0;i<e.length;i++){var a=e[i];switch(a[0]){case"M":n+="M"+(a[1]+r)+" "+(a[2]+r);break;default:n+=a.join("")}}n+="z",t.push(n)})}function a(e,t){var r=[];i(e,r,t);var n={size:e.length+2*t,path:r.filter(Boolean).join("")};return n}function s(e,t,r,n){var a=e.length+2*r;if(t.push('<svg xmlns="http://www.w3.org/2000/svg" '),n>0){var s=a*n;t.push('width="'+s+'" height="'+s+'" ')}t.push('viewBox="0 0 '+a+" "+a+'">'),t.push('<path d="'),i(e,t,r),t.push('"/></svg>'),t.push(null)}function o(e,t,r){var i=e.length,a=9,s=(i+2*r)*a;t.push(["%!PS-Adobe-3.0 EPSF-3.0","%%BoundingBox: 0 0 "+s+" "+s,"/h { 0 rlineto } bind def","/v { 0 exch neg rlineto } bind def","/M { neg "+(i+r)+" add moveto } bind def","/z { closepath } bind def",a+" "+a+" scale",""].join("\n")),n(e).forEach(function(e){for(var n="",i=0;i<e.length;i++){var a=e[i];switch(a[0]){case"M":n+=a[1]+r+" "+a[2]+" M ";break;default:n+=a[1]+" "+a[0]+" "}}n+="z\n",t.push(n)}),t.push("fill\n%%EOF\n"),t.push(null)}function u(e,t,r){var i=e.length,a=9,s=(i+2*r)*a,o=["%PDF-1.0\n\n","1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n","2 0 obj << /Type /Pages /Count 1 /Kids [ 3 0 R ] >> endobj\n"];o.push("3 0 obj << /Type /Page /Parent 2 0 R /Resources <<>> /Contents 4 0 R /MediaBox [ 0 0 "+s+" "+s+" ] >> endobj\n");var u=a+" 0 0 "+a+" 0 0 cm\n";u+=n(e).map(function(e){for(var t,n,a="",s=0;s<e.length;s++){var o=e[s];switch(o[0]){case"M":t=o[1]+r,n=i-o[2]+r,a+=t+" "+n+" m ";break;case"h":t+=o[1],a+=t+" "+n+" l ";break;case"v":n-=o[1],a+=t+" "+n+" l "}}return a+="h"}).join("\n"),u+="\nf\n",o.push("4 0 obj << /Length "+u.length+" >> stream\n"+u+"endstream\nendobj\n");for(var f="xref\n0 5\n0000000000 65535 f \n",l=1,h=o[0].length;5>l;l++)f+=("0000000000"+h).substr(-10)+" 00000 n \n",h+=o[l].length;o.push(f,"trailer << /Root 1 0 R /Size 5 >>\n","startxref\n"+h+"\n%%EOF\n"),t.push(o.join("")),t.push(null)}t.exports={svg:s,eps:o,pdf:u,svg_object:a}},{}],43:[function(e,t,r){t.exports=e("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":44}],44:[function(e,t,r){"use strict";function n(e){return this instanceof n?(f.call(this,e),l.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new n(e)}function i(){this.allowHalfOpen||this._writableState.ended||o(a,this)}function a(e){e.end()}var s=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};t.exports=n;var o=e("process-nextick-args"),u=e("core-util-is");u.inherits=e("inherits");var f=e("./_stream_readable"),l=e("./_stream_writable");u.inherits(n,f);for(var h=s(l.prototype),c=0;c<h.length;c++){var d=h[c];n.prototype[d]||(n.prototype[d]=l.prototype[d])}},{"./_stream_readable":46,"./_stream_writable":48,"core-util-is":9,inherits:12,"process-nextick-args":32}],45:[function(e,t,r){"use strict";function n(e){return this instanceof n?void i.call(this,e):new n(e)}t.exports=n;var i=e("./_stream_transform"),a=e("core-util-is");a.inherits=e("inherits"),a.inherits(n,i),n.prototype._transform=function(e,t,r){r(null,e)}},{"./_stream_transform":47,"core-util-is":9,inherits:12}],46:[function(e,t,r){(function(r){"use strict";function n(t,r){j=j||e("./_stream_duplex"),t=t||{},this.objectMode=!!t.objectMode,r instanceof j&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var n=t.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(I||(I=e("string_decoder/").StringDecoder),this.decoder=new I(t.encoding),this.encoding=t.encoding)}function i(t){return j=j||e("./_stream_duplex"),this instanceof i?(this._readableState=new n(t,this),this.readable=!0,t&&"function"==typeof t.read&&(this._read=t.read),void L.call(this)):new i(t)}function a(e,t,r,n,i){var a=f(t,r);if(a)e.emit("error",a);else if(null===r)t.reading=!1,l(e,t);else if(t.objectMode||r&&r.length>0)if(t.ended&&!i){var o=new Error("stream.push() after EOF");e.emit("error",o)}else if(t.endEmitted&&i){var o=new Error("stream.unshift() after end event");e.emit("error",o)}else!t.decoder||i||n||(r=t.decoder.write(r)),i||(t.reading=!1),t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,i?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&h(e)),d(e,t);else i||(t.reading=!1);return s(t)}function s(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}function o(e){return e>=O?e=O:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function u(e,t){return 0===t.length&&t.ended?0:t.objectMode?0===e?0:1:null===e||isNaN(e)?t.flowing&&t.buffer.length?t.buffer[0].length:t.length:0>=e?0:(e>t.highWaterMark&&(t.highWaterMark=o(e)),e>t.length?t.ended?t.length:(t.needReadable=!0,0):e)}function f(e,t){var r=null;return R.isBuffer(t)||"string"==typeof t||null===t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function l(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,h(e)}}function h(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(T("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?x(c,e):c(e))}function c(e){T("emit readable"),e.emit("readable"),m(e)}function d(e,t){t.readingMore||(t.readingMore=!0,x(p,e,t))}function p(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(T("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function g(e){return function(){var t=e._readableState;T("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&z(e,"data")&&(t.flowing=!0,m(e))}}function _(e){T("readable nexttick read 0"),e.read(0)}function v(e,t){t.resumeScheduled||(t.resumeScheduled=!0,x(b,e,t))}function b(e,t){t.reading||(T("resume read 0"),e.read(0)),t.resumeScheduled=!1,e.emit("resume"),m(e),t.flowing&&!t.reading&&e.read(0)}function m(e){var t=e._readableState;if(T("flow",t.flowing),t.flowing)do var r=e.read();while(null!==r&&t.flowing)}function w(e,t){var r,n=t.buffer,i=t.length,a=!!t.decoder,s=!!t.objectMode;if(0===n.length)return null;if(0===i)r=null;else if(s)r=n.shift();else if(!e||e>=i)r=a?n.join(""):1===n.length?n[0]:R.concat(n,i),n.length=0;else if(e<n[0].length){var o=n[0];r=o.slice(0,e),n[0]=o.slice(e)}else if(e===n[0].length)r=n.shift();else{r=a?"":new R(e);for(var u=0,f=0,l=n.length;l>f&&e>u;f++){var o=n[0],h=Math.min(e-u,o.length);a?r+=o.slice(0,h):o.copy(r,u,0,h),h<o.length?n[0]=o.slice(h):n.shift(),u+=h}}return r}function y(e){var t=e._readableState;if(t.length>0)throw new Error("endReadable called on non-empty stream");t.endEmitted||(t.ended=!0,x(k,t,e))}function k(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function E(e,t){for(var r=0,n=e.length;n>r;r++)t(e[r],r)}function A(e,t){for(var r=0,n=e.length;n>r;r++)if(e[r]===t)return r;return-1}t.exports=i;var x=e("process-nextick-args"),S=e("isarray"),R=e("buffer").Buffer;i.ReadableState=n;var L,z=(e("events"),function(e,t){return e.listeners(t).length});!function(){try{L=e("stream")}catch(t){}finally{L||(L=e("events").EventEmitter)}}();var R=e("buffer").Buffer,B=e("core-util-is");B.inherits=e("inherits");var T,M=e("util");T=M&&M.debuglog?M.debuglog("stream"):function(){};var I;B.inherits(i,L);var j,j;i.prototype.push=function(e,t){var r=this._readableState;return r.objectMode||"string"!=typeof e||(t=t||r.defaultEncoding,t!==r.encoding&&(e=new R(e,t),t="")),a(this,r,e,t,!1)},i.prototype.unshift=function(e){var t=this._readableState;return a(this,t,e,"",!0)},i.prototype.isPaused=function(){return this._readableState.flowing===!1},i.prototype.setEncoding=function(t){return I||(I=e("string_decoder/").StringDecoder),this._readableState.decoder=new I(t),this._readableState.encoding=t,this};var O=8388608;i.prototype.read=function(e){T("read",e);var t=this._readableState,r=e;if(("number"!=typeof e||e>0)&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return T("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?y(this):h(this),null;if(e=u(e,t),0===e&&t.ended)return 0===t.length&&y(this),null;var n=t.needReadable;T("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&(n=!0,T("length less than watermark",n)),(t.ended||t.reading)&&(n=!1,T("reading or ended",n)),n&&(T("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1),n&&!t.reading&&(e=u(r,t));var i;return i=e>0?w(e,t):null,null===i&&(t.needReadable=!0,e=0),t.length-=e,0!==t.length||t.ended||(t.needReadable=!0),r!==e&&t.ended&&0===t.length&&y(this),null!==i&&this.emit("data",i),i},i.prototype._read=function(e){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(e,t){function n(e){T("onunpipe"),e===h&&a()}function i(){T("onend"),e.end()}function a(){T("cleanup"),e.removeListener("close",u),e.removeListener("finish",f),e.removeListener("drain",_),e.removeListener("error",o),e.removeListener("unpipe",n),h.removeListener("end",i),h.removeListener("end",a),h.removeListener("data",s),v=!0,!c.awaitDrain||e._writableState&&!e._writableState.needDrain||_()}function s(t){T("ondata");var r=e.write(t);!1===r&&(1!==c.pipesCount||c.pipes[0]!==e||1!==h.listenerCount("data")||v||(T("false write response, pause",h._readableState.awaitDrain),h._readableState.awaitDrain++),h.pause())}function o(t){T("onerror",t),l(),e.removeListener("error",o),0===z(e,"error")&&e.emit("error",t)}function u(){e.removeListener("finish",f),l()}function f(){T("onfinish"),e.removeListener("close",u),l()}function l(){T("unpipe"),h.unpipe(e)}var h=this,c=this._readableState;switch(c.pipesCount){case 0:c.pipes=e;break;case 1:c.pipes=[c.pipes,e];break;default:c.pipes.push(e)}c.pipesCount+=1,T("pipe count=%d opts=%j",c.pipesCount,t);var d=(!t||t.end!==!1)&&e!==r.stdout&&e!==r.stderr,p=d?i:a;c.endEmitted?x(p):h.once("end",p),e.on("unpipe",n);var _=g(h);e.on("drain",_);var v=!1;return h.on("data",s),e._events&&e._events.error?S(e._events.error)?e._events.error.unshift(o):e._events.error=[o,e._events.error]:e.on("error",o),e.once("close",u),e.once("finish",f),e.emit("pipe",h),c.flowing||(T("pipe resume"),h.resume()),e},i.prototype.unpipe=function(e){var t=this._readableState;if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this),this);if(!e){var r=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var i=0;n>i;i++)r[i].emit("unpipe",this);return this}var i=A(t.pipes,e);return-1===i?this:(t.pipes.splice(i,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this),this)},i.prototype.on=function(e,t){var r=L.prototype.on.call(this,e,t);if("data"===e&&!1!==this._readableState.flowing&&this.resume(),"readable"===e&&this.readable){var n=this._readableState;n.readableListening||(n.readableListening=!0,n.emittedReadable=!1,n.needReadable=!0,n.reading?n.length&&h(this,n):x(_,this))}return r},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){var e=this._readableState;return e.flowing||(T("resume"),e.flowing=!0,v(this,e)),this},i.prototype.pause=function(){return T("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(T("pause"),this._readableState.flowing=!1,this.emit("pause")),this},i.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;e.on("end",function(){if(T("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){if(T("wrapped data"),t.decoder&&(i=t.decoder.write(i)),(!t.objectMode||null!==i&&void 0!==i)&&(t.objectMode||i&&i.length)){var a=n.push(i);a||(r=!0,e.pause())}});for(var i in e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));var a=["error","close","destroy","pause","resume"];return E(a,function(t){e.on(t,n.emit.bind(n,t))}),n._read=function(t){T("wrapped _read",t),r&&(r=!1,e.resume())},n},i._fromList=w}).call(this,e("_process"))},{"./_stream_duplex":44,_process:33,buffer:7,"core-util-is":9,events:10,inherits:12,isarray:15,"process-nextick-args":32,"string_decoder/":54,util:4}],47:[function(e,t,r){"use strict";function n(e){this.afterTransform=function(t,r){return i(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function i(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("no writecb in Transform class"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&e.push(r),i&&i(t);var a=e._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&e._read(a.highWaterMark)}function a(e){if(!(this instanceof a))return new a(e);o.call(this,e),this._transformState=new n(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e){s(t,e)}):s(t)})}function s(e,t){if(t)return e.emit("error",t);var r=e._writableState,n=e._transformState;if(r.length)throw new Error("calling transform done when ws.length != 0");if(n.transforming)throw new Error("calling transform done when still transforming");return e.push(null)}t.exports=a;var o=e("./_stream_duplex"),u=e("core-util-is");u.inherits=e("inherits"),u.inherits(a,o),a.prototype.push=function(e,t){return this._transformState.needTransform=!1,o.prototype.push.call(this,e,t)},a.prototype._transform=function(e,t,r){throw new Error("not implemented")},a.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}},{"./_stream_duplex":44,"core-util-is":9,inherits:12}],48:[function(e,t,r){"use strict";function n(){}function i(e,t,r){this.chunk=e,this.encoding=t,this.callback=r,this.next=null}function a(t,r){R=R||e("./_stream_duplex"),t=t||{},this.objectMode=!!t.objectMode,r instanceof R&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var n=t.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=t.decodeStrings===!1;this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){p(r,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1}function s(t){return R=R||e("./_stream_duplex"),this instanceof s||this instanceof R?(this._writableState=new a(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev)),void x.call(this)):new s(t)}function o(e,t){var r=new Error("write after end");e.emit("error",r),k(t,r)}function u(e,t,r,n){var i=!0;if(!E.isBuffer(r)&&"string"!=typeof r&&null!==r&&void 0!==r&&!t.objectMode){var a=new TypeError("Invalid non-string/buffer chunk");e.emit("error",a),k(n,a),i=!1}return i}function f(e,t,r){return e.objectMode||e.decodeStrings===!1||"string"!=typeof t||(t=new E(t,r)),t}function l(e,t,r,n,a){r=f(t,r,n),E.isBuffer(r)&&(n="buffer");var s=t.objectMode?1:r.length;t.length+=s;var o=t.length<t.highWaterMark;if(o||(t.needDrain=!0),t.writing||t.corked){var u=t.lastBufferedRequest;t.lastBufferedRequest=new i(r,n,a),u?u.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest}else h(e,t,!1,s,r,n,a);return o}function h(e,t,r,n,i,a,s){t.writelen=n,t.writecb=s,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,a,t.onwrite),t.sync=!1}function c(e,t,r,n,i){--t.pendingcb,r?k(i,n):i(n),e._writableState.errorEmitted=!0,e.emit("error",n)}function d(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function p(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(d(r),t)c(e,r,n,t,i);else{var a=b(r);a||r.corked||r.bufferProcessing||!r.bufferedRequest||v(e,r),n?k(g,e,r,a,i):g(e,r,a,i)}}function g(e,t,r,n){r||_(e,t),t.pendingcb--,n(),w(e,t)}function _(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function v(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){for(var n=[],i=[];r;)i.push(r.callback),n.push(r),r=r.next;t.pendingcb++,t.lastBufferedRequest=null,h(e,t,!0,t.length,n,"",function(e){for(var r=0;r<i.length;r++)t.pendingcb--,i[r](e)})}else{for(;r;){var a=r.chunk,s=r.encoding,o=r.callback,u=t.objectMode?1:a.length;if(h(e,t,!1,u,a,s,o),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}function b(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function m(e,t){t.prefinished||(t.prefinished=!0,e.emit("prefinish"))}function w(e,t){var r=b(t);return r&&(0===t.pendingcb?(m(e,t),t.finished=!0,e.emit("finish")):m(e,t)),r}function y(e,t,r){t.ending=!0,w(e,t),r&&(t.finished?k(r):e.once("finish",r)),t.ended=!0}t.exports=s;var k=e("process-nextick-args"),E=e("buffer").Buffer;s.WritableState=a;var A=e("core-util-is");A.inherits=e("inherits");var x,S={deprecate:e("util-deprecate")};!function(){try{x=e("stream")}catch(t){}finally{x||(x=e("events").EventEmitter)}}();var E=e("buffer").Buffer;A.inherits(s,x);var R;a.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(a.prototype,"buffer",{get:S.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")})}catch(e){}}();var R;s.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},s.prototype.write=function(e,t,r){var i=this._writableState,a=!1;return"function"==typeof t&&(r=t,t=null),E.isBuffer(e)?t="buffer":t||(t=i.defaultEncoding),"function"!=typeof r&&(r=n),i.ended?o(this,r):u(this,i,e,r)&&(i.pendingcb++,a=l(this,i,e,t,r)),a},s.prototype.cork=function(){var e=this._writableState;e.corked++},s.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||v(this,e))},s.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);this._writableState.defaultEncoding=e},s.prototype._write=function(e,t,r){r(new Error("not implemented"))},s.prototype._writev=null,s.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!==e&&void 0!==e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||y(this,n,r)}},{"./_stream_duplex":44,buffer:7,"core-util-is":9,events:10,inherits:12,"process-nextick-args":32,"util-deprecate":55}],49:[function(e,t,r){t.exports=e("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":45}],50:[function(e,t,r){var n=function(){try{return e("stream")}catch(t){}}();r=t.exports=e("./lib/_stream_readable.js"),r.Stream=n||r,r.Readable=r,r.Writable=e("./lib/_stream_writable.js"),r.Duplex=e("./lib/_stream_duplex.js"),r.Transform=e("./lib/_stream_transform.js"),r.PassThrough=e("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":44,"./lib/_stream_passthrough.js":45,"./lib/_stream_readable.js":46,"./lib/_stream_transform.js":47,"./lib/_stream_writable.js":48}],51:[function(e,t,r){t.exports=e("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":47}],52:[function(e,t,r){t.exports=e("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":48}],53:[function(e,t,r){function n(){i.call(this)}t.exports=n;var i=e("events").EventEmitter,a=e("inherits");a(n,i),n.Readable=e("readable-stream/readable.js"),n.Writable=e("readable-stream/writable.js"),n.Duplex=e("readable-stream/duplex.js"),n.Transform=e("readable-stream/transform.js"),n.PassThrough=e("readable-stream/passthrough.js"),n.Stream=n,n.prototype.pipe=function(e,t){function r(t){e.writable&&!1===e.write(t)&&f.pause&&f.pause()}function n(){f.readable&&f.resume&&f.resume()}function a(){l||(l=!0,e.end())}function s(){l||(l=!0,"function"==typeof e.destroy&&e.destroy())}function o(e){if(u(),0===i.listenerCount(this,"error"))throw e}function u(){f.removeListener("data",r),e.removeListener("drain",n),f.removeListener("end",a),f.removeListener("close",s),f.removeListener("error",o),e.removeListener("error",o),f.removeListener("end",u),f.removeListener("close",u),e.removeListener("close",u)}var f=this;f.on("data",r),e.on("drain",n),e._isStdio||t&&t.end===!1||(f.on("end",a),f.on("close",s));var l=!1;return f.on("error",o),e.on("error",o),f.on("end",u),f.on("close",u),e.on("close",u),e.emit("pipe",f),e}},{events:10,inherits:12,"readable-stream/duplex.js":43,"readable-stream/passthrough.js":49,"readable-stream/readable.js":50,"readable-stream/transform.js":51,"readable-stream/writable.js":52}],54:[function(e,t,r){function n(e){if(e&&!u(e))throw new Error("Unknown encoding: "+e)}function i(e){return e.toString(this.encoding)}function a(e){this.charReceived=e.length%2,this.charLength=this.charReceived?2:0}function s(e){this.charReceived=e.length%3,this.charLength=this.charReceived?3:0}var o=e("buffer").Buffer,u=o.isEncoding||function(e){switch(e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},f=r.StringDecoder=function(e){switch(this.encoding=(e||"utf8").toLowerCase().replace(/[-_]/,""),n(e),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=a;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=s;break;default:return void(this.write=i)}this.charBuffer=new o(6),this.charReceived=0,this.charLength=0};f.prototype.write=function(e){for(var t="";this.charLength;){var r=e.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:e.length;if(e.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return"";e=e.slice(r,e.length),t=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var n=t.charCodeAt(t.length-1);if(!(n>=55296&&56319>=n)){if(this.charReceived=this.charLength=0,0===e.length)return t;break}this.charLength+=this.surrogateSize,t=""}this.detectIncompleteChar(e);var i=e.length;this.charLength&&(e.copy(this.charBuffer,0,e.length-this.charReceived,i),i-=this.charReceived),t+=e.toString(this.encoding,0,i);var i=t.length-1,n=t.charCodeAt(i);if(n>=55296&&56319>=n){var a=this.surrogateSize;return this.charLength+=a,this.charReceived+=a,this.charBuffer.copy(this.charBuffer,a,0,a),e.copy(this.charBuffer,0,0,a),t.substring(0,i)}return t},f.prototype.detectIncompleteChar=function(e){for(var t=e.length>=3?3:e.length;t>0;t--){var r=e[e.length-t];if(1==t&&r>>5==6){this.charLength=2;break}if(2>=t&&r>>4==14){this.charLength=3;break}if(3>=t&&r>>3==30){this.charLength=4;break}}this.charReceived=t},f.prototype.end=function(e){var t="";if(e&&e.length&&(t=this.write(e)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding;t+=n.slice(0,r).toString(i)}return t}},{buffer:7}],55:[function(e,t,r){(function(e){function r(e,t){
function r(){if(!i){if(n("throwDeprecation"))throw new Error(t);n("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(n("noDeprecation"))return e;var i=!1;return r}function n(t){try{if(!e.localStorage)return!1}catch(r){return!1}var n=e.localStorage[t];return null==n?!1:"true"===String(n).toLowerCase()}t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],56:[function(e,t,r){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],57:[function(e,t,r){(function(t,n){function i(e,t){var n={seen:[],stylize:s};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(t)?n.showHidden=t:t&&r._extend(n,t),y(n.showHidden)&&(n.showHidden=!1),y(n.depth)&&(n.depth=2),y(n.colors)&&(n.colors=!1),y(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=a),u(n,e,n.depth)}function a(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function s(e,t){return e}function o(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function u(e,t,n){if(e.customInspect&&t&&S(t.inspect)&&t.inspect!==r.inspect&&(!t.constructor||t.constructor.prototype!==t)){var i=t.inspect(n,e);return m(i)||(i=u(e,i,n)),i}var a=f(e,t);if(a)return a;var s=Object.keys(t),g=o(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(t)),x(t)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return l(t);if(0===s.length){if(S(t)){var _=t.name?": "+t.name:"";return e.stylize("[Function"+_+"]","special")}if(k(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(A(t))return e.stylize(Date.prototype.toString.call(t),"date");if(x(t))return l(t)}var v="",b=!1,w=["{","}"];if(p(t)&&(b=!0,w=["[","]"]),S(t)){var y=t.name?": "+t.name:"";v=" [Function"+y+"]"}if(k(t)&&(v=" "+RegExp.prototype.toString.call(t)),A(t)&&(v=" "+Date.prototype.toUTCString.call(t)),x(t)&&(v=" "+l(t)),0===s.length&&(!b||0==t.length))return w[0]+v+w[1];if(0>n)return k(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special");e.seen.push(t);var E;return E=b?h(e,t,n,g,s):s.map(function(r){return c(e,t,n,g,r,b)}),e.seen.pop(),d(E,v,w)}function f(e,t){if(y(t))return e.stylize("undefined","undefined");if(m(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return b(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):_(t)?e.stylize("null","null"):void 0}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function h(e,t,r,n,i){for(var a=[],s=0,o=t.length;o>s;++s)T(t,String(s))?a.push(c(e,t,r,n,String(s),!0)):a.push("");return i.forEach(function(i){i.match(/^\d+$/)||a.push(c(e,t,r,n,i,!0))}),a}function c(e,t,r,n,i,a){var s,o,f;if(f=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},f.get?o=f.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):f.set&&(o=e.stylize("[Setter]","special")),T(n,i)||(s="["+i+"]"),o||(e.seen.indexOf(f.value)<0?(o=_(r)?u(e,f.value,null):u(e,f.value,r-1),o.indexOf("\n")>-1&&(o=a?o.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+o.split("\n").map(function(e){return"   "+e}).join("\n"))):o=e.stylize("[Circular]","special")),y(s)){if(a&&i.match(/^\d+$/))return o;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+o}function d(e,t,r){var n=0,i=e.reduce(function(e,t){return n++,t.indexOf("\n")>=0&&n++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function _(e){return null===e}function v(e){return null==e}function b(e){return"number"==typeof e}function m(e){return"string"==typeof e}function w(e){return"symbol"==typeof e}function y(e){return void 0===e}function k(e){return E(e)&&"[object RegExp]"===L(e)}function E(e){return"object"==typeof e&&null!==e}function A(e){return E(e)&&"[object Date]"===L(e)}function x(e){return E(e)&&("[object Error]"===L(e)||e instanceof Error)}function S(e){return"function"==typeof e}function R(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||"undefined"==typeof e}function L(e){return Object.prototype.toString.call(e)}function z(e){return 10>e?"0"+e.toString(10):e.toString(10)}function B(){var e=new Date,t=[z(e.getHours()),z(e.getMinutes()),z(e.getSeconds())].join(":");return[e.getDate(),O[e.getMonth()],t].join(" ")}function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var M=/%[sdj%]/g;r.format=function(e){if(!m(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(i(arguments[r]));return t.join(" ")}for(var r=1,n=arguments,a=n.length,s=String(e).replace(M,function(e){if("%%"===e)return"%";if(r>=a)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return e}}),o=n[r];a>r;o=n[++r])s+=_(o)||!E(o)?" "+o:" "+i(o);return s},r.deprecate=function(e,i){function a(){if(!s){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),s=!0}return e.apply(this,arguments)}if(y(n.process))return function(){return r.deprecate(e,i).apply(this,arguments)};if(t.noDeprecation===!0)return e;var s=!1;return a};var I,j={};r.debuglog=function(e){if(y(I)&&(I=t.env.NODE_DEBUG||""),e=e.toUpperCase(),!j[e])if(new RegExp("\\b"+e+"\\b","i").test(I)){var n=t.pid;j[e]=function(){var t=r.format.apply(r,arguments);console.error("%s %d: %s",e,n,t)}}else j[e]=function(){};return j[e]},r.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=p,r.isBoolean=g,r.isNull=_,r.isNullOrUndefined=v,r.isNumber=b,r.isString=m,r.isSymbol=w,r.isUndefined=y,r.isRegExp=k,r.isObject=E,r.isDate=A,r.isError=x,r.isFunction=S,r.isPrimitive=R,r.isBuffer=e("./support/isBuffer");var O=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];r.log=function(){console.log("%s - %s",B(),r.format.apply(r,arguments))},r.inherits=e("inherits"),r._extend=function(e,t){if(!t||!E(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":56,_process:33,inherits:12}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var parent = deck.parent,
      currentSlide = deck.slides[deck.slide()] || deck.slides[0],
      slideHeight = currentSlide.offsetHeight,
      slideWidth = currentSlide.offsetWidth,
      useZoom = options === 'zoom' || ('zoom' in parent.style && options !== 'transform'),

      innerWrap = function(element) {
        var innerWrapper = document.createElement('div');
        innerWrapper.className = 'bespoke-scale-parent';
        while (element.children.length > 0) {
          innerWrapper.appendChild(element.children[0]);
        }
        element.appendChild(innerWrapper);
        return innerWrapper;
      },

      element = useZoom ? parent : innerWrap(parent),

      transformProperty = (function(property) {
        var prefixes = 'Moz Webkit O ms'.split(' ');
        return prefixes.reduce(function(currentProperty, prefix) {
            return prefix + property in parent.style ? prefix + property : currentProperty;
          }, property.toLowerCase());
      }('Transform')),

      scale = useZoom ?
        function(ratio, element) {
          element.style.zoom = ratio;
        } :
        function(ratio, element) {
          element.style[transformProperty] = 'scale(' + ratio + ')';
        },

      scaleAll = function() {
        var xScale = parent.offsetWidth / slideWidth,
          yScale = (parent.offsetHeight / slideHeight) || 0;

        scale(Math.min(xScale, yScale), element);
      };

    window.addEventListener('resize', scaleAll);
    scaleAll();
  };

};

},{}],11:[function(require,module,exports){
(function (global){
/*! bespoke-simple-overview v1.0.0 © 2016 Flávio Coutinho, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s;s="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,s=s.bespoke||(s.bespoke={}),s=s.plugins||(s.plugins={}),s.simpleOverview=e()}}(function(){return function e(s,o,t){function r(n,p){if(!o[n]){if(!s[n]){var a="function"==typeof require&&require;if(!p&&a)return a(n,!0);if(i)return i(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}var b=o[n]={exports:{}};s[n][0].call(b.exports,function(e){var o=s[n][1][e];return r(o?o:e)},b,b.exports,e,s,o,t)}return o[n].exports}for(var i="function"==typeof require&&require,n=0;n<t.length;n++)r(t[n]);return r}({1:[function(e,s,o){var t=e("insert-css"),r=function(e,s){return s="object"==typeof s?s:{},Object.keys(e).forEach(function(o){s[o]=s[o]||e[o]}),s},i=function(e){return"string"==typeof e?e.toUpperCase().charCodeAt(0):e};s.exports=function(e){return e=r({activationKey:27,insertStyles:!0},e),e.activationKey=i(e.activationKey),function(s){var o,r,i,n,p,a;o=function(){s.on("activate",o)(),window.addEventListener("keydown",r,!1);var i=".bespoke-parent{-webkit-perspective:900px;perspective:900px}.bespoke-parent .bespoke-slide{transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.bespoke-simple-overview .bespoke-slide{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline:4px solid silver;background-color:rgba(255,255,255,.2);opacity:initial}.bespoke-simple-overview .bespoke-slide.bespoke-active,.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-before{display:none;-webkit-transform:translate3d(-630%,0,-2000px);transform:translate3d(-630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after{display:none;-webkit-transform:translate3d(630%,0,-2000px);transform:translate3d(630%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-flex;display:-ms-flexbox;display:flex}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-105%,0,-2000px);transform:translate3d(-105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-210%,0,-2000px);transform:translate3d(-210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-315%,0,-2000px);transform:translate3d(-315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-420%,0,-2000px);transform:translate3d(-420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-525%,0,-2000px);transform:translate3d(-525%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1{-webkit-transform:translate3d(105%,0,-2000px);transform:translate3d(105%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2{-webkit-transform:translate3d(210%,0,-2000px);transform:translate3d(210%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3{-webkit-transform:translate3d(315%,0,-2000px);transform:translate3d(315%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4{-webkit-transform:translate3d(420%,0,-2000px);transform:translate3d(420%,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5{-webkit-transform:translate3d(525%,0,-2000px);transform:translate3d(525%,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}";e.insertStyles&&t(i),a=s.parent.classList.contains("bespoke-simple-overview"),a&&SimpleOverview()},i=function(){window.removeEventListener("keydown",r,!1)},n=function(e){var o;return a?(o=s.slide()+e,o>=0&&o<s.slides.length&&s.slide(o),!1):void 0},r=function(s){switch(s.which){case e.activationKey:p()}},p=function(e){a="boolean"==typeof e?e:!a,s.parent.classList.toggle("bespoke-simple-overview",a)},s.on("activate",o),s.on("destroy",i),s.on("simple-overview.enable",p.bind(null,!0)),s.on("simple-overview.disable",p.bind(null,!1)),s.on("simple-overview.toggle",p.bind(null)),s.on("prev",n.bind(null,-1)),s.on("next",n.bind(null,1))}}},{"insert-css":2}],2:[function(e,s,o){var t={};s.exports=function(e,s){if(!t[e]){t[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];s&&s.prepend?r.insertBefore(o,r.childNodes[0]):r.appendChild(o)}}},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
module.exports = function() {
  return function(deck) {
    var modifyState = function(method, event) {
      var attr = event.slide.getAttribute('data-bespoke-state');

      if (attr) {
        attr.split(' ').forEach(function(state) {
          deck.parent.classList[method](state);
        });
      }
    };

    deck.on('activate', modifyState.bind(null, 'add'));
    deck.on('deactivate', modifyState.bind(null, 'remove'));
  };
};

},{}],13:[function(require,module,exports){
module.exports = function(options) {
  return function(deck) {
    var axis = options == 'vertical' ? 'Y' : 'X',
      startPosition,
      delta;

    deck.parent.addEventListener('touchstart', function(e) {
      if (e.touches.length == 1) {
        startPosition = e.touches[0]['page' + axis];
        delta = 0;
      }
    });

    deck.parent.addEventListener('touchmove', function(e) {
      if (e.touches.length == 1) {
        e.preventDefault();
        delta = e.touches[0]['page' + axis] - startPosition;
      }
    });

    deck.parent.addEventListener('touchend', function() {
      if (Math.abs(delta) > 50) {
        deck[delta > 0 ? 'prev' : 'next']();
      }
    });
  };
};

},{}],14:[function(require,module,exports){
var from = function(opts, plugins) {
  var parent = (opts.parent || opts).nodeType === 1 ? (opts.parent || opts) : document.querySelector(opts.parent || opts),
    slides = [].filter.call(typeof opts.slides === 'string' ? parent.querySelectorAll(opts.slides) : (opts.slides || parent.children), function(el) { return el.nodeName !== 'SCRIPT'; }),
    activeSlide = slides[0],
    listeners = {},

    activate = function(index, customData) {
      if (!slides[index]) {
        return;
      }

      fire('deactivate', createEventData(activeSlide, customData));
      activeSlide = slides[index];
      fire('activate', createEventData(activeSlide, customData));
    },

    slide = function(index, customData) {
      if (arguments.length) {
        fire('slide', createEventData(slides[index], customData)) && activate(index, customData);
      } else {
        return slides.indexOf(activeSlide);
      }
    },

    step = function(offset, customData) {
      var slideIndex = slides.indexOf(activeSlide) + offset;

      fire(offset > 0 ? 'next' : 'prev', createEventData(activeSlide, customData)) && activate(slideIndex, customData);
    },

    on = function(eventName, callback) {
      (listeners[eventName] || (listeners[eventName] = [])).push(callback);
      return off.bind(null, eventName, callback);
    },

    off = function(eventName, callback) {
      listeners[eventName] = (listeners[eventName] || []).filter(function(listener) { return listener !== callback; });
    },

    fire = function(eventName, eventData) {
      return (listeners[eventName] || [])
        .reduce(function(notCancelled, callback) {
          return notCancelled && callback(eventData) !== false;
        }, true);
    },

    createEventData = function(el, eventData) {
      eventData = eventData || {};
      eventData.index = slides.indexOf(el);
      eventData.slide = el;
      return eventData;
    },

    deck = {
      on: on,
      off: off,
      fire: fire,
      slide: slide,
      next: step.bind(null, 1),
      prev: step.bind(null, -1),
      parent: parent,
      slides: slides
    };

  (plugins || []).forEach(function(plugin) {
    plugin(deck);
  });

  activate(0);

  return deck;
};

module.exports = {
  from: from
};

},{}],15:[function(require,module,exports){
/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
                     typeof self === 'object' && self;

  // Setup highlight.js for different environments. First is Node.js or
  // CommonJS.
  if(typeof exports !== 'undefined') {
    factory(exports);
  } else if(globalObject) {
    // Export hljs globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global hljs.
    globalObject.hljs = factory({});

    // Finally register the global hljs with AMD.
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.hljs;
      });
    }
  }

}(function(hljs) {
  // Convenience variables for build-in objects
  var ArrayProto = [],
      objectKeys = Object.keys;

  // Global internal variables used within the highlight.js library.
  var languages = {},
      aliases   = {};

  // Regular expressions used throughout the highlight.js library.
  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

  // The object will be assigned by the build tool. It used to synchronize API 
  // of external language files with minified version of the highlight.js library.
  var API_REPLACES;

  var spanEndTag = '</span>';

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  var options = {
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: undefined
  };


  /* Utility functions */

  function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function tag(node) {
    return node.nodeName.toLowerCase();
  }

  function testRe(re, lexeme) {
    var match = re && re.exec(lexeme);
    return match && match.index === 0;
  }

  function isNotHighlighted(language) {
    return noHighlightRe.test(language);
  }

  function blockLanguage(block) {
    var i, match, length, _class;
    var classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    match = languagePrefixRe.exec(classes);
    if (match) {
      return getLanguage(match[1]) ? match[1] : 'no-highlight';
    }

    classes = classes.split(/\s+/);

    for (i = 0, length = classes.length; i < length; i++) {
      _class = classes[i];

      if (isNotHighlighted(_class) || getLanguage(_class)) {
        return _class;
      }
    }
  }

  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
    var key;
    var result = {};
    var objects = Array.prototype.slice.call(arguments, 1);

    for (key in parent)
      result[key] = parent[key];
    objects.forEach(function(obj) {
      for (key in obj)
        result[key] = obj[key];
    });
    return result;
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType === 3)
          offset += child.nodeValue.length;
        else if (child.nodeType === 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          // Prevent void elements from having an end tag that would actually
          // double them in the output. There are more void elements in HTML
          // but we list only those realistically expected in code display.
          if (!tag(child).match(/br|hr|img|input/)) {
            result.push({
              event: 'stop',
              offset: offset,
              node: child
            });
          }
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(original, highlighted, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (!original.length || !highlighted.length) {
        return original.length ? original : highlighted;
      }
      if (original[0].offset !== highlighted[0].offset) {
        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
      }

      /*
      To avoid starting the stream just before it should stop the order is
      ensured that original always starts first and closes last:

      if (event1 == 'start' && event2 == 'start')
        return original;
      if (event1 == 'start' && event2 == 'stop')
        return highlighted;
      if (event1 == 'stop' && event2 == 'start')
        return original;
      if (event1 == 'stop' && event2 == 'stop')
        return highlighted;

      ... which is collapsed to:
      */
      return highlighted[0].event === 'start' ? original : highlighted;
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
    }

    function close(node) {
      result += '</' + tag(node) + '>';
    }

    function render(event) {
      (event.event === 'start' ? open : close)(event.node);
    }

    while (original.length || highlighted.length) {
      var stream = selectStream();
      result += escape(value.substring(processed, stream[0].offset));
      processed = stream[0].offset;
      if (stream === original) {
        /*
        On any opening or closing tag of the original markup we first close
        the entire highlighted node stack, then render the original tag along
        with all the following original tags at the same offset and then
        reopen all the tags on the highlighted stack.
        */
        nodeStack.reverse().forEach(close);
        do {
          render(stream.splice(0, 1)[0]);
          stream = selectStream();
        } while (stream === original && stream.length && stream[0].offset === processed);
        nodeStack.reverse().forEach(open);
      } else {
        if (stream[0].event === 'start') {
          nodeStack.push(stream[0].node);
        } else {
          nodeStack.pop();
        }
        render(stream.splice(0, 1)[0]);
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function expand_mode(mode) {
    if (mode.variants && !mode.cached_variants) {
      mode.cached_variants = mode.variants.map(function(variant) {
        return inherit(mode, {variants: null}, variant);
      });
    }
    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
  }

  function restoreLanguageApi(obj) {
    if(API_REPLACES && !obj.langApiRestored) {
      obj.langApiRestored = true;
      for(var key in API_REPLACES)
        obj[key] && (obj[API_REPLACES[key]] = obj[key]);
      (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
    }
  }

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return new RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    // joinRe logically computes regexps.join(separator), but fixes the
    // backreferences so they continue to match.
    function joinRe(regexps, separator) {
      // backreferenceRe matches an open parenthesis or backreference. To avoid
      // an incorrect parse, it additionally matches the following:
      // - [...] elements, where the meaning of parentheses and escapes change
      // - other escape sequences, so we do not misparse escape sequences as
      //   interesting elements
      // - non-matching or lookahead parentheses, which do not capture. These
      //   follow the '(' with a '?'.
      var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      var numCaptures = 0;
      var ret = '';
      for (var i = 0; i < regexps.length; i++) {
        var offset = numCaptures;
        var re = reStr(regexps[i]);
        if (i > 0) {
          ret += separator;
        }
        while (re.length > 0) {
          var match = backreferenceRe.exec(re);
          if (match == null) {
            ret += re;
            break;
          }
          ret += re.substring(0, match.index);
          re = re.substring(match.index + match[0].length);
          if (match[0][0] == '\\' && match[1]) {
            // Adjust the backreference.
            ret += '\\' + String(Number(match[1]) + offset);
          } else {
            ret += match[0];
            if (match[0] == '(') {
              numCaptures++;
            }
          }
        }
      }
      return ret;
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      mode.keywords = mode.keywords || mode.beginKeywords;
      if (mode.keywords) {
        var compiled_keywords = {};

        var flatten = function(className, str) {
          if (language.case_insensitive) {
            str = str.toLowerCase();
          }
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          });
        };

        if (typeof mode.keywords === 'string') { // string
          flatten('keyword', mode.keywords);
        } else {
          objectKeys(mode.keywords).forEach(function (className) {
            flatten(className, mode.keywords[className]);
          });
        }
        mode.keywords = compiled_keywords;
      }
      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

      if (parent) {
        if (mode.beginKeywords) {
          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
        }
        if (!mode.begin)
          mode.begin = /\B|\b/;
        mode.beginRe = langRe(mode.begin);
        if (mode.endSameAsBegin)
          mode.end = mode.begin;
        if (!mode.end && !mode.endsWithParent)
          mode.end = /\B|\b/;
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance == null)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
        return expand_mode(c === 'self' ? mode : c);
      }));
      mode.contains.forEach(function(c) {compileMode(c, mode);});

      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators =
        mode.contains.map(function(c) {
          return c.beginKeywords ? '\\.?(?:' + c.begin + ')\\.?' : c.begin;
        })
        .concat([mode.terminator_end, mode.illegal])
        .map(reStr)
        .filter(Boolean);
      mode.terminators = terminators.length ? langRe(joinRe(terminators, '|'), true) : {exec: function(/*s*/) {return null;}};
    }
    
    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name, or an alias, and a
  string with the code to highlight. Returns an object with the following
  properties:

  - relevance (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(name, value, ignore_illegals, continuation) {

    function escapeRe(value) {
      return new RegExp(value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
    }

    function subMode(lexeme, mode) {
      var i, length;

      for (i = 0, length = mode.contains.length; i < length; i++) {
        if (testRe(mode.contains[i].beginRe, lexeme)) {
          if (mode.contains[i].endSameAsBegin) {
            mode.contains[i].endRe = escapeRe( mode.contains[i].beginRe.exec(lexeme)[0] );
          }
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexeme) {
      if (testRe(mode.endRe, lexeme)) {
        while (mode.endsParent && mode.parent) {
          mode = mode.parent;
        }
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexeme);
      }
    }

    function isIllegal(lexeme, mode) {
      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
      var classPrefix = noPrefix ? '' : options.classPrefix,
          openSpan    = '<span class="' + classPrefix,
          closeSpan   = leaveOpen ? '' : spanEndTag;

      openSpan += classname + '">';

      return openSpan + insideSpan + closeSpan;
    }

    function processKeywords() {
      var keyword_match, last_index, match, result;

      if (!top.keywords)
        return escape(mode_buffer);

      result = '';
      last_index = 0;
      top.lexemesRe.lastIndex = 0;
      match = top.lexemesRe.exec(mode_buffer);

      while (match) {
        result += escape(mode_buffer.substring(last_index, match.index));
        keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          relevance += keyword_match[1];
          result += buildSpan(keyword_match[0], escape(match[0]));
        } else {
          result += escape(match[0]);
        }
        last_index = top.lexemesRe.lastIndex;
        match = top.lexemesRe.exec(mode_buffer);
      }
      return result + escape(mode_buffer.substr(last_index));
    }

    function processSubLanguage() {
      var explicit = typeof top.subLanguage === 'string';
      if (explicit && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }

      var result = explicit ?
                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      if (explicit) {
        continuations[top.subLanguage] = result.top;
      }
      return buildSpan(result.language, result.value, false, true);
    }

    function processBuffer() {
      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
      mode_buffer = '';
    }

    function startNewMode(mode) {
      result += mode.className? buildSpan(mode.className, '', true): '';
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexeme(buffer, lexeme) {

      mode_buffer += buffer;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      var new_mode = subMode(lexeme, top);
      if (new_mode) {
        if (new_mode.skip) {
          mode_buffer += lexeme;
        } else {
          if (new_mode.excludeBegin) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
            mode_buffer = lexeme;
          }
        }
        startNewMode(new_mode, lexeme);
        return new_mode.returnBegin ? 0 : lexeme.length;
      }

      var end_mode = endOfMode(top, lexeme);
      if (end_mode) {
        var origin = top;
        if (origin.skip) {
          mode_buffer += lexeme;
        } else {
          if (!(origin.returnEnd || origin.excludeEnd)) {
            mode_buffer += lexeme;
          }
          processBuffer();
          if (origin.excludeEnd) {
            mode_buffer = lexeme;
          }
        }
        do {
          if (top.className) {
            result += spanEndTag;
          }
          if (!top.skip && !top.subLanguage) {
            relevance += top.relevance;
          }
          top = top.parent;
        } while (top !== end_mode.parent);
        if (end_mode.starts) {
          if (end_mode.endSameAsBegin) {
            end_mode.starts.endRe = end_mode.endRe;
          }
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexeme.length;
      }

      if (isIllegal(lexeme, top))
        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexemes should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexeme;
      return lexeme.length || 1;
    }

    var language = getLanguage(name);
    if (!language) {
      throw new Error('Unknown language: "' + name + '"');
    }

    compileLanguage(language);
    var top = continuation || language;
    var continuations = {}; // keep continuations for sub-languages
    var result = '', current;
    for(current = top; current !== language; current = current.parent) {
      if (current.className) {
        result = buildSpan(current.className, '', true) + result;
      }
    }
    var mode_buffer = '';
    var relevance = 0;
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexeme(value.substring(index, match.index), match[0]);
        index = match.index + count;
      }
      processLexeme(value.substr(index));
      for(current = top; current.parent; current = current.parent) { // close dangling modes
        if (current.className) {
          result += spanEndTag;
        }
      }
      return {
        relevance: relevance,
        value: result,
        language: name,
        top: top
      };
    } catch (e) {
      if (e.message && e.message.indexOf('Illegal') !== -1) {
        return {
          relevance: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text, languageSubset) {
    languageSubset = languageSubset || options.languages || objectKeys(languages);
    var result = {
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
      var current = highlight(name, text, false);
      current.language = name;
      if (current.relevance > second_best.relevance) {
        second_best = current;
      }
      if (current.relevance > result.relevance) {
        second_best = result;
        result = current;
      }
    });
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value) {
    return !(options.tabReplace || options.useBR)
      ? value
      : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === '\n') {
            return '<br>';
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return '';
      });
  }

  function buildClassName(prevClassName, currentLang, resultLang) {
    var language = currentLang ? aliases[currentLang] : resultLang,
        result   = [prevClassName.trim()];

    if (!prevClassName.match(/\bhljs\b/)) {
      result.push('hljs');
    }

    if (prevClassName.indexOf(language) === -1) {
      result.push(language);
    }

    return result.join(' ').trim();
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block) {
    var node, originalStream, result, resultNode, text;
    var language = blockLanguage(block);

    if (isNotHighlighted(language))
        return;

    if (options.useBR) {
      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
    } else {
      node = block;
    }
    text = node.textContent;
    result = language ? highlight(language, text, true) : highlightAuto(text);

    originalStream = nodeStream(node);
    if (originalStream.length) {
      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      resultNode.innerHTML = result.value;
      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
    }
    result.value = fixMarkup(result.value);

    block.innerHTML = result.value;
    block.className = buildClassName(block.className, language, result.language);
    block.result = {
      language: result.language,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Updates highlight.js global options with values passed in the form of an object.
  */
  function configure(user_options) {
    options = inherit(options, user_options);
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;

    var blocks = document.querySelectorAll('pre code');
    ArrayProto.forEach.call(blocks, highlightBlock);
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    addEventListener('DOMContentLoaded', initHighlighting, false);
    addEventListener('load', initHighlighting, false);
  }

  function registerLanguage(name, language) {
    var lang = languages[name] = language(hljs);
    restoreLanguageApi(lang);
    if (lang.aliases) {
      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
    }
  }

  function listLanguages() {
    return objectKeys(languages);
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  function autoDetection(name) {
    var lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /* Interface definition */

  hljs.highlight = highlight;
  hljs.highlightAuto = highlightAuto;
  hljs.fixMarkup = fixMarkup;
  hljs.highlightBlock = highlightBlock;
  hljs.configure = configure;
  hljs.initHighlighting = initHighlighting;
  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
  hljs.registerLanguage = registerLanguage;
  hljs.listLanguages = listLanguages;
  hljs.getLanguage = getLanguage;
  hljs.autoDetection = autoDetection;
  hljs.inherit = inherit;

  // Common regexps
  hljs.IDENT_RE = '[a-zA-Z]\\w*';
  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  hljs.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  hljs.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  hljs.PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  };
  hljs.COMMENT = function (begin, end, inherits) {
    var mode = hljs.inherit(
      {
        className: 'comment',
        begin: begin, end: end,
        contains: []
      },
      inherits || {}
    );
    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
    mode.contains.push({
      className: 'doctag',
      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
      relevance: 0
    });
    return mode;
  };
  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
  hljs.NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE,
    relevance: 0
  };
  hljs.C_NUMBER_MODE = {
    className: 'number',
    begin: hljs.C_NUMBER_RE,
    relevance: 0
  };
  hljs.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: hljs.BINARY_NUMBER_RE,
    relevance: 0
  };
  hljs.CSS_NUMBER_MODE = {
    className: 'number',
    begin: hljs.NUMBER_RE + '(' +
      '%|em|ex|ch|rem'  +
      '|vw|vh|vmin|vmax' +
      '|cm|mm|in|pt|pc|px' +
      '|deg|grad|rad|turn' +
      '|s|ms' +
      '|Hz|kHz' +
      '|dpi|dpcm|dppx' +
      ')?',
    relevance: 0
  };
  hljs.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  hljs.TITLE_MODE = {
    className: 'title',
    begin: hljs.IDENT_RE,
    relevance: 0
  };
  hljs.UNDERSCORE_TITLE_MODE = {
    className: 'title',
    begin: hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };
  hljs.METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0
  };

  return hljs;
}));

},{}],16:[function(require,module,exports){
module.exports = function(hljs) {
  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
  return {
    aliases: ['apacheconf'],
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      {className: 'section', begin: '</?', end: '>'},
      {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        // keywords aren’t needed for highlighting per se, they only boost relevance
        // for a very generally defined mode (starts with a word, ends with line-end
        keywords: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
            'sethandler errordocument loadmodule options header listen serverroot ' +
            'servername'
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: 'on off all'
          },
          contains: [
            {
              className: 'meta',
              begin: '\\s\\[', end: '\\]$'
            },
            {
              className: 'variable',
              begin: '[\\$%]\\{', end: '\\}',
              contains: ['self', NUMBER]
            },
            NUMBER,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ],
    illegal: /\S/
  };
};
},{}],17:[function(require,module,exports){
module.exports = function(hljs) {
  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };

  return {
    aliases: ['sh', 'zsh'],
    lexemes: /\b-?[a-z\._]+\b/,
    keywords: {
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp',
      _:
        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
    },
    contains: [
      {
        className: 'meta',
        begin: /^#![^\n]+sh\s*$/,
        relevance: 10
      },
      {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
        relevance: 0
      },
      hljs.HASH_COMMENT_MODE,
      QUOTE_STRING,
      APOS_STRING,
      VAR
    ]
  };
};
},{}],18:[function(require,module,exports){
module.exports = function(hljs) {
  var CPP_PRIMITIVE_TYPES = {
    className: 'keyword',
    begin: '\\b[a-z\\d_]*_t\\b'
  };

  var STRINGS = {
    className: 'string',
    variants: [
      {
        begin: '(u8?|U|L)?"', end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      { begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/ },
      {
        begin: '\'\\\\?.', end: '\'',
        illegal: '.'
      }
    ]
  };

  var NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(0b[01\']+)' },
      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' },
      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
    ],
    relevance: 0
  };

  var PREPROCESSOR =       {
    className: 'meta',
    begin: /#\s*[a-z]+\b/, end: /$/,
    keywords: {
      'meta-keyword':
        'if else elif endif define undef warning error line ' +
        'pragma ifdef ifndef include'
    },
    contains: [
      {
        begin: /\\\n/, relevance: 0
      },
      hljs.inherit(STRINGS, {className: 'meta-string'}),
      {
        className: 'meta-string',
        begin: /<[^\n>]*>/, end: /$/,
        illegal: '\\n',
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };

  var FUNCTION_TITLE = hljs.IDENT_RE + '\\s*\\(';

  var CPP_KEYWORDS = {
    keyword: 'int float while private char catch import module export virtual operator sizeof ' +
      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +
      'unsigned long volatile static protected bool template mutable if public friend ' +
      'do goto auto void enum else break extern using asm case typeid ' +
      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
      'switch continue inline delete alignof constexpr decltype ' +
      'noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary ' +
      'atomic_bool atomic_char atomic_schar ' +
      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
      'atomic_ullong new throw return ' +
      'and or not',
    built_in: 'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
      'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' +
      'unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos ' +
      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
      'fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
      'vfprintf vprintf vsprintf endl initializer_list unique_ptr',
    literal: 'true false nullptr NULL'
  };

  var EXPRESSION_CONTAINS = [
    CPP_PRIMITIVE_TYPES,
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    NUMBERS,
    STRINGS
  ];

  return {
    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
    keywords: CPP_KEYWORDS,
    illegal: '</',
    contains: EXPRESSION_CONTAINS.concat([
      PREPROCESSOR,
      {
        begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
        keywords: CPP_KEYWORDS,
        contains: ['self', CPP_PRIMITIVE_TYPES]
      },
      {
        begin: hljs.IDENT_RE + '::',
        keywords: CPP_KEYWORDS
      },
      {
        // This mode covers expression context where we can't expect a function
        // definition and shouldn't highlight anything that looks like one:
        // `return some()`, `else if()`, `(x*sum(1, 2))`
        variants: [
          {begin: /=/, end: /;/},
          {begin: /\(/, end: /\)/},
          {beginKeywords: 'new throw return else', end: /;/}
        ],
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
          {
            begin: /\(/, end: /\)/,
            keywords: CPP_KEYWORDS,
            contains: EXPRESSION_CONTAINS.concat(['self']),
            relevance: 0
          }
        ]),
        relevance: 0
      },
      {
        className: 'function',
        begin: '(' + hljs.IDENT_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
        returnBegin: true, end: /[{;=]/,
        excludeEnd: true,
        keywords: CPP_KEYWORDS,
        illegal: /[^\w\s\*&]/,
        contains: [
          {
            begin: FUNCTION_TITLE, returnBegin: true,
            contains: [hljs.TITLE_MODE],
            relevance: 0
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: CPP_KEYWORDS,
            relevance: 0,
            contains: [
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRINGS,
              NUMBERS,
              CPP_PRIMITIVE_TYPES,
              // Count matching parentheses.
              {
                begin: /\(/, end: /\)/,
                keywords: CPP_KEYWORDS,
                relevance: 0,
                contains: [
                  'self',
                  hljs.C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  STRINGS,
                  NUMBERS,
                  CPP_PRIMITIVE_TYPES
                ]
              }
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          PREPROCESSOR
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class struct', end: /[{;:]/,
        contains: [
          {begin: /</, end: />/, contains: ['self']}, // skip generic stuff
          hljs.TITLE_MODE
        ]
      }
    ]),
    exports: {
      preprocessor: PREPROCESSOR,
      strings: STRINGS,
      keywords: CPP_KEYWORDS
    }
  };
};
},{}],19:[function(require,module,exports){
module.exports = function(hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var RULE = {
    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
    contains: [
      {
        className: 'attribute',
        begin: /\S/, end: ':', excludeEnd: true,
        starts: {
          endsWithParent: true, excludeEnd: true,
          contains: [
            {
              begin: /[\w-]+\(/, returnBegin: true,
              contains: [
                {
                  className: 'built_in',
                  begin: /[\w-]+/
                },
                {
                  begin: /\(/, end: /\)/,
                  contains: [
                    hljs.APOS_STRING_MODE,
                    hljs.QUOTE_STRING_MODE
                  ]
                }
              ]
            },
            hljs.CSS_NUMBER_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
              className: 'number', begin: '#[0-9A-Fa-f]+'
            },
            {
              className: 'meta', begin: '!important'
            }
          ]
        }
      }
    ]
  };

  return {
    case_insensitive: true,
    illegal: /[=\/|'\$]/,
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
      },
      {
        className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
      },
      {
        className: 'selector-attr',
        begin: /\[/, end: /\]/,
        illegal: '$'
      },
      {
        className: 'selector-pseudo',
        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
      },
      {
        begin: '@(font-face|page)',
        lexemes: '[a-z-]+',
        keywords: 'font-face page'
      },
      {
        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
                                 // because it doesn’t let it to be parsed as
                                 // a rule set but instead drops parser into
                                 // the default mode which is how it should be.
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: /\w+/
          },
          {
            begin: /\s/, endsWithParent: true, excludeEnd: true,
            relevance: 0,
            contains: [
              hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag', begin: IDENT_RE,
        relevance: 0
      },
      {
        begin: '{', end: '}',
        illegal: /\S/,
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          RULE,
        ]
      }
    ]
  };
};
},{}],20:[function(require,module,exports){
module.exports = function(hljs) {
  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    aliases: ['dst'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'template-tag',
        begin: /\{[#\/]/, end: /\}/, illegal: /;/,
        contains: [
          {
            className: 'name',
            begin: /[a-zA-Z\.-]+/,
            starts: {
              endsWithParent: true, relevance: 0,
              contains: [
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{/, end: /\}/, illegal: /;/,
        keywords: EXPRESSION_KEYWORDS
      }
    ]
  };
};
},{}],21:[function(require,module,exports){
module.exports = function (hljs) {
  return {
    aliases: ['feature'],
    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
    contains: [
      {
        className: 'symbol',
        begin: '\\*',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '@[^@\\s]+'
      },
      {
        begin: '\\|', end: '\\|\\w*$',
        contains: [
          {
            className: 'string',
            begin: '[^|]+'
          }
        ]
      },
      {
        className: 'variable',
        begin: '<', end: '>'
      },
      hljs.HASH_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""', end: '"""'
      },
      hljs.QUOTE_STRING_MODE
    ]
  };
};
},{}],22:[function(require,module,exports){
module.exports = function(hljs) {
  return {
    keywords: {
      keyword:
        // Statements
        'break continue discard do else for if return while switch case default ' +
        // Qualifiers
        'attribute binding buffer ccw centroid centroid varying coherent column_major const cw ' +
        'depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing ' +
        'flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant ' +
        'invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y ' +
        'local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left ' +
        'out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f '+
        'r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict ' +
        'rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 ' +
        'rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 ' +
        'rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip ' +
        'triangles triangles_adjacency uniform varying vertices volatile writeonly',
      type:
        'atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 ' +
        'dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray ' +
        'iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer' +
        'iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray ' +
        'image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray ' +
        'isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D ' +
        'isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 ' +
        'mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray ' +
        'sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow ' +
        'sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D ' +
        'samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow ' +
        'image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect ' +
        'uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray ' +
        'usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D ' +
        'samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void',
      built_in:
        // Constants
        'gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes ' +
        'gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms ' +
        'gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers ' +
        'gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits ' +
        'gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize ' +
        'gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters ' +
        'gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors ' +
        'gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers ' +
        'gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents ' +
        'gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits ' +
        'gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents ' +
        'gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset ' +
        'gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms ' +
        'gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits ' +
        'gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents ' +
        'gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters ' +
        'gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents ' +
        'gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents ' +
        'gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits ' +
        'gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors ' +
        'gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms ' +
        'gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits ' +
        'gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset ' +
        // Variables
        'gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial ' +
        'gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color ' +
        'gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord ' +
        'gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor ' +
        'gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial ' +
        'gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel ' +
        'gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix ' +
        'gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose ' +
        'gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose ' +
        'gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 ' +
        'gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 ' +
        'gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ ' +
        'gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord ' +
        'gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse ' +
        'gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask ' +
        'gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter ' +
        'gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose ' +
        'gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out ' +
        // Functions
        'EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin ' +
        'asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement ' +
        'atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier ' +
        'bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross ' +
        'dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB ' +
        'floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan ' +
        'greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap ' +
        'imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad ' +
        'imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset ' +
        'interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log ' +
        'log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer ' +
        'memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 ' +
        'normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 ' +
        'packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod ' +
        'shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh ' +
        'smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod ' +
        'texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod ' +
        'texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod ' +
        'textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset ' +
        'textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset ' +
        'textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod ' +
        'textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 ' +
        'unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow',
      literal: 'true false'
    },
    illegal: '"',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$'
      }
    ]
  };
};
},{}],23:[function(require,module,exports){
module.exports = function(hljs) {
  var BUILT_INS = {'builtin-name': 'each in with if else unless bindattr action collection debugger log outlet template unbound view yield'};
  return {
    aliases: ['hbs', 'html.hbs', 'html.handlebars'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
    hljs.COMMENT('{{!(--)?', '(--)?}}'),
      {
        className: 'template-tag',
        begin: /\{\{[#\/]/, end: /\}\}/,
        contains: [
          {
            className: 'name',
            begin: /[a-zA-Z\.-]+/,
            keywords: BUILT_INS,
            starts: {
              endsWithParent: true, relevance: 0,
              contains: [
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{\{/, end: /\}\}/,
        keywords: BUILT_INS
      }
    ]
  };
};
},{}],24:[function(require,module,exports){
module.exports = function(hljs) {
  var VERSION = 'HTTP/[0-9\\.]+';
  return {
    aliases: ['https'],
    illegal: '\\S',
    contains: [
      {
        begin: '^' + VERSION, end: '$',
        contains: [{className: 'number', begin: '\\b\\d{3}\\b'}]
      },
      {
        begin: '^[A-Z]+ (.*?) ' + VERSION + '$', returnBegin: true, end: '$',
        contains: [
          {
            className: 'string',
            begin: ' ', end: ' ',
            excludeBegin: true, excludeEnd: true
          },
          {
            begin: VERSION
          },
          {
            className: 'keyword',
            begin: '[A-Z]+'
          }
        ]
      },
      {
        className: 'attribute',
        begin: '^\\w', end: ': ', excludeEnd: true,
        illegal: '\\n|\\s|=',
        starts: {end: '$', relevance: 0}
      },
      {
        begin: '\\n\\n',
        starts: {subLanguage: [], endsWithParent: true}
      }
    ]
  };
};
},{}],25:[function(require,module,exports){
module.exports = function(hljs) {
  var JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';
  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
  var KEYWORDS =
    'false synchronized int abstract float private char boolean var static null if const ' +
    'for true while long strictfp finally protected import native final void ' +
    'enum else break transient catch instanceof byte super volatile case assert short ' +
    'package default double public try this switch continue throws protected public private ' +
    'module requires exports do';

  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
  var JAVA_NUMBER_RE = '\\b' +
    '(' +
      '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
      '|' +
      '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
      '|' +
      '(' +
        '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' +
        '|' +
        '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' +
      ')' +
      '([eE][-+]?\\d+)?' + // octal, decimal, float
    ')' +
    '[lLfF]?';
  var JAVA_NUMBER_MODE = {
    className: 'number',
    begin: JAVA_NUMBER_RE,
    relevance: 0
  };

  return {
    aliases: ['jsp'],
    keywords: KEYWORDS,
    illegal: /<\/|#/,
    contains: [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/, relevance: 0
            },
            {
              className : 'doctag',
              begin : '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'class',
        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
        keywords: 'class interface',
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: 'new throw return else',
        relevance: 0
      },
      {
        className: 'function',
        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
            relevance: 0,
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      JAVA_NUMBER_MODE,
      {
        className: 'meta', begin: '@[A-Za-z]+'
      }
    ]
  };
};
},{}],26:[function(require,module,exports){
module.exports = function(hljs) {
  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in of if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const export super debugger as async await static ' +
      // ECMAScript 6 modules import
      'import from as'
    ,
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
      'Promise'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ]
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['js', 'jsx'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
      },
      {
        className: 'meta',
        begin: /^#!/, end: /$/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // E4X / JSX
            begin: /</, end: /(\/\w+|\w+\/)>/,
            subLanguage: 'xml',
            contains: [
              {begin: /<\w+\s*\/>/, skip: true},
              {
                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                contains: [
                  {begin: /<\w+\s*\/>/, skip: true},
                  'self'
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      hljs.METHOD_GUARD,
      { // ES6 class
        className: 'class',
        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
        illegal: /[:"\[\]]/,
        contains: [
          {beginKeywords: 'extends'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'constructor get set', end: /\{/, excludeEnd: true
      }
    ],
    illegal: /#(?!!)/
  };
};
},{}],27:[function(require,module,exports){
module.exports = function(hljs) {
  var LITERALS = {literal: 'true false null'};
  var TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  var VALUE_CONTAINER = {
    end: ',', endsWithParent: true, excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  var OBJECT = {
    begin: '{', end: '}',
    contains: [
      {
        className: 'attr',
        begin: /"/, end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n',
      },
      hljs.inherit(VALUE_CONTAINER, {begin: /:/})
    ],
    illegal: '\\S'
  };
  var ARRAY = {
    begin: '\\[', end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
  return {
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
};
},{}],28:[function(require,module,exports){
module.exports = function(hljs) {
  var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

  /* Generic Modes */

  var RULES = [], VALUE = []; // forward def. for recursive modes

  var STRING_MODE = function(c) { return {
    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
    className: 'string', begin: '~?' + c + '.*?' + c
  };};

  var IDENT_MODE = function(name, begin, relevance) { return {
    className: name, begin: begin, relevance: relevance
  };};

  var PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
  };

  // generic Less highlighter (used almost everywhere except selectors):
  VALUE.push(
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING_MODE("'"),
    STRING_MODE('"'),
    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
    {
      begin: '(url|data-uri)\\(',
      starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
    },
    IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'),
    PARENS_MODE,
    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),
    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
    },
    {
      className: 'meta',
      begin: '!important'
    }
  );

  var VALUE_WITH_RULESETS = VALUE.concat({
    begin: '{', end: '}', contains: RULES
  });

  var MIXIN_GUARD_MODE = {
    beginKeywords: 'when', endsWithParent: true,
    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match
  };

  /* Rule-Level Modes */

  var RULE_MODE = {
    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
    relevance: 0,
    contains: [
      {
        className: 'attribute',
        begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
        starts: {
          endsWithParent: true, illegal: '[<=$]',
          relevance: 0,
          contains: VALUE
        }
      }
    ]
  };

  var AT_RULE_MODE = {
    className: 'keyword',
    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}
  };

  // variable definitions and calls
  var VAR_RULE_MODE = {
    className: 'variable',
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
      {begin: '@' + IDENT_RE}
    ],
    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
  };

  var SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [{
      begin: '[\\.#:&\\[>]', end: '[;{}]'  // mixin calls end with ';'
      }, {
      begin: INTERP_IDENT_RE, end: '{'
    }],
    returnBegin: true,
    returnEnd:   true,
    illegal: '[<=\'$"]',
    relevance: 0,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      MIXIN_GUARD_MODE,
      IDENT_MODE('keyword',  'all\\b'),
      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag
      IDENT_MODE('selector-tag',  INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
      IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),
      IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0),
      IDENT_MODE('selector-tag',  '&', 0),
      {className: 'selector-attr', begin: '\\[', end: '\\]'},
      {className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
      {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
      {begin: '!important'} // eat !important after mixin call or it will be colored as tag
    ]
  };

  RULES.push(
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    AT_RULE_MODE,
    VAR_RULE_MODE,
    RULE_MODE,
    SELECTOR_MODE
  );

  return {
    case_insensitive: true,
    illegal: '[=>\'/<($"]',
    contains: RULES
  };
};
},{}],29:[function(require,module,exports){
module.exports = function(hljs) {
  /* Variables: simple (eg $(var)) and special (eg $@) */
  var VARIABLE = {
    className: 'variable',
    variants: [
      {
        begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        begin: /\$[@%<?\^\+\*]/
      },
    ]
  };
  /* Quoted string with variables inside */
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE,
    ]
  };
  /* Function: $(func arg,...) */
  var FUNC = {
    className: 'variable',
    begin: /\$\([\w-]+\s/, end: /\)/,
    keywords: {
      built_in:
        'subst patsubst strip findstring filter filter-out sort ' +
        'word wordlist firstword lastword dir notdir suffix basename ' +
        'addsuffix addprefix join wildcard realpath abspath error warning ' +
        'shell origin flavor foreach if or and call eval file value',
    },
    contains: [
      VARIABLE,
    ]
  };
  /* Variable assignment */
  var VAR_ASSIG = {
    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*[:+?]?=',
    illegal: '\\n',
    returnBegin: true,
    contains: [
      {
        begin: '^' + hljs.UNDERSCORE_IDENT_RE, end: '[:+?]?=',
        excludeEnd: true,
      }
    ]
  };
  /* Meta targets (.PHONY) */
  var META = {
    className: 'meta',
    begin: /^\.PHONY:/, end: /$/,
    keywords: {'meta-keyword': '.PHONY'},
    lexemes: /[\.\w]+/
  };
  /* Targets */
  var TARGET = {
    className: 'section',
    begin: /^[^\s]+:/, end: /$/,
    contains: [VARIABLE,]
  };
  return {
    aliases: ['mk', 'mak'],
    keywords:
      'define endef undefine ifdef ifndef ifeq ifneq else endif ' +
      'include -include sinclude override export unexport private vpath',
    lexemes: /[\w-]+/,
    contains: [
      hljs.HASH_COMMENT_MODE,
      VARIABLE,
      QUOTE_STRING,
      FUNC,
      VAR_ASSIG,
      META,
      TARGET,
    ]
  };
};
},{}],30:[function(require,module,exports){
module.exports = function(hljs) {
  return {
    aliases: ['md', 'mkdown', 'mkd'],
    contains: [
      // highlight headers
      {
        className: 'section',
        variants: [
          { begin: '^#{1,6}', end: '$' },
          { begin: '^.+?\\n[=-]{2,}$' }
        ]
      },
      // inline html
      {
        begin: '<', end: '>',
        subLanguage: 'xml',
        relevance: 0
      },
      // lists (indicators only)
      {
        className: 'bullet',
        begin: '^([*+-]|(\\d+\\.))\\s+'
      },
      // strong segments
      {
        className: 'strong',
        begin: '[*_]{2}.+?[*_]{2}'
      },
      // emphasis segments
      {
        className: 'emphasis',
        variants: [
          { begin: '\\*.+?\\*' },
          { begin: '_.+?_'
          , relevance: 0
          }
        ]
      },
      // blockquotes
      {
        className: 'quote',
        begin: '^>\\s+', end: '$'
      },
      // code snippets
      {
        className: 'code',
        variants: [
          {
            begin: '^```\w*\s*$', end: '^```\s*$'
          },
          {
            begin: '`.+?`'
          },
          {
            begin: '^( {4}|\t)', end: '$',
            relevance: 0
          }
        ]
      },
      // horizontal rules
      {
        begin: '^[-\\*]{3,}', end: '$'
      },
      // using links - title and link
      {
        begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
        returnBegin: true,
        contains: [
          {
            className: 'string',
            begin: '\\[', end: '\\]',
            excludeBegin: true,
            returnEnd: true,
            relevance: 0
          },
          {
            className: 'link',
            begin: '\\]\\(', end: '\\)',
            excludeBegin: true, excludeEnd: true
          },
          {
            className: 'symbol',
            begin: '\\]\\[', end: '\\]',
            excludeBegin: true, excludeEnd: true
          }
        ],
        relevance: 10
      },
      {
        begin: /^\[[^\n]+\]:/,
        returnBegin: true,
        contains: [
          {
            className: 'symbol',
            begin: /\[/, end: /\]/,
            excludeBegin: true, excludeEnd: true
          },
          {
            className: 'link',
            begin: /:\s*/, end: /$/,
            excludeBegin: true
          }
        ]
      }
    ]
  };
};
},{}],31:[function(require,module,exports){
module.exports = function(hljs) {
  var VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'meta', begin: /<\?(php)?|\?>/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      {
        begin: 'b"', end: '"'
      },
      {
        begin: 'b\'', end: '\''
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
    ]
  };
  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
    case_insensitive: true,
    keywords:
      'and include_once list abstract global private echo interface as static endswitch ' +
      'array null if endwhile or const for endforeach self var while isset public ' +
      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
      'enddeclare final try switch continue endfor endif declare unset true false ' +
      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
      'yield finally',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.COMMENT(
        '__halt_compiler.+?;',
        false,
        {
          endsWithParent: true,
          keywords: '__halt_compiler',
          lexemes: hljs.UNDERSCORE_IDENT_RE
        }
      ),
      {
        className: 'string',
        begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst',
            variants: [
              {begin: /\$\w+/},
              {begin: /\{\$/, end: /\}/}
            ]
          }
        ]
      },
      PREPROCESSOR,
      {
        className: 'keyword', begin: /\$this\b/
      },
      VARIABLE,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
        illegal: '\\$|\\[|%',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace', end: ';',
        illegal: /[\.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use', end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: '=>' // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
};
},{}],32:[function(require,module,exports){
module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      'and elif is global as in if from raise for except finally print import pass return ' +
      'exec else break not with class assert yield try while continue del or def lambda ' +
      'async await nonlocal|10',
    built_in:
      'Ellipsis NotImplemented',
    literal: 'False None True'
  };
  var PROMPT = {
    className: 'meta',  begin: /^(>>>|\.\.\.) /
  };
  var SUBST = {
    className: 'subst',
    begin: /\{/, end: /\}/,
    keywords: KEYWORDS,
    illegal: /#/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /(u|b)?r?'''/, end: /'''/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
        relevance: 10
      },
      {
        begin: /(u|b)?r?"""/, end: /"""/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
        relevance: 10
      },
      {
        begin: /(fr|rf|f)'''/, end: /'''/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT, SUBST]
      },
      {
        begin: /(fr|rf|f)"""/, end: /"""/,
        contains: [hljs.BACKSLASH_ESCAPE, PROMPT, SUBST]
      },
      {
        begin: /(u|r|ur)'/, end: /'/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)"/, end: /"/,
        relevance: 10
      },
      {
        begin: /(b|br)'/, end: /'/
      },
      {
        begin: /(b|br)"/, end: /"/
      },
      {
        begin: /(fr|rf|f)'/, end: /'/,
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      },
      {
        begin: /(fr|rf|f)"/, end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [
      {begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'},
      {begin: '\\b(0o[0-7]+)[lLjJ]?'},
      {begin: hljs.C_NUMBER_RE + '[lLjJ]?'}
    ]
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    contains: ['self', PROMPT, NUMBER, STRING]
  };
  SUBST.contains = [STRING, NUMBER, PROMPT];
  return {
    aliases: ['py', 'gyp', 'ipython'],
    keywords: KEYWORDS,
    illegal: /(<\/|->|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      STRING,
      hljs.HASH_COMMENT_MODE,
      {
        variants: [
          {className: 'function', beginKeywords: 'def'},
          {className: 'class', beginKeywords: 'class'}
        ],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          PARAMS,
          {
            begin: /->/, endsWithParent: true,
            keywords: 'None'
          }
        ]
      },
      {
        className: 'meta',
        begin: /^[\t ]*@/, end: /$/
      },
      {
        begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
      }
    ]
  };
};
},{}],33:[function(require,module,exports){
module.exports = function(hljs) {
  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  var VARIABLE = {
    className: 'variable',
    begin: '(\\$' + IDENT_RE + ')\\b'
  };
  var HEXCOLOR = {
    className: 'number', begin: '#[0-9A-Fa-f]+'
  };
  var DEF_INTERNALS = {
    className: 'attribute',
    begin: '[A-Z\\_\\.\\-]+', end: ':',
    excludeEnd: true,
    illegal: '[^\\s]',
    starts: {
      endsWithParent: true, excludeEnd: true,
      contains: [
        HEXCOLOR,
        hljs.CSS_NUMBER_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        {
          className: 'meta', begin: '!important'
        }
      ]
    }
  };
  return {
    case_insensitive: true,
    illegal: '[=/|\']',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
        relevance: 0
      },
      {
        className: 'selector-attr', begin: '\\[', end: '\\]',
        illegal: '$'
      },
      {
        className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
        relevance: 0
      },
      {
        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
      },
      {
        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
      },
      VARIABLE,
      {
        className: 'attribute',
        begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
        illegal: '[^\\s]'
      },
      {
        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
      },
      {
        begin: ':', end: ';',
        contains: [
          VARIABLE,
          HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            className: 'meta', begin: '!important'
          }
        ]
      },
      {
        begin: '@', end: '[{;]',
        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
        contains: [
          VARIABLE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          HEXCOLOR,
          hljs.CSS_NUMBER_MODE,
          {
            begin: '\\s[A-Za-z0-9_.-]+',
            relevance: 0
          }
        ]
      }
    ]
  };
};
},{}],34:[function(require,module,exports){
module.exports = function(hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '$');
  return {
    case_insensitive: true,
    illegal: /[<>{}*]/,
    contains: [
      {
        beginKeywords:
          'begin end start commit rollback savepoint lock alter create drop rename call ' +
          'delete do handler insert load replace select truncate update set show pragma grant ' +
          'merge describe use explain help declare prepare execute deallocate release ' +
          'unlock purge reset change stop analyze cache flush optimize repair kill ' +
          'install uninstall checksum restore check backup revoke comment values with',
        end: /;/, endsWithParent: true,
        lexemes: /[\w\.]+/,
        keywords: {
          keyword:
            'as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' +
            'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' +
            'all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply ' +
            'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' +
            'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' +
            'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' +
            'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' +
            'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' +
            'bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' +
            'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' +
            'char_length character_length characters characterset charindex charset charsetform charsetid check ' +
            'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' +
            'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' +
            'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' +
            'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' +
            'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' +
            'consider consistent constant constraint constraints constructor container content contents context ' +
            'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' +
            'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' +
            'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' +
            'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' +
            'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' +
            'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' +
            'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' +
            'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' +
            'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' +
            'deterministic diagnostics difference dimension direct_load directory disable disable_all ' +
            'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' +
            'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' +
            'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' +
            'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' +
            'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' +
            'execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external ' +
            'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' +
            'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' +
            'finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign ' +
            'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' +
            'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' +
            'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' +
            'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' +
            'hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified ' +
            'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' +
            'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' +
            'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' +
            'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' +
            'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' +
            'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase ' +
            'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' +
            'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' +
            'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' +
            'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' +
            'managed management manual map mapping mask master master_pos_wait match matched materialized max ' +
            'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' +
            'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' +
            'minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month ' +
            'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' +
            'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' +
            'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' +
            'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' +
            'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' +
            'noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe ' +
            'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' +
            'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' +
            'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' +
            'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' +
            'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' +
            'parameters parent parse partial partition partitions pascal passing password password_grace_time ' +
            'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' +
            'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' +
            'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' +
            'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' +
            'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' +
            'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' +
            'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' +
            'quotename radians raise rand range rank raw read reads readsize rebuild record records ' +
            'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' +
            'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' +
            'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' +
            'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' +
            'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' +
            'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' +
            'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' +
            'sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select ' +
            'self semi sequence sequential serializable server servererror session session_user sessions_per_user set ' +
            'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' +
            'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' +
            'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' +
            'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' +
            'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' +
            'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' +
            'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' +
            'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' +
            'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' +
            'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' +
            'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' +
            'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo ' +
            'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' +
            'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' +
            'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' +
            'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' +
            'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' +
            'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot ' +
            'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' +
            'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' +
            'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' +
            'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' +
            'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' +
            'wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped ' +
            'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' +
            'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
          literal:
            'true false null unknown',
          built_in:
            'array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number ' +
            'numeric real record serial serial8 smallint text time timestamp tinyint varchar varying void'
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}]
          },
          {
            className: 'string',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          COMMENT_MODE,
          hljs.HASH_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
};
},{}],35:[function(require,module,exports){
module.exports = function(hljs) {
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var KEYWORDS = {
    keyword:
      'in if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const class public private protected get set super ' +
      'static implements enum export import declare type namespace abstract ' +
      'as from extends async await',
    literal:
      'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document any number boolean string void Promise'
  };

  var DECORATOR = {
    className: 'meta',
    begin: '@' + JS_IDENT_RE,
  };

  var ARGS =
  {
    begin: '\\(',
    end: /\)/,
    keywords: KEYWORDS,
    contains: [
      'self',
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };

  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      DECORATOR,
      ARGS
    ]
  };

  return {
    aliases: ['ts'],
    keywords: KEYWORDS,
    contains: [
      {
        className: 'meta',
        begin: /^\s*['"]use strict['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      { // template string
        className: 'string',
        begin: '`', end: '`',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst',
            begin: '\\$\\{', end: '\\}'
          }
        ]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'number',
        variants: [
          { begin: '\\b(0[bB][01]+)' },
          { begin: '\\b(0[oO][0-7]+)' },
          { begin: hljs.C_NUMBER_RE }
        ],
        relevance: 0
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: [
                      'self',
                      hljs.C_LINE_COMMENT_MODE,
                      hljs.C_BLOCK_COMMENT_MODE
                    ]
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        begin: 'function', end: /[\{;]/, excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          'self',
          hljs.inherit(hljs.TITLE_MODE, { begin: JS_IDENT_RE }),
          PARAMS
        ],
        illegal: /%/,
        relevance: 0 // () => {} is more typical in TypeScript
      },
      {
        beginKeywords: 'constructor', end: /\{/, excludeEnd: true,
        contains: [
          'self',
          PARAMS
        ]
      },
      { // prevent references like module.id from being higlighted as module definitions
        begin: /module\./,
        keywords: { built_in: 'module' },
        relevance: 0
      },
      {
        beginKeywords: 'module', end: /\{/, excludeEnd: true
      },
      {
        beginKeywords: 'interface', end: /\{/, excludeEnd: true,
        keywords: 'interface extends'
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      {
        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
      },
      DECORATOR,
      ARGS
    ]
  };
};
},{}],36:[function(require,module,exports){
module.exports = function(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/},
              {begin: /'/, end: /'/},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<!DOCTYPE', end: '>',
        relevance: 10,
        contains: [{begin: '\\[', end: '\\]'}]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      {
        className: 'meta',
        begin: /<\?xml/, end: /\?>/, relevance: 10
      },
      {
        begin: /<\?(php)?/, end: /\?>/,
        subLanguage: 'php',
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {begin: '/\\*', end: '\\*/', skip: true},
          {begin: 'b"', end: '"', skip: true},
          {begin: 'b\'', end: '\'', skip: true},
          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null, className: null, contains: null, skip: true}),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null, className: null, contains: null, skip: true})
        ]
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>|$)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>|$)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
        }
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
};
},{}],37:[function(require,module,exports){
'use strict';


////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = require('./lib/re')(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;

},{"./lib/re":38}],38:[function(require,module,exports){
'use strict';


module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = require('uc.micro/properties/Any/regex').source;
  re.src_Cc  = require('uc.micro/categories/Cc/regex').source;
  re.src_Z   = require('uc.micro/categories/Z/regex').source;
  re.src_P   = require('uc.micro/categories/P/regex').source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          '\\,(?!' + re.src_ZCc + ').|' +      // allow `,,,` in paths
          '\\!(?!' + re.src_ZCc + '|[!]).|' +
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  re.src_email_name =

    '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|\\(|' + re.src_ZCc + ')(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};

},{"uc.micro/categories/Cc/regex":111,"uc.micro/categories/P/regex":113,"uc.micro/categories/Z/regex":114,"uc.micro/properties/Any/regex":116}],39:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],40:[function(require,module,exports){
(function (global){
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],41:[function(require,module,exports){
// Enclose abbreviations in <abbr> tags
//
'use strict';


module.exports = function sub_plugin(md) {
  var escapeRE        = md.utils.escapeRE,
      arrayReplaceAt  = md.utils.arrayReplaceAt;

  // ASCII characters in Cc, Sc, Sm, Sk categories we should terminate on;
  // you can check character classes here:
  // http://www.unicode.org/Public/UNIDATA/UnicodeData.txt
  var OTHER_CHARS      = ' \r\n$+<=>^`|~';

  var UNICODE_PUNCT_RE = md.utils.lib.ucmicro.P.source;
  var UNICODE_SPACE_RE = md.utils.lib.ucmicro.Z.source;


  function abbr_def(state, startLine, endLine, silent) {
    var label, title, ch, labelStart, labelEnd,
        pos = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    if (pos + 2 >= max) { return false; }

    if (state.src.charCodeAt(pos++) !== 0x2A/* * */) { return false; }
    if (state.src.charCodeAt(pos++) !== 0x5B/* [ */) { return false; }

    labelStart = pos;

    for (; pos < max; pos++) {
      ch = state.src.charCodeAt(pos);
      if (ch === 0x5B /* [ */) {
        return false;
      } else if (ch === 0x5D /* ] */) {
        labelEnd = pos;
        break;
      } else if (ch === 0x5C /* \ */) {
        pos++;
      }
    }

    if (labelEnd < 0 || state.src.charCodeAt(labelEnd + 1) !== 0x3A/* : */) {
      return false;
    }

    if (silent) { return true; }

    label = state.src.slice(labelStart, labelEnd).replace(/\\(.)/g, '$1');
    title = state.src.slice(labelEnd + 2, max).trim();
    if (label.length === 0) { return false; }
    if (title.length === 0) { return false; }
    if (!state.env.abbreviations) { state.env.abbreviations = {}; }
    // prepend ':' to avoid conflict with Object.prototype members
    if (typeof state.env.abbreviations[':' + label] === 'undefined') {
      state.env.abbreviations[':' + label] = title;
    }

    state.line = startLine + 1;
    return true;
  }


  function abbr_replace(state) {
    var i, j, l, tokens, token, text, nodes, pos, reg, m, regText, regSimple,
        currentToken,
        blockTokens = state.tokens;

    if (!state.env.abbreviations) { return; }

    regSimple = new RegExp('(?:' +
      Object.keys(state.env.abbreviations).map(function (x) {
        return x.substr(1);
      }).sort(function (a, b) {
        return b.length - a.length;
      }).map(escapeRE).join('|') +
    ')');

    regText = '(^|' + UNICODE_PUNCT_RE + '|' + UNICODE_SPACE_RE +
                    '|[' + OTHER_CHARS.split('').map(escapeRE).join('') + '])'
            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
                      return x.substr(1);
                    }).sort(function (a, b) {
                      return b.length - a.length;
                    }).map(escapeRE).join('|') + ')'
            + '($|' + UNICODE_PUNCT_RE + '|' + UNICODE_SPACE_RE +
                    '|[' + OTHER_CHARS.split('').map(escapeRE).join('') + '])';

    reg = new RegExp(regText, 'g');

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue; }
      tokens = blockTokens[j].children;

      // We scan from the end, to keep position when new tags added.
      for (i = tokens.length - 1; i >= 0; i--) {
        currentToken = tokens[i];
        if (currentToken.type !== 'text') { continue; }

        pos = 0;
        text = currentToken.content;
        reg.lastIndex = 0;
        nodes = [];

        // fast regexp run to determine whether there are any abbreviated words
        // in the current token
        if (!regSimple.test(text)) { continue; }

        while ((m = reg.exec(text))) {
          if (m.index > 0 || m[1].length > 0) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(pos, m.index + m[1].length);
            nodes.push(token);
          }

          token         = new state.Token('abbr_open', 'abbr', 1);
          token.attrs   = [ [ 'title', state.env.abbreviations[':' + m[2]] ] ];
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = m[2];
          nodes.push(token);

          token         = new state.Token('abbr_close', 'abbr', -1);
          nodes.push(token);

          reg.lastIndex -= m[3].length;
          pos = reg.lastIndex;
        }

        if (!nodes.length) { continue; }

        if (pos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(pos);
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }

  md.block.ruler.before('reference', 'abbr_def', abbr_def, { alt: [ 'paragraph', 'reference' ] });

  md.core.ruler.after('linkify', 'abbr_replace', abbr_replace);
};

},{}],42:[function(require,module,exports){
const slugify = (s) => encodeURIComponent(String(s).trim().toLowerCase().replace(/\s+/g, '-'))

const position = {
  false: 'push',
  true: 'unshift'
}

const hasProp = Object.prototype.hasOwnProperty

const permalinkHref = slug => `#${slug}`

const renderPermalink = (slug, opts, state, idx) => {
  const space = () => Object.assign(new state.Token('text', '', 0), { content: ' ' })

  const linkTokens = [
    Object.assign(new state.Token('link_open', 'a', 1), {
      attrs: [
        ['class', opts.permalinkClass],
        ['href', opts.permalinkHref(slug, state)],
        ['aria-hidden', 'true']
      ]
    }),
    Object.assign(new state.Token('html_block', '', 0), { content: opts.permalinkSymbol }),
    new state.Token('link_close', 'a', -1)
  ]

  // `push` or `unshift` according to position option.
  // Space is at the opposite side.
  linkTokens[position[!opts.permalinkBefore]](space())
  state.tokens[idx + 1].children[position[opts.permalinkBefore]](...linkTokens)
}

const uniqueSlug = (slug, slugs) => {
  let uniq = slug
  let i = 2
  while (hasProp.call(slugs, uniq)) uniq = `${slug}-${i++}`
  slugs[uniq] = true
  return uniq
}

const isLevelSelectedNumber = selection => level => level >= selection
const isLevelSelectedArray = selection => level => selection.includes(level)

const anchor = (md, opts) => {
  opts = Object.assign({}, anchor.defaults, opts)

  md.core.ruler.push('anchor', state => {
    const slugs = {}
    const tokens = state.tokens

    const isLevelSelected = Array.isArray(opts.level)
      ? isLevelSelectedArray(opts.level)
      : isLevelSelectedNumber(opts.level)

    tokens
      .filter(token => token.type === 'heading_open')
      .filter(token => isLevelSelected(Number(token.tag.substr(1))))
      .forEach(token => {
        // Aggregate the next token children text.
        const title = tokens[tokens.indexOf(token) + 1].children
          .filter(token => token.type === 'text' || token.type === 'code_inline')
          .reduce((acc, t) => acc + t.content, '')

        let slug = token.attrGet('id')

        if (slug == null) {
          slug = uniqueSlug(opts.slugify(title), slugs)
          token.attrPush(['id', slug])
        }

        if (opts.permalink) {
          opts.renderPermalink(slug, opts, state, tokens.indexOf(token))
        }

        if (opts.callback) {
          opts.callback(token, { slug, title })
        }
      })
  })
}

anchor.defaults = {
  level: 1,
  slugify,
  permalink: false,
  renderPermalink,
  permalinkClass: 'header-anchor',
  permalinkSymbol: '¶',
  permalinkBefore: false,
  permalinkHref
}

module.exports = anchor

},{}],43:[function(require,module,exports){
// Process block-level custom containers
//
'use strict';


module.exports = function container_plugin(md, name, options) {

  function validateDefault(params) {
    return params.trim().split(' ', 2)[0] === name;
  }

  function renderDefault(tokens, idx, _options, env, self) {

    // add a class to the opening tag
    if (tokens[idx].nesting === 1) {
      tokens[idx].attrPush([ 'class', name ]);
    }

    return self.renderToken(tokens, idx, _options, env, self);
  }

  options = options || {};

  var min_markers = 3,
      marker_str  = options.marker || ':',
      marker_char = marker_str.charCodeAt(0),
      marker_len  = marker_str.length,
      validate    = options.validate || validateDefault,
      render      = options.render || renderDefault;

  function container(state, startLine, endLine, silent) {
    var pos, nextLine, marker_count, markup, params, token,
        old_parent, old_line_max,
        auto_closed = false,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // Check out the first character quickly,
    // this should filter out most of non-containers
    //
    if (marker_char !== state.src.charCodeAt(start)) { return false; }

    // Check out the rest of the marker string
    //
    for (pos = start + 1; pos <= max; pos++) {
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        break;
      }
    }

    marker_count = Math.floor((pos - start) / marker_len);
    if (marker_count < min_markers) { return false; }
    pos -= (pos - start) % marker_len;

    markup = state.src.slice(start, pos);
    params = state.src.slice(pos, max);
    if (!validate(params)) { return false; }

    // Since start is found, we can report success here in validation mode
    //
    if (silent) { return true; }

    // Search for the end of the block
    //
    nextLine = startLine;

    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (marker_char !== state.src.charCodeAt(start)) { continue; }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }

      // closing code fence must be at least as long as the opening one
      if (Math.floor((pos - start) / marker_len) < marker_count) { continue; }

      // make sure tail has spaces only
      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);

      if (pos < max) { continue; }

      // found!
      auto_closed = true;
      break;
    }

    old_parent = state.parentType;
    old_line_max = state.lineMax;
    state.parentType = 'container';

    // this will prevent lazy continuations from ever going past our end marker
    state.lineMax = nextLine;

    token        = state.push('container_' + name + '_open', 'div', 1);
    token.markup = markup;
    token.block  = true;
    token.info   = params;
    token.map    = [ startLine, nextLine ];

    state.md.block.tokenize(state, startLine + 1, nextLine);

    token        = state.push('container_' + name + '_close', 'div', -1);
    token.markup = state.src.slice(start, pos);
    token.block  = true;

    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);

    return true;
  }

  md.block.ruler.before('fence', 'container_' + name, container, {
    alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]
  });
  md.renderer.rules['container_' + name + '_open'] = render;
  md.renderer.rules['container_' + name + '_close'] = render;
};

},{}],44:[function(require,module,exports){
'use strict'
/* eslint-disable no-cond-assign */

var tagExpr = /^<!-- ?\{(?:([a-z0-9]+)(\^[0-9]*)?: ?)?(.*)\} ?-->\n?$/

module.exports = function attributes (md) {
  md.core.ruler.push('curly_attributes', curlyAttrs)
}

/*
 * List of tag -> token type mappings. Eg, `<li>` is `list_item_open`.
 */

var opening = {
  li: ['list_item'],
  ul: ['bullet_list'],
  p: ['paragraph'],
  ol: ['ordered_list'],
  blockquote: ['blockquote'],
  h1: ['heading'],
  h2: ['heading'],
  h3: ['heading'],
  h4: ['heading'],
  h5: ['heading'],
  h6: ['heading'],
  a: ['link'],
  code: ['code_inline', 'code_block', 'fence']
}

var selfClosing = {
  hr: true,
  image: true
}

/**
 * ...
 */

function curlyAttrs (state) {
  var tokens = state.tokens
  var omissions = []
  var parent, m
  var stack = { len: 0, contents: [], types: {} }

  tokens.forEach(function (token, i) {
    // Save breadcrumbs so html_block will pick it up
    if (isOpener(token.type) || selfClosing[token.type]) {
      spush(stack, token)
    }

    // "# Hello\n<!--{.classname}-->"
    // ...sequence of [heading_open, inline, heading_close, html_block]
    if (token.type === 'html_block') {
      m = token.content.match(tagExpr)
      if (!m) return

      parent = findParent(stack, m[1], m[2])
      if (parent && applyToToken(parent, m[3])) {
        omissions.unshift(i)
      }
    }

    // "# Hello <!--{.classname} -->"
    // { type: 'inline', children: { ..., '<!--{...}-->' } }
    if (token.type === 'inline') {
      curlyInline(token.children, stack)
    }
  })

  // Remove <!--...--> html_block tokens
  omissions.forEach(function (idx) { return tokens.splice(idx, 1) })
}

/**
 * Internal: checks in a token type is a block opener
 */

function isOpener (type) {
  return type.match(/_(open|start)$/) ||
    type === 'fence' || type === 'code_block'
}

/**
 * Internal: Run through inline and stuff
 */

function curlyInline (children, stack) {
  var lastText, m, parent

  // Keep a list of sub-tokens to be removed
  var omissions = []

  children.forEach(function (child, i) {
    if (isOpener(child.type) ||
      selfClosing[child.type] ||
      child.type === 'code_inline') {
      spush(stack, child)
    }

    // Decorate tags are found
    if (m = child.content.match(tagExpr)) {
      var tag = m[1]
      var depth = m[2]
      var attrs = m[3]

      // Remove the comment, then remove the extra space
      parent = findParent(stack, tag, depth)
      if (parent && applyToToken(parent, attrs)) {
        omissions.unshift(i)
        if (lastText) trimRight(lastText, 'content')
      }
    }

    if (child.type === 'text') lastText = child
  })

  // Remove them in a separate step so we don't
  omissions.forEach(function (idx) {
    children.splice(idx, 1)
  })
}

/**
 * Private: given a list of tokens `list` and `lastParent`, find the one that
 * matches `tag`.
 */

function findParent (stack, tag, depth) {
  if (!tag) return stack.last

  if (depth === '^') {
    depth = 1
  } else if (typeof depth === 'string') { /* '^2' */
    depth = +depth.substr(1)
  } else {
    depth = 0
  }

  var targets = opening[tag.toLowerCase()] || [tag.toLowerCase()]

  var target = targets.filter(function (target) {
    return stack.types[target]
  })

  var list = stack.types[target]
  if (!list) return // Can't find tag `tag`

  return list[list.length - 1 - depth]
}

/**
 * Private: trim the right
 */

function trimRight (obj, attr) {
  obj[attr] = obj[attr].replace(/\s*$/, '')
}

/**
 * Private: apply tag to token
 *
 *     applyToToken(token, '.classname')
 */

function applyToToken (token, attrs) {
  var m
  var todo = []

  while (attrs.length > 0) {
    if (m = attrs.match(/^\s*\.([a-zA-Z0-9\-_]+)/)) {
      todo.push([ 'class', m[1], { append: true } ])
      shift()
    } else if (m = attrs.match(/^\s*#([a-zA-Z0-9\-_]+)/)) {
      todo.push([ 'id', m[1] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)="([^"]*)"/)) {
      todo.push([ m[1], m[2] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)='([^']*)'/)) {
      todo.push([ m[1], m[2] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)=([^ ]*)/)) {
      todo.push([ m[1], m[2] ])
      shift()
    } else if (m = attrs.match(/^\s*([a-zA-Z0-9\-_]+)/)) {
      todo.push([ m[1], '' ])
      shift()
    } else if (m = attrs.match(/^\s+/)) {
      shift()
    } else {
      return
    }
  }

  todo.forEach(function (args) { setAttr.apply(this, [token].concat(args)) })
  return true

  function shift () {
    attrs = attrs.substr(m[0].length)
  }
}

/**
 * Private: sets an attribute `attr` to `value` in a token. If `options.append`
 * is true, append to the old value instead of overwriting it.
 */

function setAttr (token, attr, value, options) {
  var idx = token.attrIndex(attr)

  if (idx === -1) {
    token.attrPush([ attr, value ])
  } else if (options && options.append) {
    token.attrs[idx][1] =
      token.attrs[idx][1] + ' ' + value
  } else {
    token.attrs[idx][1] = value
  }
}

/**
 * Private: pushes a token to the stack
 */

function spush (stack, token) {
  var type = token.type.replace(/_(open|start)$/, '')
  if (!stack.types[type]) { stack.types[type] = [] }
  stack.types[type].push(token)
  stack.last = token
}

},{}],45:[function(require,module,exports){
// Process definition lists
//
'use strict';


module.exports = function deflist_plugin(md) {
  var isSpace = md.utils.isSpace;

  // Search `[:~][\n ]`, returns next pos after marker on success
  // or -1 on fail.
  function skipMarker(state, line) {
    var pos, marker,
        start = state.bMarks[line] + state.tShift[line],
        max = state.eMarks[line];

    if (start >= max) { return -1; }

    // Check bullet
    marker = state.src.charCodeAt(start++);
    if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }

    pos = state.skipSpaces(start);

    // require space after ":"
    if (start === pos) { return -1; }

    // no empty definitions, e.g. "  : "
    if (pos >= max) { return -1; }

    return start;
  }

  function markTightParagraphs(state, idx) {
    var i, l,
        level = state.level + 2;

    for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
      if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
        state.tokens[i + 2].hidden = true;
        state.tokens[i].hidden = true;
        i += 2;
      }
    }
  }

  function deflist(state, startLine, endLine, silent) {
    var ch,
        contentStart,
        ddLine,
        dtLine,
        itemLines,
        listLines,
        listTokIdx,
        max,
        nextLine,
        offset,
        oldDDIndent,
        oldIndent,
        oldParentType,
        oldSCount,
        oldTShift,
        oldTight,
        pos,
        prevEmptyEnd,
        tight,
        token;

    if (silent) {
      // quirk: validation mode validates a dd block only, not a whole deflist
      if (state.ddIndent < 0) { return false; }
      return skipMarker(state, startLine) >= 0;
    }

    nextLine = startLine + 1;
    if (nextLine >= endLine) { return false; }

    if (state.isEmpty(nextLine)) {
      nextLine++;
      if (nextLine >= endLine) { return false; }
    }

    if (state.sCount[nextLine] < state.blkIndent) { return false; }
    contentStart = skipMarker(state, nextLine);
    if (contentStart < 0) { return false; }

    // Start list
    listTokIdx = state.tokens.length;
    tight = true;

    token     = state.push('dl_open', 'dl', 1);
    token.map = listLines = [ startLine, 0 ];

    //
    // Iterate list items
    //

    dtLine = startLine;
    ddLine = nextLine;

    // One definition list can contain multiple DTs,
    // and one DT can be followed by multiple DDs.
    //
    // Thus, there is two loops here, and label is
    // needed to break out of the second one
    //
    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    for (;;) {
      prevEmptyEnd = false;

      token          = state.push('dt_open', 'dt', 1);
      token.map      = [ dtLine, dtLine ];

      token          = state.push('inline', '', 0);
      token.map      = [ dtLine, dtLine ];
      token.content  = state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim();
      token.children = [];

      token          = state.push('dt_close', 'dt', -1);

      for (;;) {
        token     = state.push('dd_open', 'dd', 1);
        token.map = itemLines = [ nextLine, 0 ];

        pos = contentStart;
        max = state.eMarks[ddLine];
        offset = state.sCount[ddLine] + contentStart - (state.bMarks[ddLine] + state.tShift[ddLine]);

        while (pos < max) {
          ch = state.src.charCodeAt(pos);

          if (isSpace(ch)) {
            if (ch === 0x09) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }
          } else {
            break;
          }

          pos++;
        }

        contentStart = pos;

        oldTight = state.tight;
        oldDDIndent = state.ddIndent;
        oldIndent = state.blkIndent;
        oldTShift = state.tShift[ddLine];
        oldSCount = state.sCount[ddLine];
        oldParentType = state.parentType;
        state.blkIndent = state.ddIndent = state.sCount[ddLine] + 2;
        state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
        state.sCount[ddLine] = offset;
        state.tight = true;
        state.parentType = 'deflist';

        state.md.block.tokenize(state, ddLine, endLine, true);

        // If any of list item is tight, mark list as tight
        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }
        // Item become loose if finish with empty line,
        // but we should filter last element, because it means list finish
        prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);

        state.tShift[ddLine] = oldTShift;
        state.sCount[ddLine] = oldSCount;
        state.tight = oldTight;
        state.parentType = oldParentType;
        state.blkIndent = oldIndent;
        state.ddIndent = oldDDIndent;

        token = state.push('dd_close', 'dd', -1);

        itemLines[1] = nextLine = state.line;

        if (nextLine >= endLine) { break OUTER; }

        if (state.sCount[nextLine] < state.blkIndent) { break OUTER; }
        contentStart = skipMarker(state, nextLine);
        if (contentStart < 0) { break; }

        ddLine = nextLine;

        // go to the next loop iteration:
        // insert DD tag and repeat checking
      }

      if (nextLine >= endLine) { break; }
      dtLine = nextLine;

      if (state.isEmpty(dtLine)) { break; }
      if (state.sCount[dtLine] < state.blkIndent) { break; }

      ddLine = dtLine + 1;
      if (ddLine >= endLine) { break; }
      if (state.isEmpty(ddLine)) { ddLine++; }
      if (ddLine >= endLine) { break; }

      if (state.sCount[ddLine] < state.blkIndent) { break; }
      contentStart = skipMarker(state, ddLine);
      if (contentStart < 0) { break; }

      // go to the next loop iteration:
      // insert DT and DD tags and repeat checking
    }

    // Finilize list
    token = state.push('dl_close', 'dl', -1);

    listLines[1] = nextLine;

    state.line = nextLine;

    // mark paragraphs tight if needed
    if (tight) {
      markTightParagraphs(state, listTokIdx);
    }

    return true;
  }


  md.block.ruler.before('paragraph', 'deflist', deflist, { alt: [ 'paragraph', 'reference' ] });
};

},{}],46:[function(require,module,exports){
'use strict';


var emojies_defs      = require('./lib/data/full.json');
var emojies_shortcuts = require('./lib/data/shortcuts');
var emoji_html        = require('./lib/render');
var emoji_replace     = require('./lib/replace');
var normalize_opts    = require('./lib/normalize_opts');


module.exports = function emoji_plugin(md, options) {
  var defaults = {
    defs: emojies_defs,
    shortcuts: emojies_shortcuts,
    enabled: []
  };

  var opts = normalize_opts(md.utils.assign({}, defaults, options || {}));

  md.renderer.rules.emoji = emoji_html;

  md.core.ruler.push('emoji', emoji_replace(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
};

},{"./lib/data/full.json":47,"./lib/data/shortcuts":48,"./lib/normalize_opts":49,"./lib/render":50,"./lib/replace":51}],47:[function(require,module,exports){
module.exports={
  "100": "💯",
  "1234": "🔢",
  "grinning": "😀",
  "smiley": "😃",
  "smile": "😄",
  "grin": "😁",
  "laughing": "😆",
  "satisfied": "😆",
  "sweat_smile": "😅",
  "joy": "😂",
  "rofl": "🤣",
  "relaxed": "☺️",
  "blush": "😊",
  "innocent": "😇",
  "slightly_smiling_face": "🙂",
  "upside_down_face": "🙃",
  "wink": "😉",
  "relieved": "😌",
  "heart_eyes": "😍",
  "kissing_heart": "😘",
  "kissing": "😗",
  "kissing_smiling_eyes": "😙",
  "kissing_closed_eyes": "😚",
  "yum": "😋",
  "stuck_out_tongue_winking_eye": "😜",
  "stuck_out_tongue_closed_eyes": "😝",
  "stuck_out_tongue": "😛",
  "money_mouth_face": "🤑",
  "hugs": "🤗",
  "nerd_face": "🤓",
  "sunglasses": "😎",
  "clown_face": "🤡",
  "cowboy_hat_face": "🤠",
  "smirk": "😏",
  "unamused": "😒",
  "disappointed": "😞",
  "pensive": "😔",
  "worried": "😟",
  "confused": "😕",
  "slightly_frowning_face": "🙁",
  "frowning_face": "☹️",
  "persevere": "😣",
  "confounded": "😖",
  "tired_face": "😫",
  "weary": "😩",
  "triumph": "😤",
  "angry": "😠",
  "rage": "😡",
  "pout": "😡",
  "no_mouth": "😶",
  "neutral_face": "😐",
  "expressionless": "😑",
  "hushed": "😯",
  "frowning": "😦",
  "anguished": "😧",
  "open_mouth": "😮",
  "astonished": "😲",
  "dizzy_face": "😵",
  "flushed": "😳",
  "scream": "😱",
  "fearful": "😨",
  "cold_sweat": "😰",
  "cry": "😢",
  "disappointed_relieved": "😥",
  "drooling_face": "🤤",
  "sob": "😭",
  "sweat": "😓",
  "sleepy": "😪",
  "sleeping": "😴",
  "roll_eyes": "🙄",
  "thinking": "🤔",
  "lying_face": "🤥",
  "grimacing": "😬",
  "zipper_mouth_face": "🤐",
  "nauseated_face": "🤢",
  "sneezing_face": "🤧",
  "mask": "😷",
  "face_with_thermometer": "🤒",
  "face_with_head_bandage": "🤕",
  "smiling_imp": "😈",
  "imp": "👿",
  "japanese_ogre": "👹",
  "japanese_goblin": "👺",
  "hankey": "💩",
  "poop": "💩",
  "shit": "💩",
  "ghost": "👻",
  "skull": "💀",
  "skull_and_crossbones": "☠️",
  "alien": "👽",
  "space_invader": "👾",
  "robot": "🤖",
  "jack_o_lantern": "🎃",
  "smiley_cat": "😺",
  "smile_cat": "😸",
  "joy_cat": "😹",
  "heart_eyes_cat": "😻",
  "smirk_cat": "😼",
  "kissing_cat": "😽",
  "scream_cat": "🙀",
  "crying_cat_face": "😿",
  "pouting_cat": "😾",
  "open_hands": "👐",
  "raised_hands": "🙌",
  "clap": "👏",
  "pray": "🙏",
  "handshake": "🤝",
  "+1": "👍",
  "thumbsup": "👍",
  "-1": "👎",
  "thumbsdown": "👎",
  "fist_oncoming": "👊",
  "facepunch": "👊",
  "punch": "👊",
  "fist_raised": "✊",
  "fist": "✊",
  "fist_left": "🤛",
  "fist_right": "🤜",
  "crossed_fingers": "🤞",
  "v": "✌️",
  "metal": "🤘",
  "ok_hand": "👌",
  "point_left": "👈",
  "point_right": "👉",
  "point_up_2": "👆",
  "point_down": "👇",
  "point_up": "☝️",
  "hand": "✋",
  "raised_hand": "✋",
  "raised_back_of_hand": "🤚",
  "raised_hand_with_fingers_splayed": "🖐",
  "vulcan_salute": "🖖",
  "wave": "👋",
  "call_me_hand": "🤙",
  "muscle": "💪",
  "middle_finger": "🖕",
  "fu": "🖕",
  "writing_hand": "✍️",
  "selfie": "🤳",
  "nail_care": "💅",
  "ring": "💍",
  "lipstick": "💄",
  "kiss": "💋",
  "lips": "👄",
  "tongue": "👅",
  "ear": "👂",
  "nose": "👃",
  "footprints": "👣",
  "eye": "👁",
  "eyes": "👀",
  "speaking_head": "🗣",
  "bust_in_silhouette": "👤",
  "busts_in_silhouette": "👥",
  "baby": "👶",
  "boy": "👦",
  "girl": "👧",
  "man": "👨",
  "woman": "👩",
  "blonde_woman": "👱‍♀",
  "blonde_man": "👱",
  "person_with_blond_hair": "👱",
  "older_man": "👴",
  "older_woman": "👵",
  "man_with_gua_pi_mao": "👲",
  "woman_with_turban": "👳‍♀",
  "man_with_turban": "👳",
  "policewoman": "👮‍♀",
  "policeman": "👮",
  "cop": "👮",
  "construction_worker_woman": "👷‍♀",
  "construction_worker_man": "👷",
  "construction_worker": "👷",
  "guardswoman": "💂‍♀",
  "guardsman": "💂",
  "female_detective": "🕵️‍♀️",
  "male_detective": "🕵",
  "detective": "🕵",
  "woman_health_worker": "👩‍⚕",
  "man_health_worker": "👨‍⚕",
  "woman_farmer": "👩‍🌾",
  "man_farmer": "👨‍🌾",
  "woman_cook": "👩‍🍳",
  "man_cook": "👨‍🍳",
  "woman_student": "👩‍🎓",
  "man_student": "👨‍🎓",
  "woman_singer": "👩‍🎤",
  "man_singer": "👨‍🎤",
  "woman_teacher": "👩‍🏫",
  "man_teacher": "👨‍🏫",
  "woman_factory_worker": "👩‍🏭",
  "man_factory_worker": "👨‍🏭",
  "woman_technologist": "👩‍💻",
  "man_technologist": "👨‍💻",
  "woman_office_worker": "👩‍💼",
  "man_office_worker": "👨‍💼",
  "woman_mechanic": "👩‍🔧",
  "man_mechanic": "👨‍🔧",
  "woman_scientist": "👩‍🔬",
  "man_scientist": "👨‍🔬",
  "woman_artist": "👩‍🎨",
  "man_artist": "👨‍🎨",
  "woman_firefighter": "👩‍🚒",
  "man_firefighter": "👨‍🚒",
  "woman_pilot": "👩‍✈",
  "man_pilot": "👨‍✈",
  "woman_astronaut": "👩‍🚀",
  "man_astronaut": "👨‍🚀",
  "woman_judge": "👩‍⚖",
  "man_judge": "👨‍⚖",
  "mrs_claus": "🤶",
  "santa": "🎅",
  "princess": "👸",
  "prince": "🤴",
  "bride_with_veil": "👰",
  "man_in_tuxedo": "🤵",
  "angel": "👼",
  "pregnant_woman": "🤰",
  "bowing_woman": "🙇‍♀",
  "bowing_man": "🙇",
  "bow": "🙇",
  "tipping_hand_woman": "💁",
  "information_desk_person": "💁",
  "sassy_woman": "💁",
  "tipping_hand_man": "💁‍♂",
  "sassy_man": "💁‍♂",
  "no_good_woman": "🙅",
  "no_good": "🙅",
  "ng_woman": "🙅",
  "no_good_man": "🙅‍♂",
  "ng_man": "🙅‍♂",
  "ok_woman": "🙆",
  "ok_man": "🙆‍♂",
  "raising_hand_woman": "🙋",
  "raising_hand": "🙋",
  "raising_hand_man": "🙋‍♂",
  "woman_facepalming": "🤦‍♀",
  "man_facepalming": "🤦‍♂",
  "woman_shrugging": "🤷‍♀",
  "man_shrugging": "🤷‍♂",
  "pouting_woman": "🙎",
  "person_with_pouting_face": "🙎",
  "pouting_man": "🙎‍♂",
  "frowning_woman": "🙍",
  "person_frowning": "🙍",
  "frowning_man": "🙍‍♂",
  "haircut_woman": "💇",
  "haircut": "💇",
  "haircut_man": "💇‍♂",
  "massage_woman": "💆",
  "massage": "💆",
  "massage_man": "💆‍♂",
  "business_suit_levitating": "🕴",
  "dancer": "💃",
  "man_dancing": "🕺",
  "dancing_women": "👯",
  "dancers": "👯",
  "dancing_men": "👯‍♂",
  "walking_woman": "🚶‍♀",
  "walking_man": "🚶",
  "walking": "🚶",
  "running_woman": "🏃‍♀",
  "running_man": "🏃",
  "runner": "🏃",
  "running": "🏃",
  "couple": "👫",
  "two_women_holding_hands": "👭",
  "two_men_holding_hands": "👬",
  "couple_with_heart_woman_man": "💑",
  "couple_with_heart": "💑",
  "couple_with_heart_woman_woman": "👩‍❤️‍👩",
  "couple_with_heart_man_man": "👨‍❤️‍👨",
  "couplekiss_man_woman": "💏",
  "couplekiss_woman_woman": "👩‍❤️‍💋‍👩",
  "couplekiss_man_man": "👨‍❤️‍💋‍👨",
  "family_man_woman_boy": "👪",
  "family": "👪",
  "family_man_woman_girl": "👨‍👩‍👧",
  "family_man_woman_girl_boy": "👨‍👩‍👧‍👦",
  "family_man_woman_boy_boy": "👨‍👩‍👦‍👦",
  "family_man_woman_girl_girl": "👨‍👩‍👧‍👧",
  "family_woman_woman_boy": "👩‍👩‍👦",
  "family_woman_woman_girl": "👩‍👩‍👧",
  "family_woman_woman_girl_boy": "👩‍👩‍👧‍👦",
  "family_woman_woman_boy_boy": "👩‍👩‍👦‍👦",
  "family_woman_woman_girl_girl": "👩‍👩‍👧‍👧",
  "family_man_man_boy": "👨‍👨‍👦",
  "family_man_man_girl": "👨‍👨‍👧",
  "family_man_man_girl_boy": "👨‍👨‍👧‍👦",
  "family_man_man_boy_boy": "👨‍👨‍👦‍👦",
  "family_man_man_girl_girl": "👨‍👨‍👧‍👧",
  "family_woman_boy": "👩‍👦",
  "family_woman_girl": "👩‍👧",
  "family_woman_girl_boy": "👩‍👧‍👦",
  "family_woman_boy_boy": "👩‍👦‍👦",
  "family_woman_girl_girl": "👩‍👧‍👧",
  "family_man_boy": "👨‍👦",
  "family_man_girl": "👨‍👧",
  "family_man_girl_boy": "👨‍👧‍👦",
  "family_man_boy_boy": "👨‍👦‍👦",
  "family_man_girl_girl": "👨‍👧‍👧",
  "womans_clothes": "👚",
  "shirt": "👕",
  "tshirt": "👕",
  "jeans": "👖",
  "necktie": "👔",
  "dress": "👗",
  "bikini": "👙",
  "kimono": "👘",
  "high_heel": "👠",
  "sandal": "👡",
  "boot": "👢",
  "mans_shoe": "👞",
  "shoe": "👞",
  "athletic_shoe": "👟",
  "womans_hat": "👒",
  "tophat": "🎩",
  "mortar_board": "🎓",
  "crown": "👑",
  "rescue_worker_helmet": "⛑",
  "school_satchel": "🎒",
  "pouch": "👝",
  "purse": "👛",
  "handbag": "👜",
  "briefcase": "💼",
  "eyeglasses": "👓",
  "dark_sunglasses": "🕶",
  "closed_umbrella": "🌂",
  "open_umbrella": "☂️",
  "dog": "🐶",
  "cat": "🐱",
  "mouse": "🐭",
  "hamster": "🐹",
  "rabbit": "🐰",
  "fox_face": "🦊",
  "bear": "🐻",
  "panda_face": "🐼",
  "koala": "🐨",
  "tiger": "🐯",
  "lion": "🦁",
  "cow": "🐮",
  "pig": "🐷",
  "pig_nose": "🐽",
  "frog": "🐸",
  "monkey_face": "🐵",
  "see_no_evil": "🙈",
  "hear_no_evil": "🙉",
  "speak_no_evil": "🙊",
  "monkey": "🐒",
  "chicken": "🐔",
  "penguin": "🐧",
  "bird": "🐦",
  "baby_chick": "🐤",
  "hatching_chick": "🐣",
  "hatched_chick": "🐥",
  "duck": "🦆",
  "eagle": "🦅",
  "owl": "🦉",
  "bat": "🦇",
  "wolf": "🐺",
  "boar": "🐗",
  "horse": "🐴",
  "unicorn": "🦄",
  "bee": "🐝",
  "honeybee": "🐝",
  "bug": "🐛",
  "butterfly": "🦋",
  "snail": "🐌",
  "shell": "🐚",
  "beetle": "🐞",
  "ant": "🐜",
  "spider": "🕷",
  "spider_web": "🕸",
  "turtle": "🐢",
  "snake": "🐍",
  "lizard": "🦎",
  "scorpion": "🦂",
  "crab": "🦀",
  "squid": "🦑",
  "octopus": "🐙",
  "shrimp": "🦐",
  "tropical_fish": "🐠",
  "fish": "🐟",
  "blowfish": "🐡",
  "dolphin": "🐬",
  "flipper": "🐬",
  "shark": "🦈",
  "whale": "🐳",
  "whale2": "🐋",
  "crocodile": "🐊",
  "leopard": "🐆",
  "tiger2": "🐅",
  "water_buffalo": "🐃",
  "ox": "🐂",
  "cow2": "🐄",
  "deer": "🦌",
  "dromedary_camel": "🐪",
  "camel": "🐫",
  "elephant": "🐘",
  "rhinoceros": "🦏",
  "gorilla": "🦍",
  "racehorse": "🐎",
  "pig2": "🐖",
  "goat": "🐐",
  "ram": "🐏",
  "sheep": "🐑",
  "dog2": "🐕",
  "poodle": "🐩",
  "cat2": "🐈",
  "rooster": "🐓",
  "turkey": "🦃",
  "dove": "🕊",
  "rabbit2": "🐇",
  "mouse2": "🐁",
  "rat": "🐀",
  "chipmunk": "🐿",
  "feet": "🐾",
  "paw_prints": "🐾",
  "dragon": "🐉",
  "dragon_face": "🐲",
  "cactus": "🌵",
  "christmas_tree": "🎄",
  "evergreen_tree": "🌲",
  "deciduous_tree": "🌳",
  "palm_tree": "🌴",
  "seedling": "🌱",
  "herb": "🌿",
  "shamrock": "☘️",
  "four_leaf_clover": "🍀",
  "bamboo": "🎍",
  "tanabata_tree": "🎋",
  "leaves": "🍃",
  "fallen_leaf": "🍂",
  "maple_leaf": "🍁",
  "mushroom": "🍄",
  "ear_of_rice": "🌾",
  "bouquet": "💐",
  "tulip": "🌷",
  "rose": "🌹",
  "wilted_flower": "🥀",
  "sunflower": "🌻",
  "blossom": "🌼",
  "cherry_blossom": "🌸",
  "hibiscus": "🌺",
  "earth_americas": "🌎",
  "earth_africa": "🌍",
  "earth_asia": "🌏",
  "full_moon": "🌕",
  "waning_gibbous_moon": "🌖",
  "last_quarter_moon": "🌗",
  "waning_crescent_moon": "🌘",
  "new_moon": "🌑",
  "waxing_crescent_moon": "🌒",
  "first_quarter_moon": "🌓",
  "moon": "🌔",
  "waxing_gibbous_moon": "🌔",
  "new_moon_with_face": "🌚",
  "full_moon_with_face": "🌝",
  "sun_with_face": "🌞",
  "first_quarter_moon_with_face": "🌛",
  "last_quarter_moon_with_face": "🌜",
  "crescent_moon": "🌙",
  "dizzy": "💫",
  "star": "⭐️",
  "star2": "🌟",
  "sparkles": "✨",
  "zap": "⚡️",
  "fire": "🔥",
  "boom": "💥",
  "collision": "💥",
  "comet": "☄",
  "sunny": "☀️",
  "sun_behind_small_cloud": "🌤",
  "partly_sunny": "⛅️",
  "sun_behind_large_cloud": "🌥",
  "sun_behind_rain_cloud": "🌦",
  "rainbow": "🌈",
  "cloud": "☁️",
  "cloud_with_rain": "🌧",
  "cloud_with_lightning_and_rain": "⛈",
  "cloud_with_lightning": "🌩",
  "cloud_with_snow": "🌨",
  "snowman_with_snow": "☃️",
  "snowman": "⛄️",
  "snowflake": "❄️",
  "wind_face": "🌬",
  "dash": "💨",
  "tornado": "🌪",
  "fog": "🌫",
  "ocean": "🌊",
  "droplet": "💧",
  "sweat_drops": "💦",
  "umbrella": "☔️",
  "green_apple": "🍏",
  "apple": "🍎",
  "pear": "🍐",
  "tangerine": "🍊",
  "orange": "🍊",
  "mandarin": "🍊",
  "lemon": "🍋",
  "banana": "🍌",
  "watermelon": "🍉",
  "grapes": "🍇",
  "strawberry": "🍓",
  "melon": "🍈",
  "cherries": "🍒",
  "peach": "🍑",
  "pineapple": "🍍",
  "kiwi_fruit": "🥝",
  "avocado": "🥑",
  "tomato": "🍅",
  "eggplant": "🍆",
  "cucumber": "🥒",
  "carrot": "🥕",
  "corn": "🌽",
  "hot_pepper": "🌶",
  "potato": "🥔",
  "sweet_potato": "🍠",
  "chestnut": "🌰",
  "peanuts": "🥜",
  "honey_pot": "🍯",
  "croissant": "🥐",
  "bread": "🍞",
  "baguette_bread": "🥖",
  "cheese": "🧀",
  "egg": "🥚",
  "fried_egg": "🍳",
  "bacon": "🥓",
  "pancakes": "🥞",
  "fried_shrimp": "🍤",
  "poultry_leg": "🍗",
  "meat_on_bone": "🍖",
  "pizza": "🍕",
  "hotdog": "🌭",
  "hamburger": "🍔",
  "fries": "🍟",
  "stuffed_flatbread": "🥙",
  "taco": "🌮",
  "burrito": "🌯",
  "green_salad": "🥗",
  "shallow_pan_of_food": "🥘",
  "spaghetti": "🍝",
  "ramen": "🍜",
  "stew": "🍲",
  "fish_cake": "🍥",
  "sushi": "🍣",
  "bento": "🍱",
  "curry": "🍛",
  "rice": "🍚",
  "rice_ball": "🍙",
  "rice_cracker": "🍘",
  "oden": "🍢",
  "dango": "🍡",
  "shaved_ice": "🍧",
  "ice_cream": "🍨",
  "icecream": "🍦",
  "cake": "🍰",
  "birthday": "🎂",
  "custard": "🍮",
  "lollipop": "🍭",
  "candy": "🍬",
  "chocolate_bar": "🍫",
  "popcorn": "🍿",
  "doughnut": "🍩",
  "cookie": "🍪",
  "milk_glass": "🥛",
  "baby_bottle": "🍼",
  "coffee": "☕️",
  "tea": "🍵",
  "sake": "🍶",
  "beer": "🍺",
  "beers": "🍻",
  "clinking_glasses": "🥂",
  "wine_glass": "🍷",
  "tumbler_glass": "🥃",
  "cocktail": "🍸",
  "tropical_drink": "🍹",
  "champagne": "🍾",
  "spoon": "🥄",
  "fork_and_knife": "🍴",
  "plate_with_cutlery": "🍽",
  "soccer": "⚽️",
  "basketball": "🏀",
  "football": "🏈",
  "baseball": "⚾️",
  "tennis": "🎾",
  "volleyball": "🏐",
  "rugby_football": "🏉",
  "8ball": "🎱",
  "ping_pong": "🏓",
  "badminton": "🏸",
  "goal_net": "🥅",
  "ice_hockey": "🏒",
  "field_hockey": "🏑",
  "cricket": "🏏",
  "golf": "⛳️",
  "bow_and_arrow": "🏹",
  "fishing_pole_and_fish": "🎣",
  "boxing_glove": "🥊",
  "martial_arts_uniform": "🥋",
  "ice_skate": "⛸",
  "ski": "🎿",
  "skier": "⛷",
  "snowboarder": "🏂",
  "weight_lifting_woman": "🏋️‍♀️",
  "weight_lifting_man": "🏋",
  "person_fencing": "🤺",
  "women_wrestling": "🤼‍♀",
  "men_wrestling": "🤼‍♂",
  "woman_cartwheeling": "🤸‍♀",
  "man_cartwheeling": "🤸‍♂",
  "basketball_woman": "⛹️‍♀️",
  "basketball_man": "⛹",
  "woman_playing_handball": "🤾‍♀",
  "man_playing_handball": "🤾‍♂",
  "golfing_woman": "🏌️‍♀️",
  "golfing_man": "🏌",
  "surfing_woman": "🏄‍♀",
  "surfing_man": "🏄",
  "surfer": "🏄",
  "swimming_woman": "🏊‍♀",
  "swimming_man": "🏊",
  "swimmer": "🏊",
  "woman_playing_water_polo": "🤽‍♀",
  "man_playing_water_polo": "🤽‍♂",
  "rowing_woman": "🚣‍♀",
  "rowing_man": "🚣",
  "rowboat": "🚣",
  "horse_racing": "🏇",
  "biking_woman": "🚴‍♀",
  "biking_man": "🚴",
  "bicyclist": "🚴",
  "mountain_biking_woman": "🚵‍♀",
  "mountain_biking_man": "🚵",
  "mountain_bicyclist": "🚵",
  "running_shirt_with_sash": "🎽",
  "medal_sports": "🏅",
  "medal_military": "🎖",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  "trophy": "🏆",
  "rosette": "🏵",
  "reminder_ribbon": "🎗",
  "ticket": "🎫",
  "tickets": "🎟",
  "circus_tent": "🎪",
  "woman_juggling": "🤹‍♀",
  "man_juggling": "🤹‍♂",
  "performing_arts": "🎭",
  "art": "🎨",
  "clapper": "🎬",
  "microphone": "🎤",
  "headphones": "🎧",
  "musical_score": "🎼",
  "musical_keyboard": "🎹",
  "drum": "🥁",
  "saxophone": "🎷",
  "trumpet": "🎺",
  "guitar": "🎸",
  "violin": "🎻",
  "game_die": "🎲",
  "dart": "🎯",
  "bowling": "🎳",
  "video_game": "🎮",
  "slot_machine": "🎰",
  "car": "🚗",
  "red_car": "🚗",
  "taxi": "🚕",
  "blue_car": "🚙",
  "bus": "🚌",
  "trolleybus": "🚎",
  "racing_car": "🏎",
  "police_car": "🚓",
  "ambulance": "🚑",
  "fire_engine": "🚒",
  "minibus": "🚐",
  "truck": "🚚",
  "articulated_lorry": "🚛",
  "tractor": "🚜",
  "kick_scooter": "🛴",
  "bike": "🚲",
  "motor_scooter": "🛵",
  "motorcycle": "🏍",
  "rotating_light": "🚨",
  "oncoming_police_car": "🚔",
  "oncoming_bus": "🚍",
  "oncoming_automobile": "🚘",
  "oncoming_taxi": "🚖",
  "aerial_tramway": "🚡",
  "mountain_cableway": "🚠",
  "suspension_railway": "🚟",
  "railway_car": "🚃",
  "train": "🚋",
  "mountain_railway": "🚞",
  "monorail": "🚝",
  "bullettrain_side": "🚄",
  "bullettrain_front": "🚅",
  "light_rail": "🚈",
  "steam_locomotive": "🚂",
  "train2": "🚆",
  "metro": "🚇",
  "tram": "🚊",
  "station": "🚉",
  "helicopter": "🚁",
  "small_airplane": "🛩",
  "airplane": "✈️",
  "flight_departure": "🛫",
  "flight_arrival": "🛬",
  "rocket": "🚀",
  "artificial_satellite": "🛰",
  "seat": "💺",
  "canoe": "🛶",
  "boat": "⛵️",
  "sailboat": "⛵️",
  "motor_boat": "🛥",
  "speedboat": "🚤",
  "passenger_ship": "🛳",
  "ferry": "⛴",
  "ship": "🚢",
  "anchor": "⚓️",
  "construction": "🚧",
  "fuelpump": "⛽️",
  "busstop": "🚏",
  "vertical_traffic_light": "🚦",
  "traffic_light": "🚥",
  "world_map": "🗺",
  "moyai": "🗿",
  "statue_of_liberty": "🗽",
  "fountain": "⛲️",
  "tokyo_tower": "🗼",
  "european_castle": "🏰",
  "japanese_castle": "🏯",
  "stadium": "🏟",
  "ferris_wheel": "🎡",
  "roller_coaster": "🎢",
  "carousel_horse": "🎠",
  "parasol_on_ground": "⛱",
  "beach_umbrella": "🏖",
  "desert_island": "🏝",
  "mountain": "⛰",
  "mountain_snow": "🏔",
  "mount_fuji": "🗻",
  "volcano": "🌋",
  "desert": "🏜",
  "camping": "🏕",
  "tent": "⛺️",
  "railway_track": "🛤",
  "motorway": "🛣",
  "building_construction": "🏗",
  "factory": "🏭",
  "house": "🏠",
  "house_with_garden": "🏡",
  "houses": "🏘",
  "derelict_house": "🏚",
  "office": "🏢",
  "department_store": "🏬",
  "post_office": "🏣",
  "european_post_office": "🏤",
  "hospital": "🏥",
  "bank": "🏦",
  "hotel": "🏨",
  "convenience_store": "🏪",
  "school": "🏫",
  "love_hotel": "🏩",
  "wedding": "💒",
  "classical_building": "🏛",
  "church": "⛪️",
  "mosque": "🕌",
  "synagogue": "🕍",
  "kaaba": "🕋",
  "shinto_shrine": "⛩",
  "japan": "🗾",
  "rice_scene": "🎑",
  "national_park": "🏞",
  "sunrise": "🌅",
  "sunrise_over_mountains": "🌄",
  "stars": "🌠",
  "sparkler": "🎇",
  "fireworks": "🎆",
  "city_sunrise": "🌇",
  "city_sunset": "🌆",
  "cityscape": "🏙",
  "night_with_stars": "🌃",
  "milky_way": "🌌",
  "bridge_at_night": "🌉",
  "foggy": "🌁",
  "watch": "⌚️",
  "iphone": "📱",
  "calling": "📲",
  "computer": "💻",
  "keyboard": "⌨️",
  "desktop_computer": "🖥",
  "printer": "🖨",
  "computer_mouse": "🖱",
  "trackball": "🖲",
  "joystick": "🕹",
  "clamp": "🗜",
  "minidisc": "💽",
  "floppy_disk": "💾",
  "cd": "💿",
  "dvd": "📀",
  "vhs": "📼",
  "camera": "📷",
  "camera_flash": "📸",
  "video_camera": "📹",
  "movie_camera": "🎥",
  "film_projector": "📽",
  "film_strip": "🎞",
  "telephone_receiver": "📞",
  "phone": "☎️",
  "telephone": "☎️",
  "pager": "📟",
  "fax": "📠",
  "tv": "📺",
  "radio": "📻",
  "studio_microphone": "🎙",
  "level_slider": "🎚",
  "control_knobs": "🎛",
  "stopwatch": "⏱",
  "timer_clock": "⏲",
  "alarm_clock": "⏰",
  "mantelpiece_clock": "🕰",
  "hourglass": "⌛️",
  "hourglass_flowing_sand": "⏳",
  "satellite": "📡",
  "battery": "🔋",
  "electric_plug": "🔌",
  "bulb": "💡",
  "flashlight": "🔦",
  "candle": "🕯",
  "wastebasket": "🗑",
  "oil_drum": "🛢",
  "money_with_wings": "💸",
  "dollar": "💵",
  "yen": "💴",
  "euro": "💶",
  "pound": "💷",
  "moneybag": "💰",
  "credit_card": "💳",
  "gem": "💎",
  "balance_scale": "⚖️",
  "wrench": "🔧",
  "hammer": "🔨",
  "hammer_and_pick": "⚒",
  "hammer_and_wrench": "🛠",
  "pick": "⛏",
  "nut_and_bolt": "🔩",
  "gear": "⚙️",
  "chains": "⛓",
  "gun": "🔫",
  "bomb": "💣",
  "hocho": "🔪",
  "knife": "🔪",
  "dagger": "🗡",
  "crossed_swords": "⚔️",
  "shield": "🛡",
  "smoking": "🚬",
  "coffin": "⚰️",
  "funeral_urn": "⚱️",
  "amphora": "🏺",
  "crystal_ball": "🔮",
  "prayer_beads": "📿",
  "barber": "💈",
  "alembic": "⚗️",
  "telescope": "🔭",
  "microscope": "🔬",
  "hole": "🕳",
  "pill": "💊",
  "syringe": "💉",
  "thermometer": "🌡",
  "toilet": "🚽",
  "potable_water": "🚰",
  "shower": "🚿",
  "bathtub": "🛁",
  "bath": "🛀",
  "bellhop_bell": "🛎",
  "key": "🔑",
  "old_key": "🗝",
  "door": "🚪",
  "couch_and_lamp": "🛋",
  "bed": "🛏",
  "sleeping_bed": "🛌",
  "framed_picture": "🖼",
  "shopping": "🛍",
  "shopping_cart": "🛒",
  "gift": "🎁",
  "balloon": "🎈",
  "flags": "🎏",
  "ribbon": "🎀",
  "confetti_ball": "🎊",
  "tada": "🎉",
  "dolls": "🎎",
  "izakaya_lantern": "🏮",
  "lantern": "🏮",
  "wind_chime": "🎐",
  "email": "✉️",
  "envelope": "✉️",
  "envelope_with_arrow": "📩",
  "incoming_envelope": "📨",
  "e-mail": "📧",
  "love_letter": "💌",
  "inbox_tray": "📥",
  "outbox_tray": "📤",
  "package": "📦",
  "label": "🏷",
  "mailbox_closed": "📪",
  "mailbox": "📫",
  "mailbox_with_mail": "📬",
  "mailbox_with_no_mail": "📭",
  "postbox": "📮",
  "postal_horn": "📯",
  "scroll": "📜",
  "page_with_curl": "📃",
  "page_facing_up": "📄",
  "bookmark_tabs": "📑",
  "bar_chart": "📊",
  "chart_with_upwards_trend": "📈",
  "chart_with_downwards_trend": "📉",
  "spiral_notepad": "🗒",
  "spiral_calendar": "🗓",
  "calendar": "📆",
  "date": "📅",
  "card_index": "📇",
  "card_file_box": "🗃",
  "ballot_box": "🗳",
  "file_cabinet": "🗄",
  "clipboard": "📋",
  "file_folder": "📁",
  "open_file_folder": "📂",
  "card_index_dividers": "🗂",
  "newspaper_roll": "🗞",
  "newspaper": "📰",
  "notebook": "📓",
  "notebook_with_decorative_cover": "📔",
  "ledger": "📒",
  "closed_book": "📕",
  "green_book": "📗",
  "blue_book": "📘",
  "orange_book": "📙",
  "books": "📚",
  "book": "📖",
  "open_book": "📖",
  "bookmark": "🔖",
  "link": "🔗",
  "paperclip": "📎",
  "paperclips": "🖇",
  "triangular_ruler": "📐",
  "straight_ruler": "📏",
  "pushpin": "📌",
  "round_pushpin": "📍",
  "scissors": "✂️",
  "pen": "🖊",
  "fountain_pen": "🖋",
  "black_nib": "✒️",
  "paintbrush": "🖌",
  "crayon": "🖍",
  "memo": "📝",
  "pencil": "📝",
  "pencil2": "✏️",
  "mag": "🔍",
  "mag_right": "🔎",
  "lock_with_ink_pen": "🔏",
  "closed_lock_with_key": "🔐",
  "lock": "🔒",
  "unlock": "🔓",
  "heart": "❤️",
  "yellow_heart": "💛",
  "green_heart": "💚",
  "blue_heart": "💙",
  "purple_heart": "💜",
  "black_heart": "🖤",
  "broken_heart": "💔",
  "heavy_heart_exclamation": "❣️",
  "two_hearts": "💕",
  "revolving_hearts": "💞",
  "heartbeat": "💓",
  "heartpulse": "💗",
  "sparkling_heart": "💖",
  "cupid": "💘",
  "gift_heart": "💝",
  "heart_decoration": "💟",
  "peace_symbol": "☮️",
  "latin_cross": "✝️",
  "star_and_crescent": "☪️",
  "om": "🕉",
  "wheel_of_dharma": "☸️",
  "star_of_david": "✡️",
  "six_pointed_star": "🔯",
  "menorah": "🕎",
  "yin_yang": "☯️",
  "orthodox_cross": "☦️",
  "place_of_worship": "🛐",
  "ophiuchus": "⛎",
  "aries": "♈️",
  "taurus": "♉️",
  "gemini": "♊️",
  "cancer": "♋️",
  "leo": "♌️",
  "virgo": "♍️",
  "libra": "♎️",
  "scorpius": "♏️",
  "sagittarius": "♐️",
  "capricorn": "♑️",
  "aquarius": "♒️",
  "pisces": "♓️",
  "id": "🆔",
  "atom_symbol": "⚛️",
  "accept": "🉑",
  "radioactive": "☢️",
  "biohazard": "☣️",
  "mobile_phone_off": "📴",
  "vibration_mode": "📳",
  "eight_pointed_black_star": "✴️",
  "vs": "🆚",
  "white_flower": "💮",
  "ideograph_advantage": "🉐",
  "secret": "㊙️",
  "congratulations": "㊗️",
  "u6e80": "🈵",
  "a": "🅰️",
  "b": "🅱️",
  "ab": "🆎",
  "cl": "🆑",
  "o2": "🅾️",
  "sos": "🆘",
  "x": "❌",
  "o": "⭕️",
  "stop_sign": "🛑",
  "no_entry": "⛔️",
  "name_badge": "📛",
  "no_entry_sign": "🚫",
  "anger": "💢",
  "hotsprings": "♨️",
  "no_pedestrians": "🚷",
  "do_not_litter": "🚯",
  "no_bicycles": "🚳",
  "non-potable_water": "🚱",
  "underage": "🔞",
  "no_mobile_phones": "📵",
  "no_smoking": "🚭",
  "exclamation": "❗️",
  "heavy_exclamation_mark": "❗️",
  "grey_exclamation": "❕",
  "question": "❓",
  "grey_question": "❔",
  "bangbang": "‼️",
  "interrobang": "⁉️",
  "low_brightness": "🔅",
  "high_brightness": "🔆",
  "part_alternation_mark": "〽️",
  "warning": "⚠️",
  "children_crossing": "🚸",
  "trident": "🔱",
  "fleur_de_lis": "⚜️",
  "beginner": "🔰",
  "recycle": "♻️",
  "white_check_mark": "✅",
  "chart": "💹",
  "sparkle": "❇️",
  "eight_spoked_asterisk": "✳️",
  "negative_squared_cross_mark": "❎",
  "globe_with_meridians": "🌐",
  "diamond_shape_with_a_dot_inside": "💠",
  "m": "Ⓜ️",
  "cyclone": "🌀",
  "zzz": "💤",
  "atm": "🏧",
  "wc": "🚾",
  "wheelchair": "♿️",
  "parking": "🅿️",
  "sa": "🈂️",
  "passport_control": "🛂",
  "customs": "🛃",
  "baggage_claim": "🛄",
  "left_luggage": "🛅",
  "mens": "🚹",
  "womens": "🚺",
  "baby_symbol": "🚼",
  "restroom": "🚻",
  "put_litter_in_its_place": "🚮",
  "cinema": "🎦",
  "signal_strength": "📶",
  "koko": "🈁",
  "symbols": "🔣",
  "information_source": "ℹ️",
  "abc": "🔤",
  "abcd": "🔡",
  "capital_abcd": "🔠",
  "ng": "🆖",
  "ok": "🆗",
  "up": "🆙",
  "cool": "🆒",
  "new": "🆕",
  "free": "🆓",
  "zero": "0️⃣",
  "one": "1️⃣",
  "two": "2️⃣",
  "three": "3️⃣",
  "four": "4️⃣",
  "five": "5️⃣",
  "six": "6️⃣",
  "seven": "7️⃣",
  "eight": "8️⃣",
  "nine": "9️⃣",
  "keycap_ten": "🔟",
  "hash": "#️⃣",
  "asterisk": "*️⃣",
  "arrow_forward": "▶️",
  "pause_button": "⏸",
  "play_or_pause_button": "⏯",
  "stop_button": "⏹",
  "record_button": "⏺",
  "next_track_button": "⏭",
  "previous_track_button": "⏮",
  "fast_forward": "⏩",
  "rewind": "⏪",
  "arrow_double_up": "⏫",
  "arrow_double_down": "⏬",
  "arrow_backward": "◀️",
  "arrow_up_small": "🔼",
  "arrow_down_small": "🔽",
  "arrow_right": "➡️",
  "arrow_left": "⬅️",
  "arrow_up": "⬆️",
  "arrow_down": "⬇️",
  "arrow_upper_right": "↗️",
  "arrow_lower_right": "↘️",
  "arrow_lower_left": "↙️",
  "arrow_upper_left": "↖️",
  "arrow_up_down": "↕️",
  "left_right_arrow": "↔️",
  "arrow_right_hook": "↪️",
  "leftwards_arrow_with_hook": "↩️",
  "arrow_heading_up": "⤴️",
  "arrow_heading_down": "⤵️",
  "twisted_rightwards_arrows": "🔀",
  "repeat": "🔁",
  "repeat_one": "🔂",
  "arrows_counterclockwise": "🔄",
  "arrows_clockwise": "🔃",
  "musical_note": "🎵",
  "notes": "🎶",
  "heavy_plus_sign": "➕",
  "heavy_minus_sign": "➖",
  "heavy_division_sign": "➗",
  "heavy_multiplication_x": "✖️",
  "heavy_dollar_sign": "💲",
  "currency_exchange": "💱",
  "tm": "™️",
  "copyright": "©️",
  "registered": "®️",
  "wavy_dash": "〰️",
  "curly_loop": "➰",
  "loop": "➿",
  "end": "🔚",
  "back": "🔙",
  "on": "🔛",
  "top": "🔝",
  "soon": "🔜",
  "heavy_check_mark": "✔️",
  "ballot_box_with_check": "☑️",
  "radio_button": "🔘",
  "white_circle": "⚪️",
  "black_circle": "⚫️",
  "red_circle": "🔴",
  "large_blue_circle": "🔵",
  "small_red_triangle": "🔺",
  "small_red_triangle_down": "🔻",
  "small_orange_diamond": "🔸",
  "small_blue_diamond": "🔹",
  "large_orange_diamond": "🔶",
  "large_blue_diamond": "🔷",
  "white_square_button": "🔳",
  "black_square_button": "🔲",
  "black_small_square": "▪️",
  "white_small_square": "▫️",
  "black_medium_small_square": "◾️",
  "white_medium_small_square": "◽️",
  "black_medium_square": "◼️",
  "white_medium_square": "◻️",
  "black_large_square": "⬛️",
  "white_large_square": "⬜️",
  "speaker": "🔈",
  "mute": "🔇",
  "sound": "🔉",
  "loud_sound": "🔊",
  "bell": "🔔",
  "no_bell": "🔕",
  "mega": "📣",
  "loudspeaker": "📢",
  "eye_speech_bubble": "👁‍🗨",
  "speech_balloon": "💬",
  "thought_balloon": "💭",
  "right_anger_bubble": "🗯",
  "spades": "♠️",
  "clubs": "♣️",
  "hearts": "♥️",
  "diamonds": "♦️",
  "black_joker": "🃏",
  "flower_playing_cards": "🎴",
  "mahjong": "🀄️",
  "clock1": "🕐",
  "clock2": "🕑",
  "clock3": "🕒",
  "clock4": "🕓",
  "clock5": "🕔",
  "clock6": "🕕",
  "clock7": "🕖",
  "clock8": "🕗",
  "clock9": "🕘",
  "clock10": "🕙",
  "clock11": "🕚",
  "clock12": "🕛",
  "clock130": "🕜",
  "clock230": "🕝",
  "clock330": "🕞",
  "clock430": "🕟",
  "clock530": "🕠",
  "clock630": "🕡",
  "clock730": "🕢",
  "clock830": "🕣",
  "clock930": "🕤",
  "clock1030": "🕥",
  "clock1130": "🕦",
  "clock1230": "🕧",
  "white_flag": "🏳️",
  "black_flag": "🏴",
  "checkered_flag": "🏁",
  "triangular_flag_on_post": "🚩",
  "rainbow_flag": "🏳️‍🌈",
  "afghanistan": "🇦🇫",
  "aland_islands": "🇦🇽",
  "albania": "🇦🇱",
  "algeria": "🇩🇿",
  "american_samoa": "🇦🇸",
  "andorra": "🇦🇩",
  "angola": "🇦🇴",
  "anguilla": "🇦🇮",
  "antarctica": "🇦🇶",
  "antigua_barbuda": "🇦🇬",
  "argentina": "🇦🇷",
  "armenia": "🇦🇲",
  "aruba": "🇦🇼",
  "australia": "🇦🇺",
  "austria": "🇦🇹",
  "azerbaijan": "🇦🇿",
  "bahamas": "🇧🇸",
  "bahrain": "🇧🇭",
  "bangladesh": "🇧🇩",
  "barbados": "🇧🇧",
  "belarus": "🇧🇾",
  "belgium": "🇧🇪",
  "belize": "🇧🇿",
  "benin": "🇧🇯",
  "bermuda": "🇧🇲",
  "bhutan": "🇧🇹",
  "bolivia": "🇧🇴",
  "caribbean_netherlands": "🇧🇶",
  "bosnia_herzegovina": "🇧🇦",
  "botswana": "🇧🇼",
  "brazil": "🇧🇷",
  "british_indian_ocean_territory": "🇮🇴",
  "british_virgin_islands": "🇻🇬",
  "brunei": "🇧🇳",
  "bulgaria": "🇧🇬",
  "burkina_faso": "🇧🇫",
  "burundi": "🇧🇮",
  "cape_verde": "🇨🇻",
  "cambodia": "🇰🇭",
  "cameroon": "🇨🇲",
  "canada": "🇨🇦",
  "canary_islands": "🇮🇨",
  "cayman_islands": "🇰🇾",
  "central_african_republic": "🇨🇫",
  "chad": "🇹🇩",
  "chile": "🇨🇱",
  "cn": "🇨🇳",
  "christmas_island": "🇨🇽",
  "cocos_islands": "🇨🇨",
  "colombia": "🇨🇴",
  "comoros": "🇰🇲",
  "congo_brazzaville": "🇨🇬",
  "congo_kinshasa": "🇨🇩",
  "cook_islands": "🇨🇰",
  "costa_rica": "🇨🇷",
  "cote_divoire": "🇨🇮",
  "croatia": "🇭🇷",
  "cuba": "🇨🇺",
  "curacao": "🇨🇼",
  "cyprus": "🇨🇾",
  "czech_republic": "🇨🇿",
  "denmark": "🇩🇰",
  "djibouti": "🇩🇯",
  "dominica": "🇩🇲",
  "dominican_republic": "🇩🇴",
  "ecuador": "🇪🇨",
  "egypt": "🇪🇬",
  "el_salvador": "🇸🇻",
  "equatorial_guinea": "🇬🇶",
  "eritrea": "🇪🇷",
  "estonia": "🇪🇪",
  "ethiopia": "🇪🇹",
  "eu": "🇪🇺",
  "european_union": "🇪🇺",
  "falkland_islands": "🇫🇰",
  "faroe_islands": "🇫🇴",
  "fiji": "🇫🇯",
  "finland": "🇫🇮",
  "fr": "🇫🇷",
  "french_guiana": "🇬🇫",
  "french_polynesia": "🇵🇫",
  "french_southern_territories": "🇹🇫",
  "gabon": "🇬🇦",
  "gambia": "🇬🇲",
  "georgia": "🇬🇪",
  "de": "🇩🇪",
  "ghana": "🇬🇭",
  "gibraltar": "🇬🇮",
  "greece": "🇬🇷",
  "greenland": "🇬🇱",
  "grenada": "🇬🇩",
  "guadeloupe": "🇬🇵",
  "guam": "🇬🇺",
  "guatemala": "🇬🇹",
  "guernsey": "🇬🇬",
  "guinea": "🇬🇳",
  "guinea_bissau": "🇬🇼",
  "guyana": "🇬🇾",
  "haiti": "🇭🇹",
  "honduras": "🇭🇳",
  "hong_kong": "🇭🇰",
  "hungary": "🇭🇺",
  "iceland": "🇮🇸",
  "india": "🇮🇳",
  "indonesia": "🇮🇩",
  "iran": "🇮🇷",
  "iraq": "🇮🇶",
  "ireland": "🇮🇪",
  "isle_of_man": "🇮🇲",
  "israel": "🇮🇱",
  "it": "🇮🇹",
  "jamaica": "🇯🇲",
  "jp": "🇯🇵",
  "crossed_flags": "🎌",
  "jersey": "🇯🇪",
  "jordan": "🇯🇴",
  "kazakhstan": "🇰🇿",
  "kenya": "🇰🇪",
  "kiribati": "🇰🇮",
  "kosovo": "🇽🇰",
  "kuwait": "🇰🇼",
  "kyrgyzstan": "🇰🇬",
  "laos": "🇱🇦",
  "latvia": "🇱🇻",
  "lebanon": "🇱🇧",
  "lesotho": "🇱🇸",
  "liberia": "🇱🇷",
  "libya": "🇱🇾",
  "liechtenstein": "🇱🇮",
  "lithuania": "🇱🇹",
  "luxembourg": "🇱🇺",
  "macau": "🇲🇴",
  "macedonia": "🇲🇰",
  "madagascar": "🇲🇬",
  "malawi": "🇲🇼",
  "malaysia": "🇲🇾",
  "maldives": "🇲🇻",
  "mali": "🇲🇱",
  "malta": "🇲🇹",
  "marshall_islands": "🇲🇭",
  "martinique": "🇲🇶",
  "mauritania": "🇲🇷",
  "mauritius": "🇲🇺",
  "mayotte": "🇾🇹",
  "mexico": "🇲🇽",
  "micronesia": "🇫🇲",
  "moldova": "🇲🇩",
  "monaco": "🇲🇨",
  "mongolia": "🇲🇳",
  "montenegro": "🇲🇪",
  "montserrat": "🇲🇸",
  "morocco": "🇲🇦",
  "mozambique": "🇲🇿",
  "myanmar": "🇲🇲",
  "namibia": "🇳🇦",
  "nauru": "🇳🇷",
  "nepal": "🇳🇵",
  "netherlands": "🇳🇱",
  "new_caledonia": "🇳🇨",
  "new_zealand": "🇳🇿",
  "nicaragua": "🇳🇮",
  "niger": "🇳🇪",
  "nigeria": "🇳🇬",
  "niue": "🇳🇺",
  "norfolk_island": "🇳🇫",
  "northern_mariana_islands": "🇲🇵",
  "north_korea": "🇰🇵",
  "norway": "🇳🇴",
  "oman": "🇴🇲",
  "pakistan": "🇵🇰",
  "palau": "🇵🇼",
  "palestinian_territories": "🇵🇸",
  "panama": "🇵🇦",
  "papua_new_guinea": "🇵🇬",
  "paraguay": "🇵🇾",
  "peru": "🇵🇪",
  "philippines": "🇵🇭",
  "pitcairn_islands": "🇵🇳",
  "poland": "🇵🇱",
  "portugal": "🇵🇹",
  "puerto_rico": "🇵🇷",
  "qatar": "🇶🇦",
  "reunion": "🇷🇪",
  "romania": "🇷🇴",
  "ru": "🇷🇺",
  "rwanda": "🇷🇼",
  "st_barthelemy": "🇧🇱",
  "st_helena": "🇸🇭",
  "st_kitts_nevis": "🇰🇳",
  "st_lucia": "🇱🇨",
  "st_pierre_miquelon": "🇵🇲",
  "st_vincent_grenadines": "🇻🇨",
  "samoa": "🇼🇸",
  "san_marino": "🇸🇲",
  "sao_tome_principe": "🇸🇹",
  "saudi_arabia": "🇸🇦",
  "senegal": "🇸🇳",
  "serbia": "🇷🇸",
  "seychelles": "🇸🇨",
  "sierra_leone": "🇸🇱",
  "singapore": "🇸🇬",
  "sint_maarten": "🇸🇽",
  "slovakia": "🇸🇰",
  "slovenia": "🇸🇮",
  "solomon_islands": "🇸🇧",
  "somalia": "🇸🇴",
  "south_africa": "🇿🇦",
  "south_georgia_south_sandwich_islands": "🇬🇸",
  "kr": "🇰🇷",
  "south_sudan": "🇸🇸",
  "es": "🇪🇸",
  "sri_lanka": "🇱🇰",
  "sudan": "🇸🇩",
  "suriname": "🇸🇷",
  "swaziland": "🇸🇿",
  "sweden": "🇸🇪",
  "switzerland": "🇨🇭",
  "syria": "🇸🇾",
  "taiwan": "🇹🇼",
  "tajikistan": "🇹🇯",
  "tanzania": "🇹🇿",
  "thailand": "🇹🇭",
  "timor_leste": "🇹🇱",
  "togo": "🇹🇬",
  "tokelau": "🇹🇰",
  "tonga": "🇹🇴",
  "trinidad_tobago": "🇹🇹",
  "tunisia": "🇹🇳",
  "tr": "🇹🇷",
  "turkmenistan": "🇹🇲",
  "turks_caicos_islands": "🇹🇨",
  "tuvalu": "🇹🇻",
  "uganda": "🇺🇬",
  "ukraine": "🇺🇦",
  "united_arab_emirates": "🇦🇪",
  "gb": "🇬🇧",
  "uk": "🇬🇧",
  "us": "🇺🇸",
  "us_virgin_islands": "🇻🇮",
  "uruguay": "🇺🇾",
  "uzbekistan": "🇺🇿",
  "vanuatu": "🇻🇺",
  "vatican_city": "🇻🇦",
  "venezuela": "🇻🇪",
  "vietnam": "🇻🇳",
  "wallis_futuna": "🇼🇫",
  "western_sahara": "🇪🇭",
  "yemen": "🇾🇪",
  "zambia": "🇿🇲",
  "zimbabwe": "🇿🇼"
}
},{}],48:[function(require,module,exports){
// Emoticons -> Emoji mapping.
//
// (!) Some patterns skipped, to avoid collisions
// without increase matcher complicity. Than can change in future.
//
// Places to look for more emoticons info:
//
// - http://en.wikipedia.org/wiki/List_of_emoticons#Western
// - https://github.com/wooorm/emoticon/blob/master/Support.md
// - http://factoryjoe.com/projects/emoticons/
//
'use strict';

module.exports = {
  angry:            [ '>:(', '>:-(' ],
  blush:            [ ':")', ':-")' ],
  broken_heart:     [ '</3', '<\\3' ],
  // :\ and :-\ not used because of conflict with markdown escaping
  confused:         [ ':/', ':-/' ], // twemoji shows question
  cry:              [ ":'(", ":'-(", ':,(', ':,-(' ],
  frowning:         [ ':(', ':-(' ],
  heart:            [ '<3' ],
  imp:              [ ']:(', ']:-(' ],
  innocent:         [ 'o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)' ],
  joy:              [ ":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D' ],
  kissing:          [ ':*', ':-*' ],
  laughing:         [ 'x-)', 'X-)' ],
  neutral_face:     [ ':|', ':-|' ],
  open_mouth:       [ ':o', ':-o', ':O', ':-O' ],
  rage:             [ ':@', ':-@' ],
  smile:            [ ':D', ':-D' ],
  smiley:           [ ':)', ':-)' ],
  smiling_imp:      [ ']:)', ']:-)' ],
  sob:              [ ":,'(", ":,'-(", ';(', ';-(' ],
  stuck_out_tongue: [ ':P', ':-P' ],
  sunglasses:       [ '8-)', 'B-)' ],
  sweat:            [ ',:(', ',:-(' ],
  sweat_smile:      [ ',:)', ',:-)' ],
  unamused:         [ ':s', ':-S', ':z', ':-Z', ':$', ':-$' ],
  wink:             [ ';)', ';-)' ]
};

},{}],49:[function(require,module,exports){
// Convert input options to more useable format
// and compile search regexp

'use strict';


function quoteRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}


module.exports = function normalize_opts(options) {
  var emojies = options.defs,
      shortcuts;

  // Filter emojies by whitelist, if needed
  if (options.enabled.length) {
    emojies = Object.keys(emojies).reduce(function (acc, key) {
      if (options.enabled.indexOf(key) >= 0) {
        acc[key] = emojies[key];
      }
      return acc;
    }, {});
  }

  // Flatten shortcuts to simple object: { alias: emoji_name }
  shortcuts = Object.keys(options.shortcuts).reduce(function (acc, key) {
    // Skip aliases for filtered emojies, to reduce regexp
    if (!emojies[key]) { return acc; }

    if (Array.isArray(options.shortcuts[key])) {
      options.shortcuts[key].forEach(function (alias) {
        acc[alias] = key;
      });
      return acc;
    }

    acc[options.shortcuts[key]] = key;
    return acc;
  }, {});

  // Compile regexp
  var names = Object.keys(emojies)
                .map(function (name) { return ':' + name + ':'; })
                .concat(Object.keys(shortcuts))
                .sort()
                .reverse()
                .map(function (name) { return quoteRE(name); })
                .join('|');
  var scanRE = RegExp(names);
  var replaceRE = RegExp(names, 'g');

  return {
    defs: emojies,
    shortcuts: shortcuts,
    scanRE: scanRE,
    replaceRE: replaceRE
  };
};

},{}],50:[function(require,module,exports){
'use strict';

module.exports = function emoji_html(tokens, idx /*, options, env */) {
  return tokens[idx].content;
};

},{}],51:[function(require,module,exports){
// Emojies & shortcuts replacement logic.
//
// Note: In theory, it could be faster to parse :smile: in inline chain and
// leave only shortcuts here. But, who care...
//

'use strict';


module.exports = function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
  var arrayReplaceAt = md.utils.arrayReplaceAt,
      ucm = md.utils.lib.ucmicro,
      ZPCc = new RegExp([ ucm.Z.source, ucm.P.source, ucm.Cc.source ].join('|'));

  function splitTextToken(text, level, Token) {
    var token, last_pos = 0, nodes = [];

    text.replace(replaceRE, function (match, offset, src) {
      var emoji_name;
      // Validate emoji name
      if (shortcuts.hasOwnProperty(match)) {
        // replace shortcut with full name
        emoji_name = shortcuts[match];

        // Don't allow letters before any shortcut (as in no ":/" in http://)
        if (offset > 0 && !ZPCc.test(src[offset - 1])) {
          return;
        }

        // Don't allow letters after any shortcut
        if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
          return;
        }
      } else {
        emoji_name = match.slice(1, -1);
      }

      // Add new tokens to pending list
      if (offset > last_pos) {
        token         = new Token('text', '', 0);
        token.content = text.slice(last_pos, offset);
        nodes.push(token);
      }

      token         = new Token('emoji', '', 0);
      token.markup  = emoji_name;
      token.content = emojies[emoji_name];
      nodes.push(token);

      last_pos = offset + match.length;
    });

    if (last_pos < text.length) {
      token         = new Token('text', '', 0);
      token.content = text.slice(last_pos);
      nodes.push(token);
    }

    return nodes;
  }

  return function emoji_replace(state) {
    var i, j, l, tokens, token,
        blockTokens = state.tokens,
        autolinkLevel = 0;

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue; }
      tokens = blockTokens[j].children;

      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];

        if (token.type === 'link_open' || token.type === 'link_close') {
          if (token.info === 'auto') { autolinkLevel -= token.nesting; }
        }

        if (token.type === 'text' && autolinkLevel === 0 && scanRE.test(token.content)) {
          // replace current node
          blockTokens[j].children = tokens = arrayReplaceAt(
            tokens, i, splitTextToken(token.content, token.level, state.Token)
          );
        }
      }
    }
  };
};

},{}],52:[function(require,module,exports){
'use strict';


module.exports = require('./lib/');

},{"./lib/":61}],53:[function(require,module,exports){
// HTML5 entities map: { name -> utf16string }
//
'use strict';

/*eslint quotes:0*/
module.exports = require('entities/maps/entities.json');

},{"entities/maps/entities.json":104}],54:[function(require,module,exports){
// List of valid html blocks names, accorting to commonmark spec
// http://jgm.github.io/CommonMark/spec.html#html-blocks

'use strict';


module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'meta',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];

},{}],55:[function(require,module,exports){
// Regexps to match html elements

'use strict';

var attr_name     = '[a-zA-Z_:][a-zA-Z0-9:._-]*';

var unquoted      = '[^"\'=<>`\\x00-\\x20]+';
var single_quoted = "'[^']*'";
var double_quoted = '"[^"]*"';

var attr_value  = '(?:' + unquoted + '|' + single_quoted + '|' + double_quoted + ')';

var attribute   = '(?:\\s+' + attr_name + '(?:\\s*=\\s*' + attr_value + ')?)';

var open_tag    = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';

var close_tag   = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment     = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing  = '<[?].*?[?]>';
var declaration = '<![A-Z]+\\s+[^>]*>';
var cdata       = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

var HTML_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + '|' + comment +
                        '|' + processing + '|' + declaration + '|' + cdata + ')');
var HTML_OPEN_CLOSE_TAG_RE = new RegExp('^(?:' + open_tag + '|' + close_tag + ')');

module.exports.HTML_TAG_RE = HTML_TAG_RE;
module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;

},{}],56:[function(require,module,exports){
// Utilities
//
'use strict';


function _class(obj) { return Object.prototype.toString.call(obj); }

function isString(obj) { return _class(obj) === '[object String]'; }

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function has(object, key) {
  return _hasOwnProperty.call(object, key);
}

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be object');
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

// Remove element from array and put another array at those position.
// Useful for some operations with tokens
function arrayReplaceAt(src, pos, newElements) {
  return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
}

////////////////////////////////////////////////////////////////////////////////

function isValidEntityCode(c) {
  /*eslint no-bitwise:0*/
  // broken sequence
  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
  // never used
  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
  // control codes
  if (c >= 0x00 && c <= 0x08) { return false; }
  if (c === 0x0B) { return false; }
  if (c >= 0x0E && c <= 0x1F) { return false; }
  if (c >= 0x7F && c <= 0x9F) { return false; }
  // out of range
  if (c > 0x10FFFF) { return false; }
  return true;
}

function fromCodePoint(c) {
  /*eslint no-bitwise:0*/
  if (c > 0xffff) {
    c -= 0x10000;
    var surrogate1 = 0xd800 + (c >> 10),
        surrogate2 = 0xdc00 + (c & 0x3ff);

    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c);
}


var UNESCAPE_MD_RE  = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
var ENTITY_RE       = /&([a-z#][a-z0-9]{1,31});/gi;
var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + '|' + ENTITY_RE.source, 'gi');

var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;

var entities = require('./entities');

function replaceEntityPattern(match, name) {
  var code = 0;

  if (has(entities, name)) {
    return entities[name];
  }

  if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code = name[1].toLowerCase() === 'x' ?
      parseInt(name.slice(2), 16)
    :
      parseInt(name.slice(1), 10);
    if (isValidEntityCode(code)) {
      return fromCodePoint(code);
    }
  }

  return match;
}

/*function replaceEntities(str) {
  if (str.indexOf('&') < 0) { return str; }

  return str.replace(ENTITY_RE, replaceEntityPattern);
}*/

function unescapeMd(str) {
  if (str.indexOf('\\') < 0) { return str; }
  return str.replace(UNESCAPE_MD_RE, '$1');
}

function unescapeAll(str) {
  if (str.indexOf('\\') < 0 && str.indexOf('&') < 0) { return str; }

  return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
    if (escaped) { return escaped; }
    return replaceEntityPattern(match, entity);
  });
}

////////////////////////////////////////////////////////////////////////////////

var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;'
};

function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}

function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}

////////////////////////////////////////////////////////////////////////////////

var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

function escapeRE(str) {
  return str.replace(REGEXP_ESCAPE_RE, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////

function isSpace(code) {
  switch (code) {
    case 0x09:
    case 0x20:
      return true;
  }
  return false;
}

// Zs (unicode class) || [\t\f\v\r\n]
function isWhiteSpace(code) {
  if (code >= 0x2000 && code <= 0x200A) { return true; }
  switch (code) {
    case 0x09: // \t
    case 0x0A: // \n
    case 0x0B: // \v
    case 0x0C: // \f
    case 0x0D: // \r
    case 0x20:
    case 0xA0:
    case 0x1680:
    case 0x202F:
    case 0x205F:
    case 0x3000:
      return true;
  }
  return false;
}

////////////////////////////////////////////////////////////////////////////////

/*eslint-disable max-len*/
var UNICODE_PUNCT_RE = require('uc.micro/categories/P/regex');

// Currently without astral characters support.
function isPunctChar(ch) {
  return UNICODE_PUNCT_RE.test(ch);
}


// Markdown ASCII punctuation characters.
//
// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
//
// Don't confuse with unicode punctuation !!! It lacks some chars in ascii range.
//
function isMdAsciiPunct(ch) {
  switch (ch) {
    case 0x21/* ! */:
    case 0x22/* " */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x27/* ' */:
    case 0x28/* ( */:
    case 0x29/* ) */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2C/* , */:
    case 0x2D/* - */:
    case 0x2E/* . */:
    case 0x2F/* / */:
    case 0x3A/* : */:
    case 0x3B/* ; */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x3F/* ? */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7C/* | */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

// Hepler to unify [reference labels].
//
function normalizeReference(str) {
  // use .toUpperCase() instead of .toLowerCase()
  // here to avoid a conflict with Object.prototype
  // members (most notably, `__proto__`)
  return str.trim().replace(/\s+/g, ' ').toUpperCase();
}

////////////////////////////////////////////////////////////////////////////////

// Re-export libraries commonly used in both markdown-it and its plugins,
// so plugins won't have to depend on them explicitly, which reduces their
// bundled size (e.g. a browser build).
//
exports.lib                 = {};
exports.lib.mdurl           = require('mdurl');
exports.lib.ucmicro         = require('uc.micro');

exports.assign              = assign;
exports.isString            = isString;
exports.has                 = has;
exports.unescapeMd          = unescapeMd;
exports.unescapeAll         = unescapeAll;
exports.isValidEntityCode   = isValidEntityCode;
exports.fromCodePoint       = fromCodePoint;
// exports.replaceEntities     = replaceEntities;
exports.escapeHtml          = escapeHtml;
exports.arrayReplaceAt      = arrayReplaceAt;
exports.isSpace             = isSpace;
exports.isWhiteSpace        = isWhiteSpace;
exports.isMdAsciiPunct      = isMdAsciiPunct;
exports.isPunctChar         = isPunctChar;
exports.escapeRE            = escapeRE;
exports.normalizeReference  = normalizeReference;

},{"./entities":53,"mdurl":108,"uc.micro":115,"uc.micro/categories/P/regex":113}],57:[function(require,module,exports){
// Just a shortcut for bulk export
'use strict';


exports.parseLinkLabel       = require('./parse_link_label');
exports.parseLinkDestination = require('./parse_link_destination');
exports.parseLinkTitle       = require('./parse_link_title');

},{"./parse_link_destination":58,"./parse_link_label":59,"./parse_link_title":60}],58:[function(require,module,exports){
// Parse link destination
//
'use strict';


var isSpace     = require('../common/utils').isSpace;
var unescapeAll = require('../common/utils').unescapeAll;


module.exports = function parseLinkDestination(str, pos, max) {
  var code, level,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++;
    while (pos < max) {
      code = str.charCodeAt(pos);
      if (code === 0x0A /* \n */ || isSpace(code)) { return result; }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1;
        result.str = unescapeAll(str.slice(start + 1, pos));
        result.ok = true;
        return result;
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2;
        continue;
      }

      pos++;
    }

    // no closing '>'
    return result;
  }

  // this should be ... } else { ... branch

  level = 0;
  while (pos < max) {
    code = str.charCodeAt(pos);

    if (code === 0x20) { break; }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break; }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2;
      continue;
    }

    if (code === 0x28 /* ( */) {
      level++;
    }

    if (code === 0x29 /* ) */) {
      if (level === 0) { break; }
      level--;
    }

    pos++;
  }

  if (start === pos) { return result; }
  if (level !== 0) { return result; }

  result.str = unescapeAll(str.slice(start, pos));
  result.lines = lines;
  result.pos = pos;
  result.ok = true;
  return result;
};

},{"../common/utils":56}],59:[function(require,module,exports){
// Parse link label
//
// this function assumes that first character ("[") already matches;
// returns the end of the label
//
'use strict';

module.exports = function parseLinkLabel(state, start, disableNested) {
  var level, found, marker, prevPos,
      labelEnd = -1,
      max = state.posMax,
      oldPos = state.pos;

  state.pos = start + 1;
  level = 1;

  while (state.pos < max) {
    marker = state.src.charCodeAt(state.pos);
    if (marker === 0x5D /* ] */) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }

    prevPos = state.pos;
    state.md.inline.skipToken(state);
    if (marker === 0x5B /* [ */) {
      if (prevPos === state.pos - 1) {
        // increase level if we find text `[`, which is not a part of any token
        level++;
      } else if (disableNested) {
        state.pos = oldPos;
        return -1;
      }
    }
  }

  if (found) {
    labelEnd = state.pos;
  }

  // restore old state
  state.pos = oldPos;

  return labelEnd;
};

},{}],60:[function(require,module,exports){
// Parse link title
//
'use strict';


var unescapeAll = require('../common/utils').unescapeAll;


module.exports = function parseLinkTitle(str, pos, max) {
  var code,
      marker,
      lines = 0,
      start = pos,
      result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ''
      };

  if (pos >= max) { return result; }

  marker = str.charCodeAt(pos);

  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return result; }

  pos++;

  // if opening marker is "(", switch it to closing marker ")"
  if (marker === 0x28) { marker = 0x29; }

  while (pos < max) {
    code = str.charCodeAt(pos);
    if (code === marker) {
      result.pos = pos + 1;
      result.lines = lines;
      result.str = unescapeAll(str.slice(start + 1, pos));
      result.ok = true;
      return result;
    } else if (code === 0x0A) {
      lines++;
    } else if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos++;
      if (str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }

    pos++;
  }

  return result;
};

},{"../common/utils":56}],61:[function(require,module,exports){
// Main parser class

'use strict';


var utils        = require('./common/utils');
var helpers      = require('./helpers');
var Renderer     = require('./renderer');
var ParserCore   = require('./parser_core');
var ParserBlock  = require('./parser_block');
var ParserInline = require('./parser_inline');
var LinkifyIt    = require('linkify-it');
var mdurl        = require('mdurl');
var punycode     = require('punycode');


var config = {
  'default': require('./presets/default'),
  zero: require('./presets/zero'),
  commonmark: require('./presets/commonmark')
};

////////////////////////////////////////////////////////////////////////////////
//
// This validator can prohibit more than really needed to prevent XSS. It's a
// tradeoff to keep code simple and to be secure by default.
//
// If you need different setup - override validator method as you wish. Or
// replace it with dummy function and use external sanitizer.
//

var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

function validateLink(url) {
  // url should be normalized at this point, and existing entities are decoded
  var str = url.trim().toLowerCase();

  return BAD_PROTO_RE.test(str) ? (GOOD_DATA_RE.test(str) ? true : false) : true;
}

////////////////////////////////////////////////////////////////////////////////


var RECODE_HOSTNAME_FOR = [ 'http:', 'https:', 'mailto:' ];

function normalizeLink(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.encode(mdurl.format(parsed));
}

function normalizeLinkText(url) {
  var parsed = mdurl.parse(url, true);

  if (parsed.hostname) {
    // Encode hostnames in urls like:
    // `http://host/`, `https://host/`, `mailto:user@host`, `//host/`
    //
    // We don't encode unknown schemas, because it's likely that we encode
    // something we shouldn't (e.g. `skype:name` treated as `skype:host`)
    //
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) { /**/ }
    }
  }

  return mdurl.decode(mdurl.format(parsed));
}


/**
 * class MarkdownIt
 *
 * Main parser/renderer class.
 *
 * ##### Usage
 *
 * ```javascript
 * // node.js, "classic" way:
 * var MarkdownIt = require('markdown-it'),
 *     md = new MarkdownIt();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // node.js, the same, but with sugar:
 * var md = require('markdown-it')();
 * var result = md.render('# markdown-it rulezz!');
 *
 * // browser without AMD, added to "window" on script load
 * // Note, there are no dash.
 * var md = window.markdownit();
 * var result = md.render('# markdown-it rulezz!');
 * ```
 *
 * Single line rendering, without paragraph wrap:
 *
 * ```javascript
 * var md = require('markdown-it')();
 * var result = md.renderInline('__markdown-it__ rulezz!');
 * ```
 **/

/**
 * new MarkdownIt([presetName, options])
 * - presetName (String): optional, `commonmark` / `zero`
 * - options (Object)
 *
 * Creates parser instanse with given config. Can be called without `new`.
 *
 * ##### presetName
 *
 * MarkdownIt provides named presets as a convenience to quickly
 * enable/disable active syntax rules and options for common use cases.
 *
 * - ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) -
 *   configures parser to strict [CommonMark](http://commonmark.org/) mode.
 * - [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) -
 *   similar to GFM, used when no preset name given. Enables all available rules,
 *   but still without html, typographer & autolinker.
 * - ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) -
 *   all rules disabled. Useful to quickly setup your config via `.enable()`.
 *   For example, when you need only `bold` and `italic` markup and nothing else.
 *
 * ##### options:
 *
 * - __html__ - `false`. Set `true` to enable HTML tags in source. Be careful!
 *   That's not safe! You may need external sanitizer to protect output from XSS.
 *   It's better to extend features via plugins, instead of enabling HTML.
 * - __xhtmlOut__ - `false`. Set `true` to add '/' when closing single tags
 *   (`<br />`). This is needed only for full CommonMark compatibility. In real
 *   world you will need HTML output.
 * - __breaks__ - `false`. Set `true` to convert `\n` in paragraphs into `<br>`.
 * - __langPrefix__ - `language-`. CSS language class prefix for fenced blocks.
 *   Can be useful for external highlighters.
 * - __linkify__ - `false`. Set `true` to autoconvert URL-like text to links.
 * - __typographer__  - `false`. Set `true` to enable [some language-neutral
 *   replacement](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js) +
 *   quotes beautification (smartquotes).
 * - __quotes__ - `“”‘’`, String or Array. Double + single quotes replacement
 *   pairs, when typographer enabled and smartquotes on. For example, you can
 *   use `'«»„“'` for Russian, `'„“‚‘'` for German, and
 *   `['«\xA0', '\xA0»', '‹\xA0', '\xA0›']` for French (including nbsp).
 * - __highlight__ - `null`. Highlighter function for fenced code blocks.
 *   Highlighter `function (str, lang)` should return escaped HTML. It can also
 *   return empty string if the source was not changed and should be escaped
 *   externaly. If result starts with <pre... internal wrapper is skipped.
 *
 * ##### Example
 *
 * ```javascript
 * // commonmark mode
 * var md = require('markdown-it')('commonmark');
 *
 * // default mode
 * var md = require('markdown-it')();
 *
 * // enable everything
 * var md = require('markdown-it')({
 *   html: true,
 *   linkify: true,
 *   typographer: true
 * });
 * ```
 *
 * ##### Syntax highlighting
 *
 * ```js
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return hljs.highlight(lang, str, true).value;
 *       } catch (__) {}
 *     }
 *
 *     return ''; // use external default escaping
 *   }
 * });
 * ```
 *
 * Or with full wrapper override (if you need assign class to `<pre>`):
 *
 * ```javascript
 * var hljs = require('highlight.js') // https://highlightjs.org/
 *
 * // Actual default values
 * var md = require('markdown-it')({
 *   highlight: function (str, lang) {
 *     if (lang && hljs.getLanguage(lang)) {
 *       try {
 *         return '<pre class="hljs"><code>' +
 *                hljs.highlight(lang, str, true).value +
 *                '</code></pre>';
 *       } catch (__) {}
 *     }
 *
 *     return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
 *   }
 * });
 * ```
 *
 **/
function MarkdownIt(presetName, options) {
  if (!(this instanceof MarkdownIt)) {
    return new MarkdownIt(presetName, options);
  }

  if (!options) {
    if (!utils.isString(presetName)) {
      options = presetName || {};
      presetName = 'default';
    }
  }

  /**
   * MarkdownIt#inline -> ParserInline
   *
   * Instance of [[ParserInline]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.inline = new ParserInline();

  /**
   * MarkdownIt#block -> ParserBlock
   *
   * Instance of [[ParserBlock]]. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.block = new ParserBlock();

  /**
   * MarkdownIt#core -> Core
   *
   * Instance of [[Core]] chain executor. You may need it to add new rules when
   * writing plugins. For simple rules control use [[MarkdownIt.disable]] and
   * [[MarkdownIt.enable]].
   **/
  this.core = new ParserCore();

  /**
   * MarkdownIt#renderer -> Renderer
   *
   * Instance of [[Renderer]]. Use it to modify output look. Or to add rendering
   * rules for new token types, generated by plugins.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * function myToken(tokens, idx, options, env, self) {
   *   //...
   *   return result;
   * };
   *
   * md.renderer.rules['my_token'] = myToken
   * ```
   *
   * See [[Renderer]] docs and [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js).
   **/
  this.renderer = new Renderer();

  /**
   * MarkdownIt#linkify -> LinkifyIt
   *
   * [linkify-it](https://github.com/markdown-it/linkify-it) instance.
   * Used by [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js)
   * rule.
   **/
  this.linkify = new LinkifyIt();

  /**
   * MarkdownIt#validateLink(url) -> Boolean
   *
   * Link validation function. CommonMark allows too much in links. By default
   * we disable `javascript:`, `vbscript:`, `file:` schemas, and almost all `data:...` schemas
   * except some embedded image types.
   *
   * You can change this behaviour:
   *
   * ```javascript
   * var md = require('markdown-it')();
   * // enable everything
   * md.validateLink = function () { return true; }
   * ```
   **/
  this.validateLink = validateLink;

  /**
   * MarkdownIt#normalizeLink(url) -> String
   *
   * Function used to encode link url to a machine-readable format,
   * which includes url-encoding, punycode, etc.
   **/
  this.normalizeLink = normalizeLink;

  /**
   * MarkdownIt#normalizeLinkText(url) -> String
   *
   * Function used to decode link url to a human-readable format`
   **/
  this.normalizeLinkText = normalizeLinkText;


  // Expose utils & helpers for easy acces from plugins

  /**
   * MarkdownIt#utils -> utils
   *
   * Assorted utility functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js).
   **/
  this.utils = utils;

  /**
   * MarkdownIt#helpers -> helpers
   *
   * Link components parser functions, useful to write plugins. See details
   * [here](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers).
   **/
  this.helpers = utils.assign({}, helpers);


  this.options = {};
  this.configure(presetName);

  if (options) { this.set(options); }
}


/** chainable
 * MarkdownIt.set(options)
 *
 * Set parser options (in the same format as in constructor). Probably, you
 * will never need it, but you can change options after constructor call.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .set({ html: true, breaks: true })
 *             .set({ typographer, true });
 * ```
 *
 * __Note:__ To achieve the best possible performance, don't modify a
 * `markdown-it` instance options on the fly. If you need multiple configurations
 * it's best to create multiple instances and initialize each with separate
 * config.
 **/
MarkdownIt.prototype.set = function (options) {
  utils.assign(this.options, options);
  return this;
};


/** chainable, internal
 * MarkdownIt.configure(presets)
 *
 * Batch load of all options and compenent settings. This is internal method,
 * and you probably will not need it. But if you with - see available presets
 * and data structure [here](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)
 *
 * We strongly recommend to use presets instead of direct config loads. That
 * will give better compatibility with next versions.
 **/
MarkdownIt.prototype.configure = function (presets) {
  var self = this, presetName;

  if (utils.isString(presets)) {
    presetName = presets;
    presets = config[presetName];
    if (!presets) { throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name'); }
  }

  if (!presets) { throw new Error('Wrong `markdown-it` preset, can\'t be empty'); }

  if (presets.options) { self.set(presets.options); }

  if (presets.components) {
    Object.keys(presets.components).forEach(function (name) {
      if (presets.components[name].rules) {
        self[name].ruler.enableOnly(presets.components[name].rules);
      }
      if (presets.components[name].rules2) {
        self[name].ruler2.enableOnly(presets.components[name].rules2);
      }
    });
  }
  return this;
};


/** chainable
 * MarkdownIt.enable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to enable
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable list or rules. It will automatically find appropriate components,
 * containing rules with given names. If rule not found, and `ignoreInvalid`
 * not set - throws exception.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')()
 *             .enable(['sub', 'sup'])
 *             .disable('smartquotes');
 * ```
 **/
MarkdownIt.prototype.enable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.enable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.enable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to enable unknown rule(s): ' + missed);
  }

  return this;
};


/** chainable
 * MarkdownIt.disable(list, ignoreInvalid)
 * - list (String|Array): rule name or list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * The same as [[MarkdownIt.enable]], but turn specified rules off.
 **/
MarkdownIt.prototype.disable = function (list, ignoreInvalid) {
  var result = [];

  if (!Array.isArray(list)) { list = [ list ]; }

  [ 'core', 'block', 'inline' ].forEach(function (chain) {
    result = result.concat(this[chain].ruler.disable(list, true));
  }, this);

  result = result.concat(this.inline.ruler2.disable(list, true));

  var missed = list.filter(function (name) { return result.indexOf(name) < 0; });

  if (missed.length && !ignoreInvalid) {
    throw new Error('MarkdownIt. Failed to disable unknown rule(s): ' + missed);
  }
  return this;
};


/** chainable
 * MarkdownIt.use(plugin, params)
 *
 * Load specified plugin with given params into current parser instance.
 * It's just a sugar to call `plugin(md, params)` with curring.
 *
 * ##### Example
 *
 * ```javascript
 * var iterator = require('markdown-it-for-inline');
 * var md = require('markdown-it')()
 *             .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
 *               tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
 *             });
 * ```
 **/
MarkdownIt.prototype.use = function (plugin /*, params, ... */) {
  var args = [ this ].concat(Array.prototype.slice.call(arguments, 1));
  plugin.apply(plugin, args);
  return this;
};


/** internal
 * MarkdownIt.parse(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Parse input string and returns list of block tokens (special token type
 * "inline" will contain list of inline tokens). You should not call this
 * method directly, until you write custom renderer (for example, to produce
 * AST).
 *
 * `env` is used to pass data between "distributed" rules and return additional
 * metadata like reference info, needed for the renderer. It also can be used to
 * inject data in specific cases. Usually, you will be ok to pass `{}`,
 * and then pass updated object to renderer.
 **/
MarkdownIt.prototype.parse = function (src, env) {
  if (typeof src !== 'string') {
    throw new Error('Input data should be a String');
  }

  var state = new this.core.State(src, this, env);

  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.render(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Render markdown string into html. It does all magic for you :).
 *
 * `env` can be used to inject additional metadata (`{}` by default).
 * But you will not need it with high probability. See also comment
 * in [[MarkdownIt.parse]].
 **/
MarkdownIt.prototype.render = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parse(src, env), this.options, env);
};


/** internal
 * MarkdownIt.parseInline(src, env) -> Array
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * The same as [[MarkdownIt.parse]] but skip all block rules. It returns the
 * block tokens list with the single `inline` element, containing parsed inline
 * tokens in `children` property. Also updates `env` object.
 **/
MarkdownIt.prototype.parseInline = function (src, env) {
  var state = new this.core.State(src, this, env);

  state.inlineMode = true;
  this.core.process(state);

  return state.tokens;
};


/**
 * MarkdownIt.renderInline(src [, env]) -> String
 * - src (String): source string
 * - env (Object): environment sandbox
 *
 * Similar to [[MarkdownIt.render]] but for single paragraph content. Result
 * will NOT be wrapped into `<p>` tags.
 **/
MarkdownIt.prototype.renderInline = function (src, env) {
  env = env || {};

  return this.renderer.render(this.parseInline(src, env), this.options, env);
};


module.exports = MarkdownIt;

},{"./common/utils":56,"./helpers":57,"./parser_block":62,"./parser_core":63,"./parser_inline":64,"./presets/commonmark":65,"./presets/default":66,"./presets/zero":67,"./renderer":68,"linkify-it":37,"mdurl":108,"punycode":110}],62:[function(require,module,exports){
/** internal
 * class ParserBlock
 *
 * Block-level tokenizer.
 **/
'use strict';


var Ruler           = require('./ruler');


var _rules = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  [ 'table',      require('./rules_block/table'),      [ 'paragraph', 'reference' ] ],
  [ 'code',       require('./rules_block/code') ],
  [ 'fence',      require('./rules_block/fence'),      [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'blockquote', require('./rules_block/blockquote'), [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'hr',         require('./rules_block/hr'),         [ 'paragraph', 'reference', 'blockquote', 'list' ] ],
  [ 'list',       require('./rules_block/list'),       [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'reference',  require('./rules_block/reference') ],
  [ 'heading',    require('./rules_block/heading'),    [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'lheading',   require('./rules_block/lheading') ],
  [ 'html_block', require('./rules_block/html_block'), [ 'paragraph', 'reference', 'blockquote' ] ],
  [ 'paragraph',  require('./rules_block/paragraph') ]
];


/**
 * new ParserBlock()
 **/
function ParserBlock() {
  /**
   * ParserBlock#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of block rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], { alt: (_rules[i][2] || []).slice() });
  }
}


// Generate tokens for input range
//
ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      line = startLine,
      hasEmptyLines = false,
      maxNesting = state.md.options.maxNesting;

  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) { break; }

    // Termination condition for nested calls.
    // Nested calls currently used for blockquotes & lists
    if (state.sCount[line] < state.blkIndent) { break; }

    // If nesting level exceeded - skip tail to the end. That's not ordinary
    // situation and we should not care about content.
    if (state.level >= maxNesting) {
      state.line = endLine;
      break;
    }

    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.line`
    // - update `state.tokens`
    // - return true

    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) { break; }
    }

    // set state.tight if we had an empty line before current tag
    // i.e. latest empty line should not count
    state.tight = !hasEmptyLines;

    // paragraph might "eat" one newline after it in nested lists
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }

    line = state.line;

    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      state.line = line;
    }
  }
};


/**
 * ParserBlock.parse(str, md, env, outTokens)
 *
 * Process input string and push block tokens into `outTokens`
 **/
ParserBlock.prototype.parse = function (src, md, env, outTokens) {
  var state;

  if (!src) { return; }

  state = new this.State(src, md, env, outTokens);

  this.tokenize(state, state.line, state.lineMax);
};


ParserBlock.prototype.State = require('./rules_block/state_block');


module.exports = ParserBlock;

},{"./ruler":69,"./rules_block/blockquote":70,"./rules_block/code":71,"./rules_block/fence":72,"./rules_block/heading":73,"./rules_block/hr":74,"./rules_block/html_block":75,"./rules_block/lheading":76,"./rules_block/list":77,"./rules_block/paragraph":78,"./rules_block/reference":79,"./rules_block/state_block":80,"./rules_block/table":81}],63:[function(require,module,exports){
/** internal
 * class Core
 *
 * Top-level rules executor. Glues block/inline parsers and does intermediate
 * transformations.
 **/
'use strict';


var Ruler  = require('./ruler');


var _rules = [
  [ 'normalize',      require('./rules_core/normalize')      ],
  [ 'block',          require('./rules_core/block')          ],
  [ 'inline',         require('./rules_core/inline')         ],
  [ 'linkify',        require('./rules_core/linkify')        ],
  [ 'replacements',   require('./rules_core/replacements')   ],
  [ 'smartquotes',    require('./rules_core/smartquotes')    ]
];


/**
 * new Core()
 **/
function Core() {
  /**
   * Core#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of core rules.
   **/
  this.ruler = new Ruler();

  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
}


/**
 * Core.process(state)
 *
 * Executes core chain rules.
 **/
Core.prototype.process = function (state) {
  var i, l, rules;

  rules = this.ruler.getRules('');

  for (i = 0, l = rules.length; i < l; i++) {
    rules[i](state);
  }
};

Core.prototype.State = require('./rules_core/state_core');


module.exports = Core;

},{"./ruler":69,"./rules_core/block":82,"./rules_core/inline":83,"./rules_core/linkify":84,"./rules_core/normalize":85,"./rules_core/replacements":86,"./rules_core/smartquotes":87,"./rules_core/state_core":88}],64:[function(require,module,exports){
/** internal
 * class ParserInline
 *
 * Tokenizes paragraph content.
 **/
'use strict';


var Ruler           = require('./ruler');


////////////////////////////////////////////////////////////////////////////////
// Parser rules

var _rules = [
  [ 'text',            require('./rules_inline/text') ],
  [ 'newline',         require('./rules_inline/newline') ],
  [ 'escape',          require('./rules_inline/escape') ],
  [ 'backticks',       require('./rules_inline/backticks') ],
  [ 'strikethrough',   require('./rules_inline/strikethrough').tokenize ],
  [ 'emphasis',        require('./rules_inline/emphasis').tokenize ],
  [ 'link',            require('./rules_inline/link') ],
  [ 'image',           require('./rules_inline/image') ],
  [ 'autolink',        require('./rules_inline/autolink') ],
  [ 'html_inline',     require('./rules_inline/html_inline') ],
  [ 'entity',          require('./rules_inline/entity') ]
];

var _rules2 = [
  [ 'balance_pairs',   require('./rules_inline/balance_pairs') ],
  [ 'strikethrough',   require('./rules_inline/strikethrough').postProcess ],
  [ 'emphasis',        require('./rules_inline/emphasis').postProcess ],
  [ 'text_collapse',   require('./rules_inline/text_collapse') ]
];


/**
 * new ParserInline()
 **/
function ParserInline() {
  var i;

  /**
   * ParserInline#ruler -> Ruler
   *
   * [[Ruler]] instance. Keep configuration of inline rules.
   **/
  this.ruler = new Ruler();

  for (i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }

  /**
   * ParserInline#ruler2 -> Ruler
   *
   * [[Ruler]] instance. Second ruler used for post-processing
   * (e.g. in emphasis-like rules).
   **/
  this.ruler2 = new Ruler();

  for (i = 0; i < _rules2.length; i++) {
    this.ruler2.push(_rules2[i][0], _rules2[i][1]);
  }
}


// Skip single token by running all rules in validation mode;
// returns `true` if any rule reported success
//
ParserInline.prototype.skipToken = function (state) {
  var ok, i, pos = state.pos,
      rules = this.ruler.getRules(''),
      len = rules.length,
      maxNesting = state.md.options.maxNesting,
      cache = state.cache;


  if (typeof cache[pos] !== 'undefined') {
    state.pos = cache[pos];
    return;
  }

  if (state.level < maxNesting) {
    for (i = 0; i < len; i++) {
      // Increment state.level and decrement it later to limit recursion.
      // It's harmless to do here, because no tokens are created. But ideally,
      // we'd need a separate private state variable for this purpose.
      //
      state.level++;
      ok = rules[i](state, true);
      state.level--;

      if (ok) { break; }
    }
  } else {
    // Too much nesting, just skip until the end of the paragraph.
    //
    // NOTE: this will cause links to behave incorrectly in the following case,
    //       when an amount of `[` is exactly equal to `maxNesting + 1`:
    //
    //       [[[[[[[[[[[[[[[[[[[[[foo]()
    //
    // TODO: remove this workaround when CM standard will allow nested links
    //       (we can replace it by preventing links from being parsed in
    //       validation mode)
    //
    state.pos = state.posMax;
  }

  if (!ok) { state.pos++; }
  cache[pos] = state.pos;
};


// Generate tokens for input range
//
ParserInline.prototype.tokenize = function (state) {
  var ok, i,
      rules = this.ruler.getRules(''),
      len = rules.length,
      end = state.posMax,
      maxNesting = state.md.options.maxNesting;

  while (state.pos < end) {
    // Try all possible rules.
    // On success, rule should:
    //
    // - update `state.pos`
    // - update `state.tokens`
    // - return true

    if (state.level < maxNesting) {
      for (i = 0; i < len; i++) {
        ok = rules[i](state, false);
        if (ok) { break; }
      }
    }

    if (ok) {
      if (state.pos >= end) { break; }
      continue;
    }

    state.pending += state.src[state.pos++];
  }

  if (state.pending) {
    state.pushPending();
  }
};


/**
 * ParserInline.parse(str, md, env, outTokens)
 *
 * Process input string and push inline tokens into `outTokens`
 **/
ParserInline.prototype.parse = function (str, md, env, outTokens) {
  var i, rules, len;
  var state = new this.State(str, md, env, outTokens);

  this.tokenize(state);

  rules = this.ruler2.getRules('');
  len = rules.length;

  for (i = 0; i < len; i++) {
    rules[i](state);
  }
};


ParserInline.prototype.State = require('./rules_inline/state_inline');


module.exports = ParserInline;

},{"./ruler":69,"./rules_inline/autolink":89,"./rules_inline/backticks":90,"./rules_inline/balance_pairs":91,"./rules_inline/emphasis":92,"./rules_inline/entity":93,"./rules_inline/escape":94,"./rules_inline/html_inline":95,"./rules_inline/image":96,"./rules_inline/link":97,"./rules_inline/newline":98,"./rules_inline/state_inline":99,"./rules_inline/strikethrough":100,"./rules_inline/text":101,"./rules_inline/text_collapse":102}],65:[function(require,module,exports){
// Commonmark default options

'use strict';


module.exports = {
  options: {
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'blockquote',
        'code',
        'fence',
        'heading',
        'hr',
        'html_block',
        'lheading',
        'list',
        'reference',
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'autolink',
        'backticks',
        'emphasis',
        'entity',
        'escape',
        'html_inline',
        'image',
        'link',
        'newline',
        'text'
      ],
      rules2: [
        'balance_pairs',
        'emphasis',
        'text_collapse'
      ]
    }
  }
};

},{}],66:[function(require,module,exports){
// markdown-it default options

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   100            // Internal protection, recursion limit
  },

  components: {

    core: {},
    block: {},
    inline: {}
  }
};

},{}],67:[function(require,module,exports){
// "Zero" preset, with nothing enabled. Useful for manual configuring of simple
// modes. For example, to parse bold/italic only.

'use strict';


module.exports = {
  options: {
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      false,        // autoconvert URL-like texts to links

    // Enable some language-neutral replacements + quotes beautification
    typographer:  false,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '\u201c\u201d\u2018\u2019', /* “”‘’ */

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,

    maxNesting:   20            // Internal protection, recursion limit
  },

  components: {

    core: {
      rules: [
        'normalize',
        'block',
        'inline'
      ]
    },

    block: {
      rules: [
        'paragraph'
      ]
    },

    inline: {
      rules: [
        'text'
      ],
      rules2: [
        'balance_pairs',
        'text_collapse'
      ]
    }
  }
};

},{}],68:[function(require,module,exports){
/**
 * class Renderer
 *
 * Generates HTML from parsed token stream. Each instance has independent
 * copy of rules. Those can be rewritten with ease. Also, you can add new
 * rules if you create plugin and adds new token types.
 **/
'use strict';


var assign          = require('./common/utils').assign;
var unescapeAll     = require('./common/utils').unescapeAll;
var escapeHtml      = require('./common/utils').escapeHtml;


////////////////////////////////////////////////////////////////////////////////

var default_rules = {};


default_rules.code_inline = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<code' + slf.renderAttrs(token) + '>' +
          escapeHtml(tokens[idx].content) +
          '</code>';
};


default_rules.code_block = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  return  '<pre' + slf.renderAttrs(token) + '><code>' +
          escapeHtml(tokens[idx].content) +
          '</code></pre>\n';
};


default_rules.fence = function (tokens, idx, options, env, slf) {
  var token = tokens[idx],
      info = token.info ? unescapeAll(token.info).trim() : '',
      langName = '',
      highlighted, i, tmpAttrs, tmpToken;

  if (info) {
    langName = info.split(/\s+/g)[0];
  }

  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.indexOf('<pre') === 0) {
    return highlighted + '\n';
  }

  // If language exists, inject class gently, without modifying original token.
  // May be, one day we will add .clone() for token and simplify this part, but
  // now we prefer to keep things local.
  if (info) {
    i        = token.attrIndex('class');
    tmpAttrs = token.attrs ? token.attrs.slice() : [];

    if (i < 0) {
      tmpAttrs.push([ 'class', options.langPrefix + langName ]);
    } else {
      tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    }

    // Fake token just to render attributes
    tmpToken = {
      attrs: tmpAttrs
    };

    return  '<pre><code' + slf.renderAttrs(tmpToken) + '>'
          + highlighted
          + '</code></pre>\n';
  }


  return  '<pre><code' + slf.renderAttrs(token) + '>'
        + highlighted
        + '</code></pre>\n';
};


default_rules.image = function (tokens, idx, options, env, slf) {
  var token = tokens[idx];

  // "alt" attr MUST be set, even if empty. Because it's mandatory and
  // should be placed on proper position for tests.
  //
  // Replace content with actual value

  token.attrs[token.attrIndex('alt')][1] =
    slf.renderInlineAsText(token.children, options, env);

  return slf.renderToken(tokens, idx, options);
};


default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};


default_rules.text = function (tokens, idx /*, options, env */) {
  return escapeHtml(tokens[idx].content);
};


default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};
default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};


/**
 * new Renderer()
 *
 * Creates new [[Renderer]] instance and fill [[Renderer#rules]] with defaults.
 **/
function Renderer() {

  /**
   * Renderer#rules -> Object
   *
   * Contains render rules for tokens. Can be updated and extended.
   *
   * ##### Example
   *
   * ```javascript
   * var md = require('markdown-it')();
   *
   * md.renderer.rules.strong_open  = function () { return '<b>'; };
   * md.renderer.rules.strong_close = function () { return '</b>'; };
   *
   * var result = md.renderInline(...);
   * ```
   *
   * Each rule is called as independent static function with fixed signature:
   *
   * ```javascript
   * function my_token_render(tokens, idx, options, env, renderer) {
   *   // ...
   *   return renderedHTML;
   * }
   * ```
   *
   * See [source code](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)
   * for more details and examples.
   **/
  this.rules = assign({}, default_rules);
}


/**
 * Renderer.renderAttrs(token) -> String
 *
 * Render token attributes to string.
 **/
Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};


/**
 * Renderer.renderToken(tokens, idx, options) -> String
 * - tokens (Array): list of tokens
 * - idx (Numbed): token index to render
 * - options (Object): params of parser instance
 *
 * Default token renderer. Can be overriden by custom function
 * in [[Renderer#rules]].
 **/
Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
  var nextToken,
      result = '',
      needLf = false,
      token = tokens[idx];

  // Tight list paragraphs
  if (token.hidden) {
    return '';
  }

  // Insert a newline between hidden paragraph and subsequent opening
  // block-level tag.
  //
  // For example, here we should insert a newline before blockquote:
  //  - a
  //    >
  //
  if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
    result += '\n';
  }

  // Add token name, e.g. `<img`
  result += (token.nesting === -1 ? '</' : '<') + token.tag;

  // Encode attributes, e.g. `<img src="foo"`
  result += this.renderAttrs(token);

  // Add a slash for self-closing tags, e.g. `<img src="foo" /`
  if (token.nesting === 0 && options.xhtmlOut) {
    result += ' /';
  }

  // Check if we need to add a newline after this tag
  if (token.block) {
    needLf = true;

    if (token.nesting === 1) {
      if (idx + 1 < tokens.length) {
        nextToken = tokens[idx + 1];

        if (nextToken.type === 'inline' || nextToken.hidden) {
          // Block-level tag containing an inline tag.
          //
          needLf = false;

        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
          // Opening tag + closing tag of the same type. E.g. `<li></li>`.
          //
          needLf = false;
        }
      }
    }
  }

  result += needLf ? '>\n' : '>';

  return result;
};


/**
 * Renderer.renderInline(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * The same as [[Renderer.render]], but for single token of `inline` type.
 **/
Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options);
    }
  }

  return result;
};


/** internal
 * Renderer.renderInlineAsText(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Special kludge for image `alt` attributes to conform CommonMark spec.
 * Don't try to use it! Spec requires to show `alt` content with stripped markup,
 * instead of simple escaping.
 **/
Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
  var result = '';

  for (var i = 0, len = tokens.length; i < len; i++) {
    if (tokens[i].type === 'text') {
      result += tokens[i].content;
    } else if (tokens[i].type === 'image') {
      result += this.renderInlineAsText(tokens[i].children, options, env);
    }
  }

  return result;
};


/**
 * Renderer.render(tokens, options, env) -> String
 * - tokens (Array): list on block tokens to renter
 * - options (Object): params of parser instance
 * - env (Object): additional data from parsed input (references, for example)
 *
 * Takes token stream and generates HTML. Probably, you will never need to call
 * this method directly.
 **/
Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    } else {
      result += this.renderToken(tokens, i, options, env);
    }
  }

  return result;
};

module.exports = Renderer;

},{"./common/utils":56}],69:[function(require,module,exports){
/**
 * class Ruler
 *
 * Helper class, used by [[MarkdownIt#core]], [[MarkdownIt#block]] and
 * [[MarkdownIt#inline]] to manage sequences of functions (rules):
 *
 * - keep rules in defined order
 * - assign the name to each rule
 * - enable/disable rules
 * - add/replace rules
 * - allow assign rules to additional named chains (in the same)
 * - cacheing lists of active rules
 *
 * You will not need use this class directly until write plugins. For simple
 * rules control use [[MarkdownIt.disable]], [[MarkdownIt.enable]] and
 * [[MarkdownIt.use]].
 **/
'use strict';


/**
 * new Ruler()
 **/
function Ruler() {
  // List of added rules. Each element is:
  //
  // {
  //   name: XXX,
  //   enabled: Boolean,
  //   fn: Function(),
  //   alt: [ name2, name3 ]
  // }
  //
  this.__rules__ = [];

  // Cached rule chains.
  //
  // First level - chain name, '' for default.
  // Second level - diginal anchor for fast filtering by charcodes.
  //
  this.__cache__ = null;
}

////////////////////////////////////////////////////////////////////////////////
// Helper methods, should not be used directly


// Find rule index by name
//
Ruler.prototype.__find__ = function (name) {
  for (var i = 0; i < this.__rules__.length; i++) {
    if (this.__rules__[i].name === name) {
      return i;
    }
  }
  return -1;
};


// Build rules lookup cache
//
Ruler.prototype.__compile__ = function () {
  var self = this;
  var chains = [ '' ];

  // collect unique names
  self.__rules__.forEach(function (rule) {
    if (!rule.enabled) { return; }

    rule.alt.forEach(function (altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });

  self.__cache__ = {};

  chains.forEach(function (chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function (rule) {
      if (!rule.enabled) { return; }

      if (chain && rule.alt.indexOf(chain) < 0) { return; }

      self.__cache__[chain].push(rule.fn);
    });
  });
};


/**
 * Ruler.at(name, fn [, options])
 * - name (String): rule name to replace.
 * - fn (Function): new rule function.
 * - options (Object): new rule options (not mandatory).
 *
 * Replace rule by name with new function & options. Throws error if name not
 * found.
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * Replace existing typographer replacement rule with new one:
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.at('replacements', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.at = function (name, fn, options) {
  var index = this.__find__(name);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + name); }

  this.__rules__[index].fn = fn;
  this.__rules__[index].alt = opt.alt || [];
  this.__cache__ = null;
};


/**
 * Ruler.before(beforeName, ruleName, fn [, options])
 * - beforeName (String): new rule will be added before this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain before one with given name. See also
 * [[Ruler.after]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.block.ruler.before('paragraph', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
  var index = this.__find__(beforeName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + beforeName); }

  this.__rules__.splice(index, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.after(afterName, ruleName, fn [, options])
 * - afterName (String): new rule will be added after this one.
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Add new rule to chain after one with given name. See also
 * [[Ruler.before]], [[Ruler.push]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.inline.ruler.after('text', 'my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.after = function (afterName, ruleName, fn, options) {
  var index = this.__find__(afterName);
  var opt = options || {};

  if (index === -1) { throw new Error('Parser rule not found: ' + afterName); }

  this.__rules__.splice(index + 1, 0, {
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};

/**
 * Ruler.push(ruleName, fn [, options])
 * - ruleName (String): name of added rule.
 * - fn (Function): rule function.
 * - options (Object): rule options (not mandatory).
 *
 * Push new rule to the end of chain. See also
 * [[Ruler.before]], [[Ruler.after]].
 *
 * ##### Options:
 *
 * - __alt__ - array with names of "alternate" chains.
 *
 * ##### Example
 *
 * ```javascript
 * var md = require('markdown-it')();
 *
 * md.core.ruler.push('my_rule', function replace(state) {
 *   //...
 * });
 * ```
 **/
Ruler.prototype.push = function (ruleName, fn, options) {
  var opt = options || {};

  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn: fn,
    alt: opt.alt || []
  });

  this.__cache__ = null;
};


/**
 * Ruler.enable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to enable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.disable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.enable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and enable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = true;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.enableOnly(list [, ignoreInvalid])
 * - list (String|Array): list of rule names to enable (whitelist).
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Enable rules with given names, and disable everything else. If any rule name
 * not found - throw Error. Errors can be disabled by second param.
 *
 * See also [[Ruler.disable]], [[Ruler.enable]].
 **/
Ruler.prototype.enableOnly = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  this.__rules__.forEach(function (rule) { rule.enabled = false; });

  this.enable(list, ignoreInvalid);
};


/**
 * Ruler.disable(list [, ignoreInvalid]) -> Array
 * - list (String|Array): list of rule names to disable.
 * - ignoreInvalid (Boolean): set `true` to ignore errors when rule not found.
 *
 * Disable rules with given names. If any rule name not found - throw Error.
 * Errors can be disabled by second param.
 *
 * Returns list of found rule names (if no exception happened).
 *
 * See also [[Ruler.enable]], [[Ruler.enableOnly]].
 **/
Ruler.prototype.disable = function (list, ignoreInvalid) {
  if (!Array.isArray(list)) { list = [ list ]; }

  var result = [];

  // Search by name and disable
  list.forEach(function (name) {
    var idx = this.__find__(name);

    if (idx < 0) {
      if (ignoreInvalid) { return; }
      throw new Error('Rules manager: invalid rule name ' + name);
    }
    this.__rules__[idx].enabled = false;
    result.push(name);
  }, this);

  this.__cache__ = null;
  return result;
};


/**
 * Ruler.getRules(chainName) -> Array
 *
 * Return array of active functions (rules) for given chain name. It analyzes
 * rules configuration, compiles caches if not exists and returns result.
 *
 * Default chain name is `''` (empty string). It can't be skipped. That's
 * done intentionally, to keep signature monomorphic for high speed.
 **/
Ruler.prototype.getRules = function (chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }

  // Chain can be empty, if rules disabled. But we still have to return Array.
  return this.__cache__[chainName] || [];
};

module.exports = Ruler;

},{}],70:[function(require,module,exports){
// Block quotes

'use strict';

var isSpace = require('../common/utils').isSpace;


module.exports = function blockquote(state, startLine, endLine, silent) {
  var adjustTab,
      ch,
      i,
      initial,
      l,
      lastLineEmpty,
      lines,
      nextLine,
      offset,
      oldBMarks,
      oldBSCount,
      oldIndent,
      oldParentType,
      oldSCount,
      oldTShift,
      spaceAfterMarker,
      terminate,
      terminatorRules,
      token,
      wasOutdented,
      oldLineMax = state.lineMax,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // check the block quote marker
  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }

  // we know that it's going to be a valid blockquote,
  // so no point trying to find the end of it in silent mode
  if (silent) { return true; }

  // skip spaces after ">" and re-calculate offset
  initial = offset = state.sCount[startLine] + pos - (state.bMarks[startLine] + state.tShift[startLine]);

  // skip one optional space after '>'
  if (state.src.charCodeAt(pos) === 0x20 /* space */) {
    // ' >   test '
    //     ^ -- position start of line here:
    pos++;
    initial++;
    offset++;
    adjustTab = false;
    spaceAfterMarker = true;
  } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
    spaceAfterMarker = true;

    if ((state.bsCount[startLine] + offset) % 4 === 3) {
      // '  >\t  test '
      //       ^ -- position start of line here (tab has width===1)
      pos++;
      initial++;
      offset++;
      adjustTab = false;
    } else {
      // ' >\t  test '
      //    ^ -- position start of line here + shift bsCount slightly
      //         to make extra space appear
      adjustTab = true;
    }
  } else {
    spaceAfterMarker = false;
  }

  oldBMarks = [ state.bMarks[startLine] ];
  state.bMarks[startLine] = pos;

  while (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (isSpace(ch)) {
      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
      } else {
        offset++;
      }
    } else {
      break;
    }

    pos++;
  }

  oldBSCount = [ state.bsCount[startLine] ];
  state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);

  lastLineEmpty = pos >= max;

  oldSCount = [ state.sCount[startLine] ];
  state.sCount[startLine] = offset - initial;

  oldTShift = [ state.tShift[startLine] ];
  state.tShift[startLine] = pos - state.bMarks[startLine];

  terminatorRules = state.md.block.ruler.getRules('blockquote');

  oldParentType = state.parentType;
  state.parentType = 'blockquote';
  wasOutdented = false;

  // Search the end of the block
  //
  // Block ends with either:
  //  1. an empty line outside:
  //     ```
  //     > test
  //
  //     ```
  //  2. an empty line inside:
  //     ```
  //     >
  //     test
  //     ```
  //  3. another tag:
  //     ```
  //     > test
  //      - - -
  //     ```
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    // check if it's outdented, i.e. it's inside list item and indented
    // less than said list item:
    //
    // ```
    // 1. anything
    //    > current blockquote
    // 2. checking this line
    // ```
    if (state.sCount[nextLine] < state.blkIndent) wasOutdented = true;

    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos >= max) {
      // Case 1: line is not inside the blockquote, and this line is empty.
      break;
    }

    if (state.src.charCodeAt(pos++) === 0x3E/* > */ && !wasOutdented) {
      // This line is inside the blockquote.

      // skip spaces after ">" and re-calculate offset
      initial = offset = state.sCount[nextLine] + pos - (state.bMarks[nextLine] + state.tShift[nextLine]);

      // skip one optional space after '>'
      if (state.src.charCodeAt(pos) === 0x20 /* space */) {
        // ' >   test '
        //     ^ -- position start of line here:
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 0x09 /* tab */) {
        spaceAfterMarker = true;

        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
          // '  >\t  test '
          //       ^ -- position start of line here (tab has width===1)
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          // ' >\t  test '
          //    ^ -- position start of line here + shift bsCount slightly
          //         to make extra space appear
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      oldBMarks.push(state.bMarks[nextLine]);
      state.bMarks[nextLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 0x09) {
            offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      lastLineEmpty = pos >= max;

      oldBSCount.push(state.bsCount[nextLine]);
      state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);

      oldSCount.push(state.sCount[nextLine]);
      state.sCount[nextLine] = offset - initial;

      oldTShift.push(state.tShift[nextLine]);
      state.tShift[nextLine] = pos - state.bMarks[nextLine];
      continue;
    }

    // Case 2: line is not inside the blockquote, and the last line was empty.
    if (lastLineEmpty) { break; }

    // Case 3: another tag found.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }

    if (terminate) {
      // Quirk to enforce "hard termination mode" for paragraphs;
      // normally if you call `tokenize(state, startLine, nextLine)`,
      // paragraphs will look below nextLine for paragraph continuation,
      // but if blockquote is terminated by another tag, they shouldn't
      state.lineMax = nextLine;

      if (state.blkIndent !== 0) {
        // state.blkIndent was non-zero, we now set it to zero,
        // so we need to re-calculate all offsets to appear as
        // if indent wasn't changed
        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] -= state.blkIndent;
      }

      break;
    }

    oldBMarks.push(state.bMarks[nextLine]);
    oldBSCount.push(state.bsCount[nextLine]);
    oldTShift.push(state.tShift[nextLine]);
    oldSCount.push(state.sCount[nextLine]);

    // A negative indentation means that this is a paragraph continuation
    //
    state.sCount[nextLine] = -1;
  }

  oldIndent = state.blkIndent;
  state.blkIndent = 0;

  token        = state.push('blockquote_open', 'blockquote', 1);
  token.markup = '>';
  token.map    = lines = [ startLine, 0 ];

  state.md.block.tokenize(state, startLine, nextLine);

  token        = state.push('blockquote_close', 'blockquote', -1);
  token.markup = '>';

  state.lineMax = oldLineMax;
  state.parentType = oldParentType;
  lines[1] = state.line;

  // Restore original tShift; this might not be necessary since the parser
  // has already been here, but just to make sure we can do that.
  for (i = 0; i < oldTShift.length; i++) {
    state.bMarks[i + startLine] = oldBMarks[i];
    state.tShift[i + startLine] = oldTShift[i];
    state.sCount[i + startLine] = oldSCount[i];
    state.bsCount[i + startLine] = oldBSCount[i];
  }
  state.blkIndent = oldIndent;

  return true;
};

},{"../common/utils":56}],71:[function(require,module,exports){
// Code block (4 spaces padded)

'use strict';


module.exports = function code(state, startLine, endLine/*, silent*/) {
  var nextLine, last, token;

  if (state.sCount[startLine] - state.blkIndent < 4) { return false; }

  last = nextLine = startLine + 1;

  while (nextLine < endLine) {
    if (state.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }

  state.line = last;

  token         = state.push('code_block', 'code', 0);
  token.content = state.getLines(startLine, last, 4 + state.blkIndent, true);
  token.map     = [ startLine, state.line ];

  return true;
};

},{}],72:[function(require,module,exports){
// fences (``` lang, ~~~ lang)

'use strict';


module.exports = function fence(state, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, token, markup,
      haveEndMarker = false,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (pos + 3 > max) { return false; }

  marker = state.src.charCodeAt(pos);

  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
    return false;
  }

  // scan marker length
  mem = pos;
  pos = state.skipChars(pos, marker);

  len = pos - mem;

  if (len < 3) { return false; }

  markup = state.src.slice(mem, pos);
  params = state.src.slice(pos, max);

  if (params.indexOf(String.fromCharCode(marker)) >= 0) { return false; }

  // Since start is found, we can report success here in validation mode
  if (silent) { return true; }

  // search end of block
  nextLine = startLine;

  for (;;) {
    nextLine++;
    if (nextLine >= endLine) {
      // unclosed block should be autoclosed by end of document.
      // also block seems to be autoclosed by end of parent
      break;
    }

    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];

    if (pos < max && state.sCount[nextLine] < state.blkIndent) {
      // non-empty line with negative indent should stop the list:
      // - ```
      //  test
      break;
    }

    if (state.src.charCodeAt(pos) !== marker) { continue; }

    if (state.sCount[nextLine] - state.blkIndent >= 4) {
      // closing fence should be indented less than 4 spaces
      continue;
    }

    pos = state.skipChars(pos, marker);

    // closing code fence must be at least as long as the opening one
    if (pos - mem < len) { continue; }

    // make sure tail has spaces only
    pos = state.skipSpaces(pos);

    if (pos < max) { continue; }

    haveEndMarker = true;
    // found!
    break;
  }

  // If a fence has heading spaces, they should be removed from its inner block
  len = state.sCount[startLine];

  state.line = nextLine + (haveEndMarker ? 1 : 0);

  token         = state.push('fence', 'code', 0);
  token.info    = params;
  token.content = state.getLines(startLine + 1, nextLine, len, true);
  token.markup  = markup;
  token.map     = [ startLine, state.line ];

  return true;
};

},{}],73:[function(require,module,exports){
// heading (#, ##, ...)

'use strict';

var isSpace = require('../common/utils').isSpace;


module.exports = function heading(state, startLine, endLine, silent) {
  var ch, level, tmp, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  ch  = state.src.charCodeAt(pos);

  if (ch !== 0x23/* # */ || pos >= max) { return false; }

  // count heading level
  level = 1;
  ch = state.src.charCodeAt(++pos);
  while (ch === 0x23/* # */ && pos < max && level <= 6) {
    level++;
    ch = state.src.charCodeAt(++pos);
  }

  if (level > 6 || (pos < max && !isSpace(ch))) { return false; }

  if (silent) { return true; }

  // Let's cut tails like '    ###  ' from the end of string

  max = state.skipSpacesBack(max, pos);
  tmp = state.skipCharsBack(max, 0x23, pos); // #
  if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
    max = tmp;
  }

  state.line = startLine + 1;

  token        = state.push('heading_open', 'h' + String(level), 1);
  token.markup = '########'.slice(0, level);
  token.map    = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = state.src.slice(pos, max).trim();
  token.map      = [ startLine, state.line ];
  token.children = [];

  token        = state.push('heading_close', 'h' + String(level), -1);
  token.markup = '########'.slice(0, level);

  return true;
};

},{"../common/utils":56}],74:[function(require,module,exports){
// Horizontal rule

'use strict';

var isSpace = require('../common/utils').isSpace;


module.exports = function hr(state, startLine, endLine, silent) {
  var marker, cnt, ch, token,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  marker = state.src.charCodeAt(pos++);

  // Check hr marker
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x5F/* _ */) {
    return false;
  }

  // markers can be mixed with spaces, but there should be at least 3 of them

  cnt = 1;
  while (pos < max) {
    ch = state.src.charCodeAt(pos++);
    if (ch !== marker && !isSpace(ch)) { return false; }
    if (ch === marker) { cnt++; }
  }

  if (cnt < 3) { return false; }

  if (silent) { return true; }

  state.line = startLine + 1;

  token        = state.push('hr', 'hr', 0);
  token.map    = [ startLine, state.line ];
  token.markup = Array(cnt + 1).join(String.fromCharCode(marker));

  return true;
};

},{"../common/utils":56}],75:[function(require,module,exports){
// HTML block

'use strict';


var block_names = require('../common/html_blocks');
var HTML_OPEN_CLOSE_TAG_RE = require('../common/html_re').HTML_OPEN_CLOSE_TAG_RE;

// An array of opening and corresponding closing sequences for html tags,
// last argument defines whether it can terminate a paragraph or not
//
var HTML_SEQUENCES = [
  [ /^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true ],
  [ /^<!--/,        /-->/,   true ],
  [ /^<\?/,         /\?>/,   true ],
  [ /^<![A-Z]/,     />/,     true ],
  [ /^<!\[CDATA\[/, /\]\]>/, true ],
  [ new RegExp('^</?(' + block_names.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true ],
  [ new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + '\\s*$'),  /^$/, false ]
];


module.exports = function html_block(state, startLine, endLine, silent) {
  var i, nextLine, token, lineText,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine];

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (!state.md.options.html) { return false; }

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  lineText = state.src.slice(pos, max);

  for (i = 0; i < HTML_SEQUENCES.length; i++) {
    if (HTML_SEQUENCES[i][0].test(lineText)) { break; }
  }

  if (i === HTML_SEQUENCES.length) { return false; }

  if (silent) {
    // true if this sequence can be a terminator, false otherwise
    return HTML_SEQUENCES[i][2];
  }

  nextLine = startLine + 1;

  // If we are here - we detected HTML block.
  // Let's roll down till block end.
  if (!HTML_SEQUENCES[i][1].test(lineText)) {
    for (; nextLine < endLine; nextLine++) {
      if (state.sCount[nextLine] < state.blkIndent) { break; }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      lineText = state.src.slice(pos, max);

      if (HTML_SEQUENCES[i][1].test(lineText)) {
        if (lineText.length !== 0) { nextLine++; }
        break;
      }
    }
  }

  state.line = nextLine;

  token         = state.push('html_block', '', 0);
  token.map     = [ startLine, nextLine ];
  token.content = state.getLines(startLine, nextLine, state.blkIndent, true);

  return true;
};

},{"../common/html_blocks":54,"../common/html_re":55}],76:[function(require,module,exports){
// lheading (---, ===)

'use strict';


module.exports = function lheading(state, startLine, endLine/*, silent*/) {
  var content, terminate, i, l, token, pos, max, level, marker,
      nextLine = startLine + 1, oldParentType,
      terminatorRules = state.md.block.ruler.getRules('paragraph');

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  oldParentType = state.parentType;
  state.parentType = 'paragraph'; // use paragraph to match terminatorRules

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    //
    // Check for underline in setext header
    //
    if (state.sCount[nextLine] >= state.blkIndent) {
      pos = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (pos < max) {
        marker = state.src.charCodeAt(pos);

        if (marker === 0x2D/* - */ || marker === 0x3D/* = */) {
          pos = state.skipChars(pos, marker);
          pos = state.skipSpaces(pos);

          if (pos >= max) {
            level = (marker === 0x3D/* = */ ? 1 : 2);
            break;
          }
        }
      }
    }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  if (!level) {
    // Didn't find valid underline
    return false;
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine + 1;

  token          = state.push('heading_open', 'h' + String(level), 1);
  token.markup   = String.fromCharCode(marker);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line - 1 ];
  token.children = [];

  token          = state.push('heading_close', 'h' + String(level), -1);
  token.markup   = String.fromCharCode(marker);

  state.parentType = oldParentType;

  return true;
};

},{}],77:[function(require,module,exports){
// Lists

'use strict';

var isSpace = require('../common/utils').isSpace;


// Search `[-+*][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipBulletListMarker(state, startLine) {
  var marker, pos, max, ch;

  pos = state.bMarks[startLine] + state.tShift[startLine];
  max = state.eMarks[startLine];

  marker = state.src.charCodeAt(pos++);
  // Check bullet
  if (marker !== 0x2A/* * */ &&
      marker !== 0x2D/* - */ &&
      marker !== 0x2B/* + */) {
    return -1;
  }

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " -test " - is not a list item
      return -1;
    }
  }

  return pos;
}

// Search `\d+[.)][\n ]`, returns next pos after marker on success
// or -1 on fail.
function skipOrderedListMarker(state, startLine) {
  var ch,
      start = state.bMarks[startLine] + state.tShift[startLine],
      pos = start,
      max = state.eMarks[startLine];

  // List marker should have at least 2 chars (digit + dot)
  if (pos + 1 >= max) { return -1; }

  ch = state.src.charCodeAt(pos++);

  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }

  for (;;) {
    // EOL -> fail
    if (pos >= max) { return -1; }

    ch = state.src.charCodeAt(pos++);

    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {

      // List marker should have no more than 9 digits
      // (prevents integer overflow in browsers)
      if (pos - start >= 10) { return -1; }

      continue;
    }

    // found valid marker
    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
      break;
    }

    return -1;
  }


  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (!isSpace(ch)) {
      // " 1.test " - is not a list item
      return -1;
    }
  }
  return pos;
}

function markTightParagraphs(state, idx) {
  var i, l,
      level = state.level + 2;

  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
      state.tokens[i + 2].hidden = true;
      state.tokens[i].hidden = true;
      i += 2;
    }
  }
}


module.exports = function list(state, startLine, endLine, silent) {
  var ch,
      contentStart,
      i,
      indent,
      indentAfterMarker,
      initial,
      isOrdered,
      itemLines,
      l,
      listLines,
      listTokIdx,
      markerCharCode,
      markerValue,
      max,
      nextLine,
      offset,
      oldIndent,
      oldLIndent,
      oldParentType,
      oldTShift,
      oldTight,
      pos,
      posAfterMarker,
      prevEmptyEnd,
      start,
      terminate,
      terminatorRules,
      token,
      isTerminatingParagraph = false,
      tight = true;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  // limit conditions when list can interrupt
  // a paragraph (validation mode only)
  if (silent && state.parentType === 'paragraph') {
    // Next list item should still terminate previous list item;
    //
    // This code can fail if plugins use blkIndent as well as lists,
    // but I hope the spec gets fixed long before that happens.
    //
    if (state.tShift[startLine] >= state.blkIndent) {
      isTerminatingParagraph = true;
    }
  }

  // Detect list type and position after marker
  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
    isOrdered = true;
    start = state.bMarks[startLine] + state.tShift[startLine];
    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));

    // If we're starting a new ordered list right after
    // a paragraph, it should start with 1.
    if (isTerminatingParagraph && markerValue !== 1) return false;

  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
    isOrdered = false;

  } else {
    return false;
  }

  // If we're starting a new unordered list right after
  // a paragraph, first line should not be empty.
  if (isTerminatingParagraph) {
    if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
  }

  // We should terminate list on style change. Remember first one to compare.
  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

  // For validation mode we can terminate immediately
  if (silent) { return true; }

  // Start list
  listTokIdx = state.tokens.length;

  if (isOrdered) {
    token       = state.push('ordered_list_open', 'ol', 1);
    if (markerValue !== 1) {
      token.attrs = [ [ 'start', markerValue ] ];
    }

  } else {
    token       = state.push('bullet_list_open', 'ul', 1);
  }

  token.map    = listLines = [ startLine, 0 ];
  token.markup = String.fromCharCode(markerCharCode);

  //
  // Iterate list items
  //

  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state.md.block.ruler.getRules('list');

  oldParentType = state.parentType;
  state.parentType = 'list';

  while (nextLine < endLine) {
    pos = posAfterMarker;
    max = state.eMarks[nextLine];

    initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

    while (pos < max) {
      ch = state.src.charCodeAt(pos);

      if (ch === 0x09) {
        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
      } else if (ch === 0x20) {
        offset++;
      } else {
        break;
      }

      pos++;
    }

    contentStart = pos;

    if (contentStart >= max) {
      // trimming space in "-    \n  3" case, indent is 1 here
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = offset - initial;
    }

    // If we have more than 4 spaces, the indent is 1
    // (the rest is just indented code block)
    if (indentAfterMarker > 4) { indentAfterMarker = 1; }

    // "  -  test"
    //  ^^^^^ - calculating total length of this thing
    indent = initial + indentAfterMarker;

    // Run subparser & write tokens
    token        = state.push('list_item_open', 'li', 1);
    token.markup = String.fromCharCode(markerCharCode);
    token.map    = itemLines = [ startLine, 0 ];

    oldIndent = state.blkIndent;
    oldTight = state.tight;
    oldTShift = state.tShift[startLine];
    oldLIndent = state.sCount[startLine];
    state.blkIndent = indent;
    state.tight = true;
    state.tShift[startLine] = contentStart - state.bMarks[startLine];
    state.sCount[startLine] = offset;

    if (contentStart >= max && state.isEmpty(startLine + 1)) {
      // workaround for this case
      // (list item is empty, list terminates before "foo"):
      // ~~~~~~~~
      //   -
      //
      //     foo
      // ~~~~~~~~
      state.line = Math.min(state.line + 2, endLine);
    } else {
      state.md.block.tokenize(state, startLine, endLine, true);
    }

    // If any of list item is tight, mark list as tight
    if (!state.tight || prevEmptyEnd) {
      tight = false;
    }
    // Item become loose if finish with empty line,
    // but we should filter last element, because it means list finish
    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);

    state.blkIndent = oldIndent;
    state.tShift[startLine] = oldTShift;
    state.sCount[startLine] = oldLIndent;
    state.tight = oldTight;

    token        = state.push('list_item_close', 'li', -1);
    token.markup = String.fromCharCode(markerCharCode);

    nextLine = startLine = state.line;
    itemLines[1] = nextLine;
    contentStart = state.bMarks[startLine];

    if (nextLine >= endLine) { break; }

    //
    // Try to check if list is terminated or continued.
    //
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    // fail if terminating block found
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }

    // fail if list has another type
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    } else {
      posAfterMarker = skipBulletListMarker(state, nextLine);
      if (posAfterMarker < 0) { break; }
    }

    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
  }

  // Finalize list
  if (isOrdered) {
    token = state.push('ordered_list_close', 'ol', -1);
  } else {
    token = state.push('bullet_list_close', 'ul', -1);
  }
  token.markup = String.fromCharCode(markerCharCode);

  listLines[1] = nextLine;
  state.line = nextLine;

  state.parentType = oldParentType;

  // mark paragraphs tight if needed
  if (tight) {
    markTightParagraphs(state, listTokIdx);
  }

  return true;
};

},{"../common/utils":56}],78:[function(require,module,exports){
// Paragraph

'use strict';


module.exports = function paragraph(state, startLine/*, endLine*/) {
  var content, terminate, i, l, token, oldParentType,
      nextLine = startLine + 1,
      terminatorRules = state.md.block.ruler.getRules('paragraph'),
      endLine = state.lineMax;

  oldParentType = state.parentType;
  state.parentType = 'paragraph';

  // jump line-by-line until empty one or EOF
  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();

  state.line = nextLine;

  token          = state.push('paragraph_open', 'p', 1);
  token.map      = [ startLine, state.line ];

  token          = state.push('inline', '', 0);
  token.content  = content;
  token.map      = [ startLine, state.line ];
  token.children = [];

  token          = state.push('paragraph_close', 'p', -1);

  state.parentType = oldParentType;

  return true;
};

},{}],79:[function(require,module,exports){
'use strict';


var normalizeReference   = require('../common/utils').normalizeReference;
var isSpace              = require('../common/utils').isSpace;


module.exports = function reference(state, startLine, _endLine, silent) {
  var ch,
      destEndPos,
      destEndLineNo,
      endLine,
      href,
      i,
      l,
      label,
      labelEnd,
      oldParentType,
      res,
      start,
      str,
      terminate,
      terminatorRules,
      title,
      lines = 0,
      pos = state.bMarks[startLine] + state.tShift[startLine],
      max = state.eMarks[startLine],
      nextLine = startLine + 1;

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }

  if (state.src.charCodeAt(pos) !== 0x5B/* [ */) { return false; }

  // Simple check to quickly interrupt scan on [link](url) at the start of line.
  // Can be useful on practice: https://github.com/markdown-it/markdown-it/issues/54
  while (++pos < max) {
    if (state.src.charCodeAt(pos) === 0x5D /* ] */ &&
        state.src.charCodeAt(pos - 1) !== 0x5C/* \ */) {
      if (pos + 1 === max) { return false; }
      if (state.src.charCodeAt(pos + 1) !== 0x3A/* : */) { return false; }
      break;
    }
  }

  endLine = state.lineMax;

  // jump line-by-line until empty one or EOF
  terminatorRules = state.md.block.ruler.getRules('reference');

  oldParentType = state.parentType;
  state.parentType = 'reference';

  for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
    // this would be a code block normally, but after paragraph
    // it's considered a lazy continuation regardless of what's there
    if (state.sCount[nextLine] - state.blkIndent > 3) { continue; }

    // quirk for blockquotes, this line should already be checked by that rule
    if (state.sCount[nextLine] < 0) { continue; }

    // Some tags can terminate paragraph without empty line.
    terminate = false;
    for (i = 0, l = terminatorRules.length; i < l; i++) {
      if (terminatorRules[i](state, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) { break; }
  }

  str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
  max = str.length;

  for (pos = 1; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x5B /* [ */) {
      return false;
    } else if (ch === 0x5D /* ] */) {
      labelEnd = pos;
      break;
    } else if (ch === 0x0A /* \n */) {
      lines++;
    } else if (ch === 0x5C /* \ */) {
      pos++;
      if (pos < max && str.charCodeAt(pos) === 0x0A) {
        lines++;
      }
    }
  }

  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return false; }

  // [label]:   destination   'title'
  //         ^^^ skip optional whitespace here
  for (pos = labelEnd + 2; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //            ^^^^^^^^^^^ parse this
  res = state.md.helpers.parseLinkDestination(str, pos, max);
  if (!res.ok) { return false; }

  href = state.md.normalizeLink(res.str);
  if (!state.md.validateLink(href)) { return false; }

  pos = res.pos;
  lines += res.lines;

  // save cursor state, we could require to rollback later
  destEndPos = pos;
  destEndLineNo = lines;

  // [label]:   destination   'title'
  //                       ^^^ skipping those spaces
  start = pos;
  for (; pos < max; pos++) {
    ch = str.charCodeAt(pos);
    if (ch === 0x0A) {
      lines++;
    } else if (isSpace(ch)) {
      /*eslint no-empty:0*/
    } else {
      break;
    }
  }

  // [label]:   destination   'title'
  //                          ^^^^^^^ parse this
  res = state.md.helpers.parseLinkTitle(str, pos, max);
  if (pos < max && start !== pos && res.ok) {
    title = res.str;
    pos = res.pos;
    lines += res.lines;
  } else {
    title = '';
    pos = destEndPos;
    lines = destEndLineNo;
  }

  // skip trailing spaces until the rest of the line
  while (pos < max) {
    ch = str.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
    pos++;
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    if (title) {
      // garbage at the end of the line after title,
      // but it could still be a valid reference if we roll back
      title = '';
      pos = destEndPos;
      lines = destEndLineNo;
      while (pos < max) {
        ch = str.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }
    }
  }

  if (pos < max && str.charCodeAt(pos) !== 0x0A) {
    // garbage at the end of the line
    return false;
  }

  label = normalizeReference(str.slice(1, labelEnd));
  if (!label) {
    // CommonMark 0.20 disallows empty labels
    return false;
  }

  // Reference can not terminate anything. This check is for safety only.
  /*istanbul ignore if*/
  if (silent) { return true; }

  if (typeof state.env.references === 'undefined') {
    state.env.references = {};
  }
  if (typeof state.env.references[label] === 'undefined') {
    state.env.references[label] = { title: title, href: href };
  }

  state.parentType = oldParentType;

  state.line = startLine + lines + 1;
  return true;
};

},{"../common/utils":56}],80:[function(require,module,exports){
// Parser state class

'use strict';

var Token = require('../token');
var isSpace = require('../common/utils').isSpace;


function StateBlock(src, md, env, tokens) {
  var ch, s, start, pos, len, indent, offset, indent_found;

  this.src = src;

  // link to parser instance
  this.md     = md;

  this.env = env;

  //
  // Internal state vartiables
  //

  this.tokens = tokens;

  this.bMarks = [];  // line begin offsets for fast jumps
  this.eMarks = [];  // line end offsets for fast jumps
  this.tShift = [];  // offsets of the first non-space characters (tabs not expanded)
  this.sCount = [];  // indents for each line (tabs expanded)

  // An amount of virtual spaces (tabs expanded) between beginning
  // of each line (bMarks) and real beginning of that line.
  //
  // It exists only as a hack because blockquotes override bMarks
  // losing information in the process.
  //
  // It's used only when expanding tabs, you can think about it as
  // an initial tab length, e.g. bsCount=21 applied to string `\t123`
  // means first tab should be expanded to 4-21%4 === 3 spaces.
  //
  this.bsCount = [];

  // block parser variables
  this.blkIndent  = 0; // required block content indent
                       // (for example, if we are in list)
  this.line       = 0; // line index in src
  this.lineMax    = 0; // lines count
  this.tight      = false;  // loose/tight mode for lists
  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)

  // can be 'blockquote', 'list', 'root', 'paragraph' or 'reference'
  // used in lists to determine if they interrupt a paragraph
  this.parentType = 'root';

  this.level = 0;

  // renderer
  this.result = '';

  // Create caches
  // Generate markers.
  s = this.src;
  indent_found = false;

  for (start = pos = indent = offset = 0, len = s.length; pos < len; pos++) {
    ch = s.charCodeAt(pos);

    if (!indent_found) {
      if (isSpace(ch)) {
        indent++;

        if (ch === 0x09) {
          offset += 4 - offset % 4;
        } else {
          offset++;
        }
        continue;
      } else {
        indent_found = true;
      }
    }

    if (ch === 0x0A || pos === len - 1) {
      if (ch !== 0x0A) { pos++; }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      this.sCount.push(offset);
      this.bsCount.push(0);

      indent_found = false;
      indent = 0;
      offset = 0;
      start = pos + 1;
    }
  }

  // Push fake entry to simplify cache bounds checks
  this.bMarks.push(s.length);
  this.eMarks.push(s.length);
  this.tShift.push(0);
  this.sCount.push(0);
  this.bsCount.push(0);

  this.lineMax = this.bMarks.length - 1; // don't count last fake line
}

// Push new token to "stream".
//
StateBlock.prototype.push = function (type, tag, nesting) {
  var token = new Token(type, tag, nesting);
  token.block = true;

  if (nesting < 0) { this.level--; }
  token.level = this.level;
  if (nesting > 0) { this.level++; }

  this.tokens.push(token);
  return token;
};

StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};

StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};

// Skip spaces from given position.
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  var ch;

  for (var max = this.src.length; pos < max; pos++) {
    ch = this.src.charCodeAt(pos);
    if (!isSpace(ch)) { break; }
  }
  return pos;
};

// Skip spaces from given position in reverse.
StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (!isSpace(this.src.charCodeAt(--pos))) { return pos + 1; }
  }
  return pos;
};

// Skip char codes from given position
StateBlock.prototype.skipChars = function skipChars(pos, code) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code) { break; }
  }
  return pos;
};

// Skip char codes reverse from given position - 1
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
  if (pos <= min) { return pos; }

  while (pos > min) {
    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
  }
  return pos;
};

// cut lines range from source.
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i, lineIndent, ch, first, last, queue, lineStart,
      line = begin;

  if (begin >= end) {
    return '';
  }

  queue = new Array(end - begin);

  for (i = 0; line < end; line++, i++) {
    lineIndent = 0;
    lineStart = first = this.bMarks[line];

    if (line + 1 < end || keepLastLF) {
      // No need for bounds check because we have fake entry on tail.
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }

    while (first < last && lineIndent < indent) {
      ch = this.src.charCodeAt(first);

      if (isSpace(ch)) {
        if (ch === 0x09) {
          lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
        } else {
          lineIndent++;
        }
      } else if (first - lineStart < this.tShift[line]) {
        // patched tShift masked characters to look like spaces (blockquotes, list markers)
        lineIndent++;
      } else {
        break;
      }

      first++;
    }

    if (lineIndent > indent) {
      // partially expanding tabs in code blocks, e.g '\t\tfoobar'
      // with indent=2 becomes '  \tfoobar'
      queue[i] = new Array(lineIndent - indent + 1).join(' ') + this.src.slice(first, last);
    } else {
      queue[i] = this.src.slice(first, last);
    }
  }

  return queue.join('');
};

// re-export Token class to use in block rules
StateBlock.prototype.Token = Token;


module.exports = StateBlock;

},{"../common/utils":56,"../token":103}],81:[function(require,module,exports){
// GFM table, non-standard

'use strict';

var isSpace = require('../common/utils').isSpace;


function getLine(state, line) {
  var pos = state.bMarks[line] + state.blkIndent,
      max = state.eMarks[line];

  return state.src.substr(pos, max - pos);
}

function escapedSplit(str) {
  var result = [],
      pos = 0,
      max = str.length,
      ch,
      escapes = 0,
      lastPos = 0,
      backTicked = false,
      lastBackTick = 0;

  ch  = str.charCodeAt(pos);

  while (pos < max) {
    if (ch === 0x60/* ` */) {
      if (backTicked) {
        // make \` close code sequence, but not open it;
        // the reason is: `\` is correct code block
        backTicked = false;
        lastBackTick = pos;
      } else if (escapes % 2 === 0) {
        backTicked = true;
        lastBackTick = pos;
      }
    } else if (ch === 0x7c/* | */ && (escapes % 2 === 0) && !backTicked) {
      result.push(str.substring(lastPos, pos));
      lastPos = pos + 1;
    }

    if (ch === 0x5c/* \ */) {
      escapes++;
    } else {
      escapes = 0;
    }

    pos++;

    // If there was an un-closed backtick, go back to just after
    // the last backtick, but as if it was a normal character
    if (pos === max && backTicked) {
      backTicked = false;
      pos = lastBackTick + 1;
    }

    ch = str.charCodeAt(pos);
  }

  result.push(str.substring(lastPos));

  return result;
}


module.exports = function table(state, startLine, endLine, silent) {
  var ch, lineText, pos, i, nextLine, columns, columnCount, token,
      aligns, t, tableLines, tbodyLines;

  // should have at least two lines
  if (startLine + 2 > endLine) { return false; }

  nextLine = startLine + 1;

  if (state.sCount[nextLine] < state.blkIndent) { return false; }

  // if it's indented more than 3 spaces, it should be a code block
  if (state.sCount[nextLine] - state.blkIndent >= 4) { return false; }

  // first character of the second line should be '|', '-', ':',
  // and no other characters are allowed but spaces;
  // basically, this is the equivalent of /^[-:|][-:|\s]*$/ regexp

  pos = state.bMarks[nextLine] + state.tShift[nextLine];
  if (pos >= state.eMarks[nextLine]) { return false; }

  ch = state.src.charCodeAt(pos++);
  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }

  while (pos < state.eMarks[nextLine]) {
    ch = state.src.charCodeAt(pos);

    if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */ && !isSpace(ch)) { return false; }

    pos++;
  }

  lineText = getLine(state, startLine + 1);

  columns = lineText.split('|');
  aligns = [];
  for (i = 0; i < columns.length; i++) {
    t = columns[i].trim();
    if (!t) {
      // allow empty columns before and after table, but not in between columns;
      // e.g. allow ` |---| `, disallow ` ---||--- `
      if (i === 0 || i === columns.length - 1) {
        continue;
      } else {
        return false;
      }
    }

    if (!/^:?-+:?$/.test(t)) { return false; }
    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
    } else if (t.charCodeAt(0) === 0x3A/* : */) {
      aligns.push('left');
    } else {
      aligns.push('');
    }
  }

  lineText = getLine(state, startLine).trim();
  if (lineText.indexOf('|') === -1) { return false; }
  if (state.sCount[startLine] - state.blkIndent >= 4) { return false; }
  columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));

  // header row will define an amount of columns in the entire table,
  // and align row shouldn't be smaller than that (the rest of the rows can)
  columnCount = columns.length;
  if (columnCount > aligns.length) { return false; }

  if (silent) { return true; }

  token     = state.push('table_open', 'table', 1);
  token.map = tableLines = [ startLine, 0 ];

  token     = state.push('thead_open', 'thead', 1);
  token.map = [ startLine, startLine + 1 ];

  token     = state.push('tr_open', 'tr', 1);
  token.map = [ startLine, startLine + 1 ];

  for (i = 0; i < columns.length; i++) {
    token          = state.push('th_open', 'th', 1);
    token.map      = [ startLine, startLine + 1 ];
    if (aligns[i]) {
      token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
    }

    token          = state.push('inline', '', 0);
    token.content  = columns[i].trim();
    token.map      = [ startLine, startLine + 1 ];
    token.children = [];

    token          = state.push('th_close', 'th', -1);
  }

  token     = state.push('tr_close', 'tr', -1);
  token     = state.push('thead_close', 'thead', -1);

  token     = state.push('tbody_open', 'tbody', 1);
  token.map = tbodyLines = [ startLine + 2, 0 ];

  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state.sCount[nextLine] < state.blkIndent) { break; }

    lineText = getLine(state, nextLine).trim();
    if (lineText.indexOf('|') === -1) { break; }
    if (state.sCount[nextLine] - state.blkIndent >= 4) { break; }
    columns = escapedSplit(lineText.replace(/^\||\|$/g, ''));

    token = state.push('tr_open', 'tr', 1);
    for (i = 0; i < columnCount; i++) {
      token          = state.push('td_open', 'td', 1);
      if (aligns[i]) {
        token.attrs  = [ [ 'style', 'text-align:' + aligns[i] ] ];
      }

      token          = state.push('inline', '', 0);
      token.content  = columns[i] ? columns[i].trim() : '';
      token.children = [];

      token          = state.push('td_close', 'td', -1);
    }
    token = state.push('tr_close', 'tr', -1);
  }
  token = state.push('tbody_close', 'tbody', -1);
  token = state.push('table_close', 'table', -1);

  tableLines[1] = tbodyLines[1] = nextLine;
  state.line = nextLine;
  return true;
};

},{"../common/utils":56}],82:[function(require,module,exports){
'use strict';


module.exports = function block(state) {
  var token;

  if (state.inlineMode) {
    token          = new state.Token('inline', '', 0);
    token.content  = state.src;
    token.map      = [ 0, 1 ];
    token.children = [];
    state.tokens.push(token);
  } else {
    state.md.block.parse(state.src, state.md, state.env, state.tokens);
  }
};

},{}],83:[function(require,module,exports){
'use strict';

module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.md.inline.parse(tok.content, state.md, state.env, tok.children);
    }
  }
};

},{}],84:[function(require,module,exports){
// Replace link-like texts with link nodes.
//
// Currently restricted by `md.validateLink()` to http/https/ftp
//
'use strict';


var arrayReplaceAt = require('../common/utils').arrayReplaceAt;


function isLinkOpen(str) {
  return /^<a[>\s]/i.test(str);
}
function isLinkClose(str) {
  return /^<\/a\s*>/i.test(str);
}


module.exports = function linkify(state) {
  var i, j, l, tokens, token, currentToken, nodes, ln, text, pos, lastPos,
      level, htmlLinkLevel, url, fullUrl, urlText,
      blockTokens = state.tokens,
      links;

  if (!state.md.options.linkify) { return; }

  for (j = 0, l = blockTokens.length; j < l; j++) {
    if (blockTokens[j].type !== 'inline' ||
        !state.md.linkify.pretest(blockTokens[j].content)) {
      continue;
    }

    tokens = blockTokens[j].children;

    htmlLinkLevel = 0;

    // We scan from the end, to keep position when new tags added.
    // Use reversed logic in links start/end match
    for (i = tokens.length - 1; i >= 0; i--) {
      currentToken = tokens[i];

      // Skip content of markdown links
      if (currentToken.type === 'link_close') {
        i--;
        while (tokens[i].level !== currentToken.level && tokens[i].type !== 'link_open') {
          i--;
        }
        continue;
      }

      // Skip content of html tag links
      if (currentToken.type === 'html_inline') {
        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
          htmlLinkLevel--;
        }
        if (isLinkClose(currentToken.content)) {
          htmlLinkLevel++;
        }
      }
      if (htmlLinkLevel > 0) { continue; }

      if (currentToken.type === 'text' && state.md.linkify.test(currentToken.content)) {

        text = currentToken.content;
        links = state.md.linkify.match(text);

        // Now split string to nodes
        nodes = [];
        level = currentToken.level;
        lastPos = 0;

        for (ln = 0; ln < links.length; ln++) {

          url = links[ln].url;
          fullUrl = state.md.normalizeLink(url);
          if (!state.md.validateLink(fullUrl)) { continue; }

          urlText = links[ln].text;

          // Linkifier might send raw hostnames like "example.com", where url
          // starts with domain name. So we prepend http:// in those cases,
          // and remove it afterwards.
          //
          if (!links[ln].schema) {
            urlText = state.md.normalizeLinkText('http://' + urlText).replace(/^http:\/\//, '');
          } else if (links[ln].schema === 'mailto:' && !/^mailto:/i.test(urlText)) {
            urlText = state.md.normalizeLinkText('mailto:' + urlText).replace(/^mailto:/, '');
          } else {
            urlText = state.md.normalizeLinkText(urlText);
          }

          pos = links[ln].index;

          if (pos > lastPos) {
            token         = new state.Token('text', '', 0);
            token.content = text.slice(lastPos, pos);
            token.level   = level;
            nodes.push(token);
          }

          token         = new state.Token('link_open', 'a', 1);
          token.attrs   = [ [ 'href', fullUrl ] ];
          token.level   = level++;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          token         = new state.Token('text', '', 0);
          token.content = urlText;
          token.level   = level;
          nodes.push(token);

          token         = new state.Token('link_close', 'a', -1);
          token.level   = --level;
          token.markup  = 'linkify';
          token.info    = 'auto';
          nodes.push(token);

          lastPos = links[ln].lastIndex;
        }
        if (lastPos < text.length) {
          token         = new state.Token('text', '', 0);
          token.content = text.slice(lastPos);
          token.level   = level;
          nodes.push(token);
        }

        // replace current node
        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
      }
    }
  }
};

},{"../common/utils":56}],85:[function(require,module,exports){
// Normalize input string

'use strict';


var NEWLINES_RE  = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g;
var NULL_RE      = /\u0000/g;


module.exports = function inline(state) {
  var str;

  // Normalize newlines
  str = state.src.replace(NEWLINES_RE, '\n');

  // Replace NULL characters
  str = str.replace(NULL_RE, '\uFFFD');

  state.src = str;
};

},{}],86:[function(require,module,exports){
// Simple typographyc replacements
//
// (c) (C) → ©
// (tm) (TM) → ™
// (r) (R) → ®
// +- → ±
// (p) (P) -> §
// ... → … (also ?.... → ?.., !.... → !..)
// ???????? → ???, !!!!! → !!!, `,,` → `,`
// -- → &ndash;, --- → &mdash;
//
'use strict';

// TODO:
// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
// - miltiplication 2 x 4 -> 2 × 4

var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;

// Workaround for phantomjs - need regex without /g flag,
// or root check will fail every second time
var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;

var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  c: '©',
  r: '®',
  p: '§',
  tm: '™'
};

function replaceFn(match, name) {
  return SCOPED_ABBR[name.toLowerCase()];
}

function replace_scoped(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}

function replace_rare(inlineTokens) {
  var i, token, inside_autolink = 0;

  for (i = inlineTokens.length - 1; i >= 0; i--) {
    token = inlineTokens[i];

    if (token.type === 'text' && !inside_autolink) {
      if (RARE_RE.test(token.content)) {
        token.content = token.content
                    .replace(/\+-/g, '±')
                    // .., ..., ....... -> …
                    // but ?..... & !..... -> ?.. & !..
                    .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
                    .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
                    // em-dash
                    .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
                    // en-dash
                    .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
                    .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
      }
    }

    if (token.type === 'link_open' && token.info === 'auto') {
      inside_autolink--;
    }

    if (token.type === 'link_close' && token.info === 'auto') {
      inside_autolink++;
    }
  }
}


module.exports = function replace(state) {
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline') { continue; }

    if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
      replace_scoped(state.tokens[blkIdx].children);
    }

    if (RARE_RE.test(state.tokens[blkIdx].content)) {
      replace_rare(state.tokens[blkIdx].children);
    }

  }
};

},{}],87:[function(require,module,exports){
// Convert straight quotation marks to typographic ones
//
'use strict';


var isWhiteSpace   = require('../common/utils').isWhiteSpace;
var isPunctChar    = require('../common/utils').isPunctChar;
var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;

var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var APOSTROPHE = '\u2019'; /* ’ */


function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}

function process_inlines(tokens, state) {
  var i, token, text, t, pos, max, thisLevel, item, lastChar, nextChar,
      isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace,
      canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;

  stack = [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];

    thisLevel = tokens[i].level;

    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) { break; }
    }
    stack.length = j + 1;

    if (token.type !== 'text') { continue; }

    text = token.content;
    pos = 0;
    max = text.length;

    /*eslint no-labels:0,block-scoped-var:0*/
    OUTER:
    while (pos < max) {
      QUOTE_RE.lastIndex = pos;
      t = QUOTE_RE.exec(text);
      if (!t) { break; }

      canOpen = canClose = true;
      pos = t.index + 1;
      isSingle = (t[0] === "'");

      // Find previous character,
      // default to space if it's the beginning of the line
      //
      lastChar = 0x20;

      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // lastChar defaults to 0x20
          if (tokens[j].type !== 'text') continue;

          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      // Find next character,
      // default to space if it's the end of the line
      //
      nextChar = 0x20;

      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].type === 'softbreak' || tokens[j].type === 'hardbreak') break; // nextChar defaults to 0x20
          if (tokens[j].type !== 'text') continue;

          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          canOpen = false;
        }
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          canClose = false;
        }
      }

      if (nextChar === 0x22 /* " */ && t[0] === '"') {
        if (lastChar >= 0x30 /* 0 */ && lastChar <= 0x39 /* 9 */) {
          // special case: 1"" - count first quote as an inch
          canClose = canOpen = false;
        }
      }

      if (canOpen && canClose) {
        // treat this as the middle of the word
        canOpen = false;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        // middle of word
        if (isSingle) {
          token.content = replaceAt(token.content, t.index, APOSTROPHE);
        }
        continue;
      }

      if (canClose) {
        // this could be a closing quote, rewind the stack to get a match
        for (j = stack.length - 1; j >= 0; j--) {
          item = stack[j];
          if (stack[j].level < thisLevel) { break; }
          if (item.single === isSingle && stack[j].level === thisLevel) {
            item = stack[j];

            if (isSingle) {
              openQuote = state.md.options.quotes[2];
              closeQuote = state.md.options.quotes[3];
            } else {
              openQuote = state.md.options.quotes[0];
              closeQuote = state.md.options.quotes[1];
            }

            // replace token.content *before* tokens[item.token].content,
            // because, if they are pointing at the same token, replaceAt
            // could mess up indices when quote length != 1
            token.content = replaceAt(token.content, t.index, closeQuote);
            tokens[item.token].content = replaceAt(
              tokens[item.token].content, item.pos, openQuote);

            pos += closeQuote.length - 1;
            if (item.token === i) { pos += openQuote.length - 1; }

            text = token.content;
            max = text.length;

            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({
          token: i,
          pos: t.index,
          single: isSingle,
          level: thisLevel
        });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}


module.exports = function smartquotes(state) {
  /*eslint max-depth:0*/
  var blkIdx;

  if (!state.md.options.typographer) { return; }

  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {

    if (state.tokens[blkIdx].type !== 'inline' ||
        !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
      continue;
    }

    process_inlines(state.tokens[blkIdx].children, state);
  }
};

},{"../common/utils":56}],88:[function(require,module,exports){
// Core state object
//
'use strict';

var Token = require('../token');


function StateCore(src, md, env) {
  this.src = src;
  this.env = env;
  this.tokens = [];
  this.inlineMode = false;
  this.md = md; // link to parser instance
}

// re-export Token class to use in core rules
StateCore.prototype.Token = Token;


module.exports = StateCore;

},{"../token":103}],89:[function(require,module,exports){
// Process autolinks '<protocol:...>'

'use strict';


/*eslint max-len:0*/
var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;


module.exports = function autolink(state, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, token,
      pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }

  tail = state.src.slice(pos);

  if (tail.indexOf('>') < 0) { return false; }

  if (AUTOLINK_RE.test(tail)) {
    linkMatch = tail.match(AUTOLINK_RE);

    url = linkMatch[0].slice(1, -1);
    fullUrl = state.md.normalizeLink(url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += linkMatch[0].length;
    return true;
  }

  if (EMAIL_RE.test(tail)) {
    emailMatch = tail.match(EMAIL_RE);

    url = emailMatch[0].slice(1, -1);
    fullUrl = state.md.normalizeLink('mailto:' + url);
    if (!state.md.validateLink(fullUrl)) { return false; }

    if (!silent) {
      token         = state.push('link_open', 'a', 1);
      token.attrs   = [ [ 'href', fullUrl ] ];
      token.markup  = 'autolink';
      token.info    = 'auto';

      token         = state.push('text', '', 0);
      token.content = state.md.normalizeLinkText(url);

      token         = state.push('link_close', 'a', -1);
      token.markup  = 'autolink';
      token.info    = 'auto';
    }

    state.pos += emailMatch[0].length;
    return true;
  }

  return false;
};

},{}],90:[function(require,module,exports){
// Parse backticks

'use strict';

module.exports = function backtick(state, silent) {
  var start, max, marker, matchStart, matchEnd, token,
      pos = state.pos,
      ch = state.src.charCodeAt(pos);

  if (ch !== 0x60/* ` */) { return false; }

  start = pos;
  pos++;
  max = state.posMax;

  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }

  marker = state.src.slice(start, pos);

  matchStart = matchEnd = pos;

  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
    matchEnd = matchStart + 1;

    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }

    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        token         = state.push('code_inline', 'code', 0);
        token.markup  = marker;
        token.content = state.src.slice(pos, matchStart)
                                 .replace(/[ \n]+/g, ' ')
                                 .trim();
      }
      state.pos = matchEnd;
      return true;
    }
  }

  if (!silent) { state.pending += marker; }
  state.pos += marker.length;
  return true;
};

},{}],91:[function(require,module,exports){
// For each opening emphasis-like marker find a matching closing one
//
'use strict';


module.exports = function link_pairs(state) {
  var i, j, lastDelim, currDelim,
      delimiters = state.delimiters,
      max = state.delimiters.length;

  for (i = 0; i < max; i++) {
    lastDelim = delimiters[i];

    if (!lastDelim.close) { continue; }

    j = i - lastDelim.jump - 1;

    while (j >= 0) {
      currDelim = delimiters[j];

      if (currDelim.open &&
          currDelim.marker === lastDelim.marker &&
          currDelim.end < 0 &&
          currDelim.level === lastDelim.level) {

        // typeofs are for backward compatibility with plugins
        var odd_match = (currDelim.close || lastDelim.open) &&
                        typeof currDelim.length !== 'undefined' &&
                        typeof lastDelim.length !== 'undefined' &&
                        (currDelim.length + lastDelim.length) % 3 === 0;

        if (!odd_match) {
          lastDelim.jump = i - j;
          lastDelim.open = false;
          currDelim.end  = i;
          currDelim.jump = 0;
          break;
        }
      }

      j -= currDelim.jump + 1;
    }
  }
};

},{}],92:[function(require,module,exports){
// Process *this* and _that_
//
'use strict';


// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function emphasis(state, silent) {
  var i, scanned, token,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x5F /* _ */ && marker !== 0x2A /* * */) { return false; }

  scanned = state.scanDelims(state.pos, marker === 0x2A);

  for (i = 0; i < scanned.length; i++) {
    token         = state.push('text', '', 0);
    token.content = String.fromCharCode(marker);

    state.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: marker,

      // Total length of these series of delimiters.
      //
      length: scanned.length,

      // An amount of characters before this one that's equivalent to
      // current one. In plain English: if this delimiter does not open
      // an emphasis, neither do previous `jump` characters.
      //
      // Used to skip sequences like "*****" in one step, for 1st asterisk
      // value will be 0, for 2nd it's 1 and so on.
      //
      jump:   i,

      // A position of the token this delimiter corresponds to.
      //
      token:  state.tokens.length - 1,

      // Token level.
      //
      level:  state.level,

      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end:    -1,

      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function emphasis(state) {
  var i,
      startDelim,
      endDelim,
      token,
      ch,
      isStrong,
      delimiters = state.delimiters,
      max = state.delimiters.length;

  for (i = max - 1; i >= 0; i--) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x5F/* _ */ && startDelim.marker !== 0x2A/* * */) {
      continue;
    }

    // Process only opening markers
    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    // If the previous delimiter has the same marker and is adjacent to this one,
    // merge those into one strong delimiter.
    //
    // `<em><em>whatever</em></em>` -> `<strong>whatever</strong>`
    //
    isStrong = i > 0 &&
               delimiters[i - 1].end === startDelim.end + 1 &&
               delimiters[i - 1].token === startDelim.token - 1 &&
               delimiters[startDelim.end + 1].token === endDelim.token + 1 &&
               delimiters[i - 1].marker === startDelim.marker;

    ch = String.fromCharCode(startDelim.marker);

    token         = state.tokens[startDelim.token];
    token.type    = isStrong ? 'strong_open' : 'em_open';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = 1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = isStrong ? 'strong_close' : 'em_close';
    token.tag     = isStrong ? 'strong' : 'em';
    token.nesting = -1;
    token.markup  = isStrong ? ch + ch : ch;
    token.content = '';

    if (isStrong) {
      state.tokens[delimiters[i - 1].token].content = '';
      state.tokens[delimiters[startDelim.end + 1].token].content = '';
      i--;
    }
  }
};

},{}],93:[function(require,module,exports){
// Process html entity - &#123;, &#xAF;, &quot;, ...

'use strict';

var entities          = require('../common/entities');
var has               = require('../common/utils').has;
var isValidEntityCode = require('../common/utils').isValidEntityCode;
var fromCodePoint     = require('../common/utils').fromCodePoint;


var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;


module.exports = function entity(state, silent) {
  var ch, code, match, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }

  if (pos + 1 < max) {
    ch = state.src.charCodeAt(pos + 1);

    if (ch === 0x23 /* # */) {
      match = state.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
        }
        state.pos += match[0].length;
        return true;
      }
    } else {
      match = state.src.slice(pos).match(NAMED_RE);
      if (match) {
        if (has(entities, match[1])) {
          if (!silent) { state.pending += entities[match[1]]; }
          state.pos += match[0].length;
          return true;
        }
      }
    }
  }

  if (!silent) { state.pending += '&'; }
  state.pos++;
  return true;
};

},{"../common/entities":53,"../common/utils":56}],94:[function(require,module,exports){
// Process escaped chars and hardbreaks

'use strict';

var isSpace = require('../common/utils').isSpace;

var ESCAPED = [];

for (var i = 0; i < 256; i++) { ESCAPED.push(0); }

'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
  .split('').forEach(function (ch) { ESCAPED[ch.charCodeAt(0)] = 1; });


module.exports = function escape(state, silent) {
  var ch, pos = state.pos, max = state.posMax;

  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }

  pos++;

  if (pos < max) {
    ch = state.src.charCodeAt(pos);

    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) { state.pending += state.src[pos]; }
      state.pos += 2;
      return true;
    }

    if (ch === 0x0A) {
      if (!silent) {
        state.push('hardbreak', 'br', 0);
      }

      pos++;
      // skip leading whitespaces from next line
      while (pos < max) {
        ch = state.src.charCodeAt(pos);
        if (!isSpace(ch)) { break; }
        pos++;
      }

      state.pos = pos;
      return true;
    }
  }

  if (!silent) { state.pending += '\\'; }
  state.pos++;
  return true;
};

},{"../common/utils":56}],95:[function(require,module,exports){
// Process html tags

'use strict';


var HTML_TAG_RE = require('../common/html_re').HTML_TAG_RE;


function isLetter(ch) {
  /*eslint no-bitwise:0*/
  var lc = ch | 0x20; // to lower case
  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
}


module.exports = function html_inline(state, silent) {
  var ch, match, max, token,
      pos = state.pos;

  if (!state.md.options.html) { return false; }

  // Check start
  max = state.posMax;
  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
      pos + 2 >= max) {
    return false;
  }

  // Quick fail on second char
  ch = state.src.charCodeAt(pos + 1);
  if (ch !== 0x21/* ! */ &&
      ch !== 0x3F/* ? */ &&
      ch !== 0x2F/* / */ &&
      !isLetter(ch)) {
    return false;
  }

  match = state.src.slice(pos).match(HTML_TAG_RE);
  if (!match) { return false; }

  if (!silent) {
    token         = state.push('html_inline', '', 0);
    token.content = state.src.slice(pos, pos + match[0].length);
  }
  state.pos += match[0].length;
  return true;
};

},{"../common/html_re":55}],96:[function(require,module,exports){
// Process ![image](<src> "title")

'use strict';

var normalizeReference   = require('../common/utils').normalizeReference;
var isSpace              = require('../common/utils').isSpace;


module.exports = function image(state, silent) {
  var attrs,
      code,
      content,
      label,
      labelEnd,
      labelStart,
      pos,
      ref,
      res,
      title,
      token,
      tokens,
      start,
      href = '',
      oldPos = state.pos,
      max = state.posMax;

  if (state.src.charCodeAt(state.pos) !== 0x21/* ! */) { return false; }
  if (state.src.charCodeAt(state.pos + 1) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 2;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      state.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    content = state.src.slice(labelStart, labelEnd);

    state.md.inline.parse(
      content,
      state.md,
      state.env,
      tokens = []
    );

    token          = state.push('image', 'img', 0);
    token.attrs    = attrs = [ [ 'src', href ], [ 'alt', '' ] ];
    token.children = tokens;
    token.content  = content;

    if (title) {
      attrs.push([ 'title', title ]);
    }
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../common/utils":56}],97:[function(require,module,exports){
// Process [link](<to> "stuff")

'use strict';

var normalizeReference   = require('../common/utils').normalizeReference;
var isSpace              = require('../common/utils').isSpace;


module.exports = function link(state, silent) {
  var attrs,
      code,
      label,
      labelEnd,
      labelStart,
      pos,
      res,
      ref,
      title,
      token,
      href = '',
      oldPos = state.pos,
      max = state.posMax,
      start = state.pos,
      parseReference = true;

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false; }

  labelStart = state.pos + 1;
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false; }

  pos = labelEnd + 1;
  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false;

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }
    if (pos >= max) { return false; }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos;
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
    if (res.ok) {
      href = state.md.normalizeLink(res.str);
      if (state.md.validateLink(href)) {
        pos = res.pos;
      } else {
        href = '';
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos;
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos);
      if (!isSpace(code) && code !== 0x0A) { break; }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
    if (pos < max && start !== pos && res.ok) {
      title = res.str;
      pos = res.pos;

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos);
        if (!isSpace(code) && code !== 0x0A) { break; }
      }
    } else {
      title = '';
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true;
    }
    pos++;
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false; }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1;
      pos = state.md.helpers.parseLinkLabel(state, pos);
      if (pos >= 0) {
        label = state.src.slice(start, pos++);
      } else {
        pos = labelEnd + 1;
      }
    } else {
      pos = labelEnd + 1;
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd); }

    ref = state.env.references[normalizeReference(label)];
    if (!ref) {
      state.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart;
    state.posMax = labelEnd;

    token        = state.push('link_open', 'a', 1);
    token.attrs  = attrs = [ [ 'href', href ] ];
    if (title) {
      attrs.push([ 'title', title ]);
    }

    state.md.inline.tokenize(state);

    token        = state.push('link_close', 'a', -1);
  }

  state.pos = pos;
  state.posMax = max;
  return true;
};

},{"../common/utils":56}],98:[function(require,module,exports){
// Proceess '\n'

'use strict';

var isSpace = require('../common/utils').isSpace;


module.exports = function newline(state, silent) {
  var pmax, max, pos = state.pos;

  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }

  pmax = state.pending.length - 1;
  max = state.posMax;

  // '  \n' -> hardbreak
  // Lookup in pending chars is bad practice! Don't copy to other rules!
  // Pending string is stored in concat mode, indexed lookups will cause
  // convertion to flat mode.
  if (!silent) {
    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
        state.pending = state.pending.replace(/ +$/, '');
        state.push('hardbreak', 'br', 0);
      } else {
        state.pending = state.pending.slice(0, -1);
        state.push('softbreak', 'br', 0);
      }

    } else {
      state.push('softbreak', 'br', 0);
    }
  }

  pos++;

  // skip heading spaces for next line
  while (pos < max && isSpace(state.src.charCodeAt(pos))) { pos++; }

  state.pos = pos;
  return true;
};

},{"../common/utils":56}],99:[function(require,module,exports){
// Inline parser state

'use strict';


var Token          = require('../token');
var isWhiteSpace   = require('../common/utils').isWhiteSpace;
var isPunctChar    = require('../common/utils').isPunctChar;
var isMdAsciiPunct = require('../common/utils').isMdAsciiPunct;


function StateInline(src, md, env, outTokens) {
  this.src = src;
  this.env = env;
  this.md = md;
  this.tokens = outTokens;

  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = '';
  this.pendingLevel = 0;

  this.cache = {};        // Stores { start: end } pairs. Useful for backtrack
                          // optimization of pairs parse (emphasis, strikes).

  this.delimiters = [];   // Emphasis-like delimiters
}


// Flush pending text
//
StateInline.prototype.pushPending = function () {
  var token = new Token('text', '', 0);
  token.content = this.pending;
  token.level = this.pendingLevel;
  this.tokens.push(token);
  this.pending = '';
  return token;
};


// Push new token to "stream".
// If pending text exists - flush it as text token
//
StateInline.prototype.push = function (type, tag, nesting) {
  if (this.pending) {
    this.pushPending();
  }

  var token = new Token(type, tag, nesting);

  if (nesting < 0) { this.level--; }
  token.level = this.level;
  if (nesting > 0) { this.level++; }

  this.pendingLevel = this.level;
  this.tokens.push(token);
  return token;
};


// Scan a sequence of emphasis-like markers, and determine whether
// it can start an emphasis sequence or end an emphasis sequence.
//
//  - start - position to scan from (it should point at a valid marker);
//  - canSplitWord - determine if these markers can be found inside a word
//
StateInline.prototype.scanDelims = function (start, canSplitWord) {
  var pos = start, lastChar, nextChar, count, can_open, can_close,
      isLastWhiteSpace, isLastPunctChar,
      isNextWhiteSpace, isNextPunctChar,
      left_flanking = true,
      right_flanking = true,
      max = this.posMax,
      marker = this.src.charCodeAt(start);

  // treat beginning of the line as a whitespace
  lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 0x20;

  while (pos < max && this.src.charCodeAt(pos) === marker) { pos++; }

  count = pos - start;

  // treat end of the line as a whitespace
  nextChar = pos < max ? this.src.charCodeAt(pos) : 0x20;

  isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
  isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));

  isLastWhiteSpace = isWhiteSpace(lastChar);
  isNextWhiteSpace = isWhiteSpace(nextChar);

  if (isNextWhiteSpace) {
    left_flanking = false;
  } else if (isNextPunctChar) {
    if (!(isLastWhiteSpace || isLastPunctChar)) {
      left_flanking = false;
    }
  }

  if (isLastWhiteSpace) {
    right_flanking = false;
  } else if (isLastPunctChar) {
    if (!(isNextWhiteSpace || isNextPunctChar)) {
      right_flanking = false;
    }
  }

  if (!canSplitWord) {
    can_open  = left_flanking  && (!right_flanking || isLastPunctChar);
    can_close = right_flanking && (!left_flanking  || isNextPunctChar);
  } else {
    can_open  = left_flanking;
    can_close = right_flanking;
  }

  return {
    can_open:  can_open,
    can_close: can_close,
    length:    count
  };
};


// re-export Token class to use in block rules
StateInline.prototype.Token = Token;


module.exports = StateInline;

},{"../common/utils":56,"../token":103}],100:[function(require,module,exports){
// ~~strike through~~
//
'use strict';


// Insert each marker as a separate text token, and add it to delimiter list
//
module.exports.tokenize = function strikethrough(state, silent) {
  var i, scanned, token, len, ch,
      start = state.pos,
      marker = state.src.charCodeAt(start);

  if (silent) { return false; }

  if (marker !== 0x7E/* ~ */) { return false; }

  scanned = state.scanDelims(state.pos, true);
  len = scanned.length;
  ch = String.fromCharCode(marker);

  if (len < 2) { return false; }

  if (len % 2) {
    token         = state.push('text', '', 0);
    token.content = ch;
    len--;
  }

  for (i = 0; i < len; i += 2) {
    token         = state.push('text', '', 0);
    token.content = ch + ch;

    state.delimiters.push({
      marker: marker,
      jump:   i,
      token:  state.tokens.length - 1,
      level:  state.level,
      end:    -1,
      open:   scanned.can_open,
      close:  scanned.can_close
    });
  }

  state.pos += scanned.length;

  return true;
};


// Walk through delimiter list and replace text tokens with tags
//
module.exports.postProcess = function strikethrough(state) {
  var i, j,
      startDelim,
      endDelim,
      token,
      loneMarkers = [],
      delimiters = state.delimiters,
      max = state.delimiters.length;

  for (i = 0; i < max; i++) {
    startDelim = delimiters[i];

    if (startDelim.marker !== 0x7E/* ~ */) {
      continue;
    }

    if (startDelim.end === -1) {
      continue;
    }

    endDelim = delimiters[startDelim.end];

    token         = state.tokens[startDelim.token];
    token.type    = 's_open';
    token.tag     = 's';
    token.nesting = 1;
    token.markup  = '~~';
    token.content = '';

    token         = state.tokens[endDelim.token];
    token.type    = 's_close';
    token.tag     = 's';
    token.nesting = -1;
    token.markup  = '~~';
    token.content = '';

    if (state.tokens[endDelim.token - 1].type === 'text' &&
        state.tokens[endDelim.token - 1].content === '~') {

      loneMarkers.push(endDelim.token - 1);
    }
  }

  // If a marker sequence has an odd number of characters, it's splitted
  // like this: `~~~~~` -> `~` + `~~` + `~~`, leaving one marker at the
  // start of the sequence.
  //
  // So, we have to move all those markers after subsequent s_close tags.
  //
  while (loneMarkers.length) {
    i = loneMarkers.pop();
    j = i + 1;

    while (j < state.tokens.length && state.tokens[j].type === 's_close') {
      j++;
    }

    j--;

    if (i !== j) {
      token = state.tokens[j];
      state.tokens[j] = state.tokens[i];
      state.tokens[i] = token;
    }
  }
};

},{}],101:[function(require,module,exports){
// Skip text characters for text token, place those to pending buffer
// and increment current pos

'use strict';


// Rule to skip pure text
// '{}$%@~+=:' reserved for extentions

// !, ", #, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, or ~

// !!!! Don't confuse with "Markdown ASCII Punctuation" chars
// http://spec.commonmark.org/0.15/#ascii-punctuation-character
function isTerminatorChar(ch) {
  switch (ch) {
    case 0x0A/* \n */:
    case 0x21/* ! */:
    case 0x23/* # */:
    case 0x24/* $ */:
    case 0x25/* % */:
    case 0x26/* & */:
    case 0x2A/* * */:
    case 0x2B/* + */:
    case 0x2D/* - */:
    case 0x3A/* : */:
    case 0x3C/* < */:
    case 0x3D/* = */:
    case 0x3E/* > */:
    case 0x40/* @ */:
    case 0x5B/* [ */:
    case 0x5C/* \ */:
    case 0x5D/* ] */:
    case 0x5E/* ^ */:
    case 0x5F/* _ */:
    case 0x60/* ` */:
    case 0x7B/* { */:
    case 0x7D/* } */:
    case 0x7E/* ~ */:
      return true;
    default:
      return false;
  }
}

module.exports = function text(state, silent) {
  var pos = state.pos;

  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
    pos++;
  }

  if (pos === state.pos) { return false; }

  if (!silent) { state.pending += state.src.slice(state.pos, pos); }

  state.pos = pos;

  return true;
};

// Alternative implementation, for memory.
//
// It costs 10% of performance, but allows extend terminators list, if place it
// to `ParcerInline` property. Probably, will switch to it sometime, such
// flexibility required.

/*
var TERMINATOR_RE = /[\n!#$%&*+\-:<=>@[\\\]^_`{}~]/;

module.exports = function text(state, silent) {
  var pos = state.pos,
      idx = state.src.slice(pos).search(TERMINATOR_RE);

  // first char is terminator -> empty text
  if (idx === 0) { return false; }

  // no terminator -> text till end of string
  if (idx < 0) {
    if (!silent) { state.pending += state.src.slice(pos); }
    state.pos = state.src.length;
    return true;
  }

  if (!silent) { state.pending += state.src.slice(pos, pos + idx); }

  state.pos += idx;

  return true;
};*/

},{}],102:[function(require,module,exports){
// Merge adjacent text nodes into one, and re-calculate all token levels
//
'use strict';


module.exports = function text_collapse(state) {
  var curr, last,
      level = 0,
      tokens = state.tokens,
      max = state.tokens.length;

  for (curr = last = 0; curr < max; curr++) {
    // re-calculate levels
    level += tokens[curr].nesting;
    tokens[curr].level = level;

    if (tokens[curr].type === 'text' &&
        curr + 1 < max &&
        tokens[curr + 1].type === 'text') {

      // collapse two adjacent text nodes
      tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
    } else {
      if (curr !== last) { tokens[last] = tokens[curr]; }

      last++;
    }
  }

  if (curr !== last) {
    tokens.length = last;
  }
};

},{}],103:[function(require,module,exports){
// Token class

'use strict';


/**
 * class Token
 **/

/**
 * new Token(type, tag, nesting)
 *
 * Create new token and fill passed properties.
 **/
function Token(type, tag, nesting) {
  /**
   * Token#type -> String
   *
   * Type of the token (string, e.g. "paragraph_open")
   **/
  this.type     = type;

  /**
   * Token#tag -> String
   *
   * html tag name, e.g. "p"
   **/
  this.tag      = tag;

  /**
   * Token#attrs -> Array
   *
   * Html attributes. Format: `[ [ name1, value1 ], [ name2, value2 ] ]`
   **/
  this.attrs    = null;

  /**
   * Token#map -> Array
   *
   * Source map info. Format: `[ line_begin, line_end ]`
   **/
  this.map      = null;

  /**
   * Token#nesting -> Number
   *
   * Level change (number in {-1, 0, 1} set), where:
   *
   * -  `1` means the tag is opening
   * -  `0` means the tag is self-closing
   * - `-1` means the tag is closing
   **/
  this.nesting  = nesting;

  /**
   * Token#level -> Number
   *
   * nesting level, the same as `state.level`
   **/
  this.level    = 0;

  /**
   * Token#children -> Array
   *
   * An array of child nodes (inline and img tokens)
   **/
  this.children = null;

  /**
   * Token#content -> String
   *
   * In a case of self-closing tag (code, html, fence, etc.),
   * it has contents of this tag.
   **/
  this.content  = '';

  /**
   * Token#markup -> String
   *
   * '*' or '_' for emphasis, fence string for fence, etc.
   **/
  this.markup   = '';

  /**
   * Token#info -> String
   *
   * fence infostring
   **/
  this.info     = '';

  /**
   * Token#meta -> Object
   *
   * A place for plugins to store an arbitrary data
   **/
  this.meta     = null;

  /**
   * Token#block -> Boolean
   *
   * True for block-level tokens, false for inline tokens.
   * Used in renderer to calculate line breaks
   **/
  this.block    = false;

  /**
   * Token#hidden -> Boolean
   *
   * If it's true, ignore this element when rendering. Used for tight lists
   * to hide paragraphs.
   **/
  this.hidden   = false;
}


/**
 * Token.attrIndex(name) -> Number
 *
 * Search attribute index by name.
 **/
Token.prototype.attrIndex = function attrIndex(name) {
  var attrs, i, len;

  if (!this.attrs) { return -1; }

  attrs = this.attrs;

  for (i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i][0] === name) { return i; }
  }
  return -1;
};


/**
 * Token.attrPush(attrData)
 *
 * Add `[ name, value ]` attribute to list. Init attrs if necessary
 **/
Token.prototype.attrPush = function attrPush(attrData) {
  if (this.attrs) {
    this.attrs.push(attrData);
  } else {
    this.attrs = [ attrData ];
  }
};


/**
 * Token.attrSet(name, value)
 *
 * Set `name` attribute to `value`. Override old value if exists.
 **/
Token.prototype.attrSet = function attrSet(name, value) {
  var idx = this.attrIndex(name),
      attrData = [ name, value ];

  if (idx < 0) {
    this.attrPush(attrData);
  } else {
    this.attrs[idx] = attrData;
  }
};


/**
 * Token.attrGet(name)
 *
 * Get the value of attribute `name`, or null if it does not exist.
 **/
Token.prototype.attrGet = function attrGet(name) {
  var idx = this.attrIndex(name), value = null;
  if (idx >= 0) {
    value = this.attrs[idx][1];
  }
  return value;
};


/**
 * Token.attrJoin(name, value)
 *
 * Join value to existing attribute via space. Or create new attribute if not
 * exists. Useful to operate with token classes.
 **/
Token.prototype.attrJoin = function attrJoin(name, value) {
  var idx = this.attrIndex(name);

  if (idx < 0) {
    this.attrPush([ name, value ]);
  } else {
    this.attrs[idx][1] = this.attrs[idx][1] + ' ' + value;
  }
};


module.exports = Token;

},{}],104:[function(require,module,exports){
module.exports={"Aacute":"\u00C1","aacute":"\u00E1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223E","acd":"\u223F","acE":"\u223E\u0333","Acirc":"\u00C2","acirc":"\u00E2","acute":"\u00B4","Acy":"\u0410","acy":"\u0430","AElig":"\u00C6","aelig":"\u00E6","af":"\u2061","Afr":"\uD835\uDD04","afr":"\uD835\uDD1E","Agrave":"\u00C0","agrave":"\u00E0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03B1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2A3F","amp":"&","AMP":"&","andand":"\u2A55","And":"\u2A53","and":"\u2227","andd":"\u2A5C","andslope":"\u2A58","andv":"\u2A5A","ang":"\u2220","ange":"\u29A4","angle":"\u2220","angmsdaa":"\u29A8","angmsdab":"\u29A9","angmsdac":"\u29AA","angmsdad":"\u29AB","angmsdae":"\u29AC","angmsdaf":"\u29AD","angmsdag":"\u29AE","angmsdah":"\u29AF","angmsd":"\u2221","angrt":"\u221F","angrtvb":"\u22BE","angrtvbd":"\u299D","angsph":"\u2222","angst":"\u00C5","angzarr":"\u237C","Aogon":"\u0104","aogon":"\u0105","Aopf":"\uD835\uDD38","aopf":"\uD835\uDD52","apacir":"\u2A6F","ap":"\u2248","apE":"\u2A70","ape":"\u224A","apid":"\u224B","apos":"'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224A","Aring":"\u00C5","aring":"\u00E5","Ascr":"\uD835\uDC9C","ascr":"\uD835\uDCB6","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224D","Atilde":"\u00C3","atilde":"\u00E3","Auml":"\u00C4","auml":"\u00E4","awconint":"\u2233","awint":"\u2A11","backcong":"\u224C","backepsilon":"\u03F6","backprime":"\u2035","backsim":"\u223D","backsimeq":"\u22CD","Backslash":"\u2216","Barv":"\u2AE7","barvee":"\u22BD","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23B5","bbrktbrk":"\u23B6","bcong":"\u224C","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201E","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29B0","bepsi":"\u03F6","bernou":"\u212C","Bernoullis":"\u212C","Beta":"\u0392","beta":"\u03B2","beth":"\u2136","between":"\u226C","Bfr":"\uD835\uDD05","bfr":"\uD835\uDD1F","bigcap":"\u22C2","bigcirc":"\u25EF","bigcup":"\u22C3","bigodot":"\u2A00","bigoplus":"\u2A01","bigotimes":"\u2A02","bigsqcup":"\u2A06","bigstar":"\u2605","bigtriangledown":"\u25BD","bigtriangleup":"\u25B3","biguplus":"\u2A04","bigvee":"\u22C1","bigwedge":"\u22C0","bkarow":"\u290D","blacklozenge":"\u29EB","blacksquare":"\u25AA","blacktriangle":"\u25B4","blacktriangledown":"\u25BE","blacktriangleleft":"\u25C2","blacktriangleright":"\u25B8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20E5","bnequiv":"\u2261\u20E5","bNot":"\u2AED","bnot":"\u2310","Bopf":"\uD835\uDD39","bopf":"\uD835\uDD53","bot":"\u22A5","bottom":"\u22A5","bowtie":"\u22C8","boxbox":"\u29C9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250C","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252C","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229F","boxplus":"\u229E","boxtimes":"\u22A0","boxul":"\u2518","boxuL":"\u255B","boxUl":"\u255C","boxUL":"\u255D","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255A","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253C","boxvH":"\u256A","boxVh":"\u256B","boxVH":"\u256C","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251C","boxvR":"\u255E","boxVr":"\u255F","boxVR":"\u2560","bprime":"\u2035","breve":"\u02D8","Breve":"\u02D8","brvbar":"\u00A6","bscr":"\uD835\uDCB7","Bscr":"\u212C","bsemi":"\u204F","bsim":"\u223D","bsime":"\u22CD","bsolb":"\u29C5","bsol":"\\","bsolhsub":"\u27C8","bull":"\u2022","bullet":"\u2022","bump":"\u224E","bumpE":"\u2AAE","bumpe":"\u224F","Bumpeq":"\u224E","bumpeq":"\u224F","Cacute":"\u0106","cacute":"\u0107","capand":"\u2A44","capbrcup":"\u2A49","capcap":"\u2A4B","cap":"\u2229","Cap":"\u22D2","capcup":"\u2A47","capdot":"\u2A40","CapitalDifferentialD":"\u2145","caps":"\u2229\uFE00","caret":"\u2041","caron":"\u02C7","Cayleys":"\u212D","ccaps":"\u2A4D","Ccaron":"\u010C","ccaron":"\u010D","Ccedil":"\u00C7","ccedil":"\u00E7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2A4C","ccupssm":"\u2A50","Cdot":"\u010A","cdot":"\u010B","cedil":"\u00B8","Cedilla":"\u00B8","cemptyv":"\u29B2","cent":"\u00A2","centerdot":"\u00B7","CenterDot":"\u00B7","cfr":"\uD835\uDD20","Cfr":"\u212D","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03A7","chi":"\u03C7","circ":"\u02C6","circeq":"\u2257","circlearrowleft":"\u21BA","circlearrowright":"\u21BB","circledast":"\u229B","circledcirc":"\u229A","circleddash":"\u229D","CircleDot":"\u2299","circledR":"\u00AE","circledS":"\u24C8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25CB","cirE":"\u29C3","cire":"\u2257","cirfnint":"\u2A10","cirmid":"\u2AEF","cirscir":"\u29C2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201D","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2A74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2A6D","Congruent":"\u2261","conint":"\u222E","Conint":"\u222F","ContourIntegral":"\u222E","copf":"\uD835\uDD54","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\u00A9","COPY":"\u00A9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21B5","cross":"\u2717","Cross":"\u2A2F","Cscr":"\uD835\uDC9E","cscr":"\uD835\uDCB8","csub":"\u2ACF","csube":"\u2AD1","csup":"\u2AD0","csupe":"\u2AD2","ctdot":"\u22EF","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22DE","cuesc":"\u22DF","cularr":"\u21B6","cularrp":"\u293D","cupbrcap":"\u2A48","cupcap":"\u2A46","CupCap":"\u224D","cup":"\u222A","Cup":"\u22D3","cupcup":"\u2A4A","cupdot":"\u228D","cupor":"\u2A45","cups":"\u222A\uFE00","curarr":"\u21B7","curarrm":"\u293C","curlyeqprec":"\u22DE","curlyeqsucc":"\u22DF","curlyvee":"\u22CE","curlywedge":"\u22CF","curren":"\u00A4","curvearrowleft":"\u21B6","curvearrowright":"\u21B7","cuvee":"\u22CE","cuwed":"\u22CF","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232D","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21A1","dArr":"\u21D3","dash":"\u2010","Dashv":"\u2AE4","dashv":"\u22A3","dbkarow":"\u290F","dblac":"\u02DD","Dcaron":"\u010E","dcaron":"\u010F","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21CA","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2A77","deg":"\u00B0","Del":"\u2207","Delta":"\u0394","delta":"\u03B4","demptyv":"\u29B1","dfisht":"\u297F","Dfr":"\uD835\uDD07","dfr":"\uD835\uDD21","dHar":"\u2965","dharl":"\u21C3","dharr":"\u21C2","DiacriticalAcute":"\u00B4","DiacriticalDot":"\u02D9","DiacriticalDoubleAcute":"\u02DD","DiacriticalGrave":"`","DiacriticalTilde":"\u02DC","diam":"\u22C4","diamond":"\u22C4","Diamond":"\u22C4","diamondsuit":"\u2666","diams":"\u2666","die":"\u00A8","DifferentialD":"\u2146","digamma":"\u03DD","disin":"\u22F2","div":"\u00F7","divide":"\u00F7","divideontimes":"\u22C7","divonx":"\u22C7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231E","dlcrop":"\u230D","dollar":"$","Dopf":"\uD835\uDD3B","dopf":"\uD835\uDD55","Dot":"\u00A8","dot":"\u02D9","DotDot":"\u20DC","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22A1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222F","DoubleDot":"\u00A8","DoubleDownArrow":"\u21D3","DoubleLeftArrow":"\u21D0","DoubleLeftRightArrow":"\u21D4","DoubleLeftTee":"\u2AE4","DoubleLongLeftArrow":"\u27F8","DoubleLongLeftRightArrow":"\u27FA","DoubleLongRightArrow":"\u27F9","DoubleRightArrow":"\u21D2","DoubleRightTee":"\u22A8","DoubleUpArrow":"\u21D1","DoubleUpDownArrow":"\u21D5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21D3","DownArrowUpArrow":"\u21F5","DownBreve":"\u0311","downdownarrows":"\u21CA","downharpoonleft":"\u21C3","downharpoonright":"\u21C2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295E","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21BD","DownRightTeeVector":"\u295F","DownRightVectorBar":"\u2957","DownRightVector":"\u21C1","DownTeeArrow":"\u21A7","DownTee":"\u22A4","drbkarow":"\u2910","drcorn":"\u231F","drcrop":"\u230C","Dscr":"\uD835\uDC9F","dscr":"\uD835\uDCB9","DScy":"\u0405","dscy":"\u0455","dsol":"\u29F6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22F1","dtri":"\u25BF","dtrif":"\u25BE","duarr":"\u21F5","duhar":"\u296F","dwangle":"\u29A6","DZcy":"\u040F","dzcy":"\u045F","dzigrarr":"\u27FF","Eacute":"\u00C9","eacute":"\u00E9","easter":"\u2A6E","Ecaron":"\u011A","ecaron":"\u011B","Ecirc":"\u00CA","ecirc":"\u00EA","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042D","ecy":"\u044D","eDDot":"\u2A77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\uD835\uDD08","efr":"\uD835\uDD22","eg":"\u2A9A","Egrave":"\u00C8","egrave":"\u00E8","egs":"\u2A96","egsdot":"\u2A98","el":"\u2A99","Element":"\u2208","elinters":"\u23E7","ell":"\u2113","els":"\u2A95","elsdot":"\u2A97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25FB","emptyv":"\u2205","EmptyVerySmallSquare":"\u25AB","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014A","eng":"\u014B","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\uD835\uDD3C","eopf":"\uD835\uDD56","epar":"\u22D5","eparsl":"\u29E3","eplus":"\u2A71","epsi":"\u03B5","Epsilon":"\u0395","epsilon":"\u03B5","epsiv":"\u03F5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2A96","eqslantless":"\u2A95","Equal":"\u2A75","equals":"=","EqualTilde":"\u2242","equest":"\u225F","Equilibrium":"\u21CC","equiv":"\u2261","equivDD":"\u2A78","eqvparsl":"\u29E5","erarr":"\u2971","erDot":"\u2253","escr":"\u212F","Escr":"\u2130","esdot":"\u2250","Esim":"\u2A73","esim":"\u2242","Eta":"\u0397","eta":"\u03B7","ETH":"\u00D0","eth":"\u00F0","Euml":"\u00CB","euml":"\u00EB","euro":"\u20AC","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\uFB03","fflig":"\uFB00","ffllig":"\uFB04","Ffr":"\uD835\uDD09","ffr":"\uD835\uDD23","filig":"\uFB01","FilledSmallSquare":"\u25FC","FilledVerySmallSquare":"\u25AA","fjlig":"fj","flat":"\u266D","fllig":"\uFB02","fltns":"\u25B1","fnof":"\u0192","Fopf":"\uD835\uDD3D","fopf":"\uD835\uDD57","forall":"\u2200","ForAll":"\u2200","fork":"\u22D4","forkv":"\u2AD9","Fouriertrf":"\u2131","fpartint":"\u2A0D","frac12":"\u00BD","frac13":"\u2153","frac14":"\u00BC","frac15":"\u2155","frac16":"\u2159","frac18":"\u215B","frac23":"\u2154","frac25":"\u2156","frac34":"\u00BE","frac35":"\u2157","frac38":"\u215C","frac45":"\u2158","frac56":"\u215A","frac58":"\u215D","frac78":"\u215E","frasl":"\u2044","frown":"\u2322","fscr":"\uD835\uDCBB","Fscr":"\u2131","gacute":"\u01F5","Gamma":"\u0393","gamma":"\u03B3","Gammad":"\u03DC","gammad":"\u03DD","gap":"\u2A86","Gbreve":"\u011E","gbreve":"\u011F","Gcedil":"\u0122","Gcirc":"\u011C","gcirc":"\u011D","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2A8C","gel":"\u22DB","geq":"\u2265","geqq":"\u2267","geqslant":"\u2A7E","gescc":"\u2AA9","ges":"\u2A7E","gesdot":"\u2A80","gesdoto":"\u2A82","gesdotol":"\u2A84","gesl":"\u22DB\uFE00","gesles":"\u2A94","Gfr":"\uD835\uDD0A","gfr":"\uD835\uDD24","gg":"\u226B","Gg":"\u22D9","ggg":"\u22D9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2AA5","gl":"\u2277","glE":"\u2A92","glj":"\u2AA4","gnap":"\u2A8A","gnapprox":"\u2A8A","gne":"\u2A88","gnE":"\u2269","gneq":"\u2A88","gneqq":"\u2269","gnsim":"\u22E7","Gopf":"\uD835\uDD3E","gopf":"\uD835\uDD58","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22DB","GreaterFullEqual":"\u2267","GreaterGreater":"\u2AA2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2A7E","GreaterTilde":"\u2273","Gscr":"\uD835\uDCA2","gscr":"\u210A","gsim":"\u2273","gsime":"\u2A8E","gsiml":"\u2A90","gtcc":"\u2AA7","gtcir":"\u2A7A","gt":">","GT":">","Gt":"\u226B","gtdot":"\u22D7","gtlPar":"\u2995","gtquest":"\u2A7C","gtrapprox":"\u2A86","gtrarr":"\u2978","gtrdot":"\u22D7","gtreqless":"\u22DB","gtreqqless":"\u2A8C","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\uFE00","gvnE":"\u2269\uFE00","Hacek":"\u02C7","hairsp":"\u200A","half":"\u00BD","hamilt":"\u210B","HARDcy":"\u042A","hardcy":"\u044A","harrcir":"\u2948","harr":"\u2194","hArr":"\u21D4","harrw":"\u21AD","Hat":"^","hbar":"\u210F","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22B9","hfr":"\uD835\uDD25","Hfr":"\u210C","HilbertSpace":"\u210B","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21FF","homtht":"\u223B","hookleftarrow":"\u21A9","hookrightarrow":"\u21AA","hopf":"\uD835\uDD59","Hopf":"\u210D","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\uD835\uDCBD","Hscr":"\u210B","hslash":"\u210F","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224E","HumpEqual":"\u224F","hybull":"\u2043","hyphen":"\u2010","Iacute":"\u00CD","iacute":"\u00ED","ic":"\u2063","Icirc":"\u00CE","icirc":"\u00EE","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\u00A1","iff":"\u21D4","ifr":"\uD835\uDD26","Ifr":"\u2111","Igrave":"\u00CC","igrave":"\u00EC","ii":"\u2148","iiiint":"\u2A0C","iiint":"\u222D","iinfin":"\u29DC","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012A","imacr":"\u012B","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22B7","imped":"\u01B5","Implies":"\u21D2","incare":"\u2105","in":"\u2208","infin":"\u221E","infintie":"\u29DD","inodot":"\u0131","intcal":"\u22BA","int":"\u222B","Int":"\u222C","integers":"\u2124","Integral":"\u222B","intercal":"\u22BA","Intersection":"\u22C2","intlarhk":"\u2A17","intprod":"\u2A3C","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012E","iogon":"\u012F","Iopf":"\uD835\uDD40","iopf":"\uD835\uDD5A","Iota":"\u0399","iota":"\u03B9","iprod":"\u2A3C","iquest":"\u00BF","iscr":"\uD835\uDCBE","Iscr":"\u2110","isin":"\u2208","isindot":"\u22F5","isinE":"\u22F9","isins":"\u22F4","isinsv":"\u22F3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\u00CF","iuml":"\u00EF","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\uD835\uDD0D","jfr":"\uD835\uDD27","jmath":"\u0237","Jopf":"\uD835\uDD41","jopf":"\uD835\uDD5B","Jscr":"\uD835\uDCA5","jscr":"\uD835\uDCBF","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039A","kappa":"\u03BA","kappav":"\u03F0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041A","kcy":"\u043A","Kfr":"\uD835\uDD0E","kfr":"\uD835\uDD28","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040C","kjcy":"\u045C","Kopf":"\uD835\uDD42","kopf":"\uD835\uDD5C","Kscr":"\uD835\uDCA6","kscr":"\uD835\uDCC0","lAarr":"\u21DA","Lacute":"\u0139","lacute":"\u013A","laemptyv":"\u29B4","lagran":"\u2112","Lambda":"\u039B","lambda":"\u03BB","lang":"\u27E8","Lang":"\u27EA","langd":"\u2991","langle":"\u27E8","lap":"\u2A85","Laplacetrf":"\u2112","laquo":"\u00AB","larrb":"\u21E4","larrbfs":"\u291F","larr":"\u2190","Larr":"\u219E","lArr":"\u21D0","larrfs":"\u291D","larrhk":"\u21A9","larrlp":"\u21AB","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21A2","latail":"\u2919","lAtail":"\u291B","lat":"\u2AAB","late":"\u2AAD","lates":"\u2AAD\uFE00","lbarr":"\u290C","lBarr":"\u290E","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298B","lbrksld":"\u298F","lbrkslu":"\u298D","Lcaron":"\u013D","lcaron":"\u013E","Lcedil":"\u013B","lcedil":"\u013C","lceil":"\u2308","lcub":"{","Lcy":"\u041B","lcy":"\u043B","ldca":"\u2936","ldquo":"\u201C","ldquor":"\u201E","ldrdhar":"\u2967","ldrushar":"\u294B","ldsh":"\u21B2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27E8","LeftArrowBar":"\u21E4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21D0","LeftArrowRightArrow":"\u21C6","leftarrowtail":"\u21A2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27E6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21C3","LeftFloor":"\u230A","leftharpoondown":"\u21BD","leftharpoonup":"\u21BC","leftleftarrows":"\u21C7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21D4","leftrightarrows":"\u21C6","leftrightharpoons":"\u21CB","leftrightsquigarrow":"\u21AD","LeftRightVector":"\u294E","LeftTeeArrow":"\u21A4","LeftTee":"\u22A3","LeftTeeVector":"\u295A","leftthreetimes":"\u22CB","LeftTriangleBar":"\u29CF","LeftTriangle":"\u22B2","LeftTriangleEqual":"\u22B4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21BF","LeftVectorBar":"\u2952","LeftVector":"\u21BC","lEg":"\u2A8B","leg":"\u22DA","leq":"\u2264","leqq":"\u2266","leqslant":"\u2A7D","lescc":"\u2AA8","les":"\u2A7D","lesdot":"\u2A7F","lesdoto":"\u2A81","lesdotor":"\u2A83","lesg":"\u22DA\uFE00","lesges":"\u2A93","lessapprox":"\u2A85","lessdot":"\u22D6","lesseqgtr":"\u22DA","lesseqqgtr":"\u2A8B","LessEqualGreater":"\u22DA","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2AA1","lesssim":"\u2272","LessSlantEqual":"\u2A7D","LessTilde":"\u2272","lfisht":"\u297C","lfloor":"\u230A","Lfr":"\uD835\uDD0F","lfr":"\uD835\uDD29","lg":"\u2276","lgE":"\u2A91","lHar":"\u2962","lhard":"\u21BD","lharu":"\u21BC","lharul":"\u296A","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21C7","ll":"\u226A","Ll":"\u22D8","llcorner":"\u231E","Lleftarrow":"\u21DA","llhard":"\u296B","lltri":"\u25FA","Lmidot":"\u013F","lmidot":"\u0140","lmoustache":"\u23B0","lmoust":"\u23B0","lnap":"\u2A89","lnapprox":"\u2A89","lne":"\u2A87","lnE":"\u2268","lneq":"\u2A87","lneqq":"\u2268","lnsim":"\u22E6","loang":"\u27EC","loarr":"\u21FD","lobrk":"\u27E6","longleftarrow":"\u27F5","LongLeftArrow":"\u27F5","Longleftarrow":"\u27F8","longleftrightarrow":"\u27F7","LongLeftRightArrow":"\u27F7","Longleftrightarrow":"\u27FA","longmapsto":"\u27FC","longrightarrow":"\u27F6","LongRightArrow":"\u27F6","Longrightarrow":"\u27F9","looparrowleft":"\u21AB","looparrowright":"\u21AC","lopar":"\u2985","Lopf":"\uD835\uDD43","lopf":"\uD835\uDD5D","loplus":"\u2A2D","lotimes":"\u2A34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25CA","lozenge":"\u25CA","lozf":"\u29EB","lpar":"(","lparlt":"\u2993","lrarr":"\u21C6","lrcorner":"\u231F","lrhar":"\u21CB","lrhard":"\u296D","lrm":"\u200E","lrtri":"\u22BF","lsaquo":"\u2039","lscr":"\uD835\uDCC1","Lscr":"\u2112","lsh":"\u21B0","Lsh":"\u21B0","lsim":"\u2272","lsime":"\u2A8D","lsimg":"\u2A8F","lsqb":"[","lsquo":"\u2018","lsquor":"\u201A","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2AA6","ltcir":"\u2A79","lt":"<","LT":"<","Lt":"\u226A","ltdot":"\u22D6","lthree":"\u22CB","ltimes":"\u22C9","ltlarr":"\u2976","ltquest":"\u2A7B","ltri":"\u25C3","ltrie":"\u22B4","ltrif":"\u25C2","ltrPar":"\u2996","lurdshar":"\u294A","luruhar":"\u2966","lvertneqq":"\u2268\uFE00","lvnE":"\u2268\uFE00","macr":"\u00AF","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21A6","mapsto":"\u21A6","mapstodown":"\u21A7","mapstoleft":"\u21A4","mapstoup":"\u21A5","marker":"\u25AE","mcomma":"\u2A29","Mcy":"\u041C","mcy":"\u043C","mdash":"\u2014","mDDot":"\u223A","measuredangle":"\u2221","MediumSpace":"\u205F","Mellintrf":"\u2133","Mfr":"\uD835\uDD10","mfr":"\uD835\uDD2A","mho":"\u2127","micro":"\u00B5","midast":"*","midcir":"\u2AF0","mid":"\u2223","middot":"\u00B7","minusb":"\u229F","minus":"\u2212","minusd":"\u2238","minusdu":"\u2A2A","MinusPlus":"\u2213","mlcp":"\u2ADB","mldr":"\u2026","mnplus":"\u2213","models":"\u22A7","Mopf":"\uD835\uDD44","mopf":"\uD835\uDD5E","mp":"\u2213","mscr":"\uD835\uDCC2","Mscr":"\u2133","mstpos":"\u223E","Mu":"\u039C","mu":"\u03BC","multimap":"\u22B8","mumap":"\u22B8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20D2","nap":"\u2249","napE":"\u2A70\u0338","napid":"\u224B\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266E","naturals":"\u2115","natur":"\u266E","nbsp":"\u00A0","nbump":"\u224E\u0338","nbumpe":"\u224F\u0338","ncap":"\u2A43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2A6D\u0338","ncup":"\u2A42","Ncy":"\u041D","ncy":"\u043D","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21D7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200B","NegativeThickSpace":"\u200B","NegativeThinSpace":"\u200B","NegativeVeryThinSpace":"\u200B","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226B","NestedLessLess":"\u226A","NewLine":"\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\uD835\uDD11","nfr":"\uD835\uDD2B","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2A7E\u0338","nges":"\u2A7E\u0338","nGg":"\u22D9\u0338","ngsim":"\u2275","nGt":"\u226B\u20D2","ngt":"\u226F","ngtr":"\u226F","nGtv":"\u226B\u0338","nharr":"\u21AE","nhArr":"\u21CE","nhpar":"\u2AF2","ni":"\u220B","nis":"\u22FC","nisd":"\u22FA","niv":"\u220B","NJcy":"\u040A","njcy":"\u045A","nlarr":"\u219A","nlArr":"\u21CD","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219A","nLeftarrow":"\u21CD","nleftrightarrow":"\u21AE","nLeftrightarrow":"\u21CE","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2A7D\u0338","nles":"\u2A7D\u0338","nless":"\u226E","nLl":"\u22D8\u0338","nlsim":"\u2274","nLt":"\u226A\u20D2","nlt":"\u226E","nltri":"\u22EA","nltrie":"\u22EC","nLtv":"\u226A\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\u00A0","nopf":"\uD835\uDD5F","Nopf":"\u2115","Not":"\u2AEC","not":"\u00AC","NotCongruent":"\u2262","NotCupCap":"\u226D","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226F","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226B\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2A7E\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224E\u0338","NotHumpEqual":"\u224F\u0338","notin":"\u2209","notindot":"\u22F5\u0338","notinE":"\u22F9\u0338","notinva":"\u2209","notinvb":"\u22F7","notinvc":"\u22F6","NotLeftTriangleBar":"\u29CF\u0338","NotLeftTriangle":"\u22EA","NotLeftTriangleEqual":"\u22EC","NotLess":"\u226E","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226A\u0338","NotLessSlantEqual":"\u2A7D\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2AA2\u0338","NotNestedLessLess":"\u2AA1\u0338","notni":"\u220C","notniva":"\u220C","notnivb":"\u22FE","notnivc":"\u22FD","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2AAF\u0338","NotPrecedesSlantEqual":"\u22E0","NotReverseElement":"\u220C","NotRightTriangleBar":"\u29D0\u0338","NotRightTriangle":"\u22EB","NotRightTriangleEqual":"\u22ED","NotSquareSubset":"\u228F\u0338","NotSquareSubsetEqual":"\u22E2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22E3","NotSubset":"\u2282\u20D2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2AB0\u0338","NotSucceedsSlantEqual":"\u22E1","NotSucceedsTilde":"\u227F\u0338","NotSuperset":"\u2283\u20D2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2AFD\u20E5","npart":"\u2202\u0338","npolint":"\u2A14","npr":"\u2280","nprcue":"\u22E0","nprec":"\u2280","npreceq":"\u2AAF\u0338","npre":"\u2AAF\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219B","nrArr":"\u21CF","nrarrw":"\u219D\u0338","nrightarrow":"\u219B","nRightarrow":"\u21CF","nrtri":"\u22EB","nrtrie":"\u22ED","nsc":"\u2281","nsccue":"\u22E1","nsce":"\u2AB0\u0338","Nscr":"\uD835\uDCA9","nscr":"\uD835\uDCC3","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22E2","nsqsupe":"\u22E3","nsub":"\u2284","nsubE":"\u2AC5\u0338","nsube":"\u2288","nsubset":"\u2282\u20D2","nsubseteq":"\u2288","nsubseteqq":"\u2AC5\u0338","nsucc":"\u2281","nsucceq":"\u2AB0\u0338","nsup":"\u2285","nsupE":"\u2AC6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20D2","nsupseteq":"\u2289","nsupseteqq":"\u2AC6\u0338","ntgl":"\u2279","Ntilde":"\u00D1","ntilde":"\u00F1","ntlg":"\u2278","ntriangleleft":"\u22EA","ntrianglelefteq":"\u22EC","ntriangleright":"\u22EB","ntrianglerighteq":"\u22ED","Nu":"\u039D","nu":"\u03BD","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224D\u20D2","nvdash":"\u22AC","nvDash":"\u22AD","nVdash":"\u22AE","nVDash":"\u22AF","nvge":"\u2265\u20D2","nvgt":">\u20D2","nvHarr":"\u2904","nvinfin":"\u29DE","nvlArr":"\u2902","nvle":"\u2264\u20D2","nvlt":"<\u20D2","nvltrie":"\u22B4\u20D2","nvrArr":"\u2903","nvrtrie":"\u22B5\u20D2","nvsim":"\u223C\u20D2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21D6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\u00D3","oacute":"\u00F3","oast":"\u229B","Ocirc":"\u00D4","ocirc":"\u00F4","ocir":"\u229A","Ocy":"\u041E","ocy":"\u043E","odash":"\u229D","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2A38","odot":"\u2299","odsold":"\u29BC","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29BF","Ofr":"\uD835\uDD12","ofr":"\uD835\uDD2C","ogon":"\u02DB","Ograve":"\u00D2","ograve":"\u00F2","ogt":"\u29C1","ohbar":"\u29B5","ohm":"\u03A9","oint":"\u222E","olarr":"\u21BA","olcir":"\u29BE","olcross":"\u29BB","oline":"\u203E","olt":"\u29C0","Omacr":"\u014C","omacr":"\u014D","Omega":"\u03A9","omega":"\u03C9","Omicron":"\u039F","omicron":"\u03BF","omid":"\u29B6","ominus":"\u2296","Oopf":"\uD835\uDD46","oopf":"\uD835\uDD60","opar":"\u29B7","OpenCurlyDoubleQuote":"\u201C","OpenCurlyQuote":"\u2018","operp":"\u29B9","oplus":"\u2295","orarr":"\u21BB","Or":"\u2A54","or":"\u2228","ord":"\u2A5D","order":"\u2134","orderof":"\u2134","ordf":"\u00AA","ordm":"\u00BA","origof":"\u22B6","oror":"\u2A56","orslope":"\u2A57","orv":"\u2A5B","oS":"\u24C8","Oscr":"\uD835\uDCAA","oscr":"\u2134","Oslash":"\u00D8","oslash":"\u00F8","osol":"\u2298","Otilde":"\u00D5","otilde":"\u00F5","otimesas":"\u2A36","Otimes":"\u2A37","otimes":"\u2297","Ouml":"\u00D6","ouml":"\u00F6","ovbar":"\u233D","OverBar":"\u203E","OverBrace":"\u23DE","OverBracket":"\u23B4","OverParenthesis":"\u23DC","para":"\u00B6","parallel":"\u2225","par":"\u2225","parsim":"\u2AF3","parsl":"\u2AFD","part":"\u2202","PartialD":"\u2202","Pcy":"\u041F","pcy":"\u043F","percnt":"%","period":".","permil":"\u2030","perp":"\u22A5","pertenk":"\u2031","Pfr":"\uD835\uDD13","pfr":"\uD835\uDD2D","Phi":"\u03A6","phi":"\u03C6","phiv":"\u03D5","phmmat":"\u2133","phone":"\u260E","Pi":"\u03A0","pi":"\u03C0","pitchfork":"\u22D4","piv":"\u03D6","planck":"\u210F","planckh":"\u210E","plankv":"\u210F","plusacir":"\u2A23","plusb":"\u229E","pluscir":"\u2A22","plus":"+","plusdo":"\u2214","plusdu":"\u2A25","pluse":"\u2A72","PlusMinus":"\u00B1","plusmn":"\u00B1","plussim":"\u2A26","plustwo":"\u2A27","pm":"\u00B1","Poincareplane":"\u210C","pointint":"\u2A15","popf":"\uD835\uDD61","Popf":"\u2119","pound":"\u00A3","prap":"\u2AB7","Pr":"\u2ABB","pr":"\u227A","prcue":"\u227C","precapprox":"\u2AB7","prec":"\u227A","preccurlyeq":"\u227C","Precedes":"\u227A","PrecedesEqual":"\u2AAF","PrecedesSlantEqual":"\u227C","PrecedesTilde":"\u227E","preceq":"\u2AAF","precnapprox":"\u2AB9","precneqq":"\u2AB5","precnsim":"\u22E8","pre":"\u2AAF","prE":"\u2AB3","precsim":"\u227E","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2AB9","prnE":"\u2AB5","prnsim":"\u22E8","prod":"\u220F","Product":"\u220F","profalar":"\u232E","profline":"\u2312","profsurf":"\u2313","prop":"\u221D","Proportional":"\u221D","Proportion":"\u2237","propto":"\u221D","prsim":"\u227E","prurel":"\u22B0","Pscr":"\uD835\uDCAB","pscr":"\uD835\uDCC5","Psi":"\u03A8","psi":"\u03C8","puncsp":"\u2008","Qfr":"\uD835\uDD14","qfr":"\uD835\uDD2E","qint":"\u2A0C","qopf":"\uD835\uDD62","Qopf":"\u211A","qprime":"\u2057","Qscr":"\uD835\uDCAC","qscr":"\uD835\uDCC6","quaternions":"\u210D","quatint":"\u2A16","quest":"?","questeq":"\u225F","quot":"\"","QUOT":"\"","rAarr":"\u21DB","race":"\u223D\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221A","raemptyv":"\u29B3","rang":"\u27E9","Rang":"\u27EB","rangd":"\u2992","range":"\u29A5","rangle":"\u27E9","raquo":"\u00BB","rarrap":"\u2975","rarrb":"\u21E5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21A0","rArr":"\u21D2","rarrfs":"\u291E","rarrhk":"\u21AA","rarrlp":"\u21AC","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21A3","rarrw":"\u219D","ratail":"\u291A","rAtail":"\u291C","ratio":"\u2236","rationals":"\u211A","rbarr":"\u290D","rBarr":"\u290F","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298C","rbrksld":"\u298E","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201D","rdquor":"\u201D","rdsh":"\u21B3","real":"\u211C","realine":"\u211B","realpart":"\u211C","reals":"\u211D","Re":"\u211C","rect":"\u25AD","reg":"\u00AE","REG":"\u00AE","ReverseElement":"\u220B","ReverseEquilibrium":"\u21CB","ReverseUpEquilibrium":"\u296F","rfisht":"\u297D","rfloor":"\u230B","rfr":"\uD835\uDD2F","Rfr":"\u211C","rHar":"\u2964","rhard":"\u21C1","rharu":"\u21C0","rharul":"\u296C","Rho":"\u03A1","rho":"\u03C1","rhov":"\u03F1","RightAngleBracket":"\u27E9","RightArrowBar":"\u21E5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21D2","RightArrowLeftArrow":"\u21C4","rightarrowtail":"\u21A3","RightCeiling":"\u2309","RightDoubleBracket":"\u27E7","RightDownTeeVector":"\u295D","RightDownVectorBar":"\u2955","RightDownVector":"\u21C2","RightFloor":"\u230B","rightharpoondown":"\u21C1","rightharpoonup":"\u21C0","rightleftarrows":"\u21C4","rightleftharpoons":"\u21CC","rightrightarrows":"\u21C9","rightsquigarrow":"\u219D","RightTeeArrow":"\u21A6","RightTee":"\u22A2","RightTeeVector":"\u295B","rightthreetimes":"\u22CC","RightTriangleBar":"\u29D0","RightTriangle":"\u22B3","RightTriangleEqual":"\u22B5","RightUpDownVector":"\u294F","RightUpTeeVector":"\u295C","RightUpVectorBar":"\u2954","RightUpVector":"\u21BE","RightVectorBar":"\u2953","RightVector":"\u21C0","ring":"\u02DA","risingdotseq":"\u2253","rlarr":"\u21C4","rlhar":"\u21CC","rlm":"\u200F","rmoustache":"\u23B1","rmoust":"\u23B1","rnmid":"\u2AEE","roang":"\u27ED","roarr":"\u21FE","robrk":"\u27E7","ropar":"\u2986","ropf":"\uD835\uDD63","Ropf":"\u211D","roplus":"\u2A2E","rotimes":"\u2A35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2A12","rrarr":"\u21C9","Rrightarrow":"\u21DB","rsaquo":"\u203A","rscr":"\uD835\uDCC7","Rscr":"\u211B","rsh":"\u21B1","Rsh":"\u21B1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22CC","rtimes":"\u22CA","rtri":"\u25B9","rtrie":"\u22B5","rtrif":"\u25B8","rtriltri":"\u29CE","RuleDelayed":"\u29F4","ruluhar":"\u2968","rx":"\u211E","Sacute":"\u015A","sacute":"\u015B","sbquo":"\u201A","scap":"\u2AB8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2ABC","sc":"\u227B","sccue":"\u227D","sce":"\u2AB0","scE":"\u2AB4","Scedil":"\u015E","scedil":"\u015F","Scirc":"\u015C","scirc":"\u015D","scnap":"\u2ABA","scnE":"\u2AB6","scnsim":"\u22E9","scpolint":"\u2A13","scsim":"\u227F","Scy":"\u0421","scy":"\u0441","sdotb":"\u22A1","sdot":"\u22C5","sdote":"\u2A66","searhk":"\u2925","searr":"\u2198","seArr":"\u21D8","searrow":"\u2198","sect":"\u00A7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\uD835\uDD16","sfr":"\uD835\uDD30","sfrown":"\u2322","sharp":"\u266F","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\u00AD","Sigma":"\u03A3","sigma":"\u03C3","sigmaf":"\u03C2","sigmav":"\u03C2","sim":"\u223C","simdot":"\u2A6A","sime":"\u2243","simeq":"\u2243","simg":"\u2A9E","simgE":"\u2AA0","siml":"\u2A9D","simlE":"\u2A9F","simne":"\u2246","simplus":"\u2A24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2A33","smeparsl":"\u29E4","smid":"\u2223","smile":"\u2323","smt":"\u2AAA","smte":"\u2AAC","smtes":"\u2AAC\uFE00","SOFTcy":"\u042C","softcy":"\u044C","solbar":"\u233F","solb":"\u29C4","sol":"/","Sopf":"\uD835\uDD4A","sopf":"\uD835\uDD64","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\uFE00","sqcup":"\u2294","sqcups":"\u2294\uFE00","Sqrt":"\u221A","sqsub":"\u228F","sqsube":"\u2291","sqsubset":"\u228F","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25A1","Square":"\u25A1","SquareIntersection":"\u2293","SquareSubset":"\u228F","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25AA","squ":"\u25A1","squf":"\u25AA","srarr":"\u2192","Sscr":"\uD835\uDCAE","sscr":"\uD835\uDCC8","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22C6","Star":"\u22C6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03F5","straightphi":"\u03D5","strns":"\u00AF","sub":"\u2282","Sub":"\u22D0","subdot":"\u2ABD","subE":"\u2AC5","sube":"\u2286","subedot":"\u2AC3","submult":"\u2AC1","subnE":"\u2ACB","subne":"\u228A","subplus":"\u2ABF","subrarr":"\u2979","subset":"\u2282","Subset":"\u22D0","subseteq":"\u2286","subseteqq":"\u2AC5","SubsetEqual":"\u2286","subsetneq":"\u228A","subsetneqq":"\u2ACB","subsim":"\u2AC7","subsub":"\u2AD5","subsup":"\u2AD3","succapprox":"\u2AB8","succ":"\u227B","succcurlyeq":"\u227D","Succeeds":"\u227B","SucceedsEqual":"\u2AB0","SucceedsSlantEqual":"\u227D","SucceedsTilde":"\u227F","succeq":"\u2AB0","succnapprox":"\u2ABA","succneqq":"\u2AB6","succnsim":"\u22E9","succsim":"\u227F","SuchThat":"\u220B","sum":"\u2211","Sum":"\u2211","sung":"\u266A","sup1":"\u00B9","sup2":"\u00B2","sup3":"\u00B3","sup":"\u2283","Sup":"\u22D1","supdot":"\u2ABE","supdsub":"\u2AD8","supE":"\u2AC6","supe":"\u2287","supedot":"\u2AC4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27C9","suphsub":"\u2AD7","suplarr":"\u297B","supmult":"\u2AC2","supnE":"\u2ACC","supne":"\u228B","supplus":"\u2AC0","supset":"\u2283","Supset":"\u22D1","supseteq":"\u2287","supseteqq":"\u2AC6","supsetneq":"\u228B","supsetneqq":"\u2ACC","supsim":"\u2AC8","supsub":"\u2AD4","supsup":"\u2AD6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21D9","swarrow":"\u2199","swnwar":"\u292A","szlig":"\u00DF","Tab":"\t","target":"\u2316","Tau":"\u03A4","tau":"\u03C4","tbrk":"\u23B4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20DB","telrec":"\u2315","Tfr":"\uD835\uDD17","tfr":"\uD835\uDD31","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03B8","thetasym":"\u03D1","thetav":"\u03D1","thickapprox":"\u2248","thicksim":"\u223C","ThickSpace":"\u205F\u200A","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223C","THORN":"\u00DE","thorn":"\u00FE","tilde":"\u02DC","Tilde":"\u223C","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2A31","timesb":"\u22A0","times":"\u00D7","timesd":"\u2A30","tint":"\u222D","toea":"\u2928","topbot":"\u2336","topcir":"\u2AF1","top":"\u22A4","Topf":"\uD835\uDD4B","topf":"\uD835\uDD65","topfork":"\u2ADA","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25B5","triangledown":"\u25BF","triangleleft":"\u25C3","trianglelefteq":"\u22B4","triangleq":"\u225C","triangleright":"\u25B9","trianglerighteq":"\u22B5","tridot":"\u25EC","trie":"\u225C","triminus":"\u2A3A","TripleDot":"\u20DB","triplus":"\u2A39","trisb":"\u29CD","tritime":"\u2A3B","trpezium":"\u23E2","Tscr":"\uD835\uDCAF","tscr":"\uD835\uDCC9","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040B","tshcy":"\u045B","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226C","twoheadleftarrow":"\u219E","twoheadrightarrow":"\u21A0","Uacute":"\u00DA","uacute":"\u00FA","uarr":"\u2191","Uarr":"\u219F","uArr":"\u21D1","Uarrocir":"\u2949","Ubrcy":"\u040E","ubrcy":"\u045E","Ubreve":"\u016C","ubreve":"\u016D","Ucirc":"\u00DB","ucirc":"\u00FB","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21C5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296E","ufisht":"\u297E","Ufr":"\uD835\uDD18","ufr":"\uD835\uDD32","Ugrave":"\u00D9","ugrave":"\u00F9","uHar":"\u2963","uharl":"\u21BF","uharr":"\u21BE","uhblk":"\u2580","ulcorn":"\u231C","ulcorner":"\u231C","ulcrop":"\u230F","ultri":"\u25F8","Umacr":"\u016A","umacr":"\u016B","uml":"\u00A8","UnderBar":"_","UnderBrace":"\u23DF","UnderBracket":"\u23B5","UnderParenthesis":"\u23DD","Union":"\u22C3","UnionPlus":"\u228E","Uogon":"\u0172","uogon":"\u0173","Uopf":"\uD835\uDD4C","uopf":"\uD835\uDD66","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21D1","UpArrowDownArrow":"\u21C5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21D5","UpEquilibrium":"\u296E","upharpoonleft":"\u21BF","upharpoonright":"\u21BE","uplus":"\u228E","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03C5","Upsi":"\u03D2","upsih":"\u03D2","Upsilon":"\u03A5","upsilon":"\u03C5","UpTeeArrow":"\u21A5","UpTee":"\u22A5","upuparrows":"\u21C8","urcorn":"\u231D","urcorner":"\u231D","urcrop":"\u230E","Uring":"\u016E","uring":"\u016F","urtri":"\u25F9","Uscr":"\uD835\uDCB0","uscr":"\uD835\uDCCA","utdot":"\u22F0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25B5","utrif":"\u25B4","uuarr":"\u21C8","Uuml":"\u00DC","uuml":"\u00FC","uwangle":"\u29A7","vangrt":"\u299C","varepsilon":"\u03F5","varkappa":"\u03F0","varnothing":"\u2205","varphi":"\u03D5","varpi":"\u03D6","varpropto":"\u221D","varr":"\u2195","vArr":"\u21D5","varrho":"\u03F1","varsigma":"\u03C2","varsubsetneq":"\u228A\uFE00","varsubsetneqq":"\u2ACB\uFE00","varsupsetneq":"\u228B\uFE00","varsupsetneqq":"\u2ACC\uFE00","vartheta":"\u03D1","vartriangleleft":"\u22B2","vartriangleright":"\u22B3","vBar":"\u2AE8","Vbar":"\u2AEB","vBarv":"\u2AE9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22A2","vDash":"\u22A8","Vdash":"\u22A9","VDash":"\u22AB","Vdashl":"\u2AE6","veebar":"\u22BB","vee":"\u2228","Vee":"\u22C1","veeeq":"\u225A","vellip":"\u22EE","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200A","Vfr":"\uD835\uDD19","vfr":"\uD835\uDD33","vltri":"\u22B2","vnsub":"\u2282\u20D2","vnsup":"\u2283\u20D2","Vopf":"\uD835\uDD4D","vopf":"\uD835\uDD67","vprop":"\u221D","vrtri":"\u22B3","Vscr":"\uD835\uDCB1","vscr":"\uD835\uDCCB","vsubnE":"\u2ACB\uFE00","vsubne":"\u228A\uFE00","vsupnE":"\u2ACC\uFE00","vsupne":"\u228B\uFE00","Vvdash":"\u22AA","vzigzag":"\u299A","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2A5F","wedge":"\u2227","Wedge":"\u22C0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\uD835\uDD1A","wfr":"\uD835\uDD34","Wopf":"\uD835\uDD4E","wopf":"\uD835\uDD68","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\uD835\uDCB2","wscr":"\uD835\uDCCC","xcap":"\u22C2","xcirc":"\u25EF","xcup":"\u22C3","xdtri":"\u25BD","Xfr":"\uD835\uDD1B","xfr":"\uD835\uDD35","xharr":"\u27F7","xhArr":"\u27FA","Xi":"\u039E","xi":"\u03BE","xlarr":"\u27F5","xlArr":"\u27F8","xmap":"\u27FC","xnis":"\u22FB","xodot":"\u2A00","Xopf":"\uD835\uDD4F","xopf":"\uD835\uDD69","xoplus":"\u2A01","xotime":"\u2A02","xrarr":"\u27F6","xrArr":"\u27F9","Xscr":"\uD835\uDCB3","xscr":"\uD835\uDCCD","xsqcup":"\u2A06","xuplus":"\u2A04","xutri":"\u25B3","xvee":"\u22C1","xwedge":"\u22C0","Yacute":"\u00DD","yacute":"\u00FD","YAcy":"\u042F","yacy":"\u044F","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042B","ycy":"\u044B","yen":"\u00A5","Yfr":"\uD835\uDD1C","yfr":"\uD835\uDD36","YIcy":"\u0407","yicy":"\u0457","Yopf":"\uD835\uDD50","yopf":"\uD835\uDD6A","Yscr":"\uD835\uDCB4","yscr":"\uD835\uDCCE","YUcy":"\u042E","yucy":"\u044E","yuml":"\u00FF","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017A","Zcaron":"\u017D","zcaron":"\u017E","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017B","zdot":"\u017C","zeetrf":"\u2128","ZeroWidthSpace":"\u200B","Zeta":"\u0396","zeta":"\u03B6","zfr":"\uD835\uDD37","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21DD","zopf":"\uD835\uDD6B","Zopf":"\u2124","Zscr":"\uD835\uDCB5","zscr":"\uD835\uDCCF","zwj":"\u200D","zwnj":"\u200C"}
},{}],105:[function(require,module,exports){

'use strict';


/* eslint-disable no-bitwise */

var decodeCache = {};

function getDecodeCache(exclude) {
  var i, ch, cache = decodeCache[exclude];
  if (cache) { return cache; }

  cache = decodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);
    cache.push(ch);
  }

  for (i = 0; i < exclude.length; i++) {
    ch = exclude.charCodeAt(i);
    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
  }

  return cache;
}


// Decode percent-encoded string.
//
function decode(string, exclude) {
  var cache;

  if (typeof exclude !== 'string') {
    exclude = decode.defaultChars;
  }

  cache = getDecodeCache(exclude);

  return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
    var i, l, b1, b2, b3, b4, chr,
        result = '';

    for (i = 0, l = seq.length; i < l; i += 3) {
      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

      if (b1 < 0x80) {
        result += cache[b1];
        continue;
      }

      if ((b1 & 0xE0) === 0xC0 && (i + 3 < l)) {
        // 110xxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

        if ((b2 & 0xC0) === 0x80) {
          chr = ((b1 << 6) & 0x7C0) | (b2 & 0x3F);

          if (chr < 0x80) {
            result += '\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 3;
          continue;
        }
      }

      if ((b1 & 0xF0) === 0xE0 && (i + 6 < l)) {
        // 1110xxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
          chr = ((b1 << 12) & 0xF000) | ((b2 << 6) & 0xFC0) | (b3 & 0x3F);

          if (chr < 0x800 || (chr >= 0xD800 && chr <= 0xDFFF)) {
            result += '\ufffd\ufffd\ufffd';
          } else {
            result += String.fromCharCode(chr);
          }

          i += 6;
          continue;
        }
      }

      if ((b1 & 0xF8) === 0xF0 && (i + 9 < l)) {
        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
          chr = ((b1 << 18) & 0x1C0000) | ((b2 << 12) & 0x3F000) | ((b3 << 6) & 0xFC0) | (b4 & 0x3F);

          if (chr < 0x10000 || chr > 0x10FFFF) {
            result += '\ufffd\ufffd\ufffd\ufffd';
          } else {
            chr -= 0x10000;
            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
          }

          i += 9;
          continue;
        }
      }

      result += '\ufffd';
    }

    return result;
  });
}


decode.defaultChars   = ';/?:@&=+$,#';
decode.componentChars = '';


module.exports = decode;

},{}],106:[function(require,module,exports){

'use strict';


var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;

},{}],107:[function(require,module,exports){

'use strict';


module.exports = function format(url) {
  var result = '';

  result += url.protocol || '';
  result += url.slashes ? '//' : '';
  result += url.auth ? url.auth + '@' : '';

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']';
  } else {
    result += url.hostname || '';
  }

  result += url.port ? ':' + url.port : '';
  result += url.pathname || '';
  result += url.search || '';
  result += url.hash || '';

  return result;
};

},{}],108:[function(require,module,exports){
'use strict';


module.exports.encode = require('./encode');
module.exports.decode = require('./decode');
module.exports.format = require('./format');
module.exports.parse  = require('./parse');

},{"./decode":105,"./encode":106,"./format":107,"./parse":109}],109:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

//
// Changes from joyent/node:
//
// 1. No leading slash in paths,
//    e.g. in `url.parse('http://foo?bar')` pathname is ``, not `/`
//
// 2. Backslashes are not replaced with slashes,
//    so `http:\\example.org\` is treated like a relative path
//
// 3. Trailing colon is treated like a part of the path,
//    i.e. in `http://example.org:foo` pathname is `:foo`
//
// 4. Nothing is URL-encoded in the resulting object,
//    (in joyent/node some chars in auth and paths are encoded)
//
// 5. `url.parse()` does not have `parseQueryString` argument
//
// 6. Removed extraneous result properties: `host`, `path`, `query`, etc.,
//    which can be constructed using other parts of the url.
//


function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.pathname = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = [ '<', '>', '"', '`', ' ', '\r', '\n', '\t' ],

    // RFC 2396: characters not allowed for various reasons.
    unwise = [ '{', '}', '|', '\\', '^', '`' ].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = [ '\'' ].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = [ '%', '/', '?', ';', '#' ].concat(autoEscape),
    hostEndingChars = [ '/', '?', '#' ],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    /* eslint-disable no-script-url */
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    };
    /* eslint-enable no-script-url */

function urlParse(url, slashesDenoteHost) {
  if (url && url instanceof Url) { return url; }

  var u = new Url();
  u.parse(url, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, slashesDenoteHost) {
  var i, l, lowerProto, hec, slashes,
      rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    lowerProto = proto.toLowerCase();
    this.protocol = proto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = auth;
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
        hostEnd = hec;
      }
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) {
      hostEnd = rest.length;
    }

    if (rest[hostEnd - 1] === ':') { hostEnd--; }
    var host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost(host);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) { continue; }
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    }

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    rest = rest.slice(0, qm);
  }
  if (rest) { this.pathname = rest; }
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '';
  }

  return this;
};

Url.prototype.parseHost = function(host) {
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) { this.hostname = host; }
};

module.exports = urlParse;

},{}],110:[function(require,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],111:[function(require,module,exports){
module.exports=/[\0-\x1F\x7F-\x9F]/
},{}],112:[function(require,module,exports){
module.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
},{}],113:[function(require,module,exports){
module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
},{}],114:[function(require,module,exports){
module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
},{}],115:[function(require,module,exports){
'use strict';

exports.Any = require('./properties/Any/regex');
exports.Cc  = require('./categories/Cc/regex');
exports.Cf  = require('./categories/Cf/regex');
exports.P   = require('./categories/P/regex');
exports.Z   = require('./categories/Z/regex');

},{"./categories/Cc/regex":111,"./categories/Cf/regex":112,"./categories/P/regex":113,"./categories/Z/regex":114,"./properties/Any/regex":116}],116:[function(require,module,exports){
module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
},{}],117:[function(require,module,exports){
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

},{"./markdown-config":118,"./tutorial":119,"bespoke":14,"bespoke-backdrop":2,"bespoke-bullets":3,"bespoke-hash":4,"bespoke-keys":5,"bespoke-markdownit":6,"bespoke-math":7,"bespoke-progress":8,"bespoke-qrcode":9,"bespoke-scale":10,"bespoke-simple-overview":11,"bespoke-state":12,"bespoke-theme-sandy":1,"bespoke-touch":13}],118:[function(require,module,exports){
// markdownit plugins
const markdownItAnchor = require('markdown-it-anchor'),
  markdownItContainer = require('markdown-it-container'),
  markdownItDecorate = require('markdown-it-decorate'),
  markdownItDefList = require('markdown-it-deflist'),
  markdownItEmoji = require('markdown-it-emoji'),
  markdownItAbbr = require('markdown-it-abbr');

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

  slideClass: (slideEl, value) => slideEl.classList.add(value),

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

  playMediaOnActivation: (slide, { selector, delay = '1500'}) => {
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
  }
}

const extensions = [
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
  markdownItDefList,
  markdownItAbbr,
  markdownItDecorate,
  markdownItEmoji
];

exports.config = config;
exports.extensions = extensions;

},{"markdown-it-abbr":41,"markdown-it-anchor":42,"markdown-it-container":43,"markdown-it-decorate":44,"markdown-it-deflist":45,"markdown-it-emoji":46}],119:[function(require,module,exports){
var tutorial = {
    turnedOn: true,

    timer: 0,

    boundEvents: [],

    start: function(deck, el) {
      this.el = el;

      var appearances = localStorage.getItem('bespoke-tutorial-appeared') || 0;
      appearances = window.parseInt(appearances);

      if (appearances < 3) {
        // Listens for changes in the slide
        this.boundEvents.push(deck.on('next', this.deactivate.bind(this)));
        this.boundEvents.push(deck.on('prev', this.deactivate.bind(this)));

        this.timer = window.setTimeout(this.show.bind(this), 3000);
        localStorage.setItem('bespoke-tutorial-appeared', ++appearances);
      }
    },

    deactivate: function() {
      this.turnedOn = false;
      this.el.parentNode.removeChild(this.el);
      window.clearTimeout(this.timer);
      for (var i = 0; i < this.boundEvents.length; i++) {
        this.boundEvents[i]();
      }
    },

    show: function() {
      this.el.classList.add('tutorial-on');
    }
  };

module.exports = function(tutorialEl) {
  return function(deck) {
    tutorial.start(deck, tutorialEl);
  };
};

},{}]},{},[117])

//# sourceMappingURL=build.js.map
