<?php 
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
include 'php/api.php';
date_default_timezone_set($tz);
$activePage = "geo";
//print location address
$geocode = file_get_contents('http://maps.googleapis.com/maps/api/geocode/json?latlng='.$_POST['latitude'].','.$_POST['longitude'].'&sensor=false');
$output = json_decode($geocode);
$locData = $output->results[0]->formatted_address;
$locCity = $output->results[0]->address_components[3]->long_name;
$locState = $output->results[0]->address_components[5]->short_name;
?>

<!DOCTYPE html>
<html lang="en">

<!-- HEADER -->
<?php require 'partials/part_header.php' ?>

  <body onload="getLocation()">

    <!-- NAV BAR -->
    <?php require 'partials/part_nav.php' ?>

    <div class="container">

      <div class="row">
      <h3 class="ml-15 text-info"><?php echo $locCity.', '.$locState ?> <small class="text-muted"><?php echo $locData ?></small></h3>

        <!-- CURRENT CONDITIONS -->
        <?php require 'partials/part_current.php' ?>

        <!-- TODAY FORECAST -->
        <?php require 'partials/part_today.php' ?>

      </div> <!-- /row -->

      <!-- HOURLY -->
      <?php require 'partials/part_hourly.php' ?>

      <!-- WEEK FORECAST -->
      <?php require 'partials/part_daily.php' ?>

    </div> <!-- /container -->


    <?php require 'partials/part_footer.php' ?>


  </body>
</html>
