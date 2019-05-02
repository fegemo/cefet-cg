<!-- {"layout": "title"} -->
# Especificação de vértices e
## ...um dragão chamado placa de vídeo

---
<!-- {"layout": "centered"} -->
# Roteiro

- Atributos de vértices
- 3 formas para especificar vértices
  1. O modo imediatista
  1. _Vertex Arrays_
  1. VBOs e VAOs
    - Generalização: _buffer objects_

---
<!-- {"layout": "regular"} -->
# Atributos de vértices

Os vértices dos objetos em Computação Gráfica são descritos
minimamente por suas coordenadas, mas podem ter outros atributos.

- Coordenadas <span class="math">(x, y, z)</span>
- Cor <span class="math">(r, g, b, a)</span>
- Coordenadas de textura <span class="math">(s, t)</span>
- Vetor normal <span class="math">(x, y, z)</span>

---
<!-- {"layout": "regular"} -->
# O modo imediatista

- A placa de vídeo é uma exímia multiplicadora de matrizes
- Precisamos passar as informações sobre os vértices pra ela
  poder desenhar
  - Coordenadas (`glVertex`)
  - Cores (`glColor`)
  - Coordenadas de textura (`glTexCoord`)
  - Vetores normais (`glNormal`) <!-- {.multi-column-list-2} -->
- O modo imediatista de especificação de vértices 01 uma chamada da API do
  OpenGL **para cada atributo de cada vértice**. Exemplo:
  - 1.000 vértices &times; 4 atributos = 4.000 chamadas ao OpenGL
- O _driver_ envia cada informação separadamente para a placa de vídeo e isso
  é lento: executar 4.000 coisas pequenas demora mais que 1 coisa grande

---
<!-- {"layout": "regular", "slideClass": "two-column-code"} -->
# Desenhando com modo imediatista

```c
// vamos colocar todos os
// atributos do vértice
// juntos
struct vertice {
  float coordenadas[3];
  float cor[4];
  float textura[2];
  float normal[3];
};

struct tri {
  struct vertice[3];
}


void desenhaTriangulos(
  int quantos, struct tri *triangles) {
  glBegin(GL_TRIANGLES);
    for (int i = 0; i < quantos; i++) {
      struct tri t = triangles[i];
      for (int c = 0; c < 3; c++) {
        struct vertice v = t[c];
        glColor3fv(v.cor);
        glTexCoord2f(v.textura);
        glNormal3f(v.normal)
        glVertex3fv(v.coordenadas);
      }
    }
  glEnd();
}
```

---
<!-- {"layout": "regular"} -->
# Analisando o desempenho do modo imediatista

- São realizadas muitas chamadas ao OpenGL, que precisa
  enviar dados da RAM ➡️ VRAM
  1. Isso pode levar vários ciclos
  1. O programa pode precisar esperar
  1. Ocupa o barramento do sistema
- Toda vez que vamos desenhar, toda a informação dos vértices
  precisa ser **enviada novamente para a placa de vídeo**
- As _display lists_ fazem esse processo apenas
  uma vez (em tempo de inicialização)

Para corrigir (1) e (2), podemos colocar todas as informações
dos vértices em um único _arrayzão_, usando _vertex arrays_ <!-- {p:.note.info} -->

*[RAM]: Random Access Memory*
*[VRAM]: Video Random Access Memory*

---
<!-- {"layout": "regular"} -->
# _Vertex Arrays_

1. Em tempo de inicialização, montamos um _arrayzão_ com tudo
1. Ao desenhar
  - Especificamos como o OpenGL vai encontrar
  a cor, as coordenadas de textura, a normal e as coordenadas de cada vértice
  - Em vez de desenhar com `glBegin(...)/glEnd`, usamos `glDrawArrays(...)`

---
<!-- {"layout": "regular"} -->
# Inicializando um _vertex array_

```c
void inicializaVertexArrayTriangulos(int quantosTris, struct tri *triangulos) {
                    // coords, cor, textura, normal
  int quantosFloatsPorVertice = 3 + 4 + 2 + 3;
  char *arrayzao = (char*) malloc(
    quantosTris * 3 *
    quantosFloatsPorVertice *
    sizeof(GLfloat)
  );
  GLfloat* p = arrayzao;

  // para cada triângulo, colocar dados de seus vértices
  for (int i = 0; i < quantosTris; i++, p += quantosFloatsPorVertice * 3) {
    struct tri* t = &triangulos[i];

    // vértice 0
    memcpy(&p[0], t->coordenadas, sizeof(GLfloat) * 3);
    memcpy(&p[3], t->cor, sizeof(GLfloat) * 4);
    memcpy(&p[7], t->textura, sizeof(GLfloat) * 2);
    memcpy(&p[9], t->normal, sizeof(GLfloat) * 3);

    // vértice 1
    memcpy(&p[12], t->coordenadas, sizeof(GLfloat) * 3);
    memcpy(&p[15], t->cor, sizeof(GLfloat) * 4);
    memcpy(&p[19], t->textura, sizeof(GLfloat) * 2);
    memcpy(&p[21], t->normal, sizeof(GLfloat) * 3);

    // vértice 2
    memcpy(&p[24], t->coordenadas, sizeof(GLfloat) * 3);
    memcpy(&p[27], t->cor, sizeof(GLfloat) * 4);
    memcpy(&p[31], t->textura, sizeof(GLfloat) * 2);
    memcpy(&p[33], t->normal, sizeof(GLfloat) * 3);
  }

  return arrayzao;
}
```

---
<!-- {"layout": "regular"} -->
# Desenhando um _vertex array_

```c
void desenhaComVertexArrays(int quantos, struct tri *triangulos) {
  char *arrayzao = inicializaVertexArrayTriangulos(quantos, triangulos);
  const GLfloat *p = (const GLfloat*) arrayzao;
  int stride = sizeof(GLfloat) * (3+4+2+3); // XYZ, RGBA, ST, XYZ: 12 floats

  glVertexPointer(/*xyz*/3, GL_FLOAT, stride, p+0);
  glColorPointer(/*rgba*/4, GL_FLOAT, stride, p+3);
  glTexCoordPointer(/*st*/2, GL_FLOAT, stride, p+7);
  glNormalPointer(/*xyz*/3, GL_FLOAT, stride, p+9);

  glEnableClientState(GL_VERTEX_ARRAY);
  glEnableClientState(GL_COLOR_ARRAY);
  glEnableClientState(GL_TEXTURE_COORD_ARRAY);
  glEnableClientState(GL_NORMAL_ARRAY);

  glDrawArrays(GL_TRIANGLES, /*firstIndex*/0, /*quantosVertices*/quantos*3);

  free(arrayzao);
}
```

---
<!-- {"layout": "regular"} -->
# Desempenho dos _vertex arrays_

- Agora enviamos todas as informações dos vértices em apenas uma chamada: `glDrawArrays`
  - É possível alocar o _array_ em tempo de inicialização
  - Melhora substancial no desempenho
- Contudo:
  - Ainda estamos usando a RAM e os dados só sobem pra VRAM
    quando desenhamos
  - E se fosse possível **usar a VRAM diretamente**?


---
<!-- {"layout": "regular"} -->
# _Vertex Buffer Objects_ (VBOs)

```c
void inicializaComVBO(GLuint idBuffer,
  int quantosTris, struct tri *triangles) {
  char *arrayzao = inicializaVertexArrayTriangulos(quantosTris, triangles);
  int stride = sizeof(GLfloat)* (3 + 4 + 2 + 3); // XYZ, RBGA, ST, XYZ: 12 floats
  int quantosVertices = 3 * quantosTris;
  int tamanhoBuffer = stride * quantosVertices;
  glBindBuffer(GL_ARRAY_BUFFER, idBuffer);
  glBufferData(GL_ARRAY_BUFFER, tamanhoBuffer, arrayzao, GL_STATIC_DRAW);
  free(arrayzao);
}
```

---
<!-- {"layout": "regular"} -->
# Desenhando com VBOs

```c
void desenhaComVBOs(int idBuffer, int quantos) {
  int stride = sizeof(GLfloat) * (3+4+2+3); // XYZ, RGBA, ST, XYZ: 12 floats
  // início do buffer
  char* base = NULL;
  glBindBuffer(GL_ARRAY_BUFFER, idBuffer);

  glVertexPointer(/*xyz*/3, GL_FLOAT, stride, base+0*sizeof(GLfloat));
  glColorPointer(/*rgba*/4, GL_FLOAT, stride, base+3*sizeof(GLfloat));
  glTexCoordPointer(/*st*/2, GL_FLOAT, stride, base+7*sizeof(GLfloat));
  glNormalPointer(/*xyz*/3, GL_FLOAT, stride, base+9*sizeof(GLfloat));

  glEnableClientState(GL_VERTEX_ARRAY);
  glEnableClientState(GL_COLOR_ARRAY);
  glEnableClientState(GL_TEXTURE_COORD_ARRAY);
  glEnableClientState(GL_NORMAL_ARRAY);

  glDrawArrays(GL_TRIANGLES, /*firstIndex*/0, /*quantosVertices*/quantos*3);

  free(arrayzao);
}
```

---
# Exemplo: [cubo-vbo](codeblocks:cubo-vbo/CodeBlocks/cubo-vbo.cbp)

![](https://github.com/fegemo/cefet-cg-exemplos-opengl/raw/master/docs/cubo-vbo.gif)
