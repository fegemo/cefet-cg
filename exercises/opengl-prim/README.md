# Lista de Exercícios
## OpenGL - Primitivas

Enunciado: Crie os programas descritos a seguir. Para todos eles:
- A tecla "ESC" (valor 27) deve encerrar o programa

**Questão 1**: Escreva um programa em OpenGL (e.g, `quadrados_coloridos.c`)
que desenha 9 quadrados na tela (3 linhas e 3 colunas), cada um de uma cor,
usando as cores especificadas na [aula opengl-handson][opengl-handson].

- _Importante_: procure não dar "Ctrl-C/Ctrl-V" no código. Se estiver
  repetindo o mesmo código várias vezes, quer dizer que você precisa
  **refatorá-lo**. Neste caso, que tal uma função
  "`desenhaQuadrado(x, y, cor)`" que você possa chamá-la várias vezes?

**Questão 2**: Escreva um programa em OpenGL (e.g, `disco_quad.c`) que desenha
no centro da janela um "disco quadrado" (um quadrado furado), como na figura
abaixo. Você deve fazer uma triangulação, _i.e._, use uma primitiva que envolva
triângulos.

Ao iniciar a aplicação, deve-se ver apenas o disco quadrado em azul - sem os
traços (contornos pretos dos triângulos). Quando a tecla <key>`c`</key> for
pressionada, devem surgir os traços pretos por cima do disco quadrado.

Para avisar ao GLUT que ele precisa redesenhar a janela, você pode chamar `glutPostRedisplay()` assim que o usuário pressionar a tecla.

- _Dikentinha_: Lembre-se que por padrão o OpenGL colore (ou melhor, preenche)
  o interior dos polígonos. Essa configuração é dada pelo **modo
  de preenchimento**, que pode ser `GL_FILL` ou `GL_LINE`.

![](images/square-annulus.png)

**Questão 3**: Escreva um programa em OpenGL (e.g., `poligono_regular.c`) que
 desenha no centro da janela um polígono regular - todos os ângulos internos
iguais e todas as arestas de mesmo comprimento. O programa deve ter uma
constante "`NUM_LADOS`" que determina  quantos lados esse polígono regular deve
ter. Em outras palavras, se `NUM_LADOS=4`, o programa deve desenhar um quadrado;
se `NUM_LADOS=5`, um pentágono regular e assim por diante.

- _Dikentinha_: a posição `x,y` dos vértices vai variar de acordo com
  `sin(t)`, `cos(t)`, sendo `t` uma variável que contém ângulo e varia de
  `0` a `2*PI` (360 graus).

![](./images/circle-aprox2.png)

- _Nota_: alunos com [qualidade super premium][super-premium] (99% da turma)
costumam usar uma variável `int numLados` em vez de uma constante
`#define NUM_LADOS` e ainda fazem com que as teclas `+` e `-`
aumentem/reduzam o valor dessa variável. Incrível!!!

[super-premium]: https://www.youtube.com/watch?v=4CooiNDnPHI
[opengl-handson]: https://fegemo.github.io/cefet-cg/classes/opengl-handson/

Você deve entregar esta atividade via **Moodle**.
Valor: 4 pontos
