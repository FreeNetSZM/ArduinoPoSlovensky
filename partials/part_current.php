<!-- current -->
<div class="col-md-6 col-sm-6">

  <div class="panel panel-default">
    <div class="panel-heading"><h3 class="no-margin"><strong>Aktuálne</strong> <small class="text-warning hidden-xs"><?php echo date("G:i", $curTime); ?></small></h3></div>
    <div class="panel-body">
              <div class="col-md-2 no-padding inline">
                <canvas class="<?php echo $curIcon; ?>" width="64" height="120"></canvas>
              </div>          

              <div class="col-md-10">
                <div class="temp"><?php echo $curTemp; ?><i class="wi wi-degrees"></i></div>
                <strong><?php echo $curSummary; ?></strong> <br>
                <?php echo $nowSumamry ?> <br>
                <i class="wi wi-humidity"></i> <?php echo $curHumidity; ?>% &nbsp;&nbsp; Rosný bod: <?php echo round($curDewPoint); ?>&deg; <br>
                <i class="wi wi-cloudy"></i> <?php echo $curCloudCover; ?>% &nbsp;&nbsp; <i class="wi wi-barometer"></i> <?php echo $curPressure; ?><br>
                <i class="wi wi-strong-wind"></i> <?php echo round($curWindSpeed); ?> km/h 
                        <?php
                            if ($curWindBearing>338 && $curWindBearing<23)
                              echo '<i class="wi wi-direction-down"></i>';
                            if ($curWindBearing>23 && $curWindBearing<68)
                              echo '<i class="wi wi-direction-down-right"></i>';
                            if ($curWindBearing>68 && $curWindBearing<113)
                              echo '<i class="wi wi-direction-left"></i>';
                            if ($curWindBearing>113 && $curWindBearing<158)
                              echo '<i class="wi wi-direction-up-left"></i>';
                            if ($curWindBearing>158 && $curWindBearing<203)
                              echo '<i class="wi wi-direction-up"></i>';
                            if ($curWindBearing>203 && $curWindBearing<248)
                              echo '<i class="wi wi-direction-up-right"></i>';
                            if ($curWindBearing>248 && $curWindBearing<293)
                              echo '<i class="wi wi-direction-right"></i>';
                            if ($curWindBearing>293 && $curWindBearing<338)
                              echo '<i class="wi wi-direction-down-right"></i>';
                         ?>
                 &nbsp;&nbsp;&nbsp; <i class="fa fa-eye"></i> <?php echo $curVis; ?> ozón <br> 

              </div>
    </div>
  </div>  <!-- /panel -->     

  
</div>
<!-- /current -->
