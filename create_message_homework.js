function get_message_homework() {
var data ={
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "週末課題",
        "size": "25px",
        "align": "center",
        "color": "#ffffff"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "●英語：アプローズ",
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "●英語：アプローズ",
            "color": "#ffffff"
          }
        ],
        "paddingStart": "10px",
        "paddingTop": "10px"
      }
    ],
    "paddingAll": "5px",
    "borderWidth": "5px",
    "borderColor": "#A67F5D"
  },
  "styles": {
    "body": {
      "backgroundColor": "#277332"
    }
  }
}

return data;
}
