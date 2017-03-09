function ProduktID() { 
  var i;
  var id;
  var div;
  var max = arguments.length;
  
  for (id = 0; id < max; id++) {
    div = document.createElement("DIV_" + id);
      div.innerHTML =
          '<div id="banner_div">\n' +
            '<div id="banner_shadow">\n' +
              '<div id="PRODUKT_IMG">\n' +
                '<img class="ID_IMG" id="IMG_' + id +'"/>\n' +
              '</div>\n' +
              '<div class="POPIS" id="POPIS">\n' +
                '<h5 class="NADPIS" id="NADPIS_' + id + '"></h5>\n' +
                 '<div id="OPIS_' + id + '"></div>\n' +
              '</div>\n' +
              '<div id="DOWN">\n' +
                '<div id="DOWN_R">\n' +
                  '<span id="PRICE"><div id="' + id + '"></div></span>\n' +
                  '<a target="_blank" class="KUP" id="KUP_' + id + '">\n' +
                  '<i id="KUP_PRED"></i> Kúp\n' +
                  '<i id="KUP_ZA"></i></a>\n' +
                '</div>\n' +
                '<a href="http://s.click.aliexpress.com/e/vR7maIuzV">\n' +
                '<img src="/ArduinoPoSlovensky/Produkty/images/ali.png" target="_blank" id="IMG_ALI"/></a>\n' +
              '</div>\n' +
            '</div>\n' +
          '</div>\n';
      document.getElementById("inner").appendChild(div);
  }      

  
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/main.json', function(data) {
     for (i = 0; i < max; i++) {
        id = arguments[i];
        document.getElementById("NADPIS_" + i).innerHTML = data[id][0];
        document.getElementById("OPIS_" + i).innerHTML = data[id][1];
        document.getElementById("KUP_" + i).href = data[id][2];      
     }
  });  
  
  /*
  var z;
  for (z = 0; z < max; z++) {
    
    (function(z) {
      $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=salePrice,discount,imageUrl,productUrl&localCurrency=EUR&productId=' +id, function(data) {
           if (data.result.discount == "0%") {document.getElementById(z).innerHTML = data.result.salePrice + "&nbsp&nbsp";}
             else {document.getElementById(z).innerHTML = "aktuálna zľava: " + data.result.discount + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      });  
        $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getAppPromotionProduct/38404?productId=' +id, function(img) {
         document.getElementById("IMG_" + z).src = img.result.image220;    
      });   
    })(z);
  }*/

 
}


