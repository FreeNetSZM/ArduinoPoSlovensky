<script>
            $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=originalPrice,salePrice,discount&localCurrency=EUR&productId=32765699087', function(data) {
      var zlava = data.result.discount;
      if (zlava == "0%") {var cena = data.result.salePrice + "&nbsp&nbsp";}
        else {var cena = "aktuálna zľava: " + zlava + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      document.getElementById("32765699087").innerHTML = cena;
      });
            $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=originalPrice,salePrice,discount&localCurrency=EUR&productId=32657861317', function(data) {
      var zlava = data.result.discount;
      if (zlava == "0%") {var cena = data.result.salePrice + "&nbsp&nbsp";}
        else {var cena = "aktuálna zľava: " + zlava + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      document.getElementById("32657861317").innerHTML = cena;
      });
            $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=originalPrice,salePrice,discount&localCurrency=EUR&productId=32664780300', function(data) {
      var zlava = data.result.discount;
      if (zlava == "0%") {var cena = data.result.salePrice + "&nbsp&nbsp";}
        else {var cena = "aktuálna zľava: " + zlava + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      document.getElementById("32664780300").innerHTML = cena;
      });
            $.getJSON('https://gw.api.alibaba.com/openapi/param2/2/portals.open/api.getPromotionProductDetail/38404?fields=originalPrice,salePrice,discount&localCurrency=EUR&productId=32768431306', function(data) {
      var zlava = data.result.discount;
      if (zlava == "0%") {var cena = data.result.salePrice + "&nbsp&nbsp";}
        else {var cena = "aktuálna zľava: " + zlava + "&nbsp&nbsp&nbsp" + data.result.salePrice + "&nbsp&nbsp";}
      document.getElementById("32768431306").innerHTML = cena;
      });       
    </script>
