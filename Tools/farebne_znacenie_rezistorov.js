        var imgdir = "https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/";
        // create array listing all the multiplier values
        var multiplier = new Array()
        multiplier[0] = 0
        multiplier[1] = 1
        multiplier[2] = 2
        multiplier[3] = 3
        multiplier[4] = 4
        multiplier[5] = 5
        multiplier[6] = 6
        multiplier[7] = 7
        multiplier[8] = 8
        multiplier[9] = 9
        multiplier[10] = -1
        multiplier[11] = -2
        // create array listing all tolerance values
        var tolerance = new Array()
        tolerance[0] = "+/-5%"
        tolerance[1] = "+/-10%"
        tolerance[2] = "+/-20%"
        // format large values into kilo and meg
        function format(ohmage) {
            if (ohmage >= 1e6) {
                ohmage /= 1e6
                return "" + ohmage + " MΩ"
            } else {
                if (ohmage >= 1e3) {
                    ohmage /= 1e3
                    return "" + ohmage + " KΩ"
                } else {
                    return "" + ohmage + " Ω"
                }
            }
        }
        // calculate resistance and tolerance values
        function calcOhms() {
            var form = document.forms["input"]
            var d1 = form.tensSelect.selectedIndex
            var d2 = form.onesSelect.selectedIndex
            var m = form.multiplierSelect.selectedIndex
            var t = form.toleranceSelect.selectedIndex
            var ohmage = (d1 * 10) + d2
            ohmage = eval("" + ohmage + "e" + multiplier[m])
            ohmage = format(ohmage)
            var tol = tolerance[t]
            document.forms["output"].result.value = ohmage + ", " + tol
        }
        // pre-load all color images into image cache
        var colorArray = new Array("Black", "Blue", "Brown", "Gold", "Gray", "Green", "None", "Orange", "Red", "Silver", "Violet", "White", "Yellow")
        var imageDB = new Array()
        for (i = 0; i < colorArray.length; i++) {
            imageDB[colorArray[i]] = new Image(21, 182)
            imageDB[colorArray[i]].src = imgdir + colorArray[i] + ".gif"
        }
        function setTens(choice) {
            var tensColor = choice.options[choice.selectedIndex].value
            document.tens.src = imageDB[tensColor].src
            calcOhms()
        }
        function setOnes(choice) {
            var onesColor = choice.options[choice.selectedIndex].value
            document.ones.src = imageDB[onesColor].src
            calcOhms()
        }
        function setMult(choice) {
            var multColor = choice.options[choice.selectedIndex].value
            document.mult.src = imageDB[multColor].src
            calcOhms()
        }
        function setTol(choice) {
            var tolColor = choice.options[choice.selectedIndex].value
            document.tol.src = imageDB[tolColor].src
            calcOhms()
        }
        window.onload = calcOhms;

            var form = document.forms["input"]
            var tensDigit = form.tensSelect.selectedIndex
            var tensColor = form.tensSelect.options[tensDigit].text
            var onesDigit = form.onesSelect.selectedIndex
            var onesColor = form.onesSelect.options[onesDigit].text
            var multDigit = form.multiplierSelect.selectedIndex
            var multColor = form.multiplierSelect.options[multDigit].text
            var tolDigit = form.toleranceSelect.selectedIndex
            var tolColor = form.toleranceSelect.options[tolDigit].text
            var table = "<table border=0 align=center><form name='output'>"
            table += "<tr><th align=middle>Hodnota odporu:</th>"
            table += " <th align='middle'><input type='text' name='result' size=20 onFocus='this.blur()'>"
            table += "</th></tr><tr><td colspan=2>&nbsp;"
            table += "<img SRC='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/resleft.gif' width=127 height=182><img" +
                " src='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/" + tensColor + ".gif' name='tens' width=21 height=182><img" +
                " src='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/" + onesColor + ".gif' name='ones' width=21 height=182><img" +
                " src='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/" + multColor + ".gif' name='mult' width=21 height=182><img" +
                " src='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/spacer.gif' width=17 height=182><img" +
                " src='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/" + tolColor + ".gif' name='tol' width=21 height=182><img" +
                " src='https://sites.google.com/site/arduinoposlovensky/nastroje/farebne-znacenie-odporov/resright.gif' width=127 height=182>"
            table += "&nbsp;</td></tr></form></table>"
            document.write(table)
