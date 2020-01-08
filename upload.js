document.getElementById("dateien").addEventListener("change", dateiausgabe, false);

function dateiausgabe(ereignis) {

  var dateien = ereignis.target.files;

  for (var i = 0, datei; datei = dateien[i]; i++) {

    var inhalte = new FileReader();

    inhalte.onload = (function(datei) {
      return function(e) {

        var element = document.createElement("LI");
        var info = document.createTextNode(datei.name + " (" + datei.type + "), " + datei.size + " Bytes");
        var bild = document.createElement("IMG");
        bild.setAttribute("src", e.target.result);

        element.appendChild(info);
        element.appendChild(document.createElement("BR"));
        element.appendChild(bild);

        document.getElementById("dateiliste").appendChild(element);

      };
    })(datei);

    inhalte.readAsDataURL(datei);

  }

}
