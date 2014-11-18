# Sombreamento (colorização, tonalização)

---
# Objetivos

1. Gerar imagens com maior realismo
1. Descobrir que sombreamento não é sombra :)
1. Entender as formas para colorir pixels da imagem gerada, dados os cálculos
   de iluminação já realizados

---
# Roteiro

1. O que temos até agora
1. De volta ao pipeline
1. Modelos de sombreamento
1. _Fog_

---
# O que temos até agora

---
## Modelo de Iluminação

- Na última aula, vimos alguns modelos para simularmos um sistema de iluminação
  nas nossas cenas de forma a torná-las mais realísticas
  - Modelo lambertiano
  - Modelo de Phong
- O modelo de iluminação calcula a cor de cada vértice da nossa geometria,
  dadas fontes de luz e o material dos objetos
- Contudo, ainda não sabemos a cor **de cada pixel**, que é o que precisamos
  para gerar imagens

---
# De volta ao _pipeline_ gráfico

![](images/pipeline-grafico-fases.png)

---
## Fase do **Rasterizador**

![](images/pipeline-rasterizador-fases.png)

- Sombreamento de Pixels
  - Para cada pixel que possui um fragmento, devemos obter sua cor
- Já temos a cor de cada vértice, mas precisamos determinar a cor de cada
  fragmento de pixel agora
  - Para isso, precisamos de uma equação que, dadas as cores dos vértices,
    possamos atribuir cores para cada pixel

---
# Sombreamento

---
## Sombreamento

- Uma opção seria calcular a iluminação em cada pixel da nossa geometria
  - Contudo isso é caro computacionalmente
- Outra opção é **interpolar** os valores da função de colorização
  **nos vértices dos polígonos para os pixels** no interior do polígono
  - Assim, aumentamos muito a velocidade de renderização

---
## Tipos de Sombreamento

- Há pelo menos três tipos principais de sombreadores:
  - Constante (_flat_)
    ```c
    glShadeModel(GL_FLAT);
    ```
  - Gouraud
    ```c
    glShadeModel(GL_SMOOTH);    // é o valor padrão
    ```
  - Phong

---
## _Flat shading_

![](images/shading-flat-exemplo.png)

- Usa (apenas) um vetor normal para cada polígono
  - Portanto, cada polígono tem apenas uma cor
- Extremamente rápido, mas produz imagens facetadas, pois a transição de um
  polígono para outro adjacente é nítida
- Útil para objetos "facetados" como, por exemplo, um tabuleiro de xadrez

---
## _Gouraud shading_

![](images/shading-gouraud-exemplo.png)

- Usa a cor calculada **em cada vértice** pelo modelo de iluminação
- Para colorir o polígono, interpola a cor dos vértices em seu interior
- Qualidade da imagem é muito maior, mas o custo é maior

---
## _Gouraud shading_ (cont.)

- O vetor normal de um vértice precisa ser fornecido como a média das normais
  das faces adjacentes ao vértice

![](images/normal-media-faces.png)

---
## Exemplo de _flat_ e _Gouraud shading_

![](images/shading-flat-exemplo2.png)

---
## Limitações do _Gouraud shading_

- Realces da luz especular (_highlights_) sofrem por baixa amostragem de
  vértices

  ![](images/shading-gouraud-low-anim.gif)
  ![](images/shading-gouraud-high.gif)

---
## _Phong shading_

![](images/shading-phong-exemplo.jpg)

- Não confundir com o **modelo de iluminação de _Phong_**

---
## _Phong shading_ (cont.)

- Interpola as normais em vez das cores
  - A função de iluminação deve ser avaliada **para cada pixel**
- Significativamente mais caro
- Não oferecido em OpenGL - tipicamente feito _"off-line"_

---
## Consertando o problema dos _highlights_ de Gouraud

- Em _Gouraud_, temos uma amostragem de vértices muito menor

  ![](images/highlight-gouraud.png)

---
## Consertando o problema dos _highlights_ de Gouraud (cont.)

- Em _Phong_, a amostragem é bem maior

  ![](images/highlight-phong.png)

---
## Comparação entre os três modelos de **sombreamento**

![](images/shading-comparacao-normais.png)

![](images/shading-comparacao-exemplo.png)

---
## Comparação: iluminação desligada

![](images/shading-cena-exemplo-sem-luz.png)

---
## Comparação: iluminação ligada, **_flat shading_**

![](images/shading-cena-exemplo-flat.png)

---
## Comparação: iluminação ligada, **_Gouraud shading_**

![](images/shading-cena-exemplo-gouraud.png)

---
## Comparação: iluminação ligada, **_Phong shading_**

![](images/shading-cena-exemplo-phong.png)

---
# _Fog_

---
## _Fog_

![](images/fog.jpg)

---
## Sem _fog, com _fog_

![](images/fog-volumetric.jpg)

---
## _Fog_ (cont.)

- ```c
  float[] cor = { .5f, .5f, .5f };
  glClearColor(cor[0], cor[1], cor[2], 1.0f);

  glFogi(GL_FOG_MODE, GL_EXP);        // Linear, exp. ou exp²
  glFogfv(GL_FOG_COLOR, cor);         // Cor
  glFogf(GL_FOG_DENSITY, 0.35f);      // Densidade
  glHint(GL_FOG_HINT, GL_DONT_CARE);  // Não aplicar se não puder
  glFogf(GL_FOG_START, 1.0f);         // Profundidade inicial
  glFogf(GL_FOG_END, 5.0f);           // Profundidade final
  glEnable(GL_FOG);                   // Liga GL_FOG
  ```
- [Referência do `glFog`](https://www.opengl.org/sdk/docs/man2/xhtml/glFog.xml)

---
# Referências

- Capítulos 5 e 7 (parcialmente) do livro Real-Time Rendering
- [Capítulo 6 do OpenGL RedBook](http://www.glprogramming.com/red/chapter06.html)
