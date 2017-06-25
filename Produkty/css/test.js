function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {
    console.log(name);
    for (var i in name) {
        console.log(i);
        if (name[i][3].indexOf(arg) > -1) {      
        //console.log(i);
        }
      }
    
  });  
}
