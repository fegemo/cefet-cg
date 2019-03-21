<!-- {"layout": "title"} -->
# _Feedback_ do **TP1: Breakout** (2015/01)

---
<!-- {"layout": "regular"} -->
## Feedback geral

- Os trabalhos ficaram sensacionais!!
- Tive que comprar novos 2 computadores porque eles explodiram enquanto calculavam as notas ;)
- É possível ter uma nota excelente (próxima de 100%) com poucas linhas de código
  - A ideia é focar na especificação básica - seja um Engenheiro das Especificações de TP
- Ver códigos mal e bem escritos é uma excelente forma para aprender

---
<!-- {"layout": "centered-horizontal", "scripts": ["../../scripts/classes/d3.v3.min.js", "../../scripts/classes/nv.d3.min.js", "../../scripts/classes/bubble-chart-breakout-2015-01.js"], "styles": ["../../styles/classes/nv.d3.min.css"]} -->
## Notas (y) x Linhas de código (x)

::: figure .bubble-chart-os width: 100%;
<svg style="height: 420px; width: 100%"></svg>
:::

---
<!-- {"layout": "centered", "state": "emphatic"} -->
# Erros comuns

---
<!-- {"layout": "2-column-content"} -->
## Erro 1: Números mágicos

- Devemos **evitar usar "números mágicos"** <!-- {.compact-code} -->
  ```
  void Platform(int v, int x){
  	 if(v>=200 & v<280){
  	 	bar=0;
  	 }
  	 if(v>=0 & v<200){
  		bar=2;
      }
  	 if(v>=280 & v<=480){
  		bar=1;
  	 }
  }
  ```

1. O que significam 200, 280, 480?
   - Eram o início do primeiro, segundo e terceiro terço da largura da tela
   - Então, em vez de 200:
      ```c
      int ladoEsquerdo = LARGURA/3;
      ```
1. O que significa `bar=1`?
   - Era a velocidade positiva para a barra
     ```c
     enum VelocidadeBarra {
        ESQUERDA, PARADA, DIREITA
     };
     ```
---
<!-- {"layout": "regular"} -->
## Soluções para números mágicos

- Usar **constantes ou variáveis** cujos nomes comuniquem **a semântica do número**:
  - ```c
    const int DIREITA_DA_ZONA_MORTA = 280;
    const int ESQUERDA_DA_ZONA_MORTA = 200;
    ```
  - Ou então usando diretivas do pré-processador:
    ```c
    #define DIREITA_DA_ZONA_MORTA 280
    #define ESQUERDA_DA_ZONA_MORTA 200
    ```


---
<!-- {"layout": "regular"} -->
## Erro 2: Não usar estruturas de dados

- **"Objetos"** que estamos representando em nosso programa 99% das vezes devem
  ser **codificados como estruturas de dados** (ou classes) <!-- {li:.compact-code} -->
  ```c
  float bolaX, bolaY;
  float bolaLargura, bolaAltura;
  float barraX, barraY;
  float barraLargura, barraAltura;
  ```
- Usando estruturas: <!-- {li:.two-column-code} -->
  ```c
  struct vetor2d {
      float x, y;
  };

  struct bola {
    struct vetor2d posicao;
    struct vetor2d dimensoes;
  };
  ```

---
<!-- {"layout": "regular"} -->
## Erro 3: Chamar `glFlush` **E** `glutSwapBuffers`

- Quando estamos usando _single buffer_, chamamos `glFlush` para redesenhar.
- Quando estamos usando _double buffer_, chamamados `glutSwapBuffers` para solicitar ao GLUT que
  redesenhe num momento apropriado <!-- {.compact-code} -->
  ```c
  void drawScene() {
    /*...*/
    DrawBall();
    DrawBar();

    glFlush();            // errou rude
    glutSwapBuffers();
  }
  ```

---
<!-- {"layout": "regular"} -->
## Erro 4: **Não indentar** o código

- Diz a lenda que Deus pediu a Moisés para acrescentar um 11º mandamento,
  mas como este julgou que não havia muitos programadores na época,
  optou por deixá-lo de fora: <!-- {li:.compact-code} -->
  - **INDENTARÁS** TEU PRÓPRIO CÓDIGO
  ```c
  void CheckBricks(){
  for (int i=0;i<21;i++){
     if(bx<=tijolo[i].x && bx<=tijolo[i].x1){
       if(by<=tijolo[i].y && by<=tijolo[i].y1){
                diry=diry*-1;
      }
     }
     }
   }
  ```

---
<!-- {"layout": "centered", "state": "emphatic"} -->
# Problemas

---
<!-- {"layout": "regular"} -->
## Problema 1: Fazer **tudo em um arquivo só**

- Não é um erro, mas faz com que o código tenha baixa qualidade por vários
  motivos:
  1. Reduz legibilidade (capacidade de um leitor compreender)
  1. Reduz reaproveitamento de código
  1. Dificulta encontrar e resolver _bugs_
  1. Tende a causar um alto acoplamento entre os objetos
- Solução: divisão em **módulos reutilizáveis**. Exemplos:

`sprite`
  ~ um elemento retangular texturizado que é desenhado na tela

`sprite_animada`
  ~ idem, mas com quadros de animação

`vetor2d`
  ~ um vetor geométrico com suas operações tradicionais
    (distância, norma...)

---
<!-- {"layout": "regular"} -->
## Problema 2: Dividindo entre **.c** e **.h**

- Um módulo é composto por um arquivo `.h` e um `.c(pp)`
- O cabeçalho (`.h`) serve para definirmos a **interface** de um módulo, ou seja,
  as funções, estruturas, variáveis e constantes que ele está declarando como
  **públicas**
- O arquivo de implementação (`.c`) possui o corpo das funções apenas
  - E pode ser que nem todas as funções precisem ser públicas. Exemplo: <!-- {li^0:.two-column-code.compact-code-more} -->
    ```c
    // sprite_animada.h
    struct sprite_anim {
      // ...
    };

    // atualiza a posição e o quadro de
    // animação da sprite_anim
    void atualiza(struct sprite_anim);

    // sprite_animada.c
    #include "sprite_animada.h"
    void movimenta(struct sprite_anim sp) { /* */ }
    void anima(struct sprite_anim sp) { /* ... */ }
    void atualiza(struct sprite_anim sp) {
        movimenta(sp);
        anima(sp);
    }
    ```

---
<!-- {"layout": "centered", "state": "emphatic"} -->
# Boas práticas

---
<!-- {"layout": "regular"} -->
## Melhoria 1: Máquinas de estados

- Uma máquina de estados é um conceito que foi usado por alguns alunos
- No TP1, podia-se (e devia) usar uma máquina de estados para representar as
  **telas do jogo**
  - A máquina de estados é composta por 3 partes:
    1. Uma variável (que chamamos "de estado")
    1. Um conjunto de valores para essa varíavel (os estados existentes)
    1. Uma função de transição para um novo estado

---
<!-- {"layout": "regular"} -->
## Exemplo de **máquina de estado** (parte 1)

2. Conjunto de estados (usando constantes inteiras e `enum`)
   ```c
   const int MENU = 1;
   const int JOGO = 2;
   const int VITORIA = 3;
   const int GAMEOVER = 4;
   ```
   ```c
   // forma melhor
   enum Tela { MENU, JOGO, VITORIA, GAMEOVER };
   ```

---
<!-- {"layout": "regular"} -->
## Exemplo de **máquina de estado** (parte 2)

1. Variável de estado (usando constantes inteiras e `enum`)
   ```c
   int telaAtual = MENU;
   ```
   ```c
   // forma melhor
   Tela telaAtual = MENU;
   ```

---
<!-- {"layout": "regular"} -->
## Exemplo de **máquina de estado** (parte 3)

3. Função de transição para novo estado (usando `enum`) <!-- {.compact-code} -->
   ```c
   void mudaTela(Tela novaTela) {
       // faz uma "transição" para o novo estado
       switch (novaTela) {
           case MENU:
           case JOGO:
           case VITORIA:
           case GAMEOVER:
               break;
      }
      // efetivamente muda a variável de estado
      telaAtual = novaTela;
   }
   ```

---
<!-- {"layout": "regular"} -->
## Exemplo de **máquina de estado** (parte 4)

- Efetivamente **usando a variável de estado**: <!-- {.compact-code} -->
  ```c
  void desenhaCena() {
      switch (telaAtual) {
          case MENU:
              desenhaMenu();  // ...
      }
  }

  void teclado(unsigned char key, int x, int y) {
      switch(telaAtual) {
          case MENU:
              tecladoMenu(key, x, y);   // ...
      }
  }
  ```
