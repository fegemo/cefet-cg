# Pipeline Programável

---
<!--
backdrop: ninokuni
-->

# Nem sempre **_Gouraud/Phong_** respondem tudo...

---
## Roteiro

1. Evolução do _hardware_ gráfico
1. OpenGL Moderno
1. Exemplos em GLSL: OpenGL _Shading Language_

---
## O pipeline gráfico

![](../../images/pipeline-grafico-fases.png)

![](../../images/pipeline-geometria-fases.png)

![](../../images/pipeline-rasterizador-fases.png)

---
# Evolução do _hardware_ gráfico

---
## Geração I: 3dfx Voodoo (1996)

- ![right](../../images/3dfx-voodoo-1.png)
  Uma das primeiras placas gráficas com aceleração para operações 3D
- Recursos suplementavam a placa gráfica padrão (2D)
- Não fazia transformação nos vértices
  - Ainda era feita na CPU
- Fazia mapeamento de textura e controle do _z-buffer_

![](../../images/3d-hardware-generation-1.png)

---
<!--
backdrop: threed-hardware-generation-1
-->

# Duke Nuken 3D (1996)

---
## Geração II: GeForce/Radeon 7500 (1998)

- ![right](../../images/nvidia-geforce-256.png)
  Principal inovação: cálculo de **transformação e iluminação** passaram a ser feitos pela GPU
- Possibilitou o uso de múltiplas texturas em um mesmo objeto
  - _Bump mapping_ etc.
- Barramento AGP em vez do PCI (melhorando a comunicação entre a GPU e a RAM)

![](../../images/3d-hardware-generation-2.png)


---
<!--
backdrop: threed-hardware-generation-2
-->

# Resident Evil 2 (1998)

---
## Geração III: GeForce3/Radeon 8500 (2001)

- ![right](../../images/ati-radeon-8500.png)
  Principal inovação: **programabilidade** no pipeline, nas operações com vértices
  - Também possibilitou texturas 3D e super-amostragem (técnica de _antialiasing_)

![](../../images/3d-hardware-generation-3.png)

---
<!--
backdrop: threed-hardware-generation-3
-->

# Max Payne (2001)

---
## Geração IV: Radeon 9700/GeForce FX (2002)

- ![right](../../images/ati-radeon-9700.png)
  Primeira geraçao com pipeline "totalmente" programável
- Placas de modelos diferentes tinham quantidades de recursos diferentes para os
  sombreadores de vértice e fragmento

![](../../images/3d-hardware-generation-4.png)

---
## Geração IV e meio: GeForce6/X800 (2004)

- Renderização simultânea para mais de um _buffer_
  - Aceleração para sombras, múltiplas câmeras na cena (_e.g._, um retrovisor de um carro, 
    um avatar 3D do personsagem selecionado)
- Para os _shaders_, condicionais e _loops_ (antes não tinha :)
- Aumento de precisão de 32bits para 64bits nas operações do pipeline
- Surgimento do barramento PCIe (PCI express)

---
# OpenGL Moderno

- No pipeline fixo, certas decisões estão encrustadas 
- Para tirar proveito das novas características do _hardware_, o OpenGL (e o DirectX) evoluíram
  - Em vez de oferecer apenas um modelo de iluminação (Phong), agora você pode criar o seu
  - Na prática, podemos escrever:
    - Aplicação: igual já fazemos
    - **_Vertex shader_**: Programas que calculam a cor de cada vértice
    - **_Fragment (pixel) shader_**: Programas que calculam a cor de cada pixel

---
<!--
backdrop: big-code
-->

## Hello world em OpenGL 3.0+

```c
#include "GL/freeglut.h"
#include "stdlib.h"
#include "stdio.h"
#include "stddef.h"
#include "string.h"

/* report GL errors, if any, to stderr */
void checkError(const char *functionName)
{
   GLenum error;
   while (( error = glGetError() ) != GL_NO_ERROR) {
      fprintf (stderr, "GL error 0x%X detected in %s\n", error, functionName);
   }
}

/* extension #defines, types and entries, avoiding a dependency on additional
   libraries like GLEW or the GL/glext.h header */
#ifndef GL_ARRAY_BUFFER
#define GL_ARRAY_BUFFER 0x8892
#endif

#ifndef GL_STATIC_DRAW
#define GL_STATIC_DRAW 0x88E4
#endif

#ifndef GL_FRAGMENT_SHADER
#define GL_FRAGMENT_SHADER 0x8B30
#endif

#ifndef GL_VERTEX_SHADER
#define GL_VERTEX_SHADER 0x8B31
#endif

#ifndef GL_SHADING_LANGUAGE_VERSION
#define GL_SHADING_LANGUAGE_VERSION 0x8B8C
#endif

#ifndef GL_COMPILE_STATUS
#define GL_COMPILE_STATUS 0x8B81
#endif

#ifndef GL_LINK_STATUS
#define GL_LINK_STATUS 0x8B82
#endif

#ifndef GL_INFO_LOG_LENGTH
#define GL_INFO_LOG_LENGTH 0x8B84
#endif

typedef ptrdiff_t ourGLsizeiptr;
typedef char ourGLchar;

#ifndef APIENTRY
#define APIENTRY
#endif


#ifndef GL_ARB_vertex_array_object
typedef void (APIENTRY *PFNGLGENVERTEXARRAYSPROC) (GLsizei n, GLuint *arrays);
typedef void (APIENTRY *PFNGLBINDVERTEXARRAYPROC) (GLuint array);
#endif
#ifndef GL_VERSION_1_5
typedef void (APIENTRY *PFNGLGENBUFFERSPROC) (GLsizei n, GLuint *buffers);
typedef void (APIENTRY *PFNGLBINDBUFFERPROC) (GLenum target, GLuint buffer);
typedef void (APIENTRY *PFNGLBUFFERDATAPROC) (GLenum target, ourGLsizeiptr size, const GLvoid *data, GLenum usage);
#endif
#ifndef GL_VERSION_2_0
typedef GLuint (APIENTRY *PFNGLCREATESHADERPROC) (GLenum type);
typedef void (APIENTRY *PFNGLSHADERSOURCEPROC) (GLuint shader, GLsizei count, const ourGLchar **string, const GLint *length);
typedef void (APIENTRY *PFNGLCOMPILESHADERPROC) (GLuint shader);
typedef GLuint (APIENTRY *PFNGLCREATEPROGRAMPROC) (void);
typedef void (APIENTRY *PFNGLATTACHSHADERPROC) (GLuint program, GLuint shader);
typedef void (APIENTRY *PFNGLLINKPROGRAMPROC) (GLuint program);
typedef void (APIENTRY *PFNGLUSEPROGRAMPROC) (GLuint program);
typedef void (APIENTRY *PFNGLGETSHADERIVPROC) (GLuint shader, GLenum pname, GLint *params);
typedef void (APIENTRY *PFNGLGETSHADERINFOLOGPROC) (GLuint shader, GLsizei bufSize, GLsizei *length, ourGLchar *infoLog);
typedef void (APIENTRY *PFNGLGETPROGRAMIVPROC) (GLenum target, GLenum pname, GLint *params);
typedef void (APIENTRY *PFNGLGETPROGRAMINFOLOGPROC) (GLuint program, GLsizei bufSize, GLsizei *length, ourGLchar *infoLog);
typedef GLint (APIENTRY *PFNGLGETATTRIBLOCATIONPROC) (GLuint program, const ourGLchar *name);
typedef void (APIENTRY *PFNGLVERTEXATTRIBPOINTERPROC) (GLuint index, GLint size, GLenum type, GLboolean normalized, GLsizei stride, const GLvoid *pointer);
typedef void (APIENTRY *PFNGLENABLEVERTEXATTRIBARRAYPROC) (GLuint index);
typedef GLint (APIENTRY *PFNGLGETUNIFORMLOCATIONPROC) (GLuint program, const ourGLchar *name);
typedef void (APIENTRY *PFNGLUNIFORMMATRIX4FVPROC) (GLint location, GLsizei count, GLboolean transpose, const GLfloat *value);
#endif

PFNGLGENVERTEXARRAYSPROC gl_GenVertexArrays;
PFNGLBINDVERTEXARRAYPROC gl_BindVertexArray;
PFNGLGENBUFFERSPROC gl_GenBuffers;
PFNGLBINDBUFFERPROC gl_BindBuffer;
PFNGLBUFFERDATAPROC gl_BufferData;
PFNGLCREATESHADERPROC gl_CreateShader;
PFNGLSHADERSOURCEPROC gl_ShaderSource;
PFNGLCOMPILESHADERPROC gl_CompileShader;
PFNGLCREATEPROGRAMPROC gl_CreateProgram;
PFNGLATTACHSHADERPROC gl_AttachShader;
PFNGLLINKPROGRAMPROC gl_LinkProgram;
PFNGLUSEPROGRAMPROC gl_UseProgram;
PFNGLGETSHADERIVPROC gl_GetShaderiv;
PFNGLGETSHADERINFOLOGPROC gl_GetShaderInfoLog;
PFNGLGETPROGRAMIVPROC gl_GetProgramiv;
PFNGLGETPROGRAMINFOLOGPROC gl_GetProgramInfoLog;
PFNGLGETATTRIBLOCATIONPROC gl_GetAttribLocation;
PFNGLVERTEXATTRIBPOINTERPROC gl_VertexAttribPointer;
PFNGLENABLEVERTEXATTRIBARRAYPROC gl_EnableVertexAttribArray;
PFNGLGETUNIFORMLOCATIONPROC gl_GetUniformLocation;
PFNGLUNIFORMMATRIX4FVPROC gl_UniformMatrix4fv;

void initExtensionEntries(void)
{
   gl_GenVertexArrays = (PFNGLGENVERTEXARRAYSPROC) glutGetProcAddress ("glGenVertexArrays");
   gl_BindVertexArray = (PFNGLBINDVERTEXARRAYPROC) glutGetProcAddress ("glBindVertexArray");
   if (!gl_GenVertexArrays || !gl_BindVertexArray)
   {
       fprintf (stderr, "glGenVertexArrays or glBindVertexArray not found");
       exit(1);
   }
   gl_GenBuffers = (PFNGLGENBUFFERSPROC) glutGetProcAddress ("glGenBuffers");
   gl_BindBuffer = (PFNGLBINDBUFFERPROC) glutGetProcAddress ("glBindBuffer");
   gl_BufferData = (PFNGLBUFFERDATAPROC) glutGetProcAddress ("glBufferData");
   if (!gl_GenBuffers || !gl_BindBuffer || !gl_BufferData)
   {
       fprintf (stderr, "glGenBuffers, glBindBuffer or glBufferData not found");
       exit(1);
   }
   gl_CreateShader = (PFNGLCREATESHADERPROC) glutGetProcAddress ("glCreateShader");
   gl_ShaderSource = (PFNGLSHADERSOURCEPROC) glutGetProcAddress ("glShaderSource");
   gl_CompileShader = (PFNGLCOMPILESHADERPROC) glutGetProcAddress ("glCompileShader");
   gl_CreateProgram = (PFNGLCREATEPROGRAMPROC) glutGetProcAddress ("glCreateProgram");
   gl_AttachShader = (PFNGLATTACHSHADERPROC) glutGetProcAddress ("glAttachShader");
   gl_LinkProgram = (PFNGLLINKPROGRAMPROC) glutGetProcAddress ("glLinkProgram");
   gl_UseProgram = (PFNGLUSEPROGRAMPROC) glutGetProcAddress ("glUseProgram");
   gl_GetShaderiv = (PFNGLGETSHADERIVPROC) glutGetProcAddress ("glGetShaderiv");
   gl_GetShaderInfoLog = (PFNGLGETSHADERINFOLOGPROC) glutGetProcAddress ("glGetShaderInfoLog");
   gl_GetProgramiv = (PFNGLGETPROGRAMIVPROC) glutGetProcAddress ("glGetProgramiv");
   gl_GetProgramInfoLog = (PFNGLGETPROGRAMINFOLOGPROC) glutGetProcAddress ("glGetProgramInfoLog");
   gl_GetAttribLocation = (PFNGLGETATTRIBLOCATIONPROC) glutGetProcAddress ("glGetAttribLocation");
   gl_VertexAttribPointer = (PFNGLVERTEXATTRIBPOINTERPROC) glutGetProcAddress ("glVertexAttribPointer");
   gl_EnableVertexAttribArray = (PFNGLENABLEVERTEXATTRIBARRAYPROC) glutGetProcAddress ("glEnableVertexAttribArray");
   gl_GetUniformLocation = (PFNGLGETUNIFORMLOCATIONPROC) glutGetProcAddress ("glGetUniformLocation");
   gl_UniformMatrix4fv = (PFNGLUNIFORMMATRIX4FVPROC) glutGetProcAddress ("glUniformMatrix4fv");
   if (!gl_CreateShader || !gl_ShaderSource || !gl_CompileShader || !gl_CreateProgram || !gl_AttachShader || !gl_LinkProgram || !gl_UseProgram || !gl_GetShaderiv || !gl_GetShaderInfoLog || !gl_GetProgramiv || !gl_GetProgramInfoLog || !gl_GetAttribLocation || !gl_VertexAttribPointer || !gl_EnableVertexAttribArray || !gl_GetUniformLocation || !gl_UniformMatrix4fv)
   {
       fprintf (stderr, "glCreateShader, glShaderSource, glCompileShader, glCreateProgram, glAttachShader, glLinkProgram, glUseProgram, glGetShaderiv, glGetShaderInfoLog, glGetProgramiv, glGetProgramInfoLog, glGetAttribLocation, glVertexAttribPointer, glEnableVertexAttribArray, glGetUniformLocation or glUniformMatrix4fv not found");
       exit(1);
   }
}

/* vertex array data for a colored 2D triangle, consisting of RGB color values
   and XY coordinates */
const GLfloat varray[] = {
   1.0f, 0.0f, 0.0f, /* red */
   5.0f, 5.0f,       /* lower left */

   0.0f, 1.0f, 0.0f, /* green */
   25.0f, 5.0f,      /* lower right */

   0.0f, 0.0f, 1.0f, /* blue */
   5.0f, 25.0f       /* upper left */
};

/* ISO C somehow enforces this silly use of 'enum' for compile-time constants */
enum {
  numColorComponents = 3,
  numVertexComponents = 2,
  stride = sizeof(GLfloat) * (numColorComponents + numVertexComponents),
  numElements = sizeof(varray) / stride
};

/* the name of the vertex buffer object */
GLuint vertexBufferName;
GLuint vertexArrayName;

void initBuffer(void)
{
   /* Need to setup a vertex array as otherwise invalid operation errors can
    * occur when accessing vertex buffer (OpenGL 3.3 has no default zero named
    * vertex array)
    */
   gl_GenVertexArrays(1, &vertexArrayName);
   gl_BindVertexArray(vertexArrayName);

   gl_GenBuffers (1, &vertexBufferName);
   gl_BindBuffer (GL_ARRAY_BUFFER, vertexBufferName);
   gl_BufferData (GL_ARRAY_BUFFER, sizeof(varray), varray, GL_STATIC_DRAW);
   checkError ("initBuffer");
}

const ourGLchar *vertexShaderSource[] = {
   "#version 140\n",
   "uniform mat4 fg_ProjectionMatrix;\n",
   "in vec4 fg_Color;\n",
   "in vec4 fg_Vertex;\n",
   "smooth out vec4 fg_SmoothColor;\n",
   "void main()\n",
   "{\n",
   "   fg_SmoothColor = fg_Color;\n",
   "   gl_Position = fg_ProjectionMatrix * fg_Vertex;\n",
   "}\n"
};

const ourGLchar *fragmentShaderSource[] = {
   "#version 140\n",
   "smooth in vec4 fg_SmoothColor;\n",
   "out vec4 fg_FragColor;\n",
   "void main(void)\n",
   "{\n",
   "   fg_FragColor = fg_SmoothColor;\n",
   "}\n"
};

void compileAndCheck(GLuint shader)
{
   GLint status;
   gl_CompileShader (shader);
   gl_GetShaderiv (shader, GL_COMPILE_STATUS, &status);
   if (status == GL_FALSE) {
     GLint infoLogLength;
     ourGLchar *infoLog;
     gl_GetShaderiv (shader, GL_INFO_LOG_LENGTH, &infoLogLength);
     infoLog = (ourGLchar*) malloc (infoLogLength);
     gl_GetShaderInfoLog (shader, infoLogLength, NULL, infoLog);
     fprintf (stderr, "compile log: %s\n", infoLog);
     free (infoLog);
   }
}

GLuint compileShaderSource(GLenum type, GLsizei count, const ourGLchar **string)
{
   GLuint shader = gl_CreateShader (type);
   gl_ShaderSource (shader, count, string, NULL);
   compileAndCheck (shader);
   return shader;
}

void linkAndCheck(GLuint program)
{
   GLint status;
   gl_LinkProgram (program);
   gl_GetProgramiv (program, GL_LINK_STATUS, &status);
   if (status == GL_FALSE) {
     GLint infoLogLength;
     ourGLchar *infoLog;
     gl_GetProgramiv (program, GL_INFO_LOG_LENGTH, &infoLogLength);
     infoLog = (ourGLchar*) malloc (infoLogLength);
     gl_GetProgramInfoLog (program, infoLogLength, NULL, infoLog);
     fprintf (stderr, "link log: %s\n", infoLog);
     free (infoLog);
   }
}

GLuint createProgram(GLuint vertexShader, GLuint fragmentShader)
{
   GLuint program = gl_CreateProgram ();
   if (vertexShader != 0) {
      gl_AttachShader (program, vertexShader);
   }
   if (fragmentShader != 0) {
      gl_AttachShader (program, fragmentShader);
   }
   linkAndCheck (program);
   return program;
}

GLuint fgProjectionMatrixIndex;
GLuint fgColorIndex;
GLuint fgVertexIndex;

void initShader(void)
{
   const GLsizei vertexShaderLines = sizeof(vertexShaderSource) / sizeof(ourGLchar*);
   GLuint vertexShader =
     compileShaderSource (GL_VERTEX_SHADER, vertexShaderLines, vertexShaderSource);

   const GLsizei fragmentShaderLines = sizeof(fragmentShaderSource) / sizeof(ourGLchar*);
   GLuint fragmentShader =
     compileShaderSource (GL_FRAGMENT_SHADER, fragmentShaderLines, fragmentShaderSource);

   GLuint program = createProgram (vertexShader, fragmentShader);

   gl_UseProgram (program);

   fgProjectionMatrixIndex = gl_GetUniformLocation(program, "fg_ProjectionMatrix");

   fgColorIndex = gl_GetAttribLocation(program, "fg_Color");
   gl_EnableVertexAttribArray (fgColorIndex);

   fgVertexIndex = gl_GetAttribLocation(program, "fg_Vertex");
   gl_EnableVertexAttribArray (fgVertexIndex);

   checkError ("initShader");
}

void initRendering(void)
{
   glClearColor (0.0, 0.0, 0.0, 0.0);
   checkError ("initRendering");
}

void init(void)
{
   initExtensionEntries ();
   initBuffer ();
   initShader ();
   initRendering ();
}

void dumpInfo(void)
{
   printf ("Vendor: %s\n", glGetString (GL_VENDOR));
   printf ("Renderer: %s\n", glGetString (GL_RENDERER));
   printf ("Version: %s\n", glGetString (GL_VERSION));
   printf ("GLSL: %s\n", glGetString (GL_SHADING_LANGUAGE_VERSION));
   checkError ("dumpInfo");
}

const GLvoid *bufferObjectPtr (GLsizei index)
{
   return (const GLvoid *) (((char *) NULL) + index);
}

GLfloat projectionMatrix[16];

void triangle(void)
{
   gl_UniformMatrix4fv (fgProjectionMatrixIndex, 1, GL_FALSE, projectionMatrix);

   gl_BindBuffer (GL_ARRAY_BUFFER, vertexBufferName);
   gl_VertexAttribPointer (fgColorIndex, numColorComponents, GL_FLOAT, GL_FALSE,
                           stride, bufferObjectPtr (0));
   gl_VertexAttribPointer (fgVertexIndex, numVertexComponents, GL_FLOAT, GL_FALSE,
                           stride, bufferObjectPtr (sizeof(GLfloat) * numColorComponents));
   glDrawArrays(GL_TRIANGLES, 0, numElements);
   checkError ("triangle");
}

void display(void)
{
   glClear (GL_COLOR_BUFFER_BIT);
   triangle ();
   glFlush ();
   checkError ("display");
}

void loadOrthof(GLfloat *m, GLfloat l, GLfloat r, GLfloat b, GLfloat t,
                GLfloat n, GLfloat f)
{
   m[ 0] = 2.0f / (r - l);
   m[ 1] = 0.0f;
   m[ 2] = 0.0f;
   m[ 3] = 0.0f;

   m[ 4] = 0.0f;
   m[ 5] = 2.0f / (t - b);
   m[ 6] = 0.0f;
   m[ 7] = 0.0f;

   m[ 8] = 0.0f;
   m[ 9] = 0.0f;
   m[10] = -2.0f / (f - n);
   m[11] = 0.0f;

   m[12] = -(r + l) / (r - l);
   m[13] = -(t + b) / (t - b);
   m[14] = -(f + n) / (f - n);
   m[15] = 1.0f;
}

void loadOrtho2Df(GLfloat *m, GLfloat l, GLfloat r, GLfloat b, GLfloat t)
{
   loadOrthof (m, l, r, b, t, -1.0f, 1.0f);
}

void reshape (int w, int h)
{
   glViewport (0, 0, (GLsizei) w, (GLsizei) h);
   if (w <= h) {
      loadOrtho2Df (projectionMatrix, 0.0f, 30.0f, 0.0f, 30.0f * (GLfloat) h/(GLfloat) w);
   } else {
      loadOrtho2Df (projectionMatrix, 0.0f, 30.0f * (GLfloat) w/(GLfloat) h, 0.0f, 30.0f);
   }
   checkError ("reshape");
}

void keyboard(unsigned char key, int x, int y)
{
   switch (key) {
      case 27:
         exit(0);
         break;
   }
}

void samplemenu(int menuID)
{}

int main(int argc, char** argv)
{
   int menuA;
   glutInit(&argc, argv);
   glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
   /* add command line argument "classic" for a pre-3.x context */
   if ((argc != 2) || (strcmp (argv[1], "classic") != 0)) {
      glutInitContextVersion (3, 1);
      glutInitContextFlags (GLUT_FORWARD_COMPATIBLE | GLUT_DEBUG);
   }
   glutInitWindowSize (500, 500);
   glutInitWindowPosition (100, 100);
   glutCreateWindow (argv[0]);
   dumpInfo ();
   init ();
   glutDisplayFunc(display);
   glutReshapeFunc(reshape);
   glutKeyboardFunc (keyboard);

   /* Add a menu. They have their own context and should thus work with forward compatible main windows too. */
   menuA = glutCreateMenu(samplemenu);
   glutAddMenuEntry("Sub menu A1 (01)",1);
   glutAddMenuEntry("Sub menu A2 (02)",2);
   glutAddMenuEntry("Sub menu A3 (03)",3);
   glutSetMenu(menuA);
   glutAttachMenu(GLUT_RIGHT_BUTTON);

   glutMainLoop();
   return 0;
}
```
- Exemplo `smooth_opengl3.c` da freeglut (470 <abbr title="Lines of code">LOC</abbr>)

---
## Resultado...

![](../../images/modern-hello-world.png)

---
## O que mudou?

- Não existem mais:
  - As pilhas de matrizes
    -  `glIdentity, glRotate, glOrtho, gluOrtho`...
  - O modo imediatista de criação de primitivas
    - `glVertex, glGenList, glCallList`...
  - Informações sobre vértices
    - `glTexCoord, glNormal, glNormalPointer, glColor`
  - Iluminação :O
    - `glLight, glShadeModel, glLightModel, glMaterial`...

---
## Então #comofaz?

- **Pilhas de matrizes**: crie e gerencie você mesmo, caso precise
  - Crie você mesmo uma classe matriz com as operações e com as matrizes de transformação
  - Ou então use uma biblioteca. Exemplo: [glm](http://glm.g-truc.net/0.9.6/index.html)
- **Modo imediatista**: uma chamada _vs._ múltiplas
  - Faça uma chamada para criação de múltiplos vértices (e cores, e normais) em vez de uma para cada
  - Para isso, temos disponível os <abbr title="Vertex Buffer Objects">VBOs</abbr>
- **Informações sobre vértices**: envie diretamente para os _shaders_
  - Vetor com informações de todos vértices (`glVertexAttribPointer`)
- **Iluminação**: escreva seu modelo
  - Use uma linguagem de _shaders_ e escreva pelo menos um _Vertex shader_ e um _Fragment shader_

---
# Exemplos em GLSL 

---
## [Gouraud _shading_](https://www.shadertoy.com/view/lsl3Wn)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/lsl3Wn?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
## [Phong _shading_](https://www.shadertoy.com/view/XlXGDj)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/XlXGDj?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
## [_Cel-shading_](https://www.shadertoy.com/view/4sfXzS)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/4sfXzS?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
## [Phong vs toon](https://www.shadertoy.com/view/4slSWf)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/4slSWf?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
## [_Bump mapping_](https://www.shadertoy.com/view/Mdl3WH)

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/Mdl3WH?gui=true&t=10&paused=true" allowfullscreen></iframe>

---
## Veja mais

- [Phong shader](http://www.mathematik.uni-marburg.de/~thormae/lectures/graphics1/code/WebGLShaderLightMat/ShaderLightMat.html)
- Editor de _shaders_ online: [shdr.bkcore.com](http://shdr.bkcore.com/)

---
# Referências

- Livro _Real-Time Rendering (3<sup>rd</sup> edition)_
  - Capítulo 3: _The Graphics Processing Unit_ 
- Livro _Computer Graphics with OpenGL (4<sup>th</sup> edition)_
  - Capítulo 22: _Programmable Shaders_
- Livro _OpenGL® Shading Language (2<sup>nd</sup> edition)_ (conhecido como _orange book_)
- [Tutorial sobre GLSL](http://zach.in.tu-clausthal.de/teaching/cg_literatur/glsl_tutorial/) do site Lighthouse3D
