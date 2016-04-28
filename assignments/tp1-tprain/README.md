# Trabalho Prático 1 - Tá Chovendo {PARADAS}

![Jogo em que objetos como carros, ônibus e aviões caem e o personagem precisa evitá-los](../../images/beware-falling-objects.gif)

Agora que você conhece um pouco mais sobre OpenGL, vamos implementar um jogo
digital simples usando seus conhecimentos sobre ele e uma linguagem de
programação a sua escolha¹ (**C/C++**, Java, etc.).

Desde o Atari, existiram vários jogos baseados no conceito de _"Avoid/Catch
the Falling Objects"_. Veja o exemplo do Kaboom!, em que
[um foragido da prisão arremessa bombas](https://www.youtube.com/watch?v=lwrZHu-d-vY)
e o jogador deve pegá-las antes que explodam. Um exemplo de hoje em dia é
o [Fruit Ninja](https://www.youtube.com/watch?v=Gh46fsTY7Kk), diversão pura
para qualquer tipo de jogador.

Neste trabalho, vamos criar um jogo em que o jogador controla um personagem
que precisa se esquivar de coisas caindo. A metáfora mais crível para o
curso de Engenharia de Computação no CEFET é um aluno que precisa evitar que
a grande e colossal quantidade de TPs caia em sua cabeça, mas você está livre
para definir o seu tema.

¹ Se optar por outra linguagem diferente de C ou C++, converse como professor
sobre isso **antes de começar** ;)

## Instruções sobre o jogo

O jogo consiste em uma **câmera fixa** em um ambiente 2D e um **personagem
controlado pelo jogador por meio do teclado**. O personagem fica posicionado
em algum lugar na tela (pode ser no chão e se movimenta em uma direção. Ele
  não deve ultrapassar os limites da cena.

**TPs** de diversas matérias (objetos retangulares) vão **caindo do céu**
em direção a onde o personagem está em velocidade constante. Ao atingir algo
(_e.g._, personagem, chão), o TP se espatifa.

Quando um **TP acerta o aluno** (colisão), este perde uma vida e uma de duas
coisas podem acontecer:

1. O personagem fica invencível (e piscando) por alguns segundos
  (preferível); ou
1. O jogo reinicia da fase atual, com o jogador com 1 vida a menos;

Quando o personagem perde todas as vidas o jogo mostra ao jogador uma
**tela de _"game over"_**.

Após um tempo estabelecido (_e.g._, 20s), o **jogador vence o jogo** e pode
reiniciá-lo ou fechá-lo. Quando o tempo acaba, significa que o semestre acabou
e nenhum professor tem o poder de enviar mais TPs durante as férias.

O uso de **texturas** nesse trabalho é obrigatório. Utilize-as tanto para
dar vida ao ambiente 2D do campo de visão do jogador quanto estilizar o
personagem e os TPs.Para fins de colisão, os TPs e o personagem podem ser
considerados todos retangulares ou circulares.

O **ambiente do jogo deve ser caracterizado** graficamente. Por exemplo, se
o jogo se passa numa biblioteca, coloque um desenho de biblioteca como
parte do cenário.

Além do controle do personagem via teclado, os seguintes comandos devem
ser implementados:

- Ao clicar na tecla *p*, o jogo deve **pausar/continuar**;
- Clicando em *r*, o jogo deve ser **reiniciado**;
- E clicando em *esc*, o jogo deve ser **encerrado**.

**Atenção:** Uma mensagem de confirmação deve ser exibida para as ações de
reiniciar e encerrar o jogo.

A lógica do jogo implementada, o uso de textura, a interação do teclado e
a criatividade na implementação dos itens mencionados equivalem a um total
de **80%** da nota do trabalho. Para conseguir mais pontos, você pode
implementar algumas das funcionalidades adicionais no seu jogo. Essas
funcionalidades serão avaliadas de acordo com a **dificuldade de
implementação**, o **efeito obtido** dentro do jogo e a **qualidade da
implementação**. Implementando-as, você pode obter até **125%** da pontuação
do trabalho!

Exemplos de funcionalidades com suas respectivas pontuações **máximas** são
mostrados a seguir:

- **Texturas animadas**: você pode criar animações para as texturas tanto
  para o cenário quanto para os TPs e personagem. **#diquentinha**: busque
  por _sprite sequence_ na Internet (**até 12%**)
  - Personagem andando (**até 6%**)
  - Personagem morrendo (**até 2%**)
  - TP espatifando (**até 4%**)
- **Tipos de objetos**: pode haver a distinção entre objetos que são ruins
  para o usuário (ele deve evitar) ou que são bons (deve capturar). Imagine
  que em meio aos TPs venha um email de adiamento da entrega: obviamente,
  todos devem capturar os adiamentos! Além disso, pode haver TP com
  velocidades e tamanhos diferentes (**até 8%**)
- **Movimento com gravidade**: faça os TPs caírem considerando a gravidade
  (e também um ponto de saturação da velocidade).
- **Salto do personagem**: faça o personagem pular quando a barra de espaço
  é pressionada. Ele deve sofrer efeito de gravidade; (**até 7%**)
- **Objetos espertos**: coloque os TPs para pensar! Faça com que eles tenham
  um movimento diferente de velocidade retilínea na direção da gravidade -
  alguns podem até perseguir o personagem, outros caem com uma direção
  diferente, alguns podem vir batendo asas etc.; (**até 10%**)
- **_Power-ups_**: implemente alguns meios do jogador aumentar suas
  chances de sobrevivência. Pode haver itens que que diminuam/aumentem a
  quantidade ou o tamanho dos TPs  ou que reduzam/aumentem o tamanho do
  personagem, que o tornem mais rápido ou que o entregue uma bazuca
  radioativa; (**até 12%**)
- **Manter razão de aspecto**: faça com que a razão de aspecto do jogo
  seja sempre mantida, independente das dimensões da janela (**4%**)
- **Fases**: novas fases à medida que o jogador completa os semestres. Além
  da dificuldade aumentando progressivamente, coloque coisas diferentes em
  cada fase como a caracterização do ambiente, os tipos de alvos etc.
  (**até 10%**)
- **Telas**: faça um jogo completo, ou seja, implemente telas de
  _splash screen_, menu inicial, créditos, opções, _game over_, etc.
  (**até 8%**);
- **Segundo jogador**: cria a possibilidade para que um segundo jogador
  possa controlar o mouse e dar tiros nos TPs para evaporá-los antes que
  eles caiam; (**até 8%**)
- **Sons**. Colocar efeitos sonoros e música de fundo no seu jogo **(até 8%)**
- Implementação criativa: qualquer implementação que não fuja muito do pedido,
  mas que traga elementos novos e interessantes para o seu jogo é
  bem-vinda! (**?%**)

### Um lembrete importante

Preocupe-se **primeiro em implementar as funcionalidades básicas do trabalho!**
Deixe o embelezamento do trabalho e a implementação das funcionalidades extras
para somente quando você já possuir a base lógica do trabalho construída
e funcionando.

## Instruções gerais

O seu código deve estar comentado e, principalmente, **organizado**: ao
construí-lo, pense que outra pessoa irá ler o código e você não estará lá
para explicar seu raciocínio, portanto, organize-o! Também não é necessário
comentar o código inteiro, mas o faça quando sentir necessidade de uma
explicação adicional à sua lógica.

Seu trabalho deve ser feito **individualmente** e produzido integralmente
por você. Se você usar imagens de terceiros A discussão e troca de ideias
com os colegas é bem-vinda e estimulada, mas cada aluno deve ter seu
próprio trabalho.

**Trabalhos muito semelhantes receberão nota 0**, independente de quem
copiou quem. E claro, trabalhos semelhantes aos de outras pessoas ou
retirados da Internet, também receberão nota 0.

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

Você deve entregar um **arquivo .tar.gz, .7z ou .zip** via **Moodle** contendo
os seguintes itens:

1. Pelo menos três _screenshots_ de diferentes cenas de seu jogo;
2. Todo o programa fonte, com _makefiles_ e bibliotecas necessárias para a
  compilação e execução do programa;
3. O arquivo executável do jogo;
4. Um arquivo **README** contendo (a) instruções para a compilação e
  execução, e (b) a lista de itens adicionais implementados em seu jogo.
5. (Opcional bônus, **3%**) Um _link_ para um **vídeo curto** no YouTube,
  Vimeo, etc. mostrando seu jogo implementado!

Qualquer dúvida, entre em contato com o professor ou com o monitor. Ou então
acrescente a sua interpretação no arquivo README e mãos à obra!
