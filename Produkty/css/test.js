function ProduktID() { 
  var arg = arguments;
  $.getJSON('https://freenetszm.github.io/ArduinoPoSlovensky/Produkty/css/test.json', function(name) {
    console.log(arg); 
    console.log(name);  
    for (var i in name) {
        if (name[i][3].indexOf(arg) > -1) {      
        console.log(name[i]);
        }
      }
    
  });  
}
