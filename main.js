const SHEET_ID = PropertiesService.getScriptProperties().getProperty('SHEET_ID')

function main(){
  //スプレッドシートのインスタンス
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("時間割DB");

  //明日の行を取得
  var low = get_spreadsheet_low();

  //通知するか
  var need_notice = sheet.getRange("C"+low).getValue()
  if(need_notice){
    //データを取得
    var send_data = [];
    send_data.push(sheet.getRange("E"+low+":K"+low).getValues()[0]);
    send_data.push(sheet.getRange("L"+low+":R"+low).getValues()[0]);
    send_data.push(get_font_color(low))
    send_data.push(get_contact(low))

    //送信
    sendWithMessaging(send_data);
  }else{
    //通知しない
    console.log("通知しません");
  }

  //宿題の通知も同時にする
  main_homework()
}

function get_spreadsheet_low(){
  //明日の予定の行を取得
  //（ゴリ押しで取得してるので、あんまり効率良くない）

  //スプレッドシートのインスタンス
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("時間割DB");


  var date = sheet.getRange("A:B").getValues();

  var month = Utilities.formatDate(new Date(),"JST","MM");
  var day = Utilities.formatDate(new Date(),"JST","dd");

  //月の行を取得
  for(var i=0;i<date.length;i++){
    if (date[i][0]==month){
      break;
    }
  }

  //日付の行を取得
  for(var j=i;j<date.length;j++){
    if (date[j][1]==day){
      break;
    };
  };

  //タイトル1行と明日の行分を足す
  console.log(j+2);
  return j+2
}

function get_font_color(low){
  //持ち物の文字色を取得
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("時間割DB")
  var colors = sheet.getRange("L"+low+":R"+low).getFontColors()[0];

  //デフォルトの黒色はデザインのため白へ
  var colors_out = colors.join(",")
  var colors_out = colors_out.replace(/#000000/g, '#ffffff')
  var colors_out = colors_out.split(",")
  
  console.log(colors_out)
  return colors_out
}