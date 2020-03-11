# Trabalho Prático 1 - Galaxian

![Tela do jogo Galaxian original](images/galaxian-original.png)

Neste primeiro trabalho prático vamos experimentar programação orientada a
eventos usando OpenGL. Para isso, vamos implementar um _video game_ simples.

Um dos primeiros jogos que surgiu se chamava Galaxian. Nele, o jogador pilota
uma nave que fica na parte de baixo da tela e, com ela, se defende de um ataque
alienígena. Os alienígenas realizam o seu ataque como uma grande esquadra que
se movimenta lateralmente na parte superior da tela. Os diversos alienígenas
podem soltar bombas contra a heróica nave e, de tempos em tempos, saem da
formação e mergulham individualmente ou em pequenas esquadrilhas num ataque
mais agressivo contra o defensor solitário que, por sua vez, também se
movimenta lateralmente esquivando-se das bombas e disparando mísseis contras os
invasores alienígenas.

A figura é um _screenshot_ do Galaxian original. Na configuração básica
do trabalho, vamos modificar e resumir um pouco o jogo. Primeiramente, o jogo
terá um fim. Se o jogador elimina todos os alienígenas, ele é declarado
vencedor. Porém, se algum alienígena conseguir chegar ao solo, então ele ativa
sua arma secreta mutante e será o vencedor (_game over_). A movimentação dos
inimigos é "em bloco" e, quando chega em um dos cantos laterais da tela, o bloco
desce um pouco e começa a andar para o outro lado. Os inimigos lançam tiros
eventualmente, dos quais o jogador deve desviar. Se um tiro acertar o jogador,
o jogo se encerra também. Não é necessário implementar o "modo rasante",
em que uma ou um conjunto de naves adjacentes se destaca para atacar o jogador.

O uso de **texturas** neste trabalho é obrigatório. Utilize-as para os aliens
e nave do jogador e, se quiser, para o cenário também.

Para fins de colisão, os inimigos, tiros e o personagem podem ser considerados
todos retangulares ou todos circulares.

Os seguintes comandos devem ser implementados:

- <kbd>←</kbd> e <kbd>→</kbd> controlam a navinha do jogador;
- <kbd>space</kbd> dá um tiro para cima;
- Clicando na tecla <kbd>p</kbd>, o jogo deve **pausar/continuar**;
- Clicando em <kbd>r</kbd>, o jogo deve ser **reiniciado**;
- Clicando em <kbd>esc</kbd>, o jogo deve ser **encerrado**.

**Atenção:** uma mensagem de confirmação deve ser exibida para as ações de
reiniciar e encerrar o jogo.


A lógica do jogo implementada, o uso de textura, a movimentação dos inimigos,
os tiros (jogador e inimigos), cálculo de colisões, a interação do teclado
e um vídeo equivalem a um total de **75%** da nota do trabalho.
Para conseguir mais pontos, você pode
implementar algumas das funcionalidades adicionais. Essas funcionalidades
serão avaliadas de acordo com a **dificuldade de implementação**, o
**efeito obtido** dentro do jogo e a **qualidade da implementação**.
Implementando-as, você pode obter até **125%** da pontuação do trabalho! :3

Exemplos de funcionalidades com suas respectivas pontuações **máximas** são
mostrados a seguir:

- Deve haver um _head-up display_ (**HUD**) mostrando a pontuação atual
de cada jogador.

- Relativas a **texturas e gráficos**:
  1. :star: **Texturas animadas (até 10%)**: crie animações para as texturas dos
     inimigos e personagem. **#dikentinha**: busque por _spritesheet_ no Google.
     - Jogador parado ou andando (**2%**)
     - Jogador explodindo (**2%**)
     - Inimigos andando (**2%**)
     - Inimigos explodindo (**2%**)
     - Outros objetos ou cenário animados (**2%**)
  1. **Fundo lindão e com movimento/animação (até 4%)**: em vez de um fundo
     com uma simples cor, colocar imagens ou até umas estrelinhas
     piscando aleatoriamente
  1. :bomb: **Efeito de partículas (até 12%)** para simular o fogo/explosão etc.
- Relativas ao **jogo**:
  1. **Rasante (7-10%)**: faça com que inimigos possam dar o rasante no jogador
     eventualmente. Pode ser individualmente ou em grupo (vale mais).
     Ele(s) deve(m) seguir uma trajetória em curva e você pode usar uma
     curva de Bézier para isso. Se ele chegar no canto inferior da tela,
     ele deve reaparecer no canto superior e retornar a seu lugar na esquadra.
  1. **Inimigos diferentes (5%)**: em vez dos inimigos se comportarem
     da mesma maneira, faça alguns maiores/menores, mais/menos agressivos etc.
  1. **Fases "curadas" (até 8%)**: crie (umas 4) fases diferentes com mudanças no cenário
     e nos tipos de inimigos (tamanho, quantidade, velocidade, "agressividade" etc).
  1. **Fases infinitas (4%)**: gere uma nova fase toda vez que o jogador
     morrer ou que ele tenha êxito em aterrisar
  1. **Itens (até 12%)**: Você pode criar diferentes itens que afetam o jogo,
     que podem ser "deixados" quando um inimigo é derrotado. Por exemplo, pode
     ter itens que deixam a nave atirar mais que um tiro ao mesmo tempo, ou que
     exploda uma nave e as adjacentes, ou que deixe os inimigos mais lentos etc.
  1. :star: **Pontuação (4%)**: determine uma forma de pontuar o jogador, por exemplo,
     cada inimigo vale uma quantidade de pontos dependendo do seu tipo e
     da circunstância (eg, quanto mais próximo do chão, mais pontos).
     - O placar deve ser exibido em uma _head-up display_ (**HUD**)
- Relativas à **nave**:
  1. :star: **Vidas (5%)**: em vez de morrer na primeira colisão, o jogador pode
     ter vidas
     - Deve haver uma _head-up display_ (**HUD**) mostrando a vida atual do jogador.
  1. :star: **Controle via mouse (5%)**: além do controle via teclado, torne
     possível jogar com o mouse.
- Outras funcionalidades:
  1. :star: **Sons (até 12%)**. Colocar efeitos sonoros e música de fundo no seu jogo
  1. :star: **Manter razão de aspecto (4%)**: faça com que a razão de aspecto do jogo
     seja sempre mantida, independente das dimensões da janela, mas que o
     jogo ocupe a maior área possível da janela e ficando centralizado
  1. :star: **Telas (até 10%)**: faça um jogo completo, ou seja, implemente telas de
     _splash screen_, menu inicial, instruções, créditos, opções,
     _game over_, etc
  1. **Implementação criativa (?%)**: qualquer implementação que não fuja
     muito do pedido, mas que traga elementos novos e interessantes para o
     seu jogo é bem-vinda!

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
