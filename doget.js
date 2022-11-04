function doGet(e) {
  console.log(e);
  try{
    var low = get_spreadsheet_low()
    var low = low-1

    var data = get_data(low,10)
    
    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({ response:"OK", message: data }));
    return output;
  }catch(e){
    console.log("エラー")
    console.log(e)
    var output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({ response: "NO" ,message: e}));
    return output;
  }
}

function get_data(low,num){
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("時間割DB");
  var out = []
  var out2 = []
  var data = sheet.getRange("A"+low+":R"+low+num).getValues()

  for(var i=0;i<num;i++){
    out.push([data[i][0]+"/"+data[i][1],data[i][3],data[i][4],data[i][5],data[i][6],data[i][7],data[i][8],data[i][9],data[i][10]])
    out2.push([data[i][11],data[i][12],data[i][13],data[i][14],data[i][15],data[i][16],data[i][17]])
  }
  // console.log(out)
  // console.log(out2)
  return [out,out2]
}