function main_homework() {
  //宿題の通知

  //スプレッドシートのインスタンス
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("課題DB");
  //明日の行を取得
  var low = get_spreadsheet_low() - 1;
  var homework_data = sheet.getRange("C" + low + ":K" + low).getValues()[0]
  var message = [];
  for (var i = 0; i < 8; i++) {
    //空白でなければ
    if (homework_data[i] !== "") {
      message.push({
        "type": "text",
        "text": "●" + homework_data[i],
        "color": "#ffffff"
      },)
    }
  }

  console.log(message)

  //何もない場合は送信しない
  if (message.length == 0) {
    return;
  }

  //送信
  sendWithMessaging_homework(message);
}
