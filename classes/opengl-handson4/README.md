# Introdução a OpenGL **_hands on_** - Parte 4

---
# Roteiro

1. Display Lists
1. Vertex Array
1. Depth buffer e a coordenada Z
1. Texturas
1. TP1

---
# Display Lists

---
## Exercício 1 da lista

![](../../images/display-lists.png)

- Como desenhar o polígono E as linhas ao mesmo tempo?
---
## Tentativa 1

- Desenha-se o polígono preenchido
  ```c
  glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
  glBegin(GL_TRIANGLE_STRIP);
    // 10 vértices aqui...
  glEnd();
  ```
- Desenha-se o polígono em modo _wire_
  ```c
  glPolygonMode(GL_FRONT_AND_BACK, GL_LINES);
  glBegin(GL_TRIANGLE_STRIP);
    // os mesmos 10 vértices aqui...
  glEnd();
  ```

---
## Tentativa 1 - discussão

- Temos um **_code smell_** - algo está errado
- **Não devemos repetir código** para que não precisemos alterar mais de um
  lugar
  - Princípio DRY - _Don't Repeat Yourself_
- Podemos resolver isso extraindo o código repetido para uma função...

---
## Tentativa 2

- Criamos uma função: `desenhaAnelQuadrado`
  ```c
  void desenhaAnelQuadrado() {
    glBegin(GL_TRIANGLE_STRIP);
      // 10 vértices aqui...
    glEnd();
  }
  //...

  void desenhaCena() {
    glColor3f(1.0, 0, 0);     // azul
    glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
    desenhaAnelQuadrado();

    glColor3f(1.0, 0, 0);     // preto
    glPolygonMode(GL_FRONT_AND_BACK, GL_LINES);
    desenhaAnelQuadrado();
  }
  ```

---
## Tentativa 2 - discussão

- Resolvemos o _code smell_, mas não paramos por aí
- Se, em vez de 10 vértices, nosso polígono tivesse 1 mil vértices?
  - Cada chamada a `glVertex` faz uma viagem da CPU à GPU
- O OpenGL pode registrar um polígono caso queiramos desenhá-lo várias vezes

---
## Tentativa 3 - usando **lista de visualização**

- Em vez de chamar o método de desenho na _callback_ de desenho, vamos registar
  os vértices **em tempo de inicialização do programa** e apenas instruir o
  OpenGL a executar esses vértices em tempo de desenho
- Assim, otimizamos bem as chamadas de desenho de vértices

---
## Tentativa 3

- ```c
  int listaAnel;
  void criaListaAnelQuadrado() {
  	listaAnel = glGenLists(1);
  	glNewList(listaAnel, GL_COMPILE);
      glBegin(GL_TRIANGLE_STRIP);
        // os 10 vértices
      glEnd();
  	glEndList();
  }
  ```
---
## Tentativa 3

- ```c
  int main(int argc, char** argv) {
    glutInit(argc, argv);
    //...
    criaListaAnelQuadrado();
    //...
    glutMainLoop();
  }
```

---
## Tentativa 3

- ```c
  void desenhaCena() {
    glColor3f(1.0, 0, 0);     // azul
    glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);
    glCallList(listaAnel);

    glColor3f(1.0, 0, 0);     // preto
    glPolygonMode(GL_FRONT_AND_BACK, GL_LINES);
    glCallList(listaAnel);
  }
  ```

---
# Trabalho Prático 1 \o/

_A wild TP1 appears..._

---
## TP1 está a solta

<img alt="Tela do jogo Galaxian original" src="../../images/galaxian-original.png"
  style="float: right; width: 280px; margin: 0 0 5px 20px">
_"[...] nele, o jogador pilota uma nave que fica na parte de baixo da tela e,
com ela, se defende de um ataque alienígena. Os alienígenas realizam o seu
ataque como uma grande esquadra que se movimenta lateralmente na parte
superior da tela. Os diversos alienígenas podem soltar bombas contra a heróica
nave [...]"_

- Enunciado no Moodle (ou na página do curso).

---
# Referências

- Documentação do OpenGL 2: https://www.opengl.org/sdk/docs/man2/
- Livro Vermelho: http://www.glprogramming.com/red/
