import "source-map-support/register";

//* import DiscordJS
import * as Discord from "discord.js";

//* creates a new client as bot into var client
var client = new Discord.Client();

/*------------------------------------------*/
// GLOBAL VARIABLES
let commandPrefix = "frx "   //"frx" + LEERZEICHEN
/*---------------*/


client.on("message", message => {
  if (message.author.bot) return;
  let textContainer = "";
  //let textContainer = "#NOT_SET";    //for developing
  textContainer = message.content.toLowerCase();

  if(textContainer.includes(commandPrefix + "gepriesen sei der herr")) {
    message.channel.send("MiMiMi <:schmuser:602611519888424981>");
  }
  if(textContainer.includes(commandPrefix + "gewimmer")) {
    message.channel.send("Auf diese Art geht die Welt zugrund\nAuf diese Art geht die Welt zugrund\nAuf diese Art geht die Welt zugrund\nNicht mit einem Knall: mit Gewimmer <:schmuser:602611519888424981>");
  }

  //Hyperlinks of website (include later if website is online)
    {
    //to change emote edit the string of var "emote" in global namespace
    let emote = ":hatching_chick:";
    //Website
    if(textContainer.includes(commandPrefix + "website")) {
      message.channel.send("Ein Link ist geschlüpft https://www.nichtKlickenLINKbinEinTest.net " + emote);  
    }
    //DiscordRegelwerk
    if(textContainer.includes(commandPrefix + "discordrules")) {
      message.channel.send("Ein Link ist geschlüpft https://www.nichtKlickenLINKbinEinTest.net/discordrules " + emote);  
    }
    //InviteLink
    if(textContainer.includes(commandPrefix + "invite link")) {
      message.channel.send("Ein Link ist geschlüpft https://discord.gg/XXXXXXXXXX " + emote);  
    }
    //Info to team members
    if(textContainer.includes(commandPrefix + "userinfo luki buzz#9327")) {
    message.channel.send("Ein Link ist geschlüpft https://www.nichtKlickenLINKbinEinTest.net/profile/LukiBuzz\nDas ist ein Beispiel vielleicht für Später, um das Team vorzustellen. mal schaun kappa :3" + emote);  
    }
    return;
  }
});





//* listens if message is from a bot
/*client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.includes("mimimi")) {
    message.reply(":schmuser:");
  }
  return;
});

/* client.on("Gott", gott => {
  if(gott.author.bot) return;
  if(gott.content.includes("mimimi")){
    gott.react("schmuser");
  }
});

  /*if (message.content.includes("mimimi")) {
    message.reply("Gepriesen sei die Erkenntnis durch den Herrn!");
  }
  return;
});*/

/*//* listens to command
  if (message.content.startsWith("mimeeting")) {
    //* splits parameter into pieces
    var params = message.content.split(" ");
    //* cuts out everything exept the first thing
    params = params.slice(1, params.length);
    //* error if misspelled
    if (params.length == 0) {
      message.reply("Invalid command. Did you mean ``mimeeting``?");
      return;
    }

    //* async for new message
    message.channel.awaitMessages(params, { max: 1, time: 60 });
    //* checks if first item is empty
    if (message.mentions.channels.size == 0) {
      message.reply("Please enter a valid channel.");
      return;
    }

    return;
  }

  //* command help if you mess up the spelling
  if (message.content.startsWith("mi")) {
    message.reply("Invalid command. Did you mean ``mimeeting``?");
  }
});*/

//* logins with token
client.login("NjA5NDA5MDUzNjcxNTU1MTEz.XU2aaA.oUSnlgAalIs4q3napVf-F0MlYV4");
