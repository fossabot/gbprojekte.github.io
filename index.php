<?php
$handle = "./"; //fuer aktuelle dir
$scan = scandir ($handle);

foreach ($scan as $datei)
{
  echo"<a href='./$datei'>$datei</a><br/>";
}
