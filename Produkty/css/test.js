function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {
    //console.log(name);
    for (var id in name) {        
        if (name[id][3].indexOf(arg) > -1) {      
        console.log(id);
        }
      }
    
  });  
}
