# Trabalho Prático 0 - Ambiente de Desenvolvimento

Você, como um assíduo e responsável programador, vai preparar o ninho de
produção intelecto-científica que tem em casa (vulgarmente chamado
computador) para poder começar a escrever deliciosos programas em OpenGL.

## O que deve ser feito

Em particular, você deve **configurar um ambiente de desenvolvimento** em
linguagem C/C++¹ de forma que seja possível **compilar e executar programas
que usam OpenGL**.

Esse ambiente é composto por:

- Um **sistema operacional** dentre: Linux 💓, Windows e OSX
- Um **editor de texto** ou **IDE**. Exemplos:
  - CodeBlocks 👍 (tem nos laboratórios)
  - Dev-C++
  - Eclipse
  - Visual Studio
  - XCode
  - Sublime Text
  - Atom
  - VSCode

O OpenGL tipicamente já está "instalado" no computador - ele faz parte do
_driver_ da placa de vídeo. Contudo, vamos precisar de outras bibliotecas,
sendo elas:

- **freeglut** (_Free OpenGL Utility Toolkit_), para poder criar janelas
  e desenhar usando comandos do OpenGL dentro delas
- **glew** (_OpenGL Extension Wrangler_), para gerenciar qual versão do OpenGL
  deseja-se usar


> ¹Em C/C++: se você está se sentindo um aventureiro pimpão e quiser usar
> outra linguagem de programação com OpenGL, converse com o professor.

## Testando o ambiente

Para testar se o ambiente está funcionando, você deve usar o programa
`main.c` com nosso _hello world_. Siga os passos:

1. Baixar o [código fonte](https://raw.githubusercontent.com/fegemo/cefet-cg-exemplos-opengl/master/quadrado-callbacks/main.c)
1. Criar um projeto no seu IDE/editor de texto e configurá-lo devidamente
1. **Modificar o título** da janela para **mostrar o seu nome**
1. Compilar e executar

O programa deve compilar e executar corretamente, gerando o seguinte resultado:

![Imagem mostrando uma janela com o fundo branco e um quadrado verde, centralizado, ocupando aparentemente 50% do espaço](../../images/opengl-hw-inicial.png)

## O que deve ser entregue

Você deve entregar uma imagem contendo **01 _screenshot_** da tela do computador
mostrando:
1. o programa executando (com seu nome no título da janela) e
1. o
ambiente de desenvolvimento no fundo.

### Pontuação e item extra

Configurar o ambiente e enviar a _screenshot_ vale 1 ponto. Contudo,
você pode também ganhar **1 delicioso e importante ponto extra** se você:

1. **Instalar** também a [biblioteca SOIL][soil-search] que possibilita
   carregar imagens .png, .jpg (e outros formatos) para usar como texturas
   em programas OpenGL
   - Para testar se o programa está funcionando, compile e execute
     [este `main.c`][soil-main], do exemplo textura-simples-soil e **tire uma _screenshot_ desse exemplo também**.
   - Esse programa mostra um desenho do encanador mais famoso do mundo e
     requer que [esta imagem][mario] esteja na mesma pasta do programa executável
     (e.g., main.exe no Windows)
   - Se você quiser, pode usar um arquivo de projeto da IDE CodeBlocks
     que está acessível aqui: https://github.com/fegemo/cefet-cg-exemplos-opengl/tree/master/textura-simples-soil (é o arquivo .cbp - de _codeblocks project_)
1. **Criar um tutorial descrevendo os passos da configuração** para ajudar
   os alunos do futuro

[soil-search]: https://www.google.com.br/search?hl=pt-BR&q=soil+opengl&meta=&gws_rd=ssl
[soil-main]: https://raw.githubusercontent.com/fegemo/cefet-cg-exemplos-opengl/master/textura-simples-soil/main.c
[mario]: https://github.com/fegemo/cefet-cg-exemplos-opengl/blob/master/textura-simples-soil/mario.png


### Envio do trabalho

Envie a(s) imagem(ns) com a(s) _screenshot(s)_ pelo [Moodle](http://ava.cefetmg.br) da disciplina.

Envie o tutorial pelo
[Sistema de Tutoriais OpenGL](http://opengl-tutorials.herokuapp.com/). Não
deixe de fazer login no sistema antes.


## Referências de apoio

Veja os tutoriais criados pelos alunos de Computação Gráfica em semestres
anteriores:

- Sistema [Tutoriais OpenGL](http://opengl-tutorials.herokuapp.com/)
