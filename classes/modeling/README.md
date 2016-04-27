# Modelagem de Objetos

---
# Objetivos

1. Parar de desenhar retângulos :)
1. Conhecer algumas formas para a representação de objetos complexos
1. Refletir sobre melhores formatos para armazenamento de objetos e para sua
   renderização

---
# Motivação

![](../../images/obj-vaca.png)

---
## Um arquivo .obj

1. Vamos instalar o **programa "Obj Model Viewer"**
1. **Abrir um modelo** descrito em um arquivo `.obj`
1. Após visualizar o modelo, vamos **abrir** o arquivo `.obj` **usando um
   editor de texto** e entender o que está acontencendo ali

---
## Histórico

- Modelagem por arames (_wireframes_)
  - ![right](../../images/wireframe-ambiguous.png)
    Representa os objetos por arestas e pontos sobre a sua superfície
  - Gera **modelos ambíguos**
  - Ainda é usado como uma forma barata para visualização (mas não para
    representação)

---
## Histórico

- Modelagem por **superfícies** (década de 60)
  - Fornece a descrição matemática das superfícies que delimitam o objeto
  - Poucos testes de integridade do modelo
- Modelagem de **sólidos** (década de 70)
  - Implícita ou explicitamente contém informações do fechamento e
    conectividade dos objetos
  - Garante a realização física
  - Sistemas <abbr title="Computer Aided Design">CAD</abbr>-
    <abbr title="Computer Aided Manufacture">CAM</abbr>
    utilizados pela indústria

---
## Paradigmas de Abstração

![](../../images/paradigma-universos.png)

- Paradigma dos universos
  - Físico F
  - Matemático M
  - Representação R
  - Implementação I

---
<!--
backdrop: paradigma-universos
-->

## Do mundo físico (real) ao mundo matemático

![](../../images/paradigmas-real-matematico.png)

---
<!--
backdrop: paradigma-universos
-->

## Paradigma dos Universos

- FÍSICO
  - Contém **objetos do mundo real** que pretendemos estudar
- MATEMÁTICO
  - Contém uma **descrição abstrata** dos objetos do mundo físico
- REPRESENTAÇÃO
  - Constituído por **representações simbólicas e finitas** associadas a
    objetos do universo matemático
- IMPLEMENTAÇÃO
  - Associamos às descrições simbólicas e finitas do universo de
    representação com **estrutura de dados**, com a finalidade de se
    obter uma representação do objeto no computador
- Vamos focar nos universos da **REPRESENTAÇÃO** e da **IMPLEMENTAÇÃO**

---
<!--
backdrop: paradigma-universos
-->

## Problemas da Área

- Estudar fenômenos em F
- Estudar as relações entre R e M
- Definir representações de modelos em M
- Estudar conversões entre representações R
- Definir métodos de implementação I
- Comparar estratégias em I

---
<!--
backdrop: paradigma-universos
-->

# Representação

---
<!--
backdrop: paradigma-universos
-->

## Tipos de **Representação**

- Pontos
- Curvas
- **Superfícies e Sólidos**
  - Um sólido é uma superfície que é (ou tenta ser) fechada
- Volumes
  - Exemplo de "Sólido _vs_ Volume": **Cubo**
    - Superfície = 6 quadriláteros
      - <span class="math">(0,0,0)(0,0,1)(0,1,1)...</span>
    - Volume = espaço interno
      - <span class="math">0 \leq x,y,z \leq 1</span>

---
## Descrição dos **Sólidos**

- Assuma que um **sólido é um conjunto tridimensional de pontos**
- Conjuntos de pontos podem ser descritos
  - Por suas fronteiras (superfícies)
  - Por composição de sólidos mais simples
  - Por um conjunto de escalares
    - Definidos por equações
    - Amostrados
- Originam três tipos de representação:
  - Por bordo ou fronteira (B-rep – _Boundary Representation_)
  - Operações de conjuntos (CSG – _Constructive Solid Geometry_)
  - Por particionamento do espaço (_BSP-trees_, _Octrees_, etc.)

---
## Representação Linear por Partes

- <img src="../../images/esfera-triangulada.png" style="float: right; margin-left: 20px">
  Superfície parametrizada com geometria complexa pode ser aproximada por uma
  superfície linear por partes
- Pode-se particionar o domínio da parametrização por um conjunto de polígonos
  - Tipicamente **usamos triângulos** (todos os vértices no mesmo plano)
  - Os triângulos formam um **lado de dentro e um de fora**
  - Devemos **usar uma orientação consistente**: _e.g._, sempre CW ou sempre CCW
- Abordagens: (a) sopa de polígonos e (b) malha poligonal

---
## Sopa de Polígonos

- ![right](../../images/polygon-soup1.png)
  Organização aleatória (caos)
- Não estruturado (`GL_TRIANGLES`)
  – A única ordem garantida é de lado de dentro/fora
- Não contém informação sobre a conectividade dos triângulos
- Muita informação (vértices) redundante

---
## _Pros/Cons_ da Sopa de Polígonos

- ![right](../../images/polygon-soup2.png)
  Vantagens:
  - Fácil de implementar
- Problemas:
  - Redundância
  - Sem conectividade
  - Difícil editar/transformar
  - Risco de _cracking_

---
## Malhas Poligonais

- Do inglês _polygonal mesh_ ou apenas **_mesh_**
- Gera uma malha poligonal, definida por um (a) conjunto de vértices, um (b)
  conjunto de arestas e um (c) conjunto de faces
  - Cada aresta é compartilhada por no máximo duas faces
  - A interseção de duas faces é uma aresta, um vértice ou vazia
- Adjacência de vértices, arestas e faces é chamada de **topologia** da superfície

---
## Malhas Uniformes

- ![right](../../images/mesh1.png)
  _grids_, **_fans_**, **_strips_**
  - Conectividade é implícita
  - Muito eficiente
  - Processamento fácil
  - Evita transformações redundantes

---
## Decomposição Poligonal

![](../../images/malhas-poligonais.png)

---
## Operações sobre Malhas Poligonais

- <img src="../../images/malha-arestas.png" style="float: right; margin-left: 20px">
  **Desenhar a malha**
- Achar todas as arestas que incidem em um vértice
- Achar as faces que incidem numa aresta ou vértice
- Achar as arestas na fronteira de uma face

---
# Implementação

---
## Tipos de **Codificação de Malhas**

1. Explícita
1. Ponteiros para lista de vértices
1. Ponteiros para lista de arestas
1. _Winged-Edge_ (_Half-Edge_, _Face-Edge_)
1. ~~Quad-Edge (Guibas-Stolfi)~~
1. ~~Radial-Edge~~

---
## (1) Codificação Explícita

- A **mais simples**
- **Cada face** armazena explicitamente a **lista ordenada das coordenadas dos
  seus vértices**:
  <div class="math">P={(x_1,y_1,z_1),(x_2,y_2,z_2),\cdots,(x_n,y_n,z_n)}</div>
- Muita redundância de informação
- Consultas são complicadas
  - Obriga a execução de algoritmos geométricos para determinar adjacências
    entre faces, arestas ou mesmo vértices

---
## (2) Ponteiros para Lista de Vértices

- Vértices são armazenados separadamente em uma lista (ou _array_). _E.g._:
  ```c
  struct vertice { float x,y,z };
  typedef struct vertice listaVertices[];  
  ```
- Faces referenciam seus vértices através de ponteiros
  ```c
  struct face {
    struct vertice * v1, * v2, * v3;
  };
  typedef struct face listaFaces[];
  ```

---
## Exemplo de **(2) Ponteiros para Lista de Vértices**

![](../../images/malha-ponteiro-lista-vertices.png)

- <span class="math">V = \left\\{ V_1 = (x_1, y_1, z_1), V_2 = (x_2, y_2, z_2), \cdots, V_4 = (x_4, y_4, z_4) \\right\\}</span>
- <span class="math">P_1 = \left\\{ V_1, V_2, V_4 \\right\\}</span>
- <span class="math">P_2 = \\left\\{ V_4, V_2, V_3 \\right\\}</span>

---
## _Pros/Cons_ (2) Ponteiros para Lista de Vértices

- Vantagens:
  - Proporciona maior economia de memória
- Desvantagens:
  - Achar adjacências ainda é complicado
  - Arestas ainda são desenhadas duas vezes

---
## (3) Ponteiros para Lista de Arestas

- Há também uma lista de arestas
  ```c
  typedef struct aresta listaArestas[];
  ```
- Faces referenciam as suas arestas através de ponteiros
- Arestas são desenhadas percorrendo-se a lista de arestas
- Introduzem-se referências para as duas faces que compartilham uma aresta
  ```c
  struct aresta {
    struct vertice * v1, * v2;
    struct face * f1, * f2;
  }
  ```
  - Facilita a determinação das duas faces incidentes na aresta

---
## Exemplo de **(3) Ponteiros para Lista de Arestas**

- <span class="math">V = \left\\{ V_1 = (x_1, y_1, z_1), V_2 = (x_2, y_2, z_2), ..., V_4 = (x_4, y_4, z_4) \\right\\}</span>
- <img src="../../images/malha-ponteiro-lista-vertices.png" style="float: right; margin-left: 20px; cursor: crosshair">
  <span class="math">E_1 = \left\\{ V_1, V_2, P_1, \lambda \\right\\}</span>
- <span class="math">E_2 = \left\\{ V_2, V_3, P_2, \lambda \\right\\}</span>
- <span class="math">E_3 = \left\\{ V_3, V_4, P_2, \lambda \\right\\}</span>
- <span class="math">E_4 = \left\\{ V_2, V_4, P_1, P_2 \\right\\}</span>
- <span class="math">E_5 = \left\\{ V_4, V_1, P_1, \lambda \\right\\}</span>
- <span class="math">P_1 = \left\\{ E_1, E_4, E_5 \\right\\}</span>
- <span class="math">P_2 = \\left\\{ E_2, E_3, E_4 \\right\\}</span>

---
## _Pros/Cons_ (3) Ponteiros para Lista de Arestas

- Vantagens:
  - Não desenha arestas duas vezes
  - Fácil achar adjacência entre vértices
- Desvantagens:
  - Achar adjacências ainda é complicado:
    - <q>Me dê todas as arestas adjacentes a <span class="math">E_1</span></q>
      - É necessário percorrer todas as arestas para fazê-lo:
        <span class="math">O(E)</span>
    - <q>Me dê todas as faces adjacentes a <span class="math">V_1</span></q>
      - Para cada face, visitar cada aresta e ver se o vértice está lá:
        <span class="math">O(F\*3\*2) = O(6F) = O(F)</span>
---
## (4) _Winged-Edge_ (Aresta Alada)

![](../../images/malha-aresta-alada.png)

---
## (4) _Winged-Edge_ (cont.)

- Criada em 1974 por Baumgart
- Foi um marco na representação por fronteira
- Armazena informação na estrutura associada às arestas (número de campos é fixo)
- Todos os 9 tipos de adjacência entre vértices, arestas e faces
  são determinados em tempo constante
- Atualizada com o uso de operadores de Euler, que garantem: V – A + F = 2
  - V: número de vértices
  - A: número de arestas
  - F: número de faces

---
## 9 tipos de Relacionamentos de Adjacência

![](../../images/malha-aresta-alada-2.png)

---
## Exemplo

[![](../../images/winged-edge-example.jpg)](../../images/winged-edge-example-big.jpg)

---
# Representação <abbr title="Constructive Solid Geometry">CSG</abbr>

---
## _Constructive Solid Geometry_

- Operações CSG definem objetos através de operações regularizadas de
  conjuntos de pontos
  - União, Interseção e Diferença
- Possibilita uma codificação bastante simples e concisa
- Requer mais computação para renderizar do que _b-rep_

  ![](../../images/csg-exemplo.png)

---
## Codificação do CSG: Árvore

- <img src="../../images/csg-exemplo2.png" style="float:right;margin-left:20px;">
  Um modelo CSG é codificado por uma árvore
  - Os **nós internos** contêm **operações** de conjunto ou transformações
    lineares afim
  - **Folhas** contêm objetos **primitivos**
    - Cubóides, cilindros, prismas, pirâmides, esferas, cones etc.

---
## Exemplo: SolidWorks

![](../../images/csg-solidworks.png)

---
## Exemplo _divertido_: o jogo Spore

![](../../images/spore-creature-creator.jpg)

---
# Representações por Células

---
## Representações por Células

- Dividem o espaço em sub-regiões convexas
  - **Grades**: Cubos de tamanho igual
  - **_Octrees_**: Cubos cujos lados são potências de 2 (1980)
  - _BSP-trees_: Poliedros convexos

<!--
- Às células são atribuídas valores de um campo escalar F(x, y, z)
  - Campo é assumido constante dentro de cada célula
- Sólido é definido como o conjunto de pontos tais que A < F(x, y, z) < B
  para valores A e B estipulados
-->

---
## Grids vs Quadtrees (2D)

![](../../images/grid-vs-quadtrees.png)

- Objeto bidimensional (esquerda), sua representação usando um grid (centro)
  e sua representação usando uma quadtree (direita)

---
## Representação de uma **Quadtree** (2D)

![](../../images/quadtree-representacao.png)

- Neste exemplo, o objeto é formado apenas por um ponto (vinho)

---
## Representação de uma **Quadtree** (2D) - cont.

- ![right](../../images/quadtree-exemplo-complexo.png)
  Mais um exemplo de quadtree
- Uma **árvore quaternária** pode ser usada para representar uma quadtree
- Apenas os quadrantes que possuem subquadrantes terão nós filhos (i.e.,
  ocuparão espaço na memória)

---
## Octrees

- São úteis para a visualização de objetos que podem ser particionados:
  - <img src="../../images/octree-medical.png" style="float:right;margin-left:20px;">
    Imagens médicas
  - <img src="../../images/volumetric-cup.png" style="float:right;margin-left:20px;">
    Imagens obtidas por meio de sensores de densidade
- Cada elemeto de um quadrante em um _grid_ é chamado de **voxel**

---
## Voxels

![](../../images/octree-minecraft.png)

- Um **voxel** representa um valor em um _grid_ tridimensional
  - Pixel = _picture element_; Voxel = _volume element_

---
## Exemplos

![](../../images/octree-dragon.png)

---
# Representação Fractal

---
## Fractais

![](../../images/benoit-mandelbrot.png)

- Benoit Mandelbrot:
  <blockquote>“Clouds are not spheres, mountains are 	not cones, coastlines are not circles and 	bark is not smooth, nor does lightning 	travel in a straight line.”</blockquote>

---
## Fractais... mais nos próximos capítulos

![](../../images/fractal-samambaia.png)

---
# Referências

- Capítulo 13 do livro Computer Graphics with OpenGL, 4th edition
