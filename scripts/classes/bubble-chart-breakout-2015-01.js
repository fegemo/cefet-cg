// Assumes d3.js and nvd3.js have been loaded before
// - I was unable to require them through browserify (var d3 = require('d3)) b/c
//   nvd3.js is currently undergoing maintenance (refactoring) and the build on
//   npm is not working (nor any other version of it) and it isnt published to bower

nv.addGraph(function() {
  var chart = nv.models.scatterChart()
    .showDistX(true)    //showDist, when true, will display those little distribution lines on the axis.
    .showDistY(true)
    //.transitionDuration(350)
    .color(d3.scale.category10().range());

  //Configure how the tooltip looks.
  chart.tooltipContent(function(key) {
    return '<h3>' + key + '</h3>';
  });

  //Axis settings
  chart.xAxis.tickFormat(d3.format('.02f'));
  chart.yAxis.tickFormat(d3.format('.02f'));

  //We want to show shapes other than circles.
  //chart.scatter.onlyCircles(false);

  //var myData = randomData(4,40);
  var myData = getData();
  d3.select('#bubble-chart-os svg')
    .datum(myData)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

function getData() {
  var data = [];
  var students = [
    {
      "aluno": "Amanda Barbosa Costa",
      "notaPercentual": 0.474375,
      "linhas": 618,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Feminino"
    },
    {
      "aluno": "Bianca Vaz Micherino",
      "notaPercentual": 1.0000000000000002,
      "linhas": 618,
      "arquivos": 12,
      "os": "Windows",
      "sexo": "Feminino"
    },
    {
      "aluno": "Bruna Grazielle Oselieri Lopes",
      "notaPercentual": 0.43,
      "linhas": 134,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Feminino"
    },
    {
      "aluno": "Fabricio Fraga Rezende",
      "notaPercentual": 1.1643750000000002,
      "linhas": 2311,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Gabriel Faria Padovani",
      "notaPercentual": 0.555625,
      "linhas": 479,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Gabriel Goncalves Schmidt",
      "notaPercentual": 0.11562499999999998,
      "linhas": 138,
      "arquivos": 1,
      "os": "OSX",
      "sexo": "Masculino"
    },
    {
      "aluno": "Gabriel Pires de Miranda Magalhães",
      "notaPercentual": 1.7743750000000005,
      "linhas": 1306,
      "arquivos": 15,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Higor Coimbra Amorim",
      "notaPercentual": 0.9143750000000002,
      "linhas": 479,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Larissa de Cássia Nazaré Bicalho",
      "notaPercentual": 0.42000000000000004,
      "linhas": 256,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Feminino"
    },
    {
      "aluno": "Leonardo Carvalho Tereza",
      "notaPercentual": 0.9400000000000002,
      "linhas": 669,
      "arquivos": 2,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Lindley Werner Soares Vieira",
      "notaPercentual": 1.1500000000000004,
      "linhas": 669,
      "arquivos": 1,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "LUAN TAFAREL DA SILVA",
      "notaPercentual": 0.53,
      "linhas": 263,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Lucas Nascimento Huati Corrêa",
      "notaPercentual": 1.2400000000000002,
      "linhas": 1077,
      "arquivos": 20,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "LUCAS SILVESTRE VIANA",
      "notaPercentual": 1.0400000000000003,
      "linhas": 585,
      "arquivos": 3,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "LUCIAN HENRIQUE PEREIRA GOMES",
      "notaPercentual": 0.7343750000000001,
      "linhas": 385,
      "arquivos": 4,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Luiz Flávio Costa de Lima",
      "notaPercentual": 0.44062500000000004,
      "linhas": 137,
      "arquivos": 3,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "Maria Verônica Santos Soares",
      "notaPercentual": 1.0700000000000003,
      "linhas": 608,
      "arquivos": 13,
      "os": "Windows",
      "sexo": "Feminino"
    },
    {
      "aluno": "Matheus de Almeida Rosa",
      "notaPercentual": 1.3543750000000003,
      "linhas": 832,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Mauro Floriano dos Santos",
      "notaPercentual": 0.9500000000000002,
      "linhas": 506,
      "arquivos": 1,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "Nícolas Arruda Maduro",
      "notaPercentual": 1.2143750000000002,
      "linhas": 610,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Pedro Henrique Silva",
      "notaPercentual": 0.9743750000000001,
      "linhas": 552,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Ramon Felipe de Oliveira Costa",
      "notaPercentual": 0.8643750000000001,
      "linhas": 821,
      "arquivos": 1,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Renan Mateus Bernardo do Nascimento",
      "notaPercentual": 0.9443750000000002,
      "linhas": 428,
      "arquivos": 6,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Samuel Cury Prazeres Vaz de Melo",
      "notaPercentual": 0.8743750000000001,
      "linhas": 428,
      "arquivos": 1,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "Saulo Antunes Silva",
      "notaPercentual": 0.9106250000000002,
      "linhas": 515,
      "arquivos": 12,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "Thales Bacelar Nascimento",
      "notaPercentual": 1.7300000000000004,
      "linhas": 714,
      "arquivos": 29,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "Tulio Mitre Perdigao",
      "notaPercentual": 0.964375,
      "linhas": 511,
      "arquivos": 1,
      "os": "Linux",
      "sexo": "Masculino"
    },
    {
      "aluno": "Victor Balbo de Oliveira",
      "notaPercentual": 1.4743750000000004,
      "linhas": 907,
      "arquivos": 4,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "Vinícius Henrique Silveira",
      "notaPercentual": 0.8243750000000002,
      "linhas": 483,
      "arquivos": 4,
      "os": "Windows",
      "sexo": "Feminino"
    },
    {
      "aluno": "Vinicius Magalhães D' Assunção",
      "notaPercentual": 1.2543750000000002,
      "linhas": 1117,
      "arquivos": 14,
      "os": "Windows",
      "sexo": "Masculino"
    },
    {
      "aluno": "WENDELL FERREIRA DOS SANTOS",
      "notaPercentual": 1.0631250000000003,
      "linhas": 1249,
      "arquivos": 22,
      "os": "Linux",
      "sexo": "Masculino"
    }
  ];

  ['Windows', 'Linux', 'OSX'].forEach(function(os) {
    var studentsWithThisOs = students.filter(function(s) { return s.os === os; });

    studentsWithThisOs = studentsWithThisOs.map(function(s) {
      return {
        x: s.linhas,
        y: s.notaPercentual,
        size: s.arquivos/23,
        shape: s.sexo === 'Masculino' ? 'circle' : 'triangle-down'
      };
    });

    data.push({
      key: os,
      values: studentsWithThisOs
    });
  });

  return data;
}

/**************************************
 * Simple test data generator
 */
function randomData(groups, points) { //# groups,# points per group
  var data = [],
    shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
    random = d3.random.normal();

  for (i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
        , y: random()
        , size: Math.random()   //Configure the size of each scatter point
        , shape: (Math.random() > 0.95) ? shapes[j % 6] : "circle"  //Configure the shape of each scatter point.
      });
    }
  }

  return data;
}