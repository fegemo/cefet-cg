# Texturas

---
# Objetivos

1. Ampliar bastante o realismo das imagens geradas com um custo muito baixo
1. Usar imagens para parametrizar a cor dos pixels, mas também outras
   propriedades

---
# Roteiro

1. Mapeando cores
1. Outras proprieadades mapeáveis

---
# O que temos até agora

---
## Motivação

- Modelos de iluminação não são apropriados para descrever todas as
  diferenças de cor observáveis em uma superfície
  - Superfícies pintadas com padrões ou imagens
    - A capa ou uma página de um livro
  - Superfícies com padrões de rugosidade
    - Tecidos ou uma parede de tijolos
- Em princípio, é possível modelar esses detalhes com geometria e usando
  materiais de propriedades óticas distintas
- Na prática, esses efeitos são modelados usando uma técnica chamada
  mapeamento de textura

---
## 
---
## De volta ao _pipeline_ gráfico

![](images/pipeline-grafico-fases.png)

---
## Fases de **geometria** e do **rasterizador**

![](images/pipeline-geometria-fases.png)

![](images/pipeline-rasterizador-fases.png)

---
# Outras propriedades mapeáveis

---
# Referências

- Capítulos 5 e 7 (parcialmente) do livro Real-Time Rendering
- [Capítulo 6 do OpenGL RedBook](http://www.glprogramming.com/red/chapter06.html)
