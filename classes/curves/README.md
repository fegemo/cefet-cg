<!-- { "layout": "title" } -->
# Curvas (e Superfícies?)
## Tentando ser menos quadradão

---
<!-- { "layout": "regular" } -->
# Roteiro

1. Fundamentos de curvas
1. Curvas de Bézier
1. Splines
1. Superfícies

---
<!-- { "layout": "section-header" } -->
# Fundamentos de curvas

- Funções paramétricas
- ...

---
# Funções paramétricas

- A definição de uma função (explícita) <span class="math">f(x)</span>
  diz que cada valor de <span class="math">x</span> deve haver no máximo
  1 valor retornado
  - ![](../../images/circulo.svg) <!-- {.push-right} -->
    Consequência: não conseguimos representar um círculo dessa forma
  - Há duas abordagens:
    1. Função implícita: <span class="math">x^2 + y^2 = 1</span>
    1. Função paramétrica <span class="math">x(t)=cos(t), y(t)=sin(t)</span>

---

---

---
<!-- { "layout": "section-header" } -->
# Curvas de Bézier
## ...

---
<!-- { "layout": "regular" } -->
# Curvas de Bézier: para quê?

- Desenhar uma curva
  - Algoritmo de Casteljau
- ![](../../flavioro-galaxian.gif) <!-- {.push-right} -->
  Modelar uma curva
  - Para a trajetória da câmera
  - Trajetória de um objeto

Há curvas de bézier de vários graus, sendo que as cúbicas são mais comuns. Relembrando um polinômio de 3º grau:
<div class="math">f(x)=a\cdotx^3+b\cdotx^2+c\cdotx+d</div>
<!-- {p:.note.info} -->

---
<!-- { "layout": "regular" } -->
# Polinômio da Curva de Bézier

-

---
<!-- { "layout": "centered" } -->
# Referências

- Livro: _"A Primer on Bézier Curves"_
  - [online](https://pomax.github.io/bezierinfo/#introduction)
  - gratuito
  - interativo
