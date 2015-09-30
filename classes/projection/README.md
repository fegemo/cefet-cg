# Projeção

---
# Objetivos

1. Entender a transformação de uma cena em 3D para 2D
1. Conhecer as matrizes de projeção ortogonal e perspectiva
1. Entender o funcionamento da projeção em OpenGL

---
## Projeção

- Transformações de projeção são aquelas capazes de representar pontos
  ou objetos a partir de um espaço tridimensional (uma cena) em um plano
  bidimensional (uma imagem).

![](../../images/proj-casa-foto.png)

---
## Projeção

- De forma geral, trata-se de representar objetos de <span class="math">R^n</span> em
  <span class="math">R^{n-1}</span>

![](../../images/proj-waze.jpg)

---
## Relembrando o pipeline gráfico

![](../../images/pipeline-grafico-fases.png)

![](../../images/pipeline-geometria-fases.png)

---
## O problema da projeção **em Computação Gráfica**

- Trata-se de transformar o volume de visualização em um volume de cubo
  unitário, descartando as coordenadas Z dos vértices
  - Na verdade, as coordenadas Z saem dos vértices e vão para o Z-buffer
- Essa transformação é feita por meio de **uma matriz que vai multiplicar as
  coordenadas dos vértices**, assim como as outras transformações que vimos

---
## Elementos da projeção

![](../../images/proj-conceitos.png)

---
## Elementos da projeção

1. Plano de projeção
  - Definido pelo sistema de coordenadas da câmera (ou do olho)
1. Raios de projeção
  - Raios que ligam um ponto no espaço tridimensional à imagem 2D
    representada no plano de projeção
1. Centro de projeção
  - ponto fixo na cena de onde todos os raios de projeção surgem

---
## Tipos de projeção

![](../../images/proj-tipos-principais.png)

---
## Outros tipos de projeção

![](../../images/tipos-projecao.png)

---
# Projeção Paralela

---
## Projeção Paralela

- <img src="../../images/proj-paralela.png" style="float:right;margin-left:10px; width: 250px">
  Centro de projeção se encontra no infinito
- Raios de projeção são paralelos entre si
- Tamanho relativo em cada eixo é preservado
- Linhas paralelas permanecem paralelas
- Existem subtipos de projeção paralela em que o ângulo de incidência dos raios
  de projeção varia

---
## Projeção Paralela, Ortogonal

![](../../images/proj-orto.png)

- Projeção ortogonal
  - Ângulo dos raios no plano de projeção = 90º

---
## Projeção Paralela, Isométrica

![](../../images/proj-isometrica.png)

- A cena é orientada em 45º relativo ao plano de projeção

---
## Projeção **Ortogonal em OpenGL**

- Queridíssimo `glOrtho` ([referência](http://earth.uni-muenster.de/~joergs/opengl/glOrtho.html))
- <div>Assinatura da função:</div>
  <img src="../../images/gl-ortho.png" style="float: right; margin-left: 10px; margin-top: 18px">
  ```c
  void glOrtho(double left,
               double right,
               double bottom,
               double top,
               double near,
               double far);
  ```
- A função multiplica a matriz corrente por uma matriz da forma acima (direita)
  - Devemos multiplicar a matriz **de projeção (`GL_PROJECTION`)**


---
# Projeção Perspectiva

---
## Projeção Perspectiva

![](../../images/proj-perspectiva.png)

- A projeção perspectiva mapeia os pontos no plano de projeção **ao longo dos
  raios de projeção que emanam de um centro de projeção**

---
## Características da Projeção Perspectiva

1. Objetos mais próximos ao plano de projeção são maiores
1. Linhas paralelas se encontram em pontos de fuga
1. Aparência semelhante ao modelo do nosso olho

---
## Mesmo objeto, projeções diferentes

![](../../images/proj-tipos.png)

---
# Objetos 3D

- Façamos uma breve digressão...

---
## O pulo ~~do gato~~ da raposa

- Um objeto tridimensional é formado por várias faces (polígonos) adjacentes
  que podem estar no mesmo plano ou não

![](../../images/3d-objects-1.png)
![](../../images/3d-objects-2.png)

---
## Exemplo de objetos 3D

- <img src="../../images/fearful-32.png" style="float:right;margin-left:10px;margin-top:1.3em" alt="OMG era só isso??">
  Para desenhar um cubo em vez de um quadrado, precisamos desenhar 6 faces em
  vez de 1
  ```c
  glBegin(GL_QUADS);
    // Cima (y = 1.0f)
    glColor3f(0.0f, 1.0f, 0.0f);
    glVertex3f( 1.0f, 1.0f, -1.0f); glVertex3f(-1.0f, 1.0f, -1.0f);
    glVertex3f(-1.0f, 1.0f,  1.0f); glVertex3f( 1.0f, 1.0f,  1.0f);

    // Baixo
    glColor3f(1.0f, 0.5f, 0.0f);
    glVertex3f( 1.0f, -1.0f,  1.0f); glVertex3f(-1.0f, -1.0f,  1.0f);
    glVertex3f(-1.0f, -1.0f, -1.0f); glVertex3f( 1.0f, -1.0f, -1.0f);
  ```

---
## Roubando com o GLUT

- O GLUT (OpenGL Utilities Toolkit) possui algumas funções para desenho de
  objetos tridimensionais
  1. `glutSolidTeapot, glutWireTeapot`

     ![](../../images/glut-shapes-3.png)
- [Referência das funções](https://www.opengl.org/resources/libraries/glut/spec3/node80.html)

---
## Formas 3D do GLUT

![](../../images/glut-shapes.png)

---
## Formas 3D do GLUT (cont.)

![](../../images/glut-shapes-2.png)

---
# Projeção Perspectiva

- Voltando ao tema de hoje...

---
## glFrustum ([referência](http://earth.uni-muenster.de/~joergs/opengl/glFrustum.html))

![](../../images/gl-frustum-diagram.gif)
- Assinatura da função
  ```c
  void glFrustum(double left,   double right,
                 double bottom, double top,
                 double near,   double far);
  ```

---
## glFrustum (cont.)

- <img src="../../images/gl-frustum.gif" style="float: right; margin-left: 20px;">
  A função multiplica a matriz corrente por uma matriz da forma à direita
- A matriz de projeção (independente se `glOrtho` ou `glFrustum`) deve ser
  colocada na **pilha de matrizes de projeção do OpenGL**
  ```c
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  glFrustum(-1, 1, -1, 1, 1, 20);
  ```

---
## Exemplo

- [Projeção Ortogonal _vs_ Perpsectiva](codeblocks:ortho-vs-perspective2/CodeBlocks/ortho-vs-perspective2.cbp)
  - Pressionar <key>barra de espaço</key> para alternar de
    projeção perspectiva para ortogonal

    ![](../../images/projecao-orto-vs-perspectiva.png)

---
## **gluPerspective**

![](../../images/gl-frustum-diagram.gif)
![](../../images/glu-perspective-diagram.gif)

- Não é muito intuitivo configurar a perspectiva usando glFrustum
- Uma forma mais comum para configurar perspectiva é usando dois parâmetros
  1. Um ângulo para o campo de visão
  1. Razão de aspecto (largura / altura)



---
## gluPerspective (cont.)

- A biblioteca GLU (OpenGL Utilities) contém uma função para isso, o
  `gluPerspective`
  ```c
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();

  // fovy, aspect, nearZ, farZ
  gluPerspective(45.0f, 4.0f/3.0f, 1, 20);
  ```
- O `gluPerspective` substitui o uso de `glFrustum`, já que ele gera uma matriz
  de transformação perspectiva da mesma forma, porém usando outros tipos de
  parâmetros

---
## gluPerspective (cont.)

- Campo de visão (_fov_, ou _field of view_)
  - Determina o quanto queremos enxergar da cena
  - **Valores maiores** acarretam em um **campo de visão maior** - espelho convexo
  - Para aplicações interativas, tipicamente algo entre 45º e 60º

---
## gluPerspective (cont.)

![](../../images/fov1.jpg)
![](../../images/fov2.jpg)
![](../../images/fov3.jpg)
![](../../images/fov4.jpg)

---
## gluPerspective (cont.)

- Razão de aspecto
  - Divisão da largura pela altura
  - Deve ser a mesma razão de aspecto da janela/tela em que estamos desenhando
    para que não haja distorção

---
## gluLookAt

- Além de configurar a projeção que queremos (via `glOrtho, glFrustum, gluPerspective`),
  queremos também poder **posicionar** e **mirar** nossa câmera virtual

  ![](../../images/glu-look-at.gif)
- É uma **transformação de visualização** - ou seja, usamos a pilha de matrizes
  **`GL_MODELVIEW`**

---
## gluLookAt (cont.)

```c
void gluLookAt(double eyeX,     // posição do olho
               double eyeY,
               double eyeZ,
               double centerX,  // para onde olhamos
               double centerY,
               double centerZ,
               double upX,      // onde fica "para cima"
               double upY,
               double upZ);
```

---
# Referências

- [FAQ sobre visualização em OpenGL](https://www.opengl.org/archives/resources/faq/technical/viewing.htm#view0030) (excelente leitura)
- Capítulo 3 do livro Real-Time Rendering
- Lições 5 e 8 das anotações do prof. David Mount
