# Geometria - Exercícios

---
# Roteiro

1. Produto Vetorial
1. Orientação
1. Mudança de Sistema de coordenadas
1. Exercícios

---
# Produto Vetorial

---
## Produto Vetorial

- Da geometria Euclidiana, permite achar um vetor perpendicular a outros dois
- Útil na construção de sistemas de coordenadas

  ![](../../images/prod-vetorial.png)
  ![](../../images/prod-vetorial-grafico.png)

---
## Produto Vetorial (cont.)

- Propriedades (assume-se <span class="math">u, v</span> linearmente independentes):
  - Antisimetria: <span class="math">u \times v = -v \times u</span>
  - Bilinearidade:
    - <span class="math">u \times (\alpha v) = \alpha (u \times v)</span>  e
    - <span class="math">u \times (v + w) = (u \times v) + (u \times w)</span>
  - <span class="math">u \times v</span> é perpendicular tanto a <span class="math">u</span> quanto a <span class="math">v</span>
  - O comprimento de <span class="math">u \times v</span> é igual a área do paralelogramo definido por  <span class="math">u</span> e <span class="math">v</span>, isto é, <span class="math">| u \times v | = | u | | v | \sin \theta</span>

---
# Orientação

---
## Orientação

- Orientação de 2 pontos em 1D
  - P1 < P2 , P1 = P2 ou P1 > P2
- Orientação de 3 pontos em 2D
  - O percurso P1 , P2 , P3  é feito no sentido dos ponteiros do relógio, no
    sentido contrário ou são colineares
- ![](../../images/orientacao.png)

---
## Orientação

- Orientação de 4 pontos em 3D
  - O percurso P1 , P2 , P3 , P4  está definido segundo a regra da mão direita,
    mão esquerda ou são coplanares

    ![](../../images/orientacao3d.png)

---
## Computando a orientação

- A orientação de n+1 pontos em um espaço n-dimensional é dado pelo **sinal
  do determinante da matriz** cujas colunas são as coordenadas homogêneas
  dos pontos **com o 1 vindo primeiro**

  ![](../../images/orientacao-comp.png)

---
# Mudança de Sistema de Coordenadas

---
## Sistema de Coordenadas (**revisão**)

- Um sistema de coordenadas para <span class="math">R^n</span> é definido por um ponto (origem) e <span class="math">n</span> vetores
- Por exmplo: Seja um sistema de coordenadas para <span class="math">R^2</span> definido pelo ponto <span class="math">O</span> e
  os vetores <span class="math">X</span> e <span class="math">Y</span>. Então,
  - Um ponto <span class="math">P</span> é dado por coordenadas <span class="math">x_P</span> e <span class="math">y_P</span> tais que

    <div class="math">P = x_P . X + y_P . Y + O</div>
  - Um vetor <span class="math">V</span> é dado por coordenadas <span class="math">x_V</span> e <span class="math">y_V</span> tais que

    <div class="math">V = x_V . X + y_V . Y</div>

---
## Mudança de Sistema

- Se estabelecemos um outro sistema (ex.: <span class="math">Q</span>/<span class="math">T</span>/<span class="math">U</span>), como computar as coordenadas
  nesse novo sistema?

  ![](../../images/coord-grafico.png)

---
## Mudança de Sistema (cont.)

- Como computar as coordenadas de um ponto <span class="math">P = (x_P, y_P)</span> em <span class="math">O</span>/<span class="math">X</span>/<span class="math">Y</span> dadas as
  coordenadas de <span class="math">P</span> em <span class="math">Q</span>/<span class="math">T</span>/<span class="math">U</span>, isto é, <span class="math">(t_P, u_P)</span>?

  ![](../../images/coord-eq3.png)
- Logo,

  ![](../../images/coord-eq4.png)

---
## Mudança de Sistema (cont.)

- Matricialmente:

  ![](../../images/coord-eq5.png)
- Usando coordenadas homogêneas:

  ![](../../images/coord-eq6.png)

---
## Mudança de Sistema (cont.)

- Para resolver o problema inverso:

  ![](../../images/coord-eq7.png)


---
# Referências

1. Lições 6 e 7 das anotações do prof. David Mount
