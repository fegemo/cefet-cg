# Trabalho Prático 3 - _Ray Tracer_

![Esquema de um ray tracer](../../images/ray-tracing.png)

Neste trabalho, vamos completar a implementação de um _ray tracer_ simples, não recursivo, para
compreendermos bem como funciona um modelo de iluminação global. Ele deve
ser feito em duplas (tipicamente a mesma dos outros trabalhos).

A implementação está dividida nas duas partes descritas a seguir.
**Vocês <u>precisam da primeira parte feita</u> para fazer a segunda.** Cada parte do trabalho vale a metade da pontuação.

## Funcionamento do Programa

O nosso _ray tracer_ é um programa que recebe, como entrada, um arquivo que descreve uma cena tridimensional e produz, como saída, um arquivo de imagem com a cena renderizada.

![](../../images/raytracer-input-output.svg)

O programa abre o arquivo de entrada que lhe é passado como primeiro argumento em linha de comando e gera uma imagem no mesmo diretório do arquivo de entrada, com o mesmo nome.

A cena é descrita em um arquivo de texto simples e contém informações sobre (a) a configuração da câmera, (b) as fontes de luz, (c) os pigmentos (as "tintas"), (d) os materiais e, por último, (e) os objetos.

![](../../images/raytracer-input-file.png)

O código para carregar o arquivo de entrada nesse formato e também o código para gerar uma imagem nos formatos bmp, ppm e png já está escrito e funcionando.

Para a descrição da cena, o que é relevante para o trabalho é:

- Posição da **câmera**:

  ```java
  Vector3 posicaoCamera = scene.camera.eye;
  ```
- Posição, cor e atenuação das **fontes de luz**:

  ```java
  Light luz = scene.lights.get(0);
  Vector3 posicaoDaLuz = luz.position;
  Vector3 corDaLuz = luz.color;
  double atenuacaoConstante = luz.constantAttenuation;
  double atenuacaoLinear = luz.linearAttenuation;
  double atenuacaoQuadratica = luz.quadraticAttenuation;
  ```
- Cor dos **pigmentos**:

  ```java
  Pygment pigmento = objetoAtingido.pygment;
  Vector3 corDoPigmento = pigmento.color;
  ```
- Coeficientes (de Phong) dos **materiais**:

  ```java
  Material material = objetoAtingido.material;
  double coeficienteAmbiente = material.ambientCoefficient;
  double coeficienteDifuso = material.diffuseCoefficient;
  double coeficienteEspecular = material.specularCoefficient;
  double expoenteEspecular = material.specularExponent;
  ```
- Posição, raio, pigmento e material das **esferas** (classe `Object`):

  ```java
  Vector3 posicaoDaEsfera = esfera.position;
  double raioDaEsfera = esfera.radius;
  Pygment pigmento = esfera.pygment;
  Material material = esfera.material;
  ```

## Entradas para Teste

Há 4 arquivos de entrada disponibilizados para teste e eles estão listados em ordem de complexidade da cena descrita:

  1. `cena-simples.txt`, uma fonte de luz e uma esfera verde no centro da cena, com material que responde à luz ambiente e difusa apenas
  1. `cena-2-fontes-luz.txt`, duas fontes de luz e uma esfera azul no centro, com material que também responde à luz especular
  1. `cena-3-esferas.txt`, duas fontes de luz, três esferas lado a lado, e duas esferinhas na mesma posição das fontes de luz; há algumas sombras provocadas por um objeto ao outro
  1. `cena-esferas.txt`, uma fonte de luz e cinco esferas com tamanhos diferentes com algumas sobrepondo outras em relação à câmera

![](images/cenas-objetivo.png)

## Opções de Desenvolvimento

O código seminal está disponibilizado em C++ e Java. Você tem a liberdade de escolha da linguagem e de sistema operacional entre Windows e Linux.

### C++

Para gerar imagens nos formatos ppm e bmp, a biblioteca SOIL foi usada e ela está incluída no código fonte. Como ambiente de desenvolvimento do projeto em C++, está disponível:

  - Um **arquivo de projeto do CodeBlocks** na pasta `cpp/CodeBlocks` devidamente configurado tanto para Windows quanto para Linux.
    - Para alternar entre a configuração de Linux e Windows:
      ![](images/codeblocks-configuration-change.png)
    - Para alterar qual imagem de entrada será usada, basta passar o nome do arquivo desejado como argumento de linha de comando para o programa. Para fazer isso no CodeBlocks:
      ![](images/codeblocks-input-change.png)
  - Um **Makefile** configurado para compilação **no Linux** na pasta `cpp/Makefile` com os seguintes _targets_:
    - `make clean`, para limpar arquivos temporários e executáveis
    - `make all`, para compilar
    - `make run-simples`, para executar com `cena-simples.txt`
    - `make run-2-fontes-luz`, idem para `cena-2-fontes-luz.txt`
    - `make run-3-esferas`, idem para `cena-3-esferas.txt`
    - `make run-esferas`, idem para `cena-esferas.txt`


### Java

Para desenvolver em Java, o código seminal inclui um **projeto no NetBeans** que pode ser usado tanto no Windows quanto no Linux, sem modificação.

Para alterar o arquivo de entrada, basta selecionar a "Configuração de Execução" desejada:
![](images/netbeans-input-change.png)

É possível usar a IDE Eclipse também, porém a configuração de execução dos arquivos de entrada deve ser feita por você.

## Entrega do Trabalho

Você deve entregar no Moodle um **arquivo compactado contendo seu código fonte**.
O trabalho deve ser entregue preferencialmente
em sala, mas a atividade permanecerá **aberta até imediatamente <u>antes da próxima
aula</u> da matéria**.
