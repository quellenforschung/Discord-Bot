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

  /******************/
  //frx - help
  //let textHelpContainer = "#NOT_SET";    //for developing
  let textHelpContainer = "__Note:__\nGroß- und Kleinschreibung muss nicht beachtet werden.\n\n**Lulup des MiMiMi:**\n` frx Gepriesen sei der Herr `\n` frx gewimmer `\n\n**Links** \n` frx website ` -> Sendet dir den Link zu unser Website.\n` frx discordrules ` -> Sendet dir einen Link zu den Discordrules.\n` frx invite link ` -> Sendet dir einen Discordeinladungslink.\n";


  if(textContainer.includes(commandPrefix + "help")) {
    message.author.send(textHelpContainer);
  }

  //first Lulup feature-alpha
  if(textContainer.includes(commandPrefix + "gepriesen sei der herr")) {
    message.channel.send("MiMiMi :notes: <:schmuser:602611519888424981>");
  }
  if(textContainer.includes(commandPrefix + "gewimmer")) {
    message.channel.send("Auf diese Art geht die Welt zugrund\nAuf diese Art geht die Welt zugrund\nAuf diese Art geht die Welt zugrund\nNicht mit einem Knall, mit Gewimmer <:schmuser:602611519888424981>");
  }

  //Hyperlinks of website (include later if website is online)
    {
    //to change emote edit the string of var "emote" in global namespace
    let emote = ":hatching_chick:";
    //Website
    if(textContainer.includes(commandPrefix + "website")) {
      message.author.send("Ein Link ist geschlüpft https://www.tuagh.com " + emote);  
    }
    //DiscordRegelwerk
    if(textContainer.includes(commandPrefix + "discordrules")) {
      message.author.send("Ein Link ist geschlüpft https://www.tuagh.com/discordrules " + emote);  
    }
    //InviteLink
    if(textContainer.includes(commandPrefix + "invite link")) {
      message.author.send("Ein Link ist geschlüpft https://discord.gg/b6GXVuT " + emote);  
    }
    /*
    //Info to team members
    if(textContainer.includes(commandPrefix + "userinfo luki buzz#9327")) {
    message.channel.send("Ein Link ist geschlüpft https://www.nichtKlickenLINKbinEinTest.net/profile/LukiBuzz\nDas ist ein Beispiel vielleicht für Später, um das Team vorzustellen. mal schaun kappa :3" + emote);  
    }
    */
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
client.login("NjA5NDA5MDUzNjcxNTU1MTEz.XXUDJA.3P6Yg3CEc5J3wFqhomWT3ANPjHY");
