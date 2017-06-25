function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {    
    for (var id in name) {       
      console.log(id);
      console.log(name[id][3].indexOf(arg));
      console.log(name[id][0].indexOf("modul"));
      if (name[id][3].indexOf(arg) > -1) {      
        console.log(name[id][0]);
        }
      }
    
  });  
}
