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

  <span class="math">
    Or_2(P_1,P_2,P_3)=sign\left(\begin{vmatrix}1&1&1\\\x_1&x_2&x_3\\\y_1&y_2&y_3\end{vmatrix}\right)
  </span>
  <span class="math">
    Or_3(P_1,P_2,P_3,P_4)=sign\left(\begin{vmatrix}1&1&1&1\\\x_1&x_2&x_3&x_4\\\y_1&y_2&y_3&y_4\\\z_1&z_2&z_3&z_4\end{vmatrix}\right)
  </span>
- O OpenGL faz isto internamente para descobrir
  qual a orientação dos polígonos

---
# Produto Vetorial

---
## Produto Vetorial

- Da geometria Euclidiana, permite achar um vetor perpendicular a outros dois
- ![right](../../images/prod-vetorial-grafico.png)
  Útil na construção de sistemas de coordenadas
  <div class="math" style="display: inline-block;">
    \vec{u} \times \vec{v} = \begin{bmatrix}u_y v_z - u_z v_y\\\u_z v_x - u_x v_z\\\u_x v_y - u_y v_x\end{bmatrix}
  </div>

---
## Produto Vetorial (cont.)

- Propriedades (assume-se <span class="math">\vec{u}</span>, <span class="math">\vec{v}</span> linearmente independentes):
  - Antisimetria: <span class="math">\vec{u} \times \vec{v} = -\vec{v} \times \vec{u}</span>
  - Bilinearidade:
    - <span class="math">\vec{u} \times (\alpha \vec{v}) = \alpha (\vec{u} \times \vec{v})</span>  e
    - <span class="math">\vec{u} \times (\vec{v} + \vec{w}) = (\vec{u} \times \vec{v}) + (\vec{u} \times \vec{w})</span>
  - <span class="math">\vec{u} \times \vec{v}</span> é perpendicular tanto a <span class="math">\vec{u}</span> quanto a <span class="math">\vec{v}</span>
  - O comprimento de <span class="math">\vec{u} \times \vec{v}</span> é igual a área do paralelogramo definido por  <span class="math">\vec{u}</span> e <span class="math">\vec{v}</span>, isto é, <span class="math">\lVert \vec{u} \times \vec{v} \rVert = \lVert \vec{u} \rVert \lVert \vec{v} \rVert \sin \theta</span>

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

- Se estabelecemos um outro sistema (ex.: <span class="math">Q</span>/
  <span class="math">T</span>/<span class="math">U</span>), como computar
  as coordenadas nesse novo sistema?

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

<style>
.steps-base-change {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  counter-reset: step;
}
.steps-base-change > li::before {
  counter-increment: step;
  content: "Passo " counter(step);
  counter-increment: step;
  content: "Passo " counter(step);
  font-size: 0.6em;
  background: orange;
  border-radius: 0.25em;
  padding: 0em 0.5em;
  color: white;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.25);
  display: block;
  width: 4em;
  line-height: 2em;
}
.steps-base-change > li:nth-of-type(1),
.steps-base-change > li:nth-of-type(2) {
  justify-content: space-between;
  width: 50%;
}
.steps-base-change > li:nth-of-type(3),
.steps-base-change > li:nth-of-type(4) {
  width: 100%;
}
.steps-base-change > li:nth-of-type(2) {
  text-align: left;
}
</style>

<ul class="steps-base-change">
  <li>
    <span class="math bullet">P[Q]=t_P T + u_P U + Q</span>
  </li>
  <li>
    <span class="math bullet">\color{red}{Q[O]}=x_Q X + y_Q Y + O</span><br>
    <span class="math bullet">\color{blue}{T[O]}=x_T X + y_T Y</span><br>
    <span class="math bullet">\color{green}{U[O]}=x_U X + y_U Y</span>
  </li>
  <li>
    <span class="math bullet">=t_P \color{blue}{\left(x_T X + y_T Y\right)} + u_P \color{green}{\left(x_U X + y_U Y\right)} + \color{red}{\left(x_Q X + y_Q Y + O\right)}</span>
    <span class="math bullet">=X \left(t_P x_T + u_P x_U + x_Q\right) + Y \left(t_P y_T + u_P y_U + y_Q\right) + O</span>
  </li>
  <li>
    <div class="math bullet">x_P=t_P x_T + u_P x_U + x_Q</div>
    <div class="math bullet">y_P=t_P y_T + u_P y_U + y_Q</div>
  </li>
</ul>

---
## Mudança de Sistema (cont.)

- <div class="math" style="float: right;">
    \begin{bmatrix}x_P\\\y_P\end{bmatrix}=
    \begin{bmatrix}x_T&x_U\\\y_T&y_U\end{bmatrix}\times
    \begin{bmatrix}t_P\\\u_P\end{bmatrix}+
    \begin{bmatrix}x_Q\\\y_Q\end{bmatrix}
  </div>
  A equação anterior, vista **de forma matricial**:
- Usando **coordenadas homogêneas**, podemos usar
  **apenas uma multiplicação** de matriz com vetor:

  <div class="math">
    \begin{bmatrix}x_P\\\y_P\\\1\end{bmatrix}=
    \begin{bmatrix}x_T&x_U&x_Q\\\y_T&y_U&y_Q\\\0&0&1\end{bmatrix}\times
    \begin{bmatrix}t_P\\\u_P\\\1\end{bmatrix}
  </div>
- Ou seja, dadas as coordenadas de um ponto ou vetor em um sistema Q/T/U,
  podemos **achar suas coordenadas em um sistema O/X/Y <u>multiplicando as
  coordenadas por uma matriz</u>**

---
## Mudança de Sistema (cont.)

- Se quiser passar uma coordenada do sistema O/X/Y para Q/T/U, basta
  **resolver o problema inverso**:

  <div class="math">
    \begin{bmatrix}x_P\\\y_P\\\1\end{bmatrix}=
    \begin{bmatrix}x_T&x_U&x_Q\\\y_T&y_U&y_Q\\\0&0&1\end{bmatrix}^{-1}\times
    \begin{bmatrix}t_P\\\u_P\\\1\end{bmatrix}
  </div>

---
## Exemplo Concreto

- Considere que:
  - <span class="math">P[Q] = (2.5, 1)</span>
  - Sistema <span class="math">Q/T/U</span> dado em
    <span class="math">O/X/Y</span>:
    - <span class="math">Q[O]= (3.5, 1.25)</span>
    - <span class="math">T[O]= (-1, 0.25)</span>
    - <span class="math">U[O]= (-0.25, -1)</span>
- Calcule as coordenadas de <span class="math">P</span> no sistema
  <span class="math">O/X/Y</span>.

---
## Resolvendo o Exercício

- Matriz de mudança de sistemas de coordenadas:
  <div class="math">
    \begin{bmatrix}x_P\\\y_P\\\1\end{bmatrix}=
    \begin{bmatrix}x_T&x_U&x_Q\\\y_T&y_U&y_Q\\\0&0&1\end{bmatrix}\times
    \begin{bmatrix}t_P\\\u_P\\\1\end{bmatrix}
  </div>
- Materializando para o <span class="math">P</span>
  <div class="math">\begin{bmatrix}x_P\\\y_P\\\1\end{bmatrix}=\begin{bmatrix}-1&-0.25&3.5\\\0.25&-1&1.25\\\0&0&1\end{bmatrix} \cdot \begin{bmatrix}2.5\\\1\\\1\end{bmatrix}</div>
- Resultado: <span class="math">P[O] = (0.75, 0.875)</span>

---
# Referências

1. Lições 6 e 7 das anotações do prof. David Mount
