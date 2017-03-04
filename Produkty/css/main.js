function cenaID(id) {
  $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=originalPrice,salePrice,discount&localCurrency=EUR&productId=' +id, function(data) {
    if (data.result.discount == "0%") {document.getElementById(id).innerHTML = data.result.salePrice + "&nbsp&nbsp";}
      else {document.getElementById(id).innerHTML = "aktuálna zľava: " + data.result.discount + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
  });   
} 
