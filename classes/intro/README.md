<!-- {"layout": "title"} -->
# Introdução à Computação Gráfica
## Conceitos importantes

---
<!-- {"layout": "centered-horizontal"} -->
# Roteiro

1. Conceitos
1. Dispositivos Gráficos
1. Representação de Imagens
1. Modelos usados em Computação Gráfica

---
<!-- {"layout": "stripe"} -->
# Computação Gráfica

![](../images/forest-stroke.png) <!-- {.stripe} -->

Definição: *s.f.* conjunto de **algoritmos, técnicas e metodologias** para
o **tratamento e a representação gráfica de informações** por meio da
criação, armazenamento e manipulação de desenhos por meio de
computadores e periféricos gráficos.

---
<!-- {"layout": "centered-horizontal"} -->
## Quem usa Computação Gráfica?

1. Jogos
1. Filmes e TV
1. CAD (_Computer Aided Design_)
1. Educação e Treinamento
1. Arte por Computador
1. Apresentações Gráficas
1. Simulação Científica

---
<!-- {"backdrop": "area-games"} -->
# Jogos

---
<!-- {"backdrop": "area-entertainment"} -->

# Entretenimento

<iframe src="https://player.vimeo.com/video/172374044" width="640" height="360" frameborder="0" allowfullscreen></iframe>

---
<!--
  backdrop: area-cad
-->

# CAD (_Computer Aided Design_)

---
<!--
  backdrop: area-education
-->

# Educação e Treinamento


---
<!--
  backdrop: area-art
-->

# Arte por Computador

---
# **Problemas abordados** na área

![](../../images/cg-overall-tasks.png)

---
## Processamento Digital de Imagens

- Área que envolve as **técnicas de transformação de imagens**, em que tanto
  a imagem original quanto a imagem resultado apresentam-se **sob uma
  representação visual** (geralmente matricial)
- Estas transformações **visam melhorar as características visuais da imagem**,
  _e.g._:
  - aumentar o contraste
  - alterar o foco
  - diminuir ruídos e algumas distorções

---
## Exemplo: Processamento Digital de Imagens

![](../../images/pdi-lena.png)

---
## Análise de Imagens

- Área que procura **obter a especificação dos componentes de uma imagem a
  partir de sua representação visual**
- Por exemplo, reconstrução de primitivas elementares
  (cubos, esferas, etc.) que aproximam um objeto visualizado em uma imagem

---
## Exemplo: Análise de Imagens

![](../../images/juiz-virtual.jpg)

---
## Exemplo 2: Análise de Imagens

![](../../images/reconhecimento-padores.jpg)

---
## Modelagem

- A modelagem geométrica consiste de um **conjunto de métodos que visam
  descrever a forma e as características geométricas de um objeto**
- Ela provê uma descrição ou modelo muito mais analítico,
  matemático e abstrato que o real

---
## Exemplo: Modelagem

![](../../images/modeling.png)

---
## Síntese (ou renderização)

- A síntese de imagem designa o **processo de geração de imagens
  digitais a partir da descrição dos elementos que compõem uma cena 3D**,
  baseando-se em modelos que descrevem o comportamento da luz
- Síntese e modelagem são consideradas, por muitos autores, como
  **a própria Computação Gráfica de hoje em dia**.

---
## Exemplo: Síntese

![](../../images/image-synthesis.png)

---
## Foco deste curso

- **Modelagem e <u>síntese</u>** de imagens
  - Processamento de imagens é uma área por si só
  - Visão computacional estuda a análise de imagens (e vídeos)
- Teoria e prática das técnicas e algoritmos envolvidos em modelagem e síntese
- Geração de imagens em tempo real
  - Mas também veremos geração *offline*

---
## Professor, mas eu quero fazer desenhos em 3D!

- Você pode fazer isso e ganhar pontinhos extras nos trabalhos
- Contudo, o foco do curso está em conhecer e entender como funcionam as
  ferramentas utilizadas na criação de imagens e animações 3D
- Algumas ferramentas para criar cenas 3D:
  - [3ds Max](3ds-max) (licença de estudante gratuita)
  - [Maya lt](maya-lt) (licença de estudante gratuita)
  - [blender](blender) (gratuito)
  - [ZBrush](z-brush) (comercial)
  - [clara.io](claraio) (tem uma versão gratuita, programa limitado)

---
# Dispositivos Gráficos

---
## Interfaces Gráficas

- Interfaces baseadas em texto (~1980)
- Interface WIMP: Windows, Icons, Menus and Pointers
  ![Tela do Apple Lisa - interface WIMP](../../images/wimp.png)

---
## Dispositivos Gráficos

- Monitores **Raster**
  - Raster é a discretização da imagem em pedacinhos,
    os _picture elements_ (ou **pixels**)
  - Exemplos:
    - CRT
    - Plasma
    - LCD, LED
- ![right](../../images/vector-asteroids.png)
  Monitores vetoriais (1963)
  - Desenham imagens como uma caneta (eg, osciloscópio)
  - Em desuso desde 1970
- Impressoras


---
## _Cathode Ray Tube_ (CRT)

![Diagrama de funcionamento de um tubo de raio catódico](../../images/crt.png)

---
<iframe width="800" height="450" src="https://www.youtube.com/embed/3BJU2drrtCM?start=70" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>

---
## Outros monitores

- _Liquid Cristal Display_ (LCD) - e LED
  - Cada pixel são três (rgb) "orifícios" que permitem passagem de luz branca
  - Demonstração: [Desmontando um monitor de LCD (Enginner Guy)][lcd-teardown]
- Plasma
  - Composto por um grande número de lâmpadas de neon
  - Cada pixel tem uma célula de fósforo que é incandencida por raios violeta
    emitidos pelo plasma
  - Cada pixel tem 3 (rgb) subpixels

[lcd-teardown]: http://www.engineerguy.com/videos/video-lcd.htm

---
# Arquitetura de sistema gráfico raster

- Um monitor raster precisa receber uma **matriz de valores para seus pixels**
  - Costumamos chamar **matriz 2D de valores** de um **raster**
- É necessário ter espaço para armazenar o raster
  - Essa memória se chama **_frame buffer_** (ou _color buffer_)

![Diagrama da arquitetura de sistema gráfico simples](../../images/raster-architecture.png)

---
## Arquitetura **Simples** vs **Moderno**

![Diagrama da arquitetura de sistema gráfico simples](../../images/raster-architecture.png)
![Diagrama da arquitetura de sistema gráfico moderno](../../images/raster-architecture-modern.png)

---
# Representação de Cores

- Radiação eletromagnética pode ser entendia como ondas ou um fluxo de
  partículas sem massa chamadas de fótons
- É caracterizada pela frequência/comprimento da onda

  ![](../../images/electromagnetic-spectrum.png)

---
## Espectro da luz visível

- As ondas eletromagnéticas raramente aparecem em apenas 1 frequência,
  mas sim como uma **combinação**. Exemplo:

    ![](../../images/light-frequency-distribution.png)
- A luz é percebida como a **mistura (ou soma) das frequências** da onda
  eletromagnética
- Para representar no computador, precisamos de uma **forma discreta** para
  representar a cor

---
## Representação de Cores

- Depende da natureza do dispositivo gráfico: aditivo (monitores) ou subtrativo
  (impressoras)

![Sistema de cores aditivas e subtrativas](../../images/cmyk-rgb.png)

---
## O modelo RGB de cores

- Monitores: 24-bit RGB
  - 8 bits para vermelho (0 a 255)
  - 8 bits para verde
  - 8 bits para azul
  - Exemplo: <span class="color-portrait ffd5d5"> </span> (<span class="pure-red">255</span>, <span class="pure-green">213</span>, <span class="pure-blue">213</span>) ou (<span class="pure-red">1</span>, <span class="pure-green">0.84</span>, <span class="pure-blue">0.84</span>)
    - Seletor de cores: <input type="color">
- Imagens digitais: 32-bit RGBA (em geral)
  - +8 bits para alfa (opacidade)


<!--
- [Questionário Maroto - parte 1](https://moodle.cefetmg.br/mod/quiz/view.php?id=17597)
-->

---
# Representação de Imagens Digitais

- Imagens podem ser representadas em duas formas principais:
  - Vetoriais
    - Formuladas por modelos geométricos
    - Ocupam menos espaço de armazenamento
    - Não perdem qualidade quando ampliados
    - Extensões: [**svg, cdr**]
  - Raster (matriz de pixels)
    - Matriz de **pixels** (_picture elements_)
    - Muito simples de gerar e exibir
    - Perdem qualidade se ampliadas
    - Extensões: [**gif, jpg, png, bmp, ppm**]

---
## Imagem vetorial

![Exemplo de imagem vetorial](../../images/vector-image.svg)

---
## Imagem raster

![Imagem raster](../../images/raster-image.png)


---
## Modelos de Sistema Visual

- Há várias formas de tentar reproduzir o sistema visual:
  1. Modelo do olho humano
  1. Modelo da camera escura (estenopeica)
  1. Modelo do _frustum_ de visualização
- Vamos escolher um \o/

---
## (1) Modelo do olho humano

- ![left](../../images/eye-model.png)
  Fótons (raios de luz) entram pela pupila de forma reta até atingirem a retina
- A imagem é formada pela contribuição da luz nos cones e bastonetes da retina
  - Cones: bons identificadores de cores
  - Bastonetes: identificam luz em baixa intensidade
- Quanto mais próximo ao centro da retina, maior o nível de detalhes que
  percebemos
- Este modelo é **complexo demais** para a Computação Gráfica
  - Basicamente porque o sistema visual humano envolve fatores até
    [mesmo psicológicos da percepção de luminosidade](http://web.mit.edu/persci/gaz/)

---
## Qual é mais escuro? A ou B?

<figure class="picture-steps">
  <img class="bullet" src="../../images/illusion-a.png">
  <img class="bullet" src="../../images/illusion-b.png">
</figure>

---
## (2) Modelo da câmera escura

![O modelo da câmera escura](../../images/pinhole-camera.png)

---
## A Câmera _"pinhole"_

- Versão mais simples de um modelo de visão
- Imagens mais próximas são retratadas maiores
- Modelo bastante semelhante ao que usamos

---
## (3) O modelo de _View Frustum_

![O view frustum](../../images/view-frustum.gif)

- A câmera é colocada na ponta da pirâmide
- **_Frustum_**: sólido geométrico que é um **tronco de pirâmide** formado pelo
  plano próximo e plano distante
- Apenas o que está dentro do _frustum_ é retratado

<!--

- [Questionário Maroto - parte 2](https://moodle.cefetmg.br/mod/quiz/view.php?id=17596)
-->

---
# Sumário das nossas decisões

1. Modelo de **representação de imagens**
   - Usamos monitores raster
   - Vamos gerar imagens raster
   - É possível usar imagens vetoriais, rasterizando-as
1. Modelo de **cores**
   - Discretizamos em RGB
   - Representação com 8 bits por componente
1. Modelo de **câmera**
   - Vamos usar o modelo do _view frustum_
   - É possível usar outros modelos mais complexos

---
# Referências

- [Programa de modelagem 3D blender][blender]
- [Aplicativo Web de modelagem 3D clara.io][claraio]
- [Programa de modelagem 3D Autodesk 3ds Max][3ds-max]
- [Programa de modelagem 3D Autodesk Maya][maya-lt]
- [Programa de modelagem 3D ZBrush][z-brush]
- [Desmontando um monitor de LCD (Enginner Guy)][lcd-teardown]
- [Explicação da ilusão de ótica][optics-illusion]

[blender]: http://www.blender.org/
[claraio]: https://clara.io/
[3ds-max]: http://www.autodesk.com/education/free-software/3ds-max
[maya-lt]: http://www.autodesk.com/education/free-software/maya-lt
[z-brush]: http://pixologic.com/
[lcd-teardown]: http://www.engineerguy.com/videos/video-lcd.htm
[optics-illusion]: http://web.mit.edu/persci/people/adelson/checkershadow_description.html
