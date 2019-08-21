import "source-map-support/register";

//* import DiscordJS
import * as Discord from "discord.js";

//* creates a new client as bot into var client
var client = new Discord.Client();

//* listens if message is from a bot
client.on("message", message => {
  if (message.author.bot) return;

  if (message.content.includes("mimimi")) {
    message.reply("Gepriesen sei die Erkenntnis durch den Herrn!");
  }
  return;
});

//* listens to command
/*
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
client.login("Don't even think about it");
