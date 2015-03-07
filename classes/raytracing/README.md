# _Ray tracing_

---
# Objetivos

1. Relembrar das **limitações de modelos de iluminação global**
1. Conhecer um modelo de iluminação **global**
1. Entender a mecânica geral da técnica de geração de imagens chamada
   _ray tracing_

---
## Modelo de iluminação local

- Por ser **mais barato**, é usado para **renderização em tempo real**
  - Exemplos de uso: OpenGL, DirectX
- Apenas caminhos do tipo fonte luminosa → superfície → olho são considerados
- Como funciona, no _pipeline_ gráfico:
  - No **estágio de geometria**:
    - Para cada vértice de uma cena, a contribuição de cada fonte de luz é
      calculada para se determinar a cor resultante (modelo de iluminação
      de Phong)
  - No **estágio de rasterização**
    - A cor de cada pixel é dada por uma interpolação da cor dos vértices
      (modelo de sombreamento de Gouraud)

---
## Efeitos necessários para atingir realismo

- Sombras (com penumbra e tudo o mais)
- Reflexões (espelhos e superfícies brilhantes)
- Transparência (água, vidro)
- Interreflexões ("sangramento" de cor)
- Iluminação complexa (natural, luz de área)
- Materiais realísticos (pinturas, vidro) etc.

---
## _Soft shadows_ (sombras com penumbra)

![](../../images/soft-shadows.jpg)

---
## _Color bleeding_ ("sangramento" de cor)

![](../../images/color-bleeding.png)

---
# Modelo de iluminação global

---
![](../../images/raytraced-high-realism.png)

---
## Modelo de iluminação global

- Num modelo de iluminação global, consideramos também **a relação
  entre objetos** no cálculo da iluminação
  - Dessa forma, podemos modelar reflexão, refração, sombras e vários dos
    efeitos necessários para a criação de imagens com alto realismo
  - O _pipeline_ gráfico das placas de vídeo não suportam modelos globais

---
# _Ray tracing_
---
## _Ray tracing_

- É uma técnica de geração de imagens com alto realismo
  - Usa um modelo de iluminação global
  - Geração "espontânea" de:
    - Objetos transparentes
    - Reflexões
    - Sombras
    - Refração
- Funcionamento **basicão**
  - Raios são lançados do olho para cada pixel da imagem a ser gerada
  - Raios que acertam objetos, são coloridos com sua cor
  - Raios que não atingem nada, são pintados com a cor do fundo

---
## Lançamento de raios

![](../../images/ray-casting1.png)

---
## Algoritmo basicão

- `pixels[] renderScene(scene)`:
  1. Dada uma configuração de câmera, gerar um raio
     R<sub>ij</sub> que sai do olho, passando pelo centro de cada pixel `(i, j)`
     da sua janela
  1. Chame `castRay(R)` e assinale a cor do pixel com a cor retornada
- `color castRay(R, scene)`:
  1. Dispara o raio `R` na cena. Seja `X` o 1º objeto atingido e `P` o ponto
     do objeto que foi atingido
  1. Para cada fonte de luz `L`:
     1. Dispara um raio R<sub>l</sub> de `P` até `L`
     1. Se R<sub>l</sub> não atinge nada até chegar em `L`, aplique o
        modelo de iluminação para determinar a cor do ponto `P`
  1. Combine as cores retornadas para cada fonte e a retorne

---
## História do _Ray tracing_

- <img src="../../images/raytraced-image-whitted.png" style="float:right;margin:0 0 15px 15px">
  Trabalhos Seminais
  - [Appel 68](http://graphics.stanford.edu/courses/Appel.pdf), _ray casting_
  - [Whitted 80](http://dl.acm.org/citation.cfm?id=358882), _ray tracing_ recursivo
- Pesquisa
  - Uso de diferentes primitivas geométricas
  - Técnicas de aceleração
- Pesquisas recentes:
  - _Ray tracing_ em tempo real
  - Arquiteturas para _Ray tracing_ em _hardware_

---
## Verificação de sombras

![](../../images/ray-casting2.png)

---
## Reflexão

![](../../images/ray-casting3.png)

---
## Algoritmo do _ray tracing_ recursivo

- Mantém o método `renderScene(scene)` como está e modifica o
  `castRay(R, scene)` para:
  1. Dispara o raio `R` na cena. Seja `X` o 1º objeto atingido e `P` o ponto
  do objeto que foi atingido
  1. **Se `X` reflexivo, compute raio de reflexão `R`<sub>r</sub> em `P`. `C`<sub>r</sub> = `castRay(R`<sub>r</sub>`)`**
  1. **Se `X` transparente, compute raio de refração `R`<sub>t</sub> em `P`. `C`<sub>t</sub> = `castRay(R`<sub>t</sub>`)`**
  1. Para cada fonte de luz `L`:
     1. Dispara um raio R<sub>l</sub> de `P` até `L`
     1. Se R<sub>l</sub> não atinge nada até chegar em `L`, aplique o
        modelo de iluminação para determinar a cor do ponto `P`
  1. Combine as cores **`C`<sub>r</sub>, `C`<sub>t</sub>** e das fontes de luz (4) e a retorne

---
## Implementação

- Para implementar um _ray tracing_, precisamos responder a pelo menos 2
  perguntas:
  1. Como determinar qual objeto (se) um raio intercepta?
  1. Dado que um raio atingiu um objeto, como devemos calcular a cor retornada?
- Vejamos, primeiro, a representação de raios e sua interseção com objetos

---
## Interseção Raio / Objeto

- É o coração de um _ray tracer_ (onde ele passa o maior tempo computando)
  - Foi uma das primeiras áreas de pesquisa
  - Existem rotinas otimizadas para vários tipos de primitivas (esferas, toróides, triângulos etc.)
- Devem calcular diversos tipos de informação:
  - Para _shadow rays_: intercepta/não intercepta
  - Raios primários: ponto de interseção, material, normal
  - Coordenadas de textura

---
## Interseção Raio / Objeto

![](../../images/raytracing-ray.png)

- Raio é modelado como uma reta em forma paramétrica:
  `R(t) = P`<sub>0</sub>` + t(P`<sub>1</sub>` – P`<sub>0</sub>`) = P`<sub>0</sub>` + tV`
- Computa-se para quais valores do parâmetro `t` a reta intercepta o objeto

---
## Objetos Implícitos

- Objeto implícito é dado por uma equação da forma `f(x, y, z) = 0`
- Muitas superfícies importantes podem ser modeladas como objetos implícitos principalmente os dados por equações polinomiais
  - Planos (grau 1)
  - Quádricas (grau 2)
    - elipsóides, cones, parabolóides, hiperbolóides
  - Quárticas (grau 4)
    - toróides

---
## Interseção Raio / Objeto Implícito

- Raio é modelado em forma paramétrica:
  - `R(t) = [Rx(t) Ry(t) Rz(t)]`
- Logo, os pontos de interseção satisfazem
  - `f(Rx(t),Ry(t),Rz(t)) = 0`
- Basta resolver a equação para determinar o(s) valor(es) de `t` que a satisfazem

---
## Exemplo: Interseção com Esfera

![](../../images/raytracing-raio-esfera.png)

---
## Exemplo: Normal do ponto P

- A normal no ponto de interseção `P` é dada pelo gradiente no ponto de
  interseção:

  ![](../../images/raytracing-raio-esfera-normal.png)

---
## Implementando um _ray tracer_ em C++

- Precisamos de
  1. Uma classe Vetor
  1. Uma classe ObjetoDaCena
  1. Uma estrutura FonteDeLuz
  1. Uma estrutura Raio
  1. E mais algumas coisinhas...
- Não precisamos de:
  - Do OpenGL ou do DirectX, já que não conseguimos usar a placa de vídeo para estes cálculos
    - Na verdade essa é uma área de pesquisa recente

---
## _Preview_

![](../../images/raytracer-input-file.png)

---
## _Preview_

![](../../images/raytracer-output-file.png)

---
# Referências

- Aulas 18 e 19 do prof. David Mount (link na página do curso)
- Capítulo 10 do livro **Computer Graphics with OpenGL** de _Hearn and Baker_
