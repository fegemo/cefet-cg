# Introdução a OpenGL **_hands on_** - Parte 4

---
# Roteiro

1. Display Lists
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

```c
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
## Tentativa 3 (cont.)

```c
int main(int argc, char** argv) {
  glutInit(argc, argv);
  //...
  criaListaAnelQuadrado();
  //...
  glutMainLoop();
}
```

---
## Tentativa 3 (cont.)

```c
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
# Texturas

---
## Texturas

- Teremos uma aula sobre o tópico texturas mais a frente
- Contudo, vamos começar a aprender para já ir usando
- As funções básicas são:
  - `glEnable(GL_TEXTURE_2D);`, para **habilitar texturas**
  - `glBindTexture(GL_TEXTURE_2D, int)`, para **começar a usar** uma textura
  - `glTexCoord2f(x, y)`, para definir **coordenada de textura para cada vértice**
- Vamos ver um exemplo...
  
---
## Variável global

- Temos uma variável global que armazenará um **identificador de textura**, que é 
  um número inteiro que será gerado pelo OpenGL
  ```c
  GLuint texturaDoMario;
  ```

---
## Na _callback_ de desenho

```c
glEnable(GL_TEXTURE_2D);
glBindTexture(GL_TEXTURE_2D, texturaDoMario);
glBegin(GL_QUADS);
  glTexCoord2f(0, 0); glVertex3f(-1, -1,  0);
  glTexCoord2f(1, 0); glVertex3f( 1, -1,  0);
  glTexCoord2f(1, 1); glVertex3f( 1,  1,  0);
  glTexCoord2f(0, 1); glVertex3f(-1,  1,  0);
glEnd();
glDisable(GL_TEXTURE_2D);
```

---
## Explicando o uso das funções

- Ao desenhar o polígono que queremos texturizar, devemos:
  1. Habilitar o uso de texturas bidimensionais
  1. Especificar qual textura vamos aplicar ao próximo polígono a ser desenhado
  1. Mapear cada canto da textura a cada vértice do polígono
- Agora, falta saber como carregar uma imagem no OpenGL para servir de textura

---
## Carregando texturas

- O OpenGL não possui funções para carregar texturas
- Basicamente, precisamos abrir o arquivo de imagem nós mesmos (`fopen` e amigos) e
  usar outros 4-5 métodos do OpenGL para então conseguirmos usar um arquivo como 
  textura:
  - `glGenTextures(...), glTexParameteri(..), glTexImage2D(...), glTexEnvf(...)`
- Veremos como esses métodos funcionam em aulas futuras, mas hoje vamos usar 
  uma biblioteca chamada SOIL que possui funções para carregar arquivos de imagem 
  diretamente
  
---
## <abbr title="Simple OpenGL Image Library">SOIL</abbr>

- Biblioteca para carregar arquivos de imagem no formato esperado pelo OpenGL
- Suporta diversos formatos de imagem:
  - png
  - jpg
  - bmp etc.
- Para baixar e ler a documentação: http://lonesock.net/soil.html

---
## Em alguma função de inicialização

```c
GLuint texturaDoMario;    // id de textura

void init() {
  texturaDoMario = SOIL_load_OGL_texture(
    "mario.png",
    SOIL_LOAD_AUTO,
    SOIL_CREATE_NEW_ID,
    SOIL_FLAG_INVERT_Y
  );

  if (texturaDoMario == 0 ) {
    printf("Erro ao carregar textura: '%s'\n", SOIL_last_result());
  }
}
```

---
# Trabalho Prático 1 \o/

_A wild TP1 appears..._

---
## TP1 está a solta

<img alt="Tela do jogo Breakout original" src="../../images/breakout-cool-stages.png"
  style="float: right; width: 420px; margin: 0 0 5px 20px">
_"[...] consiste em uma parede de tijolos que são destruídos quando uma bola, 
        que se movimenta sozinha, colide com eles. A bola se movimenta em duas direções, 
        quatro sentidos diferentes, conforme mostra a imagem abaixo [...]"_

- Enunciado no Moodle (ou [na página do curso](https://github.com/fegemo/cefet-cg/blob/master/assignments/tp1-breakout)).

---
# Referências

- Documentação do OpenGL 2: https://www.opengl.org/sdk/docs/man2/
- Livro Vermelho: http://www.glprogramming.com/red/
