# Modelagem de Objetos

---
# Objetivos

1. Parar de desenhar retângulos!!
1. Conhecer métodos para a representação de objetos complexos
1. Refletir sobre melhores formatos para armazenamento de objetos e para sua
   renderização

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

- Modelagem de Sólidos (década de 70).
  - Implícita ou explicitamente contém informações do fechamento e
    conectividade dos objetos
  - Garante a realização física.
  - Sistemas CAD-CAM utilizados pela indústria.

---
## Estado da Arte

- Modelagem de dimensão mista ou nonmanifold (década de 80)
  - Permite representar objetos com estruturas internas ou com elementos
    pendentes de dimensão inferior
  - Sólido delimitado por superfícies não necessariamente planas localmente
  - Ex.: ACIS (Spatial Technology) – AutoCad

---
## Paradigmas de Abstração

- A necessidade de paradigmas (Ari Requicha)
- Paradigma dos universos
  - Físico F
  - Matemático M
  - Representação R
  - Implementação I

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

- Assuma que um sólido é um conjunto tridimensional de pontos
- Conjuntos de pontos podem ser descritos
  - Por suas fronteiras
  - Por campos escalares
    - Definidos por equações
    - Amostrados
- Originam três tipos de representação:
  - Por bordo (B-rep – Boundary Representation)
  - Operações de conjuntos (CSG – Constructive Solid Geometry)
  - Por enumeração do espaço em células (BSP-trees, Octrees, etc)

---
# Representação por Bordo

- Sólido definido indiretamente através da superfície que o delimita
  - compacta (fechada e limitada)
  - sem bordo
- Superfícies são descritas parametricamente por um mapeamento chamado de
  parametrização:

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


---
# Referências

- Capítulo 3 do livro Real-Time Rendering
- Lições 5 e 8 das anotações do prof. David Mount
