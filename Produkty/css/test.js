function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {
      for (var i in name) {
        if (name[i][arg].indexOf(searchValue) > -1) {      
        console.log(name[i].state);
        }
      }
    
  });  
}
