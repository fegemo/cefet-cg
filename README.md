<!--
  bespokeEvent: bullets.disable
-->

# Computação Gráfica

*Professor:* Flávio Coutinho

<img class="portrait" src="images/flavio-avatar.jpg">

---
# Aulas

- [Introdução à Computação Gráfica](classes/intro/) (25/02/2016)
- [OpenGL, Sistemas de Janelas](classes/opengl/) (01/03/2016)

<!--
- [OpenGL Hands-on - Parte 1](classes/opengl-handson/) (03/03/2016)
- [OpenGL Hands-on - Parte 2](classes/opengl-handson2/) (08/03/2016)
- [OpenGL Hands-on - Parte 3](classes/opengl-handson3/) (10/03/2016)
- [Cê](classes/c) (15/03/2016)
- [_Feedback_ do TP1 - turma anterior](classes/breakout-feedback) (15/03/2016)
- [Geometria](classes/geometry) (17/03/2016)


# Aulas (página 2)

- [Transformações Geométricas](classes/transforms) (22/03/2016)
- [Orientação e Mudança de Coordenadas](classes/baseorientation) (29/03/2016)
- [O Pipeline Gráfico](classes/pipeline) (05/04/2016)
- [Projeção](classes/projection) (07/04/2016)
- [Modelagem Hierárquica](classes/hierarchical) (12/04/2016)
- [Iluminação e Sombreamento](classes/lighting) (14 e 19/04/2016)
- [Modelagem de Objetos](classes/modeling) (26/04/2016)


# Aulas (página 3)

- [Texturas](classes/textures) (28/04/2016)
- [Efeitos Visuais](classes/visual-effects) (03/05/2016)
- [Animações](http://fegemo.github.io/cefet-games/classes/animation) (24/05/2016)
- [Ray tracing 1](classes/raytracing) (31/05/2016)
- [Ray tracing 2](classes/raytracing2) (07/06/2016)
- [Pipeline Programável](classes/programmable-pipeline) (14/06/2016)
-->

---
# Objetivos

1. Conhecer os **fundamentos teóricos e práticos** da computação gráfica.
1. Conhecer as **técnicas de modelagem, representação e visualização** de
  objetos Bi e Tridimensionais.
1. Conhecer técnicas de **geração de imagens fotorrealísticas**
1. Conhecer e utilizar a biblioteca gráfica **OpenGL**

---
## Trabalhos Anteriores

<iframe width="800" height="450" src="https://www.youtube.com/embed/videoseries?list=PLNaBD3CnN0-_bnRPNztX7l6YUS38V2c6V" frameborder="0" allowfullscreen></iframe>

---
## Interdisciplinaridades

- Pré-requisitos
  - Cálculo I
  - Geometria Analítica e Álgebra Vetorial
  - PC I
- Co-requisito
  - Cálculo II

---
# Bibliografia Básica

---
## _Computer Graphics with OpenGL_

<figure class="book">
  <ul class="hardcover_front" class="no-bullet">
    <li class="no-bullet"><img src="images/book-cg-with-opengl.jpg" width="100%" height="100%"></li>
    <li class="no-bullet"></li>
  </ul>
  <ul class="page no-bullet">
    <li class="no-bullet"></li>
    <li class="no-bullet"><a class="book-btn" href="http://www.pearsonhighered.com/educator/product/Computer-Graphics-with-Open-GL/9780136053583.page" target="blank">Sobre</a></li>
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
  </ul>
  <ul class="hardcover_back no-bullet">
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
  </ul>
  <ul class="book_spine no-bullet">
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
  </ul>
</figure>  

- **Título**	Computer Graphics with OpenGL, Fourth Edition
- **Autores**	Donald D. Hearn, M. Pauline Baker, Warren Carithers
- **Editora**	Prentice Hall, 2010

---
## _Real-Time Rendering_

<figure class="book">
  <ul class="hardcover_front" class="no-bullet">
    <li class="no-bullet"><img src="images/book-rtr3.jpg" width="100%" height="100%"></li>
    <li class="no-bullet"></li>
  </ul>
  <ul class="page no-bullet">
    <li class="no-bullet"></li>
    <li class="no-bullet"><a class="book-btn" href="http://www.realtimerendering.com/book.html" target="blank">Sobre</a></li>
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
  </ul>
  <ul class="hardcover_back no-bullet">
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
  </ul>
  <ul class="book_spine no-bullet">
    <li class="no-bullet"></li>
    <li class="no-bullet"></li>
  </ul>
</figure>

- **Título**	Real-Time Rendering, Third Edition
- **Autores**	Tomas Akenine-Möller, Eric Haines, Naty Hoffman
- **Editora**	Taylor &amp; Francis, 2008

---
# Bibliografia Complementar

---
## Notas de aula do Prof. David Mount

<div class="book-cover-container">
  <img class="book-cover" src="images/book-lecture-notes.png">
  <div class="book-left book-light"></div>
</div>

- Material complementar
- [Download](attachments/DavidMountsLectureNotes.pdf)

---
# Atividades Avaliativas

---
## Prova e Listas (40 pontos)

- Listas de exercício (10 pontos)
- Questionários marotos (5 pontos)
- Lista de revisão da prova (10 pontos)
- Prova (15 pontos)

---
## Trabalhos (60 pontos)

- TP0: Ambiente de Desenvolvimento[][tp0] (1 ponto, +1 extra)
- [TP1: Tá Chovendo {Paradas}][tp1] (20 pontos)
- [TP2: O Garra][tp2], grupos <span class="math">\leq</span> 3 (20 pontos)
- TP3: Ray-tracer, duplas (20 pontos, em duas entregas)
  - Primeira parte: no laboratório
  - Segunda parte: no laboratório

[tp0]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp0/README.md
[tp1]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp1-tprain/README.md
[tp2]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp2-theclaw/README.md
[tp3]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp3
