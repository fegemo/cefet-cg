# Geometria - Exercícios

---
# Roteiro

1. Produto Vetorial
1. Orientação
1. Mudança de Sistema de coordenadas
1. Exercícios

---
# Produto Vetorial

---
## Produto Vetorial

-
- Da geometria Euclidiana, permite achar um vetor perpendicular a outros dois
- Útil na construção de sistemas de coordenadas

  ![](images/prod-vetorial.png)
  ![](images/prod-vetorial-grafico.png)

---
## Produto Vetorial (cont.)

- Propriedades (assume-se u, v linearmente independentes):
  - Antisimetria: u × v = – v × u
  - Bilinearidade: u × (&alpha;v) = &alpha; (u × v)  e  u × (v + w) = (u × v) + (u × w)
  - u × v é perpendicular tanto a u quanto a v
  - O comprimento de u × v é igual a área do paralelogramo definido por  u  e v, isto é, | u × v | = | u | | v | sin &theta;

---
# Orientação

---
## Orientação

- Orientação de 2 pontos em 1D
  - P1 < P2 , P1 = P2 ou P1 > P2
- Orientação de 3 pontos em 2D
  - O percurso P1 , P2 , P3  é feito no sentido dos ponteiros do relógio, no
    sentido contrário ou são colineares
- ![](images/orientacao.png)

---
## Orientação

- Orientação de 4 pontos em 3D
  - O percurso P1 , P2 , P3 , P4  está definido segundo a regra da mão direita,
    mão esquerda ou são coplanares

    ![](images/orientacao3d.png)

---
## Computando a orientação

- A orientação de n+1 pontos em um espaço n-dimensional é dado pelo **sinal
  do determinante da matriz** cujas colunas são as coordenadas homogêneas
  dos pontos **com o 1 vindo primeiro**

  ![](images/orientacao-comp.png)

---
# Mudança de Sistema de Coordenadas

---
## Sistema de Coordenadas

- Um sistema de coordenadas para Rn é definido por um ponto (origem) e n vetores
- Por exmplo: Seja um sistema de coordenadas para R2 definido pelo ponto O e
  os vetores X e Y. Então,
  - Um ponto P é dado por coordenadas xP e yP tais que

    ![](images/coord-eq1.png)
  - Um vetor V é dado por coordenadas xV e yV tais que

    ![](images/coord-eq2.png)

---
## Mudança de Sistema

- Se estabelecemos um outro sistema (ex.: Q/T/U), como computar as novas
  coordenadas dadas as antigas?

  ![](images/coord-grafico.png)

---
## Mudança de Sistema (cont.)

- Como computar as coordenadas de um ponto P = (xP, yP) em O/X/Y dadas as
  coordenadas de P em Q/T/U, isto é, (tP, uP)?

  ![](images/coord-eq3.png)
- Logo,

  ![](images/coord-eq4.png)

---
## Mudança de Sistema (cont.)

- Matricialmente:

  ![](images/coord-eq5.png)
- Usando coordenadas homogêneas:

  ![](images/coord-eq6.png)

---
## Mudança de Sistema (cont.)

- Para resolver o problema inverso:

  ![](images/coord-eq7.png)


---
# Referências

1. Lições 6 e 7 das anotações do prof. David Mount
