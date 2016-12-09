<?php 

$api_key = '0618b94918937a4cf21c2cb1d75537f7';
$units = 'si';  // Read the API docs for full details // default is auto

$json = 'https://api.darksky.net/forecast/'.$api_key.'/'.$latitude.','.$longitude.'?lang=sk&units='.$units; 
//$json = 'sample.json';  //for testing
$json = file_get_contents($json); 
$response = json_decode($json, true); 
      
if ($response != null) {

  $lat = $response['latitude'];
  $lon = $response['longitude'];
  $tz = $response['timezone'];
  $offset = $response['offset'];

  //Current Conditions
  $curTime = $response['currently']['time'];
  $curSummary = $response['currently']['summary'];
  $curIcon = $response['currently']['icon'];
  $curPrecipProb = ($response['currently']['precipProbability'])*100;
    if (isset($response['currently']['precipType'])) {
      $curPrecipType = $response['currently']['precipType'];
    }     
  $curTemp = round($response['currently']['temperature']);
  $curFeelsLike = round($response['currently']['apparentTemperature']);
  $curHumidity = ($response['currently']['humidity'])*100;
  $curDewPoint = $response['currently']['dewPoint'];
  $curWindSpeed = $response['currently']['windSpeed'];
  $curWindBearing = $response['currently']['windBearing'];
  $curCloudCover = ($response['currently']['cloudCover'])*100;
  $curPressure = round(($response['currently']['pressure'])*0.0295301, 2);
  $curVis = round($response['currently']['ozone']);

  //Now Conditions
  $nowSumamry = $response['daily']['summary'];
  $nowIcon = $response['daily']['icon'];

  //Hourly Forecast
  $hourlySumamry = $response['hourly']['summary'];
  $hourlyIcon = $response['hourly']['icon'];
  $hourlyCond= array();
    foreach ($response['hourly']['data'] as $td) {
      $hourlyCond[] = $td;
    } 

  //Daily Forecast
  $dailySumamry = $response['daily']['summary'];
  $dailyIcon = $response['daily']['icon'];
  $dailyCond= array();
    foreach ($response['daily']['data'] as $d) {
      $dailyCond[] = $d;
    } 

}

?>