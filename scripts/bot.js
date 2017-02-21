
var happyEmoji = ':smile:';

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
        return msg.reply("I am sad!");
        break;
      case "embarrassed":
        return msg.reply("I am embarrassed!");
        break;
      case "playful":
        return msg.reply("Javascript, of course!");
        break;
      case "flirtacious":
        return msg.reply("Javascript, of course!");
        break;
      case "rolling my eyes":
        return msg.reply("Javascript, of course!");
        break;
      case "thinking":
        return msg.reply("Javascript, of course!");
        break;
      case "angry":
        return msg.reply("Javascript, of course!");
        break;
      case "in love":
        return msg.reply("Javascript, of course!");
        break;
      case "an angel":
        return msg.reply("Javascript, of course!");
        break;
      case "laughing":
        return msg.reply("Javascript, of course!");
        break;              
      default:
        return msg.reply("I am a robot and emotionally stunted. I can only understand simple emotions. Try again!");
   }
 });
}