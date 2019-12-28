<!-- {"layout": "title"} -->
# _Ray tracing_
## Parte 2: sombreamento

---
<!-- {"layout": "regular"} -->
# Objetivos

- Relembrar as duas grandes perguntas fundamentais para ~~a vida, o universo e tudo o mais~~ se criar um _ray tracer_
  - Entender **como retornar uma cor do polígono atingido** pelo raio
  - Revisitar o modelo de iluminação local de **phong**
  - Mais efeitos com **_ray tracing_ distribuído**

---
<!-- {"layout": "regular"} -->
# Perguntas fundamentais (1/2)

- Para implementar um _ray tracing_, precisamos responder a pelo menos 2
perguntas:
  1. Como determinar qual objeto (se) um raio intercepta?
  1. Dado que **um raio atingiu um objeto**, como devemos **calcular a cor retornada**?
- Na última aula, vimos/implementamos a verificação de interseção entre raio e
  esfera
  - Criamos um sistema entre a equação da reta (raio) e a equação
    implícita da esfera
    - Isso dá uma equação de 2º grau em relação ao parâmetro <span class="math">t</span> e suas raízes
      equivalem ao(s) ponto(s) <span class="math">t</span> da reta em que há interseção

---
<!-- {"layout": "regular"} -->
# Perguntas fundamentais (2/2)

- Hoje veremos como podemos calcular a cor que deve ser retornada por um raio quando
  ele atinge um objeto
- Vamos considerar que cada objeto tem uma cor com que ele foi pintado. Assim,
  vejamos **algumas opções**:
  1. Se raio atingiu objeto, retorne **sempre a mesma cor do objeto** (o que foi feito na parte 1)
  1. Se raio atingiu objeto, **considerar as fontes de luz** e a cor do objeto
    - Mas como devemos/podemos/queremos considerar as fontes de luz?

---
<!-- {"layout": "regular"} -->
# Como colorir um pixel?

- Assim como temos diferentes modelos de iluminação local, também podemos
  **ter formas diferentes para se colorir um pixel** usando um _ray tracer_
- ![](../../images/raytracer-shading-lights.png) <!-- {.push-right} -->
  Se o objetivo for realismo, podemos pegar emprestado **os modelos
  de iluminação e de sombreamento de Phong**
- Se o objetivo for não-realista, podemos, por exemplo, desenhar apenas as
  silhuetas dos objetos (<span class="math">\Delta = 0</span> na equação de interseção)

---
<!-- {"layout": "regular"} -->
# Objetivo não-realista (Zelda Wind Waker)

![](../../images/zelda-ww-realtime.png) <!-- {p:.centered} -->

- Renderização em **tempo real** (no jogo mesmo, de GameCube)

---
<!-- {"backdrop": "wind-waker-raytraced"} -->
# Renderização [via ray tracing](http://www.reddit.com/r/gaming/comments/idmkd/wind_waker_rendered_photoreal/)

---
<!-- {"backdrop": "wind-waker-raytraced-2"} -->

---
<!-- {"layout": "regular"} -->
# Objetivo realista

- Voltando à renderização com objetivo realista, podemos usar o modelo de
  **Phong** (iluminação e sombreamento) para colorir um pixel
  - O modelo de sombreamento de Phong é o da interpolação de normais, com o
    cálculo da função de **iluminação** (contribuição de cada fonte de luz) sendo
    chamado **para cada ponto do objeto**
  - Ele é mais caro do que o sombreamento de Gouraud, porém estamos
    interessados mais na **qualidade da imagem** do que na velocidade de
    geração da imagem

---
<!-- {"layout": "regular"} -->
# Modelo de Phong

![](../../images/phong-components.png) <!-- {p:.centered} -->

- A cor é dividida em três componentes: <!-- {p:.no-margin} --> <!-- {ul:.full-width} -->
  - Legenda: <!-- {li:.push-right.no-bullet.no-padding.no-margin} -->
    - <span class="color-portrait" style="background: ForestGreen"></span> Prop. do material 
    - <span class="color-portrait" style="background: RoyalBlue"></span> Prop. do pigmento

  **Ambiente** <!-- {dl:.no-margin} -->
    ~ <span class="math">\color{ForestGreen}{\rho_a}</span> e <span class="math">\color{RoyalBlue}{C}</span> (coef. e cor do objeto na sombra)

  **Difusa**
    ~ <span class="math">\color{ForestGreen}{\rho_d}</span> e <span class="math">\color{RoyalBlue}{C}</span> (coef. e cor do objeto iluminado)
    
  **Especular**
    ~ <span class="math">\color{ForestGreen}{\rho_s}</span>, <span class="math">\color{RoyalBlue}{C}</span> e <span class="math">\color{ForestGreen}{\alpha}</span> (coef., cor do objeto e expoente)

---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']"} -->
# Equação de iluminação de _Phong_

<div class="math" style="font-size: 95%">Cor(P)=\color{ForestGreen}\rho_a\color{gray}L_a\color{RoyalBlue}C\color{black} + \sum_{\color{Goldenrod}i\color{black}}Vis(P,\color{Goldenrod}i\color{black})\frac{\color{Goldenrod}L_i\color{black}}{\color{Goldenrod}a\color{black}+\color{Goldenrod}b\color{black}d_{\color{Goldenrod}i\color{black}}+\color{Goldenrod}c\color{black}d_{\color{Goldenrod}i\color{black}}^2}[\color{ForestGreen}\rho_d\color{black}\color{RoyalBlue}C\color{black}max(0,\vec{n}\cdot\vec{l}_{\color{Goldenrod}i\color{black}}) + \color{ForestGreen}\rho_s\color{black}max(0,\vec{r}_{\color{Goldenrod}i\color{black}}\cdot\vec{v})^{\color{ForestGreen}\alpha\color{black}}]</div>

- ![](../../images/phong-vectors.svg) <!-- {#phong-vectors-1.push-right} --> <!-- {ul:.full-width.no-bullet} -->
- <span class="math">\vec{n}</span> <!-- {dl:.dl-3.no-margin} -->
    ~ normal do objeto no ponto de interseção

  <span class="math">\vec{l}</span>
    ~  incidência da luz
  
  <span class="math">\vec{v}</span>
    ~ vetor de visualização

  <span class="math">\vec{r}</span>
    ~ vetor de reflexão da luz

  <span class="color-portrait" style="background: ForestGreen"></span>
    ~ propriedades do material
  
  <span class="color-portrait" style="background: RoyalBlue"></span>
    ~ propriedades do pigmento
  
  <span class="color-portrait" style="background: Goldenrod"></span>
    ~ propriedades da fonte de luz


---
<!-- { "layout": "regular", "state": "show-active-slide-and-previous", "slideClass": "one-third-half-width-slide" } -->

<span class="math">P</span>
  ~ Ponto tendo cor determinada

<span class="math">\vec{n}</span>
  ~ já encontrado <!-- {dl:.dl-6} -->

<span class="math">\vec{l}</span>
  ~ <span class="math">=\frac{(P_{luz_i}-P)}{\left|(P_{luz_i}-P)\right|}</span>

<span class="math">\vec{v}</span>
  ~ <span class="math">=\frac{(P_{cam}-P)}{\left|(P_{cam}-P)\right|}</span>

<span class="math">\vec{r}</span>
  ~ próximos slides

<span class="math">\color{Goldenrod}L_i</span>
  ~ Cor da luz

<span class="math">\color{gray}L_a</span>
  ~ Cor da luz ambiente global
  ~ _Obs: considerar branca_

<span class="math">d</span>
  ~ Distância da luz <span class="math">\color{Goldenrod}i</span> até o ponto <span class="math">P</span>

<span class="math">Vis(P,\color{Goldenrod}i\color{black})</span>
  ~ 0 ou 1 indicando se a luz está chegando em <span class="math">P</span> diretamente

<span class="math">max(a,b)</span>
  ~ Retorna o maior dentre 2 valores

---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']", "scripts": ["../../scripts/classes/phong-vectors.js"]} -->
# Calculando os vetores

<span class="math">P</span> <!-- {dl:.dl-6.full-width} --> 
  ~ ![](../../images/phong-vectors.svg) <!-- {#phong-vectors-2.phong-vectors.push-right} --> Vem do cálculo da interseção (`response.P`)

<span class="math">\vec{n}</span>
  ~ Idem (`response.normal`)

<span class="math">\vec{l}</span>
  ~ Calcular: <span class="math">\vec{l}=\frac{P_{luz}-P}{\left|P_{luz}-P\right|}</span>

<span class="math">\vec{v}</span>
  ~ Calcular: <span class="math">\vec{v}=\frac{P_{cam}-P}{\left|P_{cam}-P\right|}</span>

<span class="math">\vec{r}</span>
  ~ Calcular: próximo slide


Adaptação do modelo (_Blinn-Phong_): em vez de usar <span class="math">\vec{r}\cdot\vec{v}</span>, 
podemos usar o vetor _half-way_ e a normal (<span class="math">\vec{h}\cdot\vec{n}</span>) para
a componente especular, sendo que <span class="math">\vec{h}=\frac{\vec{l}+\vec{v}}{2}</span>
<!-- {p:.note.info} -->


---
<!-- {"layout": "2-column-content"} -->
# Reflexão perfeita

::: figure .picture-steps.clean.opacity-only padding: 0; align-self: center;
![](../../images/phong-vectors-reflection-1.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-2.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-3.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-4.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-5.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-6.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-7.svg) <!-- {.bullet.figure-step.full-width} -->
![](../../images/phong-vectors-reflection-8.svg) <!-- {.bullet.figure-step.full-width} -->
:::

<span class="math">\color{orchid}\vec{u}</span> <!-- {dl:.dl-3} -->
  ~ projeção de <span class="math">\vec{l}</span> em <span class="math">\vec{n}</span>
  ~ <span class="math">\color{orchid}\vec{u}\color{black}=(\hat{l}\cdot\hat{n})\hat{n}</span>

<span class="math">\color{yellowgreen}\vec{a}</span>
  ~ negação da rejeição da proj. de <span class="math">\vec{l}</span> em <span class="math">\vec{n}</span>
  ~ <span class="math">\color{yellowgreen}\vec{a}\color{black}=-(\vec{l}-\color{orchid}\vec{u}\color{black})</span>
  ~ <span class="math">\color{yellowgreen}\vec{a}\color{black}=\color{orchid}\vec{u}\color{black}-\vec{l}</span>
  ~ <span class="math">\color{yellowgreen}\vec{a}\color{black}=(\hat{l}\cdot\hat{n})\hat{n}-\vec{l}</span>

<span class="math">\vec{r}</span>
  ~ direção da reflexão perfeita
  ~ <span class="math">\vec{r}=\vec{l}+\color{yellowgreen}\vec{a}\color{black}+\color{yellowgreen}\vec{a}</span>
  ~ <span class="math">\vec{r}=\vec{l}+2[(\hat{l}\cdot\hat{n})\hat{n}-\vec{l}]</span>
  ~ <span class="math">\vec{r}=2(\hat{l}\cdot\hat{n})\hat{n}-\vec{l}</span>


---
<!-- {"layout": "regular"} -->
# _Ray tracer_ recursivo

Para o _ray tracer_ recursivo, a equação de Phong para materiais reflexivos ou transparentes também lança os raios de reflexão (<span class="math">\vec{r_r}</span>) e o de refração (<span class="math">\vec{r_t}</span>):
<div class="math" style="font-size: 95%">Cor(P)=\color{ForestGreen}\rho_a\color{gray}L_a\color{RoyalBlue}C\color{black} + \sum_{\color{Goldenrod}i\color{black}}Vis(P,\color{Goldenrod}i\color{black})\frac{\color{Goldenrod}L_i\color{black}}{\color{Goldenrod}a\color{black}+\color{Goldenrod}b\color{black}d_{\color{Goldenrod}i\color{black}}+\color{Goldenrod}c\color{black}d_{\color{Goldenrod}i\color{black}}^2}[\color{ForestGreen}\rho_d\color{black}\color{RoyalBlue}C\color{black}max(0,\vec{n}\cdot\vec{l}_{\color{Goldenrod}i\color{black}}) + \color{ForestGreen}\rho_s\color{black}max(0,\vec{r}_{\color{Goldenrod}i\color{black}}\cdot\vec{v})^{\color{ForestGreen}\alpha\color{black}}]\\+\color{ForestGreen}\rho_r\color{black}castRay(P,\vec{r}_r)+\color{ForestGreen}\rho_t\color{black}castRay(P,\vec{r}_t)</div>

**Atenção:**
  ~ a. o raio de reflexão não é da luz, mas do raio primário.
  ~ b. para o raio de refração, veja David Mount páginas 81 e 82. <!-- {dl:.note.info} -->
  ~ c. criar raios primários com um tempo de vida (eg, 10).

---
<!-- { "layout": "regular" } -->
# Imagens com objetos reflexivos/transparentes

- ![](../../images/cena-empilhadas.png) <!-- {ul:.card-list.polaroid} -->
- ![](../../images/cena-whitted.png)
- ![](../../images/cena-cornell-box.png)

---
<!-- { "layout": "2-column-content" } -->
# Problema: baixa amostragem

- A cena descreve objetos "infinitos", mas a imagem gerada não (eg, 800x600 valores)
- Representar coisas usando pouca informação pode acarretar em problemas de 
  **baixa amostragem** (_aliasing_):
  - ![](../../images/serrilhado.svg) <!-- {.push-right style="max-width: 200px;"} -->
    Serrilhado ➡️
  - ![](../../images/moire.png) <!-- {.push-right.clear style="max-width: 212px;"} -->
    Interferência ↘️

::: zoomable .inline display: inline-block; position: relative
![](../../images/cena-whitted-recursivo.png) <!-- {style="max-width: 100%; image-rendering: pixelated" draggable="false"} -->
:::

---
<!-- { "layout": "2-column-content" } -->
# Corrigindo serrilhados (↙️com _vs_ sem⬇️)

::: zoomable .inline display: inline-block;
![](../../images/cena-whitted-recursivo.png) <!-- {style="max-width: 100%; image-rendering: pixelated" draggable="false"} -->
:::

::: zoomable .inline.bullet display: inline-block;
![](../../images/cena-whitted-distribuido.png) <!-- {style="max-width: 100%; image-rendering: pixelated" draggable="false"} -->
:::

Mas como fazer?? <!-- {.bullet style="width: 100%; margin: 0; text-align: right"} -->

---
<!-- { "layout": "regular", "embedSVG": "img[src$='.svg']" } -->
# _Ray tracer_ **distribuído**

- Raio não possui volume (é uma semirreta). Ideias: <!-- {ul:.full-width} -->
  - _Cone tracing_ ([1984][cone])
  - _Beam tracing_ ([1984][beam])
  - Mais caros, complexos e introduzem outros problemas
- ![](../../images/raytracing-distribuido-pixel.svg) <!-- {.push-right} -->
  E se lançarmos mais de um raio por pixel (<span class="math">r/p</span>)?
  - _Ray tracing_ distribuído:
    1. Superamostragem
    1. Amostragem adaptável
    1. Estocástico (_jittering_)
    1. Estocástico uniforme

[cone]: https://dl.acm.org/citation.cfm?doid=964965.808589
[beam]: https://my.eng.utah.edu/~cs6958/papers/p119-heckbert.pdf

---
<!-- { "layout": "regular" } -->
# Comparação de _ray tracers_

- Simples <!-- {ul:.card-list} -->
  ::: zoomable .inline display: inline-block;
  ![](../../images/cena-whitted-simples.png) <!-- {style="max-width: 100%; image-rendering: pixelated" draggable="false"} -->
  :::
- Recursivo
  ::: zoomable .inline display: inline-block;
  ![](../../images/cena-whitted-recursivo.png) <!-- {style="max-width: 100%; image-rendering: pixelated" draggable="false"} -->
  :::
- Distribuído (estocástico 10r/p)
  ::: zoomable .inline display: inline-block;
  ![](../../images/cena-whitted-distribuido.png) <!-- {style="max-width: 100%; image-rendering: pixelated" draggable="false"} -->
  :::

---
<!-- { "layout": "regular" } -->
# Limitações do _ray tracer_

- Apesar de bem interessante, o _ray tracer_ ainda não é capaz de:
  1. ![](../../images/soft-shadows.gif) <!-- {ol:.card-list.polaroid.bulleted.center-aligned} -->
     **Sombras com penumbra**<br>Precisamos de uma "luz" com área
  1. ![](../../images/iluminacao-indireta.gif) 
     **Iluminação indireta**<br>_Ray tracer_ depende muito da componente ambiente
  1. ![](../../images/color-bleeding.png) 
    **Sangramento de cor**<br>Objetos não impregnam sua cor em outros
  1. ![](../../images/waterpool.gif) 
     **Cáustica**<br>Fenômeno não é retratado

---
<!-- { "layout": "regular" } -->
# _Path tracer_

- ![](../../images/path-tracing-rays.gif) <!-- {.push-right style="max-width: 332px;"} -->
  Inspirado no _ray tracer_, a ideia é: 
  1. Para cada pixel, verificar 1 caminho (aleatório) da luz
  1. Assim que terminar a imagem, lança +1 vez (outro caminho daluz) 
     e combina com a primeira imagem
  1. Vai lançando raios indefinidamente (rerrenderizando a imagem) até que o resultado seja satisfatório
- [Apresentação][apresentacao-path-tracer] <!-- {.push-right} -->
  Premissas:
  1. Luzes têm área
  1. Todo material reflete luz
  1. Todo objeto pode ser uma fonte de luz

[apresentacao-path-tracer]: https://docs.google.com/presentation/d/1aZSXNZwEPaFbBjiZbhGy4GC5gey3SoANouqnAUmLQhs/edit?usp=sharing

---
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT56peHi4tLsCdTnffjQ85HJTZDb4Ly_AiF2by6WIpfXOb2aTmMZuaBpRJ1vRuVH9IJ97hJrL7GQ6Qc/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


---
# Referências

- Aulas 18 e 19 do prof. David Mount (link na página do curso)
- Capítulo 10 do livro **Computer Graphics with OpenGL** de _Hearn and Baker_
