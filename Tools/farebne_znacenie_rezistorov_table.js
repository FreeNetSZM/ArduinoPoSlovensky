            var form = document.forms["input"]
            var tensDigit = form.tensSelect.selectedIndex
            var tensColor = form.tensSelect.options[tensDigit].text
            var onesDigit = form.onesSelect.selectedIndex
            var onesColor = form.onesSelect.options[onesDigit].text
            var multDigit = form.multiplierSelect.selectedIndex
            var multColor = form.multiplierSelect.options[multDigit].text
            var tolDigit = form.toleranceSelect.selectedIndex
            var tolColor = form.toleranceSelect.options[tolDigit].text
            var table = "<table class='table'><form name='output'>"
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
