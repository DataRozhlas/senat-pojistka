﻿import "./byeie"; // loučíme se s IE

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/
//grafcelek

if (window.innerWidth >= 600 ) {
  Highcharts.setOptions({
    colors: ['#FFCC00', '#EE8027', '#E53434', '#A0067D', '#5E2281', '#172983', '#007BC2', '#89BA17', '#D4B66D', '#B85637', '#A21F16', '#732813', '#5C748C']
});

Highcharts.chart('grafcelek', {

    title: {
        text: 'Zjednodušený legislativní proces'
    },
    credits:{enabled:false},
    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['Návrh zákona předložen sněmovně', 'Sněmovna: schválila návrh zákona', 2250],
            ['Návrh zákona předložen sněmovně', 'Sněmovna: návrh zákona zamítla nebo jej vzal zpět předkladatel', 913],
            ['Návrh zákona předložen sněmovně', 'Konec volebního období před projednáním', 579],
            ['Sněmovna: schválila návrh zákona', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 532],
            ['Sněmovna: schválila návrh zákona', 'Senát: zamítl', 127],
            ['Sněmovna: schválila návrh zákona', 'Senát: schválil', 1241],
            ['Sněmovna: schválila návrh zákona', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 342],
            ['Sněmovna: schválila návrh zákona', 'Senát: zamítl nebo nepřijal usnesení (ústavní zákon)', 8],
            ['Senát: zamítl', 'Sněmovna: návrh zákona nepřijala', 22],
            ['Senát: zamítl', 'Sněmovna: setrvala na původním znění zákona', 85],
            ['Senát: zamítl', 'Sněmovna: konec volebního období', 19],
            ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: návrh zákona nepřijala', 23],
            ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: přijala pozměňovací návrhy', 302],
            ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: setrvala na původním znění zákona', 204],
            ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: konec volebního období', 3],
            ['Senát: schválil', 'Zákon schválen Senátem ve sněmovní verzi', 1241],
            ['Senát: neprojednal, nezabýval se, nepřijal usnesení', 'Zákon schválen Senátem ve sněmovní verzi', 342],
            ['Sněmovna: setrvala na původním znění', 'Parlamentem prošlo bez posvěcení Senátu', 289],
            ['Sněmovna: přijala pozměňovací návrhy', 'Parlamentem prošlo s posvěcením Senátu', 302],
            ['Zákon schválen Senátem ve sněmovní verzi', 'Zákon Parlamentem prošel s posvěcením Senátu', 1583]
        ],
        type: 'sankey',
        name: 'Počet návrhů zákonů v legislativním procesu'
    }]

});

//grafnemajivetsinu
Highcharts.chart('grafnemajivetsinu', {

  title: {
      text: 'Posvěcení Senátu, když strany vládní koalice nemají většinu v Senátu'
  },
  credits:{enabled:false},
  series: [{
      keys: ['from', 'to', 'weight'],
      data: [
          ['Předkladatel: krajské zastupitelstvo', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 4],
          ['Předkladatel: krajské zastupitelstvo', 'Senát: zamítl', 0],
          ['Předkladatel: krajské zastupitelstvo', 'Senát: schválil', 9],
          ['Předkladatel: krajské zastupitelstvo', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 2],
          ['Předkladatel: poslanci', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 66],
          ['Předkladatel: poslanci', 'Senát: zamítl', 30],
          ['Předkladatel: poslanci', 'Senát: schválil', 104],
          ['Předkladatel: poslanci', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 50],
          ['Předkladatel: Senát', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 5],
          ['Předkladatel: Senát', 'Senát: zamítl', 3],
          ['Předkladatel: Senát', 'Senát: schválil', 22],
          ['Předkladatel: Senát', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 1],
          ['Předkladatel: vláda', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 260],
          ['Předkladatel: vláda', 'Senát: zamítl', 62],
          ['Předkladatel: vláda', 'Senát: schválil', 416],
          ['Předkladatel: vláda', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 153],
          ['Předkladatel: vláda', 'Senát: zamítl nebo nepřijal usnesení (ústavní zákon)', 6],
          ['Senát: zamítl', 'Sněmovna: návrh zákona nepřijala', 14],
          ['Senát: zamítl', 'Sněmovna: setrvala na původním znění zákona', 68],
          ['Senát: zamítl', 'Sněmovna: konec volebního období', 12],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: návrh zákona nepřijala', 10],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: přijala pozměňovací návrhy', 182],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: setrvala na původním znění zákona', 141],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: konec volebního období', 2],
          ['Senát: schválil', 'Zákon schválen Senátem ve sněmovní verzi', 551],
          ['Senát: neprojednal, nezabýval se, nepřijal usnesení', 'Zákon schválen Senátem ve sněmovní verzi', 206],
          ['Sněmovna: setrvala na původním znění', 'Parlamentem prošlo bez posvěcení Senátu', 209],
          ['Sněmovna: přijala pozměňovací návrhy', 'Parlamentem prošlo s posvěcením Senátu', 182],            
          ['Zákon schválen Senátem ve sněmovní verzi', 'Zákon Parlamentem prošel s posvěcením Senátu', 757]
      ],
      type: 'sankey',
      name: 'Počet návrhů zákonů v legislativním procesu'
  }]

});

//grafmajivetsinu
Highcharts.chart('grafmajivetsinu', {

  title: {
      text: 'Posvěcení Senátu, když strany vládní koalice mají většinu v Senátu v době hlasování'
  },
  credits:{enabled:false},
  series: [{
      keys: ['from', 'to', 'weight'],
      data: [
          ['Předkladatel: krajské zastupitelstvo', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 1],
          ['Předkladatel: krajské zastupitelstvo', 'Senát: zamítl', 1],
          ['Předkladatel: krajské zastupitelstvo', 'Senát: schválil', 6],
          ['Předkladatel: krajské zastupitelstvo', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 1],
          ['Předkladatel: poslanci', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 46],
          ['Předkladatel: poslanci', 'Senát: zamítl', 13],
          ['Předkladatel: poslanci', 'Senát: schválil', 115],
          ['Předkladatel: poslanci', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 30],
          ['Předkladatel: Senát', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 4],
          ['Předkladatel: Senát', 'Senát: schválil', 11],
          ['Předkladatel: Senát', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 4],
          ['Předkladatel: vláda', 'Senát: vrátil sněmovně s pozměňovacími návrhy', 146],
          ['Předkladatel: vláda', 'Senát: zamítl', 17],
          ['Předkladatel: vláda', 'Senát: schválil', 558],
          ['Předkladatel: vláda', 'Senát: neprojednal, nezabýval se, nepřijal usnesení', 101],
          ['Předkladatel: vláda', 'Senát: zamítl nebo nepřijal usnesení (ústavní zákon)', 2],
          ['Senát: zamítl', 'Sněmovna: návrh zákona nepřijala', 8],
          ['Senát: zamítl', 'Sněmovna: setrvala na původním znění zákona', 17],
          ['Senát: zamítl', 'Sněmovna: konec volebního období', 7],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: návrh zákona nepřijala', 13],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: přijala pozměňovací návrhy', 120],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: setrvala na původním znění zákona', 63],
          ['Senát: vrátil sněmovně s pozměňovacími návrhy', 'Sněmovna: konec volebního období', 1],
          ['Senát: schválil', 'Zákon schválen Senátem ve sněmovní verzi', 690],
          ['Senát: neprojednal, nezabýval se, nepřijal usnesení', 'Zákon schválen Senátem ve sněmovní verzi', 136],
          ['Sněmovna: setrvala na původním znění', 'Parlamentem prošlo bez posvěcení Senátu', 80],
          ['Sněmovna: přijala pozměňovací návrhy', 'Parlamentem prošlo s posvěcením Senátu', 120],            
          ['Zákon schválen Senátem ve sněmovní verzi', 'Zákon Parlamentem prošel s posvěcením Senátu', 826]
      ],
      type: 'sankey',
      name: 'Počet návrhů zákonů v legislativním procesu'
  }]

});
}

