<!-- {"layout": "title"} -->
# Iluminação e Sombreamento
## iluminando e colorindo objetos dinamicamente

---
<!-- {"layout": "centered"} -->
# Objetivos

1. Gerar imagens com maior realismo
1. Conhecer formas de modelar a iluminação de objetos
1. Entender os custos computacionais dos diferentes modelos


---
<!-- {"layout": "centered"} -->
# Roteiro

1. Iluminação em Computação Gráfica
1. [Modelos de iluminação](#modelos-de-iluminacao)
   - Modelo local de Phong
1. [Iluminação em OpenGL](#iluminacao-em-opengl)
   - Atenuação
1. [Sombreamento](#sombreamento)
1. [_Fog_ (neblina)](#fog)

---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']", "embeddedStyles": ".geometria-sombreamento .etapa1, .geometria-sombreamento .etapa3, .geometria-sombreamento .etapa4, .geometria-sombreamento .etapa5 {fill: #ddd !important; stroke: #333 !important;} .rasterizacao-sombreamento .etapa1, .rasterizacao-sombreamento .etapa2, .rasterizacao-sombreamento .etapa4 {fill: #ddd !important; stroke: #333 !important;}"} -->
# De volta ao _pipeline_ gráfico

![](../../images/pipeline-grafico-fases.svg) <!-- {p:.centered} -->

![](../../images/pipeline-geometria-fases.svg) <!-- {p:.centered} --> <!-- {.geometria-sombreamento} -->

![](../../images/pipeline-rasterizacao-fases.svg) <!-- {p:.centered} --> <!-- {.rasterizacao-sombreamento} -->

---
<!-- {"layout": "regular"} -->
## Cena sem _vs_ com iluminação

::: figure .picture-steps.clean.opacity-only margin: 0; align-self: center;
![](../../images/cena-sem-luz.jpg) <!-- {.bullet.bullet-no-anim.figure-step.no-margin} -->
![](../../images/cena-com-luz.jpg) <!-- {.bullet.bullet-no-anim.figure-step.no-margin} --> <!-- {p:.no-margin} -->
:::

---
<!-- {"layout": "regular"} -->
## Iluminação

- ![](../../iluminacao.png) <!-- {.push-right} -->
  Estudo de como a luz interage com objetos de uma cena
    - Como a luz é **emitida**
    - Como ela é **transmitida**
    - Ela é **absorvida, refratada, refletida**?
- Em Computação Gráfica, a iluminação trata do **cálculo da contribuição de cada fonte de luz
  para cada vértice** dos objetos de uma cena e a posterior **determinação da cor (ou sombreamento)
  dos _pixels_**  

---
<!-- {"layout": "regular"} -->
## Fontes de luz

- Alguns objetos podem emanar luz - são chamados **fontes de luz**
- A luz das fontes afeta a superfície dos objetos de uma cena de acordo com as
  características da superfície do objeto - chamamos essas características de
  **material**
- Há vários tipos de fonte de luz:
  1. ![](../../images/fontes-de-luz.svg) <!-- {.push-right style="max-height: 180px"} -->
     Onidirecional (ou pontual)
  1. Direcional
  1. Holofote (_spotlights_)

---
<!-- {"layout": "regular"} -->
## Materiais

- São um modelo de como objetos reagem às fontes de luz
  - Pode ser entendido como o material com que os objetos são feitos:
    - Vidro
    - Madeira
    - Porcelana
- Definem parâmetros de interação com a luz
  - Reflexão
  - Transparência
  - Coeficientes: o quão polido, o quão áspero etc.

---
<!-- {"layout": "section-header", "slideClass": "modelos-de-iluminacao", "slideHash": "modelos-de-iluminacao"} -->
# Modelos de Iluminação

---
<!-- {"layout": "regular"} -->
# Modelos de Iluminação

- Modelo **físico**
  - _real-life_, programado por Deus em C++
- Modelos **locais**
  - Apenas caminhos do tipo fonte luminosa → superfície → olho são tratados
  - A intensidade da luz em um vértice é dada pelas
    fontes de luz da cena
  - Simples
    - Ex.: Modelo de Phong no OpenGL
- Modelos **globais**
  - Muitos caminhos da transmissão da luz são considerados
  - A intensidade é dada pelas fontes de luz e pela interação dos fótons com
    todos os objetos da cena
  - Complexos (e.g., _ray tracing_, _path tracing_, _radiosidade_)

---
<!-- {"layout": "regular"} -->
## Modelo físico

- ![](../../images/luz-modelo-fisico.png) <!-- {.push-right} -->
  A luz é modelada como **radiação eletromagnética**
  - Este modelo está descrito no capítulo de ótica do seu livro de física mais próximo =)
- Leva em conta todas as interações (todos os caminhos da luz), **infinitamente**
- **Intratável** computacionalmente
  - Ou seja, dá pra criar um programa, mas ele não termina em tempo hábil

---
<!-- {"layout": "regular"} -->
## Modelo local

- ![](../../images/luz-modelo-local.png) <!-- {.push-right} -->
  Considera-se **apenas a porção da luz que vai da fonte de luz para o objeto**
  (vértice) iluminado
  - Um objeto não "tampa" o outro (i.e., sem sombras)
- A luz é discretizada em componentes RGB

Em um modelo local (CG de tempo real), **objetos não projetam sombras**! <!-- {p:.note.info} -->

*[RGB]: Red, Green e Blue*

---
<!-- {"layout": "regular"} -->
## Modelo global

- ![](../../images/luz-modelo-global.png) <!-- {.push-right} -->
  Considera-se **vários (não todos) caminhos percorridos pela luz**, incluindo a relação
  entre os objetos da cena
  - Um objeto pode impedir que outro receba a luz (i.e., há sombras)
  - Objetos podem ser semi-transparentes e a luz pode refletir ou refratar -
    basta percorrer o caminho inverso da luz


---
<!-- {"layout": "regular"} -->
# Modelo de iluminação (local) de Phong ([1975](http://www.cs.northwestern.edu/~ago820/cs395/Papers/Phong_1975.pdf))

- Uma fonte de luz é descrita por: <!-- {ul^0:.no-margin} -->
  - Uma cor (da luz) em componentes RGB
- Cada objeto da cena é feito por um **material** que:
  - Tem características de objetos foscos (ásperos) (**difusa**)
  - Tem características de objetos polidos e reflete a cor da luz (**especular**)
  - É indiretamente iluminado pelas "infinitas interações" da
    luz na cena (**ambiente**)
    - Pode emitir [0, 100%] luz de uma cor (**emissiva** - "extra Phong")
  - A cor final do vértice pode ser dada pelo **somatório dessas 4 componentes**

![](../../images/phong-components-and-emissive.png) <!-- {style="max-height: 168px"} -->  <!-- {p:.center-aligned.no-margin.full-width} -->
*[RGB]: Red, Green e Blue*

---
<!-- {"layout": "regular"} -->
## Componentes do modelo de Phong (cont.)

![](../../images/reflexoes.svg) <!-- {style="max-height: 200px"} --> <!-- {p:.centered } -->

- **Difusa**: contribuição correspondente ao  espalhamento da reflexão
  lambertiana (independe da posição do observador)
- **Especular**: contribuição referente ao comportamento de superfícies polidas
- **Ambiente**: contribuição que não depende da geometria
- **Emissão** (extra Phong): contribuição que não depende de fontes de
  luz (fluorescência)


---
<!-- {"layout": "regular"} -->
## **Componente ambiente** de um objeto

- ![](../../images/phong-components-only-ambient.png) <!-- {.push-right} -->
  Ainda que um objeto não esteja diretamente iluminado, ele deve
  aparecer na cena
  - Devido à iluminação indireta, refletida pelos objetos da cena
- Não possui características espaciais nem direcionais
  - A quantidade de luz ambiente é constante em todo o ambiente
  - A quantidade de luz ambiente refletida por um objeto independe da sua forma e é dada por:
  <div class="math centered">C_{amb}(V) = \rho_aL_a</div>
  ...onde <span class="math">\rho_a</span> é a cor ambiente do material <span class="math">(r,g,b)</span><br>
  e <span class="math">L_a</span> é a cor da luz ambiente global.

---
<!-- {"layout": "regular"} -->
## **Componente difusa** de um objeto

- ![](../../images/phong-components-only-diffuse.png) <!-- {.push-right} -->
  Objetos foscos refletem a luz em todas as direções uniformemente e
  possuem uma cor
- Segundo a Lei de Lambert (fluxo de energia):
  - A **luminosidade** da superfície **não depende da posição do observador**,
    apenas do **ângulo entre a normal e a direção da luz**
    ::: figure .centered align-items: flex-end;
    ![](../../images/phong-diffuse-reflection.svg) <!-- {p:.full-width style="display: flex; justify-content: space-between; align-items: flex-end"} -->
    ![](../../images/phong-diffuse-reflection-larger-angle.svg)
    ![](../../images/phong-diffuse-reflection-smaller-angle.svg)
    :::
---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']"} -->
## Calculando a contribuição **difusa**

- ![](../../images/phong-vectors-diffuse.svg) <!-- {#phong-vectors-2.push-right style="max-width: 350px"} --> <!-- {ul:.full-width} -->
  A componente difusa de um vértice <span class="math">P</span> é dada por:

  <div class="math">C_{dif}(P) = \rho_d\sum_iL_i(\vec{n} \cdot \vec{l}_i)</div>
  ...onde  <span class="math">\rho_d</span> é a cor difusa do material <span class="math">(r,g,b)</span>,<br>
  o somatório itera somando a contribuição de cada fonte de luz na cena,<br>
  <span class="math">L_i</span> é a cor da fonte de luz atual,<br>
  <span class="math">\vec{n}</span> é o vetor normal do objeto em <span class="math">P</span>,<br>
  <span class="math">\vec{l}_i</span> é a incidência da luz (apontando para ela).

---
<!-- {"layout": "regular"} -->
## **Iluminação especular** em um objeto

- ![](../../images/phong-components-only-specular.png) <!-- {.push-right} -->
  Simula a reflexão à maneira de um espelho (objetos altamente polidos)
- Depende da disposição entre observador, objeto e fonte de luz
- Em um espelho perfeito, a reflexão se dá em ângulos iguais
  - Observador só enxergaria a reflexão de uma fonte pontual se estivesse na direção certa

![](../../images/phong-specular-reflection.svg) <!-- {p:.full-width.centered style=""} --> <!-- {.centered} -->

---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']"} -->
## Calculando a contribuição **especular**

- ![](../../images/phong-vectors.svg) <!-- {#phong-vectors-2.push-right style="max-width: 350px"} --> <!-- {ul:.full-width} -->
  A intensidade da contribuição especular em um vértice <span class="math">P</span> é dada por:

  <div class="math">C_{esp}(P) = \rho_s\sum_iL_i(\vec{r}_i \cdot \vec{v})^{\alpha}</div>
  ...onde  <span class="math">\rho_s</span> é a cor especular do material <span class="math">(r,g,b)</span>,<br>
  o somatório itera somando a contribuição de cada luz,<br>
  <span class="math">L_i</span> é a cor da fonte de luz atual,<br>
  <span class="math">\vec{r}_i</span> é a direção da reflexão perfeita da luz,<br>
  <span class="math">\vec{v}</span> é o vetor que aponta de <span class="math">P</span> até a câmera (normalizado),<br>
  <span class="math">\alpha</span> é o expoente de especularidade do material.

---
<!-- {"layout": "regular"} -->
## Expoente de especularidade

- Indica quão polida é a superfície <!-- {ul:.no-margin} -->
  - Espelho ideal tem especularidade infinita
  - Na prática, usam-se valores entre 5 e 100

::: figure .centered margin-top: 0;
![](../../images/specular-coefficient.png) <!-- {p:.centered} -->
<div style="display: flex; justify-content: space-between; width: 100%">
  <span class="math">\alpha=5</span>
  <span class="math">\alpha=50</span>
  <span class="math">\alpha=100</span>
</div>
:::
---
<!-- {"layout": "centered-horizontal"} -->
## Demonstração do modelo de Phong

![](../../images/exemplo-luz-e-materiais.png) <!-- {p:.centered} --> <!-- {style="max-height: 300px;"} -->

- Exemplo: [luz-e-material-marte](codeblocks:luz-e-material/CodeBlocks/luz-e-material-marte.cbp)

---
<!-- {"layout": "section-header", "slideClass": "iluminacao-em-opengl", "slideHash": "iluminacao-em-opengl"} -->
# Iluminação em OpenGL
## com **pipeline fixo** (OpenGL 1, 2)

1. Algumas funções usadas:
   - `glEnable`
   - `glLight`
   - `glMaterial`
   - `glNormal`
   - `glFog`

---
<!-- {"layout": "regular"} -->
## Iluminação em OpenGL

- Implementa o modelo de iluminação de _Phong_ + componente emissiva
- O modelo é computado **<u>apenas para os vértices</u>** dos polígonos
  - A cor dos pixels no interior dos polígonos é obtida por interpolação linear
- É possível configurar alguns efeitos atmosféricos:

Atenuação da luz
  ~ perde força quanto mais distante

Neblina
  ~ uma névoa a partir de uma distância da câmera

---
<!-- {"layout": "regular"} -->
## Iluminação em OpenGL

- Uma **fonte de luz** é descrita por: <!-- {ul:.multi-column-list-2} -->
  - `glLight` <!-- {code:.push-right.note.info} -->
    Cor ambiente
  - Cor difusa
  - Cor especular
  - Posição
- Um **material** <!-- {.alternate-color} --> é descrito por:
  - `glMaterial` <!-- {code:.push-right.note.info} -->
    Cor ambiente
  - Cor difusa
  - Cor especular e expoente de espec.
  - Cor emissiva

::: figure .layout-split-2.no-margin
![](../../images/luz-e-material-ladrilhos.gif) <!-- {style="max-height: 200px"} -->

- Neste exemplo [luz-e-material-ladrilhos](codeblocks:luz-e-material-ladrilhos/CodeBlocks/luz-e-material-ladrilhos.cbp):
  - 01 fonte de luz
  - 02 materiais (versão sem textura, versão com):
    - Plástico azul _(liso, alta especularidade)_
    - Madeira _(áspero)_
:::

---
<!-- {"layout": "regular"} -->
## **3 passos** para iluminar

- O sistema de iluminação do OpenGL vem, por padrão, **desativado**. Para ativá-lo,
  devemos tomar as seguintes medidas:
  1. Ativar/desativar o sistema quando apropriado:
     ```c
     glEnable(GL_LIGHTING);
     //...
     glDisable(GL_LIGHTING);
     ```
  1. Ativar e configurar uma ou mais fontes de luz (veremos como)
  1. Configurar materiais antes de desenhar os objetos  (idem)


---
<!-- {"layout": "regular"} -->
## Passo 2: ativando **fontes de luz**

- Para ativar uma fonte:
  ```c
  glEnable(source);
  ```
  - `source` é uma constante cujo nome é `GL_LIGHT`**`N`**,
    começando com `GL_LIGHT0`
  - Quantas? Pelo menos 8, mas para ter certeza:
    ```
    glGetIntegerv(GL_MAX_LIGHTS, &n);
    ```

---
<!-- {"layout": "regular"} -->
## Passo 2: configurando **fontes de luz**

- Para configurar as propriedades de cada fonte:
  ```c
  glLightf (source, property, value);   // se value é um float
  glLightfv(source, property, value);   // se value for um *vetor* de floats
  ```
  - `property` é uma constante que pode ter os valores:
    - Coeficientes de cor usados no modelo de iluminação:
      **`GL_AMBIENT`**, **`GL_DIFFUSE`**, **`GL_SPECULAR`**
    - Geometria da fonte
     **`GL_POSITION`**, `GL_SPOT_DIRECTION`, `GL_SPOT_CUTOFF`,  `GL_SPOT_EXPONENT` (3 últimas são para holofotes)
    - Coeficientes de atenuação
      `GL_CONSTANT_ATTENUATION`, `GL_LINEAR_ATTENUATION`, `GL_QUADRATIC_ATTENUATION`

---
<!-- {"layout": "regular"} -->
## Passo 3: configurando o **material**

- Especificados por:
  ```c
  glMaterialf (face, property, value);    // se value for um float
  glMaterialfv(face, property, value);    // se value for um *vetor* de floats
  ```
  - `face` designa quais lados da superfície se quer configurar:
    ```c
    GL_FRONT, GL_BACK, GL_FRONT_AND_BACK;
    ```
  - `property` é qual propriedade do material queremos definir:
    ```c
    GL_AMBIENT, GL_DIFFUSE, GL_SPECULAR, GL_EMISSION              // <- cores
    GL_SHININESS                             // <- expoente de especularidade
    ```

---
<!-- {"layout": "regular"} -->
## Propriedades geométricas do objeto

- Além das propriedades da luz e do material, a **geometria do objeto** também
  é importante:
  - A **posição dos vértices** com relação ao olho e à fonte luminosa
    contribui no cálculo dos efeitos atmosféricos
    - _e.g._, atenuação da energia da luz
  - A **_normal_ dos polígonos** também é fundamental:
    - Não é calculada automaticamente
    - Precisa ser especificada com `glNormal3f(...)`
    - Mas como calculamos o vetor normal de cada face? <!-- {ul:.bullet} -->

Ao usar sólidos GLU/GLUT, as bibliotecas já estão chamando `glNormal()` internamente. Mas se você for definir vértices (_ie._, `glVertex()`), é necessário chamar `glNormal()`. <!-- {p:.note.info.no-margin.bullet} -->

---
<!-- {"layout": "regular"} -->
## Computando o vetor normal

- ![](../../images/tri-normal.svg) <!-- {.push-right} -->
  **Triângulo**: dados três vértices, podemos:
  <div class="math">\vec{n} = normalizar((A-B)\times(C-A))</div>
- Polígono planar
  - Uma opção é usar a fórmula do triângulo para quaisquer 3 vértices
  - Outra opção é determinar a equação do plano:
    - <span class="math">ax + by + cz + d = 0</span>
    - Normal tem coordenadas <span class="math">(a, b, c)</span>

---
<!-- {"layout": "regular"} -->
## Vetor normal de superfícies paramétricas

- <img src="../../images/normal-parametricas.png" style="float:right; margin-left: 20px;">
  Normal é dada pelo produto vetorial dos gradientes em relação aos
  parâmetros <span class="math">u</span> e <span class="math">v</span>

  ![](../../images/normal-parametricas-eq.png)

---
<!-- {"layout": "regular"} -->
## Iluminação **ambiente**

- Dada pelas cores `GL_AMBIENT` tanto das fontes luminosas quanto
  dos materiais
- Além das fontes luminosas, o OpenGL possui uma **luz ambiente
  <u>global</u>**, que é usada para iluminar uniformemente todos os
  objetos da cena
  ```c
  glLightMaterialfv (GL_LIGHT_MODEL_AMBIENT, color);
  ```
- Contribuição da luz ambiente global para um vértice é dada por:
  <span class="math">C_{amb_{global}}=\rho_aL_{a_{global}}</span>, onde:
  - <span class="math">\rho_a</span> é a cor ambiente do material,
  - <span class="math">L_{a_{global}}</span> é a cor da luz ambiente global.

---
<!-- {"layout": "regular"} -->
## Fontes <u>posicionais</u> _vs_ <u>direcionais</u>

- É possível **configurar uma fonte de luz** para que ela seja <u>direcional</u>
  em vez de <u>posicional</u>
  - Ao definir a posição da fonte via:
    ```c
    glLightfv(GL_LIGHT0, GL_POSITION, position);
    ```
    se `position` for um vetor cujo 4º elemento é igual a:
      - 1, então a luz é posicional
      - 0, então a luz é direcional
- Para fontes de luz posicionais, é possível definir um fator de
  atenuação que leva em conta a distância <span class="math">d</span> entre
  a fonte de luz e o objeto sendo iluminado

---
<!-- {"layout": "regular"} -->
## **Atenuação** <sub>(dissipação da luz)</sub>

- A atenuação de uma fonte de luz é calculada como:
  <div class="math">aten = \frac{1}{a+bd+cd^2}, \text{onde d é a distância da luz até o ponto}</div>
- Os coeficientes são definidos pela função `glLight()`, usando os parâmetros
  `GL_CONSTANT_ATTENUATION`, `GL_LINEAR_ATTENUATION` e `GL_QUADRATIC_ATTENUATION`
  - Exemplo:
    ```
    glLightf(GL_LIGHT0, GL_LINEAR_ATTENUATION, 1.0);
    ```
- Por padrão, os valores das contantes são:
  - <span class="math">a=1, b=0, c=0</span>.

---
<!-- {"layout": "regular"} -->
## Cor resultante de um vértice: <span class="math">Cor\(P\)</span>

- A atenuação só é aplicada sobre as componentes difusa
  (<span class="math">C_{dif}</span>) e especular (<span class="math">C_{esp}</span>)
  - Não faz sentido para ambiente (<span class="math">C_{amb}</span>), nem
    emissiva (<span class="math">C_{emi}</span>)
- A fórmula que calcula a cor de um vértice devida a uma **fonte luminosa
  <span class="math">i</span>** é dada por:
  <div class="math">Cor_i(P)=C_{amb_i} + aten(C_{dif_i} + C_{esp_i})</div>
- Portanto, no total, a cor é dada pela contribuição da iluminação ambiente (parcela não associada com fontes de luz)
  somada à luz emitida e às contribuições de todas fontes luminosas:
    <div class="math">Cor(P)=C_{amb_{global}} + C_{emi} + \sum_{i=0}^{fontes}{(C_{amb_i} + aten(C_{dif_i} + C_{esp_i}))}</div>

---
<!-- {"layout": "regular"} -->
# Recapitulando iluminação

- Vimos alguns modelos para simularmos um sistema de iluminação local
  nas nossas cenas de forma a torná-las mais realísticas
- O modelo de iluminação **calcula a cor <u>de cada vértice</u>** da
  nossa geometria, dadas fontes de luz e o material dos objetos
- Contudo, ainda não sabemos a **cor <u>de cada pixel</u>**, que é o
  que precisamos para gerar imagens

---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']", "embeddedStyles": ".geometria-sombreamento .etapa1, .geometria-sombreamento .etapa3, .geometria-sombreamento .etapa4, .geometria-sombreamento .etapa5 {fill: #ddd !important; stroke: #333 !important;} .rasterizacao-sombreamento .etapa1, .rasterizacao-sombreamento .etapa2, .rasterizacao-sombreamento .etapa4 {fill: #ddd !important; stroke: #333 !important;}"} -->
# De volta ao _pipeline_ gráfico

![](../../images/pipeline-grafico-fases.svg) <!-- {p:.centered} -->

![](../../images/pipeline-geometria-fases.svg) <!-- {p:.centered} --> <!-- {.geometria-sombreamento} -->

![](../../images/pipeline-rasterizacao-fases.svg) <!-- {p:.centered} --> <!-- {.rasterizacao-sombreamento} -->

---
<!-- {"layout": "regular", "embedSVG": "img[src$='.svg']"} -->
## Fase do **Rasterizador**

![](../../images/pipeline-rasterizacao-fases.svg) <!-- {p:.centered} --> <!-- {.rasterizacao-sombreamento} -->

- <u>Sombreamento de Pixels</u>
  - Para cada fragmento (pixel) de cada objeto (triângulo), devemos obter sua cor
- Já temos a cor de **cada vértice**, mas precisamos determinar a cor de cada
  fragmento agora
  - Para isso, precisamos de uma equação que, dadas as cores dos vértices
    de um objeto, possamos **determinar a cor para cada fragmento**

---
<!-- {"layout": "section-header", "slideClass": "sombreamento", "slideHash": "sombreamento"} -->
# Sombreamento

- Formas de colorir a parte interna dos objetos:
  1. Mesma cor para todos os fragmentos (**_flat_**)
  1. Interpolar as cores dos vértices (**Gouraud**)
  1. Calcular a equação de iluminação inteira para cada fragmento  (**Phong**)

---
<!-- {"layout": "regular"} -->
## Tipos de Sombreamento

- Há três tipos principais de sombreadores:
  
  Constante (_flat_)

  ~ ```c
    glShadeModel(GL_FLAT);
    ```
  
  Gouraud
  ~ ```c
    glShadeModel(GL_SMOOTH);    // é o valor padrão
    ```
  
  Phong
  ~ ```c
    glShadeModel(GL_PHONG);    // não existe no pipeline fixo
    ```

---
<!-- {"layout": "regular"} -->
# _Flat shading_ (sombreamento constante)

![](../../images/shading-flat-exemplo.png) <!-- {p:.centered style="margin-top: 0; margin-bottom: 0"} -->

- **Todos os fragmentos** da primitiva (_eg_, ponto, linha, triângulo) têm **a mesma cor** <!-- {ul:.no-margin} -->
  - Mas e se cada vértice tiver uma cor diferente?
    - É usada a cor do _provoking_ vértice (tipicamente o primeiro declarado)
- Requer a especificação de **01 vetor normal para cada polígono**
- Extremamente rápido, mas produz imagens facetadas, pois a transição de um
  polígono para outro adjacente é nítida

---
<!-- {"backdrop": "lowpoly"} -->
# _Low poly is the new pixel art_

---
## Desenhos com _flat shading_

::: figure .picture-steps
![](../../images/lowpoly-octopus.jpg) <!-- {.bullet.full-width} -->
![](../../images/lowpoly-scene.jpg) <!-- {.bullet.full-width} -->
![](../../images/lowpoly-trees-and-stones.jpg) <!-- {.bullet.full-width} -->
:::

---
<!-- {"layout": "regular"} -->
# 2. _Gouraud shading_

![](../../images/shading-gouraud-exemplo.png) <!-- {p:.centered style="margin-top: 0; margin-bottom: 0;"} -->

- ![](../../images/normal-media-faces.svg) <!-- {.push-right} -->
  Usa a cor calculada **em cada vértice** pelo modelo de iluminação
- Para o interior do polígono, **interpola a cor dos vértices**
- Qualidade da imagem é muito maior, mas o custo é maior
- Deve haver **01 vetor normal por vértice** (e não por face)
  - Ele deve ser fornecido como a média das normais das faces
    adjacentes ao vértice

---
<!-- { "layout": "regular" } -->
## Limitações do _Gouraud shading_

- Se houver poucos vértices no objeto, os realces da componente especular
  (**_highlights_**) podem ficar estranhos ([gouraud-highlights](codeblocks:gouraud-highlights/CodeBlocks/gouraud-highlights.cbp )):

![](../../images/gouraud-highlights-issue.gif) <!-- {p:.centered} -->

---
<!-- { "layout": "regular" } -->
## O que acontece?

- ![](../../images/highlight-gouraud.png) <!-- {.push-right} -->
  Quando há poucos vértices e objetos rotacionando em relação à luz,
  o brilho (_highlight_) da luz especular pode provocar um **artefato visual**:
  - Brilho some/aparece
  - Brilho muda de posição
- Isso acontece porque a cor é calculada apenas por vértice e pode ser que não
  haja nenhum vértice recebendo o _highlight_ em um momento, mas haja no próximo

---
<!-- { "layout": "centered-horizontal" } -->
# 3. _Phong shading_

![](../../images/shading-phong-exemplo.png) <!-- {p:.centered} -->

Não confundir com o **modelo de <u>iluminação</u> de _Phong_** <!-- {p:.note.info} -->

---
<!-- { "layout": "regular" } -->
# _Phong shading_ (cont.)

- <u>Interpola as normais</u> dos vértices para os pixels, em vez das cores
  - A equação de iluminação deve ser avaliada **para cada pixel**
- Significativamente mais caro
- Não oferecido pelo OpenGL no _pipeline_ gráfico fixo
  - É possível implementar usando versões mais novas do OpenGL
- Consertando o problema dos _highlights_ de Gouraud

1. <!-- {ol:.no-bullet.horizontal-list} -->
   ![](../../images/highlight-gouraud.png) <!-- {style="width: 200px"} -->
1. &larr; Em **_Gouraud_**, temos uma amostragem de vértices muito menor
1. Em **_Phong_**, a amostragem é bem maior &rarr;  <!-- {li:.push-right} -->
1. ![](../../images/highlight-phong.png)<!-- {style="width: 200px"} -->

---
<!-- { "layout": "centered-horizontal" } -->
## Comparação dos modelos de **sombreamento**

::: figure .centered width:700px; margin-top: 0; margin-bottom: 0;
![](../../images/shading-comparacao-normais.svg) <!-- {p:.no-margin} -->
![](../../images/shading-comparacao-exemplo.png)
:::

Exemplo: [flat-gouraud-phong](codeblocks:flat-gouraud-phong/CodeBlocks/flat-gouraud-phong.cbp) (usa pipeline programável) <!-- {p:.no-margin} -->

---
<!-- { "layout": "section-header", "slideClass": "fog", "slideHash": "fog" } -->
# _Fog_

- Colocando neblina na cena

---
<!-- { "layout": "centered-horizontal" } -->
## Neblina (_Fog_)

::: figure .picture-steps
![](../../images/fog.jpg) <!-- {.bullet} -->
![](../../images/fog-game.jpg) <!-- {.bullet} -->
![](../../images/fog-peixes.jpg) <!-- {.bullet} -->
:::

---
<!-- { "layout": "centered-horizontal" } -->
## Zelda 64 e Turok 64


<div style="display: block"><iframe src="https://www.youtube.com/embed/_9AcRhzV3qA?ecver=2&start=3" width="450" height="337" style="float: left;" frameborder="0" allowfullscreen></iframe><iframe src="https://www.youtube.com/embed/cOVpcC8GwXM?ecver=2&start=42" width="450" height="337" style="float: right;" frameborder="0" allowfullscreen></iframe></div>


---
<!-- { "layout": "centered-horizontal" } -->
# _Fog_ com cor do _skybox_ no Temple Run 2

<iframe src="https://www.youtube.com/embed/wTTrtp-yy4I?ecver=2&start=55" width="800" height="600" frameborder="0" allowfullscreen></iframe>

---
<!-- { "layout": "centered-horizontal" } -->
## _Fog_ (cont.)

```c
float[] cor = { .5f, .5f, .5f };
glClearColor(cor[0], cor[1], cor[2], 1.0f);

glFogi(GL_FOG_MODE, GL_EXP);        // Linear, exp. ou exp²
glFogfv(GL_FOG_COLOR, cor);         // Cor
glFogf(GL_FOG_DENSITY, 0.35f);      // Densidade
glHint(GL_FOG_HINT, GL_DONT_CARE);  // Não aplicar se não puder
glFogf(GL_FOG_START, 1.0f);         // Profundidade inicial
glFogf(GL_FOG_END, 5.0f);           // Profundidade final
glEnable(GL_FOG);                   // Liga GL_FOG
```
- [Referência do `glFog`](https://www.opengl.org/sdk/docs/man2/xhtml/glFog.xml)
- Cor da neblina = cor do `glClearColor`

---
<!-- { "layout": "centered" } -->
# Referências

- Livro _Real-Time Rendering (3<sup>rd</sup> edition)_
  - Capítulo 5: _Visual Appearance_
- Livro _Computer Graphics with OpenGL (4<sup>th</sup> edition)_
  - Capítulo 17: _Illumination Models and Surface-Rendering Methods_
- Livro _Computer Graphics through OpenGL (2<sup>nd</sup> edition)_
  - Capítulo 11: [_Color and Light_](http://www.sumantaguha.com/files/materials/ch11.pdf)
- _Red Book_
  - [Capítulo 5: _Lighting_](http://www.glprogramming.com/red/chapter05.html)
  - [Capítulo 6: _Blending, Antialiasing, Fog, and Polygon Offset_](http://www.glprogramming.com/red/chapter06.html)
