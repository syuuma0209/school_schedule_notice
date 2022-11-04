function get_message(data) {
  //フレックスメッセージを生成

  //環境変数
  const IMAGE_URL = PropertiesService.getScriptProperties().getProperty('IMAGE_URL')
  const SCHEDULE_CHANGE_URL = PropertiesService.getScriptProperties().getProperty('SCHEDULE_CHANGE_URL')
  const ADD_CONTACT_URL = PropertiesService.getScriptProperties().getProperty('ADD_CONTACT_URL')


  //明日の天気を取得
  var weather = get_wether();

  const text = {
  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "image",
        "url": IMAGE_URL,
        "aspectMode": "cover",
        "margin": "0px",
        "aspectRatio": "1:1",
        "size": "300px",
        "position": "relative"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "明日の時間割("+Utilities.formatDate(new Date(),"JST","MM")+"/"+Utilities.formatDate(new Date(),"JST","dd")+")",
            "color": "#ffffff",
            "size": "xl",
            "align": "center"
          }
        ],
        "position": "absolute",
        "offsetTop": "20px",
        "width": "100%"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "1│"+data[0][0],
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "2│"+data[0][1],
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "3│"+data[0][2],
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "4│"+data[0][3],
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "5│"+data[0][4],
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "6│"+data[0][5],
            "color": "#ffffff"
          },
          {
            "type": "text",
            "text": "7│"+data[0][6],
            "color": "#ffffff"
          }
        ],
        "position": "absolute",
        "offsetTop": "55px",
        "offsetStart": "10px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "color": data[2][0],
            "text": "│"+data[1][0]
          },
          {
            "type": "text",
            "color": data[2][1],
            "text": "│"+data[1][1]
          },
          {
            "type": "text",
            "color": data[2][2],
            "text": "│"+data[1][2]
          },
          {
            "type": "text",
            "color": data[2][3],
            "text": "│"+data[1][3]
          },
          {
            "type": "text",
            "color": data[2][4],
            "text": "│"+data[1][4]
          },
          {
            "type": "text",
            "color": data[2][5],
            "text": "│"+data[1][5]
          },
          {
            "type": "text",
            "color": data[2][6],
            "text": "│"+data[1][6]
          }
        ],
        "position": "absolute",
        "offsetTop": "55px",
        "offsetStart": "80px"
      },
       {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "連絡",
            "color": "#ffffff",
            "offsetTop": "3px",
            "offsetStart": "3px",
            "size": "11px",
            "decoration": "underline"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": data[3],
            "position": "absolute",
            "height": "45px",
            "width": "135px",
            "offsetStart": "30px",
            "offsetTop": "3px"
          }
        ],
        "position": "absolute",
        "offsetTop": "220px",
        "offsetStart": "10px",
        "backgroundColor": "#ffffff33",
        "width": "200px",
        "height": "70px",
        "cornerRadius": "10px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "明日の天気",
            "color": "#ffffff",
            "offsetTop": "3px",
            "offsetStart": "3px",
            "size": "11px",
            "decoration": "underline"
          },
          {
            "type": "image",
            "url": "https:"+weather[0],
            "size": "40px",
            "position": "absolute",
            "offsetTop": "18px",
            "offsetStart": "16px"
          }
        ],
        "position": "absolute",
        "offsetTop": "220px",
        "offsetStart": "220px",
        "backgroundColor": "#ffffff33",
        "width": "70px",
        "height": "70px",
        "cornerRadius": "10px",
        "action": {
          "type": "uri",
          "label": "明日の天気",
          "uri": "https://www.google.com/search?q=%E6%98%8E%E6%97%A5%E3%81%AE%E5%A4%A9%E6%B0%97"
        }
      }
    ],
    "paddingAll": "0px"
  },
  "footer": {
    "type": "box",
    "layout": "horizontal",
    "contents": [
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "時間割変更",
          "uri": SCHEDULE_CHANGE_URL
        },
        "height": "sm",
        "style": "primary"
      },
      {
        "type": "separator",
        "margin": "10px"
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "uri": ADD_CONTACT_URL,
          "label": "連絡を追加"
        },
        "height": "sm",
        "style": "primary"
      }
    ]
  }
}
return text;
}
