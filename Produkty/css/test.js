function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {    
    for (var id in name) {          
      if (name[id][3].indexOf(arg[0]) > -1) {      
        div = document.createElement("div");
        div.setAttribute("id", id);
        div.setAttribute("class", "bannerID");
        div.innerHTML =
              '<div class="banner_shadow">\n' +
                '<div id="PRODUKT_IMG">\n' +
                  '<img class="ID_IMG" id="IMG-' + id +'"/>\n' +
                '</div>\n' +
                '<div class="POPIS" id="POPIS">\n' +
                  '<h5 class="NADPIS" id="NADPIS-' + id + '"></h5>\n' +
                   '<div id="OPIS-' + id + '"></div>\n' +
                '</div>\n' +
                '<div id="DOWN">\n' +
                  '<div id="DOWN_R">\n' +                  
                    '<span id="PRICE"><div id="PRICE-' + id + '"></div></span>\n' +
                    '<a target="_blank" class="KUP" id="KUP-' + id + '">\n' +
                    '<i id="KUP_PRED"></i> Kúp\n' +
                    '<i id="KUP_ZA"></i></a>\n' +
                  '</div>\n' +
                  '<a href="http://s.click.aliexpress.com/e/vR7maIuzV">\n' +
                    '<img src="https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/images/ali.png" target="_blank" id="IMG_ALI"/></a>\n' + 
                  '<div class="star-ratings-sprite"><span style="width:1%" id="STAR-' + id + '" class="star-ratings-sprite-rating"></span></div><div id="SCORE-' + id + '"></div>\n' +        
                '</div>\n' +
            '</div>\n'
        document.getElementById(arg[0]).appendChild(div);
        document.getElementById("NADPIS-" + id).innerHTML = name[id][0];
        document.getElementById("OPIS-" + id).innerHTML = name[id][1];
        document.getElementById("KUP-" + id).href = name[id][2];
        
        
        
        }
      }    
  });  
}
