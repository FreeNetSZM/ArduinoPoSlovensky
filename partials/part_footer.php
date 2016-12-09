    <!-- LOCATION FORM -->
    <form id="loc" name="loc" method="post" action="loc_geo.php">
        <input type='hidden' value='' name='latitude' id='latitude'/>
        <input type='hidden' value='' name='longitude' id='longitude'/>
    </form>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/skycons.js"></script>
    <!-- GeoCode -->
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places"></script>
    <script src="js/jquery.geocomplete.min.js"></script>

    <script>
      var skycons = new Skycons({"color": "#ebebeb"}),
          list  = [
            "clear-day", "clear-night", "partly-cloudy-day",
            "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
            "fog"
          ],
          i;

        for(i = list.length; i--; ) {
            var weatherType = list[i],
                elements = document.getElementsByClassName( weatherType );
            for (e = elements.length; e--;){
                skycons.set( elements[e], weatherType );
            }
        }

      skycons.play();

      //GeoCode
      $(function(){
        $("#geocomplete").geocomplete({
          details: "form",
          types: ["geocode"],
        });
      });

    </script>


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>