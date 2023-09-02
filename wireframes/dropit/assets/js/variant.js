var CATA_CONFIG = {
  "canvas": {
    "width": 720,
    "height": 720,
    "splashScreen": {
      "show": true,
      "delay": 250,
      "name": "splash.png",
      "new": true
    }
  },
  "mechanic": {
    "size": "s",
    "bounciness": 1,
    "rotation": true,
    "centerWinLevel": true,
    "pegs": {
      "pegColor": "#ffffff"
    },
    "buckets": {
      "dividerColor": "#FF0000",
      "info": [
        {
          "name": 0,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "LOSS",
          "image": "bucketImage0.png"
        },
        {
          "name": 1,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN1",
          "image": "bucketImage1.png"
        },
        {
          "name": 2,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN2",
          "image": "bucketImage2.png"
        },
        {
          "name": 3,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN3",
          "image": "bucketImage3.png"
        },
        {
          "name": 4,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN4",
          "image": "bucketImage4.png"
        },
        {
          "name": 5,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN5",
          "image": "bucketImage5.png"
        },
        {
          "name": 6,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN6",
          "image": "bucketImage6.png"
        },
        {
          "name": 7,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN7",
          "image": "bucketImage7.png"
        },
        {
          "name": 8,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN8",
          "image": "bucketImage8.png"
        },
        {
          "name": 9,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN9",
          "image": "bucketImage9.png"
        },
        {
          "name": 10,
          "fontSize": 24,
          "fontColor": "#ffffff",
          "value": "WIN10",
          "image": "bucketImage10.png"
        }
      ]
    }
  },
  "settingsHelp": {
    "canvas": {
      "splashScreen": {
        "show": "True or False; False to skip splash screen"
      }
    },
    "mechanic": {
      "size": "value 's' for small or 'l' for large",
      "bounciness": "A number between 0.0 and 1.0, with 1.0 being highest",
      "rotation": "True or False; True to turn on spin effect as ball falls between pegs",
      "centerWinLevel": "True to randomize bucket position to force final landing spot near center - improves realism"
    },
    "buckets": {
      "name": "Corresponds to prize level",
      "value": "Text to display in bucket, can be empty if preferred"
    }
  }
};