<!-- {"layout": "title"} -->
# _Ray tracing_
## Gerando imagens _off-line_

---
<!-- {"layout": "centered"} -->
# Objetivos

1. Relembrar das **limitações de modelos de iluminação local**
1. Conhecer um modelo de iluminação **global**
1. Entender a mecânica geral da técnica de geração de imagens chamada
   _ray tracing_

---
<!-- {"layout": "regular"} -->
# Modelo de iluminação local

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
<!-- {"layout": "regular"} -->
# Efeitos necessários para atingir realismo

- ![](../../images/soft-shadows.jpg) <!-- {.push-right style="width: 460px"} --> <!-- {ul:.full-width} -->
  Sombras (com penumbra e tudo o mais) _➡️_ <!-- {.push-right} -->
- Materiais realísticos (pinturas, vidro) etc.
- Iluminação complexa (natural, luz de área)
- ![](../../images/color-bleeding.png) <!-- {.push-right style="width: 460px; clear: right;"} -->
  Interreflexões ("sangramento" de cor) _↘️_
- Reflexão, refração, transparência _⬇️_
  ![](../../images/reflection-refraction.png) <!-- {style="height: 250px;"} -->

---
<!-- {"layout": "centered", "backdrop": "raytraced-realism"} -->
# Modelo de iluminação global

---
<!-- {"layout": "regular"} -->
# Modelo de iluminação global

- Num modelo de iluminação global, consideramos também **a relação
  entre objetos** no cálculo da iluminação
  - Dessa forma, podemos modelar reflexão, refração, sombras e vários dos
    efeitos necessários para a criação de imagens com alto realismo
  - O _pipeline_ gráfico das placas de vídeo não suportam modelos globais
    - Isso porque ele é focado em renderização em tempo real
- Algoritmos para implementar iluminação global
  1. Radiosidade <!-- {ol:.multi-column-list-4} -->
  1. **_Ray tracing_**
  1. _Photon mapping_
  1. _Path tracing_

---
<!-- {"layout": "regular"} -->
# _Ray tracing_

- É uma técnica de geração de imagens com alto realismo
  - Geração "espontânea" de:
    - Objetos transparentes
    - Reflexões
    - Sombras
    - Refração
- Funcionamento **basicão**:
  - Raios são lançados do olho para cada pixel da imagem a ser gerada
  - Raios que acertam objetos
    - são coloridos com sua cor se estiverem iluminados
    - não são colorido se estiverem na sombra
  - Raios que não atingem nada, são pintados com a cor do fundo

---
![](../../images/ray-tracing.png)

---
<!-- {"layout": "regular"} -->
# Algoritmo basicão

- `pixels[] renderScene(scene)`:
  1. Dada uma configuração de câmera, gerar um raio
     <span class="math">R_{ij}</span> que sai do olho, passando pelo centro de cada pixel
     <span class="math">(i, j)</span> da sua janela
  1. Chame `castRay(R)` e assinale a cor do pixel com a cor retornada
- `color castRay(R, scene)`:
  1. Dispara o raio <span class="math">R</span> na cena. Seja <span class="math">X</span> o 1º objeto
    atingido e <span class="math">P</span> o ponto do objeto que foi atingido
  1. Para cada fonte de luz <span class="math">L</span>:
     1. Dispara um raio <span class="math">R_l</span> de <span class="math">P</span> até <span class="math">L</span>
     1. Se <span class="math">R_l</span> não atinge nada até chegar em <span class="math">L</span>, aplique o
        modelo de iluminação para determinar a cor do ponto <span class="math">P</span>
  1. Combine as cores retornadas para cada fonte e retorne a resultante

---
<!-- {"layout": "regular"} -->
# História do _Ray tracing_

- ![](../../images/raytraced-image-whitted.png) <!-- {.push-right} --> <!-- {ul:.full-width} -->
  Trabalhos seminais:
  - [Appel 68](http://graphics.stanford.edu/courses/Appel.pdf), _ray casting_
  - [Whitted 80](http://dl.acm.org/citation.cfm?id=358882), _ray tracing_ recursivo ➡️
- Pesquisa
  - Uso de diferentes primitivas geométricas
  - Técnicas de aceleração
- Pesquisas recentes:
  - _Ray tracing_ em tempo real
  - Arquiteturas para _ray tracing_ em _hardware_

---
<!-- {"layout": "regular"} -->
# Algoritmo do _ray tracing_ **recursivo**

- Mantém o método `renderScene(scene)` como está e modifica o
  `castRay(R, scene)` para:
  1. Dispara o raio <span class="math">R</span> na cena. Seja <span class="math">X</span> o 1º objeto atingido e
  <span class="math">P</span> o ponto do objeto que foi atingido
  1. **Se <span class="math">X</span> reflexivo, compute raio de reflexão <span class="math">R_r</span> em
    <span class="math">P</span>. <span class="math">C_r</span> = `castRay(R`<sub>r</sub>`)`**
  1. **Se <span class="math">X</span> transparente, compute raio de refração <span class="math">R_t</span> em
    <span class="math">P</span>. <span class="math">C_t</span> = `castRay(R`<sub>t</sub>`)`**
  1. Para cada fonte de luz <span class="math">L</span>:
     1. Dispara um raio <span class="math">R_l</span> de <span class="math">P</span> até <span class="math">L</span>
     1. Se <span class="math">R_l</span> não atinge nada até chegar em <span class="math">L</span>, aplique o
        modelo de iluminação para determinar a cor do ponto `P`
  1. Combine as cores **<span class="math">C_r</span>, <span class="math">C_t</span>** e das fontes de luz (4) e
    a retorne

---
<!-- {"layout": "regular"} -->
# Implementação: perguntas...

- Para implementar um _ray tracing_, precisamos **responder a pelo menos 2
  perguntas**:
  1. Como determinar se um raio atinge um objeto (e em qual)?
    - Semana 1
  1. Dado que um raio atingiu um objeto, como devemos calcular a cor retornada?
    - Semana 2
- Vejamos, primeiro, a representação de raios e sua interseção com objetos

---
<!-- {"layout": "regular"} -->
# Interseção Raio / Objeto

- É o coração de um _ray tracer_ (onde ele passa o maior tempo de execução)
  - Foi uma das primeiras áreas de pesquisa
  - Existem rotinas otimizadas para várias primitivas (esferas, toróides, triângulos etc.)
- Devem calcular diversos tipos de informação:
  - Para **raios primários**: ponto de interseção, material, normal
  - Para _shadow rays_: intercepta/não intercepta
  - Coordenadas de textura
- Mas como **representar um raio**?

---
<!-- {"layout": "regular"} -->
# **Representação** de um **raio**

![](../../images/raytracing-ray.png) <!-- {style="height: 200px;"} -->
<!-- {p:.centered} -->
- **Raio** é como uma **reta** em forma **paramétrica**:
  <span class="math">R(t) = P_0 + t(P_1 - P_0)</span>, ou seja
  <div class="math">R(t) = P_0 + t\vec{u}</div>
- Computa-se para quais valores do parâmetro <span class="math">t</span> a
  reta o intercepta


---
<!-- {"layout": "regular"} -->
# **Estrutura de dados** para representar raio

<div class="layout-split-3" style="height: auto;">
  <section style="border-right: 4px dotted silver; background: cornflowerblue;">
    <h3>Em C:</h3>
    <pre style="text-align: left; ">
      <code class="hljs">struct ray {
  Vector3 p0;
  Vector3 v;
};</code>
    </pre>
  </section>
  <section style="border-right: 4px dotted silver; background: aliceblue;">
    <h3>Em C++:</h3>
    <pre style="text-align: left; ">
      <code class="hljs">class ray {
public:      
  Vector3 p0;
  Vector3 v;
};</code>
    </pre>
  </section>
  <section style="background: darkseagreen;">
    <h3>Em Java:</h3>
    <pre style="text-align: left;">
      <code class="hljs">public class Ray {
  public Vector3 p0;
  public Vector3 v;
}</code>
    </pre>
  </section>
</div>

---
<!-- {"layout": "regular"} -->
# Objetos Implícitos

- Um **objeto implícito** é dado por uma **equação da forma <span class="math">f(x, y, z) = 0</span>**
- Muitas superfícies importantes podem ser modeladas como objetos implícitos,
  principalmente os dados por equações polinomiais:
  - Planos (grau 1)
    - _i.e._, <span class="math">ax + by + cz + d = 0</span>
  - Quádricas (grau 2)
    - Elipsóide: <span class="math">\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2} = 1</span>
    - Cones, Parabolóides, Hiperbolóides...
  - Quárticas (grau 4)
    - Toróides (_dunkin donuts_)

---
<!-- {"layout": "regular"} -->
# Interseção Raio _vs_ Objeto Implícito

1. Modelamos o **raio** <span class="math">R(t)</span> de forma paramétrica:
   - <span class="math">R(t) = [R_x(t) R_y(t) R_z(t)]</span>
1. Se <span class="math">f(x,y,z)</span> é uma função que representa **um objeto**,
   os pontos de interseção entre o raio e o objeto satisfazem:
   - <span class="math">f(R_x(t),R_y(t),R_z(t)) = 0</span>
   - Repare que jogamos substituímos as coordenadas do objeto pelas do raio
1. Com a equação resultante, achamos suas raízes para determinar
   o(s) valor(es) de <span class="math">t</span> que a satisfazem
   - Veja um exemplo com **<span class="math">f(x,y,z)</span> de uma esfera**
     no próximo slide...

---
<!-- {"layout": "regular"} -->
# Exemplo: Interseção com Esfera (1/2)

- Primeiramente, vamos **simplificar** o problema e assumir que a **esfera é
  unitária e está centrada na origem**:
  <div class="math">x^2+y^2+z^2 - 1 = 0</div>
- Raio parametrizado como:
  <div class="math">[P_x+t\vec{u}_x \;\;\; P_y+t\vec{u}_y \;\;\; P_z+t\vec{u}_z]^T</div>
- (continua...)

---
<!-- {"layout": "regular"} -->
# Exemplo: Interseção com Esfera (2/2)

- Logo,
  <div class="math">(P_x+t\vec{u}_x)^2 + (P_y+t\vec{u}_y)^2 + (P_z+t\vec{u}_z)^2-1=0</div>
  <ul>
    <li>ou<ul><li>
      <span class="math">at^2+bt+c=0</span></li></ul>
    </li>
    <li>onde<ul>
      <li><span class="math">a = \vec{u}_x^2 + \vec{u}_y^2 + \vec{u}_z^2</span></li>
      <li><span class="math">b = 2(\vec{u}_xP_x + \vec{u}_yP_y + \vec{u}_zP_z)</span></li>
      <li><span class="math">c = P_x^2 + P_y^2 + P_z^2 - 1</span></li></ul>
    </li>
  </ul>
- Com os **coeficientes da equação de 2º grau** (<span class="math">a, b, c</span>),
  podemos encontrar o **<span class="math">\Delta</span>** e **as raízes**

---
<!-- {"layout": "centered"} -->
# Interpretando a interseção com esfera

- Seja <span class="math">\Delta = b^2 - 4ac</span>, então <span class="math">t = \frac{-b \pm \sqrt(\Delta)}{2a}</span>

![](../../images/raytracing-raio-esfera.png)

Ou seja, para descobrir se o raio interceptou a esfera, **basta resolver
  uma equação de 2º grau** ;)

---
<!-- {"layout": "regular"} -->
# Para **esferas genéricas** (1/3)

- Dada uma esfera com centro <span class="math">C</span> e raio <span class="math">r</span>
  - Nosso raio: <span class="math">P+t\vec{u}</span>
- Um ponto <span class="math">Q</span> está superfície da esfera se sua distância ao seu centro é igual a <span class="math">r</span>. Ou seja, <span class="math">\left| Q-C \right|=r</span>
  <div class="math">\left| (P+t\vec{u})-C \right|=r</div>
- Se chamarmos <span class="math">\vec{p}=C-P</span>, podemos:
  <div class="math">\left| t\vec{u}-(C-P)\right|=r</div>
  <div class="math">\left| t\vec{u}-\vec{p} \right|=r</div>

---
<!-- {"layout": "regular"} -->
# Para **esferas genéricas** (2/3)

- Conhecemos <span class="math">\vec{u}, \vec{p}</span> e <span class="math">r</span> e queremos encontrar <span class="math">t</span>. Pelo produto interno:
  <div class="math">(t\vec{u}-\vec{p}).(t\vec{u}-\vec{p})=r^2</div>
- Sabendo que o lado esquerdo resulta em um escalar, podemos:
  <div class="math">t^2(\vec{u}.\vec{u})-2t(\vec{u}.\vec{p})+(\vec{p}.\vec{p})-r^2=0</div>
- ...que é uma equação do 2º grau e podemos resolver para <span class="math">t</span>

---
<!-- {"layout": "regular", "state": "show-active-slide-and-previous"} -->
(3/3) <!-- {.centered} -->

- Da equação quadrática, temos que: <!-- {ul:style="width: 62%; margin-left: 25%; clear: right;"} -->
  <ul>
    <li><span class="math">a = (\vec{u}.\vec{u})=1</span> (já que <span class="math">\vec{u}</span> está normalizado)</li>
    <li><span class="math">b = -2(\vec{u}.\vec{p})</span></li>
    <li><span class="math">c = (\vec{p}.\vec{p})-r^2</span></li>
  </ul>
- Disto, podemos **estudar o sinal do <span class="math">\Delta</span>** para
  saber se há interseção(ões) (raiz(es)) e, caso exista(m), com o
  valor encontrado para <span class="math">t</span> podemos **determinar
  o ponto de interseção <span class="math">Q</span>** na esfera

---
<!-- {"layout": "regular"} -->
# Como achar o vetor normal do objeto<br>no ponto <span class="math">P</span>

- ![](../../images/raytracing-raio-esfera-normal.png) <!-- {.push-right} -->
  A normal no ponto de interseção <span class="math">P</span> é
  dada pelo gradiente no ponto de interseção:
- No caso da esfera, podemos simplesmente fazer o vetor<br><span class="math">N = P - C</span>,
  onde <span class="math">C</span> é o centro da esfera

---
<!-- {"layout": "regular"} -->
# Implementando um _ray tracer_

- Precisamos de
  1. Uma classe **Vetor**
  1. Uma classe **ObjetoDaCena**
  1. Uma estrutura/classe **FonteDeLuz**
  1. Uma estrutura/classe **Raio**
  1. E mais algumas coisinhas...
- **Não precisamos** de:
  - Do **OpenGL ou do DirectX**, já que não conseguimos usar a placa de vídeo para estes cálculos
    - Na verdade essa é uma área de pesquisa recente

---
## Um programa _raytracer_

![](../../images/raytracer-input-output.svg)

---
## Entrada

- Descrição da cena

![](../../images/raytracer-input-file.png)

---
## Saída

- Arquivo da imagem renderizada (png, ppm, bmp)

![](../../images/raytracer-output-file.png)

---
<!-- {"backdrop": "cpp-vs-java"} -->

<h1 style="margin-bottom: 4em; font-weight: bold;">_Choose your side_</h1>

---
# Para a próxima aula

- Ler as aulas 18 e 19 do prof. David Mount (link no Moodle)
  - Fazer isto = certeza de sucesso, TP resolvido durante a aula
  - Não fazer = TPs incompletos, trabalho no final de semana :/

---
# Referências

- Aulas 18 e 19 do prof. David Mount (link na página do curso)
- Capítulo 10 do livro **Computer Graphics with OpenGL** de _Hearn and Baker_
- [Disciplina _Ray Tracing for Graphics_](http://www.cemyuksel.com/courses/utah/cs6620/) da _University of Utah_
  - Uma matéria inteira sobre a criação de _ray tracers_
