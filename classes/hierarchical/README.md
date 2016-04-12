# Composição de Transformações
## +
# Modelagem Hieráquica
---
# Objetivos

1. Entender como compor transformações
1. Entender a (grande) utilidade das pilhas de matrizes em OpenGL

---
# Composição de Transformações

---
## Composição de Transformações

- Frequentemente é necessário fazer várias transformações
  geométricas para posicionar objetos
  - Exemplo: combinação de rotações e translações
- A **ordem** com que transformações são aplicadas importa
  - Multiplicação de matrizes não é comutativa

    ![](../../images/composicao-transformacoes-grafico-1.png)

---
## Exemplo

- Translação (5,0) e depois rotação (60°) ou
- Rotação (60°) e depois translação (5,0)?
- Rotação e depois translação!!  

<figure style="position: relative;width:100%;height:100px;left:50%;margin-left:-50px">
  <img src="../../images/composicao-transformacoes-grafico-1.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
  <img src="../../images/composicao-transformacoes-grafico-2.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
</figure>

---
## Compondo transformações

- Vamos considerar uma transformação genérica de um ponto

  ![](../../images/transformacao-equacao.png)

---
## Compondo transformações - concatenação

- Há duas formas de se concatenar duas matrizes de transformação
  1. Pré-multiplicação
  1. Pós-multiplicação
- Pré-multiplicação é multiplicar a nova matriz (<span class="math">B</span>) **à esquerda** da
  matriz existente (<span class="math">A</span>) para receber o resultado (<span class="math">C</span>):
  - <span class="math">C = B * A</span>
- Pós-multiplicação é multiplicar a nova matriz (<span class="math">B</span>) **à direita** da
  matriz existente (<span class="math">A</span>) para receber o resultado (<span class="math">C</span>):
  - <span class="math">C = A * B</span>
- Qual forma usar **depende de como você prefere pensar**
  - O OpenGL usa **pós-multiplicação**

---
# Marotinho: [Transformação em OpenGL](https://moodle.cefetmg.br/mod/quiz/view.php?id=18346)

---
## Duas formas de se pensar

- Como você pensa na composição é a forma de determinar como
  você deveria concatenar as matrizes (pré ou pós)
- Ambas as formas funcionam mas, dependendo da situação, uma forma
  pode ser mais conveniente que a outra

  ![](../../images/composicao-2-formas.png)

---
## Transformando em relação ao **sistema global**

- Tudo que é feito é relativo à origem e a base do sistema
  de coordenadas global (do mundo)

  ![](../../images/composicao-global-exemplo.png)
- Neste caso, **pré-multplicamos** as matrizes para encontrar a
  composta (<span class="math">M</span>):
  - <span class="math">M = S * T * R</span>

---
## Transformando em relação ao **sistema local**

- Tudo que é feito altera a posição e orientação do
  sistema de coordenadas local

  ![](../../images/composicao-local-exemplo.png)
- Neste caso, **pós-multplicamos** as matrizes para encontrar a
  composta (<span class="math">M</span>):
  - <span class="math">M = R * T * S</span>

---
## Qual forma devo usar?

- As duas formas funcionam, então é uma questão de decisão
- Os dois métodos darão a sequência de transformação na ordem inversa
- Normalmente é mais fácil controlar o objeto pensando nas
  transformações como **alterando o sistema de coordenadas local**
  - O OpenGL funciona com **pós-multiplicação**, então é mais
    fácil pensar assim

---
## Pós-multiplicação em OpenGL

- Para cada nova matriz de transformação, o OpenGL a pós-multiplica com
  a matriz no topo da pilha corrente:
  - <span class="math">M' = M * T_{nova}</span>
  - <span class="math">NovaNaPilha = AtualDaPilha * NovaTransformacao</span>
- Exemplo: fazer uma translação e então rotação
  - 0) <span class="math">M = Identidade</span>
  - 1) Translação <span class="math">T(t_x, t_y)</span>: <span class="math">M = M * T</span>
  - 2) Rotação <span class="math">R(\alpha)</span>: <span class="math">M = M * R</span>
  - 3) Transformando um ponto <span class="math">P</span>: <span class="math">P' = M * P</span>

---
## Transformação em OpenGL

- Ao usar OpenGL, devemos pensar na transformação de objetos
  como uma alteração do sistema de coordenadas local
- Todas as transformações são executadas **relativas ao sistema
  de coordenadas corrente**

---
## Translação de sistema de coordenadas

- Transladar (3, 3)
  <figure style="position: relative;width:100%;height:300px;">
    <img src="../../images/composicao-translacao-1.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
    <img src="../../images/composicao-translacao-2.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
  </figure>

---
## Translação de sistema de coordenadas

- Transladar (3, 3)
  <figure style="position: relative;width:100%;height:300px;">
    <img src="../../images/composicao-translacao-3.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
    <img src="../../images/composicao-translacao-4.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
  </figure>


---
## Rotação de sistema de coordenadas

- Rotacionar (30°)
  <figure style="position: relative;width:100%;height:300px;">
    <img src="../../images/composicao-rotacao-1.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
    <img src="../../images/composicao-rotacao-2.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
  </figure>

---
## Escala de sistema de coordenadas

- Escalar (.5, .5)
  <figure style="position: relative;width:100%;height:300px;">
    <img src="../../images/composicao-escala-1.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
    <img src="../../images/composicao-escala-2.png" class="bullet bullet-no-anim" style="position:absolute;top:0;left:0;">
  </figure>

---
## Resumindo

- Em OpenGL
  - Pense nas transformações como movimentação de sistemas de coordenadas
  - Chame as funções de transformação nessa ordem
  - OpenGL faz pós-multiplicação de matrizes
  - A matriz de acumulação multplicará os vértices dos objetos
- Exemplo: [Composição de Tranformações](codeblocks:composicao-transformacao/CodeBlocks/composicao-transformacao.cbp)

---
# Modelagem Hierárquica

- Vide slides do professor Moisés Pereira
- Exemplo: [Braço do Robô](codeblocks:braco-robo/CodeBlocks/braco-robo.cbp)
