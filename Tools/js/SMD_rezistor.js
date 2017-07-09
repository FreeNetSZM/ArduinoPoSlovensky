
        var multArray = new Array(1, 10, 100, 1000, 10000, 1000000, 10000000, 100000000, 1000000000, 10000000000);

        function calculate(varValue) {
            var digits = document.forms["vres"].valoreres.value.split('');
            //var digits = varValue.toString().split('');
            if (digits.length == 3) {
                var value1 = digits[0];
                var value2 = digits[1];
                var varMulti = digits[2];

                var numbervalue = parseInt(value1 + value2);
                var numberpf = (numbervalue * multArray[varMulti]);
                var valueresult;
                if (numberpf < 1000) {
                    valueresult = numberpf + "&#x2126;";
                }
                if (numberpf >= 1000 && numberpf < 1000000) {
                    valueresult = (numberpf / 1000) + "K&#x2126;";
                }
                if (numberpf >= 1000000) {
                    valueresult = (numberpf / 10000000) + "M&#x2126;";
                }
            } else {
                //alert("Inserisci un codice a 3 cifre");
                document.getElementById('coderesult').innerHTML = "?";
            }
            document.getElementById('coderesult').innerHTML = valueresult;
            //alert("Resistor Value " + valueresult);
        }
