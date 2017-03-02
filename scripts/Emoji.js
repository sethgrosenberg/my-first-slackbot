
var happyEmoji = ':smile:';
var sadEmoji = ':dissapointed:';
var embarrassedEmoji = ':blush:'
var playfulEmoji = ':stuck_out_tongue:'
var flirtaciousEmoji = ':wink:'
var eyeRollEmoji = ':rolling_eyes:'
var thinkingEmoji = ':thinking:'
var angryEmoji = ':angry:'
var loveEmoji = ':heart_eyes:'
var angelEmoji = ':angel:'
var laughingEmoji = ':laughing:'
var confusedEmoji = ':confounded:'
var snacks = 
[ 
{
    "text": "Cookies!",
    "attachments": [
        {
            "title": "The Further Adventures of Slackbot",
            "fields": [
                {
                    "title": "Volume",
                    "value": "1",
                    "short": true
                },
                {
                    "title": "Issue",
                    "value": "3",
            "short": true
                }
            ],
            "author_name": "Stanford S. Strickland",
            "author_icon": "http://a.slack-edge.com/7f18https://a.slack-edge.com/bfaba/img/api/homepage_custom_integrations-2x.png",
            "image_url": "http://i.imgur.com/OJkaVOI.jpg?1"
        },
        {
            "title": "Synopsis",
            "text": "After @episod pushed exciting changes to a devious new branch back in Issue 1, Slackbot notifies @don about an unexpected deploy..."
        },
        {
            "fallback": "Would you recommend it to customers?",
            "title": "Would you recommend it to customers?",
            "callback_id": "comic_1234_xyz",
            "color": "#3AA3E3",
            "attachment_type": "default",
        }
    ]
};,

{
    "text": "Veggies + Dip!",
    "attachments": [
        {
            "title": "The Further Adventures of Slackbot",
            "fields": [
                {
                    "title": "Volume",
                    "value": "1",
                    "short": true
                },
                {
                    "title": "Issue",
                    "value": "3",
            "short": true
                }
            ],
            "author_name": "Stanford S. Strickland",
            "author_icon": "http://a.slack-edge.com/7f18https://a.slack-edge.com/bfaba/img/api/homepage_custom_integrations-2x.png",
            "image_url": "http://i.imgur.com/OJkaVOI.jpg?1"
        },
        {
            "title": "Synopsis",
            "text": "After @episod pushed exciting changes to a devious new branch back in Issue 1, Slackbot notifies @don about an unexpected deploy..."
        },
        {
            "fallback": "Would you recommend it to customers?",
            "title": "Would you recommend it to customers?",
            "callback_id": "comic_1234_xyz",
            "color": "#3AA3E3",
            "attachment_type": "default",
        }
    ]
};,



module.exports = function(bot) {
  bot.hear(/I am (.*)/, function(msg) {
    var emotion;
    emotion = msg.match[1];
    switch (emotion) {
      case "happy":
        return msg.send(comicBook);
        break;
      case "sad":
        return msg.send(sadEmoji);
        break;
      case "embarrassed":
        return msg.send(embarrassedEmoji);
        break;
      case "playful":
        return msg.send(playfulEmoji);
        break;
      case "flirtacious":
        return msg.send(flirtaciousEmoji);
        break;
      case "rolling my eyes":
        return msg.send(eyeRollEmoji);
        break;
      case "thinking":
        return msg.send(thinkingEmoji);
        break;
      case "angry":
        return msg.send(angryEmoji);
        break;
      case "in love":
        return msg.send(loveEmoji);
        break;
      case "an angel":
        return msg.send(angelEmoji);
        break;
      case "laughing":
        return msg.send(laughingEmoji);
        break;              
      default:
        return msg.send("I am a robot and emotionally stunted. I can only understand simple emotions. Try again!");
   }
 });
}