function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {    
    console.log(arg);
    for (var id in name) {       
      console.log(id);
      console.log(name[id][3].indexOf("2600"));
            
      if (name[id][3].indexOf(arg.toString()) > -1) {      
        console.log(name[id][0]);
        }
      }
    
  });  
}
