import "./byeie"; // loučíme se s IE

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
          ['Návrh zákona předložen sněmovně', 'Sněmovna: návrh zákona zamítla nebo byl vzat zpět', 913],
          ['Návrh zákona předložen sněmovně', 'Konec volebního období', 579],
          ['Sněmovna: schválila návrh zákona', 'Senát: pozměňovací návrhy', 532],
          ['Sněmovna: schválila návrh zákona', 'Senát: zamítl', 127],
          ['Sněmovna: schválila návrh zákona', 'Senát: schválil', 1241],
          ['Sněmovna: schválila návrh zákona', 'Senát: nezabýval se', 342],
          ['Sněmovna: schválila návrh zákona', 'Senát: zamítl nebo nepřijal usnesení (ústavní zákon)', 8],
          ['Senát: zamítl', 'Sněmovna: zákon nepřijala', 22],
          ['Senát: zamítl', 'Sněmovna: setrvala', 85],
          ['Senát: zamítl', 'Sněmovna: konec volebního období', 19],
          ['Senát: pozměňovací návrhy', 'Sněmovna: zákon nepřijala', 23],
          ['Senát: pozměňovací návrhy', 'Sněmovna: přijala pozměňovací návrhy', 302],
          ['Senát: pozměňovací návrhy', 'Sněmovna: setrvala', 204],
          ['Senát: pozměňovací návrhy', 'Sněmovna: konec volebního období', 3],
          ['Senát: schválil', 'Schváleno Senátem ve sněmovní verzi', 1241],
          ['Senát: nezabýval se', 'Schváleno Senátem ve sněmovní verzi', 342],
          ['Sněmovna: setrvala', 'Zákon bez posvěcení Senátu', 289],
          ['Sněmovna: přijala pozměňovací návrhy', 'Zákon s posvěcením Senátu', 302],
          ['Schváleno Senátem ve sněmovní verzi', 'Zákon s posvěcením Senátu', 1583]
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
        ['Předkladatel: kraj', 'Senát: pozměňovací návrhy', 4],
        ['Předkladatel: kraj', 'Senát: zamítl', 0],
        ['Předkladatel: kraj', 'Senát: schválil', 9],
        ['Předkladatel: kraj', 'Senát: nezabýval se', 2],
        ['Předkladatel: poslanci', 'Senát: pozměňovací návrhy', 66],
        ['Předkladatel: poslanci', 'Senát: zamítl', 30],
        ['Předkladatel: poslanci', 'Senát: schválil', 104],
        ['Předkladatel: poslanci', 'Senát: nezabýval se', 50],
        ['Předkladatel: Senát', 'Senát: pozměňovací návrhy', 5],
        ['Předkladatel: Senát', 'Senát: zamítl', 3],
        ['Předkladatel: Senát', 'Senát: schválil', 22],
        ['Předkladatel: Senát', 'Senát: nezabýval se', 1],
        ['Předkladatel: vláda', 'Senát: pozměňovací návrhy', 260],
        ['Předkladatel: vláda', 'Senát: zamítl', 62],
        ['Předkladatel: vláda', 'Senát: schválil', 416],
        ['Předkladatel: vláda', 'Senát: nezabýval se', 153],
        ['Předkladatel: vláda', 'Senát: zamítl (ústavní zákon)', 6],
        ['Senát: zamítl', 'Sněmovna: zákon nepřijala', 14],
        ['Senát: zamítl', 'Sněmovna: setrvala', 68],
        ['Senát: zamítl', 'Konec volebního období', 12],
        ['Senát: pozměňovací návrhy', 'Sněmovna: zákon nepřijala', 10],
        ['Senát: pozměňovací návrhy', 'Sněmovna: přijala pozměňovací návrhy', 182],
        ['Senát: pozměňovací návrhy', 'Sněmovna: setrvala', 141],
        ['Senát: pozměňovací návrhy', 'Konec volebního období', 2],
        ['Senát: schválil', 'Zákon schválen Senátem ve sněmovní verzi', 551],
        ['Senát: nezabýval se', 'Zákon schválen Senátem ve sněmovní verzi', 206],
        ['Sněmovna: setrvala', 'Zákon bez posvěcení Senátu', 209],
        ['Sněmovna: přijala pozměňovací návrhy', 'Zákon s posvěcením Senátu', 182],            
        ['Zákon schválen Senátem ve sněmovní verzi', 'Zákon s posvěcením Senátu', 757]
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
        ['Předkladatel: kraj', 'Senát: pozměňovací návrhy', 1],
        ['Předkladatel: kraj', 'Senát: zamítl', 1],
        ['Předkladatel: kraj', 'Senát: schválil', 6],
        ['Předkladatel: kraj', 'Senát: nezabýval se', 1],
        ['Předkladatel: poslanci', 'Senát: pozměňovací návrhy', 46],
        ['Předkladatel: poslanci', 'Senát: zamítl', 13],
        ['Předkladatel: poslanci', 'Senát: schválil', 115],
        ['Předkladatel: poslanci', 'Senát: nezabýval se', 30],
        ['Předkladatel: Senát', 'Senát: pozměňovací návrhy', 4],
        ['Předkladatel: Senát', 'Senát: schválil', 11],
        ['Předkladatel: Senát', 'Senát: nezabýval se', 4],
        ['Předkladatel: vláda', 'Senát: pozměňovací návrhy', 146],
        ['Předkladatel: vláda', 'Senát: zamítl', 17],
        ['Předkladatel: vláda', 'Senát: schválil', 558],
        ['Předkladatel: vláda', 'Senát: nezabýval se', 101],
        ['Předkladatel: vláda', 'Senát: zamítl (ústavní zákon)', 2],
        ['Senát: zamítl', 'Sněmovna: zákon nepřijala', 8],
        ['Senát: zamítl', 'Sněmovna: setrvala', 17],
        ['Senát: zamítl', 'Konec volebního období', 7],
        ['Senát: pozměňovací návrhy', 'Sněmovna: zákon nepřijala', 13],
        ['Senát: pozměňovací návrhy', 'Sněmovna: přijala pozměňovací návrhy', 120],
        ['Senát: pozměňovací návrhy', 'Sněmovna: setrvala', 63],
        ['Senát: pozměňovací návrhy', 'Konec volebního období', 1],
        ['Senát: schválil', 'Schváleno Senátem ve sněmovní verzi', 690],
        ['Senát: nezabýval se', 'Schváleno Senátem ve sněmovní verzi', 136],
        ['Sněmovna: setrvala', 'Zákon bez posvěcení Senátu', 80],
        ['Sněmovna: přijala pozměňovací návrhy', 'Zákon s posvěcením Senátu', 120],            
        ['Schváleno Senátem ve sněmovní verzi', 'Zákon s posvěcením Senátu', 826]
      ],
      type: 'sankey',
      name: 'Počet návrhů zákonů v legislativním procesu'
  }]

});
}

