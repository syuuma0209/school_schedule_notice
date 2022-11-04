function get_contact(low) {
  //連絡を取得し、フレックスメッセージを生成
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("時間割DB");
  var contact = sheet.getRange("D"+low).getValue();

  //カンマ区切りで改行
  contact = contact.split(",");
  var out = [];
  for (var i=0;i<contact.length;i++){
    out.push({
        "type": "text",
        "text": "●"+contact[i],
        "color": "#ffffff",
        "size": "9px",
    })
  }

  console.log(contact);
  return out;
}