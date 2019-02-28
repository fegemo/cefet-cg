<!--
  backdrop: tf2-texture
-->

<link href='https://fonts.googleapis.com/css?family=Aladin' rel='stylesheet' type='text/css'>
<h1 class="inset-shadow" title="Texturas">Texturas</h1>

---
# Objetivos

1. Ampliar bastante o realismo das imagens geradas com um custo muito baixo
1. Usar imagens para parametrizar a cor dos pixels, mas também outras
   propriedades

---
# Roteiro

1. Textura como uma função
1. Mapeando cores
1. Texturas procedurais
1. Outras proprieadades mapeáveis
  - Alturas (_height mapping_)
  - Perturbações na normal (_bump mapping_)
  - Normais (_normal mapping_)

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
- Na prática, **esses efeitos são modelados usando uma técnica chamada
  mapeamento de textura**

---
# Mapeamento de cores

---
## Texturas

![](../../images/textura-2d-esfera.png)

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
       ![](../../images/textura-1d1.png)
    1. Um código de barras
       ![](../../images/textura-1d2.png)
- Pode ser representado como um array de valores RGB
- Contudo, é mais elegante considerar que **uma textura é uma função que mapeia
  um ponto <span class="math">s</span> no espaço da textura a um valor RGB**
  - Dessa forma, dado um valor <span class="math">0 \le s \le 1</span>,
    a função <span class="math">T(s)</span> retorna um valor RGB

---
## Textura em 1D - Exemplo <u>sem textura</u> (glColor)

![](../../images/textura-triangulo-gouraud.png)

---
## Textura em 1D - Exemplo <u>usando textura</u> 1D

![](../../images/textura-triangulo-textura1d.png)

---
## Textura 1D no OpenGL

- Primeiramente, você deve ativar o processamento de texturas de 1D:
  ```c
  glEnable(GL_TEXTURE_1D);
  ```
- Em segundo lugar, você deve ter disponibilizado um _array_ que contém valores de cor.
- Você pode:
  - Abrir um arquivo de imagem e recuperar esse _array_ ("na mão", ou
    usando uma biblioteca _e.g._ [SOIL](http://www.lonesock.net/soil.html)) ou
  - Criar uma função que gere esse array (textura procedural)

---
## Textura 1D no OpenGL (cont.)

- Depois, você deve especificar a textura para o OpenGL:
  ```c
  glTexImage1D(GL_TEXTURE_1D, // sempre este valor
    0,                // índice do MipMap (veremos adiante)
    GL_RGBA,          // especificando nosso array como RGBA
    largura,          // "largura" da imagem (potência de 2)
    0,                // sem borda
    GL_RGBA,          // ordem dos bytes no array
    GL_UNSIGNED_BYTE, // tipo de dado do array
    arrayCores);      // array com as cores
  ```
- [Referência](https://www.opengl.org/sdk/docs/man2/xhtml/glTexImage1D.xml)
- A [SOIL](http://www.lonesock.net/soil.html) chama este método internamente,
  quando você invoca `SOIL_load_OGL_texture(...)`

---
## Textura 1D no OpenGL (cont.)

- Por fim, você deve atribuir, para cada vértice do seu objeto, um valor
  <span class="math">s</span> que representa qual o ponto da textura
  será mapeado a ele:
  ```c
  glBegin(GL_TRIANGLES);
    glTexCoord1f(0.2); // s = 0.2
    glVertex3fv(p1);
    glTexCoord1f(0.8); // s = 0.8
    glVertex3fv(p2);
    // ...
  glEnd();
  ```

---
## Textura **2D**

![](../../images/texture-space.png)

- Tipicamente, representamos qualquer textura 2D no espaço bidimensional com
  <span class="math">0 \le s,t \le 1</span>
- Matematicamente análogo a 1D, porém o espaço da textura é
<span class="math">T(s,t)</span> em vez de <span class="math">T(s)</span>


---
## Textura 2D para objetos 3D

![](../../images/textura-2d.png)


---
## Parametrização de superfície

- Quando mapeamos uma textura 2D em um objeto 3D, precisamos, primeiro,
  parametrizar o objeto 3D em 2D, para então fazer o mapeamento

  ![](../../images/textura-parametrizacao-esfera.png)
- Devemos associar cada ponto da superfície do objeto com duas coordenadas
  <span class="math">(u,v)</span> no **espaço da superfície**

---
## Função de mapeamento

- Retorna o **ponto do objeto correspondente a cada ponto do da textura**
  <span class="math">(x, y, z) = F (s, t)</span>
  - Corresponde à forma com que a textura é usada para "embrulhar" (_wrap_)
    o objeto
- Contudo, precisamos associar um ponto da textura, dado um ponto no objeto <span class="math">(s, t) = G (x, y, z)</span>
  - Dizemos que vamos "desembrulhar" (_unwrap_) a textura do objeto
  - Essa função é a **inversa da função de mapeamento**
- Se a superfície do objeto pode ser descrita em forma paramétrica, esta pode
  servir como base para função de mapeamento

---
## Parametrização do Cilindro

- ![left](../../images/textura-parametrizacao-cilindro-formula.png)
  <div style="float:right;clear:right;">Função de <strong>mapeamento</strong>:<br><span class="math">x = cos(\theta)</span><span class="math" style="float:right;">\theta = 2 \pi s</span><br>
  <span class="math" style="clear:right">y = sin(\theta)</span><span class="math" style="float:right">z = t</span><br><span class="math" style="clear:right">z = z</span></div>
  <div style="float:right;margin-top:1em;">Função <strong>inversa</strong>:<br><span class="math">\theta = arctan(\frac{y}{x})</span>
  <span class="math" style="float:right;">s = \frac{\theta}{2 \pi}</span><br><span class="math" style="clear:right;">z = z</span>
  <span class="math" style="float:right;">t = z</span></div>

---
## Parametrização da Esfera

![](../../images/textura-parametrizacao-esfera-formula.png)


---
## Parametrização de Objetos Genéricos

- <img src="../../images/textura-parametrizacao-objetos-genericos.png" style="float:right;margin-left:20px;">
  O que fazer quando o objeto não comporta uma parametrização natural?
- Fazemos o mapeamento em 2 estágios:
  1. Mapear textura sobre uma superfície simples como cilindro, esfera, etc
     aproximadamente englobando o objeto
  1. Mapear superfície simples sobre a superfície do objeto. Pode ser feito de
     diversas maneiras:
     - Raios passando pelo centróide do objeto
     - Raios normais à superfície do objeto
     - Raios normais à superfície simples

---
## Exemplos de parametrização **cúbica**

![](../../images/textura-para-generica-cubica.png)

---
## Exemplos de parametrização **cilíndrica**

![](../../images/textura-para-generica-cilindrica.png)

---
## Exemplos de parametrização **esférica**

![](../../images/textura-para-generica-esferica.png)

---
## Exemplo na vida real

![](../../images/texture-projections.png)

- Tipicamente, o mapeamento da textura é feito durante a modelagem dos objetos
  e armazenado no arquivo do objeto

---
## Exemplo na vida real (cont.)

![](../../images/texture-unwrapped.png)

- Um programa de modelagem tipicamente "desembrulha" a malha do objeto para
  auxiliar o artista a criar a imagem da textura

---
## Texturas 2D em OpenGL

- Tipicamente, feito em 4 passos

- (1) Ligar o mapeamento de texturas 2D
  ```c
  glEnable(GL_TEXTURE_2D);
  ```

- (2) Assinatura da função para definir uma textura:
  ```c
  void glTexImage2D(GLenum target, GLint level,
    GLint internalFormat, GLsizei width, GLsizei height,
    GLint border, GLenum format, GLenum type,
    const GLvoid* pixels);
  ```

---
## Texturas 2D em OpenGL (cont.)

- (2) Exemplo de definição da textura:
  ```c
  glTexImage2D(GL_TEXTURE_2D,   // sempre este valor
    0,                  // nível do mipmap
    GL_RGBA,            // especificando nosso array como RGBA  
    256,                // largura (potência de 2!! mínimo: 64)
    128,                // altura  (potência de 2!! mínimo: 64)
    0,                  // sem borda
    GL_RGBA,            // ordem dos bytes do array
    GL_UNSIGNED_BYTE,   // tipo de dados de cada posição do array
    arrayCores);        // array com as cores
  ```

---
## Texturas 2D em OpenGL (cont.)

- (3) Configurar diversos parâmetros
  - Modos de filtragem
    - Magnificação ou minificação
    - Filtros _mipmap_ de minificação
  - Modos de repetição de padrões
    - Cortar ou repetir
  - Funções de aplicação de textura
    - Como misturar a cor do objeto com a da textura
      - Misturar, modular ou substituir texels
- Os detalhes de cada tópico serão mostrados mais adiante

---
## Texturas 2D em OpenGL (cont.)

- (4) Por fim, devemos mapear cada vértice a um valor
  <span class="math">(s,t)</span> da textura usando
  `glTextCoord*` para cada vértice
  ```c
  glBegin(GL_POLYGON);
    glTexCoord2f(0.0, 0.0); glVertex3f(-10.0, -10.0, 0.0);
    glTexCoord2f(1.0, 0.0); glVertex3f( 10.0, -10.0, 0.0);
    glTexCoord2f(1.0, 1.0); glVertex3f( 10.0,  10.0, 0.0);
    glTexCoord2f(0.0, 1.0); glVertex3f(-10.0,  10.0, 0.0);
  glEnd();
  ```

---
## Filtragem

![](../../images/filtragem-textura.png)

---
## Filtros de Aumento: `GL_TEXTURE_MAG_FILTER`

![](../../images/texture-magnification-filters.jpg)
- `GL_NEAREST`: Retorna o pixel mais próximo das coordenadas
- `GL_LINEAR`: Retorna média ponderada dos 4 pixels mais próximos

---
## _Mipmaps_

![](../../images/mipmaps.png)

---
## _Mipmaps_

- Possibilita o uso de texturas de diferentes níveis de resolução aplicadas
  de forma adaptativa
  - Reduz _aliasing_ devido a problemas de interpolação
  - Reduz o consumo de memória para objetos distantes
  - O nível da textura na hierarquia _mipmap_ é especificada durante a
    definição da textura:
    ```c
    glTexImage2D(GL_TEXTURE_2D, nivel_mipmap /* ... * /  );
    ```

---
## Exemplo de _Mipmaps_ e filtragem

<div class="side-by-side-children">
  <video width="380" height="383" class="left-aligned" controls loop>
    <source src="../../videos/texture-nearest.mp4" type="video/mp4" />
  </video>
  <video width="380" height="383" class="right-aligned" controls loop>
    <source src="../../videos/texture-mipmaps.mp4" type="video/mp4" />
  </video>
</div>

---
## Modos de Repetição

- Exemplo:
  ```c
  glTexParameteri( GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP );
  glTexParameteri( GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT );
  ```

  ![](../../images/texturas-modo-repeticao.png)

---
## Modos de Repetição: Exemplo

![](../../images/texturas-modo-repeticao-gatinho.png)
- `GL_REPEAT`
- `GL_MIRRORED_REPEAT`
- `GL_CLAMP_TO_EDGE`: Coordenada presa (_clamped_) entre 0 e 1
- `GL_CLAMP_TO_BORDER`: Coordenadas fora de [0,1] recebem a "cor da borda"

<!--
## Modos de Aplicação de Textura

- Controla como a cor da textura afeta a cor do pixel
  ```c
  glTexEnv{fi}[v](GL_TEXTURE_ENV, prop, param );
  ```
- Modos (`prop = TEXTURE_ENV_MODE`)
  - `GL_MODULATE`
  - `GL_BLEND`
  - `GL_REPLACE`
- Cor a ser misturada (`GL_BLEND`)
  - Especificada com `prop = GL_TEXTURE_ENV_COLOR`
-->

---
# Texturas Procedurais

---
## Texturas Procedurais

- O OpenGL recebe uma matriz de cores, não um arquivo de imagem
- Podemos criar uma função que escreva uma matriz de cores
  - Chamamos isso de **textura procedural**
- Exemplo:

  ![](../../images/textura-xadrez-redbook.png)

---
## Exemplo de textura procedural (livro vermelho)

```c
// Cria uma textura de xadrez
#define checkImageWidth 64
#define checkImageHeight 64
GLubyte checkImage[checkImageHeight][checkImageWidth][4];
void makeCheckImage()
{
  for (int i = 0; i < checkImageHeight; i++) {
    for (int j = 0; j < checkImageWidth; j++) {
      int color = ((((i & 0x8)==0)^((j & 0x8))==0))* 255;
      checkImage[i][j][0] = (GLubyte) color;
      checkImage[i][j][1] = (GLubyte) color;
      checkImage[i][j][2] = (GLubyte) color;
      checkImage[i][j][3] = (GLubyte) 255;
    }
  }
}
```

---
# Outras propriedades mapeáveis

---
## Outras propriedades mapeáveis

- <img src="../../images/texturas-bump-map.jpg" style="width: 250px; float:right; margin-left: 10px;">
  Quais parâmetros ou propriedades pode-se reproduzir a partir de texturas:
  - Cor (coeficientes de reflexão difusa)
  - Coeficientes de reflexão especular e difusa
    - Mapeamento de ambiente
  - _Bump Mapping_
    - Perturbação do vetor normal
  - _Normal Mapping_
    - Definição do vetor normal
  - _Displacement Mapping_
    - Perturbação da superfície (posição) na direção da normal
  - Transparência / opacidade

---
<!--
  backdrop: stars
-->

## Exemplo de **normal mapping**

![](../../images/moon-demo.png)

![left](../../images/texture-moon.png)_
![right](../../images/texture-moon-normals.png)

- [Demonstração](http://coryg89.github.io/MoonDemo/) do
  [Cory Gross](http://coryg89.github.io/) e  [explicação](http://coryg89.github.io/technical/2013/06/01/photorealistic-3d-moon-demo-in-webgl-and-javascript/) sobre a demo
- Pergunta difícil: por que o _normal map_ é azulado? :3

---
## Exemplo de **bump mapping**

![left](../../images/texture-bump-mapping-1.png)
![left](../../images/seta-direita.png)
![right](../../images/texture-bump-mapping-2.jpg)

- Perturbando a normal <span class="math">(0,1,0)</span> de cada vértice de
  acordo com o cosseno de seu <span class="math">x</span>
  - Dentro de um `for`, desenhando `GL_TRIANGLE_STRIP`:
    ```c
      float valorBumped = cos(2.0 * x);
      glNormal3f((bumpMappingLigado ? valorBumped : 0), 1, 0);
      glVertex3f(x, 0, z - 1.0);
      glVertex3f(x, 0, z);
    ```

---
## Exemplo de **height map** ([Explicação](http://www.lighthouse3d.com/opengl/terrain/index.php?heightmap))

<video width="496" height="496" class="left-aligned" poster="../../images/height-map-poster.png" controls loop>
  <source src="../../videos/height-map.mp4" type="video/mp4" />
</video>

---
# Referências

- Capítulo 6 do livro Real-Time Rendering
- [Capítulo 9 do OpenGL RedBook](http://www.glprogramming.com/red/chapter09.html)
