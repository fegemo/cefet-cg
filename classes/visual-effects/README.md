# Efeitos Visuais

---
## O espectro de renderização

_"The **goal of rendering** is to **portray an object on the screen**;
  how we attain that goal is our choice"_
  (Akenine-Möller e amigos)

<img src="../../images/rendering-spectrum-1.png" class="bullet">
<img src="../../images/rendering-spectrum-2.png" class="bullet">

---
# Objetivos

1. Entender o funcionamento de **_skyboxes_** para maquear a limitação do
  campo de visão
1. Conhecer a técnica de **_billboarding_** e **_spriting_** para
  renderização "barata"
1. Simular o comportamento e aparência de gases e fogo com **sistemas
  de partículas**
1. Conhecer técnicas para geração de **sombras**
1. Conhecer técnicas para simulação de reflexão (espelho, metal etc.)
  usando **_environment mapping_**
1. Conhecer efeitos de câmera **_depth of field_** e **_motion blur_**

---
<!-- { "backdrop": "skybox" }-->

# Skybox

---
<!-- {"layout": "regular"} -->
## _Skybox_

- ![](../../images/skybox-structure.jpg) <!-- {.push-right} -->
  ![](../../images/skybox-issues.svg) <!-- {.push-right style="clear:right; width: 300px;"} -->
  Para maquear a limitação do campo de visualização, podemos usar um
  _**skybox**_ envolvendo todo o frustum
- Um _skybox_ é tipicamente criando usando um **cubo** cujas faces internas
  recebem texturas que representam o que pode ser visto no **horizonte
  da cena**
  - Mas outros modelos podem ser usados além do cubo:
    - Esfera: _sky sphere_
    - Hemisfério: _sky dome_ <!-- {ul^0:.multi-column-list} -->
  - O _skybox_ **deve ser mover** juntamente com o **campo de visão**
- É possível implementar usando texturas do tipo `CUBEMAP`

---
<iframe src="http://stemkoski.github.io/Three.js/Skybox.html" width="100%" height="100%" frameborder="0"></iframe>

---
<!-- { "backdrop": "billboarding"} -->
# _Sprites_ e _Billboarding_

---
<!-- {"layout": "regular"} -->
## _Sprites_ e _Billboarding_

![](../../images/sprite-megaman.png) <!-- {p:.centered} -->

- Uma **_sprite_** é uma imagem desenhada diretamente na cena
  - Pode ter os pixels desenhados diretamente, ou a partir de uma textura
    aplicada a um retângulo
  - Animações quadro a quadro podem ser feitas, utilizando mais imagens e
    alterando qual imagem está sendo mostrada
- Um caso especial de _sprite_ é a técnica de **_billboarding_**
  - Neste caso, o polígono texturizado é **orientado de acordo
    com a direção de visualização**
  - Quando a visualização muda, a orientação do polígono muda

---
<!-- {"layout": "regular"} -->
## _Billboarding_ não é um conceito novo

- Apesar de ser um jogo 3D, todos os inimigos e objetos do jogo Doom eram _billboards_

![](../../images/billboarding-doom2.png)
![](../../images/billboarding-doom1.jpg) <!-- {p:.centered} -->

Há pelo menos 3 tipos de _billboards_: _screen-aligned_, _world-oriented_ e axial
---
<!-- {"layout": "regular"} -->
## **Orientação** do _Billboard_

1. ::: figure .
   <video width="200" class="push-right" poster="../../images/screen-aligned-billboard.jpg" controls>
     <source src="../../videos/screen-aligned-billboard.mp4" type="video/mp4" />
   </video>
   :::
   _Screen-aligned_ <!-- {ol:.full-width.no-margin} -->
   - Imagem sempre paralela à tela
   - <span class="math">normal = -view</span>
   - <span class="math">up = camera.up</span>
   - Útil para textos explicativos, efeito de _lens flare_
1. ![](../../images/billboarded-tree.jpg) <!-- {.push-right} -->
   _World-oriented_
   - <span class="math">normal = -view</span>
   - **<span class="math">up = world.up</span>**
   - Usado para objetos não simétricos (eg, partículas)
1. _Axial_
   - Rotaciona no próprio **eixo da base** com **variação limitada**
   - <span class="math">up = world.up</span>
   - Árvores distantes que tentam ficar de frente pra câmera

---
<!-- {"layout": "centered"} -->
## _**World**-aligned_

- Renderização de nuvens em tempo real:

![](../../images/rendering-cloud-impostors.jpg) <!-- {.small-width} --> <!-- {p:.center-aligned} -->
![](../../images/rendering-cloud-result.jpg) <!-- {.small-width} -->

Trabalho de [_Harris and Lastra_, 2001](http://www.markmark.net/PDFs/RTClouds_HarrisEG2001.pdf)

---
<!-- {"layout": "regular"} -->
## _**Axis**-aligned_

![](../../images/axis-aligned-billboard-1.png) <!-- {p:.centered} -->
![](../../images/axis-aligned-billboard-2.png)

- Código fonte em
  [codesampler.com](http://www.codesampler.com/oglsrc/oglsrc_8.htm)

---
# Sombras em Tempo Real

---
<!-- {"layout": "regular"} -->
## **Sombras**

- ![right](../../images/shadow-mapping.png)
  O uso de sombras a uma cena aumenta o realismo e fornece dicas visuais
  para a profundidade e posição de objetos
- As técnicas mais comuns em _real-time_:
  1. ~~_Hack_ simplão~~
  1. _Shadow volumes_
  1. _Shadow maps_

---
<!-- {"layout": "regular"} -->
## Sombras (1): **_Hack_ simplão**

- ![right](../../images/shadow-hack.png)
  Renderizar cada objeto duas vezes:
  - Primeiro passo: renderizar normalmente
  - Segundo passo: projetar no plano do chão e renderizar totalmente preto
- Pros:
  - Fácil e até convincente
- Cons:
  - Torna-se rapidamente um problema geométrico complexo
    - Fácil projetar em um plano infinito
    - Mas e numa escada? Morro?

---
<!-- {"layout": "regular"} -->
## Sombras (2): **_Shadow Volumes_**

- A técnica foi proposta em 1977 (Frank Crow), mas popularizada com o jogo
  Doom 3
- ![right](../../images/shadow-volume1.png)
  Para cada par <luz, objeto>, computar a região da malha que obstrui a luz
  1. Encontrar a silhueta sob a perspectiva da luz
  2. Projetar a silhueta ao longo dos raios da luz (fazer uma extrusão)
  3. Triangular (gerar triângulos) conectando a silhueta e sua projeção para
     obter o **volume da sombra**
- Um ponto <span class="math">P</span> está na sombra da luz
  <span class="math">L</span> se algum volume de sombra contém
  <span class="math">P</span>
- Tipicamente, usa-se o _stencil buffer_ ([Everitt e Kilgard, 2002](http://arxiv.org/ftp/cs/papers/0301/0301002.pdf))

---
<!-- {"layout": "regular"} -->
## Sombras (2): **_Shadow Volumes_** (1)

- ![right](../../images/shadow-volume2.png)
  Pros:
  - A sombra é super precisa (a nível de pixel) e não sofre problemas de
    _aliasing_
- Cons:
  - Computacionalmente mais cara que _shadow maps_

---
<!-- {"layout": "regular"} -->
## Sombras (3): **_Shadow Maps_** (1)

- ![right](../../images/shadow-map1.png)
  Renderiza a cena usando **cada fonte de luz como centro de projeção**,
  salvando apenas o _z-buffer_
  - Imagens 2D resultantes são os **mapas de sombras** (uma por fonte de luz)
- Em seguida, renderiza a cena do ponto de vista da câmera

---
<!-- {"layout": "regular"} -->
## Sombras (3): **_Shadow Maps_** (2)

- ![right](../../images/shadow-map2.png)
  Para determinar se ponto <span class="math">P</span> de um objeto está
  na sombra:
  1. Computar a distância <span class="math">d_P</span> de
     <span class="math">P</span> até a fonte de luz
  1. Converter <span class="math">P</span> das coordenadas do mundo para
     coordenadas do _shadow map_ (usando matrizes
     <span class="math">projection * view</span> usada para gerar o mapa)
  1. Recuperar a distância <span class="math">d_{min}</span> no mapa
  1. <span class="math">P</span> está na sombra se
     <span class="math">d_P \leq d_{min}</span>, _i.e._, se estiver atrás de um
     objeto mais próximo da fonte


---
<!-- {"layout": "regular"} -->
## Sombras (3): **_Shadow Maps_** (3)

- ![right](../../images/shadow-map3.png)
  Pros:
  - Pode ser extendida para ter _soft shadows_
  - Mais barata que _shadow volumes_
- Cons:
  - Implementação simples tem problemas seríssimos de _aliasing_
    - Câmera mais próxima da sombra que a fonte, muitos pixels podem ser
      cobertos por apenas um "texel" do _shadow map_
- Há várias técnicas para resolver o problema de _aliasing_...

---
<!-- {"layout": "regular"} -->
## Sombras (3): **_Shadow Maps_** (4)

- **_Screen Space Blurred Shadow Mapping_**:
  - Sombras renderizadas em uma textura e ela é borrada e então aplicada na tela
- **_Percentage Closer Filtering_**:
  - Usa mais de um "texel" do _shadow map_ para determinar se ponto está na
    sombra

![](../../images/shadow-map4.png) <!-- {p:.centered} -->

---
<!-- { "backdrop": "particles"} -->
# Sistema de partículas

---
<!-- {"backdrop": "particle-system-fire", "layout": "regular"} -->
## O que é

- Um **sistema de partículas** é um conjunto de objetos pequenos colocados
  em movimento, usando algum algoritmo
- Com ele, é possível simular: **fogo, fumaça, explosões, galáxias giratórias,
  lançamento de magias, efeito de "_level up_"** etc.
- [Exemplo em 3D](http://stemkoski.github.io/Three.js/Particle-Engine.html)
- [Exemplo em 2D](https://pixijs.io/pixi-particles-editor/)

---

<iframe src="https://pixijs.io/pixi-particles-editor/" width="100%" height="100%" frameborder="0"></iframe>

---
<!-- {"layout": "regular"} -->
## Sistemas de Partículas

- ![right](../../images/particle-system-various.png)
  **Partículas** são controladas por um **emissor**
  - Ele instancia e finaliza as partículas
  - Também determina suas posições, tamanho etc.
  - Contém um ou mais parâmetros de **comportamento** das partículas, _e.g._:
    - Taxa de nascimento
    - Velocidade inicial
    - Tempo de vida da partícula etc.
- Os valores dos parâmetros das partículas são tipicamente aleatorizados

---
<!-- {"layout": "regular"} -->
## Sistemas de Partículas: Funcionamento

- Estágio de simulação (`void atualiza()`):
  - Novas partículas são criadas baseado na **taxa de nascimento**
    - Cada parâmetro inicial é definido baseado na **configuração do emissor**
  - Partículas que excederam seu tempo de vida são removidas
  - Para cada partícula viva, seus parâmetros são atualizados
    - Colisão da partícula com o mundo pode ser usado, mas não é comum (é caro)
- Estágio de renderização (`void desenha()`):
  - Partículas são tipicamente renderizadas usando uma **_sprite_ ou
    um _billboard_**
  - Mas também podemos usar `GL_POINTS`, `GL_LINES`

---
## Sistema de Partículas: C/C++

```c
struct Particula
{
  Particula * anterior, * proxima;
  Vetor posicao;
  Vetor direcao;
  int vidaSobrando;
  Vetor cor;
  Vetor deltaCor;
};
```
- [_The Ocean Spray in Your Face_](https://www.lri.fr/~mbl/ENS/IG2/devoir2/files/docs/particles.pdf) -
  um tutorial sobre sistema de partículas simples (1998)

---

## Sistema de Partículas: C/C++ (2)

```c
struct Emissor
{
  // Configuração
  Vetor posicao;
  float angulo, variacaoAngulo;
  float velocidadeTangencial, variacaoVelocidadeTangencial;
  // Lista de partículas
  Particula * primeira;
  int numeroMaximoParticulas;
  int numeroParticulasVivas;
  int taxaEmissaoPorQuadro;
  int vidaMaxima, variacaoVidaMaximo;
  Vetor corInicial, variacaoCorInicial;
  Vetor corFinal, variacaoCorFinal;
  // Física
  Vetor forcaGlobal; // Gravidade, vento etc.
};
```

<!--
## Desafios

- Quando interage com objetos tridimensionais do mundo, podemos ter o (d)efeito
  indesejado de "arestas acentuadas":
  ![](../../images/soft-particles-overgrowth1.jpg)
  - Vídeo mostrando [problema das arestas acentuadas](https://www.youtube.com/watch?v=ES0IY_e5Kd8)
- Para consertar, podemos usar a técnica de **_soft particles_** ao renderizar


## Desafios: usando **_soft particles_**

- A ideia é deixar a partícula transparente em suas partes próximas aos objetos
  da cena
  - É possível fazer de forma barata usando o _depth buffer_

<figure style="position: relative; width: 100%; height: 500px">
  <img src="../../images/soft-particles-overgrowth2.jpg" class="bullet bullet-no-anim" style="position: absolute; top: 0; left: 0;">
  <img src="../../images/soft-particles-overgrowth3.jpg" class="bullet bullet-no-anim" style="position: absolute; top: 0; left: 0;">
  <img src="../../images/soft-particles-overgrowth4.jpg" class="bullet bullet-no-anim" style="position: absolute; top: 0; left: 0;">
  <img src="../../images/soft-particles-overgrowth5.jpg" class="bullet bullet-no-anim" style="position: absolute; top: 0; left: 0;">
</figure>
-->

---
<!--
{"backdrop": "depth-of-field"}
-->
# Efeitos de câmera

---
## _Depth of field_

![](../../images/depth-of-field.png)

- Simulação do fato que o olho humano mostra com menos nitidez os objetos
  que estão mais distantes do ponto alvo
- Em OpenGL, podemos usar o **_accumulation buffer_**
  - [Como fazer _depth of field_](http://www.glprogramming.com/red/chapter10.html), no livro vermelho
  - [Referência do `glAccum`](https://www.opengl.org/sdk/docs/man2/xhtml/glAccum.xml) na documentação do OpenGL

---
## _Depth of field_ usando _Accumulation Buffer_

![](../../images/depth-of-field-accum.png)

- "Tira fotos" deslocando a câmera levemente para cada lado
- Mescla as fotos usando o _accumulation buffer_
- Regiões laterais ficam fora de foco

---
## _Motion blur_

![](../../images/motion-blur.gif)

- Simulação de efeito de movimentação muito rápida
- Também pode ser feito usando o **_accumulation buffer_**
  - [Como fazer _motion blur_](http://www.glprogramming.com/red/chapter10.html), no livro vermelho
  - Exemplo:
  ```c
  float q = 0.8f;
  glAccum(GL_MULT, q);
  glAccum(GL_ACCUM, 1-q);
  glAccum(GL_RETURN, 1.0);
  ```

---
# Referências

- Livro _Real-Time Rendering (3<sup>rd</sup> edition)_
  - Capítulo 10: _Image-Based Effects_
- Livro vermelho
  - [Capítulo 10: _The Framebuffer_](http://www.glprogramming.com/red/chapter10.html)
- [_The Ocean Spray in Your Face_](https://www.lri.fr/~mbl/ENS/IG2/devoir2/files/docs/particles.pdf) -
  um tutorial sobre sistema de partículas simples (1998)
- [Post da Wolfire Games](http://blog.wolfire.com/2010/04/Soft-Particles)
  sobre _soft particles_ no jogo Overgrowth
