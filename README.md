<!--
  bespokeEvent: bullets.disable
-->

# Computação Gráfica

*Professor:* Flávio Coutinho

<img class="portrait" src="images/flavio-avatar.jpg">

---
## Trabalhos (61 pontos)

- [TP0: Ambiente de Desenvolvimento][tp0] (1 ponto, +1 extra)
- TP1: ??, grupos <span class="math">\leq</span> 2 (20 pontos)
- TP2: ??, grupos <span class="math">\leq</span> 2 (20 pontos)
- TP3: Ray-tracer, duplas (20 pontos, em duas entregas)
  - Primeira parte - colisão: no laboratório
  - Segunda parte - iluminação: no laboratório

[tp0]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp0/README.md
[tp1]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp1-gorillas/README.md
[tp2]: https://github.com/fegemo/cefet-cg/tree/master/assignments/tp2-dandd/README.md
[tp3]: https://github.com/fegemo/cefet-cg/blob/master/assignments/tp3/README.md#trabalho-prático-3---ray-tracer
[tp3-collision]: https://github.com/fegemo/cefet-cg/blob/master/assignments/tp3/collision/README.md#trabalho-prático-3---ray-tracer

---
# Aulas

- [Introdução à Computação Gráfica](classes/intro/)
- [OpenGL, Sistemas de Janelas](classes/opengl/)

<!--
- [OpenGL Hands-on - Parte 1](classes/opengl-handson/) (11/08/2016)
- [OpenGL Hands-on - Parte 2](classes/opengl-handson2/) (16/08/2016)
- [OpenGL Hands-on - Parte 3](classes/opengl-handson3/) (18/08/2016)
- [Cê](classes/c) (23/08/2016)
- [_Feedback_ do TP1 - turma anterior](classes/breakout-feedback) (23/08/2016)
- [Geometria](classes/geometry) (25/08/2016)

# Aulas (página 2)

- [Transformações Geométricas](classes/transforms) (06/09/2016)
- [Orientação e Mudança de Coordenadas](classes/baseorientation) (08/09/2016)
- [O Pipeline Gráfico](classes/pipeline) (13/09/2016)
- [Projeção](classes/projection) (15/09/2016)
- [Modelagem Hierárquica](classes/hierarchical) (20/09/2016)
- [Iluminação e Sombreamento](classes/lighting) (22 e 27/09/2016)
- [Modelagem de Objetos](classes/modeling) (29/09/2016)
- [Texturas](classes/textures) (04/10/2016)

# Aulas (página 3)

- [Efeitos Visuais](classes/visual-effects) (06/10/2016)
- [Ray tracing 1](classes/raytracing) (01/11/2016)
- [Ray tracing 2](classes/raytracing2) (08/11/2016)
- [Animações](http://fegemo.github.io/cefet-games/classes/animation) (17/11/2016)
- [Pipeline Programável](classes/programmable-pipeline) (22/11/2016)

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

<iframe width="800" height="450" src="https://www.youtube.com/playlist?list=PLNaBD3CnN0--7AFIYx9O1lGYJLDh2dVCt" frameborder="0" allowfullscreen></iframe>

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
- Lista de revisão da prova (15 pontos)
- Prova (15 pontos)
