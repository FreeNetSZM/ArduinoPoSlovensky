function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {    
    for (var id in name) {        
        console.log(id);
        if (name[id][3].indexOf(arg) > -1) {      
        console.log(name[id][0]);
        }
      }
    
  });  
}
