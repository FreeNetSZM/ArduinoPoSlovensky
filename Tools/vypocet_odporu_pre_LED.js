        function checkNumeric(objName, minval, maxval, comma, period, hyphen) {
            var numberfield = objName;
            if (chkNumeric(objName, minval, maxval, comma, period, hyphen) == false) {
                numberfield.select();
                zyxf(numberfield);
                return false;
            } else {
                return true;
            }
        }
        function chkNumeric(objName, minval, maxval, comma, period, hyphen) {
            var checkOK = "0123456789" + comma + period + hyphen;
            var checkStr = objName;
            var allValid = true;
            var decPoints = 0;
            var allNum = "";
            for (i = 0; i < checkStr.value.length; i++) {
                ch = checkStr.value.charAt(i);
                for (j = 0; j < checkOK.length; j++)
                    if (ch == checkOK.charAt(j))
                        break;
                if (j == checkOK.length) {
                    allValid = false;
                    break;
                }
                if (ch != ",")
                    allNum += ch;
            }
            if (!allValid) {
                alertsay = "Chyba: nieje zadané číslo ";
                alertsay = alertsay + checkOK + " "
                alert(alertsay);
                return (false);
            }
            var chkVal = allNum;
            var prsVal = parseInt(allNum);
            if (chkVal != "" && !(prsVal >= minval && prsVal <= maxval)) {
                alertsay = "Zadaj hodnotu v rozsahu "
                alertsay = alertsay + "od " + minval + " "
                alertsay = alertsay + "do " + maxval + "."
                alert(alertsay);
                return (false);
            }
        }
        function Round3Dec(InputVal) {
            return Math.round(InputVal * 1000) / 1000;
        }
        function NextHigherStandardResistor(Resistor_Ohms) {
            var Power10;
            var Units;
            Power10 = 1;
            while (Resistor_Ohms > 8.2) {
                Power10 *= 10;
                Resistor_Ohms /= 10;
            }
            if (Resistor_Ohms < 1.0)
                Resistor_Ohms = 1.0;
            else if (Resistor_Ohms < 1.2)
                Resistor_Ohms = 1.2;
            else if (Resistor_Ohms < 1.5)
                Resistor_Ohms = 1.5;
            else if (Resistor_Ohms < 1.8)
                Resistor_Ohms = 1.8;
            else if (Resistor_Ohms < 2.2)
                Resistor_Ohms = 2.2;
            else if (Resistor_Ohms < 2.7)
                Resistor_Ohms = 2.7;
            else if (Resistor_Ohms < 3.3)
                Resistor_Ohms = 3.3;
            else if (Resistor_Ohms < 3.9)
                Resistor_Ohms = 3.9;
            else if (Resistor_Ohms < 4.7)
                Resistor_Ohms = 4.7;
            else if (Resistor_Ohms < 5.6)
                Resistor_Ohms = 5.6;
            else if (Resistor_Ohms < 6.8)
                Resistor_Ohms = 6.8;
            else
                Resistor_Ohms = 8.2;
            if (Power10 >= 1000000) {
                Units = " Mega-ohm";
                Power10 /= 1000000;
            } else if (Power10 >= 1000) {
                Units = " Kilo-ohm";
                Power10 /= 1000;
            } else {
                Units = " Ohm";
            }
            Resistor_Ohms *= Power10;
            return "" + Round3Dec(Resistor_Ohms) + Units;
        }
        function compute(obj) {
            with(Math) {
                var ResultText = "";
                var bErrors;
                va1 = eval(obj.voltagea1.value);
                va2 = eval(obj.voltagea2.value);
                ia3 = eval(obj.currenta3.value);
                if (obj.name != "single")
                    ledcount = eval(obj.leds.value);
                if (isNaN(va1)) {
                    ResultText += "Chyba: nieje zadané čislo pre napätie zdroja Uz.\n";
                    bErrors = true;
                }
                if (isNaN(va2)) {
                    ResultText += "Chyba: nieje zadané čislo pre zápalné napätie diódy Uf.\n";
                    bErrors = true;
                }
                if (isNaN(ia3)) {
                    ResultText += "Chyba: nieje zadané čislo pre prúd diódy Iled.\n";
                    bErrors = true;
                }
                if (!bErrors) {
                    if (obj.name == "series")
                        aa1 = (va1 - va2 * ledcount) / (ia3 / 1000);
                    else if (obj.name == "parallel")
                        aa1 = (va1 - va2) / (ia3 * ledcount / 1000);
                    else
                        aa1 = (va1 - va2) / (ia3 / 1000);
                    obj.resistor.value = Round3Dec(aa1);
                    obj.match.value = NextHigherStandardResistor(aa1);
                    if (obj.name == "series")
                        aa2 = (va1 - va2 * ledcount) * (ia3 / 1000);
                    else if (obj.name == "parallel")
                        aa2 = (va1 - va2) * (ia3 * ledcount / 1000);
                    else
                        aa2 = (va1 - va2) * (ia3 / 1000);
                    obj.watts.value = Round3Dec(aa2);
                    obj.safe.value = Round3Dec(aa2 * 100 / 60); //derate
                    if (aa1 < 0)
                        alert("LED diódy potrebujú väčšie napätie zdroja Uz.");
                } else {
                    alertsay = ResultText;
                    alert(alertsay);
                    return (false);
                }
            }
        }
