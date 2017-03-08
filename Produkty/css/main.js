function ProduktID(id, nadpis, popis, link) {
  var div = document.createElement(div);
  div.innerHTML =
      '<div id="banner_div">\n' +
        '<div id="banner_shadow">\n' +
          '<div id="PRODUKT_IMG">\n' +
            '<img class="ID_IMG" id="IMG_' + id +'"/>\n' +
          '</div>\n' +
          '<div id="POPIS">\n' +
            '<h5 id="NADPIS">' + nadpis + '</h5>' + popis + ' \n' +
          '</div>\n' +
          '<div id="DOWN">\n' +
            '<div id="DOWN_R">\n' +
              '<span id="PRICE"><div id="' + id + '"></div></span>\n' +
              '<a href="' + link +'" target="_blank" id="KUP">\n' +
              '<i id="KUP_PRED"></i> Kúp\n' +
              '<i id="KUP_ZA"></i></a>\n' +
            '</div>\n' +
            '<a href="http://s.click.aliexpress.com/e/vR7maIuzV">\n' +
            '<img src="/ArduinoPoSlovensky/Produkty/images/ali.png" target="_blank" id="IMG_ALI"/></a>\n' +
          '</div>\n' +
        '</div>\n' +
      '</div>\n';
  document.getElementById("inner").appendChild(div);
  
  $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=salePrice,discount,imageUrl,productUrl&localCurrency=EUR&productId=' +id, function(data) {
     if (data.result.discount == "0%") {document.getElementById(id).innerHTML = data.result.salePrice + "&nbsp&nbsp";}
       else {document.getElementById(id).innerHTML = "aktuálna zľava: " + data.result.discount + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
   //  document.getElementById("IMG_" + id).src = data.result.imageUrl;    
  });  
  
  $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getAppPromotionProduct/38404?productId=' +id, function(img) {
     document.getElementById("IMG_" + id).src = img.result.image220;    
  });  
} 
