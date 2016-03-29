# Mudança de Base e Orientação

---
# Roteiro

1. Orientação
1. Produto Vetorial
1. Mudança de Sistema de Coordenadas
1. Exercícios

---
# Orientação

---
## Orientação

- Orientação de 2 pontos em 1D
  - <span class="math">P_1 < P_2</span>, <span class="math">P_1 = P_2</span> ou <span class="math">P_1 > P_2</span>
- Orientação de 3 pontos em 2D
  - O percurso <span class="math">P_1, P_2, P_3</span>  é feito no sentido dos ponteiros do relógio, no
    sentido contrário ou são colineares

    ![](../../images/orientacao.png)

---
## Orientação

- Orientação de 4 pontos em 3D
  - O percurso <span class="math">P_1, P_2, P_3, P_4</span>  está definido segundo a regra da mão direita,
    mão esquerda ou são coplanares

    ![](../../images/orientacao3d.png)

---
## Computando a orientação

- A orientação de <span class="math">n+1</span> pontos em um espaço n-dimensional é dado pelo **sinal
  do determinante da matriz** cujas colunas são as coordenadas homogêneas
  dos pontos **com o 1 vindo primeiro**

  ![](../../images/orientacao-comp.png)
- O OpenGL faz isto internamente para descobrir
  qual a orientação dos polígonos

---
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

- Propriedades (assume-se <span class="math">u</span>, <span class="math">v</span> linearmente independentes):
  - Antisimetria: <span class="math">u \times v = -v \times u</span>
  - Bilinearidade:
    - <span class="math">u \times (\alpha v) = \alpha (u \times v)</span>  e
    - <span class="math">u \times (v + w) = (u \times v) + (u \times w)</span>
  - <span class="math">u \times v</span> é perpendicular tanto a <span class="math">u</span> quanto a <span class="math">v</span>
  - O comprimento de <span class="math">u \times v</span> é igual a área do paralelogramo definido por  <span class="math">u</span> e <span class="math">v</span>, isto é, <span class="math">| u \times v | = | u | | v | \sin \theta</span>

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

  1. Defina <span class="math">P</span> como um ponto no sistema <span class="math">Q</span>/<span class="math">T</span>/<span class="math">U</span>
  1. Defina as componentes do sistema <span class="math">Q</span>/<span class="math">T</span>/<span class="math">U</span> no sistema <span class="math">O</span>/<span class="math">X</span>/<span class="math">Y</span>
  1. Fatore a fórmula de forma a isolar as componentes de <span class="math">O</span>/<span class="math">X</span>/<span class="math">Y</span>
  1. Você achou <span class="math">P = (x_P, y_P)</span> :)

---
## Algebricamente...

![](../../images/coord-eq3.png)

- Logo,

  ![](../../images/coord-eq4.png)

---
## Mudança de Sistema (cont.)

- ![right](../../images/coord-eq5.png)
  A equação anterior, vista **de forma matricial**:
- Usando **coordenadas homogêneas**, podemos usar
  **apenas uma multiplicação** de matriz com vetor:

  ![](../../images/coord-eq6.png)
- Ou seja, dadas as coordenadas de um ponto ou vetor em um sistema Q/T/U, podemos **achar suas coordenadas em um sistema O/X/Y <u>multiplicando as coordenadas por uma matriz</u>**

---
## Mudança de Sistema (cont.)

- Se quiser passar uma coordenada do sistema O/X/Y para Q/T/U, basta **resolver o problema inverso**:

  ![](../../images/coord-eq7.png)

---
## Exemplo Concreto

- Considere que:
  - <span class="math">P[Q/T/U] = (2.5, 1)</span>
  - Sistema <span class="math">Q/T/U</span> dado em <span class="math">O/X/Y</span>:
    - <span class="math">Q[O/X/Y]= (3.5, 1.25)</span>
    - <span class="math">T[O/X/Y]= (-1, 0.25)</span>
    - <span class="math">U[O/X/Y]= (-0.25, -1)</span>
- Calcule as coordenadas de <span class="math">P</span> no sistema <span class="math">O/X/Y</span>.

---
## Resolvendo o Exercício

- Matriz de mudança de sistemas de coordenadas:

  ![](../../images/coord-eq6.png)

- Materializando para o <span class="math">P</span>

  <div class="math">\begin{bmatrix}x_P\\\y_P\\\1\end{bmatrix}=\begin{bmatrix}-1&-0.25&3.5\\\0.25&-1&1.25\\\0&0&1\end{bmatrix} \cdot \begin{bmatrix}2.5\\\1\\\1\end{bmatrix}</div>
- Resultado: <span class="math">P[O/X/Y] = (0.75, 0.875)</span>

---
# Referências

1. Lições 6 e 7 das anotações do prof. David Mount
