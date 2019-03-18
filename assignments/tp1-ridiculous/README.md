# Trabalho Prático 1 - Pescando Ridiculamente

<img src="../../images/ridiculous-fishing.gif" style="float: right">
> "Muito mal falado é o pescador. Ninguém acredita nele. Eu mesmo, quando
> chasqueei um matreiro e a vara embodocou com a força desse bruto, tive que
> pegar a espingarda e atirar nele antes que ele avançasse em mim. Se eu
> não tivesse feito um jogo, ninguém acreditava assim." -- Relato pseudoverdadeiro de um pescador desconhecido


Neste trabalho você vai fazer um jogo para as pessoas pescarem. Não
necessariamente peixes - mas pode ser. O objetivo do trabalho é praticar
o uso de uma API gráfica para a criação de jogos e aplicações interativas em
2D, além de exercitar o conceito de programação orientada por eventos. O
trabalho deve ser feito em C/C++, usando OpenGL.

¹ Se optar por outra linguagem diferente de C ou C++, converse com o professor
sobre isso **antes de começar** ;)

## Instruções sobre o jogo

O jogo consiste em uma **câmera fixa** (sem rolagem) em um **ambiente 2D** e
um **personagem controlado pelo jogador por meio do teclado** representando
o anzol. O personagem começa no alto da tela e vai andando para baixo com
velocidade constante. Há vários objetos no cenário que ficam grudados
ao personagem quando este passa por cima deles. Quando o personagem chega
ao fundo, ele começa a ser recolhido com uma velocidade maior que a de descida
e, ao chegar no topo, o jogador pontua de acordo com a quantidade de objetos
coletados.

O uso de **texturas** neste trabalho é obrigatório. Utilize-as tanto para
dar vida ao ambiente 2D do campo de visão do jogador quanto para estilizar o
personagem e os objetos. Para fins de colisão, os objetos e o personagem
podem ser considerados todos retangulares ou todos circulares.

O **ambiente do jogo deve ser caracterizado** graficamente. Por exemplo, se
o jogo se passa debaixo d'água, coloque um desenho de peixes, bolhas e corais
no fundo, e também outros objetos que componham o cenário.

Deve haver um _head-up display_ (**HUD**) mostrando a pontuação atual
do jogador.

Além do controle do personagem via teclado, os seguintes comandos devem
ser implementados:

- Clicando na tecla *p*, o jogo deve **pausar/continuar**;
- Clicando em *r*, o jogo deve ser **reiniciado**;
- Clicando em *esc*, o jogo deve ser **encerrado**.

**Atenção:** uma mensagem de confirmação deve ser exibida para as ações de
reiniciar e encerrar o jogo.

A lógica do jogo implementada, o uso de textura, cálculo de colisões, a
interação do teclado e a lógica de jogo equivalem a um total de
**75%** da nota do trabalho. Para conseguir mais pontos, você pode
implementar algumas das funcionalidades adicionais. Essas funcionalidades
serão avaliadas de acordo com a **dificuldade de implementação**, o
**efeito obtido** dentro do jogo e a **qualidade da implementação**.
Implementando-as, você pode obter até **125%** da pontuação do trabalho! :3

Exemplos de funcionalidades com suas respectivas pontuações **máximas** são
mostrados a seguir:

- ❤️ **Rolagem do cenário (10%)**: em vez de ter uma câmera fixa, faça um
  cenário que é maior do que o espaço disponível da tela e, na medida que o
  personagem vai mudando sua posição Y, vá mostrando novas partes do cenário
- ⭐ **Texturas animadas (até 10%)**: crie animações para as texturas tanto
  para o cenário quanto para os objetos e o personagem. **#dikentinha**: busque
  por _spritesheet_ na Internet
  - Personagem (**2%**)
  - Objetos coletáveis (**até 4%**)
  - Objetos ou cenário animados (**até 4%**)
- **Tipos de objetos (4%)**: pode haver a distinção entre objetos que são
  ruins para o personagem (ele deve evitar) ou que são bons (deve capturar).
  Ao encostar em um objeto "do mal", o personagem pode (a) perder ponto ou
  (b) perder os itens coletados ou (c) perder vida (neste caso, veja o
  adicional de "vidas")
  - **Vidas (4%)**: em vez de dar _game over_ de primeira, faça com que o
    jogador comece com 3 vidas e, assim que ele encostar em um obstáculo e ainda
    tiver vidas ele fique piscando por um tempo. A HUD deve mostrar a quantidade
    de vidas, além da pontuação
- ❤️ **Segunda etapa (7%)**: assim que o personagem terminar de ser
  resgatado, faça com que seja necessário acertar os itens coletados, que são
  jogados para o alto e, só então, a contabilização de pontos deve ser feita
- **_Power-ups_ (até 12%)**: implemente alguns meios do jogador aumentar suas
  chances de sobrevivência. Pode ser um escudo de proteção que dure alguns
  segundos, ou um pequeno relógio que faça o tempo ficar mais devagar,
  diminuindo momentaneamente a velocidade dos objetos. São várias
  possibilidades, use a criatividade!
  - Pontuação será dada de acordo com a quantidade e complexidade
- ❤️ **Efeito _parallax_** do cenário: você pode fazer um cenário composto,
  em que as partes se movimentam com velocidades diferentes, criando a sensação
  de profundidade (mais sobre esse efeito
  [aqui](https://en.wikipedia.org/wiki/Parallax_scrolling) e
  [aqui](http://forum.jogos.uol.com.br/curiosidade-efeito-parallax_t_1921012))
  (**8%**)
- ⭐ **Manter razão de aspecto (4%)**: faça com que a razão de aspecto do jogo
  seja sempre mantida, independente das dimensões da janela, e aproveitando
  o máximo de espaço possível (e no centro)
- **Fases (até 8%)**: crie (umas 4) fases diferentes com mudanças no cenário
  e nos tipos de objetos e, quem sabe, na profundidade. Faça com que o nível de
  dificuldade comece baixo e aumente nas últimas fases
  - **Fases descritas em arquivo (+4%)**: proponha um formato de arquivo para
    armazenar as informações de cada fase, como posições de objetos, fundo etc.
- ⭐ **Telas (até 8%)**: faça um jogo completo, ou seja, implemente telas de  
  _splash screen_, menu inicial, créditos, opções, _game over_, etc.
- ⭐ **Sons (até 8%)**: coloque efeitos sonoros e música de fundo no seu jogo
- **Botões clicáveis (até 4%)**: coloque botões na interface com opções pro
  usuário e possibilite que ele interaja via mouse
  - **Efeito _hover_ (+2%)**: quando o mouse passar por cima do botão, faça
    algum tipo de efeito para comunicar que ele é clicável
- **Highscore salvo em arquivo (até 12%)**: faça a pontuação dos `n` melhores
  jogadores ser salva em um arquivo (e.g., pontuacao.txt) e coloque uma
  tela no jogo para mostrar isso
  - Para ganhar total, faça com que o usuário possa digitar seu nome, que
    um algoritmo de ordenação matenha sempre apenas os `n` melhores e que
    tenha uma tela mostrando isso
- **Controle de versão (4%)**: desenvolva o trabalho usando algum sistema
  de controle de versão (como o git) hospedado em algum serviço gratuito e
  aberto (como o github, bitbucket, gitlab)
  - Não vale fazer só 01 commit no final :P
- **Implementação criativa**: qualquer implementação que não fuja muito do
  pedido, mas que traga elementos novos e interessantes para o seu jogo é
  bem-vinda! (**?%**)

### Um lembrete importante

Preocupe-se **primeiro em implementar as funcionalidades básicas do trabalho!**
Deixe o embelezamento do trabalho e a implementação das funcionalidades extras
para somente quando você já possuir a base lógica do trabalho construída
e funcionando.

## Instruções gerais

O seu código deve estar comentado e, principalmente, organizado: ao
construí-lo, pense que outra pessoa lerá o código e você não estará lá para
explicar seu raciocínio. Portanto, organize-o! Também não é necessário
comentar o código inteiro, mas o faça quando sentir necessidade de uma
explicação adicional à sua lógica.

Seu trabalho pode ser feito individual ou em duplas e deve ser produzido
integralmente por você/dupla. Se recursos de terceiros forem usados
(e.g., imagens, músicas, efeitos sonoros), coloque links para elas na
documentação. A discussão e troca de ideias com os colegas é bem-vinda e
estimulada, mas cada aluno/dupla deve ter seu próprio trabalho.

Trabalhos muito semelhantes receberão nota 0, independente de quem
copiou quem. E claro, trabalhos semelhantes aos de outras pessoas ou
retirados da Internet, também receberão nota 0. Além da nota redonda,
eles serão encaminhados ao colegiado para apreciação.

Outros descuidos também o farão **perder pontos no trabalho**, como:

- Seu trabalho não executa: nota 0;
- Seu trabalho é uma cópia (como já mencionado): nota 0;
- Você não implementou os itens obrigatórios;
- Ausência de algum item obrigatório no que deve ser entregue (descritos
  a seguir);
- Baixa legibilidade/organização do código;
- Baixa qualidade da implementação;
- Entregar fora do prazo. Cada dia de atraso reduz o valor máximo de nota
  de acordo com a equação abaixo, de modo que `x` representa o número de
  dias de atraso e `f(x)` equivale à penalidade percentual da nota:

  ![Fórmula de penalidade por atraso](../../images/penalidade-por-atraso.png)
  - Isso implica que 1 ou 2 dias de atraso são pouco penalizados
  - E após 5 dias de atraso, o trabalho vale 0
  - _Seeing is believing_:
    https://www.google.com.br/search?q=y%3D(2%5E(x-2)%2F0.16)%2Cy%3D100

## O que deve ser entregue

Você deve entregar um arquivo .tar.gz, .7z ou .zip via Moodle contendo os
seguintes itens:

1. Pelo menos três screenshots de diferentes cenas de seu jogo;
2. Todo o programa fonte, com makefiles e bibliotecas necessárias para a
   compilação e execução do programa;
3. O arquivo executável do jogo;
4. Um arquivo README contendo (a) instruções para a compilação e execução, e
   (b) a lista de itens adicionais implementados em seu jogo (via formulário
   do Google que será enviado)
5. Um link para um vídeo curto (30 a 60s) no YouTube mostrando seu jogo
   implementado. Faça um vídeo curto!

Qualquer dúvida, entre em contato com o professor ou com o/a monitor(a).
Ou então acrescente a sua interpretação no arquivo README e mãos à obra!
