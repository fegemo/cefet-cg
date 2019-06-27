<!-- { "layout": "title" } -->
# Pipeline Programável
## Nem sempre **_Gouraud/Phong_** respondem tudo...

---
<!-- { "backdrop": "ninokuni" } -->

---
<!-- { "layout": "centered" } -->
# Roteiro

1. Evolução do _hardware_ gráfico
1. OpenGL Moderno
1. GLSL: OpenGL _Shading Language_

---
<!-- { "layout": "regular" } -->
# O pipeline gráfico

![](../../images/pipeline-grafico-fases.svg) <!-- {p:.centered} -->

![](../../images/pipeline-geometria-fases.svg) <!-- {p:.centered} -->

![](../../images/pipeline-rasterizacao-fases.svg) <!-- {p:.centered} -->

---
<!-- { "layout": "section-header" } -->
# Evolução do _hardware_ gráfico

- Geração I (1996)
- Geração II (2001)
- Geração III (2001)
- Geração IV (2002)
- Geração V (2004)
- Geração VI (2007)
- Geração VII (2008)
- ...
- Geração atual

---
<!-- { "layout": "regular" } -->
## Geração I: 3dfx Voodoo (**1996**)

- ![](../../images/3dfx-voodoo-1.png) <!-- {.push-right} -->
  Uma das primeiras placas gráficas com aceleração para operações 3D
- Recursos suplementavam a placa gráfica padrão (2D)
- Não fazia transformação nos vértices
  - Ainda era feita na CPU
- Fazia mapeamento de textura e controle do _z-buffer_

![](../../images/3d-hardware-generation-1.png) <!-- {p:.centered} -->

---
<!-- {"backdrop": "threed-hardware-generation-1"}-->
# Duke Nuken 3D (1996) <!-- {style="color: white;"} -->

---
<!-- { "layout": "regular" } -->
## Geração II: GeForce/Radeon 7500 (**1998**)

- ![](../../images/nvidia-geforce-256.png) <!-- {.push-right} -->
  Principal inovação: cálculo de **transformação e iluminação** passaram a ser feitos pela GPU
- Possibilitou o uso de múltiplas texturas em um mesmo objeto
  - _Bump mapping_ etc.
- Barramento AGP em vez do PCI (melhorando a comunicação entre a GPU e a RAM)

![](../../images/3d-hardware-generation-2.png) <!-- {p:.centered} -->


---
<!-- {"backdrop": "threed-hardware-generation-2"} -->
# Resident Evil 2 (1998) <!-- {style="color: white;"} -->

---
<!-- { "layout": "regular" } -->
## Geração III: GeForce3/Radeon 8500 (**2001**)

- ![](../../images/ati-radeon-8500.png) <!-- {.push-right} -->
  Principal inovação: **programabilidade** no pipeline, nas operações com vértices
  - Programação em Assembly (sem desvios)
  - Também possibilitou texturas 3D e super-amostragem (técnica de _antialiasing_)

![](../../images/3d-hardware-generation-3.png) <!-- {p:.centered} -->

---
<!-- {"backdrop": "threed-hardware-generation-3"}-->
# Max Payne (2001) <!-- {style="color: white;"} -->

---
<!-- { "layout": "regular" } -->
## Geração IV: Radeon 9700/GeForce FX (**2002**)

- ![](../../images/ati-radeon-9700.png) <!-- {.push-right} -->
  Primeira geraçao com pipeline "totalmente" programável
- Placas de modelos diferentes tinham quantidades de recursos diferentes para os
  sombreadores de vértice e fragmento

![](../../images/3d-hardware-generation-4.png) <!-- {p:.centered} -->

---
<!-- { "layout": "regular" } -->
# Geração V: GeForce6/X800 (**2004**)

- **Renderização simultânea** para mais de um _buffer_
  - Aceleração para sombras, múltiplas câmeras na cena (_e.g._, um
    retrovisor de um carro, um avatar 3D do personsagem selecionado)
- Para os _shaders_, **condicionais e _loops_**
- Aumento de precisão de 32bits para **64bits** nas operações do pipeline
- Surgimento do **barramento PCIe** (PCI express)

---
<!-- { "layout": "regular" } -->
# Geração VI: GeForce 8800 (**2007**)

- CUDA: uso da placa para **programação de propósito geral**
  - OpenCL (2009)

# Geração VII: (**2008**)

- Possibilidade de uso de múltiplas placas de vídeo (SLI, CrossFire)

*[CUDA]: Compute Unified Device Architecture*

---
<!-- { "layout": "regular" } -->
# Gerações atuais

- ![](../../images/nvidia-geforce-rtx.png) <!-- {.push-right style="width: 300px;"} --> <!-- {ul:.full-width} -->
  GDDR5: 10Gbit/s
- Operações
  - 64 bits com 0,5x velocidade de 32 bits (antes era 1/32)
  - 16 bits com 2x velocidade de 32 bits
- RTX: operações para raytracing

*[GDDR5]: Graphics Double data Rate Type Five Synchronous Random-Access Memory*

---
<!-- { "layout": "regular" } -->
# OpenGL Moderno

- No pipeline fixo, certas decisões estão encrustadas
- Para tirar proveito das novas características do _hardware_, o OpenGL
  (e o DirectX) evoluíram
  - Em vez de oferecer apenas um modelo de iluminação (Phong), agora você
    pode criar o seu
  - Na prática, escrevemos:
    - Aplicação: igual já fazemos
    - **_Vertex shader_**: Programas que calculam a cor de cada vértice
    - **_Fragment (pixel) shader_**: Programas que calculam a cor de cada pixel

---
<!-- ![](../../images/opengl-timeline.png) -->
<!-- {"layout": "regular", "styles": "../../styles/classes/opengl-timeline.css"} -->
# OpenGL e suas versões

[↪️ Versão expandida](timeline.html) <!-- {.badge.push-right target="_blank"} --> OpenGL é um padrão em evolução, gerido pelo [Khronos Group][khronos]. <!-- {p:style="width: 100%"} -->

::: vis timeline ./opengl-versions.json .timeline
![](../../images/opengl-versions.png)
:::

[khronos]: https://www.khronos.org/
<!--  -->
---
<!--
backdrop: big-code
-->

## Hello World em OpenGL 4.3+

```c
#include <iostream>
#include <fstream>

#include <GL/glew.h>
#include <GL/freeglut.h>
#include "glm/glm.hpp"
#include "glm/ext/matrix_transform.hpp" // translate, rotate, scale, identity
#include "glm/gtc/matrix_transform.hpp"
#include "shader.h"
#include "object.h"
#include "error.h"


using namespace std;


Object* square;
Shader* colorShader;


// Inicializa configurações do OpenGL
void inicializa(void)
{
    glClearColor(1, 1, 1, 1);
    glCheckError();

    // configura o programa sombreador a ser usado
    colorShader = new Shader("shaders/vertex-shader.glsl",
        "shaders/fragment-shader.glsl");
    colorShader->use();

    // configura o objeto que queremos desenhar
    square = new Object(4);
    square->addVertex(Vertex{{20, 20, 0, 1}, {0, 1, 0, 1}});
    square->addVertex(Vertex{{80, 20, 0, 1}, {0, 1, 0, 1}});
    square->addVertex(Vertex{{80, 80, 0, 1}, {0, 1, 0, 1}});
    square->addVertex(Vertex{{20, 80, 0, 1}, {0, 1, 0, 1}});
    square->initialize();

    // define o valor das variáveis uniformes do shader
    colorShader->setUniformMatrixVariable("projMat",
        glm::ortho(0.0f, 100.0f, 0.0f, 100.0f));
    colorShader->setUniformMatrixVariable("modelViewMat",
        glm::mat4(1.0));
}

// Desenha a cena
void desenhaCena(void)
{
    glClear(GL_COLOR_BUFFER_BIT);

    // ativa o VAO referente ao objeto que queremos desenhar
    square->use();

    // simplesmente manda desenhar o VAO corrente usando a conectividade
    // de GL_TRIANGLE_FAN
    glDrawArrays(GL_TRIANGLE_FAN, 0, 4);

    glFlush();
}

void redimensiona(int w, int h)
{
    glViewport(0, 0, w, h);
}

void teclado(unsigned char key, int x, int y)
{
    switch(key)
    {
    case 27:
        exit(0);
        break;
    default:
        break;
    }
}


int main(int argc, char* argv[])
{
    glutInit(&argc, argv);

    glutInitContextVersion(4, 6);
    glutInitContextProfile(GLUT_CORE_PROFILE);
    glutInitContextFlags(GLUT_FORWARD_COMPATIBLE);

    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGBA);
    glutInitWindowSize(500, 500);
    glutInitWindowPosition(100, 100);
    glutCreateWindow("Hello World - Pipeline Programável");
    glutDisplayFunc(desenhaCena);
    glutReshapeFunc(redimensiona);
    glutKeyboardFunc(teclado);

    glCheckError();
    glewExperimental = GL_TRUE;
    glewInit();

    inicializa();

    glutMainLoop();

    return 0;
}
```
- [Exemplo `hello-world-modest`](codeblocks:hello-modest/CodeBlocks/hello-modest.cbp)
  (62 linhas de código)

---
## E esse arquivo **`vertexShader.glsl`**?

```glsl
#version 430 core
#pragma debug(on)
#pragma optimize(off)

layout(location=0) in vec4 squareCoords;
layout(location=1) in vec4 squareColors;

uniform mat4 projMat;
uniform mat4 modelViewMat;

out vec4 colorsExport;

void main(void)
{
   gl_Position = projMat * modelViewMat * squareCoords;
   colorsExport = squareColors;
}
```

---
## E esse outro **`fragmentShader.glsl`**?

```glsl
#version 430 core
#pragma debug(on)
#pragma optimize(off)

in vec4 colorsExport;

out vec4 colorsOut;

void main(void)
{
   colorsOut = colorsExport;
}
```

---
<!-- { "layout": "regular" } -->
## O que mudou?

- Não existem mais:
  - As matrizes e suas pilhas
    - `glLoadIdentity, glRotate, glOrtho, glTranslate`...
  - O modo imediatista de criação de primitivas
    - `glVertex, glGenList, glCallList`...
  - Informações sobre vértices
    - `glTexCoord, glNormal, glNormal, glColor`
  - Iluminação :O
    - `glLight, glShadeModel, glMaterial`...

---
<!-- { "layout": "regular" } -->
## Então #comofaz?

- **Matrizes**: crie e gerencie você mesmo, caso precise
  - Crie você mesmo uma classe matriz com as operações e com as matrizes
    de transformação
  - Ou então use uma biblioteca. Exemplo: [glm](http://glm.g-truc.net/0.9.6/index.html)
- **Modo imediatista**: uma chamada _vs._ múltiplas
  - Faça uma chamada para criação de múltiplos vértices (e cores, e normais)
    em vez de uma para cada
  - Para isso, temos disponível os <abbr title="Vertex Buffer Objects">VBOs</abbr>
- **Informações sobre vértices**: envie diretamente para os _shaders_
  - Vetor com informações de todos vértices (`glVertexAttribPointer`)
- **Iluminação**: escreva seu modelo
  - Use uma linguagem de _shaders_ e escreva pelo menos um _Vertex shader_ e
    um _Fragment shader_

---
<!-- { "layout": "regular" } -->
# _**Vertex** shader_

- O programa é **executado uma vez para <u>cada vértice</u>** da cena
- Como **saída**, o _vertex shader_ deve dar, pelo menos, a **coordenada xyz
  transformada pelas matrizes _modelview_ e _projection_**
  - Faz sentido, porque os estágios _ModelView_ e _Projection_ foram removidos
    do _pipeline_
- Mas também pode usar e definir:
  - Cor do vértice
  - Normal do vértice
  - Coordenadas de textura etc.

---
<!-- { "layout": "regular" } -->
# _**Fragment** shader_

- O programa é **executado uma vez para <u>cada fragmento</u>** da cena
  rasterizada
- Como **saída**, o _vertex shader_ deve dar a **cor do fragmento**
  - Também pode simplesmente descartar o fragmento
- Mas também pode usar:
  - Textura para colorir

---
<!-- { "layout": "regular" } -->
##  O que mais é programável?

![](../../images/programmable-pipeline-stages.png) <!-- {p:.centered} -->

- _Shaders_ são programas (bem) pequenos **executados inteiramente pela GPU**
- **_Vertex_ e _Fragment shaders_** são programáveis desde OpenGL 2.0
  - Ambos são **obrigatórios**
- **_Geometry_ e _Tessellation shaders_** são mais recentes (**opcionais**)

---
<!-- { "layout": "regular" } -->
# _**Tessellation** shader_

- Estágio opcional
- Composto por 2 fases: controle e avaliação
- Introduzido no OpenGL 4.0
- Útil para fazer <abbr title="Level of Detail">LOD</abbr>
  - Um objeto pode, adaptativamente, ser renderizado com **mais ou menos
    polígonos, dependendo da distância da câmera**

---
<!-- { "layout": "regular" } -->
## _**Geometry** shader_

- Também é um estágio opcional
- Introduzido no OpenGL 3.2
- Permite ao programador substituir ou transformar primitivas
  - _Input_: um ponto, um segmento, um triângulo de uma malha
  - _Output_: zero ou mais primitivas

---
<!--  {"backdrop": "minecraft-glsl"} -->
# GLSL

---
<!-- { "layout": "regular" } -->
## Primeiros passos

1. Não incluir `gl.h` diretamente, mas alguma biblioteca de
   carregamento dinâmico do OpenGL (_e.g._, [GLEW](http://glew.sourceforge.net/))
1. Solicitar um contexto OpenGL na versão desejada:
   ```c
   glutInitContextVersion(4, 3); // versão 4.3
   ```
1. Indicar o perfil: retrocompatível ou moderno
   - `glutInitContextProfile(GLUT_COMPATIBILITY_PROFILE)`
   - `glutInitContextProfile(GLUT_CORE_PROFILE)`
1. Opcionalmente proibir tudo que esteja _deprecated_ via
   `glutInitContextFlags(GLUT_FORWARD_COMPATIBLE)`

---
<!-- { "layout": "regular" } -->
## Tipos de dados do GLSL

- Escalares:
  - `float`: 32 bit ponto flutuante <!-- {ul^1:.multi-column-list-2} -->
  - `int`: 32 bits inteiro
  - `uint`: 32 bits inteiro sem sinal
  - `bool`: booleano
  - `double`: 64 bits
- Agregados:
  | `float`: | `vec2`  | `vec3`  | `vec4`  |
  |---------:|---------|---------|---------|
  | `int`:   | `ivec2` | `ivec3` | `ivec4` |
  | `uint`:  | `uvec2` | `uvec3` | `uvec4` |
  | `bool`:  | `bvec2` | `bvec3` | `bvec4` |

---
<!-- { "layout": "centered" } -->
# Tipos matriciais

- Agregados bidimensionais:

| mat2   | mat3   | mat4   |
|--------|--------|--------|
| mat2x2 | mat2x3 | mat2x4 |
| mat3x2 | mat3x3 | uvec3  |
| mat4x2 | mat4x3 | mat4x4 |

---
<!-- { "layout": "regular" } -->
## Iniciando variáveis

- Escalares <!-- {li:.compact-code-more} -->
  ```glsl
  vec4 color;
  color = vec4(1.0, 0.0, 1.0, 1.0);
  vec3 rgbColor = vec3(color);
  ```
- Matriz
  <div class="math" style="float:left;">M=\begin{bmatrix} 1.0&3.0&5.0\\2.0&4.0&6.0 \end{bmatrix}</div>
  <p style="margin-left: 1.5em; text-align: right;">Obs: GLSL é <em>column-major</em>, i.e., usa vetores coluna!</p>
  <div style="clear:both"></div>

  ```glsl
  mat3x2 M = mat3x2(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
  ```

---
<!-- { "layout": "centered" } -->
## Iniciando variáveis (2)

```glsl
vec2 coluna0 = vec2(1.0, 2.0);
vec2 coluna1 = vec2(3.0, 4.0);
vec2 coluna2 = vec2(5.0, 6.0);
mat3x2 M = mat3x2(coluna0, coluna1, coluna2);
```

---
<!-- { "layout": "regular" } -->
## Acessando campos

- Um `vec{2,3,4}` pode ser acessado por `x, y, z, w`, `r, g, b, a`
  ou `s, t, p, q` (apenas por conveniência)
- Além disso, em GLSL, existe o **_swizzling_**:
  ```glsl
  vec4 pos1 = vec4(1.0, 2.0, 3.0, 4.0);
  float xVal = pos1[0]; // xVal = 1.0
  float xVal = pos1.x; // xVal = 1.0
  float yVal = pos1.y; // yVal = 2.0
  float yVal = pos1.g; // yVal = 2.0
  vec4 pos2 = pos1.yxzw; // pos2 = (2.0, 1.0, 3.0, 4.0)
  vec4 pos3 = pos1.rrba; // pos3 = (1.0, 1.0, 3.0, 4.0)
  vec4 pos4 = vec4(pos1.xyz, 5.0); // pos4 = (1.0, 2.0, 3.0, 5.0).
  ```

---
<!-- { "layout": "centered-horizontal" } -->
## Acessando campos (2)

- No caso de matrizes:
  ```glsl
  mat3x2 M = mat3x2(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
  vec2 column2 = M[2]; // column2 = vec2(5.0, 6.0)
  float xTan = M[2][1]; // xTan = 6.0
  float xTan = M[2].y; // xTan = 6.0
  ```
  - `M[j][i]` (**coluna**, depois **linha**)

---
<!-- { "layout": "centered-horizontal" } -->
## Operações algébricas em agregados

```glsl
mat2 M = mat2(1.0, 2.0, 3.0, 4.0);
mat2 N = mat2(1.0, 0.0, 0.0, 2.0);
mat2 P = M + N; // P = mat2(2.0, 2.0, 3.0, 6.0)
P = M * N; // P = mat2(1.0, 2.0, 6.0, 8.0)

vec2 V = vec2(1.0, 2.0);
vec2 W = M * V; // W = vec2(7.0, 10.0)
```

---
<!-- { "layout": "regular" } -->
## Qualificadores de armazenamento

- Declarações de variáveis podem ser precedidas de, no máximo, 1 destes:
  | Qualificador       | Descrição                                                |
  |--------------------|----------------------------------------------------------|
  | `in` (`attribute`) | Variável cujo valor vem de uma etapa anterior            |
  | `out` (`varying`)  | Variável cujo valor será enviado para próxima etapa      |
  | `uniform`          | Variável dada pela aplicação, constante para a primitiva |
- Exemplos:
  ```glsl
  in vec3 coordinates;
  out vec3 color;
  uniform mat4 modelViewMatrix;
  ```

---
<!-- { "layout": "regular" } -->
## Criando _shader_ na aplicação

- Os _shaders_ são **compilados em tempo de execução** do programa, **durante
  o _setup()_** da cena
- Para isso, de dentro da aplicação, devemos **chamar uma série de comandos**:
  ![](../../images/modern-create-shader.png)

---
<!-- { "layout": "centered-horizontal" } -->
# Gouraud _shading_

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/lsl3Wn?gui=true&t=10&paused=true" allowfullscreen></iframe>

- http://www.lighthouse3d.com/tutorials/glsl-tutorial/directional-lights-per-vertex-ii/

---
<!-- { "layout": "centered-horizontal" } -->
# [Phong _shading_](https://www.shadertoy.com/view/XlXGDj)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/XlXGDj?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
<!-- { "layout": "centered-horizontal" } -->
# [_Cel-shading_](https://www.shadertoy.com/view/4sfXzS)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/4sfXzS?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
<!-- { "layout": "centered-horizontal" } -->
# [Phong vs toon](https://www.shadertoy.com/view/4slSWf)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/4slSWf?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
<!-- { "layout": "centered-horizontal" } -->
# [_Bump mapping_](https://www.shadertoy.com/view/Mdl3WH)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/Mdl3WH?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
<!-- { "layout": "centered-horizontal" } -->
# Veja mais

- [Phong shader](http://www.mathematik.uni-marburg.de/~thormae/lectures/graphics1/code/WebGLShaderLightMat/ShaderLightMat.html)
- Editor de _shaders_ online: [shdr.bkcore.com](http://shdr.bkcore.com/)

---
<!-- { "layout": "centered" } -->
# Referências

- Livro _Real-Time Rendering (3<sup>rd</sup> edition)_
  - Capítulo 3: _The Graphics Processing Unit_
- Livro _Computer Graphics through OpenGL (2<sup>nd</sup> edition)_
  - Capítulo 20: _OpenGL 4.3, Shaders and the Programmable Pipeline: Liftoff Programmers_
- Livro _Computer Graphics with OpenGL (4<sup>th</sup> edition)_
  - Capítulo 22: _Programmable Shaders_
- Livro _OpenGL® Shading Language (2<sup>nd</sup> edition)_ (conhecido como _orange book_)
- [Tutorial sobre GLSL](http://zach.in.tu-clausthal.de/teaching/cg_literatur/glsl_tutorial/) do site Lighthouse3D
