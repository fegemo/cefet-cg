# Trabalho Prático 2 - _CG Runner_

Neste trabalho, vamos praticar os conceitos de projeção, iluminação, modelagem
hierárquica e efeitos visuais vistos em sala, em uma linguagem de
programação à sua escolha (C/C++, Java, etc.).

Um dos primeiros jogos de plataforma a simular perspectiva 3D com câmera
acompanhando surgiu no começo da década de 1980, desenvolvido pela Konami, com o
nome Antarctic Adventure. Nele, o jogador controla um pinguim atleta que
corre para frente ("tela adentro") e a câmera o acompanha (em 3ª pessoa),
enquanto salta por cima de buracos e obstáculos e coleta seus
deliciosos peixe-petiscos. Hoje em dia também temos jogos semelhantes, como
Temple Run ([video][temple-run]) e Subway Surfers ([video](subway-surfers)).

![](http://i.imgur.com/rPKS1TR.gif)

O conceito de "estar correndo em um cenário" também já foi usado de outras
formas além dos jogos, como no experimento sinestésico chamado
[Endless Foreset][endless-forest].


O objetivo deste trabalho é criar um cenário no estilo dos jogos _runner_
contendo um personagem que corre para frente com a câmera sempre o
acompanhando pelas costas. É possível transformar o trabalho em um
jogo (_e.g._, vidas, obstáculos, colisão), valendo pontos extras, ou então
deixar o cenário super lindão com outros tipos de extras (_e.g._,
carregar modelos 3D, efeitos atmosféricos).

O trabalho deve ser acompanhado da seguinte forma:

- **Semana 1**: criação da movimentação hierárquica do personagem;
- **Semana 2**: criação do cenário;
- **Semana 3**: criação da interatividade - lógica de jogo ou
  detalhes de cenário;
- **Semana 4**: implementação de extras e ajustes finais.

Esse trabalho pode ser feito individualmente, ou em dupla, e
como funcionalidade básica, valendo 80% ou 65% (respectivamente) da
nota, deve ter os seguintes itens:

- **Personagem**:
  - Deve haver um **personagem 3D e orgânico** (não pode ser uma chaleira :D)
    que está se movendo para frente
    - Ele pode ser feito usando **sólidos GLU ou FreeGlut**
    - Ele deve seguir uma **modelagem hierárquica** (_i.e._,
      `glPushMatrix()` ... `glPopMatrix()`)
  - O personagem está sempre se **deslocando para frente**
  - Deve haver uma **animação** que mostra que o personagem está em movimento
    (_e.g._, pernas mexendo, asas batendo etc.)
    - Veja um exemplo no
      [TP _"Escape the Madness"_][personagem-escape-the-madness] do Augusto
      e do Igor Lacerda
  - (Jogo) Deve ser **controlado pelo jogador** de alguma forma (teclado
    ou mouse). O personagem deve ir "devagarzim" (_i.e._, interpolação) em
    vez de simplesmente ser "teletransportado" para a posição desejada
    - (⬅️) Vai para a pista à esquerda
    - (➡️) Vai para a pista à direita
- **Mundo**:
  - Deve haver um mundo com pelo menos uma **região plana** onde o personagem
    deve percorrer
  - (Jogo) O mundo deve ser **dividido em pistas** (_e.g._, 3) onde
    o personagem corre/trafega/navega/sobrevoa
  - (Jogo) Deve haver obstáculos que precisam ser evitados pelo jogador
    - Devem existir pelo menos 2 tipos de obstáculos (_e.g._, pedras e buracos)
      - Podem ser construídos usando sólidos GLU e FreeGlut
      - O personagem não pode atravessar objetos
      - Se o jogador falhar em evitar um obstáculo, ele deve ser
        teletransportado para o início
  - (Cenário) Deve haver pelo menos 03 tipos de objetos diferentes compondo o
    cenário, de acordo com a temática sendo usada
  - (Cenário) Objetos devem ser distribuídos programaticamente
    - Veja como desenvolvedores (gênios) do jogo Spore distribuiram objetos
      nos planetas neste
      [resumo expandido](http://www.cs.cmu.edu/~ajw/s2007/0312-ObjectDistribution.pdf)
- **Câmera**:
  1. Você deve usar projeção perspectiva via `glFrustum` ou `gluPerspective`.
  1. A câmera deve acompanhar o personagem (em 3ª pessoa)
  1. (Cenário) A câmera pode ser parcialmente controlada pelo jogador usando
     teclado ou mouse:
     - (⬅️) Gira a câmera para a esquerda
     - (➡️) Gira a câmera para a direita
- **Gráficos**:
  1. Você deve usar o modelo de
    [iluminação do OpenGL, devidamente configurado][lighting].
    - Basta que sua cena tenha 1
    [fonte de luz direcional][lighting-directional].

Para se obter o restante dos pontos do trabalho (ou até mesmo mais pontos
extras, até um limite de **125%** da pontuação original) funcionalidades
adicionais podem/devem ser implementadas no jogo. Essas funcionalidades
serão avaliadas conforme a **dificuldade da implementação**, o
**efeito obtido** com ela no trabalho e a **qualidade da implementação**.
Exemplos de funcionalidades extras com suas respectivas pontuações **máximas**:

- **Modo de jogo**:
  1. **Vidas (4%)**: o personagem perde vidas ao falhar em evitar obstáculos, em
     vez de "reiniciar o jogo"
     - Deve haver uma HUD indicando a vida corrente
  1. **Lógica de jogo (10%)**: transformar em jogo
     - O jogo terá duas possibilidades de modos: corrida em fases ou infinita,
       sendo necessário pelo aluno escolher apenas um
     - A dificuldade deve aumentar gradativamente. Isso pode ser feito
       aumentando-se a velocidade do personagem ou colocando mais obstáculos no
       caminho
     - O **fim do jogo** é atingido quando o número de vidas chegar a
       zero ou então quando as fases terminarem (se o jogo for finito)
  1. **Pontuação (4%)**: uma medida de tempo, distância ou de "moedas"
     coletadas pelo jogador - deve ser exibida na HUD
     - Se **algo "coletável" (+4%)**
     - **_Highscore_ em arquivo (+6%)**: salvar e carregar a pontuação em
       um arquivo texto e ter uma telinha pra mostrar as maiores pontuações
  1. **Itens (até 15%)**: pode haver vários tipos de itens que modificam
     temporariamente o jogo (vida extra, imunidade ~~parlamentar~~ etc.)
  1. **Telas acessórias (10%)**: tela de menu, créditos, instruções e _splash_
- **Modo de cenário**:
  1. **Efeitos de partículas (até 12%)**: use sistemas de
     partículas para fazer uma simulação interessante sobre fogo,
     água, fumaça, por exemplo.
  1. :star2: **Tipos de terrenos** diferentes: em vez de apenas um tipo de
     chão, tenha também outros tipos como metal, tijolo, madeira etc.
     - Isto pode ser feito com texturas diferentes
  1. **Efeitos atmosféricos (até 10%)**: chuva (efeito de partículas),
     neve (efeito de partículas), tempestade
  1. Ciclos de **dia/noite (até 10%)**: faça o tempo passar e o cenário
     refletir o horário do dia
     - Cor da luz vai variando
     - _Skybox_, se tiver, também deve variar
     - Som ambiente, se tiver, pode variar
  1. :bomb: **Sombras dinâmicas (até 12%)**: gere sombras dinamicamente
     usando as técnicas de _shadow maps_ ou _shadow volumes_
- Relativos aos **Objetos**:
  1. :bomb: :boom: **Modelos no formato .obj (até 10%)**: em vez de usar os
     sólidos da GLU/FreeGLUT, modele objetos \*simples\* usando um _software_
     CAD, salve-o num formato \*simples\* (_e.g._, `.obj`) e carregue-o no
     seu programa. Há alguns tutoriais disponíveis nas _interwebs_ sobre
     como abrir um arquivo `.obj`, ler a informação sobre os vértices e
     desenhá-los... aqui estão alguns: [tutorial 1][obj-tut-1],
     [tutorial 2][obj-tut-2], [tutorial 3][obj-tut-3].
- Relativas ao **Personagem**:
  1. :star2: **Salto (até 4%)**: faça com que o personagem salte, por
     exemplo, com a <kbd>barra de espaço</kbd>;
- Relativas à **Câmera**:
  1. **_Head bobbing_ (até 5%)** ao mover a câmera,
     em vez de deixar sua coordenada Y intacta, aplique uma função matemática,
     cíclica (_e.g._, `sin(t)`, `cos(t)`, [`abs(sin(t))`][bob-abs-sin]) para
     variá-la e ter a sensação de que é uma pessoa andandando que está
     segurando a câmera.
  1. :star2: **_Fullscreen_ (3%)**: permitir o redimensionamento da janela
     de visualização sem perda da razão de aspecto (sem que haja distorção
     de achatamento/alongamento) e com aproveitamento total do
     espaço disponível.
- Relativas a **Gráficos**:
  1. :star2: **Neblina (3%)**: a partir de uma certa distância
  1. :star2: **Subdivisão do chão (4%)**: em vez de fazer o chão como um único
     quadrilátero, faça-o subdividido em diversos quadriláteros (_e.g._,
     usando várias tiras de triângulos)
     - **_Wireframes_ (+2%)**: ao pressionar a tecla `f` o chão (e todo
       o resto, se quiser) deve alternar entre modo de desenho preenchido
       e modelo de arame (`glPolygonMode()`).
  1. _Design_ **_low-poly_, _flat-shaded_ (até 10%)**:

     [![Árvores e pedras modeladas em 3D usando poucos polígonos e com sombreamento constante](../../images/lowpoly-trees-and-stones.jpg)](https://www.youtube.com/watch?v=rtO9maU709k)
  1. Fontes de **luz pontual (até 7%)**: além da fonte luminosa direcional,
     crie uma ou mais fontes de luz pontuais ao longo do caminho.
  1. :collision: **_Skybox_ (até 5%)**: se considerarmos que nosso mundo
     está definido dentro de um cubo, podemos colocar uma imagem de textura
     em cada face interna (6) que represente o horizonte naquela direção. Veja
     [exemplos de texturas de _skyboxes_][skybox] e nossa aula sobre
     [efeitos visuais][visual-fx]. Repare que o cubo _skybox_ acompanha
     a posição, ou seja, não é possível se aproximar (muito menos sair) do cubo.
- Outros adicionais:
  1. :star2: **Música e efeitos sonoros (até 10%)**: você pode incluir
     uma música de fundo, sons ambientes e efeitos sonoros.
  1. :bomb: :bomb: **Modelo de iluminação != Phong (até 8%)**: use os recursos
     de programabilidade do pipeline gráfico e crie seus próprios sombreadores
     (_vertex shader_ e _fragment shader_)
- **Qualquer outra idéia (??%)** que torne o labirinto mais interessante ou
  agradável aos sentidos. Essas idéias precisam ser documentadas e
  explicadas no documento de entrega do trabalho (`README.txt`).


Legenda dos ícones:
  - :star2:: item sugerido por ser interessante ou super simplão.
  - :collision:: item com maior complexidade de implementação - não
    comece por estes!!
  - :bomb:: item com alta complexidade de implementação - Deixe para o fim!!
  - :bomb::bomb:: Bombas... nível hardcore!

## Instruções gerais

O trabalho pode ser feito individualmente ou em duplas e deve ser produzido
integralmente pelos aluno ou dupla. Podem discutir idéias com outros colegas,
mas cada aluno/dupla deve ter a sua implementação independente dos demais.
**Trabalhos muito semelhantes receberão notas muito semelhantes (iguais a 0)**,
independente de quem copiou de quem. Trabalhos semelhantes aos de outras
pessoas (ex-alunos, pessoas na Internet) também receberão nota 0.


## O que faz perder nota

Alguns descuidos podem fazer com que sua nota fique abaixo do esperado:
- Seu trabalho não executa: nota 0
- Cópia de trabalho de outrem: nota 0
- Ausência de qualquer item obrigatório da entrega (descrito na próxima seção)
- Ausência de itens da especificação obrigatória
- Baixa legibilidade do código
- Baixa qualidade da implementação
- Atraso na entrega. Cada dia de atraso reduz o valor máximo de nota da
 maneira abaixo. Considere `x` como dias de atraso e `y` a penalidade
 percentual na nota:

 ![Fórmula de penalidade por atraso](../../images/penalidade-por-atraso.png)
 - Isso implica que 1 ou 2 dias de atraso são pouco penalizados
 - E após 5 dias de atraso, o trabalho vale 0
 - _Seeing is believing_: https://www.google.com.br/search?q=y%3D(2%5E(x-2)%2F0.16)%2Cy%3D100


## O que deve ser **entregue**

Deve ser entregue **um arquivo .tar.gz ou .zip** via **Moodle** contendo:
 1. 3+ _screenshots_ de diferentes cenas do seu jogo
 1. Todo o programa fonte, com os _Makefiles_ e bibliotecas necessárias
    para a compilação e execução do programa
 1. O arquivo executável
 1. Um arquivo **README** contendo:
    - Instruções para **compilação e execução**
    - **Lista de itens adicionais** que seu jogo está pleiteando
 1. [opcional, +5%] O link para um vídeo breve (_e.g._, youtube) do
    seu jogo mostrando as opções implementadas.

Qualquer dúvida, entre em contato comigo. Ou acrescente a sua interpretação no
arquivo README e mãos à obra.

[temple-run]: https://www.youtube.com/watch?v=qPMIQobB3ZM
[subway-surfers]: https://www.youtube.com/watch?v=tYysQOHTimo
[personagem-escape-the-madness]: https://youtu.be/4135xTpFo74?t=1m2s
[endless-forest]: http://oos.moxiecode.com/js_webgl/forest/index.html
[skybox]: https://www.google.com.br/search?q=skybox&safe=off&hl=pt-BR&source=lnms&tbm=isch&sa=X&ei=jMM_VenRNKuasQSCwYDABw&ved=0CAgQ_AUoAg&biw=1366&bih=599
[lighting]: http://fegemo.github.io/cefet-cg/classes/lighting/#26
[lighting-directional]: http://fegemo.github.io/cefet-cg/classes/lighting/#37
[obj-tut-1]: http://www.opengl-tutorial.org/beginners-tutorials/tutorial-7-model-loading/
[obj-tut-2]: http://netization.blogspot.in/2014/10/loading-obj-files-in-opengl.html
[obj-tut-3]: https://tutorialsplay.com/opengl/2014/09/17/lesson-9-loading-wavefront-obj-3d-models/
[obj-distribution]: http://moodle.cefetmg.br/mod/forum/discuss.php?d=3572
[visual-fx]: http://fegemo.github.io/cefet-cg/classes/visual-effects/#4
[bob-abs-sin]: http://www.wolframalpha.com/input/?i=abs%28sin%28x%29%29
