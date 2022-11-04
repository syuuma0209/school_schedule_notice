function get_wether() {
  //明日の天気を取得

  //ウェザーニュースの天気情報
  var url = PropertiesService.getScriptProperties().getProperty("WEATHER_URL")
  var html = UrlFetchApp.fetch(url).getContentText();  
  var $ = Cheerio.load(html);  
  var $div = $('#card_forecast > div:nth-child(2) > div > div.switchContent > div:nth-child(4) > section > div.wTable__inner > div.wTable__content > div:nth-child(1) > p.wTable__item.weather > img');

  //天気のアイコンのURLを取得
  var out = [];
  $div.each((index, element) => {  
    out.push($(element)[0]["attribs"]["src"])
  });


  console.log(out[0]);
  console.log(weather_dic(out[0].slice(-7,-4)));
  return [out[0],weather_dic(out[0].slice(-7,-4))];
}


function weather_dic(id){
  //天気idから名称に変換


  //ウェザーニュースの天気アイコンと名称の対応表
  var weather_dict = {
    "100": "晴れ",
    "550": "晴れ",
    "101": "晴れ",
    "102": "晴れ",
    "104": "晴れ",
    "110": "晴れ",
    "112": "晴れ",
    "115": "晴れ",
    "200": "くもり",
    "201": "くもり",
    "202": "くもり",
    "204": "くもり",
    "210": "くもり",
    "212": "くもり",
    "215": "くもり",
    "650": "小雨",
    "300": "雨",
    "850": "大雨",
    "301": "雨",
    "302": "雨",
    "303": "雨",
    "311": "雨",
    "313": "雨",
    "314": "雨",
    "430": "みぞれ",
    "400": "雪",
    "950": "大雪",
    "401": "雪",
    "402": "雪",
    "403": "雪",
    "411": "雪",
    "413": "雪",
    "414": "雪",
    "600": "晴れ",
    "861": "大雨"
  }

  //変換
  var weather_name = weather_dict[id];
  if (weather_name == undefined){
    var weather_name = id;
  }
  return weather_name
}
