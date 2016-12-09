<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.php">Počasie</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">

        <li <?php if ($activePage == "geo") {?> class="active" <?php } ?>><a href="#" onclick="document.getElementById('loc').submit(); return false;"><i class="fa fa-location-arrow"></i></a></li>
        <li <?php if ($activePage == "Nitra") {?> class="active" <?php } ?>><a href="index.php">Nitra</a></li>
        <li <?php if ($activePage == "Bratislava") {?> class="active" <?php } ?>><a href="bratislava.php">Bratislava</a></li>

      </ul>

      <form class="navbar-form navbar-left" method="post" action="lookup_geo.php">
        <div class="form-group">
          <input class="form-control" id="geocomplete" type="text" placeholder="Type a city" />
          <input type='hidden' name="lat" type="text" value="">
          <input type='hidden' name="lng" type="text" value="">
        </div>
          <button class="btn btn-default" id="find" type="submit" value="find" />Vahľadaj</button>
      </form>      

      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><i class="fa fa-clock-o"></i> <?php echo date("G:i | j.n.Y", $curTime); ?></a></li> <!-- forecast time -->
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>

