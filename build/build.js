(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/*! bespoke-theme-sandy v1.0.0 © 2019 Flávio Coutinho, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;(t=(t=(t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).bespoke||(t.bespoke={})).theme||(t.theme={})).sandy=e()}}(function(){return function n(l,s,r){function p(t,e){if(!s[t]){if(!l[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(b)return b(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var a=s[t]={exports:{}};l[t][0].call(a.exports,function(e){return p(l[t][1][e]||e)},a,a.exports,n,l,s,r)}return s[t].exports}for(var b="function"==typeof require&&require,e=0;e<r.length;e++)p(r[e]);return p}({1:[function(e,t,o){var i=e("bespoke-classes"),a=e("insert-css");t.exports=function(e){var t=t="@import url(https://fonts.googleapis.com/css?family=Maitree:400,700|Roboto:400,700|Cousine);\n/*# sourceMappingURL=fonts.css.map */\n/*# sourceMappingURL=fonts.css.map */\n";return(e=e||{insertFonts:!0}).insertFonts&&a(t,{prepend:!0}),a('/*! normalize.css v3.0.0 | MIT License | git.io/normalize */\n@-webkit-keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@keyframes floating{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-25%);transform:translateY(-25%)}}@-webkit-keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@keyframes floated-element-shadow{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}to{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@-webkit-keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@keyframes bouncing-left{to{-webkit-transform:translateX(5%) scaleX(.96);transform:translateX(5%) scaleX(.96)}}@-webkit-keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}@keyframes circling{0%{-webkit-transform:rotate(0turn) translate(180px) rotate(0turn);transform:rotate(0turn) translate(180px) rotate(0turn)}to{-webkit-transform:rotate(1turn) translate(180px) rotate(-1turn);transform:rotate(1turn) translate(180px) rotate(-1turn)}}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}.figure-slides>p,body,figure.embedded-caption p{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,ol,section,summary,ul{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0;color:#209934;text-decoration:none}a:active,a:hover{outline:0}abbr[title]{border-bottom:initial}b{font-weight:700}dfn{font-style:italic}h1,mark{color:#000}h1{font-family:\'Maitree\',times,serif;font-size:2.5em}mark{background:#ff0}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}pre,samp{font-size:1em}pre{overflow:auto}samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend,pre>code{border:0;padding:0}textarea{overflow:auto}optgroup,strong{font-weight:700}table{border-collapse:collapse;border-spacing:0;border:2px solid gray;max-width:100%}td,th{border:1px solid gray}*{-webkit-box-sizing:border-box;box-sizing:border-box}@media screen{.bespoke-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;background-color:#f7f9fb;color:#333;font-size:24px}.bespoke-parent:not(.emphatic){-webkit-transition:background-color 400ms ease;transition:background-color 400ms ease}.bespoke-slide{position:absolute;width:1066.6666666666665px;height:600px;top:50%;left:50%;margin-left:-533.3333333333333px;margin-top:-300px;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-inactive .bespoke-bullet-inactive{-webkit-transition:opacity .4s ease;transition:opacity .4s ease}.bespoke-inactive:not(.bespoke-after-1):not(.bespoke-before-1):not(.bespoke-after-2):not(.bespoke-before-2){display:none}.emphatic{background-color:#3507a3}.emphatic,.emphatic h1,.emphatic h2,.emphatic h3,.emphatic h4,.emphatic h5,.emphatic h6{color:#fff}.emphatic strong{color:#38088e}}h2{font-size:1.5em}h3,ol.columns-3>li>h1,ol.columns-3>li>h2,ol.columns-3>li>h3,ol.columns-3>li>h4,ol.columns-3>li>h5,ol.columns-3>li>h6,ul.columns-3>li>h1,ul.columns-3>li>h2,ul.columns-3>li>h3,ul.columns-3>li>h4,ul.columns-3>li>h5,ul.columns-3>li>h6{font-size:1.25em}h4,h5,h6{font-size:1em}code,h2,h3,h4,h5,h6,pre{font-family:\'Roboto\',\'San Francisco\',helvetica,arial,sans-serif;color:#000}h1,h2,h3,h4,h5,h6{font-weight:400;margin:0 0 .25em;line-height:1em}li,p{font-size:24px;line-height:1.5em}strong{color:#3507a3}strong .alternate-color{color:#7b9c02}article{font-family:\'Roboto\',\'San Francisco\',helvetica,arial,sans-serif}a:hover{text-decoration:underline}code,pre{border:1px solid rgba(0,20,80,.1);border-radius:.15em;background:#fff;font-family:\'Cousine\',monospace;-webkit-transition:-webkit-box-shadow 200ms ease;transition:box-shadow 200ms ease;transition:box-shadow 200ms ease,-webkit-box-shadow 200ms ease}pre{max-width:1026.6666666666665px;padding:1em;-webkit-box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078);box-shadow:0 8px 16px rgba(0,20,80,.039),0 4px 16px rgba(0,0,0,.078)}pre:hover{-webkit-box-shadow:0 8px 32px rgba(0,20,80,.078),0 4px 24px rgba(0,0,0,.078);box-shadow:0 8px 32px rgba(0,20,80,.078),0 4px 24px rgba(0,0,0,.078)}code{font-size:.75em;background-color:#fff;padding:.25em;-webkit-box-shadow:0 4px 8px rgba(0,20,80,.039),0 2px 8px rgba(0,0,0,.078);box-shadow:0 4px 8px rgba(0,20,80,.039),0 2px 8px rgba(0,0,0,.078)}code:hover{-webkit-box-shadow:0 4px 24px rgba(0,20,80,.078),0 2px 24px rgba(0,0,0,.078);box-shadow:0 4px 24px rgba(0,20,80,.078),0 2px 24px rgba(0,0,0,.078)}pre>code{font-size:.83333em;background-color:transparent;border:initial}pre>code,pre>code:hover{-webkit-box-shadow:initial;box-shadow:initial}pre code span{word-wrap:break-word;word-break:break-all}pre.hljs{margin:auto}pre.hljs+pre.hljs{margin-top:1em}ol.no-list-icon,ul.no-list-icon{list-style-type:none}ol.columns-3,ul.columns-3{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}ol.columns-3>li,ul.columns-3>li{-webkit-box-flex:1;-ms-flex:1;flex:1}ol.columns-3>li:not(:last-of-type),ul.columns-3>li:not(:last-of-type){margin-right:1em}dd,dt{margin-bottom:.5em}dt{float:left;clear:left;width:10em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;font-weight:700;padding-right:1em;position:relative}dd{margin-left:10.5em}dl.width-40>dt{width:40%}dl.width-40>dd{margin-left:42%}dl.width-50>dt{width:50%}dl.width-50>dd{margin-left:52%}del{color:gray}tr{background-color:rgba(255,255,255,.7);border:1px solid rgba(0,0,0,.4)}tr:nth-of-type(even)>td{background-color:rgba(255,255,255,.4)}td{padding:6px}th{color:#fff;padding:10px;background-color:#333}td:not(:last-child),th:not(:last-child){border-right:1px solid rgba(0,0,0,.2)}thead>tr{background-color:#555;color:#fff}blockquote{margin:.25em 0;padding:.25em 40px;background:#f5f5f5;-webkit-box-shadow:4px 4px 4px silver;box-shadow:4px 4px 4px silver;line-height:1.45;font-size:18px;font-family:Georgia,serif;font-style:italic;color:#383838;border:1px solid silver}blockquote.centered{margin-left:auto;margin-right:auto}blockquote>p{margin:.5em auto}blockquote::before{content:"\\201C";display:block;position:absolute;left:-.25em;top:-.25em;font-size:80px;color:#7a7a7a}blockquote cite{display:block;margin-top:5px;font-size:75%;color:#999}blockquote cite::before{content:"\\2014 \\2009"}kbd{padding:.1em .6em;font-size:.8em;border:1px solid #ccc;font-family:Consolas,Menlo,Monaco,monospace;background-color:#f7f7f7;color:#333;-webkit-box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 4px 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;border-radius:3px;display:inline-block;margin:0 .1em;text-shadow:0 1px 0 #fff;line-height:1.3;white-space:nowrap;top:0;-webkit-transition:top 40ms ease-out,-webkit-box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out;transition:top 40ms ease-out,box-shadow 40ms ease-out,-webkit-box-shadow 40ms ease-out}kbd:hover{top:4px;-webkit-box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset;box-shadow:0 0 0 rgba(0,0,0,.2),0 0 0 2px #fff inset}figcaption{background-color:#f5f5f5;padding:5px;margin-bottom:3px}blockquote,figure.embedded-caption,kbd{position:relative}figure.embedded-caption figcaption{position:absolute;background-color:rgba(0,0,0,.25)}figure.embedded-caption figcaption.caption-bottom{bottom:1em}figure.embedded-caption figcaption.caption-top{top:1em;left:0;right:0}figure.embedded-caption figcaption.caption-bottom{left:0;right:0}.push-code-right>code,img[alt$=right]{float:right}.push-code-left>code,img[alt$=left]{float:left}.push-right{float:right;margin-left:20px}.push-left{float:left;margin-right:20px}.push-code-right pre{float:right;clear:right}.push-code-left pre{float:left;clear:left}.figure-slides{position:relative}.figure-slides.clean .bespoke-bullet:not(.bespoke-bullet-current){visibility:hidden}.figure-step:not(:first-child){position:absolute;top:0;left:0}a.bookmarklet{border-radius:5px;border:2px solid silver;padding:4px 7px;background-color:rgba(255,255,255,.1);-webkit-transition:all 200ms ease-out;transition:all 200ms ease-out}a.bookmarklet:hover{text-decoration:none;background-color:#b66c7e;color:#ddd;border-color:#333;cursor:move}input.switch:empty{display:block;margin-left:-999px}input.switch:empty~label{position:relative;float:left;line-height:1.6em;text-indent:4em;margin:.2em 0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input.switch:empty~label:after,input.switch:empty~label:before{position:absolute;display:block;top:0;bottom:0;left:0;content:\' \';width:3.6em;background-color:#c33;border-radius:.3em;-webkit-box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);box-shadow:inset 0 .2em 0 rgba(0,0,0,.3);-webkit-transition:all 100ms ease-in;transition:all 100ms ease-in}input.switch:empty~label:after{width:1.4em;top:.1em;bottom:.1em;margin-left:.1em;background-color:#fff;border-radius:.15em;-webkit-box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2);box-shadow:inset 0 -.2em 0 rgba(0,0,0,.2)}input.switch:checked~label:before{background-color:#393}input.switch:checked~label:after{margin-left:2.1em}img.full-width{width:100%}img.large-width{width:80%}img.medium-width{width:60%}img.small-width{width:40%}img.full-height{height:100%}img.huge-height{height:80%}img.large-height{height:60%}img.medium-height{height:40%}img.small-height{height:20%}img.block{display:block}.floating-portrait-container *,.portrait,.portrait img{display:inline-block;width:150px;height:150px;border-radius:50%}.floating-portrait-container * figcaption,.portrait figcaption,.portrait img figcaption{background-color:transparent}.floating-portrait-container{position:relative}.floating-portrait-container *{margin:0;-webkit-animation:floating 2s ease-in-out 0s infinite alternate;animation:floating 2s ease-in-out 0s infinite alternate}.floating-portrait-container::after{content:" ";position:absolute;width:100%;height:20%;left:0;right:0;bottom:-20%;background:radial-gradient(ellipse closest-side,rgba(21,21,21,.25) 0%,rgba(255,255,255,0) 100%);z-index:-1;-webkit-animation:floated-element-shadow 2s ease-in-out 0s infinite alternate;animation:floated-element-shadow 2s ease-in-out 0s infinite alternate}.flips{-webkit-transition:-webkit-transform 600ms ease-out;transition:transform 600ms ease-out;transition:transform 600ms ease-out,-webkit-transform 600ms ease-out}.flips *{margin:0}.flips:hover{-webkit-transform:rotateY(720deg);transform:rotateY(720deg)}.portrait{shape-outside:circle(50%)}.contain{max-width:100%;max-height:100%}.half-width{width:50%}.three-quarter-width{width:75%}img.centered{display:block;margin-left:auto;margin-right:auto}.full-width{width:100%}.center-aligned{text-align:center}.centered{margin-left:auto;margin-right:auto}.emoji{height:1em;width:1em;vertical-align:middle}.on-line{height:1em;line-height:1em}.no-margin{margin:0}.no-padding{padding:0}.full-page-video-caption{position:absolute;bottom:30px;font-size:.75em;left:50%;width:16em;text-align:center;margin-left:-8em;padding:0;background-color:rgba(255,255,8,.65);border-radius:.25em;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2);box-shadow:3px 3px 3px rgba(0,0,0,.2)}.bullet-no-anim{-webkit-transition:none!important;transition:none!important}.full-width-slides,.full-width-slides img{max-width:100%}.bordered{border:1px solid rgba(0,0,0,.5)}.rounded{border-radius:4px}.clearer{clear:both}.compact-code pre,.compact-code~pre{line-height:1em}.compact-code-more pre,.compact-code-more~pre{line-height:1em;font-size:75%}.code-split-2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.code-split-2 pre.hljs{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-top:0;margin-bottom:0}.code-split-2 pre.hljs:not(:last-of-type){border-right:3px double #fff}.code-split-2 pre.hljs+pre.hljs{margin-top:0}.horizontal-list{list-style:none}.horizontal-list>li{display:inline-block;width:25%;margin:0 4.5% 0 0;vertical-align:middle}.horizontal-list>li:last-of-type{margin:0}.multi-column-list-2,.multi-column-list-3{padding-left:0;-webkit-column-count:2;column-count:2;list-style-position:inside}.multi-column-list-3{-webkit-column-count:3;column-count:3}.multi-column-list-4,.multi-column-list-5{padding-left:0;-webkit-column-count:4;column-count:4;list-style-position:inside}.multi-column-list-5{-webkit-column-count:5;column-count:5}.horizontal-list-flex,.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-ms-flexbox;display:flex}.horizontal-list-flex{-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-split-2,.layout-split-3,.layout-split-4,.layout-split-5{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:100%;width:100%}.layout-split-2>section{width:50%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-3>section,.layout-split-4>section,.layout-split-5>section{width:33.33333333333333%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.layout-split-4>section,.layout-split-5>section{width:25%}.layout-split-5>section{width:20%}.item-code-with-image,.item-code-with-result{padding-left:0;list-style-type:none}.item-code-with-image li,.item-code-with-result li{clear:right;margin-bottom:1em}.item-code-with-image li>.result,.item-code-with-image li>img,.item-code-with-result li>.result,.item-code-with-result li>img{float:right;margin-left:1em}.note{border:1px solid #b8860b;list-style-type:none;border-radius:5px;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,.2);box-shadow:3px 3px 3px rgba(0,0,0,.2);padding:.3em .5em;background:-webkit-gradient(linear,left top,right bottom,from(#ffffe0),to(#fff176));background:linear-gradient(to right bottom,#ffffe0,#fff176)}.note::before{content:"\\26A0";margin-right:1rem;color:#000;border:inherit;border-radius:50%;width:1em;height:1em;display:inline-block;text-align:center;line-height:.75em;background:#fff;font-size:2em;-webkit-box-shadow:inherit;box-shadow:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.note strong{color:#b8860b}.badge{display:inline-block;background-color:#fff;border-radius:4px;border:1px solid #333;color:#666;font-size:75%;line-height:1em;padding:.1em .2em}.badge.type1{color:teal;border-color:teal}.badge.type2{color:#6495ed;border-color:#6495ed}.bouncing-left{-webkit-animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate;animation:bouncing-left .8s cubic-bezier(.22,.61,.36,1) 0s infinite alternate}.delay-1{-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-transition-delay:.2s;transition-delay:.2s}.delay-2{-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-transition-delay:.4s;transition-delay:.4s}.delay-3{-webkit-animation-delay:.6s;animation-delay:.6s;-webkit-transition-delay:.6s;transition-delay:.6s}.delay-4{-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-transition-delay:.8s;transition-delay:.8s}.delay-5{-webkit-animation-delay:1s;animation-delay:1s;-webkit-transition-delay:1s;transition-delay:1s}.delay-6{-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-transition-delay:1.2s;transition-delay:1.2s}@media screen{.transition-sliding,.transition-subtle{overflow:hidden}.transition-sliding .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity .4s ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity .4s ease;transition:transform 400ms ease,opacity .4s ease,-webkit-transform 400ms ease}.transition-sliding .bespoke-before{-webkit-transform:translate3d(-101%,0,0);transform:translate3d(-101%,0,0)}.transition-sliding .bespoke-after{-webkit-transform:translate3d(101%,0,0);transform:translate3d(101%,0,0)}.bespoke-slide,.transition-giant-wheel .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:opacity 400ms ease,-webkit-transform 400ms ease;transition:transform 400ms ease,opacity 400ms ease;transition:transform 400ms ease,opacity 400ms ease,-webkit-transform 400ms ease}.bespoke-before{-webkit-transform:translate3d(-10%,0,0);transform:translate3d(-10%,0,0)}.bespoke-after{-webkit-transform:translate3d(10%,0,0);transform:translate3d(10%,0,0)}.transition-book,.transition-giant-wheel{overflow:hidden}.transition-giant-wheel .bespoke-slide{-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:50% -100%;transform-origin:50% -100%}.transition-giant-wheel .bespoke-before{-webkit-transform:rotateZ(15deg);transform:rotateZ(15deg)}.transition-giant-wheel .bespoke-after{-webkit-transform:rotateZ(-15deg);transform:rotateZ(-15deg)}.transition-book .bespoke-slide{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:-webkit-transform 400ms ease;transition:transform 400ms ease;transition:transform 400ms ease,-webkit-transform 400ms ease;-webkit-transform-origin:0 0;transform-origin:0 0}.transition-book .bespoke-before{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}.transition-book .bespoke-after{-webkit-transform:rotateY(10deg);transform:rotateY(10deg)}}.layout-title.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.layout-title.bespoke-slide h1{-webkit-box-flex:.65;-ms-flex:.65;flex:.65;margin:0;padding:.25em;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;color:#fff;text-align:left;text-shadow:.025em .025em #000}.layout-title.bespoke-slide h1::before{content:"";position:absolute;left:0;right:0;top:0;bottom:35%;background-size:cover;background-position:50% 100%;z-index:-1}.layout-title.bespoke-slide h2{-webkit-box-flex:.25;-ms-flex:.25;flex:.25;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;padding:.25em;text-align:right;color:#000}.layout-section-header.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-section-header.bespoke-slide::after,.layout-section-header.bespoke-slide::before{content:"";position:absolute;top:0;bottom:0;width:50%}.layout-section-header.bespoke-slide::after{z-index:-1}.layout-section-header.bespoke-slide::before{left:0;-webkit-box-shadow:10px 0 10px rgba(0,0,0,.2);box-shadow:10px 0 10px rgba(0,0,0,.2);z-index:0}.layout-section-header.bespoke-slide::after{right:0;background-color:#fff;background-size:cover}.layout-section-header.bespoke-slide h1+:not(h2),.layout-section-header.bespoke-slide h1+h2~:not(.content){-webkit-box-flex:1;-ms-flex:1;flex:1}.layout-section-header.bespoke-slide .content{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;text-shadow:.05em .05em #000}.layout-section-header.bespoke-slide .content strong{color:#8a5cf8}.layout-section-header.bespoke-slide .content>img{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;justify-self:center;-ms-flex-item-align:center;align-self:center}.layout-section-header.bespoke-slide .content li,.layout-section-header.bespoke-slide .content p{display:inline}.layout-section-header.bespoke-slide .content p::after{content:" ";display:block;margin-bottom:.5em}.layout-section-header.bespoke-slide .content li::before{content:" ";display:list-item;float:left}.layout-section-header.bespoke-slide .content li::after{content:" ";display:block}.layout-section-header.bespoke-slide>*{width:50%;padding:0 1em}.layout-section-header.bespoke-slide>ol,.layout-section-header.bespoke-slide>ul{padding-left:2em}.layout-section-header.bespoke-slide h1,.layout-section-header.bespoke-slide h2{margin:0;padding:.25em;text-align:left}.layout-section-header.bespoke-slide h1{-webkit-box-flex:.25;-ms-flex:.25;flex:.25;font-weight:700}.layout-section-header.bespoke-slide h2{-webkit-box-flex:.75;-ms-flex:.75;flex:.75;color:inherit}.layout-2-column-content.bespoke-slide,.layout-regular.bespoke-slide,.layout-stripe.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem}.layout-regular.bespoke-slide>h1,.layout-regular.bespoke-slide>h2{font-size:2em}.layout-regular.bespoke-slide h1,.layout-regular.bespoke-slide h2,.layout-regular.bespoke-slide h3,.layout-regular.bespoke-slide h4,.layout-regular.bespoke-slide h5,.layout-regular.bespoke-slide h6{margin:0 0 .75em;padding:0}.layout-stripe.bespoke-slide>h1,.layout-stripe.bespoke-slide>h2{font-size:2em}.layout-stripe.bespoke-slide .stripe{width:100%;height:3em;-o-object-fit:contain;object-fit:contain;background-size:5em;background-repeat:repeat-x;margin-bottom:2em}.layout-stripe.bespoke-slide h1,.layout-stripe.bespoke-slide h2,.layout-stripe.bespoke-slide h3,.layout-stripe.bespoke-slide h4,.layout-stripe.bespoke-slide h5,.layout-stripe.bespoke-slide h6{-ms-flex-item-align:center;align-self:center}.layout-2-column-content.bespoke-slide{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content.bespoke-slide>h1,.layout-2-column-content.bespoke-slide>h2{font-size:2em}.layout-2-column-content.bespoke-slide h1,.layout-2-column-content.bespoke-slide h2,.layout-2-column-content.bespoke-slide h3,.layout-2-column-content.bespoke-slide h4,.layout-2-column-content.bespoke-slide h5,.layout-2-column-content.bespoke-slide h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-content.bespoke-slide>*+*{width:49%;margin-left:1%;margin-right:0}.layout-2-column-content.bespoke-slide>*+::last-child,.layout-2-column-highlight-and-list>*+::last-child{margin-left:0}.layout-centered-horizontal.bespoke-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1.5rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.layout-2-column-content-zigzag.bespoke-slide>h1,.layout-2-column-content-zigzag.bespoke-slide>h2,.layout-centered-horizontal.bespoke-slide>h1,.layout-centered-horizontal.bespoke-slide>h2,.layout-regular-block.bespoke-slide>h1,.layout-regular-block.bespoke-slide>h2,.layout-regular-horizontal.bespoke-slide>h1,.layout-regular-horizontal.bespoke-slide>h2{font-size:2em}.layout-regular-horizontal.bespoke-slide{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-2-column-content-zigzag.bespoke-slide,.layout-regular-block.bespoke-slide,.layout-regular-horizontal.bespoke-slide,[class*=layout-2-column-content-]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;padding:1.5rem;align-items:flex-start}.layout-regular-block.bespoke-slide{display:block}.layout-2-column-content-zigzag.bespoke-slide,[class*=layout-2-column-content-]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.layout-2-column-content-zigzag.bespoke-slide h1,.layout-2-column-content-zigzag.bespoke-slide h2{width:100%}.layout-2-column-content-zigzag.bespoke-slide>:not(:first-child){width:48%}.layout-2-column-content-result.bespoke-slide{display:-webkit-box;display:-ms-flexbox;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:1.5rem;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.layout-2-column-content-result.bespoke-slide>h1,.layout-2-column-content-result.bespoke-slide>h2,.layout-2-column-highlight-and-list>h1,.layout-2-column-highlight-and-list>h2,[class*=layout-2-column-content-]>h1,[class*=layout-2-column-content-]>h2{font-size:2em}.layout-2-column-content-result.bespoke-slide>*{width:48%}[class*=layout-2-column-content-]>:first-child{width:100%;-ms-flex-item-align:end;align-self:flex-end}[class*=layout-2-column-content-]>pre{max-height:calc(100% - .25em - 1.5em - 24px - 4em)}.layout-2-column-highlight-and-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-perspective:900px;perspective:900px}.layout-2-column-highlight-and-list h1,.layout-2-column-highlight-and-list h2,.layout-2-column-highlight-and-list h3,.layout-2-column-highlight-and-list h4,.layout-2-column-highlight-and-list h5,.layout-2-column-highlight-and-list h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-2-column-highlight-and-list>:nth-child(2){width:30%;-webkit-box-shadow:20px 20px 20px rgba(0,0,0,.2);box-shadow:20px 20px 20px rgba(0,0,0,.2);-webkit-transition:all 500ms ease 400ms;transition:all 500ms ease 400ms;opacity:.5;-webkit-transform:scale(.75);transform:scale(.75);-webkit-transform-origin:right;transform-origin:right;margin-top:1em}.layout-2-column-highlight-and-list>:nth-child(2)>img,.layout-tall-figure-left>:nth-child(2)>img,.layout-tall-figure-right>:nth-child(2)>img{max-width:100%;max-height:100%}.layout-2-column-highlight-and-list.bespoke-active>:nth-child(2){-webkit-transform:rotateY(30deg) scale(1);transform:rotateY(30deg) scale(1);opacity:1}.layout-2-column-highlight-and-list>*+*{width:60%;margin-left:1%;margin-right:0}.layout-3-column-element-with-titles-expansible{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.layout-3-column-element-with-titles-expansible>*{width:calc(33% - 1rem)}.layout-3-column-element-with-titles-expansible h1,.layout-3-column-element-with-titles-expansible h2,.layout-3-column-element-with-titles-expansible h3,.layout-3-column-element-with-titles-expansible h4,.layout-3-column-element-with-titles-expansible h5,.layout-3-column-element-with-titles-expansible h6{margin:auto 0}.layout-3-column-element-with-titles-expansible h1:not(:last-of-type),.layout-3-column-element-with-titles-expansible h2:not(:last-of-type),.layout-3-column-element-with-titles-expansible h3:not(:last-of-type),.layout-3-column-element-with-titles-expansible h4:not(:last-of-type),.layout-3-column-element-with-titles-expansible h5:not(:last-of-type),.layout-3-column-element-with-titles-expansible h6:not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n){height:calc(100% - 2.5em);margin:0;-webkit-transition:all 100ms ease;transition:all 100ms ease;position:relative}.layout-3-column-element-with-titles-expansible>:nth-child(2n):not(:last-of-type){margin-right:1rem}.layout-3-column-element-with-titles-expansible>:nth-child(2n):hover{left:0;width:100%;z-index:1}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2){-webkit-transition-duration:50ms;transition-duration:50ms}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(2):hover{left:-33%}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3){-webkit-transition:none;transition:none}.layout-3-column-element-with-titles-expansible>:nth-child(2n):nth-of-type(3):hover{left:-67%}.layout-main-point.bespoke-slide{background-image:-webkit-gradient(linear,left top,right bottom,from(#3507a3),to(#1d045a));background-image:linear-gradient(to right bottom,#3507a3,#1d045a)}.layout-main-point.bespoke-slide h1,.layout-main-point.bespoke-slide h2,.layout-main-point.bespoke-slide h3,.layout-main-point.bespoke-slide h4,.layout-main-point.bespoke-slide h5,.layout-main-point.bespoke-slide h6{color:#fff}.layout-circling-balloons h1,.layout-circling-balloons h2,.layout-circling-balloons h3,.layout-circling-balloons h4,.layout-circling-balloons h5,.layout-circling-balloons h6{z-index:1}.layout-circling-balloons>ul{position:absolute;left:0;top:0;width:100%;height:100%;margin:0}.layout-circling-balloons>ul>li{position:absolute;width:200px;height:200px;left:calc(50% - 100px);top:calc(50% - 100px);padding:0;margin:0;border-radius:50%;background:gold;overflow:hidden;list-style-type:none;-webkit-transition:all 250ms ease;transition:all 250ms ease;-webkit-animation:circling 36s linear 0s infinite;animation:circling 36s linear 0s infinite}.layout-circling-balloons>ul>li:nth-of-type(1){-webkit-animation-delay:0s;animation-delay:0s}.layout-circling-balloons>ul>li:nth-of-type(2){-webkit-animation-delay:-12s;animation-delay:-12s}.layout-circling-balloons>ul>li:nth-of-type(3){-webkit-animation-delay:-24s;animation-delay:-24s}.layout-circling-balloons>ul>li>p:first-child{margin:0}.layout-circling-balloons>ul>li>img:first-child,.layout-circling-balloons>ul>li>p:first-child{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transition:all 250ms ease;transition:all 250ms ease}.layout-circling-balloons>ul>li>img:first-child,.layout-circling-balloons>ul>li>img:first-child img,.layout-circling-balloons>ul>li>p:first-child img{display:block;width:125px;height:125px;margin:37.5px auto}.layout-circling-balloons>ul>li>:nth-child(2){margin-top:200px;padding:1em}.layout-circling-balloons>ul>li:hover{width:26em;height:10em;top:calc(50% - 5em);left:calc(50% - 13em);border-radius:2em;overflow:visible;z-index:2}.layout-circling-balloons>ul>li:hover>:first-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.layout-circling-balloons>ul>li:hover>:nth-child(2){margin-top:1em}.layout-circling-balloons>ul:hover>li{-webkit-animation-play-state:paused;animation-play-state:paused}.layout-tall-figure-left,.layout-tall-figure-right{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:1.5rem;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout-tall-figure-left>h1,.layout-tall-figure-left>h2,.layout-tall-figure-right>h1,.layout-tall-figure-right>h2{font-size:2em}.layout-tall-figure-left h1,.layout-tall-figure-left h2,.layout-tall-figure-left h3,.layout-tall-figure-left h4,.layout-tall-figure-left h5,.layout-tall-figure-left h6,.layout-tall-figure-right h1,.layout-tall-figure-right h2,.layout-tall-figure-right h3,.layout-tall-figure-right h4,.layout-tall-figure-right h5,.layout-tall-figure-right h6{-ms-flex-preferred-size:100%;flex-basis:100%}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(2){-ms-flex-preferred-size:30%;flex-basis:30%}.layout-tall-figure-left>:nth-child(3),.layout-tall-figure-right>:nth-child(3){-ms-flex-preferred-size:70%;flex-basis:70%}.layout-tall-figure-right>:nth-child(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.layout-tall-figure-left>:nth-child(2),.layout-tall-figure-right>:nth-child(3){-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.layout-tall-figure-left>:nth-child(3){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.show-active-slide-and-previous .bespoke-before-1{-webkit-transform:translate3d(-30%,0,-250px) rotateY(10deg);transform:translate3d(-30%,0,-250px) rotateY(10deg);opacity:1}.show-active-slide-and-previous .bespoke-active{-webkit-transform:translate3d(30%,0,-250px) rotateY(-10deg);transform:translate3d(30%,0,-250px) rotateY(-10deg)}[data-bespoke-state=show-active-slide-and-previous].bespoke-before-1{-webkit-transform:translate3d(-30%,0,-250px) rotateY(10deg);transform:translate3d(-30%,0,-250px) rotateY(10deg);opacity:0}@media screen{.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-bullet{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .4s ease;transition:all .4s ease}.bespoke-bullet-inactive{opacity:0;pointer-events:none;-webkit-transform:translate3d(40px,0,0);transform:translate3d(40px,0,0);-webkit-transition:all .2s ease;transition:all .2s ease}.bespoke-bullet-off .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}.bullet-old{color:gray}.bullet-no-anim{-webkit-transition-property:opacity;transition-property:opacity}.bullet-no-anim.bespoke-bullet-inactive{-webkit-transform:none;transform:none}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:3px;z-index:2}.bespoke-progress-parent::after{content:attr(slide-no);position:absolute;font-size:10px;border-radius:5px;width:2em;height:2.5em;left:1em;top:-1em;padding:1em .5em 0;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#83a2c1;color:#fff}.bespoke-progress-bar{position:absolute;height:100%;-webkit-transition:width .3s ease;transition:width .3s ease}.bespoke-progress-bar:before{content:" ";position:absolute;display:block;width:100%;height:100%;background:#83a2c1}.bespoke-progress-bar::after{content:" ";position:absolute;right:-1em;border-top:0 solid transparent;border-bottom:3px solid transparent;border-left:1em solid #83a2c1}.bespoke-parent,.bespoke-scale-parent{-webkit-perspective:900px;perspective:900px}.bespoke-simple-overview .bespoke-slide{position:absolute;opacity:1;outline:4px solid silver}.bespoke-simple-overview .bespoke-slide:hover{outline-color:#4682b4}.bespoke-simple-overview .bespoke-slide.bespoke-active{-webkit-transform:translate3d(0,0,-2000px);transform:translate3d(0,0,-2000px);outline-color:#4682b4;z-index:100}.bespoke-simple-overview .bespoke-slide.bespoke-after:not(.bespoke-after-1):not(.bespoke-after-2):not(.bespoke-after-3):not(.bespoke-after-4):not(.bespoke-after-5):not(.bespoke-after-6){-webkit-transform:translate3d(7634.667338669354px,0,-2000px);transform:translate3d(7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before:not(.bespoke-before-1):not(.bespoke-before-2):not(.bespoke-before-3):not(.bespoke-before-4):not(.bespoke-before-5):not(.bespoke-before-6){-webkit-transform:translate3d(-7634.667338669354px,0,-2000px);transform:translate3d(-7634.667338669354px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-1,.bespoke-simple-overview .bespoke-slide.bespoke-before-1{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(1090.6667626670505px,0,-2000px);transform:translate3d(1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-1{-webkit-transform:translate3d(-1090.6667626670505px,0,-2000px);transform:translate3d(-1090.6667626670505px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-2,.bespoke-simple-overview .bespoke-slide.bespoke-before-2{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(2181.333525334101px,0,-2000px);transform:translate3d(2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-2{-webkit-transform:translate3d(-2181.333525334101px,0,-2000px);transform:translate3d(-2181.333525334101px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-3,.bespoke-simple-overview .bespoke-slide.bespoke-before-3{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(3272.0002880011516px,0,-2000px);transform:translate3d(3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-3{-webkit-transform:translate3d(-3272.0002880011516px,0,-2000px);transform:translate3d(-3272.0002880011516px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-4,.bespoke-simple-overview .bespoke-slide.bespoke-before-4{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(4362.667050668202px,0,-2000px);transform:translate3d(4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-4{-webkit-transform:translate3d(-4362.667050668202px,0,-2000px);transform:translate3d(-4362.667050668202px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-5,.bespoke-simple-overview .bespoke-slide.bespoke-before-5{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(5453.333813335253px,0,-2000px);transform:translate3d(5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-5{-webkit-transform:translate3d(-5453.333813335253px,0,-2000px);transform:translate3d(-5453.333813335253px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-after-6,.bespoke-simple-overview .bespoke-slide.bespoke-before-6{display:-webkit-box;display:-ms-flexbox;display:flex;will-change:transform;-webkit-transform:translate3d(6544.000576002303px,0,-2000px);transform:translate3d(6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-slide.bespoke-before-6{-webkit-transform:translate3d(-6544.000576002303px,0,-2000px);transform:translate3d(-6544.000576002303px,0,-2000px)}.bespoke-simple-overview .bespoke-bullet-inactive{display:list-item;opacity:initial;-webkit-transform:initial;transform:initial}#bespoke-search{position:absolute;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0;background-color:rgba(128,128,128,.3);-webkit-transition:opacity 100ms ease-out;transition:opacity 100ms ease-out}#bespoke-search.bespoke-search-searching{opacity:1}#bespoke-search.bespoke-search-searching>#bespoke-search-input{bottom:5%}#bespoke-search-input{position:absolute;left:50%;bottom:0;pointer-events:all;width:200px;margin-left:-100px;padding:8px;border-radius:10px;border:1px solid silver;outline:0;color:gray;font-size:x-large;background-color:rgba(255,255,255,.9);-webkit-transition:bottom 140ms ease-out;transition:bottom 140ms ease-out}.bespoke-search-result{background-color:#ff0}.bespoke-search-result-focused{background-color:orange}#bespoke-search.bespoke-search-no-result>#bespoke-search-input{border:1px solid #8b0000;color:#8b0000}#bespoke-search-results-count{position:absolute;bottom:1%;left:50%;margin-left:-30px;width:60px;text-align:center;font-size:smaller;color:#8a2be2;font-weight:700}}@media print{*{background:0 0!important}body,html{overflow:visible!important}body{margin:0!important;padding:.1in!important;height:auto!important}body,code{line-height:1em!important}code,ol,pre,ul{text-align:left!important}pre code{border:1px solid #696969!important;padding:5px!important;border-radius:4px!important}@page{margin:.79in!important}.bespoke-slide{-webkit-box-sizing:border-box!important;box-sizing:border-box!important;display:block!important;float:left!important;border:2px solid #000!important;text-align:center!important;margin-top:0!important;margin-left:0!important;page-break-inside:avoid!important}.bespoke-slide>*{zoom:.65!important}.bespoke-slide>* *{zoom:.85!important}.bespoke-slide>h1:only-child,.bespoke-slide>h2:only-child,.bespoke-slide>h3:only-child,.bespoke-slide>h4:only-child,.bespoke-slide>h5:only-child,.bespoke-slide>h6:only-child{margin-top:4em!important}.bespoke-slide .bespoke-bullet-inactive{opacity:1!important;-webkit-transform:none!important;transform:none!important;-webkit-transition:none!important;transition:none!important}.bespoke-slide:nth-child(6n),.bespoke-slide:nth-of-type(6n){page-break-after:always!important;-webkit-column-break-after:page!important;break-after:page!important}}@media print and (orientation:portrait){.bespoke-slide{width:2.919472443000001in!important;height:2.189604332250001in!important;margin-right:.324385827in!important;margin-bottom:.324385827in!important}.bespoke-slide:nth-child(2n){margin-right:0!important}.bespoke-parent{width:6.487716540000001in!important}img{max-width:5.248012976470589in!important}}@media print and (orientation:landscape){.bespoke-slide{width:2.97387402in!important;height:2.230405515in!important;margin-right:.297387402in!important;margin-bottom:.297387402in!important}.bespoke-slide:nth-child(3n){margin-right:0!important}.bespoke-parent{width:9.9129134in!important}img{max-width:3.498675317647059in!important}}\n/*# sourceMappingURL=theme.css.map */\n/*# sourceMappingURL=theme.css.map */\n',{prepend:!0}),function(e){i()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,o){t.exports=function(){return function(n){var l=function(e,t){e.classList.add("bespoke-"+t)},s=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},t=function(e,t){var o=n.slides[n.slide()],i=t-n.slide(),a=0<i?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(s.bind(null,e)),e!==o&&["inactive",a,a+"-"+Math.abs(i)].map(l.bind(null,e))};l(n.parent,"parent"),n.slides.map(function(e){l(e,"slide")}),n.on("activate",function(e){n.slides.map(t),l(e.slide,"active"),s(e.slide,"inactive")})}}},{}],3:[function(e,t,o){var s=[],r=[];function i(e,t){if(t=t||{},void 0===e)throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");var o,i,a=!0===t.prepend?"prepend":"append",n=void 0!==t.container?t.container:document.querySelector("head"),l=s.indexOf(n);return-1===l&&(l=s.push(n)-1,r[l]={}),void 0!==r[l]&&void 0!==r[l][a]?o=r[l][a]:(o=r[l][a]=((i=document.createElement("style")).setAttribute("type","text/css"),i),"prepend"===a?n.insertBefore(o,n.childNodes[0]):n.appendChild(o)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),o.styleSheet?o.styleSheet.cssText+=e:o.textContent+=e,o}t.exports=i,t.exports.insertCss=i},{}]},{},[1])(1)});
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
/*! bespoke-math v1.2.0 © 2016 Flávio, MIT License */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t=t.bespoke||(t.bespoke={}),t=t.plugins||(t.plugins={}),t.math=e()}}(function(){return function e(t,i,h){function a(r,l){if(!i[r]){if(!t[r]){var n="function"==typeof require&&require;if(!l&&n)return n(r,!0);if(s)return s(r,!0);var p=new Error("Cannot find module '"+r+"'");throw p.code="MODULE_NOT_FOUND",p}var o=i[r]={exports:{}};t[r][0].call(o.exports,function(e){var i=t[r][1][e];return a(i?i:e)},o,o.exports,e,t,i,h)}return i[r].exports}for(var s="function"==typeof require&&require,r=0;r<h.length;r++)a(h[r]);return a}({1:[function(e,t,i){var h="@font-face {\n  font-family: KaTeX_AMS;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_AMS-Regular.eot);\n  src: url(fonts/KaTeX_AMS-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_AMS-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_AMS-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_AMS-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Caligraphic;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Bold.eot);\n  src: url(fonts/KaTeX_Caligraphic-Bold.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Bold.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Bold.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Bold.ttf) format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Caligraphic;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Regular.eot);\n  src: url(fonts/KaTeX_Caligraphic-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Caligraphic-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Fraktur;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Bold.eot);\n  src: url(fonts/KaTeX_Fraktur-Bold.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Bold.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Bold.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Bold.ttf) format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Fraktur;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Regular.eot);\n  src: url(fonts/KaTeX_Fraktur-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Fraktur-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Main;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Bold.eot);\n  src: url(fonts/KaTeX_Main-Bold.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Bold.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Bold.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Bold.ttf) format('ttf');\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Main;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Italic.eot);\n  src: url(fonts/KaTeX_Main-Italic.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Italic.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Italic.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Italic.ttf) format('ttf');\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: KaTeX_Main;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Regular.eot);\n  src: url(fonts/KaTeX_Main-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Main-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Math;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Math-Italic.eot);\n  src: url(fonts/KaTeX_Math-Italic.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Math-Italic.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Math-Italic.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Math-Italic.ttf) format('ttf');\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: KaTeX_SansSerif;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_SansSerif-Regular.eot);\n  src: url(fonts/KaTeX_SansSerif-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_SansSerif-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_SansSerif-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_SansSerif-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Script;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Script-Regular.eot);\n  src: url(fonts/KaTeX_Script-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Script-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Script-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Script-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Size1;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size1-Regular.eot);\n  src: url(fonts/KaTeX_Size1-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size1-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size1-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size1-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Size2;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size2-Regular.eot);\n  src: url(fonts/KaTeX_Size2-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size2-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size2-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size2-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Size3;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size3-Regular.eot);\n  src: url(fonts/KaTeX_Size3-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size3-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size3-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size3-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Size4;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size4-Regular.eot);\n  src: url(fonts/KaTeX_Size4-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size4-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size4-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Size4-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: KaTeX_Typewriter;\n  src: url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Typewriter-Regular.eot);\n  src: url(fonts/KaTeX_Typewriter-Regular.eot#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Typewriter-Regular.woff2) format('woff2'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Typewriter-Regular.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/fonts/KaTeX_Typewriter-Regular.ttf) format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n.katex-display {\n  display: block;\n  margin: 1em 0;\n  text-align: center;\n}\n.katex-display>.katex {\n  display: inline-block;\n}\n.katex {\n  font: 400 1.21em KaTeX_Main;\n  line-height: 1.2;\n  white-space: nowrap;\n  text-indent: 0;\n}\n.katex .katex-html {\n  display: inline-block;\n}\n.katex .katex-mathml {\n  position: absolute;\n  clip: rect(1px,1px,1px,1px);\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n.katex .base,\n.katex .strut {\n  display: inline-block;\n}\n.katex .mathit {\n  font-family: KaTeX_Math;\n  font-style: italic;\n}\n.katex .mathbf {\n  font-family: KaTeX_Main;\n  font-weight: 700;\n}\n.katex .amsrm,\n.katex .mathbb {\n  font-family: KaTeX_AMS;\n}\n.katex .mathcal {\n  font-family: KaTeX_Caligraphic;\n}\n.katex .mathfrak {\n  font-family: KaTeX_Fraktur;\n}\n.katex .mathtt {\n  font-family: KaTeX_Typewriter;\n}\n.katex .mathscr {\n  font-family: KaTeX_Script;\n}\n.katex .mathsf {\n  font-family: KaTeX_SansSerif;\n}\n.katex .mainit {\n  font-family: KaTeX_Main;\n  font-style: italic;\n}\n.katex .textstyle>.mord+.mop {\n  margin-left: .16667em;\n}\n.katex .textstyle>.mord+.mbin {\n  margin-left: .22222em;\n}\n.katex .textstyle>.mord+.mrel {\n  margin-left: .27778em;\n}\n.katex .textstyle>.mop+.mop,\n.katex .textstyle>.mop+.mord,\n.katex .textstyle>.mord+.minner {\n  margin-left: .16667em;\n}\n.katex .textstyle>.mop+.mrel {\n  margin-left: .27778em;\n}\n.katex .textstyle>.mop+.minner {\n  margin-left: .16667em;\n}\n.katex .textstyle>.mbin+.minner,\n.katex .textstyle>.mbin+.mop,\n.katex .textstyle>.mbin+.mopen,\n.katex .textstyle>.mbin+.mord {\n  margin-left: .22222em;\n}\n.katex .textstyle>.mrel+.minner,\n.katex .textstyle>.mrel+.mop,\n.katex .textstyle>.mrel+.mopen,\n.katex .textstyle>.mrel+.mord {\n  margin-left: .27778em;\n}\n.katex .textstyle>.mclose+.mop {\n  margin-left: .16667em;\n}\n.katex .textstyle>.mclose+.mbin {\n  margin-left: .22222em;\n}\n.katex .textstyle>.mclose+.mrel {\n  margin-left: .27778em;\n}\n.katex .textstyle>.mclose+.minner,\n.katex .textstyle>.minner+.mop,\n.katex .textstyle>.minner+.mord,\n.katex .textstyle>.mpunct+.mclose,\n.katex .textstyle>.mpunct+.minner,\n.katex .textstyle>.mpunct+.mop,\n.katex .textstyle>.mpunct+.mopen,\n.katex .textstyle>.mpunct+.mord,\n.katex .textstyle>.mpunct+.mpunct,\n.katex .textstyle>.mpunct+.mrel {\n  margin-left: .16667em;\n}\n.katex .textstyle>.minner+.mbin {\n  margin-left: .22222em;\n}\n.katex .textstyle>.minner+.mrel {\n  margin-left: .27778em;\n}\n.katex .mclose+.mop,\n.katex .minner+.mop,\n.katex .mop+.mop,\n.katex .mop+.mord,\n.katex .mord+.mop,\n.katex .textstyle>.minner+.minner,\n.katex .textstyle>.minner+.mopen,\n.katex .textstyle>.minner+.mpunct {\n  margin-left: .16667em;\n}\n.katex .reset-textstyle.textstyle {\n  font-size: 1em;\n}\n.katex .reset-textstyle.scriptstyle {\n  font-size: .7em;\n}\n.katex .reset-textstyle.scriptscriptstyle {\n  font-size: .5em;\n}\n.katex .reset-scriptstyle.textstyle {\n  font-size: 1.42857em;\n}\n.katex .reset-scriptstyle.scriptstyle {\n  font-size: 1em;\n}\n.katex .reset-scriptstyle.scriptscriptstyle {\n  font-size: .71429em;\n}\n.katex .reset-scriptscriptstyle.textstyle {\n  font-size: 2em;\n}\n.katex .reset-scriptscriptstyle.scriptstyle {\n  font-size: 1.4em;\n}\n.katex .reset-scriptscriptstyle.scriptscriptstyle {\n  font-size: 1em;\n}\n.katex .style-wrap {\n  position: relative;\n}\n.katex .vlist {\n  display: inline-block;\n}\n.katex .vlist>span {\n  display: block;\n  height: 0;\n  position: relative;\n}\n.katex .vlist>span>span {\n  display: inline-block;\n}\n.katex .vlist .baseline-fix {\n  display: inline-table;\n  table-layout: fixed;\n}\n.katex .msupsub {\n  text-align: left;\n}\n.katex .mfrac>span>span {\n  text-align: center;\n}\n.katex .mfrac .frac-line {\n  width: 100%;\n}\n.katex .mfrac .frac-line:before {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  content: \"\";\n  display: block;\n}\n.katex .mfrac .frac-line:after {\n  border-bottom-style: solid;\n  border-bottom-width: .04em;\n  content: \"\";\n  display: block;\n  margin-top: -1px;\n}\n.katex .mspace {\n  display: inline-block;\n}\n.katex .mspace.negativethinspace {\n  margin-left: -.16667em;\n}\n.katex .mspace.thinspace {\n  width: .16667em;\n}\n.katex .mspace.mediumspace {\n  width: .22222em;\n}\n.katex .mspace.thickspace {\n  width: .27778em;\n}\n.katex .mspace.enspace {\n  width: .5em;\n}\n.katex .mspace.quad {\n  width: 1em;\n}\n.katex .mspace.qquad {\n  width: 2em;\n}\n.katex .llap,\n.katex .rlap {\n  width: 0;\n  position: relative;\n}\n.katex .llap>.inner,\n.katex .rlap>.inner {\n  position: absolute;\n}\n.katex .llap>.fix,\n.katex .rlap>.fix {\n  display: inline-block;\n}\n.katex .llap>.inner {\n  right: 0;\n}\n.katex .rlap>.inner {\n  left: 0;\n}\n.katex .katex-logo .a {\n  font-size: .75em;\n  margin-left: -.32em;\n  position: relative;\n  top: -.2em;\n}\n.katex .katex-logo .t {\n  margin-left: -.23em;\n}\n.katex .katex-logo .e {\n  margin-left: -.1667em;\n  position: relative;\n  top: .2155em;\n}\n.katex .katex-logo .x {\n  margin-left: -.125em;\n}\n.katex .rule {\n  display: inline-block;\n  border-style: solid;\n  position: relative;\n}\n.katex .overline .overline-line {\n  width: 100%;\n}\n.katex .overline .overline-line:before {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  content: \"\";\n  display: block;\n}\n.katex .overline .overline-line:after {\n  border-bottom-style: solid;\n  border-bottom-width: .04em;\n  content: \"\";\n  display: block;\n  margin-top: -1px;\n}\n.katex .sqrt>.sqrt-sign {\n  position: relative;\n}\n.katex .sqrt .sqrt-line {\n  width: 100%;\n}\n.katex .sqrt .sqrt-line:before {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  content: \"\";\n  display: block;\n}\n.katex .sqrt .sqrt-line:after {\n  border-bottom-style: solid;\n  border-bottom-width: .04em;\n  content: \"\";\n  display: block;\n  margin-top: -1px;\n}\n.katex .sqrt>.root {\n  margin-left: .27777778em;\n  margin-right: -.55555556em;\n}\n.katex .fontsize-ensurer,\n.katex .sizing {\n  display: inline-block;\n}\n.katex .fontsize-ensurer.reset-size1.size1,\n.katex .sizing.reset-size1.size1 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size1.size2,\n.katex .sizing.reset-size1.size2 {\n  font-size: 1.4em;\n}\n.katex .fontsize-ensurer.reset-size1.size3,\n.katex .sizing.reset-size1.size3 {\n  font-size: 1.6em;\n}\n.katex .fontsize-ensurer.reset-size1.size4,\n.katex .sizing.reset-size1.size4 {\n  font-size: 1.8em;\n}\n.katex .fontsize-ensurer.reset-size1.size5,\n.katex .sizing.reset-size1.size5 {\n  font-size: 2em;\n}\n.katex .fontsize-ensurer.reset-size1.size6,\n.katex .sizing.reset-size1.size6 {\n  font-size: 2.4em;\n}\n.katex .fontsize-ensurer.reset-size1.size7,\n.katex .sizing.reset-size1.size7 {\n  font-size: 2.88em;\n}\n.katex .fontsize-ensurer.reset-size1.size8,\n.katex .sizing.reset-size1.size8 {\n  font-size: 3.46em;\n}\n.katex .fontsize-ensurer.reset-size1.size9,\n.katex .sizing.reset-size1.size9 {\n  font-size: 4.14em;\n}\n.katex .fontsize-ensurer.reset-size1.size10,\n.katex .sizing.reset-size1.size10 {\n  font-size: 4.98em;\n}\n.katex .fontsize-ensurer.reset-size2.size1,\n.katex .sizing.reset-size2.size1 {\n  font-size: .71428571em;\n}\n.katex .fontsize-ensurer.reset-size2.size2,\n.katex .sizing.reset-size2.size2 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size2.size3,\n.katex .sizing.reset-size2.size3 {\n  font-size: 1.14285714em;\n}\n.katex .fontsize-ensurer.reset-size2.size4,\n.katex .sizing.reset-size2.size4 {\n  font-size: 1.28571429em;\n}\n.katex .fontsize-ensurer.reset-size2.size5,\n.katex .sizing.reset-size2.size5 {\n  font-size: 1.42857143em;\n}\n.katex .fontsize-ensurer.reset-size2.size6,\n.katex .sizing.reset-size2.size6 {\n  font-size: 1.71428571em;\n}\n.katex .fontsize-ensurer.reset-size2.size7,\n.katex .sizing.reset-size2.size7 {\n  font-size: 2.05714286em;\n}\n.katex .fontsize-ensurer.reset-size2.size8,\n.katex .sizing.reset-size2.size8 {\n  font-size: 2.47142857em;\n}\n.katex .fontsize-ensurer.reset-size2.size9,\n.katex .sizing.reset-size2.size9 {\n  font-size: 2.95714286em;\n}\n.katex .fontsize-ensurer.reset-size2.size10,\n.katex .sizing.reset-size2.size10 {\n  font-size: 3.55714286em;\n}\n.katex .fontsize-ensurer.reset-size3.size1,\n.katex .sizing.reset-size3.size1 {\n  font-size: .625em;\n}\n.katex .fontsize-ensurer.reset-size3.size2,\n.katex .sizing.reset-size3.size2 {\n  font-size: .875em;\n}\n.katex .fontsize-ensurer.reset-size3.size3,\n.katex .sizing.reset-size3.size3 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size3.size4,\n.katex .sizing.reset-size3.size4 {\n  font-size: 1.125em;\n}\n.katex .fontsize-ensurer.reset-size3.size5,\n.katex .sizing.reset-size3.size5 {\n  font-size: 1.25em;\n}\n.katex .fontsize-ensurer.reset-size3.size6,\n.katex .sizing.reset-size3.size6 {\n  font-size: 1.5em;\n}\n.katex .fontsize-ensurer.reset-size3.size7,\n.katex .sizing.reset-size3.size7 {\n  font-size: 1.8em;\n}\n.katex .fontsize-ensurer.reset-size3.size8,\n.katex .sizing.reset-size3.size8 {\n  font-size: 2.1625em;\n}\n.katex .fontsize-ensurer.reset-size3.size9,\n.katex .sizing.reset-size3.size9 {\n  font-size: 2.5875em;\n}\n.katex .fontsize-ensurer.reset-size3.size10,\n.katex .sizing.reset-size3.size10 {\n  font-size: 3.1125em;\n}\n.katex .fontsize-ensurer.reset-size4.size1,\n.katex .sizing.reset-size4.size1 {\n  font-size: .55555556em;\n}\n.katex .fontsize-ensurer.reset-size4.size2,\n.katex .sizing.reset-size4.size2 {\n  font-size: .77777778em;\n}\n.katex .fontsize-ensurer.reset-size4.size3,\n.katex .sizing.reset-size4.size3 {\n  font-size: .88888889em;\n}\n.katex .fontsize-ensurer.reset-size4.size4,\n.katex .sizing.reset-size4.size4 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size4.size5,\n.katex .sizing.reset-size4.size5 {\n  font-size: 1.11111111em;\n}\n.katex .fontsize-ensurer.reset-size4.size6,\n.katex .sizing.reset-size4.size6 {\n  font-size: 1.33333333em;\n}\n.katex .fontsize-ensurer.reset-size4.size7,\n.katex .sizing.reset-size4.size7 {\n  font-size: 1.6em;\n}\n.katex .fontsize-ensurer.reset-size4.size8,\n.katex .sizing.reset-size4.size8 {\n  font-size: 1.92222222em;\n}\n.katex .fontsize-ensurer.reset-size4.size9,\n.katex .sizing.reset-size4.size9 {\n  font-size: 2.3em;\n}\n.katex .fontsize-ensurer.reset-size4.size10,\n.katex .sizing.reset-size4.size10 {\n  font-size: 2.76666667em;\n}\n.katex .fontsize-ensurer.reset-size5.size1,\n.katex .sizing.reset-size5.size1 {\n  font-size: .5em;\n}\n.katex .fontsize-ensurer.reset-size5.size2,\n.katex .sizing.reset-size5.size2 {\n  font-size: .7em;\n}\n.katex .fontsize-ensurer.reset-size5.size3,\n.katex .sizing.reset-size5.size3 {\n  font-size: .8em;\n}\n.katex .fontsize-ensurer.reset-size5.size4,\n.katex .sizing.reset-size5.size4 {\n  font-size: .9em;\n}\n.katex .fontsize-ensurer.reset-size5.size5,\n.katex .sizing.reset-size5.size5 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size5.size6,\n.katex .sizing.reset-size5.size6 {\n  font-size: 1.2em;\n}\n.katex .fontsize-ensurer.reset-size5.size7,\n.katex .sizing.reset-size5.size7 {\n  font-size: 1.44em;\n}\n.katex .fontsize-ensurer.reset-size5.size8,\n.katex .sizing.reset-size5.size8 {\n  font-size: 1.73em;\n}\n.katex .fontsize-ensurer.reset-size5.size9,\n.katex .sizing.reset-size5.size9 {\n  font-size: 2.07em;\n}\n.katex .fontsize-ensurer.reset-size5.size10,\n.katex .sizing.reset-size5.size10 {\n  font-size: 2.49em;\n}\n.katex .fontsize-ensurer.reset-size6.size1,\n.katex .sizing.reset-size6.size1 {\n  font-size: .41666667em;\n}\n.katex .fontsize-ensurer.reset-size6.size2,\n.katex .sizing.reset-size6.size2 {\n  font-size: .58333333em;\n}\n.katex .fontsize-ensurer.reset-size6.size3,\n.katex .sizing.reset-size6.size3 {\n  font-size: .66666667em;\n}\n.katex .fontsize-ensurer.reset-size6.size4,\n.katex .sizing.reset-size6.size4 {\n  font-size: .75em;\n}\n.katex .fontsize-ensurer.reset-size6.size5,\n.katex .sizing.reset-size6.size5 {\n  font-size: .83333333em;\n}\n.katex .fontsize-ensurer.reset-size6.size6,\n.katex .sizing.reset-size6.size6 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size6.size7,\n.katex .sizing.reset-size6.size7 {\n  font-size: 1.2em;\n}\n.katex .fontsize-ensurer.reset-size6.size8,\n.katex .sizing.reset-size6.size8 {\n  font-size: 1.44166667em;\n}\n.katex .fontsize-ensurer.reset-size6.size9,\n.katex .sizing.reset-size6.size9 {\n  font-size: 1.725em;\n}\n.katex .fontsize-ensurer.reset-size6.size10,\n.katex .sizing.reset-size6.size10 {\n  font-size: 2.075em;\n}\n.katex .fontsize-ensurer.reset-size7.size1,\n.katex .sizing.reset-size7.size1 {\n  font-size: .34722222em;\n}\n.katex .fontsize-ensurer.reset-size7.size2,\n.katex .sizing.reset-size7.size2 {\n  font-size: .48611111em;\n}\n.katex .fontsize-ensurer.reset-size7.size3,\n.katex .sizing.reset-size7.size3 {\n  font-size: .55555556em;\n}\n.katex .fontsize-ensurer.reset-size7.size4,\n.katex .sizing.reset-size7.size4 {\n  font-size: .625em;\n}\n.katex .fontsize-ensurer.reset-size7.size5,\n.katex .sizing.reset-size7.size5 {\n  font-size: .69444444em;\n}\n.katex .fontsize-ensurer.reset-size7.size6,\n.katex .sizing.reset-size7.size6 {\n  font-size: .83333333em;\n}\n.katex .fontsize-ensurer.reset-size7.size7,\n.katex .sizing.reset-size7.size7 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size7.size8,\n.katex .sizing.reset-size7.size8 {\n  font-size: 1.20138889em;\n}\n.katex .fontsize-ensurer.reset-size7.size9,\n.katex .sizing.reset-size7.size9 {\n  font-size: 1.4375em;\n}\n.katex .fontsize-ensurer.reset-size7.size10,\n.katex .sizing.reset-size7.size10 {\n  font-size: 1.72916667em;\n}\n.katex .fontsize-ensurer.reset-size8.size1,\n.katex .sizing.reset-size8.size1 {\n  font-size: .28901734em;\n}\n.katex .fontsize-ensurer.reset-size8.size2,\n.katex .sizing.reset-size8.size2 {\n  font-size: .40462428em;\n}\n.katex .fontsize-ensurer.reset-size8.size3,\n.katex .sizing.reset-size8.size3 {\n  font-size: .46242775em;\n}\n.katex .fontsize-ensurer.reset-size8.size4,\n.katex .sizing.reset-size8.size4 {\n  font-size: .52023121em;\n}\n.katex .fontsize-ensurer.reset-size8.size5,\n.katex .sizing.reset-size8.size5 {\n  font-size: .57803468em;\n}\n.katex .fontsize-ensurer.reset-size8.size6,\n.katex .sizing.reset-size8.size6 {\n  font-size: .69364162em;\n}\n.katex .fontsize-ensurer.reset-size8.size7,\n.katex .sizing.reset-size8.size7 {\n  font-size: .83236994em;\n}\n.katex .fontsize-ensurer.reset-size8.size8,\n.katex .sizing.reset-size8.size8 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size8.size9,\n.katex .sizing.reset-size8.size9 {\n  font-size: 1.19653179em;\n}\n.katex .fontsize-ensurer.reset-size8.size10,\n.katex .sizing.reset-size8.size10 {\n  font-size: 1.43930636em;\n}\n.katex .fontsize-ensurer.reset-size9.size1,\n.katex .sizing.reset-size9.size1 {\n  font-size: .24154589em;\n}\n.katex .fontsize-ensurer.reset-size9.size2,\n.katex .sizing.reset-size9.size2 {\n  font-size: .33816425em;\n}\n.katex .fontsize-ensurer.reset-size9.size3,\n.katex .sizing.reset-size9.size3 {\n  font-size: .38647343em;\n}\n.katex .fontsize-ensurer.reset-size9.size4,\n.katex .sizing.reset-size9.size4 {\n  font-size: .43478261em;\n}\n.katex .fontsize-ensurer.reset-size9.size5,\n.katex .sizing.reset-size9.size5 {\n  font-size: .48309179em;\n}\n.katex .fontsize-ensurer.reset-size9.size6,\n.katex .sizing.reset-size9.size6 {\n  font-size: .57971014em;\n}\n.katex .fontsize-ensurer.reset-size9.size7,\n.katex .sizing.reset-size9.size7 {\n  font-size: .69565217em;\n}\n.katex .fontsize-ensurer.reset-size9.size8,\n.katex .sizing.reset-size9.size8 {\n  font-size: .83574879em;\n}\n.katex .fontsize-ensurer.reset-size9.size9,\n.katex .sizing.reset-size9.size9 {\n  font-size: 1em;\n}\n.katex .fontsize-ensurer.reset-size9.size10,\n.katex .sizing.reset-size9.size10 {\n  font-size: 1.20289855em;\n}\n.katex .fontsize-ensurer.reset-size10.size1,\n.katex .sizing.reset-size10.size1 {\n  font-size: .20080321em;\n}\n.katex .fontsize-ensurer.reset-size10.size2,\n.katex .sizing.reset-size10.size2 {\n  font-size: .2811245em;\n}\n.katex .fontsize-ensurer.reset-size10.size3,\n.katex .sizing.reset-size10.size3 {\n  font-size: .32128514em;\n}\n.katex .fontsize-ensurer.reset-size10.size4,\n.katex .sizing.reset-size10.size4 {\n  font-size: .36144578em;\n}\n.katex .fontsize-ensurer.reset-size10.size5,\n.katex .sizing.reset-size10.size5 {\n  font-size: .40160643em;\n}\n.katex .fontsize-ensurer.reset-size10.size6,\n.katex .sizing.reset-size10.size6 {\n  font-size: .48192771em;\n}\n.katex .fontsize-ensurer.reset-size10.size7,\n.katex .sizing.reset-size10.size7 {\n  font-size: .57831325em;\n}\n.katex .fontsize-ensurer.reset-size10.size8,\n.katex .sizing.reset-size10.size8 {\n  font-size: .69477912em;\n}\n.katex .fontsize-ensurer.reset-size10.size9,\n.katex .sizing.reset-size10.size9 {\n  font-size: .8313253em;\n}\n.katex .fontsize-ensurer.reset-size10.size10,\n.katex .sizing.reset-size10.size10 {\n  font-size: 1em;\n}\n.katex .delimsizing.size1 {\n  font-family: KaTeX_Size1;\n}\n.katex .delimsizing.size2 {\n  font-family: KaTeX_Size2;\n}\n.katex .delimsizing.size3 {\n  font-family: KaTeX_Size3;\n}\n.katex .delimsizing.size4 {\n  font-family: KaTeX_Size4;\n}\n.katex .delimsizing.mult .delim-size1>span {\n  font-family: KaTeX_Size1;\n}\n.katex .delimsizing.mult .delim-size4>span {\n  font-family: KaTeX_Size4;\n}\n.katex .nulldelimiter {\n  display: inline-block;\n  width: .12em;\n}\n.katex .op-symbol {\n  position: relative;\n}\n.katex .op-symbol.small-op {\n  font-family: KaTeX_Size1;\n}\n.katex .op-symbol.large-op {\n  font-family: KaTeX_Size2;\n}\n.katex .accent>.vlist>span,\n.katex .op-limits>.vlist>span {\n  text-align: center;\n}\n.katex .accent .accent-body>span {\n  width: 0;\n}\n.katex .accent .accent-body.accent-vec>span {\n  position: relative;\n  left: .326em;\n}\n.katex .mtable .vertical-separator {\n  display: inline-block;\n  margin: 0 -.025em;\n  border-right: .05em solid #000;\n}\n.katex .mtable .arraycolsep {\n  display: inline-block;\n}\n.katex .mtable .col-align-c>.vlist {\n  text-align: center;\n}\n.katex .mtable .col-align-l>.vlist {\n  text-align: left;\n}\n.katex .mtable .col-align-r>.vlist {\n  text-align: right;\n}\n";e("browserify-css").createStyle(h,{href:"katex.min.css"}),t.exports=h},{"browserify-css":3}],2:[function(e,t,i){var h=e("katex"),a=function(e,t){try{return h.renderToString(e,{displayMode:t})}catch(i){console.log('Katex error trying to parse: "'+e+'". Description: '+i)}};t.exports=function(t,i){var h="undefined"!=typeof i?"separateSelector":"spanIsInline";return t=arguments.length>0?t:".math",function(s){var r,l=!1;switch(h){case"separateSelector":r=s.parent.querySelectorAll(t),Array.prototype.slice.call(r).forEach(function(e){e.innerHTML=a(e.innerText,!1),l=!0}),r=s.parent.querySelectorAll(i),Array.prototype.slice.call(r).forEach(function(e){e.innerHTML=a(e.innerText,!0),l=!0});break;case"spanIsInline":r=s.parent.querySelectorAll(t),Array.prototype.slice.call(r).forEach(function(e){e.innerHTML=a(e.innerText,"span"!==e.tagName.toLowerCase()),l=!0})}if(l)try{e("../katex/katex.min.css")}catch(n){console.log("It was not possible to load the CSS from KaTeX. Details: "+n)}}}},{"../katex/katex.min.css":1,katex:4}],3:[function(e,t,i){"use strict";t.exports={createLink:function(e,t){var i=document.head||document.getElementsByTagName("head")[0],h=document.createElement("link");h.href=e,h.rel="stylesheet";for(var a in t)if(t.hasOwnProperty(a)){var s=t[a];h.setAttribute("data-"+a,s)}i.appendChild(h)},createStyle:function(e,t){var i=document.head||document.getElementsByTagName("head")[0],h=document.createElement("style");h.type="text/css";for(var a in t)if(t.hasOwnProperty(a)){var s=t[a];h.setAttribute("data-"+a,s)}h.sheet?(h.innerHTML=e,h.sheet.cssText=e,i.appendChild(h)):h.styleSheet?(i.appendChild(h),h.styleSheet.cssText=e):(h.appendChild(document.createTextNode(e)),i.appendChild(h))}}},{}],4:[function(e,t,i){var h=e("./src/ParseError"),a=e("./src/Settings"),s=e("./src/buildTree"),r=e("./src/parseTree"),l=e("./src/utils"),n=function(e,t,i){l.clearNode(t);var h=new a(i),n=r(e,h),p=s(n,e,h).toNode();t.appendChild(p)};"undefined"!=typeof document&&"CSS1Compat"!==document.compatMode&&("undefined"!=typeof console&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),n=function(){throw new h("KaTeX doesn't work in quirks mode.")});var p=function(e,t){var i=new a(t),h=r(e,i);return s(h,e,i).toMarkup()},o=function(e,t){var i=new a(t);return r(e,i)};t.exports={render:n,renderToString:p,__parse:o,ParseError:h}},{"./src/ParseError":7,"./src/Settings":9,"./src/buildTree":14,"./src/parseTree":23,"./src/utils":25}],5:[function(e,t,i){function h(e){this._input=e}function a(e,t,i){this.text=e,this.data=t,this.position=i}var s=e("match-at"),r=e("./ParseError"),l=[/[\/|@.""`0-9a-zA-Z]/,/[*+-]/,/[=<>:]/,/[,;]/,/['\^_{}]/,/[(\[]/,/[)\]?!]/,/~/,/&/,/\\\\/],n=[/[a-zA-Z0-9`!@*()-=+\[\]'";:?\/.,]/,/[{}]/,/~/,/&/,/\\\\/],p=/\s*/,o=/ +|\\  +/,c=/\\(?:[a-zA-Z]+|.)/;h.prototype._innerLex=function(e,t,i){var h,l=this._input;if(i)h=s(p,l,e)[0],e+=h.length;else if(h=s(o,l,e),null!==h)return new a(" ",null,e+h[0].length);if(e===l.length)return new a("EOF",null,e);var n;if(n=s(c,l,e))return new a(n[0],null,e+n[0].length);for(var g=0;g<t.length;g++){var d=t[g];if(n=s(d,l,e))return new a(n[0],null,e+n[0].length)}throw new r("Unexpected character: '"+l[e]+"'",this,e)};var g=/#[a-z0-9]+|[a-z]+/i;h.prototype._innerLexColor=function(e){var t=this._input,i=s(p,t,e)[0];e+=i.length;var h;if(h=s(g,t,e))return new a(h[0],null,e+h[0].length);throw new r("Invalid color",this,e)};var d=/(-?)\s*(\d+(?:\.\d*)?|\.\d+)\s*([a-z]{2})/;h.prototype._innerLexSize=function(e){var t=this._input,i=s(p,t,e)[0];e+=i.length;var h;if(h=s(d,t,e)){var l=h[3];if("em"!==l&&"ex"!==l)throw new r("Invalid unit: '"+l+"'",this,e);return new a(h[0],{number:+(h[1]+h[2]),unit:l},e+h[0].length)}throw new r("Invalid size",this,e)},h.prototype._innerLexWhitespace=function(e){
var t=this._input,i=s(p,t,e)[0];return e+=i.length,new a(i[0],null,e)},h.prototype.lex=function(e,t){return"math"===t?this._innerLex(e,l,!0):"text"===t?this._innerLex(e,n,!1):"color"===t?this._innerLexColor(e):"size"===t?this._innerLexSize(e):"whitespace"===t?this._innerLexWhitespace(e):void 0},t.exports=h},{"./ParseError":7,"match-at":26}],6:[function(e,t,i){function h(e){this.style=e.style,this.color=e.color,this.size=e.size,this.phantom=e.phantom,this.font=e.font,void 0===e.parentStyle?this.parentStyle=e.style:this.parentStyle=e.parentStyle,void 0===e.parentSize?this.parentSize=e.size:this.parentSize=e.parentSize}h.prototype.extend=function(e){var t={style:this.style,size:this.size,color:this.color,parentStyle:this.style,parentSize:this.size,phantom:this.phantom,font:this.font};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return new h(t)},h.prototype.withStyle=function(e){return this.extend({style:e})},h.prototype.withSize=function(e){return this.extend({size:e})},h.prototype.withColor=function(e){return this.extend({color:e})},h.prototype.withPhantom=function(){return this.extend({phantom:!0})},h.prototype.withFont=function(e){return this.extend({font:e})},h.prototype.reset=function(){return this.extend({})};var a={"katex-blue":"#6495ed","katex-orange":"#ffa500","katex-pink":"#ff00af","katex-red":"#df0030","katex-green":"#28ae7b","katex-gray":"gray","katex-purple":"#9d38bd","katex-blueA":"#c7e9f1","katex-blueB":"#9cdceb","katex-blueC":"#58c4dd","katex-blueD":"#29abca","katex-blueE":"#1c758a","katex-tealA":"#acead7","katex-tealB":"#76ddc0","katex-tealC":"#5cd0b3","katex-tealD":"#55c1a7","katex-tealE":"#49a88f","katex-greenA":"#c9e2ae","katex-greenB":"#a6cf8c","katex-greenC":"#83c167","katex-greenD":"#77b05d","katex-greenE":"#699c52","katex-goldA":"#f7c797","katex-goldB":"#f9b775","katex-goldC":"#f0ac5f","katex-goldD":"#e1a158","katex-goldE":"#c78d46","katex-redA":"#f7a1a3","katex-redB":"#ff8080","katex-redC":"#fc6255","katex-redD":"#e65a4c","katex-redE":"#cf5044","katex-maroonA":"#ecabc1","katex-maroonB":"#ec92ab","katex-maroonC":"#c55f73","katex-maroonD":"#a24d61","katex-maroonE":"#94424f","katex-purpleA":"#caa3e8","katex-purpleB":"#b189c6","katex-purpleC":"#9a72ac","katex-purpleD":"#715582","katex-purpleE":"#644172","katex-mintA":"#f5f9e8","katex-mintB":"#edf2df","katex-mintC":"#e0e5cc","katex-grayA":"#fdfdfd","katex-grayB":"#f7f7f7","katex-grayC":"#eeeeee","katex-grayD":"#dddddd","katex-grayE":"#cccccc","katex-grayF":"#aaaaaa","katex-grayG":"#999999","katex-grayH":"#555555","katex-grayI":"#333333","katex-kaBlue":"#314453","katex-kaGreen":"#639b24"};h.prototype.getColor=function(){return this.phantom?"transparent":a[this.color]||this.color},t.exports=h},{}],7:[function(e,t,i){function h(e,t,i){var a="KaTeX parse error: "+e;if(void 0!==t&&void 0!==i){a+=" at position "+i+": ";var s=t._input;s=s.slice(0,i)+"̲"+s.slice(i);var r=Math.max(0,i-15),l=i+15;a+=s.slice(r,l)}var n=new Error(a);return n.name="ParseError",n.__proto__=h.prototype,n.position=i,n}h.prototype.__proto__=Error.prototype,t.exports=h},{}],8:[function(e,t,i){function h(e,t){this.lexer=new l(e),this.settings=t}function a(e,t){this.result=e,this.isFunction=t}var s=e("./functions"),r=e("./environments"),l=e("./Lexer"),n=e("./symbols"),p=e("./utils"),o=e("./parseData"),c=e("./ParseError"),g=o.ParseNode,d=o.ParseResult;h.prototype.expect=function(e,t){if(e.text!==t)throw new c("Expected '"+t+"', got '"+e.text+"'",this.lexer,e.position)},h.prototype.parse=function(e){var t=this.parseInput(0,"math");return t.result},h.prototype.parseInput=function(e,t){var i=this.parseExpression(e,t,!1);return this.expect(i.peek,"EOF"),i};var u=["}","\\end","\\right","&","\\\\","\\cr"];h.prototype.parseExpression=function(e,t,i,h){for(var a=[],s=null;;){if(s=this.lexer.lex(e,t),-1!==u.indexOf(s.text))break;if(h&&s.text===h)break;var r=this.parseAtom(e,t);if(!r){if(!this.settings.throwOnError&&"\\"===s.text[0]){var l=this.handleUnsupportedCmd(s.text,t);a.push(l),e=s.position;continue}break}if(i&&"infix"===r.result.type)break;a.push(r.result),e=r.position}var n=new d(this.handleInfixNodes(a,t),e);return n.peek=s,n},h.prototype.handleInfixNodes=function(e,t){for(var i,h,a=-1,r=0;r<e.length;r++){var l=e[r];if("infix"===l.type){if(-1!==a)throw new c("only one infix operator per group",this.lexer,-1);a=r,h=l.value.replaceWith,i=s.funcs[h]}}if(-1!==a){var n,p,o=e.slice(0,a),d=e.slice(a+1);n=1===o.length&&"ordgroup"===o[0].type?o[0]:new g("ordgroup",o,t),p=1===d.length&&"ordgroup"===d[0].type?d[0]:new g("ordgroup",d,t);var u=i.handler(h,n,p);return[new g(u.type,u,t)]}return e};var k=1;h.prototype.handleSupSubscript=function(e,t,i,h){var a=this.parseGroup(e,t);if(a){if(a.isFunction){var r=s.funcs[a.result.result].greediness;if(r>k)return this.parseFunction(e,t);throw new c("Got function '"+a.result.result+"' with no arguments as "+h,this.lexer,e)}return a.result}var l=this.lexer.lex(e,t);if(this.settings.throwOnError||"\\"!==l.text[0])throw new c("Expected group after '"+i+"'",this.lexer,e);return new d(this.handleUnsupportedCmd(l.text,t),l.position)},h.prototype.handleUnsupportedCmd=function(e,t){for(var i=[],h=0;h<e.length;h++)i.push(new g("textord",e[h],"text"));var a=new g("text",{body:i,type:"text"},t),s=new g("color",{color:this.settings.errorColor,value:[a],type:"color"},t);return s},h.prototype.parseAtom=function(e,t){var i=this.parseImplicitGroup(e,t);if("text"===t)return i;var h;i?h=i.position:(h=e,i=void 0);for(var a,s,r;;){var l=this.lexer.lex(h,t);if("\\limits"===l.text||"\\nolimits"===l.text){if(!i||"op"!==i.result.type)throw new c("Limit controls must follow a math operator",this.lexer,h);var n="\\limits"===l.text;i.result.value.limits=n,i.result.value.alwaysHandleSupSub=!0,h=l.position}else if("^"===l.text){if(a)throw new c("Double superscript",this.lexer,h);r=this.handleSupSubscript(l.position,t,l.text,"superscript"),h=r.position,a=r.result}else if("_"===l.text){if(s)throw new c("Double subscript",this.lexer,h);r=this.handleSupSubscript(l.position,t,l.text,"subscript"),h=r.position,s=r.result}else{if("'"!==l.text)break;var p=new g("textord","\\prime",t),o=[p];for(h=l.position;"'"===(l=this.lexer.lex(h,t)).text;)o.push(p),h=l.position;a=new g("ordgroup",o,t)}}return a||s?new d(new g("supsub",{base:i&&i.result,sup:a,sub:s},t),h):i};var w=["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],f=["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"];h.prototype.parseImplicitGroup=function(e,t){var i=this.parseSymbol(e,t);if(!i||!i.result)return this.parseFunction(e,t);var h,a=i.result.result;if("\\left"===a){var s=this.parseFunction(e,t);h=this.parseExpression(s.position,t,!1),this.expect(h.peek,"\\right");var l=this.parseFunction(h.position,t);return new d(new g("leftright",{body:h.result,left:s.result.value.value,right:l.result.value.value},t),l.position)}if("\\begin"===a){var n=this.parseFunction(e,t),o=n.result.value.name;if(!r.hasOwnProperty(o))throw new c("No such environment: "+o,this.lexer,n.result.value.namepos);var u=r[o],k=[null,t,o],m=this.parseArguments(n.position,t,"\\begin{"+o+"}",u,k);k[0]=m;var z=u.handler.apply(this,k),x=this.lexer.lex(z.position,t);this.expect(x,"\\end");var y=this.parseFunction(z.position,t);if(y.result.value.name!==o)throw new c("Mismatch: \\begin{"+o+"} matched by \\end{"+y.result.value.name+"}",this.lexer,y.namepos);return z.position=y.position,z}return p.contains(w,a)?(h=this.parseExpression(i.result.position,t,!1),new d(new g("sizing",{size:"size"+(p.indexOf(w,a)+1),value:h.result},t),h.position)):p.contains(f,a)?(h=this.parseExpression(i.result.position,t,!0),new d(new g("styling",{style:a.slice(1,a.length-5),value:h.result},t),h.position)):this.parseFunction(e,t)},h.prototype.parseFunction=function(e,t){var i=this.parseGroup(e,t);if(i){if(i.isFunction){var h=i.result.result,a=s.funcs[h];if("text"===t&&!a.allowedInText)throw new c("Can't use function '"+h+"' in text mode",this.lexer,i.position);var r=[h],l=this.parseArguments(i.result.position,t,h,a,r),n=s.funcs[h].handler.apply(this,r);return new d(new g(n.type,n,t),l)}return i.result}return null},h.prototype.parseArguments=function(e,t,i,h,r){var l=h.numArgs+h.numOptionalArgs;if(0===l)return e;for(var n=e,p=h.greediness,o=[n],g=0;l>g;g++){var u,k=h.argTypes&&h.argTypes[g];if(g<h.numOptionalArgs){if(u=k?this.parseSpecialGroup(n,k,t,!0):this.parseOptionalGroup(n,t),!u){r.push(null),o.push(n);continue}}else if(u=k?this.parseSpecialGroup(n,k,t):this.parseGroup(n,t),!u){var w=this.lexer.lex(n,t);if(this.settings.throwOnError||"\\"!==w.text[0])throw new c("Expected group after '"+i+"'",this.lexer,e);u=new a(new d(this.handleUnsupportedCmd(w.text,t),w.position),!1)}var f;if(u.isFunction){var m=s.funcs[u.result.result].greediness;if(!(m>p))throw new c("Got function '"+u.result.result+"' as argument to '"+i+"'",this.lexer,u.result.position-1);f=this.parseFunction(n,t)}else f=u.result;r.push(f.result),o.push(f.position),n=f.position}return r.push(o),n},h.prototype.parseSpecialGroup=function(e,t,i,h){if("original"===t&&(t=i),"color"===t||"size"===t){var s=this.lexer.lex(e,i);if(h&&"["!==s.text)return null;this.expect(s,h?"[":"{");var r,l=this.lexer.lex(s.position,t);r="color"===t?l.text:l.data;var n=this.lexer.lex(l.position,i);return this.expect(n,h?"]":"}"),new a(new d(new g(t,r,i),n.position),!1)}if("text"===t){var p=this.lexer.lex(e,"whitespace");e=p.position}return h?this.parseOptionalGroup(e,t):this.parseGroup(e,t)},h.prototype.parseGroup=function(e,t){var i=this.lexer.lex(e,t);if("{"===i.text){var h=this.parseExpression(i.position,t,!1),s=this.lexer.lex(h.position,t);return this.expect(s,"}"),new a(new d(new g("ordgroup",h.result,t),s.position),!1)}return this.parseSymbol(e,t)},h.prototype.parseOptionalGroup=function(e,t){var i=this.lexer.lex(e,t);if("["===i.text){var h=this.parseExpression(i.position,t,!1,"]"),s=this.lexer.lex(h.position,t);return this.expect(s,"]"),new a(new d(new g("ordgroup",h.result,t),s.position),!1)}return null},h.prototype.parseSymbol=function(e,t){var i=this.lexer.lex(e,t);return s.funcs[i.text]?new a(new d(i.text,i.position),!0):n[t][i.text]?new a(new d(new g(n[t][i.text].group,i.text,t),i.position),!1):null},h.prototype.ParseNode=g,t.exports=h},{"./Lexer":5,"./ParseError":7,"./environments":17,"./functions":20,"./parseData":22,"./symbols":24,"./utils":25}],9:[function(e,t,i){function h(e,t){return void 0===e?t:e}function a(e){e=e||{},this.displayMode=h(e.displayMode,!1),this.throwOnError=h(e.throwOnError,!0),this.errorColor=h(e.errorColor,"#cc0000")}t.exports=a},{}],10:[function(e,t,i){function h(e,t,i,h){this.id=e,this.size=t,this.cramped=h,this.sizeMultiplier=i}h.prototype.sup=function(){return u[k[this.id]]},h.prototype.sub=function(){return u[w[this.id]]},h.prototype.fracNum=function(){return u[f[this.id]]},h.prototype.fracDen=function(){return u[m[this.id]]},h.prototype.cramp=function(){return u[z[this.id]]},h.prototype.cls=function(){return g[this.size]+(this.cramped?" cramped":" uncramped")},h.prototype.reset=function(){return d[this.size]};var a=0,s=1,r=2,l=3,n=4,p=5,o=6,c=7,g=["displaystyle textstyle","textstyle","scriptstyle","scriptscriptstyle"],d=["reset-textstyle","reset-textstyle","reset-scriptstyle","reset-scriptscriptstyle"],u=[new h(a,0,1,!1),new h(s,0,1,!0),new h(r,1,1,!1),new h(l,1,1,!0),new h(n,2,.7,!1),new h(p,2,.7,!0),new h(o,3,.5,!1),new h(c,3,.5,!0)],k=[n,p,n,p,o,c,o,c],w=[p,p,p,p,c,c,c,c],f=[r,l,n,p,o,c,o,c],m=[l,l,p,p,c,c,c,c],z=[s,s,l,l,p,p,c,c];t.exports={DISPLAY:u[a],TEXT:u[r],SCRIPT:u[n],SCRIPTSCRIPT:u[o]}},{}],11:[function(e,t,i){var h=e("./domTree"),a=e("./fontMetrics"),s=e("./symbols"),r=e("./utils"),l=["\\Gamma","\\Delta","\\Theta","\\Lambda","\\Xi","\\Pi","\\Sigma","\\Upsilon","\\Phi","\\Psi","\\Omega"],n=["ı","ȷ"],p=function(e,t,i,r,l){s[i][e]&&s[i][e].replace&&(e=s[i][e].replace);var n,p=a.getCharacterMetrics(e,t);return p?n=new h.symbolNode(e,p.height,p.depth,p.italic,p.skew,l):("undefined"!=typeof console&&console.warn("No character metrics for '"+e+"' in style '"+t+"'"),n=new h.symbolNode(e,0,0,0,0,l)),r&&(n.style.color=r),n},o=function(e,t,i,h){return"\\"===e||"main"===s[t][e].font?p(e,"Main-Regular",t,i,h):p(e,"AMS-Regular",t,i,h.concat(["amsrm"]))},c=function(e,t,i,h,a){if("mathord"===a)return g(e,t,i,h);if("textord"===a)return p(e,"Main-Regular",t,i,h.concat(["mathrm"]));throw new Error("unexpected type: "+a+" in mathDefault")},g=function(e,t,i,h){return/[0-9]/.test(e.charAt(0))||r.contains(n,e)||r.contains(l,e)?p(e,"Main-Italic",t,i,h.concat(["mainit"])):p(e,"Math-Italic",t,i,h.concat(["mathit"]))},d=function(e,t,i){var h=e.mode,l=e.value;s[h][l]&&s[h][l].replace&&(l=s[h][l].replace);var o=["mord"],d=t.getColor(),u=t.font;if(u){if("mathit"===u||r.contains(n,l))return g(l,h,d,o);var k=y[u].fontName;return a.getCharacterMetrics(l,k)?p(l,k,h,d,o.concat([u])):c(l,h,d,o,i)}return c(l,h,d,o,i)},u=function(e){var t=0,i=0,h=0;if(e.children)for(var a=0;a<e.children.length;a++)e.children[a].height>t&&(t=e.children[a].height),e.children[a].depth>i&&(i=e.children[a].depth),e.children[a].maxFontSize>h&&(h=e.children[a].maxFontSize);e.height=t,e.depth=i,e.maxFontSize=h},k=function(e,t,i){var a=new h.span(e,t);return u(a),i&&(a.style.color=i),a},w=function(e){var t=new h.documentFragment(e);return u(t),t},f=function(e,t){var i=k([],[new h.symbolNode("​")]);i.style.fontSize=t/e.style.sizeMultiplier+"em";var a=k(["fontsize-ensurer","reset-"+e.size,"size5"],[i]);return a},m=function(e,t,i,a){var s,r,l;if("individualShift"===t){var n=e;for(e=[n[0]],s=-n[0].shift-n[0].elem.depth,r=s,l=1;l<n.length;l++){var p=-n[l].shift-r-n[l].elem.depth,o=p-(n[l-1].elem.height+n[l-1].elem.depth);r+=p,e.push({type:"kern",size:o}),e.push(n[l])}}else if("top"===t){var c=i;for(l=0;l<e.length;l++)c-="kern"===e[l].type?e[l].size:e[l].elem.height+e[l].elem.depth;s=c}else s="bottom"===t?-i:"shift"===t?-e[0].elem.depth-i:"firstBaseline"===t?-e[0].elem.depth:0;var g=0;for(l=0;l<e.length;l++)"elem"===e[l].type&&(g=Math.max(g,e[l].elem.maxFontSize));var d=f(a,g),u=[];for(r=s,l=0;l<e.length;l++)if("kern"===e[l].type)r+=e[l].size;else{var w=e[l].elem,m=-w.depth-r;r+=w.height+w.depth;var z=k([],[d,w]);z.height-=m,z.depth+=m,z.style.top=m+"em",u.push(z)}var x=k(["baseline-fix"],[d,new h.symbolNode("​")]);u.push(x);var y=k(["vlist"],u);return y.height=Math.max(r,y.height),y.depth=Math.max(-s,y.depth),y},z={size1:.5,size2:.7,size3:.8,size4:.9,size5:1,size6:1.2,size7:1.44,size8:1.73,size9:2.07,size10:2.49},x={"\\qquad":{size:"2em",className:"qquad"},"\\quad":{size:"1em",className:"quad"},"\\enspace":{size:"0.5em",className:"enspace"},"\\;":{size:"0.277778em",className:"thickspace"},"\\:":{size:"0.22222em",className:"mediumspace"},"\\,":{size:"0.16667em",className:"thinspace"},"\\!":{size:"-0.16667em",className:"negativethinspace"}},y={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}};t.exports={fontMap:y,makeSymbol:p,mathsym:o,makeSpan:k,makeFragment:w,makeVList:m,makeOrd:d,sizingMultiplier:z,spacingFunctions:x}},{"./domTree":16,"./fontMetrics":18,"./symbols":24,"./utils":25}],12:[function(e,t,i){var h=e("./ParseError"),a=e("./Style"),s=e("./buildCommon"),r=e("./delimiter"),l=e("./domTree"),n=e("./fontMetrics"),p=e("./utils"),o=s.makeSpan,c=function(e,t,i){for(var h=[],a=0;a<e.length;a++){var s=e[a];h.push(z(s,t,i)),i=s}return h},g={mathord:"mord",textord:"mord",bin:"mbin",rel:"mrel",text:"mord",open:"mopen",close:"mclose",inner:"minner",genfrac:"mord",array:"mord",spacing:"mord",punct:"mpunct",ordgroup:"mord",op:"mop",katex:"mord",overline:"mord",rule:"mord",leftright:"minner",sqrt:"mord",accent:"mord"},d=function(e){return null==e?g.mathord:"supsub"===e.type?d(e.value.base):"llap"===e.type||"rlap"===e.type?d(e.value):"color"===e.type?d(e.value.value):"sizing"===e.type?d(e.value.value):"styling"===e.type?d(e.value.value):"delimsizing"===e.type?g[e.value.delimType]:g[e.type]},u=function(e,t){return e?"op"===e.type?e.value.limits&&(t.style.size===a.DISPLAY.size||e.value.alwaysHandleSupSub):"accent"===e.type?w(e.value.base):null:!1},k=function(e){return e?"ordgroup"===e.type?1===e.value.length?k(e.value[0]):e:"color"===e.type&&1===e.value.value.length?k(e.value.value[0]):e:!1},w=function(e){var t=k(e);return"mathord"===t.type||"textord"===t.type||"bin"===t.type||"rel"===t.type||"inner"===t.type||"open"===t.type||"close"===t.type||"punct"===t.type},f=function(e){return o(["sizing","reset-"+e.size,"size5",e.style.reset(),a.TEXT.cls(),"nulldelimiter"])},m={mathord:function(e,t,i){return s.makeOrd(e,t,"mathord")},textord:function(e,t,i){return s.makeOrd(e,t,"textord")},bin:function(e,t,i){for(var h="mbin",a=i;a&&"color"===a.type;){var r=a.value.value;a=r[r.length-1]}return i&&!p.contains(["mbin","mopen","mrel","mop","mpunct"],d(a))||(e.type="textord",h="mord"),s.mathsym(e.value,e.mode,t.getColor(),[h])},rel:function(e,t,i){return s.mathsym(e.value,e.mode,t.getColor(),["mrel"])},open:function(e,t,i){return s.mathsym(e.value,e.mode,t.getColor(),["mopen"])},close:function(e,t,i){return s.mathsym(e.value,e.mode,t.getColor(),["mclose"])},inner:function(e,t,i){return s.mathsym(e.value,e.mode,t.getColor(),["minner"])},punct:function(e,t,i){return s.mathsym(e.value,e.mode,t.getColor(),["mpunct"])},ordgroup:function(e,t,i){return o(["mord",t.style.cls()],c(e.value,t.reset()))},text:function(e,t,i){return o(["text","mord",t.style.cls()],c(e.value.body,t.reset()))},color:function(e,t,i){var h=c(e.value.value,t.withColor(e.value.color),i);return new s.makeFragment(h)},supsub:function(e,t,i){if(u(e.value.base,t))return m[e.value.base.type](e,t,i);var h,r,p,c,g=z(e.value.base,t.reset());e.value.sup&&(p=z(e.value.sup,t.withStyle(t.style.sup())),h=o([t.style.reset(),t.style.sup().cls()],[p])),e.value.sub&&(c=z(e.value.sub,t.withStyle(t.style.sub())),r=o([t.style.reset(),t.style.sub().cls()],[c]));var k,f;w(e.value.base)?(k=0,f=0):(k=g.height-n.metrics.supDrop,f=g.depth+n.metrics.subDrop);var x;x=t.style===a.DISPLAY?n.metrics.sup1:t.style.cramped?n.metrics.sup3:n.metrics.sup2;var y,v=a.TEXT.sizeMultiplier*t.style.sizeMultiplier,b=.5/n.metrics.ptPerEm/v+"em";if(e.value.sup)if(e.value.sub){k=Math.max(k,x,p.depth+.25*n.metrics.xHeight),f=Math.max(f,n.metrics.sub2);var T=n.metrics.defaultRuleThickness;if(k-p.depth-(c.height-f)<4*T){f=4*T-(k-p.depth)+c.height;var S=.8*n.metrics.xHeight-(k-p.depth);S>0&&(k+=S,f-=S)}y=s.makeVList([{type:"elem",elem:r,shift:f},{type:"elem",elem:h,shift:-k}],"individualShift",null,t),g instanceof l.symbolNode&&(y.children[0].style.marginLeft=-g.italic+"em"),y.children[0].style.marginRight=b,y.children[1].style.marginRight=b}else k=Math.max(k,x,p.depth+.25*n.metrics.xHeight),y=s.makeVList([{type:"elem",elem:h}],"shift",-k,t),y.children[0].style.marginRight=b;else f=Math.max(f,n.metrics.sub1,c.height-.8*n.metrics.xHeight),y=s.makeVList([{type:"elem",elem:r}],"shift",f,t),y.children[0].style.marginRight=b,g instanceof l.symbolNode&&(y.children[0].style.marginLeft=-g.italic+"em");return o([d(e.value.base)],[g,y])},genfrac:function(e,t,i){var h=t.style;"display"===e.value.size?h=a.DISPLAY:"text"===e.value.size&&(h=a.TEXT);var l,p=h.fracNum(),c=h.fracDen(),g=z(e.value.numer,t.withStyle(p)),d=o([h.reset(),p.cls()],[g]),u=z(e.value.denom,t.withStyle(c)),k=o([h.reset(),c.cls()],[u]);l=e.value.hasBarLine?n.metrics.defaultRuleThickness/t.style.sizeMultiplier:0;var w,m,x;h.size===a.DISPLAY.size?(w=n.metrics.num1,m=l>0?3*l:7*n.metrics.defaultRuleThickness,x=n.metrics.denom1):(l>0?(w=n.metrics.num2,m=l):(w=n.metrics.num3,m=3*n.metrics.defaultRuleThickness),x=n.metrics.denom2);var y;if(0===l){var v=w-g.depth-(u.height-x);m>v&&(w+=.5*(m-v),x+=.5*(m-v)),y=s.makeVList([{type:"elem",elem:k,shift:x},{type:"elem",elem:d,shift:-w}],"individualShift",null,t)}else{var b=n.metrics.axisHeight;w-g.depth-(b+.5*l)<m&&(w+=m-(w-g.depth-(b+.5*l))),b-.5*l-(u.height-x)<m&&(x+=m-(b-.5*l-(u.height-x)));var T=o([t.style.reset(),a.TEXT.cls(),"frac-line"]);T.height=l;var S=-(b-.5*l);y=s.makeVList([{type:"elem",elem:k,shift:x},{type:"elem",elem:T,shift:S},{type:"elem",elem:d,shift:-w}],"individualShift",null,t)}y.height*=h.sizeMultiplier/t.style.sizeMultiplier,y.depth*=h.sizeMultiplier/t.style.sizeMultiplier;var M;M=h.size===a.DISPLAY.size?n.metrics.delim1:n.metrics.getDelim2(h);var X,K;return X=null==e.value.leftDelim?f(t):r.customSizedDelim(e.value.leftDelim,M,!0,t.withStyle(h),e.mode),K=null==e.value.rightDelim?f(t):r.customSizedDelim(e.value.rightDelim,M,!0,t.withStyle(h),e.mode),o(["mord",t.style.reset(),h.cls()],[X,o(["mfrac"],[y]),K],t.getColor())},array:function(e,t,i){var a,r,l=e.value.body.length,c=0,g=new Array(l),d=1/n.metrics.ptPerEm,u=5*d,k=12*d,w=p.deflt(e.value.arraystretch,1),f=w*k,m=.7*f,x=.3*f,y=0;for(a=0;a<e.value.body.length;++a){var v=e.value.body[a],b=m,T=x;c<v.length&&(c=v.length);var S=new Array(v.length);for(r=0;r<v.length;++r){var M=z(v[r],t);T<M.depth&&(T=M.depth),b<M.height&&(b=M.height),S[r]=M}var X=0;if(e.value.rowGaps[a]){switch(X=e.value.rowGaps[a].value,X.unit){case"em":X=X.number;break;case"ex":X=X.number*n.metrics.emPerEx;break;default:console.error("Can't handle unit "+X.unit),X=0}X>0&&(X+=x,X>T&&(T=X),X=0)}S.height=b,S.depth=T,y+=b,S.pos=y,y+=T+X,g[a]=S}var K,R,_=y/2+n.metrics.axisHeight,q=e.value.cols||[],A=[];for(r=0,R=0;c>r||R<q.length;++r,++R){for(var j=q[R]||{},C=!0;"separator"===j.type;){if(C||(K=o(["arraycolsep"],[]),K.style.width=n.metrics.doubleRuleSep+"em",A.push(K)),"|"!==j.separator)throw new h("Invalid separator type: "+j.separator);var N=o(["vertical-separator"],[]);N.style.height=y+"em",N.style.verticalAlign=-(y-_)+"em",A.push(N),R++,j=q[R]||{},C=!1}if(!(r>=c)){var E;(r>0||e.value.hskipBeforeAndAfter)&&(E=p.deflt(j.pregap,u),0!==E&&(K=o(["arraycolsep"],[]),K.style.width=E+"em",A.push(K)));var P=[];for(a=0;l>a;++a){var D=g[a],I=D[r];if(I){var L=D.pos-_;I.depth=D.depth,I.height=D.height,P.push({type:"elem",elem:I,shift:L})}}P=s.makeVList(P,"individualShift",null,t),P=o(["col-align-"+(j.align||"c")],[P]),A.push(P),(c-1>r||e.value.hskipBeforeAndAfter)&&(E=p.deflt(j.postgap,u),0!==E&&(K=o(["arraycolsep"],[]),K.style.width=E+"em",A.push(K)))}}return g=o(["mtable"],A),o(["mord"],[g],t.getColor())},spacing:function(e,t,i){return"\\ "===e.value||"\\space"===e.value||" "===e.value||"~"===e.value?o(["mord","mspace"],[s.mathsym(e.value,e.mode)]):o(["mord","mspace",s.spacingFunctions[e.value].className])},llap:function(e,t,i){var h=o(["inner"],[z(e.value.body,t.reset())]),a=o(["fix"],[]);return o(["llap",t.style.cls()],[h,a])},rlap:function(e,t,i){var h=o(["inner"],[z(e.value.body,t.reset())]),a=o(["fix"],[]);return o(["rlap",t.style.cls()],[h,a])},op:function(e,t,i){var h,r,l=!1;"supsub"===e.type&&(h=e.value.sup,r=e.value.sub,e=e.value.base,l=!0);var c=["\\smallint"],g=!1;t.style.size===a.DISPLAY.size&&e.value.symbol&&!p.contains(c,e.value.body)&&(g=!0);var d,u=0,k=0;if(e.value.symbol){var w=g?"Size2-Regular":"Size1-Regular";d=s.makeSymbol(e.value.body,w,"math",t.getColor(),["op-symbol",g?"large-op":"small-op","mop"]),u=(d.height-d.depth)/2-n.metrics.axisHeight*t.style.sizeMultiplier,k=d.italic}else{for(var f=[],m=1;m<e.value.body.length;m++)f.push(s.mathsym(e.value.body[m],e.mode));d=o(["mop"],f,t.getColor())}if(l){d=o([],[d]);var x,y,v,b;if(h){var T=z(h,t.withStyle(t.style.sup()));x=o([t.style.reset(),t.style.sup().cls()],[T]),y=Math.max(n.metrics.bigOpSpacing1,n.metrics.bigOpSpacing3-T.depth)}if(r){var S=z(r,t.withStyle(t.style.sub()));v=o([t.style.reset(),t.style.sub().cls()],[S]),b=Math.max(n.metrics.bigOpSpacing2,n.metrics.bigOpSpacing4-S.height)}var M,X,K;if(h)if(r){if(!h&&!r)return d;K=n.metrics.bigOpSpacing5+v.height+v.depth+b+d.depth+u,M=s.makeVList([{type:"kern",size:n.metrics.bigOpSpacing5},{type:"elem",elem:v},{type:"kern",size:b},{type:"elem",elem:d},{type:"kern",size:y},{type:"elem",elem:x},{type:"kern",size:n.metrics.bigOpSpacing5}],"bottom",K,t),M.children[0].style.marginLeft=-k+"em",M.children[2].style.marginLeft=k+"em"}else K=d.depth+u,M=s.makeVList([{type:"elem",elem:d},{type:"kern",size:y},{type:"elem",elem:x},{type:"kern",size:n.metrics.bigOpSpacing5}],"bottom",K,t),M.children[1].style.marginLeft=k+"em";else X=d.height-u,M=s.makeVList([{type:"kern",size:n.metrics.bigOpSpacing5},{type:"elem",elem:v},{type:"kern",size:b},{type:"elem",elem:d}],"top",X,t),M.children[0].style.marginLeft=-k+"em";return o(["mop","op-limits"],[M])}return e.value.symbol&&(d.style.top=u+"em"),d},katex:function(e,t,i){var h=o(["k"],[s.mathsym("K",e.mode)]),a=o(["a"],[s.mathsym("A",e.mode)]);a.height=.75*(a.height+.2),a.depth=.75*(a.height-.2);var r=o(["t"],[s.mathsym("T",e.mode)]),l=o(["e"],[s.mathsym("E",e.mode)]);l.height=l.height-.2155,l.depth=l.depth+.2155;var n=o(["x"],[s.mathsym("X",e.mode)]);return o(["katex-logo","mord"],[h,a,r,l,n],t.getColor())},overline:function(e,t,i){var h=z(e.value.body,t.withStyle(t.style.cramp())),r=n.metrics.defaultRuleThickness/t.style.sizeMultiplier,l=o([t.style.reset(),a.TEXT.cls(),"overline-line"]);l.height=r,l.maxFontSize=1;var p=s.makeVList([{type:"elem",elem:h},{type:"kern",size:3*r},{type:"elem",elem:l},{type:"kern",size:r}],"firstBaseline",null,t);return o(["overline","mord"],[p],t.getColor())},sqrt:function(e,t,i){var h=z(e.value.body,t.withStyle(t.style.cramp())),l=n.metrics.defaultRuleThickness/t.style.sizeMultiplier,p=o([t.style.reset(),a.TEXT.cls(),"sqrt-line"],[],t.getColor());p.height=l,p.maxFontSize=1;var c=l;t.style.id<a.TEXT.id&&(c=n.metrics.xHeight);var g=l+c/4,d=(h.height+h.depth)*t.style.sizeMultiplier,u=d+g+l,k=o(["sqrt-sign"],[r.customSizedDelim("\\surd",u,!1,t,e.mode)],t.getColor()),w=k.height+k.depth-l;w>h.height+h.depth+g&&(g=(g+w-h.height-h.depth)/2);var f=-(h.height+g+l)+k.height;k.style.top=f+"em",k.height-=f,k.depth+=f;var m;if(m=0===h.height&&0===h.depth?o():s.makeVList([{type:"elem",elem:h},{type:"kern",size:g},{type:"elem",elem:p},{type:"kern",size:l}],"firstBaseline",null,t),e.value.index){var x=z(e.value.index,t.withStyle(a.SCRIPTSCRIPT)),y=o([t.style.reset(),a.SCRIPTSCRIPT.cls()],[x]),v=Math.max(k.height,m.height),b=Math.max(k.depth,m.depth),T=.6*(v-b),S=s.makeVList([{type:"elem",elem:y}],"shift",-T,t),M=o(["root"],[S]);return o(["sqrt","mord"],[M,k,m])}return o(["sqrt","mord"],[k,m])},sizing:function(e,t,i){var h=c(e.value.value,t.withSize(e.value.size),i),a=o(["mord"],[o(["sizing","reset-"+t.size,e.value.size,t.style.cls()],h)]),r=s.sizingMultiplier[e.value.size];return a.maxFontSize=r*t.style.sizeMultiplier,a},styling:function(e,t,i){var h={display:a.DISPLAY,text:a.TEXT,script:a.SCRIPT,scriptscript:a.SCRIPTSCRIPT},s=h[e.value.style],r=c(e.value.value,t.withStyle(s),i);return o([t.style.reset(),s.cls()],r)},font:function(e,t,i){var h=e.value.font;return z(e.value.body,t.withFont(h),i)},delimsizing:function(e,t,i){var h=e.value.value;return"."===h?o([g[e.value.delimType]]):o([g[e.value.delimType]],[r.sizedDelim(h,e.value.size,t,e.mode)])},leftright:function(e,t,i){for(var h=c(e.value.body,t.reset()),a=0,s=0,l=0;l<h.length;l++)a=Math.max(h[l].height,a),s=Math.max(h[l].depth,s);a*=t.style.sizeMultiplier,s*=t.style.sizeMultiplier;var n;n="."===e.value.left?f(t):r.leftRightDelim(e.value.left,a,s,t,e.mode),h.unshift(n);var p;return p="."===e.value.right?f(t):r.leftRightDelim(e.value.right,a,s,t,e.mode),h.push(p),o(["minner",t.style.cls()],h,t.getColor())},rule:function(e,t,i){var h=o(["mord","rule"],[],t.getColor()),a=0;e.value.shift&&(a=e.value.shift.number,"ex"===e.value.shift.unit&&(a*=n.metrics.xHeight));var s=e.value.width.number;"ex"===e.value.width.unit&&(s*=n.metrics.xHeight);var r=e.value.height.number;return"ex"===e.value.height.unit&&(r*=n.metrics.xHeight),a/=t.style.sizeMultiplier,s/=t.style.sizeMultiplier,r/=t.style.sizeMultiplier,h.style.borderRightWidth=s+"em",h.style.borderTopWidth=r+"em",h.style.bottom=a+"em",h.width=s,h.height=r+a,h.depth=-a,h},accent:function(e,t,i){var h,a=e.value.base;if("supsub"===e.type){var r=e;e=r.value.base,a=e.value.base,r.value.base=a,h=z(r,t.reset(),i)}var l,p=z(a,t.withStyle(t.style.cramp()));if(w(a)){var c=k(a),g=z(c,t.withStyle(t.style.cramp()));l=g.skew}else l=0;var d=Math.min(p.height,n.metrics.xHeight),u=s.makeSymbol(e.value.accent,"Main-Regular","math",t.getColor());u.italic=0;var f="\\vec"===e.value.accent?"accent-vec":null,m=o(["accent-body",f],[o([],[u])]);m=s.makeVList([{type:"elem",elem:p},{type:"kern",size:-d},{type:"elem",elem:m}],"firstBaseline",null,t),m.children[1].style.marginLeft=2*l+"em";var x=o(["mord","accent"],[m]);return h?(h.children[0]=x,h.height=Math.max(x.height,h.height),h.classes[0]="mord",h):x},phantom:function(e,t,i){var h=c(e.value.value,t.withPhantom(),i);return new s.makeFragment(h)}},z=function(e,t,i){if(!e)return o();if(m[e.type]){var a,r=m[e.type](e,t,i);return t.style!==t.parentStyle&&(a=t.style.sizeMultiplier/t.parentStyle.sizeMultiplier,r.height*=a,r.depth*=a),t.size!==t.parentSize&&(a=s.sizingMultiplier[t.size]/s.sizingMultiplier[t.parentSize],r.height*=a,r.depth*=a),r}throw new h("Got group of unknown type: '"+e.type+"'")},x=function(e,t){e=JSON.parse(JSON.stringify(e));var i=c(e,t),h=o(["base",t.style.cls()],i),a=o(["strut"]),s=o(["strut","bottom"]);a.style.height=h.height+"em",s.style.height=h.height+h.depth+"em",s.style.verticalAlign=-h.depth+"em";var r=o(["katex-html"],[a,s,h]);return r.setAttribute("aria-hidden","true"),r};t.exports=x},{"./ParseError":7,"./Style":10,"./buildCommon":11,"./delimiter":15,"./domTree":16,"./fontMetrics":18,"./utils":25}],13:[function(e,t,i){var h=e("./buildCommon"),a=e("./fontMetrics"),s=e("./mathMLTree"),r=e("./ParseError"),l=e("./symbols"),n=e("./utils"),p=h.makeSpan,o=h.fontMap,c=function(e,t){return l[t][e]&&l[t][e].replace&&(e=l[t][e].replace),new s.TextNode(e)},g=function(e,t){var i=t.font;if(!i)return null;var h=e.mode;if("mathit"===i)return"italic";var s=e.value;if(n.contains(["\\imath","\\jmath"],s))return null;l[h][s]&&l[h][s].replace&&(s=l[h][s].replace);var r=o[i].fontName;return a.getCharacterMetrics(s,r)?o[t.font].variant:null},d={mathord:function(e,t){var i=new s.MathNode("mi",[c(e.value,e.mode)]),h=g(e,t);return h&&i.setAttribute("mathvariant",h),i},textord:function(e,t){var i,h=c(e.value,e.mode),a=g(e,t)||"normal";return/[0-9]/.test(e.value)?(i=new s.MathNode("mn",[h]),t.font&&i.setAttribute("mathvariant",a)):(i=new s.MathNode("mi",[h]),i.setAttribute("mathvariant",a)),i},bin:function(e){var t=new s.MathNode("mo",[c(e.value,e.mode)]);return t},rel:function(e){var t=new s.MathNode("mo",[c(e.value,e.mode)]);return t},open:function(e){var t=new s.MathNode("mo",[c(e.value,e.mode)]);return t},close:function(e){var t=new s.MathNode("mo",[c(e.value,e.mode)]);return t},inner:function(e){var t=new s.MathNode("mo",[c(e.value,e.mode)]);return t},punct:function(e){var t=new s.MathNode("mo",[c(e.value,e.mode)]);return t.setAttribute("separator","true"),t},ordgroup:function(e,t){var i=u(e.value,t),h=new s.MathNode("mrow",i);return h},text:function(e,t){var i=u(e.value.body,t),h=new s.MathNode("mtext",i);return h},color:function(e,t){var i=u(e.value.value,t),h=new s.MathNode("mstyle",i);return h.setAttribute("mathcolor",e.value.color),h},supsub:function(e,t){var i=[k(e.value.base,t)];e.value.sub&&i.push(k(e.value.sub,t)),e.value.sup&&i.push(k(e.value.sup,t));var h;h=e.value.sub?e.value.sup?"msubsup":"msub":"msup";var a=new s.MathNode(h,i);return a},genfrac:function(e,t){var i=new s.MathNode("mfrac",[k(e.value.numer,t),k(e.value.denom,t)]);if(e.value.hasBarLine||i.setAttribute("linethickness","0px"),null!=e.value.leftDelim||null!=e.value.rightDelim){var h=[];if(null!=e.value.leftDelim){var a=new s.MathNode("mo",[new s.TextNode(e.value.leftDelim)]);a.setAttribute("fence","true"),h.push(a);
}if(h.push(i),null!=e.value.rightDelim){var r=new s.MathNode("mo",[new s.TextNode(e.value.rightDelim)]);r.setAttribute("fence","true"),h.push(r)}var l=new s.MathNode("mrow",h);return l}return i},array:function(e,t){return new s.MathNode("mtable",e.value.body.map(function(e){return new s.MathNode("mtr",e.map(function(e){return new s.MathNode("mtd",[k(e,t)])}))}))},sqrt:function(e,t){var i;return i=e.value.index?new s.MathNode("mroot",[k(e.value.body,t),k(e.value.index,t)]):new s.MathNode("msqrt",[k(e.value.body,t)])},leftright:function(e,t){var i=u(e.value.body,t);if("."!==e.value.left){var h=new s.MathNode("mo",[c(e.value.left,e.mode)]);h.setAttribute("fence","true"),i.unshift(h)}if("."!==e.value.right){var a=new s.MathNode("mo",[c(e.value.right,e.mode)]);a.setAttribute("fence","true"),i.push(a)}var r=new s.MathNode("mrow",i);return r},accent:function(e,t){var i=new s.MathNode("mo",[c(e.value.accent,e.mode)]),h=new s.MathNode("mover",[k(e.value.base,t),i]);return h.setAttribute("accent","true"),h},spacing:function(e){var t;return"\\ "===e.value||"\\space"===e.value||" "===e.value||"~"===e.value?t=new s.MathNode("mtext",[new s.TextNode(" ")]):(t=new s.MathNode("mspace"),t.setAttribute("width",h.spacingFunctions[e.value].size)),t},op:function(e){var t;return t=e.value.symbol?new s.MathNode("mo",[c(e.value.body,e.mode)]):new s.MathNode("mi",[new s.TextNode(e.value.body.slice(1))])},katex:function(e){var t=new s.MathNode("mtext",[new s.TextNode("KaTeX")]);return t},font:function(e,t){var i=e.value.font;return k(e.value.body,t.withFont(i))},delimsizing:function(e){var t=[];"."!==e.value.value&&t.push(c(e.value.value,e.mode));var i=new s.MathNode("mo",t);return"open"===e.value.delimType||"close"===e.value.delimType?i.setAttribute("fence","true"):i.setAttribute("fence","false"),i},styling:function(e,t){var i=u(e.value.value,t),h=new s.MathNode("mstyle",i),a={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},r=a[e.value.style];return h.setAttribute("scriptlevel",r[0]),h.setAttribute("displaystyle",r[1]),h},sizing:function(e,t){var i=u(e.value.value,t),a=new s.MathNode("mstyle",i);return a.setAttribute("mathsize",h.sizingMultiplier[e.value.size]+"em"),a},overline:function(e,t){var i=new s.MathNode("mo",[new s.TextNode("‾")]);i.setAttribute("stretchy","true");var h=new s.MathNode("mover",[k(e.value.body,t),i]);return h.setAttribute("accent","true"),h},rule:function(e){var t=new s.MathNode("mrow");return t},llap:function(e,t){var i=new s.MathNode("mpadded",[k(e.value.body,t)]);return i.setAttribute("lspace","-1width"),i.setAttribute("width","0px"),i},rlap:function(e,t){var i=new s.MathNode("mpadded",[k(e.value.body,t)]);return i.setAttribute("width","0px"),i},phantom:function(e,t,i){var h=u(e.value.value,t);return new s.MathNode("mphantom",h)}},u=function(e,t){for(var i=[],h=0;h<e.length;h++){var a=e[h];i.push(k(a,t))}return i},k=function(e,t){if(!e)return new s.MathNode("mrow");if(d[e.type])return d[e.type](e,t);throw new r("Got group of unknown type: '"+e.type+"'")},w=function(e,t,i){var h=u(e,i),a=new s.MathNode("mrow",h),r=new s.MathNode("annotation",[new s.TextNode(t)]);r.setAttribute("encoding","application/x-tex");var l=new s.MathNode("semantics",[a,r]),n=new s.MathNode("math",[l]);return p(["katex-mathml"],[n])};t.exports=w},{"./ParseError":7,"./buildCommon":11,"./fontMetrics":18,"./mathMLTree":21,"./symbols":24,"./utils":25}],14:[function(e,t,i){var h=e("./buildHTML"),a=e("./buildMathML"),s=e("./buildCommon"),r=e("./Options"),l=e("./Settings"),n=e("./Style"),p=s.makeSpan,o=function(e,t,i){i=i||new l({});var s=n.TEXT;i.displayMode&&(s=n.DISPLAY);var o=new r({style:s,size:"size5"}),c=a(e,t,o),g=h(e,o),d=p(["katex"],[c,g]);return i.displayMode?p(["katex-display"],[d]):d};t.exports=o},{"./Options":6,"./Settings":9,"./Style":10,"./buildCommon":11,"./buildHTML":12,"./buildMathML":13}],15:[function(e,t,i){var h=e("./ParseError"),a=e("./Style"),s=e("./buildCommon"),r=e("./fontMetrics"),l=e("./symbols"),n=e("./utils"),p=s.makeSpan,o=function(e,t){return l.math[e]&&l.math[e].replace?r.getCharacterMetrics(l.math[e].replace,t):r.getCharacterMetrics(e,t)},c=function(e,t,i){return s.makeSymbol(e,"Size"+t+"-Regular",i)},g=function(e,t,i){var h=p(["style-wrap",i.style.reset(),t.cls()],[e]),a=t.sizeMultiplier/i.style.sizeMultiplier;return h.height*=a,h.depth*=a,h.maxFontSize=t.sizeMultiplier,h},d=function(e,t,i,h,a){var l=s.makeSymbol(e,"Main-Regular",a),n=g(l,t,h);if(i){var p=(1-h.style.sizeMultiplier/t.sizeMultiplier)*r.metrics.axisHeight;n.style.top=p+"em",n.height-=p,n.depth+=p}return n},u=function(e,t,i,h,s){var l=c(e,t,s),n=g(p(["delimsizing","size"+t],[l],h.getColor()),a.TEXT,h);if(i){var o=(1-h.style.sizeMultiplier)*r.metrics.axisHeight;n.style.top=o+"em",n.height-=o,n.depth+=o}return n},k=function(e,t,i){var h;"Size1-Regular"===t?h="delim-size1":"Size4-Regular"===t&&(h="delim-size4");var a=p(["delimsizinginner",h],[p([],[s.makeSymbol(e,t,i)])]);return{type:"elem",elem:a}},w=function(e,t,i,h,l){var n,c,d,u;n=d=u=e,c=null;var w="Size1-Regular";"\\uparrow"===e?d=u="⏐":"\\Uparrow"===e?d=u="‖":"\\downarrow"===e?n=d="⏐":"\\Downarrow"===e?n=d="‖":"\\updownarrow"===e?(n="\\uparrow",d="⏐",u="\\downarrow"):"\\Updownarrow"===e?(n="\\Uparrow",d="‖",u="\\Downarrow"):"["===e||"\\lbrack"===e?(n="⎡",d="⎢",u="⎣",w="Size4-Regular"):"]"===e||"\\rbrack"===e?(n="⎤",d="⎥",u="⎦",w="Size4-Regular"):"\\lfloor"===e?(d=n="⎢",u="⎣",w="Size4-Regular"):"\\lceil"===e?(n="⎡",d=u="⎢",w="Size4-Regular"):"\\rfloor"===e?(d=n="⎥",u="⎦",w="Size4-Regular"):"\\rceil"===e?(n="⎤",d=u="⎥",w="Size4-Regular"):"("===e?(n="⎛",d="⎜",u="⎝",w="Size4-Regular"):")"===e?(n="⎞",d="⎟",u="⎠",w="Size4-Regular"):"\\{"===e||"\\lbrace"===e?(n="⎧",c="⎨",u="⎩",d="⎪",w="Size4-Regular"):"\\}"===e||"\\rbrace"===e?(n="⎫",c="⎬",u="⎭",d="⎪",w="Size4-Regular"):"\\lgroup"===e?(n="⎧",u="⎩",d="⎪",w="Size4-Regular"):"\\rgroup"===e?(n="⎫",u="⎭",d="⎪",w="Size4-Regular"):"\\lmoustache"===e?(n="⎧",u="⎭",d="⎪",w="Size4-Regular"):"\\rmoustache"===e?(n="⎫",u="⎩",d="⎪",w="Size4-Regular"):"\\surd"===e&&(n="",u="⎷",d="",w="Size4-Regular");var f=o(n,w),m=f.height+f.depth,z=o(d,w),x=z.height+z.depth,y=o(u,w),v=y.height+y.depth,b=0,T=1;if(null!==c){var S=o(c,w);b=S.height+S.depth,T=2}var M=m+v+b,X=Math.ceil((t-M)/(T*x)),K=M+X*T*x,R=r.metrics.axisHeight;i&&(R*=h.style.sizeMultiplier);var _=K/2-R,q=[];q.push(k(u,w,l));var A;if(null===c)for(A=0;X>A;A++)q.push(k(d,w,l));else{for(A=0;X>A;A++)q.push(k(d,w,l));for(q.push(k(c,w,l)),A=0;X>A;A++)q.push(k(d,w,l))}q.push(k(n,w,l));var j=s.makeVList(q,"bottom",_,h);return g(p(["delimsizing","mult"],[j],h.getColor()),a.TEXT,h)},f=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","\\surd"],m=["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache"],z=["<",">","\\langle","\\rangle","/","\\backslash"],x=[0,1.2,1.8,2.4,3],y=function(e,t,i,a){if("<"===e?e="\\langle":">"===e&&(e="\\rangle"),n.contains(f,e)||n.contains(z,e))return u(e,t,!1,i,a);if(n.contains(m,e))return w(e,x[t],!1,i,a);throw new h("Illegal delimiter: '"+e+"'")},v=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],b=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"stack"}],T=[{type:"small",style:a.SCRIPTSCRIPT},{type:"small",style:a.SCRIPT},{type:"small",style:a.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],S=function(e){return"small"===e.type?"Main-Regular":"large"===e.type?"Size"+e.size+"-Regular":"stack"===e.type?"Size4-Regular":void 0},M=function(e,t,i,h){for(var a=Math.min(2,3-h.style.size),s=a;s<i.length&&"stack"!==i[s].type;s++){var r=o(e,S(i[s])),l=r.height+r.depth;if("small"===i[s].type&&(l*=i[s].style.sizeMultiplier),l>t)return i[s]}return i[i.length-1]},X=function(e,t,i,h,a){"<"===e?e="\\langle":">"===e&&(e="\\rangle");var s;s=n.contains(z,e)?v:n.contains(f,e)?T:b;var r=M(e,t,s,h);return"small"===r.type?d(e,r.style,i,h,a):"large"===r.type?u(e,r.size,i,h,a):"stack"===r.type?w(e,t,i,h,a):void 0},K=function(e,t,i,h,a){var s=r.metrics.axisHeight*h.style.sizeMultiplier,l=901,n=5/r.metrics.ptPerEm,p=Math.max(t-s,i+s),o=Math.max(p/500*l,2*p-n);return X(e,o,!0,h,a)};t.exports={sizedDelim:y,customSizedDelim:X,leftRightDelim:K}},{"./ParseError":7,"./Style":10,"./buildCommon":11,"./fontMetrics":18,"./symbols":24,"./utils":25}],16:[function(e,t,i){function h(e,t,i,h,a,s){this.classes=e||[],this.children=t||[],this.height=i||0,this.depth=h||0,this.maxFontSize=a||0,this.style=s||{},this.attributes={}}function a(e,t,i,h){this.children=e||[],this.height=t||0,this.depth=i||0,this.maxFontSize=h||0}function s(e,t,i,h,a,s,r){this.value=e||"",this.height=t||0,this.depth=i||0,this.italic=h||0,this.skew=a||0,this.classes=s||[],this.style=r||{},this.maxFontSize=0}var r=e("./utils"),l=function(e){e=e.slice();for(var t=e.length-1;t>=0;t--)e[t]||e.splice(t,1);return e.join(" ")};h.prototype.setAttribute=function(e,t){this.attributes[e]=t},h.prototype.toNode=function(){var e=document.createElement("span");e.className=l(this.classes);for(var t in this.style)Object.prototype.hasOwnProperty.call(this.style,t)&&(e.style[t]=this.style[t]);for(var i in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,i)&&e.setAttribute(i,this.attributes[i]);for(var h=0;h<this.children.length;h++)e.appendChild(this.children[h].toNode());return e},h.prototype.toMarkup=function(){var e="<span";this.classes.length&&(e+=' class="',e+=r.escape(l(this.classes)),e+='"');var t="";for(var i in this.style)this.style.hasOwnProperty(i)&&(t+=r.hyphenate(i)+":"+this.style[i]+";");t&&(e+=' style="'+r.escape(t)+'"');for(var h in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,h)&&(e+=" "+h+'="',e+=r.escape(this.attributes[h]),e+='"');e+=">";for(var a=0;a<this.children.length;a++)e+=this.children[a].toMarkup();return e+="</span>"},a.prototype.toNode=function(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e},a.prototype.toMarkup=function(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e},s.prototype.toNode=function(){var e=document.createTextNode(this.value),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=this.italic+"em"),this.classes.length>0&&(t=t||document.createElement("span"),t.className=l(this.classes));for(var i in this.style)this.style.hasOwnProperty(i)&&(t=t||document.createElement("span"),t.style[i]=this.style[i]);return t?(t.appendChild(e),t):e},s.prototype.toMarkup=function(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=r.escape(l(this.classes)),t+='"');var i="";this.italic>0&&(i+="margin-right:"+this.italic+"em;");for(var h in this.style)this.style.hasOwnProperty(h)&&(i+=r.hyphenate(h)+":"+this.style[h]+";");i&&(e=!0,t+=' style="'+r.escape(i)+'"');var a=r.escape(this.value);return e?(t+=">",t+=a,t+="</span>"):a},t.exports={span:h,documentFragment:a,symbolNode:s}},{"./utils":25}],17:[function(e,t,i){function h(e,t,i,h){for(var a=[],s=[a],p=[];;){var o=e.parseExpression(t,i,!1,null);a.push(new l("ordgroup",o.result,i)),t=o.position;var c=o.peek.text;if("&"===c)t=o.peek.position;else{if("\\end"===c)break;if("\\\\"!==c&&"\\cr"!==c)throw new r("Expected & or \\\\ or \\end",e.lexer,o.peek.position);var g=e.parseFunction(t,i);p.push(g.result.value.size),t=g.position,a=[],s.push(a)}}return h.body=s,h.rowGaps=p,new n(new l(h.type,h,i),t)}var a=e("./fontMetrics"),s=e("./parseData"),r=e("./ParseError"),l=s.ParseNode,n=s.ParseResult,p=[{names:["array"],numArgs:1,handler:function(e,t,i,a,s){var l=this;a=a.value.map?a.value:[a];var n=a.map(function(e){var t=e.value;if(-1!=="lcr".indexOf(t))return{type:"align",align:t};if("|"===t)return{type:"separator",separator:"|"};throw new r("Unknown column alignment: "+e.value,l.lexer,s[1])}),p={type:"array",cols:n,hskipBeforeAndAfter:!0};return p=h(l,e,t,p)}},{names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix"],handler:function(e,t,i){var a={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i],s={type:"array",hskipBeforeAndAfter:!1};return s=h(this,e,t,s),a&&(s.result=new l("leftright",{body:[s.result],left:a[0],right:a[1]},t)),s}},{names:["cases"],handler:function(e,t,i){var s={type:"array",arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:a.metrics.quad},{type:"align",align:"l",pregap:0,postgap:0}]};return s=h(this,e,t,s),s.result=new l("leftright",{body:[s.result],left:"\\{",right:"."},t),s}}];t.exports=function(){for(var e={},t=0;t<p.length;++t){var i=p[t];i.greediness=1,i.allowedInText=!!i.allowedInText,i.numArgs=i.numArgs||0,i.numOptionalArgs=i.numOptionalArgs||0;for(var h=0;h<i.names.length;++h)e[i.names[h]]=i}return e}()},{"./ParseError":7,"./fontMetrics":18,"./parseData":22}],18:[function(e,t,i){var h=e("./Style"),a=.431,s=1,r=.677,l=.394,n=.444,p=.686,o=.345,c=.413,g=.363,d=.289,u=.15,k=.247,w=.386,f=.05,m=2.39,z=1.01,x=.81,y=.71,v=.25,b=.04,T=.111,S=.166,M=.2,X=.6,K=.1,R=10,_=2/R,q={xHeight:a,quad:s,num1:r,num2:l,num3:n,denom1:p,denom2:o,sup1:c,sup2:g,sup3:d,sub1:u,sub2:k,supDrop:w,subDrop:f,axisHeight:v,defaultRuleThickness:b,bigOpSpacing1:T,bigOpSpacing2:S,bigOpSpacing3:M,bigOpSpacing4:X,bigOpSpacing5:K,ptPerEm:R,emPerEx:a/s,doubleRuleSep:_,delim1:m,getDelim2:function(e){if(e.size===h.TEXT.size)return z;if(e.size===h.SCRIPT.size)return x;if(e.size===h.SCRIPTSCRIPT.size)return y;throw new Error("Unexpected style size: "+e.size)}},A=e("./fontMetricsData"),j=function(e,t){return A[t][e.charCodeAt(0)]};t.exports={metrics:q,getCharacterMetrics:j}},{"./Style":10,"./fontMetricsData":19}],19:[function(e,t,i){t.exports={"AMS-Regular":{65:{depth:0,height:.68889,italic:0,skew:0},66:{depth:0,height:.68889,italic:0,skew:0},67:{depth:0,height:.68889,italic:0,skew:0},68:{depth:0,height:.68889,italic:0,skew:0},69:{depth:0,height:.68889,italic:0,skew:0},70:{depth:0,height:.68889,italic:0,skew:0},71:{depth:0,height:.68889,italic:0,skew:0},72:{depth:0,height:.68889,italic:0,skew:0},73:{depth:0,height:.68889,italic:0,skew:0},74:{depth:.16667,height:.68889,italic:0,skew:0},75:{depth:0,height:.68889,italic:0,skew:0},76:{depth:0,height:.68889,italic:0,skew:0},77:{depth:0,height:.68889,italic:0,skew:0},78:{depth:0,height:.68889,italic:0,skew:0},79:{depth:.16667,height:.68889,italic:0,skew:0},80:{depth:0,height:.68889,italic:0,skew:0},81:{depth:.16667,height:.68889,italic:0,skew:0},82:{depth:0,height:.68889,italic:0,skew:0},83:{depth:0,height:.68889,italic:0,skew:0},84:{depth:0,height:.68889,italic:0,skew:0},85:{depth:0,height:.68889,italic:0,skew:0},86:{depth:0,height:.68889,italic:0,skew:0},87:{depth:0,height:.68889,italic:0,skew:0},88:{depth:0,height:.68889,italic:0,skew:0},89:{depth:0,height:.68889,italic:0,skew:0},90:{depth:0,height:.68889,italic:0,skew:0},107:{depth:0,height:.68889,italic:0,skew:0},165:{depth:0,height:.675,italic:.025,skew:0},174:{depth:.15559,height:.69224,italic:0,skew:0},240:{depth:0,height:.68889,italic:0,skew:0},295:{depth:0,height:.68889,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.9,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.9,italic:0,skew:0},989:{depth:.08167,height:.58167,italic:0,skew:0},1008:{depth:0,height:.43056,italic:.04028,skew:0},8245:{depth:0,height:.54986,italic:0,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8487:{depth:0,height:.68889,italic:0,skew:0},8498:{depth:0,height:.68889,italic:0,skew:0},8502:{depth:0,height:.68889,italic:0,skew:0},8503:{depth:0,height:.68889,italic:0,skew:0},8504:{depth:0,height:.68889,italic:0,skew:0},8513:{depth:0,height:.68889,italic:0,skew:0},8592:{depth:-.03598,height:.46402,italic:0,skew:0},8594:{depth:-.03598,height:.46402,italic:0,skew:0},8602:{depth:-.13313,height:.36687,italic:0,skew:0},8603:{depth:-.13313,height:.36687,italic:0,skew:0},8606:{depth:.01354,height:.52239,italic:0,skew:0},8608:{depth:.01354,height:.52239,italic:0,skew:0},8610:{depth:.01354,height:.52239,italic:0,skew:0},8611:{depth:.01354,height:.52239,italic:0,skew:0},8619:{depth:0,height:.54986,italic:0,skew:0},8620:{depth:0,height:.54986,italic:0,skew:0},8621:{depth:-.13313,height:.37788,italic:0,skew:0},8622:{depth:-.13313,height:.36687,italic:0,skew:0},8624:{depth:0,height:.69224,italic:0,skew:0},8625:{depth:0,height:.69224,italic:0,skew:0},8630:{depth:0,height:.43056,italic:0,skew:0},8631:{depth:0,height:.43056,italic:0,skew:0},8634:{depth:.08198,height:.58198,italic:0,skew:0},8635:{depth:.08198,height:.58198,italic:0,skew:0},8638:{depth:.19444,height:.69224,italic:0,skew:0},8639:{depth:.19444,height:.69224,italic:0,skew:0},8642:{depth:.19444,height:.69224,italic:0,skew:0},8643:{depth:.19444,height:.69224,italic:0,skew:0},8644:{depth:.1808,height:.675,italic:0,skew:0},8646:{depth:.1808,height:.675,italic:0,skew:0},8647:{depth:.1808,height:.675,italic:0,skew:0},8648:{depth:.19444,height:.69224,italic:0,skew:0},8649:{depth:.1808,height:.675,italic:0,skew:0},8650:{depth:.19444,height:.69224,italic:0,skew:0},8651:{depth:.01354,height:.52239,italic:0,skew:0},8652:{depth:.01354,height:.52239,italic:0,skew:0},8653:{depth:-.13313,height:.36687,italic:0,skew:0},8654:{depth:-.13313,height:.36687,italic:0,skew:0},8655:{depth:-.13313,height:.36687,italic:0,skew:0},8666:{depth:.13667,height:.63667,italic:0,skew:0},8667:{depth:.13667,height:.63667,italic:0,skew:0},8669:{depth:-.13313,height:.37788,italic:0,skew:0},8672:{depth:-.064,height:.437,italic:0,skew:0},8674:{depth:-.064,height:.437,italic:0,skew:0},8705:{depth:0,height:.825,italic:0,skew:0},8708:{depth:0,height:.68889,italic:0,skew:0},8709:{depth:.08167,height:.58167,italic:0,skew:0},8717:{depth:0,height:.43056,italic:0,skew:0},8722:{depth:-.03598,height:.46402,italic:0,skew:0},8724:{depth:.08198,height:.69224,italic:0,skew:0},8726:{depth:.08167,height:.58167,italic:0,skew:0},8733:{depth:0,height:.69224,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8737:{depth:0,height:.69224,italic:0,skew:0},8738:{depth:.03517,height:.52239,italic:0,skew:0},8739:{depth:.08167,height:.58167,italic:0,skew:0},8740:{depth:.25142,height:.74111,italic:0,skew:0},8741:{depth:.08167,height:.58167,italic:0,skew:0},8742:{depth:.25142,height:.74111,italic:0,skew:0},8756:{depth:0,height:.69224,italic:0,skew:0},8757:{depth:0,height:.69224,italic:0,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8765:{depth:-.13313,height:.37788,italic:0,skew:0},8769:{depth:-.13313,height:.36687,italic:0,skew:0},8770:{depth:-.03625,height:.46375,italic:0,skew:0},8774:{depth:.30274,height:.79383,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8778:{depth:.08167,height:.58167,italic:0,skew:0},8782:{depth:.06062,height:.54986,italic:0,skew:0},8783:{depth:.06062,height:.54986,italic:0,skew:0},8785:{depth:.08198,height:.58198,italic:0,skew:0},8786:{depth:.08198,height:.58198,italic:0,skew:0},8787:{depth:.08198,height:.58198,italic:0,skew:0},8790:{depth:0,height:.69224,italic:0,skew:0},8791:{depth:.22958,height:.72958,italic:0,skew:0},8796:{depth:.08198,height:.91667,italic:0,skew:0},8806:{depth:.25583,height:.75583,italic:0,skew:0},8807:{depth:.25583,height:.75583,italic:0,skew:0},8808:{depth:.25142,height:.75726,italic:0,skew:0},8809:{depth:.25142,height:.75726,italic:0,skew:0},8812:{depth:.25583,height:.75583,italic:0,skew:0},8814:{depth:.20576,height:.70576,italic:0,skew:0},8815:{depth:.20576,height:.70576,italic:0,skew:0},8816:{depth:.30274,height:.79383,italic:0,skew:0},8817:{depth:.30274,height:.79383,italic:0,skew:0},8818:{depth:.22958,height:.72958,italic:0,skew:0},8819:{depth:.22958,height:.72958,italic:0,skew:0},8822:{depth:.1808,height:.675,italic:0,skew:0},8823:{depth:.1808,height:.675,italic:0,skew:0},8828:{depth:.13667,height:.63667,italic:0,skew:0},8829:{depth:.13667,height:.63667,italic:0,skew:0},8830:{depth:.22958,height:.72958,italic:0,skew:0},8831:{depth:.22958,height:.72958,italic:0,skew:0},8832:{depth:.20576,height:.70576,italic:0,skew:0},8833:{depth:.20576,height:.70576,italic:0,skew:0},8840:{depth:.30274,height:.79383,italic:0,skew:0},8841:{depth:.30274,height:.79383,italic:0,skew:0},8842:{depth:.13597,height:.63597,italic:0,skew:0},8843:{depth:.13597,height:.63597,italic:0,skew:0},8847:{depth:.03517,height:.54986,italic:0,skew:0},8848:{depth:.03517,height:.54986,italic:0,skew:0},8858:{depth:.08198,height:.58198,italic:0,skew:0},8859:{depth:.08198,height:.58198,italic:0,skew:0},8861:{depth:.08198,height:.58198,italic:0,skew:0},8862:{depth:0,height:.675,italic:0,skew:0},8863:{depth:0,height:.675,italic:0,skew:0},8864:{depth:0,height:.675,italic:0,skew:0},8865:{depth:0,height:.675,italic:0,skew:0},8872:{depth:0,height:.69224,italic:0,skew:0},8873:{depth:0,height:.69224,italic:0,skew:0},8874:{depth:0,height:.69224,italic:0,skew:0},8876:{depth:0,height:.68889,italic:0,skew:0},8877:{depth:0,height:.68889,italic:0,skew:0},8878:{depth:0,height:.68889,italic:0,skew:0},8879:{depth:0,height:.68889,italic:0,skew:0},8882:{depth:.03517,height:.54986,italic:0,skew:0},8883:{depth:.03517,height:.54986,italic:0,skew:0},8884:{depth:.13667,height:.63667,italic:0,skew:0},8885:{depth:.13667,height:.63667,italic:0,skew:0},8888:{depth:0,height:.54986,italic:0,skew:0},8890:{depth:.19444,height:.43056,italic:0,skew:0},8891:{depth:.19444,height:.69224,italic:0,skew:0},8892:{depth:.19444,height:.69224,italic:0,skew:0},8901:{depth:0,height:.54986,italic:0,skew:0},8903:{depth:.08167,height:.58167,italic:0,skew:0},8905:{depth:.08167,height:.58167,italic:0,skew:0},8906:{depth:.08167,height:.58167,italic:0,skew:0},8907:{depth:0,height:.69224,italic:0,skew:0},8908:{depth:0,height:.69224,italic:0,skew:0},8909:{depth:-.03598,height:.46402,italic:0,skew:0},8910:{depth:0,height:.54986,italic:0,skew:0},8911:{depth:0,height:.54986,italic:0,skew:0},8912:{depth:.03517,height:.54986,italic:0,skew:0},8913:{depth:.03517,height:.54986,italic:0,skew:0},8914:{depth:0,height:.54986,italic:0,skew:0},8915:{depth:0,height:.54986,italic:0,skew:0},8916:{depth:0,height:.69224,italic:0,skew:0},8918:{depth:.0391,height:.5391,italic:0,skew:0},8919:{depth:.0391,height:.5391,italic:0,skew:0},8920:{depth:.03517,height:.54986,italic:0,skew:0},8921:{depth:.03517,height:.54986,italic:0,skew:0},8922:{depth:.38569,height:.88569,italic:0,skew:0},8923:{depth:.38569,height:.88569,italic:0,skew:0},8926:{depth:.13667,height:.63667,italic:0,skew:0},8927:{depth:.13667,height:.63667,italic:0,skew:0},8928:{depth:.30274,height:.79383,italic:0,skew:0},8929:{depth:.30274,height:.79383,italic:0,skew:0},8934:{depth:.23222,height:.74111,italic:0,skew:0},8935:{depth:.23222,height:.74111,italic:0,skew:0},8936:{depth:.23222,height:.74111,italic:0,skew:0},8937:{depth:.23222,height:.74111,italic:0,skew:0},8938:{depth:.20576,height:.70576,italic:0,skew:0},8939:{depth:.20576,height:.70576,italic:0,skew:0},8940:{depth:.30274,height:.79383,italic:0,skew:0},8941:{depth:.30274,height:.79383,italic:0,skew:0},8994:{depth:.19444,height:.69224,italic:0,skew:0},8995:{depth:.19444,height:.69224,italic:0,skew:0},9416:{depth:.15559,height:.69224,italic:0,skew:0},9484:{depth:0,height:.69224,italic:0,skew:0},9488:{depth:0,height:.69224,italic:0,skew:0},9492:{depth:0,height:.37788,italic:0,skew:0},9496:{depth:0,height:.37788,italic:0,skew:0},9585:{depth:.19444,height:.68889,italic:0,skew:0},9586:{depth:.19444,height:.74111,italic:0,skew:0},9632:{depth:0,height:.675,italic:0,skew:0},9633:{depth:0,height:.675,italic:0,skew:0},9650:{depth:0,height:.54986,italic:0,skew:0},9651:{depth:0,height:.54986,italic:0,skew:0},9654:{depth:.03517,height:.54986,italic:0,skew:0},9660:{depth:0,height:.54986,italic:0,skew:0},9661:{depth:0,height:.54986,italic:0,skew:0},9664:{depth:.03517,height:.54986,italic:0,skew:0},9674:{depth:.11111,height:.69224,italic:0,skew:0},9733:{depth:.19444,height:.69224,italic:0,skew:0},10003:{depth:0,height:.69224,italic:0,skew:0},10016:{depth:0,height:.69224,italic:0,skew:0},10731:{depth:.11111,height:.69224,italic:0,skew:0},10846:{depth:.19444,height:.75583,italic:0,skew:0},10877:{depth:.13667,height:.63667,italic:0,skew:0},10878:{depth:.13667,height:.63667,italic:0,skew:0},10885:{depth:.25583,height:.75583,italic:0,skew:0},10886:{depth:.25583,height:.75583,italic:0,skew:0},10887:{depth:.13597,height:.63597,italic:0,skew:0},10888:{depth:.13597,height:.63597,italic:0,skew:0},10889:{depth:.26167,height:.75726,italic:0,skew:0},10890:{depth:.26167,height:.75726,italic:0,skew:0},10891:{depth:.48256,height:.98256,italic:0,skew:0},10892:{depth:.48256,height:.98256,italic:0,skew:0},10901:{depth:.13667,height:.63667,italic:0,skew:0},10902:{depth:.13667,height:.63667,italic:0,skew:0},10933:{depth:.25142,height:.75726,italic:0,skew:0},10934:{depth:.25142,height:.75726,italic:0,skew:0},10935:{depth:.26167,height:.75726,italic:0,skew:0},10936:{depth:.26167,height:.75726,italic:0,skew:0},10937:{depth:.26167,height:.75726,italic:0,skew:0},10938:{depth:.26167,height:.75726,italic:0,skew:0},10949:{depth:.25583,height:.75583,italic:0,skew:0},10950:{depth:.25583,height:.75583,italic:0,skew:0},10955:{depth:.28481,height:.79383,italic:0,skew:0},10956:{depth:.28481,height:.79383,italic:0,skew:0},57350:{depth:.08167,height:.58167,italic:0,skew:0},57351:{depth:.08167,height:.58167,italic:0,skew:0},57352:{depth:.08167,height:.58167,italic:0,skew:0},57353:{depth:0,height:.43056,italic:.04028,skew:0},57356:{depth:.25142,height:.75726,italic:0,skew:0},57357:{depth:.25142,height:.75726,italic:0,skew:0},57358:{depth:.41951,height:.91951,italic:0,skew:0},57359:{depth:.30274,height:.79383,italic:0,skew:0},57360:{depth:.30274,height:.79383,italic:0,skew:0},57361:{depth:.41951,height:.91951,italic:0,skew:0},57366:{depth:.25142,height:.75726,italic:0,skew:0},57367:{depth:.25142,height:.75726,italic:0,skew:0},57368:{depth:.25142,height:.75726,italic:0,skew:0},57369:{depth:.25142,height:.75726,italic:0,skew:0},57370:{depth:.13597,height:.63597,italic:0,skew:0},57371:{depth:.13597,height:.63597,italic:0,skew:0}},"Caligraphic-Regular":{48:{depth:0,height:.43056,italic:0,skew:0},49:{depth:0,height:.43056,italic:0,skew:0},50:{depth:0,height:.43056,italic:0,skew:0},51:{depth:.19444,height:.43056,italic:0,skew:0},52:{depth:.19444,height:.43056,italic:0,skew:0},53:{depth:.19444,height:.43056,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:.19444,height:.43056,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:.19444,height:.43056,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.19445},66:{depth:0,height:.68333,italic:.03041,skew:.13889},67:{depth:0,height:.68333,italic:.05834,skew:.13889},68:{depth:0,height:.68333,italic:.02778,skew:.08334},69:{depth:0,height:.68333,italic:.08944,skew:.11111},70:{depth:0,height:.68333,italic:.09931,skew:.11111},71:{depth:.09722,height:.68333,italic:.0593,skew:.11111},72:{depth:0,height:.68333,italic:.00965,skew:.11111},73:{depth:0,height:.68333,italic:.07382,skew:0},74:{depth:.09722,height:.68333,italic:.18472,skew:.16667},75:{depth:0,height:.68333,italic:.01445,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.13889},77:{depth:0,height:.68333,italic:0,skew:.13889},78:{depth:0,height:.68333,italic:.14736,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.11111},80:{depth:0,height:.68333,italic:.08222,skew:.08334},81:{depth:.09722,height:.68333,italic:0,skew:.11111},82:{depth:0,height:.68333,italic:0,skew:.08334},83:{depth:0,height:.68333,italic:.075,skew:.13889},84:{depth:0,height:.68333,italic:.25417,skew:0},85:{depth:0,height:.68333,italic:.09931,skew:.08334},86:{depth:0,height:.68333,italic:.08222,skew:0},87:{depth:0,height:.68333,italic:.08222,skew:.08334},88:{depth:0,height:.68333,italic:.14643,skew:.13889},89:{depth:.09722,height:.68333,italic:.08222,skew:.08334},90:{depth:0,height:.68333,italic:.07944,skew:.13889}},"Fraktur-Regular":{33:{depth:0,height:.69141,italic:0,skew:0},34:{depth:0,height:.69141,italic:0,skew:0},38:{depth:0,height:.69141,italic:0,skew:0},39:{depth:0,height:.69141,italic:0,skew:0},40:{depth:.24982,height:.74947,italic:0,skew:0},41:{depth:.24982,height:.74947,italic:0,skew:0},42:{depth:0,height:.62119,italic:0,skew:0},43:{depth:.08319,height:.58283,italic:0,skew:0},44:{depth:0,height:.10803,italic:0,skew:0},45:{depth:.08319,height:.58283,italic:0,skew:0},46:{depth:0,height:.10803,italic:0,skew:0},47:{depth:.24982,height:.74947,italic:0,skew:0},48:{depth:0,height:.47534,italic:0,skew:0},49:{depth:0,height:.47534,italic:0,skew:0},50:{depth:0,height:.47534,italic:0,skew:0},51:{depth:.18906,height:.47534,italic:0,skew:0},52:{depth:.18906,height:.47534,italic:0,skew:0},53:{depth:.18906,height:.47534,italic:0,skew:0},54:{depth:0,height:.69141,italic:0,skew:0},55:{depth:.18906,height:.47534,italic:0,skew:0},56:{depth:0,height:.69141,italic:0,skew:0},57:{depth:.18906,height:.47534,italic:0,skew:0},58:{depth:0,height:.47534,italic:0,skew:0},59:{depth:.12604,height:.47534,italic:0,skew:0},61:{depth:-.13099,height:.36866,italic:0,skew:0},63:{depth:0,height:.69141,italic:0,skew:0},65:{depth:0,height:.69141,italic:0,skew:0},66:{depth:0,height:.69141,italic:0,skew:0},67:{depth:0,height:.69141,italic:0,skew:0},68:{depth:0,height:.69141,italic:0,skew:0},69:{depth:0,height:.69141,italic:0,skew:0},70:{depth:.12604,height:.69141,italic:0,skew:0},71:{depth:0,height:.69141,italic:0,skew:0},72:{depth:.06302,height:.69141,italic:0,skew:0},73:{depth:0,height:.69141,italic:0,skew:0},74:{depth:.12604,height:.69141,italic:0,skew:0},75:{depth:0,height:.69141,italic:0,skew:0},76:{depth:0,height:.69141,italic:0,skew:0},77:{depth:0,height:.69141,italic:0,skew:0},78:{depth:0,height:.69141,italic:0,skew:0},79:{depth:0,height:.69141,italic:0,skew:0},80:{depth:.18906,height:.69141,italic:0,skew:0},81:{depth:.03781,height:.69141,italic:0,skew:0},82:{depth:0,height:.69141,italic:0,skew:0},83:{depth:0,height:.69141,italic:0,skew:0},84:{depth:0,height:.69141,italic:0,skew:0},85:{depth:0,height:.69141,italic:0,skew:0},86:{depth:0,height:.69141,italic:0,skew:0},87:{depth:0,height:.69141,italic:0,skew:0},88:{depth:0,height:.69141,italic:0,skew:0},89:{depth:.18906,height:.69141,italic:0,skew:0},90:{depth:.12604,height:.69141,italic:0,skew:0},91:{depth:.24982,height:.74947,italic:0,skew:0},93:{depth:.24982,height:.74947,italic:0,skew:0},94:{depth:0,height:.69141,italic:0,skew:0},97:{depth:0,height:.47534,italic:0,skew:0},98:{depth:0,height:.69141,italic:0,skew:0},99:{depth:0,height:.47534,italic:0,skew:0},100:{depth:0,height:.62119,italic:0,skew:0},101:{depth:0,height:.47534,italic:0,skew:0},102:{depth:.18906,height:.69141,italic:0,skew:0},103:{depth:.18906,height:.47534,italic:0,skew:0},104:{depth:.18906,height:.69141,italic:0,skew:0},105:{depth:0,height:.69141,italic:0,skew:0},106:{depth:0,height:.69141,italic:0,skew:0},107:{depth:0,height:.69141,italic:0,skew:0},108:{depth:0,height:.69141,italic:0,skew:0},109:{depth:0,height:.47534,italic:0,skew:0},110:{depth:0,height:.47534,italic:0,skew:0},111:{depth:0,height:.47534,italic:0,skew:0},112:{depth:.18906,height:.52396,italic:0,skew:0},113:{depth:.18906,height:.47534,italic:0,skew:0},114:{depth:0,height:.47534,italic:0,skew:0},115:{depth:0,height:.47534,italic:0,skew:0},116:{depth:0,height:.62119,italic:0,skew:0},117:{depth:0,height:.47534,italic:0,skew:0},118:{depth:0,height:.52396,italic:0,skew:0},119:{depth:0,height:.52396,italic:0,skew:0},120:{depth:.18906,height:.47534,italic:0,skew:0},121:{depth:.18906,height:.47534,italic:0,skew:0},122:{depth:.18906,height:.47534,italic:0,skew:0},8216:{depth:0,height:.69141,italic:0,skew:0},8217:{depth:0,height:.69141,italic:0,skew:0},58112:{depth:0,height:.62119,italic:0,skew:0},58113:{depth:0,height:.62119,
italic:0,skew:0},58114:{depth:.18906,height:.69141,italic:0,skew:0},58115:{depth:.18906,height:.69141,italic:0,skew:0},58116:{depth:.18906,height:.47534,italic:0,skew:0},58117:{depth:0,height:.69141,italic:0,skew:0},58118:{depth:0,height:.62119,italic:0,skew:0},58119:{depth:0,height:.47534,italic:0,skew:0}},"Main-Bold":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.13333,height:.63333,italic:0,skew:0},44:{depth:.19444,height:.15556,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.15556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.19444,height:.44444,italic:0,skew:0},60:{depth:.08556,height:.58556,italic:0,skew:0},61:{depth:-.10889,height:.39111,italic:0,skew:0},62:{depth:.08556,height:.58556,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:0,skew:0},67:{depth:0,height:.68611,italic:0,skew:0},68:{depth:0,height:.68611,italic:0,skew:0},69:{depth:0,height:.68611,italic:0,skew:0},70:{depth:0,height:.68611,italic:0,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:0,skew:0},73:{depth:0,height:.68611,italic:0,skew:0},74:{depth:0,height:.68611,italic:0,skew:0},75:{depth:0,height:.68611,italic:0,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:0,skew:0},78:{depth:0,height:.68611,italic:0,skew:0},79:{depth:0,height:.68611,italic:0,skew:0},80:{depth:0,height:.68611,italic:0,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:0,skew:0},83:{depth:0,height:.68611,italic:0,skew:0},84:{depth:0,height:.68611,italic:0,skew:0},85:{depth:0,height:.68611,italic:0,skew:0},86:{depth:0,height:.68611,italic:.01597,skew:0},87:{depth:0,height:.68611,italic:.01597,skew:0},88:{depth:0,height:.68611,italic:0,skew:0},89:{depth:0,height:.68611,italic:.02875,skew:0},90:{depth:0,height:.68611,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.13444,italic:.03194,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.10903,skew:0},103:{depth:.19444,height:.44444,italic:.01597,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69444,italic:0,skew:0},106:{depth:.19444,height:.69444,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:0,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01597,skew:0},119:{depth:0,height:.44444,italic:.01597,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01597,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.34444,italic:0,skew:0},168:{depth:0,height:.69444,italic:0,skew:0},172:{depth:0,height:.44444,italic:0,skew:0},175:{depth:0,height:.59611,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.13333,height:.63333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.13333,height:.63333,italic:0,skew:0},247:{depth:.13333,height:.63333,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.63194,italic:0,skew:0},713:{depth:0,height:.59611,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.69444,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.69444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.69444,italic:0,skew:0},772:{depth:0,height:.59611,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.69444,italic:0,skew:0},776:{depth:0,height:.69444,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68611,italic:0,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:0,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:0,skew:0},928:{depth:0,height:.68611,italic:0,skew:0},931:{depth:0,height:.68611,italic:0,skew:0},933:{depth:0,height:.68611,italic:0,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:0,skew:0},937:{depth:0,height:.68611,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.03194,skew:0},8212:{depth:0,height:.44444,italic:.03194,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.72444,italic:.15486,skew:0},8463:{depth:0,height:.69444,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:0},8472:{depth:.19444,height:.44444,italic:0,skew:0},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.10889,height:.39111,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.10889,height:.39111,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.10889,height:.39111,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8636:{depth:-.10889,height:.39111,italic:0,skew:0},8637:{depth:-.10889,height:.39111,italic:0,skew:0},8640:{depth:-.10889,height:.39111,italic:0,skew:0},8641:{depth:-.10889,height:.39111,italic:0,skew:0},8656:{depth:-.10889,height:.39111,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.10889,height:.39111,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.10889,height:.39111,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.06389,skew:0},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68611,italic:0,skew:0},8712:{depth:.08556,height:.58556,italic:0,skew:0},8715:{depth:.08556,height:.58556,italic:0,skew:0},8722:{depth:.13333,height:.63333,italic:0,skew:0},8723:{depth:.13333,height:.63333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.02778,height:.47222,italic:0,skew:0},8728:{depth:-.02639,height:.47361,italic:0,skew:0},8729:{depth:-.02639,height:.47361,italic:0,skew:0},8730:{depth:.18,height:.82,italic:0,skew:0},8733:{depth:0,height:.44444,italic:0,skew:0},8734:{depth:0,height:.44444,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.12778,skew:0},8764:{depth:-.10889,height:.39111,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:.00222,height:.50222,italic:0,skew:0},8776:{depth:.02444,height:.52444,italic:0,skew:0},8781:{depth:.00222,height:.50222,italic:0,skew:0},8801:{depth:.00222,height:.50222,italic:0,skew:0},8804:{depth:.19667,height:.69667,italic:0,skew:0},8805:{depth:.19667,height:.69667,italic:0,skew:0},8810:{depth:.08556,height:.58556,italic:0,skew:0},8811:{depth:.08556,height:.58556,italic:0,skew:0},8826:{depth:.08556,height:.58556,italic:0,skew:0},8827:{depth:.08556,height:.58556,italic:0,skew:0},8834:{depth:.08556,height:.58556,italic:0,skew:0},8835:{depth:.08556,height:.58556,italic:0,skew:0},8838:{depth:.19667,height:.69667,italic:0,skew:0},8839:{depth:.19667,height:.69667,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.19667,height:.69667,italic:0,skew:0},8850:{depth:.19667,height:.69667,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.13333,height:.63333,italic:0,skew:0},8854:{depth:.13333,height:.63333,italic:0,skew:0},8855:{depth:.13333,height:.63333,italic:0,skew:0},8856:{depth:.13333,height:.63333,italic:0,skew:0},8857:{depth:.13333,height:.63333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8900:{depth:-.02639,height:.47361,italic:0,skew:0},8901:{depth:-.02639,height:.47361,italic:0,skew:0},8902:{depth:-.02778,height:.47222,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.13889,height:.36111,italic:0,skew:0},8995:{depth:-.13889,height:.36111,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.02778,height:.47222,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.02778,height:.47222,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10815:{depth:0,height:.68611,italic:0,skew:0},10927:{depth:.19667,height:.69667,italic:0,skew:0},10928:{depth:.19667,height:.69667,italic:0,skew:0}},"Main-Italic":{33:{depth:0,height:.69444,italic:.12417,skew:0},34:{depth:0,height:.69444,italic:.06961,skew:0},35:{depth:.19444,height:.69444,italic:.06616,skew:0},37:{depth:.05556,height:.75,italic:.13639,skew:0},38:{depth:0,height:.69444,italic:.09694,skew:0},39:{depth:0,height:.69444,italic:.12417,skew:0},40:{depth:.25,height:.75,italic:.16194,skew:0},41:{depth:.25,height:.75,italic:.03694,skew:0},42:{depth:0,height:.75,italic:.14917,skew:0},43:{depth:.05667,height:.56167,italic:.03694,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:.02826,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:.16194,skew:0},48:{depth:0,height:.64444,italic:.13556,skew:0},49:{depth:0,height:.64444,italic:.13556,skew:0},50:{depth:0,height:.64444,italic:.13556,skew:0},51:{depth:0,height:.64444,italic:.13556,skew:0},52:{depth:.19444,height:.64444,italic:.13556,skew:0},53:{depth:0,height:.64444,italic:.13556,skew:0},54:{depth:0,height:.64444,italic:.13556,skew:0},55:{depth:.19444,height:.64444,italic:.13556,skew:0},56:{depth:0,height:.64444,italic:.13556,skew:0},57:{depth:0,height:.64444,italic:.13556,skew:0},58:{depth:0,height:.43056,italic:.0582,skew:0},59:{depth:.19444,height:.43056,italic:.0582,skew:0},61:{depth:-.13313,height:.36687,italic:.06616,skew:0},63:{depth:0,height:.69444,italic:.1225,skew:0},64:{depth:0,height:.69444,italic:.09597,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:.10257,skew:0},67:{depth:0,height:.68333,italic:.14528,skew:0},68:{depth:0,height:.68333,italic:.09403,skew:0},69:{depth:0,height:.68333,italic:.12028,skew:0},70:{depth:0,height:.68333,italic:.13305,skew:0},71:{depth:0,height:.68333,italic:.08722,skew:0},72:{depth:0,height:.68333,italic:.16389,skew:0},73:{depth:0,height:.68333,italic:.15806,skew:0},74:{depth:0,height:.68333,italic:.14028,skew:0},75:{depth:0,height:.68333,italic:.14528,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:.16389,skew:0},78:{depth:0,height:.68333,italic:.16389,skew:0},79:{depth:0,height:.68333,italic:.09403,skew:0},80:{depth:0,height:.68333,italic:.10257,skew:0},81:{depth:.19444,height:.68333,italic:.09403,skew:0},82:{depth:0,height:.68333,italic:.03868,skew:0},83:{depth:0,height:.68333,italic:.11972,skew:0},84:{depth:0,height:.68333,italic:.13305,skew:0},85:{depth:0,height:.68333,italic:.16389,skew:0},86:{depth:0,height:.68333,italic:.18361,skew:0},87:{depth:0,height:.68333,italic:.18361,skew:0},88:{depth:0,height:.68333,italic:.15806,skew:0},89:{depth:0,height:.68333,italic:.19383,skew:0},90:{depth:0,height:.68333,italic:.14528,skew:0},91:{depth:.25,height:.75,italic:.1875,skew:0},93:{depth:.25,height:.75,italic:.10528,skew:0},94:{depth:0,height:.69444,italic:.06646,skew:0},95:{depth:.31,height:.12056,italic:.09208,skew:0},97:{depth:0,height:.43056,italic:.07671,skew:0},98:{depth:0,height:.69444,italic:.06312,skew:0},99:{depth:0,height:.43056,italic:.05653,skew:0},100:{depth:0,height:.69444,italic:.10333,skew:0},101:{depth:0,height:.43056,italic:.07514,skew:0},102:{depth:.19444,height:.69444,italic:.21194,skew:0},103:{depth:.19444,height:.43056,italic:.08847,skew:0},104:{depth:0,height:.69444,italic:.07671,skew:0},105:{depth:0,height:.65536,italic:.1019,skew:0},106:{depth:.19444,height:.65536,italic:.14467,skew:0},107:{depth:0,height:.69444,italic:.10764,skew:0},108:{depth:0,height:.69444,italic:.10333,skew:0},109:{depth:0,height:.43056,italic:.07671,skew:0},110:{depth:0,height:.43056,italic:.07671,skew:0},111:{depth:0,height:.43056,italic:.06312,skew:0},112:{depth:.19444,height:.43056,italic:.06312,skew:0},113:{depth:.19444,height:.43056,italic:.08847,skew:0},114:{depth:0,height:.43056,italic:.10764,skew:0},115:{depth:0,height:.43056,italic:.08208,skew:0},116:{depth:0,height:.61508,italic:.09486,skew:0},117:{depth:0,height:.43056,italic:.07671,skew:0},118:{depth:0,height:.43056,italic:.10764,skew:0},119:{depth:0,height:.43056,italic:.10764,skew:0},120:{depth:0,height:.43056,italic:.12042,skew:0},121:{depth:.19444,height:.43056,italic:.08847,skew:0},122:{depth:0,height:.43056,italic:.12292,skew:0},126:{depth:.35,height:.31786,italic:.11585,skew:0},163:{depth:0,height:.69444,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:.02778},567:{depth:.19444,height:.43056,italic:0,skew:.08334},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:.09694,skew:0},770:{depth:0,height:.69444,italic:.06646,skew:0},771:{depth:0,height:.66786,italic:.11585,skew:0},772:{depth:0,height:.56167,italic:.10333,skew:0},774:{depth:0,height:.69444,italic:.10806,skew:0},775:{depth:0,height:.66786,italic:.11752,skew:0},776:{depth:0,height:.66786,italic:.10474,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:.1225,skew:0},780:{depth:0,height:.62847,italic:.08295,skew:0},915:{depth:0,height:.68333,italic:.13305,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:.09403,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:.15294,skew:0},928:{depth:0,height:.68333,italic:.16389,skew:0},931:{depth:0,height:.68333,italic:.12028,skew:0},933:{depth:0,height:.68333,italic:.11111,skew:0},934:{depth:0,height:.68333,italic:.05986,skew:0},936:{depth:0,height:.68333,italic:.11111,skew:0},937:{depth:0,height:.68333,italic:.10257,skew:0},8211:{depth:0,height:.43056,italic:.09208,skew:0},8212:{depth:0,height:.43056,italic:.09208,skew:0},8216:{depth:0,height:.69444,italic:.12417,skew:0},8217:{depth:0,height:.69444,italic:.12417,skew:0},8220:{depth:0,height:.69444,italic:.1685,skew:0},8221:{depth:0,height:.69444,italic:.06961,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0}},"Main-Regular":{32:{depth:0,height:0,italic:0,skew:0},33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.19444,height:.10556,italic:0,skew:0},45:{depth:0,height:.43056,italic:0,skew:0},46:{depth:0,height:.10556,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.64444,italic:0,skew:0},49:{depth:0,height:.64444,italic:0,skew:0},50:{depth:0,height:.64444,italic:0,skew:0},51:{depth:0,height:.64444,italic:0,skew:0},52:{depth:0,height:.64444,italic:0,skew:0},53:{depth:0,height:.64444,italic:0,skew:0},54:{depth:0,height:.64444,italic:0,skew:0},55:{depth:0,height:.64444,italic:0,skew:0},56:{depth:0,height:.64444,italic:0,skew:0},57:{depth:0,height:.64444,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.19444,height:.43056,italic:0,skew:0},60:{depth:.0391,height:.5391,italic:0,skew:0},61:{depth:-.13313,height:.36687,italic:0,skew:0},62:{depth:.0391,height:.5391,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:0},66:{depth:0,height:.68333,italic:0,skew:0},67:{depth:0,height:.68333,italic:0,skew:0},68:{depth:0,height:.68333,italic:0,skew:0},69:{depth:0,height:.68333,italic:0,skew:0},70:{depth:0,height:.68333,italic:0,skew:0},71:{depth:0,height:.68333,italic:0,skew:0},72:{depth:0,height:.68333,italic:0,skew:0},73:{depth:0,height:.68333,italic:0,skew:0},74:{depth:0,height:.68333,italic:0,skew:0},75:{depth:0,height:.68333,italic:0,skew:0},76:{depth:0,height:.68333,italic:0,skew:0},77:{depth:0,height:.68333,italic:0,skew:0},78:{depth:0,height:.68333,italic:0,skew:0},79:{depth:0,height:.68333,italic:0,skew:0},80:{depth:0,height:.68333,italic:0,skew:0},81:{depth:.19444,height:.68333,italic:0,skew:0},82:{depth:0,height:.68333,italic:0,skew:0},83:{depth:0,height:.68333,italic:0,skew:0},84:{depth:0,height:.68333,italic:0,skew:0},85:{depth:0,height:.68333,italic:0,skew:0},86:{depth:0,height:.68333,italic:.01389,skew:0},87:{depth:0,height:.68333,italic:.01389,skew:0},88:{depth:0,height:.68333,italic:0,skew:0},89:{depth:0,height:.68333,italic:.025,skew:0},90:{depth:0,height:.68333,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},92:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.31,height:.12056,italic:.02778,skew:0},96:{depth:0,height:.69444,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.69444,italic:.07778,skew:0},103:{depth:.19444,height:.43056,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.66786,italic:0,skew:0},106:{depth:.19444,height:.66786,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.19444,height:.43056,italic:0,skew:0},113:{depth:.19444,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.61508,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:.01389,skew:0},119:{depth:0,height:.43056,italic:.01389,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.19444,height:.43056,italic:.01389,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.25,height:.75,italic:0,skew:0},124:{depth:.25,height:.75,italic:0,skew:0},125:{depth:.25,height:.75,italic:0,skew:0},126:{depth:.35,height:.31786,italic:0,skew:0},160:{depth:0,height:0,italic:0,skew:0},168:{depth:0,height:.66786,italic:0,skew:0},172:{depth:0,height:.43056,italic:0,skew:0},175:{depth:0,height:.56778,italic:0,skew:0},176:{depth:0,height:.69444,italic:0,skew:0},177:{depth:.08333,height:.58333,italic:0,skew:0},180:{depth:0,height:.69444,italic:0,skew:0},215:{depth:.08333,height:.58333,italic:0,skew:0},247:{depth:.08333,height:.58333,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.19444,height:.43056,italic:0,skew:0},710:{depth:0,height:.69444,italic:0,skew:0},711:{depth:0,height:.62847,italic:0,skew:0},713:{depth:0,height:.56778,italic:0,skew:0},714:{depth:0,height:.69444,italic:0,skew:0},715:{depth:0,height:.69444,italic:0,skew:0},728:{depth:0,height:.69444,italic:0,skew:0},729:{depth:0,height:.66786,italic:0,skew:0},730:{depth:0,height:.69444,italic:0,skew:0},732:{depth:0,height:.66786,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.66786,italic:0,skew:0},772:{depth:0,height:.56778,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.66786,italic:0,skew:0},776:{depth:0,height:.66786,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.62847,italic:0,skew:0},824:{depth:.19444,height:.69444,italic:0,skew:0},915:{depth:0,height:.68333,italic:0,skew:0},916:{depth:0,height:.68333,italic:0,skew:0},920:{depth:0,height:.68333,italic:0,skew:0},923:{depth:0,height:.68333,italic:0,skew:0},926:{depth:0,height:.68333,italic:0,skew:0},928:{depth:0,height:.68333,italic:0,skew:0},931:{depth:0,height:.68333,italic:0,skew:0},933:{depth:0,height:.68333,italic:0,skew:0},934:{depth:0,height:.68333,italic:0,skew:0},936:{depth:0,height:.68333,italic:0,skew:0},937:{depth:0,height:.68333,italic:0,skew:0},8211:{depth:0,height:.43056,italic:.02778,skew:0},8212:{depth:0,height:.43056,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0},8224:{depth:.19444,height:.69444,italic:0,skew:0},8225:{depth:.19444,height:.69444,italic:0,skew:0},8230:{depth:0,height:.12,italic:0,skew:0},8242:{depth:0,height:.55556,italic:0,skew:0},8407:{depth:0,height:.71444,italic:.15382,skew:0},8463:{depth:0,height:.68889,italic:0,skew:0},8465:{depth:0,height:.69444,italic:0,skew:0},8467:{depth:0,height:.69444,italic:0,skew:.11111},8472:{depth:.19444,height:.43056,italic:0,skew:.11111},8476:{depth:0,height:.69444,italic:0,skew:0},8501:{depth:0,height:.69444,italic:0,skew:0},8592:{depth:-.13313,height:.36687,italic:0,skew:0},8593:{depth:.19444,height:.69444,italic:0,skew:0},8594:{depth:-.13313,height:.36687,italic:0,skew:0},8595:{depth:.19444,height:.69444,italic:0,skew:0},8596:{depth:-.13313,height:.36687,italic:0,skew:0},8597:{depth:.25,height:.75,italic:0,skew:0},8598:{depth:.19444,height:.69444,italic:0,skew:0},8599:{depth:.19444,height:.69444,italic:0,skew:0},8600:{depth:.19444,height:.69444,italic:0,skew:0},8601:{depth:.19444,height:.69444,italic:0,skew:0},8614:{depth:.011,height:.511,italic:0,skew:0},8617:{depth:.011,height:.511,italic:0,skew:0},8618:{depth:.011,height:.511,italic:0,skew:0},8636:{depth:-.13313,height:.36687,italic:0,skew:0},8637:{depth:-.13313,height:.36687,italic:0,skew:0},8640:{depth:-.13313,height:.36687,italic:0,skew:0},8641:{depth:-.13313,height:.36687,italic:0,skew:0},8652:{depth:.011,height:.671,italic:0,skew:0},8656:{depth:-.13313,height:.36687,italic:0,skew:0},8657:{depth:.19444,height:.69444,italic:0,skew:0},8658:{depth:-.13313,height:.36687,italic:0,skew:0},8659:{depth:.19444,height:.69444,italic:0,skew:0},8660:{depth:-.13313,height:.36687,italic:0,skew:0},8661:{depth:.25,height:.75,italic:0,skew:0},8704:{depth:0,height:.69444,italic:0,skew:0},8706:{depth:0,height:.69444,italic:.05556,skew:.08334},8707:{depth:0,height:.69444,italic:0,skew:0},8709:{depth:.05556,height:.75,italic:0,skew:0},8711:{depth:0,height:.68333,italic:0,skew:0},8712:{depth:.0391,height:.5391,italic:0,skew:0},8715:{depth:.0391,height:.5391,italic:0,skew:0},8722:{depth:.08333,height:.58333,italic:0,skew:0},8723:{depth:.08333,height:.58333,italic:0,skew:0},8725:{depth:.25,height:.75,italic:0,skew:0},8726:{depth:.25,height:.75,italic:0,skew:0},8727:{depth:-.03472,height:.46528,italic:0,skew:0},8728:{depth:-.05555,height:.44445,italic:0,skew:0},8729:{depth:-.05555,height:.44445,italic:0,skew:0},8730:{depth:.2,height:.8,italic:0,skew:0},8733:{depth:0,height:.43056,italic:0,skew:0},8734:{depth:0,height:.43056,italic:0,skew:0},8736:{depth:0,height:.69224,italic:0,skew:0},8739:{depth:.25,height:.75,italic:0,skew:0},8741:{depth:.25,height:.75,italic:0,skew:0},8743:{depth:0,height:.55556,italic:0,skew:0},8744:{depth:0,height:.55556,italic:0,skew:0},8745:{depth:0,height:.55556,italic:0,skew:0},8746:{depth:0,height:.55556,italic:0,skew:0},8747:{depth:.19444,height:.69444,italic:.11111,skew:0},8764:{depth:-.13313,height:.36687,italic:0,skew:0},8768:{depth:.19444,height:.69444,italic:0,skew:0},8771:{depth:-.03625,height:.46375,italic:0,skew:0},8773:{depth:-.022,height:.589,italic:0,skew:0},8776:{depth:-.01688,height:.48312,italic:0,skew:0},8781:{depth:-.03625,height:.46375,italic:0,skew:0},8784:{depth:-.133,height:.67,italic:0,skew:0},8800:{depth:.215,height:.716,italic:0,skew:0},8801:{depth:-.03625,height:.46375,italic:0,skew:0},8804:{depth:.13597,height:.63597,italic:0,skew:0},8805:{depth:.13597,height:.63597,italic:0,skew:0},8810:{depth:.0391,height:.5391,italic:0,skew:0},8811:{depth:.0391,height:.5391,italic:0,skew:0},8826:{depth:.0391,height:.5391,italic:0,skew:0},8827:{depth:.0391,height:.5391,italic:0,skew:0},8834:{depth:.0391,height:.5391,italic:0,skew:0},8835:{depth:.0391,height:.5391,italic:0,skew:0},8838:{depth:.13597,height:.63597,italic:0,skew:0},8839:{depth:.13597,height:.63597,italic:0,skew:0},8846:{depth:0,height:.55556,italic:0,skew:0},8849:{depth:.13597,height:.63597,italic:0,skew:0},8850:{depth:.13597,height:.63597,italic:0,skew:0},8851:{depth:0,height:.55556,italic:0,skew:0},8852:{depth:0,height:.55556,italic:0,skew:0},8853:{depth:.08333,height:.58333,italic:0,skew:0},8854:{depth:.08333,height:.58333,italic:0,skew:0},8855:{depth:.08333,height:.58333,italic:0,skew:0},8856:{depth:.08333,height:.58333,italic:0,skew:0},8857:{depth:.08333,height:.58333,italic:0,skew:0},8866:{depth:0,height:.69444,italic:0,skew:0},8867:{depth:0,height:.69444,italic:0,skew:0},8868:{depth:0,height:.69444,italic:0,skew:0},8869:{depth:0,height:.69444,italic:0,skew:0},8872:{depth:.249,height:.75,italic:0,skew:0},8900:{depth:-.05555,height:.44445,italic:0,skew:0},8901:{depth:-.05555,height:.44445,italic:0,skew:0},8902:{depth:-.03472,height:.46528,italic:0,skew:0},8904:{depth:.005,height:.505,italic:0,skew:0},8942:{depth:.03,height:.9,italic:0,skew:0},8943:{depth:-.19,height:.31,italic:0,skew:0},8945:{depth:-.1,height:.82,italic:0,skew:0},8968:{depth:.25,height:.75,italic:0,skew:0},8969:{depth:.25,height:.75,italic:0,skew:0},8970:{depth:.25,height:.75,italic:0,skew:0},8971:{depth:.25,height:.75,italic:0,skew:0},8994:{depth:-.14236,height:.35764,italic:0,skew:0},8995:{depth:-.14236,height:.35764,italic:0,skew:0},9136:{depth:.244,height:.744,italic:0,skew:0},9137:{depth:.244,height:.744,italic:0,skew:0},9651:{depth:.19444,height:.69444,italic:0,skew:0},9657:{depth:-.03472,height:.46528,italic:0,skew:0},9661:{depth:.19444,height:.69444,italic:0,skew:0},9667:{depth:-.03472,height:.46528,italic:0,skew:0},9711:{depth:.19444,height:.69444,italic:0,skew:0},9824:{depth:.12963,height:.69444,italic:0,skew:0},9825:{depth:.12963,height:.69444,italic:0,skew:0},9826:{depth:.12963,height:.69444,italic:0,skew:0},9827:{depth:.12963,height:.69444,italic:0,skew:0},9837:{depth:0,height:.75,italic:0,skew:0},9838:{depth:.19444,height:.69444,italic:0,skew:0},9839:{depth:.19444,height:.69444,italic:0,skew:0},10216:{depth:.25,height:.75,italic:0,skew:0},10217:{depth:.25,height:.75,italic:0,skew:0},10222:{depth:.244,height:.744,italic:0,skew:0},10223:{depth:.244,height:.744,italic:0,skew:0},10229:{depth:.011,height:.511,italic:0,skew:0},10230:{depth:.011,height:.511,italic:0,skew:0},10231:{depth:.011,height:.511,italic:0,skew:0},10232:{depth:.024,height:.525,italic:0,skew:0},10233:{depth:.024,height:.525,italic:0,skew:0},10234:{depth:.024,height:.525,italic:0,skew:0},10236:{depth:.011,height:.511,italic:0,skew:0},10815:{depth:0,height:.68333,italic:0,skew:0},10927:{depth:.13597,height:.63597,italic:0,skew:0},10928:{depth:.13597,height:.63597,italic:0,skew:0}},"Math-BoldItalic":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68611,italic:0,skew:0},66:{depth:0,height:.68611,italic:.04835,skew:0},67:{depth:0,height:.68611,italic:.06979,skew:0},68:{depth:0,height:.68611,italic:.03194,skew:0},69:{depth:0,height:.68611,italic:.05451,skew:0},70:{depth:0,height:.68611,italic:.15972,skew:0},71:{depth:0,height:.68611,italic:0,skew:0},72:{depth:0,height:.68611,italic:.08229,skew:0},73:{depth:0,height:.68611,italic:.07778,skew:0},74:{depth:0,height:.68611,italic:.10069,skew:0},75:{depth:0,height:.68611,italic:.06979,skew:0},76:{depth:0,height:.68611,italic:0,skew:0},77:{depth:0,height:.68611,italic:.11424,skew:0},78:{depth:0,height:.68611,italic:.11424,skew:0},79:{depth:0,height:.68611,italic:.03194,skew:0},80:{depth:0,height:.68611,italic:.15972,skew:0},81:{depth:.19444,height:.68611,italic:0,skew:0},82:{depth:0,height:.68611,italic:.00421,skew:0},83:{depth:0,height:.68611,italic:.05382,skew:0},84:{depth:0,height:.68611,italic:.15972,skew:0},85:{depth:0,height:.68611,italic:.11424,skew:0},86:{depth:0,height:.68611,italic:.25555,skew:0},87:{depth:0,height:.68611,italic:.15972,skew:0},88:{depth:0,height:.68611,italic:.07778,skew:0},89:{depth:0,height:.68611,italic:.25555,skew:0},90:{depth:0,height:.68611,italic:.06979,skew:0},97:{depth:0,height:.44444,
italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:.19444,height:.69444,italic:.11042,skew:0},103:{depth:.19444,height:.44444,italic:.03704,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.69326,italic:0,skew:0},106:{depth:.19444,height:.69326,italic:.0622,skew:0},107:{depth:0,height:.69444,italic:.01852,skew:0},108:{depth:0,height:.69444,italic:.0088,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:.03704,skew:0},114:{depth:0,height:.44444,italic:.03194,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.63492,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.03704,skew:0},119:{depth:0,height:.44444,italic:.02778,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.03704,skew:0},122:{depth:0,height:.44444,italic:.04213,skew:0},915:{depth:0,height:.68611,italic:.15972,skew:0},916:{depth:0,height:.68611,italic:0,skew:0},920:{depth:0,height:.68611,italic:.03194,skew:0},923:{depth:0,height:.68611,italic:0,skew:0},926:{depth:0,height:.68611,italic:.07458,skew:0},928:{depth:0,height:.68611,italic:.08229,skew:0},931:{depth:0,height:.68611,italic:.05451,skew:0},933:{depth:0,height:.68611,italic:.15972,skew:0},934:{depth:0,height:.68611,italic:0,skew:0},936:{depth:0,height:.68611,italic:.11653,skew:0},937:{depth:0,height:.68611,italic:.04835,skew:0},945:{depth:0,height:.44444,italic:0,skew:0},946:{depth:.19444,height:.69444,italic:.03403,skew:0},947:{depth:.19444,height:.44444,italic:.06389,skew:0},948:{depth:0,height:.69444,italic:.03819,skew:0},949:{depth:0,height:.44444,italic:0,skew:0},950:{depth:.19444,height:.69444,italic:.06215,skew:0},951:{depth:.19444,height:.44444,italic:.03704,skew:0},952:{depth:0,height:.69444,italic:.03194,skew:0},953:{depth:0,height:.44444,italic:0,skew:0},954:{depth:0,height:.44444,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.44444,italic:0,skew:0},957:{depth:0,height:.44444,italic:.06898,skew:0},958:{depth:.19444,height:.69444,italic:.03021,skew:0},959:{depth:0,height:.44444,italic:0,skew:0},960:{depth:0,height:.44444,italic:.03704,skew:0},961:{depth:.19444,height:.44444,italic:0,skew:0},962:{depth:.09722,height:.44444,italic:.07917,skew:0},963:{depth:0,height:.44444,italic:.03704,skew:0},964:{depth:0,height:.44444,italic:.13472,skew:0},965:{depth:0,height:.44444,italic:.03704,skew:0},966:{depth:.19444,height:.44444,italic:0,skew:0},967:{depth:.19444,height:.44444,italic:0,skew:0},968:{depth:.19444,height:.69444,italic:.03704,skew:0},969:{depth:0,height:.44444,italic:.03704,skew:0},977:{depth:0,height:.69444,italic:0,skew:0},981:{depth:.19444,height:.69444,italic:0,skew:0},982:{depth:0,height:.44444,italic:.03194,skew:0},1009:{depth:.19444,height:.44444,italic:0,skew:0},1013:{depth:0,height:.44444,italic:0,skew:0}},"Math-Italic":{47:{depth:.19444,height:.69444,italic:0,skew:0},65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},"Math-Regular":{65:{depth:0,height:.68333,italic:0,skew:.13889},66:{depth:0,height:.68333,italic:.05017,skew:.08334},67:{depth:0,height:.68333,italic:.07153,skew:.08334},68:{depth:0,height:.68333,italic:.02778,skew:.05556},69:{depth:0,height:.68333,italic:.05764,skew:.08334},70:{depth:0,height:.68333,italic:.13889,skew:.08334},71:{depth:0,height:.68333,italic:0,skew:.08334},72:{depth:0,height:.68333,italic:.08125,skew:.05556},73:{depth:0,height:.68333,italic:.07847,skew:.11111},74:{depth:0,height:.68333,italic:.09618,skew:.16667},75:{depth:0,height:.68333,italic:.07153,skew:.05556},76:{depth:0,height:.68333,italic:0,skew:.02778},77:{depth:0,height:.68333,italic:.10903,skew:.08334},78:{depth:0,height:.68333,italic:.10903,skew:.08334},79:{depth:0,height:.68333,italic:.02778,skew:.08334},80:{depth:0,height:.68333,italic:.13889,skew:.08334},81:{depth:.19444,height:.68333,italic:0,skew:.08334},82:{depth:0,height:.68333,italic:.00773,skew:.08334},83:{depth:0,height:.68333,italic:.05764,skew:.08334},84:{depth:0,height:.68333,italic:.13889,skew:.08334},85:{depth:0,height:.68333,italic:.10903,skew:.02778},86:{depth:0,height:.68333,italic:.22222,skew:0},87:{depth:0,height:.68333,italic:.13889,skew:0},88:{depth:0,height:.68333,italic:.07847,skew:.08334},89:{depth:0,height:.68333,italic:.22222,skew:0},90:{depth:0,height:.68333,italic:.07153,skew:.08334},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:.05556},100:{depth:0,height:.69444,italic:0,skew:.16667},101:{depth:0,height:.43056,italic:0,skew:.05556},102:{depth:.19444,height:.69444,italic:.10764,skew:.16667},103:{depth:.19444,height:.43056,italic:.03588,skew:.02778},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.65952,italic:0,skew:0},106:{depth:.19444,height:.65952,italic:.05724,skew:0},107:{depth:0,height:.69444,italic:.03148,skew:0},108:{depth:0,height:.69444,italic:.01968,skew:.08334},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:.05556},112:{depth:.19444,height:.43056,italic:0,skew:.08334},113:{depth:.19444,height:.43056,italic:.03588,skew:.08334},114:{depth:0,height:.43056,italic:.02778,skew:.05556},115:{depth:0,height:.43056,italic:0,skew:.05556},116:{depth:0,height:.61508,italic:0,skew:.08334},117:{depth:0,height:.43056,italic:0,skew:.02778},118:{depth:0,height:.43056,italic:.03588,skew:.02778},119:{depth:0,height:.43056,italic:.02691,skew:.08334},120:{depth:0,height:.43056,italic:0,skew:.02778},121:{depth:.19444,height:.43056,italic:.03588,skew:.05556},122:{depth:0,height:.43056,italic:.04398,skew:.05556},915:{depth:0,height:.68333,italic:.13889,skew:.08334},916:{depth:0,height:.68333,italic:0,skew:.16667},920:{depth:0,height:.68333,italic:.02778,skew:.08334},923:{depth:0,height:.68333,italic:0,skew:.16667},926:{depth:0,height:.68333,italic:.07569,skew:.08334},928:{depth:0,height:.68333,italic:.08125,skew:.05556},931:{depth:0,height:.68333,italic:.05764,skew:.08334},933:{depth:0,height:.68333,italic:.13889,skew:.05556},934:{depth:0,height:.68333,italic:0,skew:.08334},936:{depth:0,height:.68333,italic:.11,skew:.05556},937:{depth:0,height:.68333,italic:.05017,skew:.08334},945:{depth:0,height:.43056,italic:.0037,skew:.02778},946:{depth:.19444,height:.69444,italic:.05278,skew:.08334},947:{depth:.19444,height:.43056,italic:.05556,skew:0},948:{depth:0,height:.69444,italic:.03785,skew:.05556},949:{depth:0,height:.43056,italic:0,skew:.08334},950:{depth:.19444,height:.69444,italic:.07378,skew:.08334},951:{depth:.19444,height:.43056,italic:.03588,skew:.05556},952:{depth:0,height:.69444,italic:.02778,skew:.08334},953:{depth:0,height:.43056,italic:0,skew:.05556},954:{depth:0,height:.43056,italic:0,skew:0},955:{depth:0,height:.69444,italic:0,skew:0},956:{depth:.19444,height:.43056,italic:0,skew:.02778},957:{depth:0,height:.43056,italic:.06366,skew:.02778},958:{depth:.19444,height:.69444,italic:.04601,skew:.11111},959:{depth:0,height:.43056,italic:0,skew:.05556},960:{depth:0,height:.43056,italic:.03588,skew:0},961:{depth:.19444,height:.43056,italic:0,skew:.08334},962:{depth:.09722,height:.43056,italic:.07986,skew:.08334},963:{depth:0,height:.43056,italic:.03588,skew:0},964:{depth:0,height:.43056,italic:.1132,skew:.02778},965:{depth:0,height:.43056,italic:.03588,skew:.02778},966:{depth:.19444,height:.43056,italic:0,skew:.08334},967:{depth:.19444,height:.43056,italic:0,skew:.05556},968:{depth:.19444,height:.69444,italic:.03588,skew:.11111},969:{depth:0,height:.43056,italic:.03588,skew:0},977:{depth:0,height:.69444,italic:0,skew:.08334},981:{depth:.19444,height:.69444,italic:0,skew:.08334},982:{depth:0,height:.43056,italic:.02778,skew:0},1009:{depth:.19444,height:.43056,italic:0,skew:.08334},1013:{depth:0,height:.43056,italic:0,skew:.05556}},"SansSerif-Regular":{33:{depth:0,height:.69444,italic:0,skew:0},34:{depth:0,height:.69444,italic:0,skew:0},35:{depth:.19444,height:.69444,italic:0,skew:0},36:{depth:.05556,height:.75,italic:0,skew:0},37:{depth:.05556,height:.75,italic:0,skew:0},38:{depth:0,height:.69444,italic:0,skew:0},39:{depth:0,height:.69444,italic:0,skew:0},40:{depth:.25,height:.75,italic:0,skew:0},41:{depth:.25,height:.75,italic:0,skew:0},42:{depth:0,height:.75,italic:0,skew:0},43:{depth:.08333,height:.58333,italic:0,skew:0},44:{depth:.125,height:.08333,italic:0,skew:0},45:{depth:0,height:.44444,italic:0,skew:0},46:{depth:0,height:.08333,italic:0,skew:0},47:{depth:.25,height:.75,italic:0,skew:0},48:{depth:0,height:.65556,italic:0,skew:0},49:{depth:0,height:.65556,italic:0,skew:0},50:{depth:0,height:.65556,italic:0,skew:0},51:{depth:0,height:.65556,italic:0,skew:0},52:{depth:0,height:.65556,italic:0,skew:0},53:{depth:0,height:.65556,italic:0,skew:0},54:{depth:0,height:.65556,italic:0,skew:0},55:{depth:0,height:.65556,italic:0,skew:0},56:{depth:0,height:.65556,italic:0,skew:0},57:{depth:0,height:.65556,italic:0,skew:0},58:{depth:0,height:.44444,italic:0,skew:0},59:{depth:.125,height:.44444,italic:0,skew:0},61:{depth:-.13,height:.37,italic:0,skew:0},63:{depth:0,height:.69444,italic:0,skew:0},64:{depth:0,height:.69444,italic:0,skew:0},65:{depth:0,height:.69444,italic:0,skew:0},66:{depth:0,height:.69444,italic:0,skew:0},67:{depth:0,height:.69444,italic:0,skew:0},68:{depth:0,height:.69444,italic:0,skew:0},69:{depth:0,height:.69444,italic:0,skew:0},70:{depth:0,height:.69444,italic:0,skew:0},71:{depth:0,height:.69444,italic:0,skew:0},72:{depth:0,height:.69444,italic:0,skew:0},73:{depth:0,height:.69444,italic:0,skew:0},74:{depth:0,height:.69444,italic:0,skew:0},75:{depth:0,height:.69444,italic:0,skew:0},76:{depth:0,height:.69444,italic:0,skew:0},77:{depth:0,height:.69444,italic:0,skew:0},78:{depth:0,height:.69444,italic:0,skew:0},79:{depth:0,height:.69444,italic:0,skew:0},80:{depth:0,height:.69444,italic:0,skew:0},81:{depth:.125,height:.69444,italic:0,skew:0},82:{depth:0,height:.69444,italic:0,skew:0},83:{depth:0,height:.69444,italic:0,skew:0},84:{depth:0,height:.69444,italic:0,skew:0},85:{depth:0,height:.69444,italic:0,skew:0},86:{depth:0,height:.69444,italic:.01389,skew:0},87:{depth:0,height:.69444,italic:.01389,skew:0},88:{depth:0,height:.69444,italic:0,skew:0},89:{depth:0,height:.69444,italic:.025,skew:0},90:{depth:0,height:.69444,italic:0,skew:0},91:{depth:.25,height:.75,italic:0,skew:0},93:{depth:.25,height:.75,italic:0,skew:0},94:{depth:0,height:.69444,italic:0,skew:0},95:{depth:.35,height:.09444,italic:.02778,skew:0},97:{depth:0,height:.44444,italic:0,skew:0},98:{depth:0,height:.69444,italic:0,skew:0},99:{depth:0,height:.44444,italic:0,skew:0},100:{depth:0,height:.69444,italic:0,skew:0},101:{depth:0,height:.44444,italic:0,skew:0},102:{depth:0,height:.69444,italic:.06944,skew:0},103:{depth:.19444,height:.44444,italic:.01389,skew:0},104:{depth:0,height:.69444,italic:0,skew:0},105:{depth:0,height:.67937,italic:0,skew:0},106:{depth:.19444,height:.67937,italic:0,skew:0},107:{depth:0,height:.69444,italic:0,skew:0},108:{depth:0,height:.69444,italic:0,skew:0},109:{depth:0,height:.44444,italic:0,skew:0},110:{depth:0,height:.44444,italic:0,skew:0},111:{depth:0,height:.44444,italic:0,skew:0},112:{depth:.19444,height:.44444,italic:0,skew:0},113:{depth:.19444,height:.44444,italic:0,skew:0},114:{depth:0,height:.44444,italic:.01389,skew:0},115:{depth:0,height:.44444,italic:0,skew:0},116:{depth:0,height:.57143,italic:0,skew:0},117:{depth:0,height:.44444,italic:0,skew:0},118:{depth:0,height:.44444,italic:.01389,skew:0},119:{depth:0,height:.44444,italic:.01389,skew:0},120:{depth:0,height:.44444,italic:0,skew:0},121:{depth:.19444,height:.44444,italic:.01389,skew:0},122:{depth:0,height:.44444,italic:0,skew:0},126:{depth:.35,height:.32659,italic:0,skew:0},305:{depth:0,height:.44444,italic:0,skew:0},567:{depth:.19444,height:.44444,italic:0,skew:0},768:{depth:0,height:.69444,italic:0,skew:0},769:{depth:0,height:.69444,italic:0,skew:0},770:{depth:0,height:.69444,italic:0,skew:0},771:{depth:0,height:.67659,italic:0,skew:0},772:{depth:0,height:.60889,italic:0,skew:0},774:{depth:0,height:.69444,italic:0,skew:0},775:{depth:0,height:.67937,italic:0,skew:0},776:{depth:0,height:.67937,italic:0,skew:0},778:{depth:0,height:.69444,italic:0,skew:0},779:{depth:0,height:.69444,italic:0,skew:0},780:{depth:0,height:.63194,italic:0,skew:0},915:{depth:0,height:.69444,italic:0,skew:0},916:{depth:0,height:.69444,italic:0,skew:0},920:{depth:0,height:.69444,italic:0,skew:0},923:{depth:0,height:.69444,italic:0,skew:0},926:{depth:0,height:.69444,italic:0,skew:0},928:{depth:0,height:.69444,italic:0,skew:0},931:{depth:0,height:.69444,italic:0,skew:0},933:{depth:0,height:.69444,italic:0,skew:0},934:{depth:0,height:.69444,italic:0,skew:0},936:{depth:0,height:.69444,italic:0,skew:0},937:{depth:0,height:.69444,italic:0,skew:0},8211:{depth:0,height:.44444,italic:.02778,skew:0},8212:{depth:0,height:.44444,italic:.02778,skew:0},8216:{depth:0,height:.69444,italic:0,skew:0},8217:{depth:0,height:.69444,italic:0,skew:0},8220:{depth:0,height:.69444,italic:0,skew:0},8221:{depth:0,height:.69444,italic:0,skew:0}},"Script-Regular":{65:{depth:0,height:.7,italic:.22925,skew:0},66:{depth:0,height:.7,italic:.04087,skew:0},67:{depth:0,height:.7,italic:.1689,skew:0},68:{depth:0,height:.7,italic:.09371,skew:0},69:{depth:0,height:.7,italic:.18583,skew:0},70:{depth:0,height:.7,italic:.13634,skew:0},71:{depth:0,height:.7,italic:.17322,skew:0},72:{depth:0,height:.7,italic:.29694,skew:0},73:{depth:0,height:.7,italic:.19189,skew:0},74:{depth:.27778,height:.7,italic:.19189,skew:0},75:{depth:0,height:.7,italic:.31259,skew:0},76:{depth:0,height:.7,italic:.19189,skew:0},77:{depth:0,height:.7,italic:.15981,skew:0},78:{depth:0,height:.7,italic:.3525,skew:0},79:{depth:0,height:.7,italic:.08078,skew:0},80:{depth:0,height:.7,italic:.08078,skew:0},81:{depth:0,height:.7,italic:.03305,skew:0},82:{depth:0,height:.7,italic:.06259,skew:0},83:{depth:0,height:.7,italic:.19189,skew:0},84:{depth:0,height:.7,italic:.29087,skew:0},85:{depth:0,height:.7,italic:.25815,skew:0},86:{depth:0,height:.7,italic:.27523,skew:0},87:{depth:0,height:.7,italic:.27523,skew:0},88:{depth:0,height:.7,italic:.26006,skew:0},89:{depth:0,height:.7,italic:.2939,skew:0},90:{depth:0,height:.7,italic:.24037,skew:0}},"Size1-Regular":{40:{depth:.35001,height:.85,italic:0,skew:0},41:{depth:.35001,height:.85,italic:0,skew:0},47:{depth:.35001,height:.85,italic:0,skew:0},91:{depth:.35001,height:.85,italic:0,skew:0},92:{depth:.35001,height:.85,italic:0,skew:0},93:{depth:.35001,height:.85,italic:0,skew:0},123:{depth:.35001,height:.85,italic:0,skew:0},125:{depth:.35001,height:.85,italic:0,skew:0},710:{depth:0,height:.72222,italic:0,skew:0},732:{depth:0,height:.72222,italic:0,skew:0},770:{depth:0,height:.72222,italic:0,skew:0},771:{depth:0,height:.72222,italic:0,skew:0},8214:{depth:-99e-5,height:.601,italic:0,skew:0},8593:{depth:1e-5,height:.6,italic:0,skew:0},8595:{depth:1e-5,height:.6,italic:0,skew:0},8657:{depth:1e-5,height:.6,italic:0,skew:0},8659:{depth:1e-5,height:.6,italic:0,skew:0},8719:{depth:.25001,height:.75,italic:0,skew:0},8720:{depth:.25001,height:.75,italic:0,skew:0},8721:{depth:.25001,height:.75,italic:0,skew:0},8730:{depth:.35001,height:.85,italic:0,skew:0},8739:{depth:-.00599,height:.606,italic:0,skew:0},8741:{depth:-.00599,height:.606,italic:0,skew:0},8747:{depth:.30612,height:.805,italic:.19445,skew:0},8748:{depth:.306,height:.805,italic:.19445,skew:0},8749:{depth:.306,height:.805,italic:.19445,skew:0},8750:{depth:.30612,height:.805,italic:.19445,skew:0},8896:{depth:.25001,height:.75,italic:0,skew:0},8897:{depth:.25001,height:.75,italic:0,skew:0},8898:{depth:.25001,height:.75,italic:0,skew:0},8899:{depth:.25001,height:.75,italic:0,skew:0},8968:{depth:.35001,height:.85,italic:0,skew:0},8969:{depth:.35001,height:.85,italic:0,skew:0},8970:{depth:.35001,height:.85,italic:0,skew:0},8971:{depth:.35001,height:.85,italic:0,skew:0},9168:{depth:-99e-5,height:.601,italic:0,skew:0},10216:{depth:.35001,height:.85,italic:0,skew:0},10217:{depth:.35001,height:.85,italic:0,skew:0},10752:{depth:.25001,height:.75,italic:0,skew:0},10753:{depth:.25001,height:.75,italic:0,skew:0},10754:{depth:.25001,height:.75,italic:0,skew:0},10756:{depth:.25001,height:.75,italic:0,skew:0},10758:{depth:.25001,height:.75,italic:0,skew:0}},"Size2-Regular":{40:{depth:.65002,height:1.15,italic:0,skew:0},41:{depth:.65002,height:1.15,italic:0,skew:0},47:{depth:.65002,height:1.15,italic:0,skew:0},91:{depth:.65002,height:1.15,italic:0,skew:0},92:{depth:.65002,height:1.15,italic:0,skew:0},93:{depth:.65002,height:1.15,italic:0,skew:0},123:{depth:.65002,height:1.15,italic:0,skew:0},125:{depth:.65002,height:1.15,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8719:{depth:.55001,height:1.05,italic:0,skew:0},8720:{depth:.55001,height:1.05,italic:0,skew:0},8721:{depth:.55001,height:1.05,italic:0,skew:0},8730:{depth:.65002,height:1.15,italic:0,skew:0},8747:{depth:.86225,height:1.36,italic:.44445,skew:0},8748:{depth:.862,height:1.36,italic:.44445,skew:0},8749:{depth:.862,height:1.36,italic:.44445,skew:0},8750:{depth:.86225,height:1.36,italic:.44445,skew:0},8896:{depth:.55001,height:1.05,italic:0,skew:0},8897:{depth:.55001,height:1.05,italic:0,skew:0},8898:{depth:.55001,height:1.05,italic:0,skew:0},8899:{depth:.55001,height:1.05,italic:0,skew:0},8968:{depth:.65002,height:1.15,italic:0,skew:0},8969:{depth:.65002,height:1.15,italic:0,skew:0},8970:{depth:.65002,height:1.15,italic:0,skew:0},8971:{depth:.65002,height:1.15,italic:0,skew:0},10216:{depth:.65002,height:1.15,italic:0,skew:0},10217:{depth:.65002,height:1.15,italic:0,skew:0},10752:{depth:.55001,height:1.05,italic:0,skew:0},10753:{depth:.55001,height:1.05,italic:0,skew:0},10754:{depth:.55001,height:1.05,italic:0,skew:0},10756:{depth:.55001,height:1.05,italic:0,skew:0},10758:{depth:.55001,height:1.05,italic:0,skew:0}},"Size3-Regular":{40:{depth:.95003,height:1.45,italic:0,skew:0},41:{depth:.95003,height:1.45,italic:0,skew:0},47:{depth:.95003,height:1.45,italic:0,skew:0},91:{depth:.95003,height:1.45,italic:0,skew:0},92:{depth:.95003,height:1.45,italic:0,skew:0},93:{depth:.95003,height:1.45,italic:0,skew:0},123:{depth:.95003,height:1.45,italic:0,skew:0},125:{depth:.95003,height:1.45,italic:0,skew:0},710:{depth:0,height:.75,italic:0,skew:0},732:{depth:0,height:.75,italic:0,skew:0},770:{depth:0,height:.75,italic:0,skew:0},771:{depth:0,height:.75,italic:0,skew:0},8730:{depth:.95003,height:1.45,italic:0,skew:0},8968:{depth:.95003,height:1.45,italic:0,skew:0},8969:{depth:.95003,height:1.45,italic:0,skew:0},8970:{depth:.95003,height:1.45,italic:0,skew:0},8971:{depth:.95003,height:1.45,italic:0,skew:0},10216:{depth:.95003,height:1.45,italic:0,skew:0},10217:{depth:.95003,height:1.45,italic:0,skew:0}},"Size4-Regular":{40:{depth:1.25003,height:1.75,italic:0,skew:0},41:{depth:1.25003,height:1.75,italic:0,skew:0},47:{depth:1.25003,height:1.75,italic:0,skew:0},91:{depth:1.25003,height:1.75,italic:0,skew:0},92:{depth:1.25003,height:1.75,italic:0,skew:0},93:{depth:1.25003,height:1.75,italic:0,skew:0},123:{depth:1.25003,height:1.75,italic:0,skew:0},125:{depth:1.25003,height:1.75,italic:0,skew:0},710:{depth:0,height:.825,italic:0,skew:0},732:{depth:0,height:.825,italic:0,skew:0},770:{depth:0,height:.825,italic:0,skew:0},771:{depth:0,height:.825,italic:0,skew:0},8730:{depth:1.25003,height:1.75,italic:0,skew:0},8968:{depth:1.25003,height:1.75,italic:0,skew:0},8969:{depth:1.25003,height:1.75,italic:0,skew:0},8970:{depth:1.25003,height:1.75,italic:0,skew:0},8971:{depth:1.25003,height:1.75,italic:0,skew:0},9115:{depth:.64502,height:1.155,italic:0,skew:0},9116:{depth:1e-5,height:.6,italic:0,skew:0},9117:{depth:.64502,height:1.155,italic:0,skew:0},9118:{depth:.64502,height:1.155,italic:0,skew:0},9119:{depth:1e-5,height:.6,italic:0,skew:0},9120:{depth:.64502,height:1.155,italic:0,skew:0},9121:{depth:.64502,height:1.155,italic:0,skew:0},9122:{depth:-99e-5,height:.601,italic:0,skew:0},9123:{depth:.64502,height:1.155,italic:0,skew:0},9124:{depth:.64502,height:1.155,italic:0,skew:0},9125:{depth:-99e-5,height:.601,italic:0,skew:0},9126:{depth:.64502,height:1.155,italic:0,skew:0},9127:{depth:1e-5,height:.9,italic:0,skew:0},9128:{depth:.65002,height:1.15,italic:0,skew:0},9129:{depth:.90001,height:0,italic:0,skew:0},9130:{depth:0,height:.3,italic:0,skew:0},9131:{depth:1e-5,height:.9,italic:0,skew:0},9132:{depth:.65002,height:1.15,italic:0,skew:0},9133:{depth:.90001,height:0,italic:0,skew:0},9143:{depth:.88502,height:.915,italic:0,skew:0},10216:{depth:1.25003,height:1.75,italic:0,skew:0},10217:{depth:1.25003,height:1.75,italic:0,skew:0},57344:{depth:-.00499,height:.605,italic:0,skew:0},57345:{depth:-.00499,height:.605,italic:0,skew:0},57680:{depth:0,height:.12,italic:0,skew:0},57681:{depth:0,height:.12,italic:0,skew:0},57682:{depth:0,height:.12,italic:0,skew:0},57683:{depth:0,height:.12,italic:0,skew:0}},"Typewriter-Regular":{33:{depth:0,height:.61111,italic:0,skew:0},34:{depth:0,height:.61111,italic:0,skew:0},35:{depth:0,height:.61111,italic:0,skew:0},36:{depth:.08333,height:.69444,italic:0,skew:0},37:{depth:.08333,height:.69444,italic:0,skew:0},38:{depth:0,height:.61111,italic:0,skew:0},39:{depth:0,height:.61111,italic:0,skew:0},40:{depth:.08333,height:.69444,italic:0,skew:0},41:{depth:.08333,height:.69444,italic:0,skew:0},42:{depth:0,height:.52083,italic:0,skew:0},43:{depth:-.08056,height:.53055,italic:0,skew:0},44:{depth:.13889,height:.125,italic:0,skew:0},45:{depth:-.08056,height:.53055,italic:0,skew:0},46:{depth:0,height:.125,italic:0,skew:0},47:{depth:.08333,height:.69444,italic:0,skew:0},48:{depth:0,height:.61111,italic:0,skew:0},49:{depth:0,height:.61111,italic:0,skew:0},50:{depth:0,height:.61111,italic:0,skew:0},51:{depth:0,height:.61111,italic:0,skew:0},52:{depth:0,height:.61111,italic:0,skew:0},53:{depth:0,height:.61111,italic:0,skew:0},54:{depth:0,height:.61111,italic:0,skew:0},55:{depth:0,height:.61111,italic:0,skew:0},56:{depth:0,height:.61111,italic:0,skew:0},57:{depth:0,height:.61111,italic:0,skew:0},58:{depth:0,height:.43056,italic:0,skew:0},59:{depth:.13889,height:.43056,italic:0,skew:0},60:{depth:-.05556,height:.55556,italic:0,skew:0},61:{depth:-.19549,height:.41562,italic:0,skew:0},62:{depth:-.05556,height:.55556,italic:0,skew:0},63:{depth:0,height:.61111,italic:0,skew:0},64:{depth:0,height:.61111,italic:0,skew:0},65:{depth:0,height:.61111,italic:0,skew:0},66:{depth:0,height:.61111,italic:0,skew:0},67:{depth:0,height:.61111,italic:0,skew:0},68:{depth:0,height:.61111,italic:0,skew:0},69:{depth:0,height:.61111,italic:0,skew:0},70:{depth:0,height:.61111,italic:0,skew:0},71:{depth:0,height:.61111,italic:0,skew:0},72:{depth:0,height:.61111,italic:0,skew:0},73:{depth:0,height:.61111,italic:0,skew:0},74:{depth:0,height:.61111,italic:0,skew:0},75:{depth:0,height:.61111,italic:0,skew:0},76:{depth:0,height:.61111,italic:0,skew:0},77:{depth:0,height:.61111,italic:0,skew:0},78:{depth:0,height:.61111,italic:0,skew:0},79:{depth:0,height:.61111,italic:0,skew:0},80:{depth:0,height:.61111,italic:0,skew:0},81:{depth:.13889,height:.61111,italic:0,skew:0},82:{depth:0,height:.61111,italic:0,skew:0},83:{depth:0,height:.61111,italic:0,skew:0},84:{depth:0,height:.61111,italic:0,skew:0},85:{depth:0,height:.61111,italic:0,skew:0},86:{depth:0,height:.61111,italic:0,skew:0},87:{depth:0,height:.61111,italic:0,skew:0},88:{depth:0,height:.61111,italic:0,skew:0},89:{depth:0,height:.61111,italic:0,skew:0},90:{depth:0,height:.61111,italic:0,skew:0},91:{depth:.08333,height:.69444,italic:0,skew:0},92:{depth:.08333,height:.69444,italic:0,skew:0},93:{depth:.08333,height:.69444,italic:0,skew:0},94:{depth:0,height:.61111,italic:0,skew:0},95:{depth:.09514,height:0,italic:0,skew:0},96:{depth:0,height:.61111,italic:0,skew:0},97:{depth:0,height:.43056,italic:0,skew:0},98:{depth:0,height:.61111,italic:0,skew:0},99:{depth:0,height:.43056,italic:0,skew:0},100:{depth:0,height:.61111,italic:0,skew:0},101:{depth:0,height:.43056,italic:0,skew:0},102:{depth:0,height:.61111,italic:0,skew:0},103:{depth:.22222,height:.43056,italic:0,skew:0},104:{depth:0,height:.61111,italic:0,skew:0},105:{depth:0,height:.61111,italic:0,skew:0},106:{depth:.22222,height:.61111,italic:0,skew:0},107:{depth:0,height:.61111,italic:0,skew:0},108:{depth:0,height:.61111,italic:0,skew:0},109:{depth:0,height:.43056,italic:0,skew:0},110:{depth:0,height:.43056,italic:0,skew:0},111:{depth:0,height:.43056,italic:0,skew:0},112:{depth:.22222,height:.43056,italic:0,skew:0},113:{depth:.22222,height:.43056,italic:0,skew:0},114:{depth:0,height:.43056,italic:0,skew:0},115:{depth:0,height:.43056,italic:0,skew:0},116:{depth:0,height:.55358,italic:0,skew:0},117:{depth:0,height:.43056,italic:0,skew:0},118:{depth:0,height:.43056,italic:0,skew:0},119:{depth:0,height:.43056,italic:0,skew:0},120:{depth:0,height:.43056,italic:0,skew:0},121:{depth:.22222,height:.43056,italic:0,skew:0},122:{depth:0,height:.43056,italic:0,skew:0},123:{depth:.08333,height:.69444,italic:0,skew:0},124:{depth:.08333,height:.69444,italic:0,skew:0},125:{depth:.08333,height:.69444,italic:0,skew:0},126:{depth:0,height:.61111,italic:0,skew:0},127:{depth:0,height:.61111,italic:0,skew:0},305:{depth:0,height:.43056,italic:0,skew:0},567:{depth:.22222,height:.43056,italic:0,skew:0},768:{depth:0,height:.61111,italic:0,skew:0},769:{depth:0,height:.61111,italic:0,skew:0},770:{depth:0,height:.61111,italic:0,skew:0},771:{depth:0,height:.61111,italic:0,skew:0},772:{depth:0,height:.56555,italic:0,skew:0},774:{depth:0,height:.61111,italic:0,skew:0},776:{depth:0,height:.61111,italic:0,skew:0},778:{depth:0,height:.61111,italic:0,skew:0},780:{depth:0,height:.56597,italic:0,skew:0},915:{depth:0,height:.61111,italic:0,skew:0},916:{depth:0,height:.61111,italic:0,skew:0},920:{depth:0,height:.61111,italic:0,skew:0},923:{depth:0,height:.61111,italic:0,skew:0},926:{depth:0,height:.61111,italic:0,skew:0},928:{depth:0,height:.61111,italic:0,skew:0},931:{depth:0,height:.61111,italic:0,skew:0},933:{depth:0,height:.61111,italic:0,skew:0},934:{depth:0,height:.61111,italic:0,skew:0},936:{depth:0,height:.61111,italic:0,skew:0},937:{depth:0,height:.61111,italic:0,skew:0},2018:{depth:0,height:.61111,italic:0,skew:0},2019:{depth:0,height:.61111,italic:0,skew:0},8242:{depth:0,height:.61111,italic:0,skew:0}}}},{}],20:[function(e,t,i){for(var h=e("./utils"),a=e("./ParseError"),s={"\\sqrt":{numArgs:1,numOptionalArgs:1,handler:function(e,t,i,h){return{type:"sqrt",body:i,index:t}}},"\\text":{numArgs:1,argTypes:["text"],greediness:2,handler:function(e,t){var i;return i="ordgroup"===t.type?t.value:[t],{type:"text",body:i}}},"\\color":{numArgs:2,allowedInText:!0,greediness:3,argTypes:["color","original"],handler:function(e,t,i){var h;return h="ordgroup"===i.type?i.value:[i],{type:"color",color:t.value,value:h}}},"\\overline":{numArgs:1,handler:function(e,t){return{type:"overline",body:t}}},"\\rule":{numArgs:2,numOptionalArgs:1,
argTypes:["size","size","size"],handler:function(e,t,i,h){return{type:"rule",shift:t&&t.value,width:i.value,height:h.value}}},"\\KaTeX":{numArgs:0,handler:function(e){return{type:"katex"}}},"\\phantom":{numArgs:1,handler:function(e,t){var i;return i="ordgroup"===t.type?t.value:[t],{type:"phantom",value:i}}}},r={"\\bigl":{type:"open",size:1},"\\Bigl":{type:"open",size:2},"\\biggl":{type:"open",size:3},"\\Biggl":{type:"open",size:4},"\\bigr":{type:"close",size:1},"\\Bigr":{type:"close",size:2},"\\biggr":{type:"close",size:3},"\\Biggr":{type:"close",size:4},"\\bigm":{type:"rel",size:1},"\\Bigm":{type:"rel",size:2},"\\biggm":{type:"rel",size:3},"\\Biggm":{type:"rel",size:4},"\\big":{type:"textord",size:1},"\\Big":{type:"textord",size:2},"\\bigg":{type:"textord",size:3},"\\Bigg":{type:"textord",size:4}},l=["(",")","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","\\lceil","\\rceil","<",">","\\langle","\\rangle","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","\\lmoustache","\\rmoustache","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."],n={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"},p=([{funcs:["\\blue","\\orange","\\pink","\\red","\\green","\\gray","\\purple","\\blueA","\\blueB","\\blueC","\\blueD","\\blueE","\\tealA","\\tealB","\\tealC","\\tealD","\\tealE","\\greenA","\\greenB","\\greenC","\\greenD","\\greenE","\\goldA","\\goldB","\\goldC","\\goldD","\\goldE","\\redA","\\redB","\\redC","\\redD","\\redE","\\maroonA","\\maroonB","\\maroonC","\\maroonD","\\maroonE","\\purpleA","\\purpleB","\\purpleC","\\purpleD","\\purpleE","\\mintA","\\mintB","\\mintC","\\grayA","\\grayB","\\grayC","\\grayD","\\grayE","\\grayF","\\grayG","\\grayH","\\grayI","\\kaBlue","\\kaGreen"],data:{numArgs:1,allowedInText:!0,greediness:3,handler:function(e,t){var i;return i="ordgroup"===t.type?t.value:[t],{type:"color",color:"katex-"+e.slice(1),value:i}}}},{funcs:["\\arcsin","\\arccos","\\arctan","\\arg","\\cos","\\cosh","\\cot","\\coth","\\csc","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\tan","\\tanh"],data:{numArgs:0,handler:function(e){return{type:"op",limits:!1,symbol:!1,body:e}}}},{funcs:["\\det","\\gcd","\\inf","\\lim","\\liminf","\\limsup","\\max","\\min","\\Pr","\\sup"],data:{numArgs:0,handler:function(e){return{type:"op",limits:!0,symbol:!1,body:e}}}},{funcs:["\\int","\\iint","\\iiint","\\oint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:!1,symbol:!0,body:e}}}},{funcs:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint"],data:{numArgs:0,handler:function(e){return{type:"op",limits:!0,symbol:!0,body:e}}}},{funcs:["\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom"],data:{numArgs:2,greediness:2,handler:function(e,t,i){var h,a=null,s=null,r="auto";switch(e){case"\\dfrac":case"\\frac":case"\\tfrac":h=!0;break;case"\\dbinom":case"\\binom":case"\\tbinom":h=!1,a="(",s=")";break;default:throw new Error("Unrecognized genfrac command")}switch(e){case"\\dfrac":case"\\dbinom":r="display";break;case"\\tfrac":case"\\tbinom":r="text"}return{type:"genfrac",numer:t,denom:i,hasBarLine:h,leftDelim:a,rightDelim:s,size:r}}}},{funcs:["\\llap","\\rlap"],data:{numArgs:1,allowedInText:!0,handler:function(e,t){return{type:e.slice(1),body:t}}}},{funcs:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg","\\left","\\right"],data:{numArgs:1,handler:function(e,t,i){if(!h.contains(l,t.value))throw new a("Invalid delimiter: '"+t.value+"' after '"+e+"'",this.lexer,i[1]);return"\\left"===e||"\\right"===e?{type:"leftright",value:t.value}:{type:"delimsizing",size:r[e].size,delimType:r[e].type,value:t.value}}}},{funcs:["\\tiny","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],data:{numArgs:0}},{funcs:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],data:{numArgs:0}},{funcs:["\\mathrm","\\mathit","\\mathbf","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],data:{numArgs:1,handler:function(e,t){return e in n&&(e=n[e]),{type:"font",font:e.slice(1),body:t}}}},{funcs:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot"],data:{numArgs:1,handler:function(e,t){return{type:"accent",accent:e,base:t}}}},{funcs:["\\over","\\choose"],data:{numArgs:0,handler:function(e){var t;switch(e){case"\\over":t="\\frac";break;case"\\choose":t="\\binom";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",replaceWith:t}}}},{funcs:["\\\\","\\cr"],data:{numArgs:0,numOptionalArgs:1,argTypes:["size"],handler:function(e,t){return{type:"cr",size:t}}}},{funcs:["\\begin","\\end"],data:{numArgs:1,argTypes:["text"],handler:function(e,t,i){if("ordgroup"!==t.type)throw new a("Invalid environment name",this.lexer,i[1]);for(var h="",s=0;s<t.value.length;++s)h+=t.value[s].value;return{type:"environment",name:h,namepos:i[1]}}}}]),o=function(e,t){for(var i=0;i<e.length;i++)s[e[i]]=t},c=0;c<p.length;c++)o(p[c].funcs,p[c].data);for(var g in s)if(s.hasOwnProperty(g)){var d=s[g];s[g]={numArgs:d.numArgs,argTypes:d.argTypes,greediness:void 0===d.greediness?1:d.greediness,allowedInText:d.allowedInText?d.allowedInText:!1,numOptionalArgs:void 0===d.numOptionalArgs?0:d.numOptionalArgs,handler:d.handler}}t.exports={funcs:s}},{"./ParseError":7,"./utils":25}],21:[function(e,t,i){function h(e,t){this.type=e,this.attributes={},this.children=t||[]}function a(e){this.text=e}var s=e("./utils");h.prototype.setAttribute=function(e,t){this.attributes[e]=t},h.prototype.toNode=function(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);for(var i=0;i<this.children.length;i++)e.appendChild(this.children[i].toNode());return e},h.prototype.toMarkup=function(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=s.escape(this.attributes[t]),e+='"');e+=">";for(var i=0;i<this.children.length;i++)e+=this.children[i].toMarkup();return e+="</"+this.type+">"},a.prototype.toNode=function(){return document.createTextNode(this.text)},a.prototype.toMarkup=function(){return s.escape(this.text)},t.exports={MathNode:h,TextNode:a}},{"./utils":25}],22:[function(e,t,i){function h(e,t,i){this.type=e,this.value=t,this.mode=i}function a(e,t,i){this.result=e,this.position=t}t.exports={ParseNode:h,ParseResult:a}},{}],23:[function(e,t,i){var h=e("./Parser"),a=function(e,t){var i=new h(e,t);return i.parse()};t.exports=a},{"./Parser":8}],24:[function(e,t,i){for(var h={math:{"\\equiv":{font:"main",group:"rel",replace:"≡"},"\\prec":{font:"main",group:"rel",replace:"≺"},"\\succ":{font:"main",group:"rel",replace:"≻"},"\\sim":{font:"main",group:"rel",replace:"∼"},"\\perp":{font:"main",group:"rel",replace:"⊥"},"\\preceq":{font:"main",group:"rel",replace:"⪯"},"\\succeq":{font:"main",group:"rel",replace:"⪰"},"\\simeq":{font:"main",group:"rel",replace:"≃"},"\\mid":{font:"main",group:"rel",replace:"∣"},"\\ll":{font:"main",group:"rel",replace:"≪"},"\\gg":{font:"main",group:"rel",replace:"≫"},"\\asymp":{font:"main",group:"rel",replace:"≍"},"\\parallel":{font:"main",group:"rel",replace:"∥"},"\\bowtie":{font:"main",group:"rel",replace:"⋈"},"\\smile":{font:"main",group:"rel",replace:"⌣"},"\\sqsubseteq":{font:"main",group:"rel",replace:"⊑"},"\\sqsupseteq":{font:"main",group:"rel",replace:"⊒"},"\\doteq":{font:"main",group:"rel",replace:"≐"},"\\frown":{font:"main",group:"rel",replace:"⌢"},"\\ni":{font:"main",group:"rel",replace:"∋"},"\\propto":{font:"main",group:"rel",replace:"∝"},"\\vdash":{font:"main",group:"rel",replace:"⊢"},"\\dashv":{font:"main",group:"rel",replace:"⊣"},"\\owns":{font:"main",group:"rel",replace:"∋"},"\\ldotp":{font:"main",group:"punct",replace:"."},"\\cdotp":{font:"main",group:"punct",replace:"⋅"},"\\#":{font:"main",group:"textord",replace:"#"},"\\&":{font:"main",group:"textord",replace:"&"},"\\aleph":{font:"main",group:"textord",replace:"ℵ"},"\\forall":{font:"main",group:"textord",replace:"∀"},"\\hbar":{font:"main",group:"textord",replace:"ℏ"},"\\exists":{font:"main",group:"textord",replace:"∃"},"\\nabla":{font:"main",group:"textord",replace:"∇"},"\\flat":{font:"main",group:"textord",replace:"♭"},"\\ell":{font:"main",group:"textord",replace:"ℓ"},"\\natural":{font:"main",group:"textord",replace:"♮"},"\\clubsuit":{font:"main",group:"textord",replace:"♣"},"\\wp":{font:"main",group:"textord",replace:"℘"},"\\sharp":{font:"main",group:"textord",replace:"♯"},"\\diamondsuit":{font:"main",group:"textord",replace:"♢"},"\\Re":{font:"main",group:"textord",replace:"ℜ"},"\\heartsuit":{font:"main",group:"textord",replace:"♡"},"\\Im":{font:"main",group:"textord",replace:"ℑ"},"\\spadesuit":{font:"main",group:"textord",replace:"♠"},"\\dag":{font:"main",group:"textord",replace:"†"},"\\ddag":{font:"main",group:"textord",replace:"‡"},"\\rmoustache":{font:"main",group:"close",replace:"⎱"},"\\lmoustache":{font:"main",group:"open",replace:"⎰"},"\\rgroup":{font:"main",group:"close",replace:"⟯"},"\\lgroup":{font:"main",group:"open",replace:"⟮"},"\\mp":{font:"main",group:"bin",replace:"∓"},"\\ominus":{font:"main",group:"bin",replace:"⊖"},"\\uplus":{font:"main",group:"bin",replace:"⊎"},"\\sqcap":{font:"main",group:"bin",replace:"⊓"},"\\ast":{font:"main",group:"bin",replace:"∗"},"\\sqcup":{font:"main",group:"bin",replace:"⊔"},"\\bigcirc":{font:"main",group:"bin",replace:"◯"},"\\bullet":{font:"main",group:"bin",replace:"∙"},"\\ddagger":{font:"main",group:"bin",replace:"‡"},"\\wr":{font:"main",group:"bin",replace:"≀"},"\\amalg":{font:"main",group:"bin",replace:"⨿"},"\\longleftarrow":{font:"main",group:"rel",replace:"⟵"},"\\Leftarrow":{font:"main",group:"rel",replace:"⇐"},"\\Longleftarrow":{font:"main",group:"rel",replace:"⟸"},"\\longrightarrow":{font:"main",group:"rel",replace:"⟶"},"\\Rightarrow":{font:"main",group:"rel",replace:"⇒"},"\\Longrightarrow":{font:"main",group:"rel",replace:"⟹"},"\\leftrightarrow":{font:"main",group:"rel",replace:"↔"},"\\longleftrightarrow":{font:"main",group:"rel",replace:"⟷"},"\\Leftrightarrow":{font:"main",group:"rel",replace:"⇔"},"\\Longleftrightarrow":{font:"main",group:"rel",replace:"⟺"},"\\mapsto":{font:"main",group:"rel",replace:"↦"},"\\longmapsto":{font:"main",group:"rel",replace:"⟼"},"\\nearrow":{font:"main",group:"rel",replace:"↗"},"\\hookleftarrow":{font:"main",group:"rel",replace:"↩"},"\\hookrightarrow":{font:"main",group:"rel",replace:"↪"},"\\searrow":{font:"main",group:"rel",replace:"↘"},"\\leftharpoonup":{font:"main",group:"rel",replace:"↼"},"\\rightharpoonup":{font:"main",group:"rel",replace:"⇀"},"\\swarrow":{font:"main",group:"rel",replace:"↙"},"\\leftharpoondown":{font:"main",group:"rel",replace:"↽"},"\\rightharpoondown":{font:"main",group:"rel",replace:"⇁"},"\\nwarrow":{font:"main",group:"rel",replace:"↖"},"\\rightleftharpoons":{font:"main",group:"rel",replace:"⇌"},"\\nless":{font:"ams",group:"rel",replace:"≮"},"\\nleqslant":{font:"ams",group:"rel",replace:""},"\\nleqq":{font:"ams",group:"rel",replace:""},"\\lneq":{font:"ams",group:"rel",replace:"⪇"},"\\lneqq":{font:"ams",group:"rel",replace:"≨"},"\\lvertneqq":{font:"ams",group:"rel",replace:""},"\\lnsim":{font:"ams",group:"rel",replace:"⋦"},"\\lnapprox":{font:"ams",group:"rel",replace:"⪉"},"\\nprec":{font:"ams",group:"rel",replace:"⊀"},"\\npreceq":{font:"ams",group:"rel",replace:"⋠"},"\\precnsim":{font:"ams",group:"rel",replace:"⋨"},"\\precnapprox":{font:"ams",group:"rel",replace:"⪹"},"\\nsim":{font:"ams",group:"rel",replace:"≁"},"\\nshortmid":{font:"ams",group:"rel",replace:""},"\\nmid":{font:"ams",group:"rel",replace:"∤"},"\\nvdash":{font:"ams",group:"rel",replace:"⊬"},"\\nvDash":{font:"ams",group:"rel",replace:"⊭"},"\\ntriangleleft":{font:"ams",group:"rel",replace:"⋪"},"\\ntrianglelefteq":{font:"ams",group:"rel",replace:"⋬"},"\\subsetneq":{font:"ams",group:"rel",replace:"⊊"},"\\varsubsetneq":{font:"ams",group:"rel",replace:""},"\\subsetneqq":{font:"ams",group:"rel",replace:"⫋"},"\\varsubsetneqq":{font:"ams",group:"rel",replace:""},"\\ngtr":{font:"ams",group:"rel",replace:"≯"},"\\ngeqslant":{font:"ams",group:"rel",replace:""},"\\ngeqq":{font:"ams",group:"rel",replace:""},"\\gneq":{font:"ams",group:"rel",replace:"⪈"},"\\gneqq":{font:"ams",group:"rel",replace:"≩"},"\\gvertneqq":{font:"ams",group:"rel",replace:""},"\\gnsim":{font:"ams",group:"rel",replace:"⋧"},"\\gnapprox":{font:"ams",group:"rel",replace:"⪊"},"\\nsucc":{font:"ams",group:"rel",replace:"⊁"},"\\nsucceq":{font:"ams",group:"rel",replace:"⋡"},"\\succnsim":{font:"ams",group:"rel",replace:"⋩"},"\\succnapprox":{font:"ams",group:"rel",replace:"⪺"},"\\ncong":{font:"ams",group:"rel",replace:"≆"},"\\nshortparallel":{font:"ams",group:"rel",replace:""},"\\nparallel":{font:"ams",group:"rel",replace:"∦"},"\\nVDash":{font:"ams",group:"rel",replace:"⊯"},"\\ntriangleright":{font:"ams",group:"rel",replace:"⋫"},"\\ntrianglerighteq":{font:"ams",group:"rel",replace:"⋭"},"\\nsupseteqq":{font:"ams",group:"rel",replace:""},"\\supsetneq":{font:"ams",group:"rel",replace:"⊋"},"\\varsupsetneq":{font:"ams",group:"rel",replace:""},"\\supsetneqq":{font:"ams",group:"rel",replace:"⫌"},"\\varsupsetneqq":{font:"ams",group:"rel",replace:""},"\\nVdash":{font:"ams",group:"rel",replace:"⊮"},"\\precneqq":{font:"ams",group:"rel",replace:"⪵"},"\\succneqq":{font:"ams",group:"rel",replace:"⪶"},"\\nsubseteqq":{font:"ams",group:"rel",replace:""},"\\unlhd":{font:"ams",group:"bin",replace:"⊴"},"\\unrhd":{font:"ams",group:"bin",replace:"⊵"},"\\nleftarrow":{font:"ams",group:"rel",replace:"↚"},"\\nrightarrow":{font:"ams",group:"rel",replace:"↛"},"\\nLeftarrow":{font:"ams",group:"rel",replace:"⇍"},"\\nRightarrow":{font:"ams",group:"rel",replace:"⇏"},"\\nleftrightarrow":{font:"ams",group:"rel",replace:"↮"},"\\nLeftrightarrow":{font:"ams",group:"rel",replace:"⇎"},"\\vartriangle":{font:"ams",group:"rel",replace:"△"},"\\hslash":{font:"ams",group:"textord",replace:"ℏ"},"\\triangledown":{font:"ams",group:"textord",replace:"▽"},"\\lozenge":{font:"ams",group:"textord",replace:"◊"},"\\circledS":{font:"ams",group:"textord",replace:"Ⓢ"},"\\circledR":{font:"ams",group:"textord",replace:"®"},"\\measuredangle":{font:"ams",group:"textord",replace:"∡"},"\\nexists":{font:"ams",group:"textord",replace:"∄"},"\\mho":{font:"ams",group:"textord",replace:"℧"},"\\Finv":{font:"ams",group:"textord",replace:"Ⅎ"},"\\Game":{font:"ams",group:"textord",replace:"⅁"},"\\Bbbk":{font:"ams",group:"textord",replace:"k"},"\\backprime":{font:"ams",group:"textord",replace:"‵"},"\\blacktriangle":{font:"ams",group:"textord",replace:"▲"},"\\blacktriangledown":{font:"ams",group:"textord",replace:"▼"},"\\blacksquare":{font:"ams",group:"textord",replace:"■"},"\\blacklozenge":{font:"ams",group:"textord",replace:"⧫"},"\\bigstar":{font:"ams",group:"textord",replace:"★"},"\\sphericalangle":{font:"ams",group:"textord",replace:"∢"},"\\complement":{font:"ams",group:"textord",replace:"∁"},"\\eth":{font:"ams",group:"textord",replace:"ð"},"\\diagup":{font:"ams",group:"textord",replace:"╱"},"\\diagdown":{font:"ams",group:"textord",replace:"╲"},"\\square":{font:"ams",group:"textord",replace:"□"},"\\Box":{font:"ams",group:"textord",replace:"□"},"\\Diamond":{font:"ams",group:"textord",replace:"◊"},"\\yen":{font:"ams",group:"textord",replace:"¥"},"\\checkmark":{font:"ams",group:"textord",replace:"✓"},"\\beth":{font:"ams",group:"textord",replace:"ℶ"},"\\daleth":{font:"ams",group:"textord",replace:"ℸ"},"\\gimel":{font:"ams",group:"textord",replace:"ℷ"},"\\digamma":{font:"ams",group:"textord",replace:"ϝ"},"\\varkappa":{font:"ams",group:"textord",replace:"ϰ"},"\\ulcorner":{font:"ams",group:"open",replace:"┌"},"\\urcorner":{font:"ams",group:"close",replace:"┐"},"\\llcorner":{font:"ams",group:"open",replace:"└"},"\\lrcorner":{font:"ams",group:"close",replace:"┘"},"\\leqq":{font:"ams",group:"rel",replace:"≦"},"\\leqslant":{font:"ams",group:"rel",replace:"⩽"},"\\eqslantless":{font:"ams",group:"rel",replace:"⪕"},"\\lesssim":{font:"ams",group:"rel",replace:"≲"},"\\lessapprox":{font:"ams",group:"rel",replace:"⪅"},"\\approxeq":{font:"ams",group:"rel",replace:"≊"},"\\lessdot":{font:"ams",group:"bin",replace:"⋖"},"\\lll":{font:"ams",group:"rel",replace:"⋘"},"\\lessgtr":{font:"ams",group:"rel",replace:"≶"},"\\lesseqgtr":{font:"ams",group:"rel",replace:"⋚"},"\\lesseqqgtr":{font:"ams",group:"rel",replace:"⪋"},"\\doteqdot":{font:"ams",group:"rel",replace:"≑"},"\\risingdotseq":{font:"ams",group:"rel",replace:"≓"},"\\fallingdotseq":{font:"ams",group:"rel",replace:"≒"},"\\backsim":{font:"ams",group:"rel",replace:"∽"},"\\backsimeq":{font:"ams",group:"rel",replace:"⋍"},"\\subseteqq":{font:"ams",group:"rel",replace:"⫅"},"\\Subset":{font:"ams",group:"rel",replace:"⋐"},"\\sqsubset":{font:"ams",group:"rel",replace:"⊏"},"\\preccurlyeq":{font:"ams",group:"rel",replace:"≼"},"\\curlyeqprec":{font:"ams",group:"rel",replace:"⋞"},"\\precsim":{font:"ams",group:"rel",replace:"≾"},"\\precapprox":{font:"ams",group:"rel",replace:"⪷"},"\\vartriangleleft":{font:"ams",group:"rel",replace:"⊲"},"\\trianglelefteq":{font:"ams",group:"rel",replace:"⊴"},"\\vDash":{font:"ams",group:"rel",replace:"⊨"},"\\Vvdash":{font:"ams",group:"rel",replace:"⊪"},"\\smallsmile":{font:"ams",group:"rel",replace:"⌣"},"\\smallfrown":{font:"ams",group:"rel",replace:"⌢"},"\\bumpeq":{font:"ams",group:"rel",replace:"≏"},"\\Bumpeq":{font:"ams",group:"rel",replace:"≎"},"\\geqq":{font:"ams",group:"rel",replace:"≧"},"\\geqslant":{font:"ams",group:"rel",replace:"⩾"},"\\eqslantgtr":{font:"ams",group:"rel",replace:"⪖"},"\\gtrsim":{font:"ams",group:"rel",replace:"≳"},"\\gtrapprox":{font:"ams",group:"rel",replace:"⪆"},"\\gtrdot":{font:"ams",group:"bin",replace:"⋗"},"\\ggg":{font:"ams",group:"rel",replace:"⋙"},"\\gtrless":{font:"ams",group:"rel",replace:"≷"},"\\gtreqless":{font:"ams",group:"rel",replace:"⋛"},"\\gtreqqless":{font:"ams",group:"rel",replace:"⪌"},"\\eqcirc":{font:"ams",group:"rel",replace:"≖"},"\\circeq":{font:"ams",group:"rel",replace:"≗"},"\\triangleq":{font:"ams",group:"rel",replace:"≜"},"\\thicksim":{font:"ams",group:"rel",replace:"∼"},"\\thickapprox":{font:"ams",group:"rel",replace:"≈"},"\\supseteqq":{font:"ams",group:"rel",replace:"⫆"},"\\Supset":{font:"ams",group:"rel",replace:"⋑"},"\\sqsupset":{font:"ams",group:"rel",replace:"⊐"},"\\succcurlyeq":{font:"ams",group:"rel",replace:"≽"},"\\curlyeqsucc":{font:"ams",group:"rel",replace:"⋟"},"\\succsim":{font:"ams",group:"rel",replace:"≿"},"\\succapprox":{font:"ams",group:"rel",replace:"⪸"},"\\vartriangleright":{font:"ams",group:"rel",replace:"⊳"},"\\trianglerighteq":{font:"ams",group:"rel",replace:"⊵"},"\\Vdash":{font:"ams",group:"rel",replace:"⊩"},"\\shortmid":{font:"ams",group:"rel",replace:"∣"},"\\shortparallel":{font:"ams",group:"rel",replace:"∥"},"\\between":{font:"ams",group:"rel",replace:"≬"},"\\pitchfork":{font:"ams",group:"rel",replace:"⋔"},"\\varpropto":{font:"ams",group:"rel",replace:"∝"},"\\blacktriangleleft":{font:"ams",group:"rel",replace:"◀"},"\\therefore":{font:"ams",group:"rel",replace:"∴"},"\\backepsilon":{font:"ams",group:"rel",replace:"∍"},"\\blacktriangleright":{font:"ams",group:"rel",replace:"▶"},"\\because":{font:"ams",group:"rel",replace:"∵"},"\\llless":{font:"ams",group:"rel",replace:"⋘"},"\\gggtr":{font:"ams",group:"rel",replace:"⋙"},"\\lhd":{font:"ams",group:"bin",replace:"⊲"},"\\rhd":{font:"ams",group:"bin",replace:"⊳"},"\\eqsim":{font:"ams",group:"rel",replace:"≂"},"\\Join":{font:"main",group:"rel",replace:"⋈"},"\\Doteq":{font:"ams",group:"rel",replace:"≑"},"\\dotplus":{font:"ams",group:"bin",replace:"∔"},"\\smallsetminus":{font:"ams",group:"bin",replace:"∖"},"\\Cap":{font:"ams",group:"bin",replace:"⋒"},"\\Cup":{font:"ams",group:"bin",replace:"⋓"},"\\doublebarwedge":{font:"ams",group:"bin",replace:"⩞"},"\\boxminus":{font:"ams",group:"bin",replace:"⊟"},"\\boxplus":{font:"ams",group:"bin",replace:"⊞"},"\\divideontimes":{font:"ams",group:"bin",replace:"⋇"},"\\ltimes":{font:"ams",group:"bin",replace:"⋉"},"\\rtimes":{font:"ams",group:"bin",replace:"⋊"},"\\leftthreetimes":{font:"ams",group:"bin",replace:"⋋"},"\\rightthreetimes":{font:"ams",group:"bin",replace:"⋌"},"\\curlywedge":{font:"ams",group:"bin",replace:"⋏"},"\\curlyvee":{font:"ams",group:"bin",replace:"⋎"},"\\circleddash":{font:"ams",group:"bin",replace:"⊝"},"\\circledast":{font:"ams",group:"bin",replace:"⊛"},"\\centerdot":{font:"ams",group:"bin",replace:"⋅"},"\\intercal":{font:"ams",group:"bin",replace:"⊺"},"\\doublecap":{font:"ams",group:"bin",replace:"⋒"},"\\doublecup":{font:"ams",group:"bin",replace:"⋓"},"\\boxtimes":{font:"ams",group:"bin",replace:"⊠"},"\\dashrightarrow":{font:"ams",group:"rel",replace:"⇢"},"\\dashleftarrow":{font:"ams",group:"rel",replace:"⇠"},"\\leftleftarrows":{font:"ams",group:"rel",replace:"⇇"},"\\leftrightarrows":{font:"ams",group:"rel",replace:"⇆"},"\\Lleftarrow":{font:"ams",group:"rel",replace:"⇚"},"\\twoheadleftarrow":{font:"ams",group:"rel",replace:"↞"},"\\leftarrowtail":{font:"ams",group:"rel",replace:"↢"},"\\looparrowleft":{font:"ams",group:"rel",replace:"↫"},"\\leftrightharpoons":{font:"ams",group:"rel",replace:"⇋"},"\\curvearrowleft":{font:"ams",group:"rel",replace:"↶"},"\\circlearrowleft":{font:"ams",group:"rel",replace:"↺"},"\\Lsh":{font:"ams",group:"rel",replace:"↰"},"\\upuparrows":{font:"ams",group:"rel",replace:"⇈"},"\\upharpoonleft":{font:"ams",group:"rel",replace:"↿"},"\\downharpoonleft":{font:"ams",group:"rel",replace:"⇃"},"\\multimap":{font:"ams",group:"rel",replace:"⊸"},"\\leftrightsquigarrow":{font:"ams",group:"rel",replace:"↭"},"\\rightrightarrows":{font:"ams",group:"rel",replace:"⇉"},"\\rightleftarrows":{font:"ams",group:"rel",replace:"⇄"},"\\twoheadrightarrow":{font:"ams",group:"rel",replace:"↠"},"\\rightarrowtail":{font:"ams",group:"rel",replace:"↣"},"\\looparrowright":{font:"ams",group:"rel",replace:"↬"},"\\curvearrowright":{font:"ams",group:"rel",replace:"↷"},"\\circlearrowright":{font:"ams",group:"rel",replace:"↻"},"\\Rsh":{font:"ams",group:"rel",replace:"↱"},"\\downdownarrows":{font:"ams",group:"rel",replace:"⇊"},"\\upharpoonright":{font:"ams",group:"rel",replace:"↾"},"\\downharpoonright":{font:"ams",group:"rel",replace:"⇂"},"\\rightsquigarrow":{font:"ams",group:"rel",replace:"⇝"},"\\leadsto":{font:"ams",group:"rel",replace:"⇝"},"\\Rrightarrow":{font:"ams",group:"rel",replace:"⇛"},"\\restriction":{font:"ams",group:"rel",replace:"↾"},"`":{font:"main",group:"textord",replace:"‘"},"\\$":{font:"main",group:"textord",replace:"$"},"\\%":{font:"main",group:"textord",replace:"%"},"\\_":{font:"main",group:"textord",replace:"_"},"\\angle":{font:"main",group:"textord",replace:"∠"},"\\infty":{font:"main",group:"textord",replace:"∞"},"\\prime":{font:"main",group:"textord",replace:"′"},"\\triangle":{font:"main",group:"textord",replace:"△"},"\\Gamma":{font:"main",group:"textord",replace:"Γ"},"\\Delta":{font:"main",group:"textord",replace:"Δ"},"\\Theta":{font:"main",group:"textord",replace:"Θ"},"\\Lambda":{font:"main",group:"textord",replace:"Λ"},"\\Xi":{font:"main",group:"textord",replace:"Ξ"},"\\Pi":{font:"main",group:"textord",replace:"Π"},"\\Sigma":{font:"main",group:"textord",replace:"Σ"},"\\Upsilon":{font:"main",group:"textord",replace:"Υ"},"\\Phi":{font:"main",group:"textord",replace:"Φ"},"\\Psi":{font:"main",group:"textord",replace:"Ψ"},"\\Omega":{font:"main",group:"textord",replace:"Ω"},"\\neg":{font:"main",group:"textord",replace:"¬"},"\\lnot":{font:"main",group:"textord",replace:"¬"},"\\top":{font:"main",group:"textord",replace:"⊤"},"\\bot":{font:"main",group:"textord",replace:"⊥"},"\\emptyset":{font:"main",group:"textord",replace:"∅"},"\\varnothing":{font:"ams",group:"textord",replace:"∅"},"\\alpha":{font:"main",group:"mathord",replace:"α"},"\\beta":{font:"main",group:"mathord",replace:"β"},"\\gamma":{font:"main",group:"mathord",replace:"γ"},"\\delta":{font:"main",group:"mathord",replace:"δ"},"\\epsilon":{font:"main",group:"mathord",replace:"ϵ"},"\\zeta":{font:"main",group:"mathord",replace:"ζ"},"\\eta":{font:"main",group:"mathord",replace:"η"},"\\theta":{font:"main",group:"mathord",replace:"θ"},"\\iota":{font:"main",group:"mathord",replace:"ι"},"\\kappa":{font:"main",group:"mathord",replace:"κ"},"\\lambda":{font:"main",group:"mathord",replace:"λ"},"\\mu":{font:"main",group:"mathord",replace:"μ"},"\\nu":{font:"main",group:"mathord",replace:"ν"},"\\xi":{font:"main",group:"mathord",replace:"ξ"},"\\omicron":{font:"main",group:"mathord",replace:"o"},"\\pi":{font:"main",group:"mathord",replace:"π"},"\\rho":{font:"main",group:"mathord",replace:"ρ"},"\\sigma":{font:"main",group:"mathord",replace:"σ"},"\\tau":{font:"main",group:"mathord",replace:"τ"},"\\upsilon":{font:"main",group:"mathord",replace:"υ"},"\\phi":{font:"main",group:"mathord",replace:"ϕ"},"\\chi":{font:"main",group:"mathord",replace:"χ"},"\\psi":{font:"main",group:"mathord",replace:"ψ"},"\\omega":{font:"main",group:"mathord",replace:"ω"},"\\varepsilon":{font:"main",group:"mathord",replace:"ε"},"\\vartheta":{font:"main",group:"mathord",replace:"ϑ"},"\\varpi":{font:"main",group:"mathord",replace:"ϖ"},"\\varrho":{font:"main",group:"mathord",replace:"ϱ"},"\\varsigma":{font:"main",group:"mathord",replace:"ς"},"\\varphi":{font:"main",group:"mathord",replace:"φ"},"*":{font:"main",group:"bin",replace:"∗"},"+":{font:"main",group:"bin"},"-":{font:"main",group:"bin",replace:"−"},"\\cdot":{font:"main",group:"bin",replace:"⋅"},"\\circ":{font:"main",group:"bin",replace:"∘"},"\\div":{font:"main",group:"bin",replace:"÷"},"\\pm":{font:"main",group:"bin",replace:"±"},"\\times":{font:"main",group:"bin",replace:"×"},"\\cap":{font:"main",group:"bin",replace:"∩"},"\\cup":{font:"main",group:"bin",replace:"∪"},"\\setminus":{font:"main",group:"bin",replace:"∖"},"\\land":{font:"main",group:"bin",replace:"∧"},"\\lor":{font:"main",group:"bin",replace:"∨"},"\\wedge":{font:"main",group:"bin",replace:"∧"},"\\vee":{font:"main",group:"bin",replace:"∨"},"\\surd":{font:"main",group:"textord",replace:"√"},"(":{font:"main",group:"open"},"[":{font:"main",group:"open"},"\\langle":{font:"main",group:"open",replace:"⟨"},"\\lvert":{font:"main",group:"open",replace:"∣"},"\\lVert":{font:"main",group:"open",replace:"∥"},")":{font:"main",group:"close"},"]":{font:"main",group:"close"},"?":{font:"main",group:"close"},"!":{font:"main",group:"close"},"\\rangle":{font:"main",group:"close",replace:"⟩"},"\\rvert":{font:"main",group:"close",replace:"∣"},"\\rVert":{font:"main",group:"close",replace:"∥"},"=":{font:"main",group:"rel"},"<":{font:"main",group:"rel"},">":{font:"main",group:"rel"},":":{font:"main",group:"rel"},"\\approx":{font:"main",group:"rel",replace:"≈"},"\\cong":{font:"main",group:"rel",replace:"≅"},"\\ge":{font:"main",group:"rel",replace:"≥"},"\\geq":{font:"main",group:"rel",replace:"≥"},"\\gets":{font:"main",group:"rel",replace:"←"},"\\in":{font:"main",group:"rel",replace:"∈"},"\\notin":{font:"main",group:"rel",replace:"∉"},"\\subset":{font:"main",group:"rel",replace:"⊂"},"\\supset":{font:"main",group:"rel",replace:"⊃"},"\\subseteq":{font:"main",group:"rel",replace:"⊆"},"\\supseteq":{font:"main",group:"rel",replace:"⊇"},"\\nsubseteq":{font:"ams",group:"rel",replace:"⊈"},"\\nsupseteq":{font:"ams",group:"rel",replace:"⊉"},"\\models":{font:"main",group:"rel",replace:"⊨"},"\\leftarrow":{font:"main",group:"rel",replace:"←"},"\\le":{font:"main",group:"rel",replace:"≤"},"\\leq":{font:"main",group:"rel",replace:"≤"},"\\ne":{font:"main",group:"rel",replace:"≠"},"\\neq":{font:"main",group:"rel",replace:"≠"},"\\rightarrow":{font:"main",group:"rel",replace:"→"},"\\to":{font:"main",group:"rel",replace:"→"},"\\ngeq":{font:"ams",group:"rel",replace:"≱"},"\\nleq":{font:"ams",group:"rel",replace:"≰"},"\\!":{font:"main",group:"spacing"},"\\ ":{font:"main",group:"spacing",replace:" "},"~":{font:"main",group:"spacing",replace:" "},"\\,":{font:"main",group:"spacing"},"\\:":{font:"main",group:"spacing"},"\\;":{font:"main",group:"spacing"},"\\enspace":{font:"main",group:"spacing"},"\\qquad":{font:"main",group:"spacing"},"\\quad":{font:"main",group:"spacing"},"\\space":{font:"main",group:"spacing",replace:" "},",":{font:"main",group:"punct"},";":{font:"main",group:"punct"},"\\colon":{font:"main",group:"punct",replace:":"},"\\barwedge":{font:"ams",group:"bin",replace:"⊼"},"\\veebar":{font:"ams",group:"bin",replace:"⊻"},"\\odot":{font:"main",group:"bin",replace:"⊙"},"\\oplus":{font:"main",group:"bin",replace:"⊕"},"\\otimes":{font:"main",group:"bin",replace:"⊗"},"\\partial":{font:"main",group:"textord",replace:"∂"},"\\oslash":{font:"main",group:"bin",replace:"⊘"},"\\circledcirc":{font:"ams",group:"bin",replace:"⊚"},"\\boxdot":{font:"ams",group:"bin",replace:"⊡"},"\\bigtriangleup":{font:"main",group:"bin",replace:"△"},"\\bigtriangledown":{font:"main",group:"bin",replace:"▽"},"\\dagger":{font:"main",group:"bin",replace:"†"},"\\diamond":{font:"main",group:"bin",replace:"⋄"},"\\star":{font:"main",group:"bin",replace:"⋆"},"\\triangleleft":{font:"main",group:"bin",replace:"◃"},"\\triangleright":{font:"main",group:"bin",replace:"▹"},"\\{":{font:"main",group:"open",replace:"{"},"\\}":{font:"main",group:"close",replace:"}"},"\\lbrace":{font:"main",group:"open",replace:"{"},"\\rbrace":{font:"main",group:"close",replace:"}"},"\\lbrack":{font:"main",group:"open",replace:"["},"\\rbrack":{font:"main",group:"close",replace:"]"},"\\lfloor":{font:"main",group:"open",replace:"⌊"},"\\rfloor":{font:"main",group:"close",replace:"⌋"},"\\lceil":{font:"main",group:"open",replace:"⌈"},"\\rceil":{font:"main",group:"close",replace:"⌉"},"\\backslash":{font:"main",group:"textord",replace:"\\"},"|":{font:"main",group:"textord",replace:"∣"},"\\vert":{font:"main",group:"textord",replace:"∣"},"\\|":{font:"main",group:"textord",replace:"∥"},"\\Vert":{font:"main",group:"textord",replace:"∥"},"\\uparrow":{font:"main",group:"rel",replace:"↑"},"\\Uparrow":{font:"main",group:"rel",replace:"⇑"},"\\downarrow":{font:"main",group:"rel",replace:"↓"},"\\Downarrow":{font:"main",group:"rel",replace:"⇓"},"\\updownarrow":{font:"main",group:"rel",replace:"↕"},"\\Updownarrow":{font:"main",group:"rel",replace:"⇕"},"\\coprod":{font:"math",group:"op",replace:"∐"},"\\bigvee":{font:"math",group:"op",replace:"⋁"},"\\bigwedge":{font:"math",group:"op",replace:"⋀"},"\\biguplus":{font:"math",group:"op",replace:"⨄"},"\\bigcap":{font:"math",group:"op",replace:"⋂"},"\\bigcup":{font:"math",group:"op",replace:"⋃"},"\\int":{font:"math",group:"op",replace:"∫"},"\\intop":{font:"math",group:"op",replace:"∫"},"\\iint":{font:"math",group:"op",replace:"∬"},"\\iiint":{font:"math",group:"op",replace:"∭"},"\\prod":{font:"math",group:"op",replace:"∏"},"\\sum":{font:"math",group:"op",replace:"∑"},"\\bigotimes":{font:"math",group:"op",replace:"⨂"},"\\bigoplus":{font:"math",group:"op",replace:"⨁"},"\\bigodot":{font:"math",group:"op",replace:"⨀"},"\\oint":{font:"math",group:"op",replace:"∮"},"\\bigsqcup":{font:"math",group:"op",replace:"⨆"},"\\smallint":{font:"math",group:"op",replace:"∫"},"\\ldots":{font:"main",group:"inner",replace:"…"},"\\cdots":{font:"main",group:"inner",replace:"⋯"},"\\ddots":{font:"main",group:"inner",replace:"⋱"},"\\vdots":{font:"main",group:"textord",replace:"⋮"},"\\acute":{font:"main",group:"accent",replace:"´"},"\\grave":{font:"main",group:"accent",replace:"`"},"\\ddot":{font:"main",group:"accent",replace:"¨"},"\\tilde":{font:"main",group:"accent",replace:"~"},"\\bar":{font:"main",group:"accent",replace:"¯"},"\\breve":{font:"main",group:"accent",replace:"˘"},"\\check":{font:"main",group:"accent",replace:"ˇ"},"\\hat":{font:"main",group:"accent",replace:"^"},"\\vec":{font:"main",group:"accent",replace:"⃗"},"\\dot":{font:"main",group:"accent",replace:"˙"},"\\imath":{font:"main",group:"mathord",replace:"ı"},
"\\jmath":{font:"main",group:"mathord",replace:"ȷ"}},text:{"\\ ":{font:"main",group:"spacing",replace:" "}," ":{font:"main",group:"spacing",replace:" "},"~":{font:"main",group:"spacing",replace:" "}}},a='0123456789/@."',s=0;s<a.length;s++){var r=a.charAt(s);h.math[r]={font:"main",group:"textord"}}for(var l="0123456789`!@*()-=+[]'\";:?/.,",s=0;s<l.length;s++){var r=l.charAt(s);h.text[r]={font:"main",group:"textord"}}for(var n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",s=0;s<n.length;s++){var r=n.charAt(s);h.math[r]={font:"main",group:"mathord"},h.text[r]={font:"main",group:"textord"}}t.exports=h},{}],25:[function(e,t,i){function h(e){return d[e]}function a(e){return(""+e).replace(u,h)}function s(e){r(e,"")}var r,l=Array.prototype.indexOf,n=function(e,t){if(null==e)return-1;if(l&&e.indexOf===l)return e.indexOf(t);for(var i=0,h=e.length;h>i;i++)if(e[i]===t)return i;return-1},p=function(e,t){return-1!==n(e,t)},o=function(e,t){return void 0===e?t:e},c=/([A-Z])/g,g=function(e){return e.replace(c,"-$1").toLowerCase()},d={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},u=/[&><"']/g;if("undefined"!=typeof document){var k=document.createElement("span");r="textContent"in k?function(e,t){e.textContent=t}:function(e,t){e.innerText=t}}t.exports={contains:p,deflt:o,escape:a,hyphenate:g,indexOf:n,setTextContent:r,clearNode:s}},{}],26:[function(e,t,i){"use strict";function h(e){if(!e.__matchAtRelocatable){var t=e.source+"|()",i="g"+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"");e.__matchAtRelocatable=new RegExp(t,i)}return e.__matchAtRelocatable}function a(e,t,i){if(e.global||e.sticky)throw new Error("matchAt(...): Only non-global regexes are supported");var a=h(e);a.lastIndex=i;var s=a.exec(t);return null==s[s.length-1]?(s.length=s.length-1,s):null}t.exports=a},{}]},{},[2])(2)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
module.exports = function(options) {
  return function (deck) {
    var progressParent = document.createElement('div'),
      progressBar = document.createElement('div'),
      prop = options === 'vertical' ? 'height' : 'width';

    progressParent.className = 'bespoke-progress-parent';
    progressBar.className = 'bespoke-progress-bar';
    progressParent.appendChild(progressBar);
    deck.parent.appendChild(progressParent);

    deck.on('activate', function(e) {
      progressBar.style[prop] = (e.index * 100 / (deck.slides.length - 1)) + '%';
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
  scale('transform'),
  backdrop(),
  //search()
  qrcode(),
  tutorial(document.getElementsByClassName('tutorial')[0])
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
