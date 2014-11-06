# Modelagem de Objetos

---
# Objetivos

1. Parar de desenhar retângulos :)
1. Conhecer métodos para a representação de objetos complexos
1. Refletir sobre melhores formatos para armazenamento de objetos e para sua
   renderização

---
# Motivação

![](images/obj-vaca.png)

---
## Histórico

- Modelagem por arames (_wireframes_)
  - Representa os objetos por arestas e pontos sobre a sua superfície
  - Gera modelos ambíguos
- Modelagem por superfícies (década de 60)
  - Fornece a descrição matemática das superfícies que delimitam o objeto
  - Poucos testes de integridade do modelo.

---
## Histórico

- Modelagem de Sólidos (década de 70)
  - Implícita ou explicitamente contém informações do fechamento e
    conectividade dos objetos
  - Garante a realização física
  - Sistemas <abbr title="Computer Aided Design">CAD</abbr>-<abbr title="Computer Aided Manufacture">CAM</abbr> utilizados pela indústria

---
## Paradigmas de Abstração

- A necessidade de paradigmas (Ari Requicha)

  ![](images/paradigma-universos.png)
- Paradigma dos universos
  - Físico F
  - Matemático M
  - Representação R
  - Implementação I

---
## Paradigma dos Universos

- FÍSICO
  - Contém objetos do mundo real que  pretendemos estudar
- MATEMÁTICO
  - Contém uma descrição abstrata  dos objetos do mundo físico
- REPRESENTAÇÃO
  - Constituído por representações simbólicas e finitas associadas a objetos do universo matemático
- IMPLEMENTAÇÃO
  - Associamos às descrições simbólicas e finitas do universo de representação com estrutura de dados, com a finalidade de se obter uma representação do objeto no computador

---
## Do mundo físico (real) ao mundo matemático

![](images/paradigmas-real-matematico.png)

---
## Problemas da Área

- Estudar fenômenos em F
- Definir os modelos
- Estudar as relações entre R e M
- Definir representações de modelos em M
- Estudar conversões entre representações
- Definir métodos de implementação
- Comparar estratégias em I

---
## Esquemas de Representação

- Objetos do universo físico: "sólidos"
  - O que é um sólido?
- Objetos do universo matemático vêm da:
  - Geometria diferencial
  - Topologia diferencia

---
## Geometria pode ser complicada

![](images/geometria-complicada.png)

---
## Descrição dos sólidos

- Assuma que um **sólido é um conjunto tridimensional de pontos**
- Conjuntos de pontos podem ser descritos
  - Por suas fronteiras
  - Por campos escalares
    - Definidos por equações
    - Amostrados
- Originam três tipos de representação:
  - Por bordo ou fronteira (B-rep – _Boundary Representation_)
  - Operações de conjuntos (CSG – _Constructive Solid Geometry_)
  - Por enumeração do espaço em células (_BSP-trees_, _Octrees_, etc.)

---
# Representação por Bordo

- Sólido definido indiretamente **através da superfície que o delimita**
  - compacta (fechada e limitada)
- Superfícies são descritas parametricamente por um mapeamento chamado de parametrização:

  ![](images/eq-parametrizacao-superficies.png)

---
## Parametrização

- Estabelece um sistema de coordenadas sobre a superfície herdado de um
  sistema de coordenadas no plano

  ![](images/eq-curva-aproximada.png)
- Em geral, não é possível cobrir (descrever) toda a superfície com uma
  única parametrização.
  - Usam-se várias parametrizações que formam um Atlas

---
## Parametrização de uma Superfície

![](images/aprox-superficies.png)

---
## Parametrizações Válidas

- <img src="images/parametrizacoes-validas.png" style="float: right; margin-left: 20px">
  Sólido deve estar bem definido
  - Superfície sem autointerseção
  - Vetor normal não se anula sobre a superfície
- Normal é usada para determinar o interior e o exterior do sólido

---
## Exemplo

- Parametrização da esfera de raio 1, centrada na origem

  ![](images/parametrizacao-esfera.png)
- Se &phi; = &pi; ou &phi; = 0 a normal não está definida nos pólos por esta
  parametrização

---
## Domínio do Exemplo Anterior

- <img src="images/parametrizacao-esfera2.png" style="float: right; margin-left: 20px">
  Toda parametrização da esfera deixa pelo menos um ponto de fora
- É impossível mapear continuamente a esfera no plano sem retirar pelo menos
  um ponto

![](images/parametrizacao-esfera3.png)

---
## Parametrização do Círculo

- <img src="images/parametrizacao-circulo.png" style="float: right; margin-left: 20px">
  Forma implícita
  - y = tx + t
  - x<sup>2</sup> + y<sup>2</sup> = 1
- Resolvendo esse sistema, chega-se a uma parametrização alternativa do círculo

![](images/parametrizacao-circulo2.png)

---
## Representação Linear por Partes

- <img src="images/esfera-triangulada.png" style="float: right; margin-left: 20px">
  Superfície parametrizada com geometria complexa pode ser aproximada por uma
  superfície linear por partes
- Pode-se particionar o domínio da parametrização por um conjunto de polígonos
  - Cada vértice no domínio poligonal é levado para a superfície pela
    parametrização
  - Em seguida é ligado aos vértices adjacentes mantendo as conectividades do
    domínio

---
## Propriedades

- Gera uma malha poligonal, definida por um conjunto de vértices, arestas e
  faces
  - Cada aresta é compartilhada por no máximo duas faces
  - A interseção de duas faces é uma aresta, um vértice ou vazia
- Adjacência de vértices, arestas e faces é chamada de topologia da superfície

---
## Decomposição Poligonal

![](images/malhas-poligonais.png)

---
## Operações sobre Malhas Poligonais

- <img src="images/malha-arestas.png" style="float: right; margin-left: 20px">
  Desenhar a malha
- Achar todas as arestas que incidem em um vértice
- Achar as faces que incidem numa aresta ou vértice
- Achar as arestas na fronteira de uma face

---
# Codificação

---
## Tipos de Codificação

- Explícita
- Ponteiros para lista de vértices
- Ponteiros para lista de arestas
- Winged-Edge (Half-Edge, Face-Edge)
- Quad-Edge (Guibas-Stolfi)
- Radial-Edge

---
## Codificação Explícita

- A **mais simples**
- Cada face armazena explicitamente a lista ordenada das coordenadas dos seus
  vértices:

  ![](images/malha-cod-explicita.png)
- Muita redundância de informação
- Consultas são complicadas
  - Obriga a execução de algoritmos geométricos para determinar adjacências

---
## Ponteiros para Lista de Vértices

- Vértices são armazenados separadamente
- Há uma lista de vértices
- Faces referenciam seus vértices através de ponteiros
- Proporciona maior economia de memória
- Achar adjacências ainda é complicado
- Arestas ainda são desenhadas duas vezes

---
## Exemplo de **Ponteiros para Lista de Vértices**

![](images/malha-ponteiro-lista-vertices.png)

- V = { V<sub>1</sub> = (x<sub>1</sub>, y<sub>1</sub>, z<sub>1</sub>), V<sub>2</sub> = (x<sub>2</sub>, y<sub>2</sub>, z<sub>2</sub>), V<sub>3</sub> = (x<sub>3</sub>, y<sub>3</sub>, z<sub>3</sub>), V<sub>4</sub> = (x<sub>4</sub>, y<sub>4</sub>, z<sub>4</sub>) }
- P<sub>1</sub> = { V<sub>1</sub>, V<sub>2</sub>, V<sub>4</sub> }
- P<sub>2</sub> = { V<sub>4</sub>, V<sub>2</sub>, V<sub>3</sub> }

---
## Ponteiros para Lista de Arestas

- Há também uma lista de arestas
- Faces referenciam as suas arestas através de ponteiros
- Arestas são desenhadas percorrendo-se a lista de arestas
- Introduzem-se referências para as duas faces que compartilham uma aresta
  - Facilita a determinação das duas faces incidentes na aresta

---
## Exemplo de **Ponteiros para Lista de Arestas**

- V = { V<sub>1</sub> = (x<sub>1</sub>, y<sub>1</sub>, z<sub>1</sub>), V<sub>2</sub> = (x<sub>2</sub>, y<sub>2</sub>, z<sub>2</sub>), V<sub>3</sub> = (x<sub>3</sub>, y<sub>3</sub>, z<sub>3</sub>), V<sub>4</sub> = (x<sub>4</sub>, y<sub>4</sub>, z<sub>4</sub>) }
- <img src="images/malha-ponteiro-lista-vertices.png" style="float: right; margin-left: 20px; cursor: crosshair">
  E<sub>1</sub> = { V<sub>1</sub>, V<sub>2</sub>, P<sub>1</sub>, &lambda; }
- E<sub>2</sub> = { V<sub>2</sub>, V<sub>3</sub>, P<sub>2</sub>, &lambda; }
- E<sub>3</sub> = { V<sub>3</sub>, V<sub>4</sub>, P<sub>2</sub>, &lambda; }
- E<sub>4</sub> = { V<sub>2</sub>, V<sub>4</sub>, P<sub>1</sub>, P<sub>2</sub> }
- E<sub>5</sub> = { V<sub>4</sub>, V<sub>1</sub>, P<sub>1</sub>, &lambda; }
- P<sub>1</sub> = { E<sub>1</sub>, E<sub>4</sub>, E<sub>5</sub> }
- P<sub>2</sub> = { E<sub>2</sub>, E<sub>3</sub>, E<sub>4</sub> }

---
## _Winged-Edge_ (Aresta Alada)

![](images/malha-aresta-alada.png)

---
## _Winged-Edge_ (cont.)

- Criada em 1974 por Baumgart
- Foi um marco na representação por fronteira
- Armazena informação na estrutura associada às arestas (número de campos é fixo)
- Todos os 9 tipos de adjacência entre vértices, arestas e faces são determinados em tempo constante
- Atualizada com o uso de operadores de Euler, que garantem: V – A + F = 2
  - V: número de vértices
  - A: número de arestas
  - F: número de faces

---
## Exemplo

[![](images/winged-edge-example.jpg)](images/winged-edge-example-big.jpg)

---
## 9 tipos de Relacionamentos de Adjacência

![](images/malha-aresta-alada-2.png)
