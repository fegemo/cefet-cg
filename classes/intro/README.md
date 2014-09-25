# Introdução à Computação Gráfica

---
# Roteiro

1. Conceitos
1. Dispositivos Gráficos
1. Representação de Imagens
1. O Olho
1. Representação de Cores

---
# Alguns conceitos

---
## Computação Gráfica

**s.f.** conjunto de algoritmos, técnicas e metodologias para o tratamento
e a representação gráfica de informações através da criação, armazenamento e
manipulação de desenhos por meio de computadores e periféricos gráficos.

---
## Áreas de aplicação

- CAD (_Computer Aided Design_)
- Apresentações Gráficas
- Arte por Computador
- Entretenimento
- Educação e Treinamento
- Visualização Científica

---
## Interação com outras áreas

![Interação da Computação Gráfica com outras áreas](images/interacao-areas.png)

---
## Foco deste curso

- Produção de imagens fotorrealísticas em tempo real
- Teoria e prática das técnicas e algoritmos envolvidos

---
## Professor, mas eu quero fazer desenhos em 3D

- Você pode e mesmo terá a oportunidade no nosso projeto final
- Contudo, o foco do curso está em conhecer e entender como funcionam as
  ferramentas utilizadas na criação de imagens e animações 3D
- Algumas ferramentas 3D:
  - [3ds Max](3ds-max) (licença de estudante gratuita)
  - [Maya lt](maya-lt) (licença de estudante gratuita)
  - [blender](blender) (gratuito)
  - [ZBrush](z-brush) (comercial)
  - [clara.io](claraio) (versão gratuita, programa limitado)

---
# Dispositivos Gráficos

---
## Interfaces Gráficas

- Interfaces baseadas em texto (~1980)
- Interface WIMP: Windows, Icons, Menus and Pointers
  - ![Tela do Apple Lisa - interface WIMP](images/wimp.png)

---
## Dispositivos Gráficos

- Monitores Raster
  - CRT
  - LCD
  - Plasma
- Monitores vetoriais (1963)
  - Imagens desenhadas como uma caneta
- Impressoras

---
## _Cathode Ray Tube_ (CRT)

![Diagrama de funcionamento de um tubo de raio catódico](images/crt.png)

- Tubo de raio catódico
- Baixo custo de produção
- Bom ângulo de visão

---
## Outros monitores

- Liquid Cristal Display (LCD)
  - Cada pixel são três (rgb) "orifícios" que permitem passagem de luz branca
  - Demonstração: [Desmontando um monitor de LCD (Enginner Guy)](lcd-teardown)
- Plasma
  - Composto por um grande número de lâmpadas de neon
  - Cada pixel tem uma célula de fósforo que é incandencida por raios violeta
    emitidos pelo plasma
  - Cada pixel tem 3 (rgb) subpixels

---
# Arquitetura de sistema gráfico raster

---
## Modelo **Simples**

![Diagrama da arquitetura de sistema gráfico simples](images/raster-architecture.png)

---
## Modelo **Moderno**

![Diagrama da arquitetura de sistema gráfico moderno](images/raster-architecture-modern.png)

---
# Representação de Imagens

Imagens podem ser representadas em duas formas principais:

- Vetoriais
  - Formulados por modelos geométricos
  - Ocupam menos espaço de armazenamento
  - Não perdem qualidade quando ampliados
  - Extensões: [**svg, cdr**]
- Raster (matricial ou matriz de pixels)
  - Matriz de pixels (_picture elements_)
  - Muito simples de gerar
  - Extensões: [**gif, jpg, png, bmp**]

---
## Imagem vetorial

![Exemplo de imagem vetorial](images/vector-image.svg)

---
## Imagem raster

![Imagem raster](images/raster.jpg)

---
# O Olho

![Modelo do olho humano](images/eye-model.png)

---
## Modelo do olho humano

- Fótons (raios de luz) entram pela pupila de forma reta até atingirem a retina
- A imagem é formada pela contribuição da luz nos cones da retina
- Quanto mais próximo ao centro da retina, maior o nível de detalhes que
  percebemos
- Este modelo é complexo demais para a Computação Gráfica...

---
## Qual é mais escuro? A ou B?

![](images/illusion-a.png)

---
## Resposta

![](images/illusion-b.png)

---
## A Câmera _"pinhole"_ (estenopeica)

![A Câmera pinhole](images/pinhole-camera.png)

---
## A Câmera _"pinhole"_

- Versão mais simples de um modelo de visão
- Imagens mais próximas são retratadas maiores
- Modelo bastante semelhante ao que usamos

---
## O _View Frustum_

![O view frustum](images/view-frustum.gif)

- A câmera é colocada na ponta da pirâmide
- Frustum: tronco de pirâmide formado pelo plano próximo e plano distante
- Apenas o que está dentro deles é renderizado

---
# Representação de Cores

![Sistema de cores aditivas e subtrativas](images/cmyk-rgb.png)

---
## Representação de Cores

- Depende da natureza do dispositivo gráfico: aditivo (monitores) ou subtrativo
  (impressoras)
- Monitores: 24-bit RGB
  - 8 bits para vermelho (0 a 255)
  - 8 bits para verde
  - 8 bits para azul
  - Exemplo: <span class="color-portrait ffd5d5"> </span> (<span class="pure-red">255</span>, <span class="pure-green">213</span>, <span class="pure-blue">213</span>) ou (<span class="pure-red">1</span>, <span class="pure-green">0.84</span>, <span class="pure-blue">0.84</span>)

---
# Referências

- [Programa de modelagem 3D blender](blender)
- [Aplicativo Web de modelagem 3D clara.io](claraio)
- [Programa de modelagem 3D Autodesk 3ds Max](3ds-max)
- [Programa de modelagem 3D Autodesk Maya](maya-lt)
- [Programa de modelagem 3D ZBrush](z-brush)
- [Desmontando um monitor de LCD (Enginner Guy)](lcd-teardown)

[blender]: http://www.blender.org/
[claraio]: https://clara.io/
[3ds-max]: http://www.autodesk.com/education/free-software/3ds-max
[maya-lt]: http://www.autodesk.com/education/free-software/maya-lt
[z-brush]: http://pixologic.com/
[lcd-teardown]: http://www.engineerguy.com/videos/video-lcd.htm
