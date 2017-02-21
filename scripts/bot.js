
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

module.exports = function(bot) {
  bot.hear(/I am (.*)/, function(msg) {
    var emotion;
    emotion = msg.match[1];
    console.log(emotion);
    switch (emotion) {
      case "happy":
        return msg.send(happyEmoji);
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