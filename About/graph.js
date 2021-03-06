  // set your channel id here
  var channel_id = 103953;
  // set your channel's read api key here if necessary
  var api_key = 'PEMFODV15CS6HZD3';
  // global variables
  var chart, charts, data;
  // variable for the data point
  var teplota, vlhkost, tlak, lux, datum;
  // load the google gauge visualization
  google.load('visualization', '1', {packages:['gauge']});
  google.setOnLoadCallback(loadData);
  // display the data
  function displayData(point, name) {
    data.setValue(0, 0, name);
    data.setValue(0, 1, point);
    chart.draw(data, options);
  }
  // load the data
  function loadData() {
    // get the data from thingspeak
    $.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function(data) {
      // get the data point
      teplota = data.field1;
      vlhkost = data.field2;
      tlak = data.field3;
      lux = data.field4;
      datum = new Date(data.created_at);
      document.getElementById("Datum").innerHTML = datum;
      initChartTeplota();
      initChartVlhkost();
      initChartTlak();
      initChartLux();
    });
  }
  // initialize the chart
  function initChartTeplota() {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);
    chart = new google.visualization.Gauge(document.getElementById('Teplota_chart_div'));
    options = {width: 230, height: 230, min: -10, max: 45, redFrom: 35, redTo: 45, yellowFrom: -10, yellowTo: 0, minorTicks: 5};
    displayData(teplota, "Teplota");
  }
  function initChartVlhkost() {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);
    chart = new google.visualization.Gauge(document.getElementById('Vlhkost_chart_div'));
    options = {width: 230, height: 230, min: 20, max: 80, greenFrom: 40, greenTo: 60, minorTicks: 10};
    displayData(vlhkost, "Vlhkosť");
  }
  function initChartTlak() {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);
    chart = new google.visualization.Gauge(document.getElementById('Tlak_chart_div'));
    options = {width: 230, height: 230, min: 980, max: 1050, redFrom: 980, redTo: 1000, yellowFrom: 1030, yellowTo: 1050, greenFrom: 1000, greenTo: 1030, minorTicks: 5};
    displayData(tlak, "Tlak");
  }
  function initChartLux() {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);
    chart = new google.visualization.Gauge(document.getElementById('Lux_chart_div'));
    options = {width: 230, height: 230, min: 0, max: 200, minorTicks: 5};
    displayData(lux, "Lux");
  }     
