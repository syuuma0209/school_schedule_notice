function sendWithMessaging(data) {
  //送信

  //各パラメータ
  const token = PropertiesService.getScriptProperties().getProperty('LINE_TOKEN');
  const endPoint = "https://api.line.me/v2/bot/message/push";


  //宛先ユーザID
  //グループへ送信する場合
  const to = PropertiesService.getScriptProperties().getProperty('GROUP_ID');

  //（テスト用）自分へ送信する場合
  //const to = PropertiesService.getScriptProperties().getProperty('MY_ID');


  //送信するメッセージを生成
  const flexMessage = get_message(data);

  //ペイロードを作成
  const payload = {
    to,
    messages: [{
      "type": "flex",
      "altText": "明日の時間割",
      "contents": flexMessage
    }]
  };

  //http通信のヘッダー、ペイロードを作成
  const options = {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + token
    },
    method: "post",
    muteHttpExceptions: true,
    payload: JSON.stringify(payload)
  };

  //送信
  const res = UrlFetchApp.fetch(endPoint, options);

  //エラーの場合
  if (res.getResponseCode() !== 200) {
    throw new Error(res.getContentText());
  }
}