# _Feedback_ do **TP1: Breakout** (2015/01)

---
## Feedback geral

- Os trabalhos ficaram sensacionais!! 
- Tive que comprar novos 2 computadores porque eles explodiram enquanto calculavam as notas ;)
- É possível ter uma nota excelente (próxima de 100%) com poucas linhas de código
  - A ideia é focar na especificação básica - seja um Engenheiro das Especificações de TP
- Ver códigos mal e bem escritos é uma excelente forma para aprender
   
---
<!--
scripts: ['../../scripts/classes/d3.v3.min.js', '../../scripts/classes/nv.d3.min.js', '../../scripts/classes/bubble-chart-breakout-2015-01.js']
styles: ['../../styles/classes/nv.d3.min.css']
-->

## Notas (y) x Linhas de código (x)

<div id="bubble-chart-os" style="width: 80%">
  <svg style="height: 420px; width: 100%"></svg>
</div>


---
# Erros comuns

---
## Erro 1: Números mágicos

- Devemos **evitar usar "números mágicos"**
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

---
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
## Erro 2: Não usar estruturas de dados

- **"Objetos"** que estamos representando em nosso programa 99% das vezes devem 
  ser **codificados como estruturas de dados** (ou classes)
  ```c
  float bolaX, bolaY;
  float bolaLargura, bolaAltura;
  float barraX, barraY;
  float barraLargura, barraAltura;
  ```

---
## Usando estruturas

- ```c
  struct vetor2d {
    float x, y;
  }
  ```
- ```c
  struct bola {
    struct vetor2d posicao;
    struct vetor2d dimensoes;
  }
  ```
  
---
## Erro 3: Chamar **glFlush** E **glutSwapBuffers**

- Quando estamos usando _single buffer_, chamamos `glFlush` para redesenhar.
- Quando estamos usando _double buffer_, chamamados `glutSwapBuffers` para solicitar ao GLUT que 
  redesenhe num momento apropriado
- ```c
  void drawScene() {
    /*...*/
    DrawBall();
    DrawBar();
  
    glFlush();
    glutSwapBuffers();
  }
  ```

---
## Erro 4: **Não indentar** o código

- Diz a lenda que Deus pediu a Moisés para acrescentar um 11º mandamento, mas como 
  este julgou que não havia muitos programadores na época, optou por deixá-lo de fora. Aqui está:
  - **INDENTARÁS** SEU PRÓPRIO CÓDIGO
- ```
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
# Problemas

---
## Problema 1: Fazer **tudo em um arquivo só**

- Não é um erro, mas faz com que o código tenha baixa qualidade por vários motivos:
  1. Reduz legibilidade (capacidade de um leitor compreender)
  1. Reduz reaproveitamento de código
  1. Dificulta encontrar e resolver _bugs_
  1. Tende a causar um alto acoplamento entre os objetos

---
## Problema 2: Dividindo entre **.c** e **.h**

- Um módulo é composto por um arquivo `.h` e um `.c(pp)`
- O cabeçalho (`.h`) serve para definirmos a **interface** de um módulo, ou seja, 
  as funções, estruturas, variáveis e constantes que ele está declarando como 
  **públicas**
- O arquivo de implementação (`.c`) possui o corpo das funções apenas

---
# Melhorias

---
## Melhoria 1: Máquinas de estados

- Uma máquina de estados é um conceito que foi usado por alguns alunos
- No TP1, podia-se (e devia) usar uma máquina de estados para representar as 
  **telas do jogo**
  - A máquina de estados é composta por 3 partes:
    1. Uma variável (que chamamos "de estado")
    1. Um conjunto de valores para essa varíavel (os estados existentes)
    1. Uma função de transição para um novo estado
    
---
## Exemplo de **máquina de estado** (parte 1)

1. Conjunto de estados (usando constantes inteiras e `enum`)
  ```c
  const int MENU = 1;
  const int JOGO = 2;
  const int VITORIA = 3;
  const int GAMEOVER = 4;
  ```
  ```c
  enum Tela { MENU, JOGO, VITORIA, GAMEOVER };
  ```

---
## Exemplo de **máquina de estado** (parte 2)

1. Variável de estado (usando constantes inteiras e `enum`)
  ```c
  int telaAtual = MENU;
  ```
  ```c
  Tela telaAtual = MENU;
  ```

---
## Exemplo de **máquina de estado** (parte 3)

- Função de transição para novo estado (usando `enum`)
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
## Exemplo de **máquina de estado** (parte 4)

- Efetivamente **usando a variável de estado**:
  ```c
  void drawScene() {
    switch (telaAtual) {
      case MENU:
       /*..*/
    }
  }
  void keyboard() {
    switch(telaAtual) {
      case MENU:
        /*..*/
    }
  }
  ```