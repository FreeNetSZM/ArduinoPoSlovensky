function ProduktID(id, nadpis, popis, link) {
  var div = document.createElement(div);
  div.innerHTML =
      '<div id="banner_div">\n' +
      '<div id="DIV_1">\n' +
      '<div id="DIV_2">\n' +
      '<img class="IMG_3" id="IMG_' + id +'"/>\n' +
      '</div>\n' +
      '<div id="DIV_4">\n' +
      '<h5 id="H5_5">' + nadpis + '</h5>' + popis + ' \n' +
      '</div>\n' +
      '<div id="DIV_15">\n' +
      '<div id="DIV_16">\n' +
      '<span id="SPAN_17"><div id="' + id + '"></div></span>\n' +
      '<a href="' + link +'" target="_blank" id="A_18">\n' +
      '<i id="I_19"></i> Kúp\n' +
      '<i id="I_20"></i></a>\n' +
      '</div>\n' +
      '<a href="http://s.click.aliexpress.com/e/vR7maIuzV" id="A_21">\n' +
      '<img src="/ArduinoPoSlovensky/Produkty/images/ali.png" target="_blank" id="IMG_22"/></a>\n' +
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
