function cenaID(id) {
      $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=originalPrice,salePrice,discount&localCurrency=EUR&productId=' + ID, function(data) {
      var zlava = data.result.discount;
      if (zlava == "0%") {var cena = data.result.salePrice + "&nbsp&nbsp";}
        else {var cena = "aktuálna zľava: " + zlava + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      return cena;
      });
}
