function sendWithMessaging_notion() {
  //送信

  //各パラメータ
  const token = PropertiesService.getScriptProperties().getProperty('LINE_TOKEN');
  const endPoint = "https://api.line.me/v2/bot/message/push";


  //宛先ユーザID
  //グループへ送信する場合
  //const to = PropertiesService.getScriptProperties().getProperty('GROUP_ID');

  //（テスト用）自分へ送信する場合
  const to = PropertiesService.getScriptProperties().getProperty('MY_ID');


  var text = `【更新情報】
・課題の通知がされるようになりました
・時間割変更が分かりやすくなりました
・日付を表示し、分かりやすくなりました
・内部コードをGitHubで公開しました

内部コード：
https://github.com/syuuma0209/school_schedule_notice

要望などがあれば：
itosyuuma@gmail.com`

  //ペイロードを作成
  const payload = {
    to,
    messages: [{
      "type": "text",
      "altText": "明日の時間割",
      "text": text
    }],
    "notificationDisabled":true,
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