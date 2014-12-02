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
# Mapeamento de cores

---
## Texturas

![](images/textura-2d-esfera.png)

- Tipicamente definida por uma imagem carregada de um arquivo
- Podemos "colar" uma imagem em um objeto
- Cada vértice do objeto é mapeado para um ponto da textura e a cor dos
  pixels do objeto é interpolada (da mesma forma como é feito o Gouraud
  _shading_)

---
## Textura em 1D

- O que é uma textura em 1 dimensão?
  - Apenas uma escala de cor
  - Exemplos:
    1. Um degradê horizontal
       ![](images/textura-1d1.png)
    1. Um código de barras
       ![](images/textura-1d2.png)
- Pode ser representado como um array de valores RGB
- Contudo, é mais elegante considerar que uma textura é uma função que mapeia
  um ponto `t` no espaço da textura a um valor RGB
  - Dessa forma, dado um valor 0 &le; t &le; 1, a função T(t) retorna um valor RGB

---
## Textura em 1D - Exemplo sem textura

![](images/textura-triangulo-gouraud.png)

---
## Textura em 1D - Exemplo usando textura 1D

![](images/textura-triangulo-textura1d.png)

---
## Textura 1D no OpenGL

- Primeiramente, você deve ativar o processamento de texturas de 1D:
  ```c
  glEnable(GL_TEXTURE_1D);
  ```
- Em segundo lugar, você deve ter disponibilizado um _array_ que contém valores de cor.

---
## Textura 1D no OpenGL (cont.)

- Depois, você deve especificar a textura para o OpenGL:
  ```c
  glTexImage1D(GL_TEXTURE_1D,
    0,                // índice do MipMap (veremos adiante)
    GL_RGBA,          // especificando nosso array como RGBA
    largura,          // "largura" da imagem (potência de 2)
    0,                // sem borda
    GL_RGBA,          // ordem dos bytes no array
    GL_UNSIGNED_BYTE, // tipo de dado do array
    arrayCores);      // array com as cores
  ```

---
## Textura 1D no OpenGL (cont.)

- Por fim, você deve atribuir, para cada vértice do seu objeto, um valor `t`
  que representa qual o ponto da textura será mapeado a ele:
  ```c
  glBegin(GL_TRIANGLES);
    glTexCoord1f(0.2); // t = 0.2
    glVertex3fv(p1);
    glTexCoord1f(0.8);
    glVertex3fv(p2);
    // ...
  glEnd();
  ```

---
## Textura **2D**

![](images/textura-2d.png)

- Exatamente como 1D, porém o espaço da textura é T(s,t) em vez de T(t)

---
## Parametrização de superfície

- Quando mapeamos uma textura 2D em um objeto 3D, precisamos, primeiro,
  parametrizar o objeto 3D em 2D, para então fazer o mapeamento

  ![](images/textura-parametrizacao-esfera.png)

---
## Função de mapeamento

- Retorna o ponto do objeto correspondente a cada ponto do espaço de textura
  (x, y, z) = F (s, t)
- Corresponde à forma com que a textura é usada para "embrulhar" (_wrap_)
  o objeto
  - Na verdade, na maioria dos casos, precisamos de uma função que nos
    permita "desembrulhar" (_unwrap_) a textura do objeto, isto é, a
    inversa da função de mapeamento
- Se a superfície do objeto pode ser descrita em forma paramétrica esta pode
  servir como base para função de mapeamento

---
## Parametrização da Esfera

![](images/textura-parametrizacao-esfera-formula.png)

---
## Parametrização do Cilindro

![](images/textura-parametrizacao-cilindro-formula.png)

---
## Parametrização de Objetos Genéricos

- <img src="images/textura-parametrizacao-objetos-genericos.png" style="float:right;margin-left:20px;">
  O que fazer quando o objeto não comporta uma parametrização natural?
- Uma possibilidade é usar um mapeamento em 2 estágios [Bier e Sloan]:
  - Mapear textura sobre uma superfície simples como cilindro, esfera, etc
    aproximadamente englobando o objeto
  - Mapear superfície simples sobre a superfície do objeto. Pode ser feito de
    diversas maneiras:
    - Raios passando pelo centróide do objeto
    - Raios normais à superfície do objeto
    - Raios normais à superfície simples
    - Raios refletidos

---
## Exemplos de parametrização genérica

![](images/textura-para-generica-cubica.png)

---
## Exemplos de parametrização genérica

![](images/textura-para-generica-cilindrica.png)

---
## Exemplos de parametrização genérica

![](images/textura-para-generica-esferica.png)

---
# Texturas Procedurais


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
