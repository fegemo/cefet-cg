# Trabalho Prático 3 - _Ray Tracer_

Veja as instruções sobre a primeira parte do trabalho a seguir.

## Parte 1: Cálculo de **colisão entre raio e esfera**

Faça _download_ do código seminal do _ray tracer_ no [Moodle](https://ava.cefetmg.br).
Nesta parte, você deve fazer três exercícios:

1. Abrir e se familiarizar com o código fonte do "esqueleto" de um
  _ray tracer_ em C++ ou Java (20 min)
1. Alterar a cor do fundo da tela para preto porque atualmente está azul (10 min)
   - Isso deve ser feito no código, no momento que se verifica que o raio não atingiu nada na cena
1. Implementar a interseção de raio com esfera (40 min)
1. (+5%) Implementar a intesreção de raio com plano ⭐️
1. (+5%) Implementar a intesreção de raio com círculo ⭐️
1. (+10%) Implementar a intesreção de raio com triângulo
1. (+10%) Implementar a intesreção de raio com cilindro
1. (+15%) Implementar a intesreção de raio com um modelo .obj 💣

Sobre (3), a função `RayResponse intersectsWith(Ray ray)` deve: 

- Retornar um objeto do tipo `RayResponse` com um campo `intersected` igual a `true`/`false` informando se houve colisão do raio com a esfera ou não
- Caso tenha havido colisão, preencher outros campos do objeto de retorno `RayResponse` com os devidos valores para:
  - O valor de `t` para a primeira colisão, no campo `response.t`¹
  - O ponto de interseção, no campo `response.Q`¹
  - O vetor normal no ponto de interseção, no campo `response.normal`¹
  
¹O valor de `t`, do ponto de interseção e da normal nesse ponto não são necessários para gerar as imagens esperadas na atividade desta semana, mas serão usados na atividade da segunda parte do trabalho. Portanto, faça-as corretamente nesta primeira etapa porque os valores serão utilizados na segunda etapa.

Ao executar o programa, independente de qual entrada é fornecida, ele está sempre gerando uma imagem toda azul.

Veja como deve ficar a saída para cada uma das entradas disponibilizadas:

| ![](images/cena-simples.png)  `cena-simples.txt`        | ![](images/cena-primitivas.png)   `cena-primitivas.txt` | ![](images/cena-2-fontes-luz.png)  `cena-2-fontes-luz.txt` |  ![](images/cena-arvore.png)  `cena-arvore.txt` |
|---------------------------------------------------------------------|---------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------|
|  ![](images/cena-empilhadas.png)  `cena-empilhadas.txt` | ![](images/cena-whitted.png)  `cena-whitted.txt`        | ![](images/cena-cornell-box.png)  `cena-cornell-box.txt`   |                                                             |


## Material de Apoio

Acompanhe a apostila do Professor David Mount.
Você vai precisar especialmente das páginas 79 e 80, para uma introdução a _ray tracing_, da página 83 para representação de raios e das páginas 85 e 86 para determinação de interceptação de raio com esfera.
