function handleFiles() {
  // Check for the various File API support.
  if (window.FileReader) {
      // FileReader are supported.
      getAsText("file:///UF.csv");
  } else {
      alert('FileReader are not supported in this browser.');
  }
}

function getAsText(fileToRead) {
  var reader = new FileReader();
  // Read file into memory as UTF-8
  reader.readAsText(fileToRead);
  alert(reader.readAsText(fileToRead));

  // Handle errors load
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
}

function loadHandler(event) {
  var csv = event.target.result;
  processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
            var tarr = [];
            for (var j=0; j<data.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
    }
}

function errorHandler(evt) {
  if(evt.target.error.name == "NotReadableError") {
      alert("Canno't read file !");
  }
}

function commChoice(PieceOne,PieceTwo, PieceThree){
 if(PieceOne=="UF" && PieceTwo=="UB" && PieceThree=="FR"){
   alert("[R' U' : [R2, S]]");
 }

}
