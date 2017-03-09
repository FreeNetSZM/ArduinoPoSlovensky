function ProduktID() { 
  var i;
  var id;
  var div;
  for (i = 0; i < arguments.length; i++) {
    id = arguments[i];
    div = document.createElement("ID_" + id);
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
                  '<a target="_blank" id="KUP">\n' +
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


  var x;  
  var isx;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/main.json', function(name) {
      for (x = 0; x < arguments.length; x++) {
        idx = arguments[x];
        document.getElementById("NADPIS_" + idx).innerHTML = name[id][0];
        document.getElementById("OPIS_" + idx).innerHTML = name[id][1];
        document.getElementById("KUP").href = name[idx][2];      
      }  
  });  
  
  var z;
  for (z = 0; z < arguments.length; z++) {
    id = arguments[z];
    (function(z) {
      $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=salePrice,discount,imageUrl,productUrl&localCurrency=EUR&productId=' +id, function(data) {
           if (data.result.discount == "0%") {document.getElementById(id).innerHTML = data.result.salePrice + "&nbsp&nbsp";}
             else {document.getElementById(id).innerHTML = "aktuálna zľava: " + data.result.discount + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      });  
        $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getAppPromotionProduct/38404?productId=' +id, function(img) {
         document.getElementById("IMG_" + id).src = img.result.image220;    
      });   
    }
  }

 
}


