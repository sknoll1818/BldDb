function CellChoice(){

    var piece = document.getElementsByName('PieceType');
for (var i = 0; i < 7; i++)
{
 if (piece[i].checked)
 {
  alert(Hi);
  break;
 }
}
}
var excelIO = new GC.Spread.Excel.IO();
var excelUrl = $("#importUrl").val();
function ImportFile() {
    var excelUrl = "./Full 3Style Comm Series + more.xlsx";

    var oReq = new XMLHttpRequest();
    oReq.open('get', excelUrl, true);
    oReq.responseType = 'blob';
    oReq.onload = function () {
        var blob = oReq.response;
        excelIO.open(blob, LoadSpread, function (message) {
            console.log(message);
        });
    };
    oReq.send(null);
}
function LoadSpread(json) {
    jsonData = json;
    workbook.fromJSON(json);

    workbook.setActiveSheet("Revenues (Sales)");
}
