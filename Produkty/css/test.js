function ProduktID(id) {
div = '<div id="DIV_2">\n' +		       
      '<img src="/ArduinoPoSlovensky/Produkty/images/UNO-R3-developent-board-MEGA328P-Without-USB-Cable.jpg" id="IMG_3" alt='' />\n' +	     
    '</div>\n' +	     
    '<div id="DIV_4">\n' +		       
      '<h5 id="H5_5">Arduino UNO R3 bez USB káblu </h5>Toto je to Arduino UNO R3, ktoré potrebujete pre svoje projekty.\n' +   	     
    '</div>\n' ;        

  document.getElementById(id).innerHTML = div;
  
 // $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=salePrice,discount,imageUrl&localCurrency=EUR&productId=' +id, function(data) {
 //   if (data.result.discount == "0%") {document.getElementById(id).innerHTML = data.result.salePrice + "&nbsp&nbsp";}
 //     else {document.getElementById(id).innerHTML = "aktuálna zľava: " + data.result.discount + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
 // });   
} 
