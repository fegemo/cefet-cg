# Pipeline Gráfico

---
# Objetivos

1. Entender o que acontece desde um `glVertex3f(x,y,z)` até a imagem renderizada
   na tela
1. Conhecer o que o OpenGL (e o DirectX) fazem com a geometria que estamos
   vendo

---

# Roteiro

1. O _pipeline_ gráfico
1. Estágio de **Aplicação**
1. Estágio de **Geometria**
1. Estágio de **Rasterização**

---
# O _pipeline_ gráfico

---
## Um _pipeline_

1. Divisão de trabalho em etapas
1. As etapas são executadas em paralelo
1. Exemplo: pipeline da exploração de diamantes
  ![](images/pipeline-diamante.png)
  - A velocidade com que se produz diamantes é dada pela velocidade da etapa
    mais lenta

---
## O _pipeline_ gráfico

![](images/pipeline-grafico-fases.png)

- É o processo de transformação de um modelo de descrição de objetos (vértices)
  em uma imagem digital (imagem renderizada na tela)
- Dividido em três etapas conceituais
  1. Aplicação
  1. Geometria
  1. Rasterização
---
## O _pipeline_ gráfico

- Cada etapa pode ser, por si só, outro _pipeline_
- O tempo de renderização é dado pela velocidade da etapa mais devagar
  - Depende da cena e de como foi implementada

---
# Estágio de **aplicação**

---
## Estágio de **aplicação**

- Controlado pelo desenvolvedor
- É onde define-se a descrição dos objetos da cena
  - Basicamente, seu código fonte de um programa em OpenGL
- Ao final do estágio, sua saída são as primitivas geométricas a serem
  entregues para o próximo estágio, de geometria

---
## Estágio de **aplicação** (cont.)

- Como este estágio está todo em software, geralmente ele não é subdividido
  paralelizado
- Atividades típicas que executamos neste estágio
  - Cálculo de colisão
  - Atualização de lógica de animação
  - Atualização da cena de acordo com entradas (_mouse_, teclado etc.)
  - Inteligência artificial

---
# Estágio de **geometria**

---
## Estágio de **geometria**

- Responsável pela grande maioria das operações em polígonos e vértices
- Subdividido em:

  ![](images/pipeline-geometria-fases.png)
  1. Transformação de modelo e visualização
  1. Sombreamento de vértices
  1. Projeção
  1. Recorte
  1. Mapeamento na tela


---
## Geometria &gt;&gt; Transf. de Modelo e visualização

- Tipicamente, descrevemos os objetos em um sistema de coordenadas local a eles
  - Espaço do objeto
- Mas todos os objetos de uma cena precisam ser descritos usando um sistema
  comum, da cena
  - Espaço do mundo
- Também há um conceito de câmera, em que apenas os objetos da cena visíveis a
  ela são exibidos

---
## Geometria &gt;&gt; Transf. de Modelo e visualização

![](images/view-transform.png)

- A câmera e os objetos da cena sofrem uma **tranformação de vizualização**
  - Espaço da câmera ou do olho

---
## Geometria &gt;&gt; Transf. de Modelo e visualização

- A **transformação de modelo e visualização**, então, se trata da
  transformação de **diversos sistemas de coordenadas em um sistema comum**
- Passa para a etapa seguinte, as primitivas gráficas em apenas um sistema de
  coordenadas

---
## Geometria &gt;&gt; Sombreamento de vértices

- <img src="images/cena-3d.png" style="float: right; margin-left: 10px; width: 200px;">
  Para produzir uma cena realística, precisamos usar um conceito de iluminação
- Com os vértices em suas posições em um único sistema de coordenadas, podemos
  agora definir a contribuição das fontes de luz de cada vértice
- Ao final do sombreamento, temos cores e coordenadas de textura para cada
  vértice da cena
  - Essa informação será passada para o sub-estágio seguinte

---
## Geometria &gt;&gt; Projeção

- Após o sombreamento, o sistema de renderização realiza uma projeção
  - Transform o volume de visualização em um cubo unitário com extremos em
    (-1, -1, -1) e (1, 1, 1)
  - Cubo unitário é chamado de **volume de visualização canônico**
- Dois métodos de projeção:
  1. Paralelo
  1. Perspectivo

---
## Geometria &gt;&gt; Projeção

![](images/proj-tipos.png)

---
## Geometria &gt;&gt; Projeção

- Projeção paralela
  - Linhas paralelas continuam paralelas
  - Uma transformação composta de escala e translação
- Projeção perspectiva
  - Linhas paralelas se encontram no infinito
  - Também é representada por uma matriz 4x4, mas não é uma transformação
    linear
- Após a transformação de projeção
  - Dizemos que temos **coordenadas de dispositivo normalizadas**
  - A coordenada Z dos vértices é removida (3D -> 2D), porém armazenada em um
    espaço chamado _Z-buffer_

---
## Geometria &gt;&gt; Recorte

- Apenas as primitivas **dentro do volume de visualização** precisam
  ser renderizadas
- Esta etapa recebe os vértices no espaço de coordenadas de dispositivo
  normalizadas (2D, -1 &le; x, y &le; 1) e remove os vértices desnecessários:
  - Primitivas totalmente dentro: passadas adiante
  - Primitivas totalmente fora: removidas
  - Primitivas **parcialmente representadas**: precisam ser **recortadas**

---
## Geometria &gt;&gt; Recorte

![](images/pipeline-recorte.png)

- Como toda nossa cena está representada no cubo de visualização (da etapa de
  projeção), para fazer o recorte calculamos a intersecção das primitivas com
  o cubo unitário

- Na etapa de recorte, novos vértices podem ser criados

---
## Geometria &gt;&gt; Mapeamento de tela

![](images/pipeline-tela.png)

- As coordenadas das primitivas devem ser agora mapeadas para coordenadas da
  tela (ou da janela)
- Esta operação é uma transformação composta de translação e escala
- A partir deste momento, estamos **quase** podendo falar em _**pixels**_

---
# Estágio de **Rasterização**

---
## Estágio de **Rasterização**

![](images/pipeline-rasterizador-fases.png)

- Recebemos vértices tranformados e projetados e suas informações de cor e
  textura provenientes do estágio de geometria
- Entregaremos a cor a ser definida para cada pixel da janela

---
## Rasterização &gt;&gt; Configuração de Triângulos

- Neste estágio, informações sobre os triângulos definidos pelos vértices são
  determinadas

---
## Rasterização &gt;&gt; _Scan Conversion_

- Cada pixel que tem seu centro "coberto" por um triângulo é verificado e um
  fragmento é criado
- Determinar que pixels estão dentro de um triângulo é denominado _scan
  conversion_
- Cada fragmento tem associada informação (cor, textura, profundidade) que
  advém da interpolação dos três vértices do triângulo

---
## Rasterização &gt;&gt; Sombreamento de Pixels

- Para cada pixel que possui um fragmento, devemos obter sua cor
- Várias técnicas podem ser usadas aqui
  - Sombreamento de _Phong_
  - Sombreamento de _Goraud_
  - Texturização etc.

    ![](images/texturizacao.png)

---
## Rasterização &gt;&gt; Fusão

- Do estágio anterior, podemos ter vários fragmentos por pixel (e.g.,
  triângulos sobrepostos)
- Neste estágio, todos os fragmentos de um pixel são combinados para se
  determinar a cor final do pixel (COLOR_BUFFER)
- Além disso, usa-se o valor do Z-buffer para determinar a visibilidade (ou a
  ordem) dos fragmentos (DEPTH_BUFFER)

---
## Rasterização &gt;&gt; Fusão

- Ao final do estágio, os pixels foram coloridos e temos a imagem renderizada
  na janela
- Um efeito indesejável que pode acontecer é que a tela do monitor pode ser
  atualizada no meio de uma operação de rasterização e a pintura dos pixels
  fica visível
  - Isso pode ser solucionado usando-se mais de um buffer
    - Double-buffer: front-buffer e back-buffer
    - Triple-bufer

---
# Referências

- Capítulo 2 do livro Real-Time Rendering
