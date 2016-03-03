# Introdução a OpenGL **_hands on_** - Parte 2

---
# Roteiro

1. Primeiro programa
1. Primitivas Geométricas
1. Criando uma pequena animação
1. Convenção de nomes do OpenGL
1. Lista de exercícios 1

---
# Primeiro programa (square.c)

![Tela do programa square.c](../../images/square1.jpg)

---
## square.c

```c
#include "GL/glut.h" // use sinal maior,menor

// Rotina de desenho
void drawScene(void)
{
   glClear(GL_COLOR_BUFFER_BIT);

   glColor3f(0.0, 0.0, 0.0);

   // Desenha um polígono por seus vértices
   glBegin(GL_POLYGON);
      glVertex3f(20.0, 20.0, 0.0);
      glVertex3f(80.0, 20.0, 0.0);
      glVertex3f(80.0, 80.0, 0.0);
      glVertex3f(20.0, 80.0, 0.0);
   glEnd();

   glFlush();
}

// Inicia certas variáveis do OpenGL
void setup(void)
{
   glClearColor(1.0, 1.0, 1.0, 0.0);
   //glPolygonMode( GL_FRONT_AND_BACK, GL_LINE );
}

// Callback de "reshape"
void resize(int w, int h)
{
   glViewport(0, 0, w, h);
   glMatrixMode(GL_PROJECTION);
   glLoadIdentity();
   glOrtho(0.0, 100.0, 0.0, 100.0, -1.0, 1.0);
   glMatrixMode(GL_MODELVIEW);
   glLoadIdentity();
}

// Callback de "tecla pressionada"
void keyInput(unsigned char key, int x, int y)
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

// Função principal
int main(int argc, char** argv)
{
   glutInit(&argc, argv);

   glutInitDisplayMode(GLUT_SINGLE | GLUT_RGBA);
   glutInitWindowSize(500, 500);
   glutInitWindowPosition(100, 100);
   glutCreateWindow("square.cpp");

   // Registra callbacks para eventos
   glutDisplayFunc(drawScene);
   glutReshapeFunc(resize);  
   glutKeyboardFunc(keyInput);

   setup();

   glutMainLoop();
   return 0;
}
```

---
# Criando uma pequena animação

[Exemplo: Animação de cor](codeblocks:animacao-cor/CodeBlocks/animacao.cbp)

---
## glutTimerFunc(msecs, func, value)

- Podemos registrar uma _callback_ para **ser invocada daí a `x` ms**.
- Podemos usá-la p/ alterar parâmetros (cor, posição etc.) da cena
  ```c
    void mudaCena()
    {
      // altera a cor do quadrado
      ...
      // atualiza a tela (desenha() será invocada novamente)
      glutPostRedisplay();
      // registra a callback novamente
      glutTimerFunc(25, mudaCena, 0);
    }
    glutTimerFunc(0, mudaCena, 0);
  ```

---
## Experimento

1. Criar um quadrado que muda de cor
  ```c
  void timerColored()
  {
    color += colorIncrement;
  	if (color > 1) {
  		color = 1; colorIncrement = colorIncrement * -1;
  	} else if (color < 0) {
  		color = 0; colorIncrement = colorIncrement * -1;
  	}
    glutPostRedisplay();
    glutTimerFunc(25, timerColored, 0);
  }
  ```
---
# Referências

- Documentação do OpenGL 2: https://www.opengl.org/sdk/docs/man2/
- Livro Vermelho: http://www.glprogramming.com/red/
