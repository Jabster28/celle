const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
//If you're using PM2 (packaged with node), you can use the code underneath here and add
//tkn: 'tokenGoesHere'
//in the config.js file and replace the script name with index.js
// const token = process.env.tkn;
// if you're not sharing the code (not on github, repl.it, etc) then just uncomment the code inderneath here and paste your code in the quotes
//const token = ''
// I'm using PM2 so I'll use
const token = process.env.tkn;
// to get my token.
const keep_alive = require('./keep_alive.js')
client.on('ready', () => {
  console.log("Hacking the mainframe with an identity of:");
  console.log(client.user.username);
  console.log("I'm in")
});

function chAnn(ch) {
  return ch.name == "announcements";
}
client.on('message', msg => {
  if (msg.author.id != client.user.id) {
    //     msg.channel.send(msg.content.split('').reverse().join(''));
  }
});
process.setMaxListeners(20);
//start of jsify
function isint(n) {
  return n == n / 1
}

function messageChecker(mess) {
  var name = mess.author
  lastmess = mess.channel.fetchMessages({
    limit: 1
  })
  lastmess.then(function() {
    lastmesss = lastmess.first()
    if (lastmesss.content.charAt(0) == ";") {
      if (lastmesss.author == name) {
        newMess = lastmesss.content
        newMess = newMess.substring(1, newMess.length)
        console.log(lastmesss.content)
        return newMess

      }
    }
  })

}

function tonumber(num) {
  return (num / 1 == num)
}

function isOk(message) {
  if (message.author.bot) {
    return false
  } else if (message.author.username == "Jabster28") {
    return true
  } else if ((message.channel.name == "bot-commands") || (message.channel.name == "bot-craziness") || (message.channel.name == "celle")) {
    return true
  } else if (message.guild.name != "Unaccepted fanclub") {
    return true
  } else {
    return false
  }
}

// !Celle
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == '!celle') {
      msg.channel.send("Hi! I'm Celle, a bot made by Justyn (Jabster28)! Right now, I'm still learning to do lots of things, but I can do simple things like `!add 1 1` to do arithmetic or `!id` to give you your ID. I hope that I make your server 11 times better! :D")
      msg.channel.send("Tip: Use !commands to see what I can do")
    }
  }
})

client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == '!test') {
      /*
      embed = new Discord.RichEmbed();
      embed.setColor("BLUE")
      embed.addField("meme", "text")
      msg.channel.send(embed)
      */
    }
  }
})

// @Celle#0510
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == '!celle#0510') {
      msg.channel.send("Hi! I'm Celle, a bot made by Justyn (Jabster28)! Right now, I'm still learning to do lots of things, but I can do simple things like `!add 1 1` to do arithmetic or `!id` to give you your ID. I hope that I make your server 11 times better! :D")
      msg.channel.send("Tip: Use !commands to see what I can do")
    }
  }
})

// inst that right, celle?
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "isn't that right, celle?") {
      if (msg.author.username == "Jabster28") {
        msg.channel.send("Yeah, what Jabster said!")
      }
    }
  }
})

// !invite
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!invite") {
      msg.channel.send("Here's the link to my website! \n https://discordbots.org/bot/487918554776338432/")
    }
  }
})
// !me
client.on('message', msg => {
  if (isOk(msg)) {
    mess = msg.content.toLowerCase().split(" ")
    if (mess[0] == "!me") {
      if (msg.mentions.users.array()[0]) {
        msgg = msg.mentions.users.array()[0]
        if (msg.mentions.users.array()[0].bot != true) {
          msgg = msg.mentions.users.array()[0]
        }
        console.log("ment")
        console.log(msg.mentions.users.array()[0])

        embed = new Discord.RichEmbed();
        embed.addField("Permissions: ", msg.member.permissions.toArray())

        embed.setAuthor(msgg.username, msgg.avatarURL)
        embed.setColor("BLUE")
        embed.addField("Registered: ", msgg.createdAt)
        if (msg.mentions.members.array()[0]) {
          menroles = msg.mentions.members.array()[0].roles.array()
          menreadroles = []
          for (i = 0; i < menroles.length; i++) {
            menreadroles.push("<@" + menroles[i].id + ">")
          }
          embed.addField("Roles: ", menreadroles, true)
        }
        //  embed.addField("Bot? ", msg.author.bot, true)
        embed.addField("Unique Snowflake ID: ", msgg.id)
        embed.addField("Username: ", msgg.username)
        embed.addField("Friend tag: ", msgg.tag)
        if (msgg.presence.game) {
          embed.addField("Current Application or Game: ", msgg.presence.game.toString())
        }
        embed.addField("User Presence? ", msgg.presence.status.toUpperCase())
        embed.addField("Avatar: ", msgg.username)
        embed.setImage(msgg.avatarURL)
        msg.channel.send(embed)
      } else {
        embed = new Discord.RichEmbed();
        embed.addField("Permissions: ", msg.member.permissions.toArray())
        embed.setAuthor(msg.author.username, msg.author.avatarURL)
        embed.setColor("BLUE")
        embed.addField("Registered: ", msg.author.createdAt)
        if (1) {
          menroles = msg.member.roles.array()
          menreadroles = []
          for (i = 0; i < menroles.length; i++) {
            menreadroles.push("<@" + menroles[i].id + ">")
          }
          embed.addField("Roles: ", menreadroles, true)
        }
        //  embed.addField("Bot? ", msg.author.bot, true)
        embed.addField("Unique Snowflake ID: ", msg.author.id)
        embed.addField("Username: ", msg.author.username)
        embed.addField("Friend tag: ", msg.author.tag, true)
        if (msg.author.presence.game) {
          embed.addField("Current Application or Game: ", msg.author.presence.game.toString(), true)
        }
        embed.addField("User Presence? ", msg.author.presence.status.toUpperCase())
        embed.addField("Avatar: ", msg.author.username)
        embed.setImage(msg.author.avatarURL)
        msg.channel.send(embed)
      }
    }
  }
})

// Hi
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content == '!hi') {
      msg.channel.send('Hello ' + msg.author.username + "!")
    }
  }
})

// !commands
client.on('message', msg => {
  if (msg.content == '!commands') {
    msg.channel.send("**-- WARNING --**\n**Most of these commands will not work, as I am being reprogrammed in JavaScript and this may take a while. I apologise for any inconvenience this may cause. **\n\nI am still learning about things to do, but for now you can type: \n `!permissions` Check the available permissions \n `!add` add two numbers together \n `!minus` minus two numbers from each other \n `!invite` for my invite code \n `!wordmaker` to play a sentence-making game \n `!divide` divide two numbers \n `!multiply` times two numbers together \n `!id` Gets your unique ID \n `!tag` Gets your 4 Digit identifier \n `!Celle` A brief description of me \n `!commands` Lists these commands \n")
  }
})
/*
// do
//   console.log(key, value)
//}
// !
*/
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!alert") {
      msg.delete()
      if (msg.author.username == "Jabster28") {

        guildss = client.guilds.array()
        console.log(guildss.length)
        for (i = 0; i < guildss.length; i = i + 1) {
          gld = guildss[i]
          console.log(i)
          if (gld.available) {
            ch = gld.channels.array().filter(chAnn);
            //console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")


            console.log(ch.name)
            //console.log(ch[0])
            if (ch[0]) {
              sentmess = ch[0].send("<@487918554776338432> now has some functioning commands!\nYou can use `!me` to display some information about your user, like your friend tag and current game\n`!celle` will give you a brief description of me\n`tag` will get your unique Snowflake ID if you don't want to do `!me` to fill up your screen.\nI will alert you again once more commands have been restored")
              console.log(sentmess.id)
            }
          }
        }
      }
    }
  }
})


// !advert
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!advert") {
      if (msg.member.highestRole.hasPermission("MANAGE_MESSAGES", false, true)) {
        msg.delete()
        guildss = client.guilds.array()
        console.log(guildss.length)
        for (i = 0; i < guildss.length; i = i + 1) {
          gld = guildss[i]
          chArr = gld.channels.array()
          for (i = 0; i < chArr.length; i = i + 1) {
            chi = chArr[i]
            if (chi) {
              if ((chi.name == "general") || (chi.name == "general-off-topic") || (chi.name == "general-💬")) {
                console.log(gld.name)


                chi.send("Just a reminder that you can add me to your server if you wish to do so! :)\nHere's the link to my website! \n https://discordbots.org/bot/487918554776338432/")
                //            chi.fetchMessage(chi.lastmessageID).react("👍")
              }
            }
          }
        }
      }
    }
  }
})

/*
client.on('message', msg => {
  if (isOk(message)) {
if msg.content.toLowerCase() == "!adverthere" {
    if message.author.username == "Jabster28" {
            console.log(message.guild.name)
            message:delete()
              message.channel.send("Just a reminder that you can add me to your server if you wish to do so! :)\nHere's the link to my website! \n https://discordbots.org/bot/487918554776338432/")
              message.channel:getLastMessage():addReaction("👍")
            }
    }
  }
  }
// !alertnoping
client.on('message', msg => {
  if (isOk(message)) {
if msg.content.toLowerCase() == "!alert" {
    if message.author.username == "Jabster28" {
  client.guilds:forEach(function(currentGuild)
      for ch in currentGuild.textChannels:iter() do
          if ch.name == "announcements" {
            console.log(currentGuild.name)
            message:delete()

              ch.send("Killed some bugs with a Goo-tuber: \nThe `wordmaker` command now asks for a number id you don't enter one.\n`!divide`ing 0 by 0 now gives you 0")
              ch:getLastMessage():addReaction("👍")
            }
        }
      }
    }
  }
}
  }
// !alerthere
client.on('message', msg => {
  if (isOk(message)) {
if msg.content.toLowerCase() == "!alerthere" {
    if message.author.username == "Jabster28" {
      for ch in message.guild.textChannels:iter() do
          if ch.name == "announcements" {
            console.log(message.guild.name)
             ch.send("@everyone \n```Celle has joined the party.```What can I do? Go over to <#474826961533927425> and type `!commands`  to find out!")
             message:delete()

             ch:getLastMessage():addReaction("👍")
            }
        }
      }
    }
  }
  }

 */
// Whats your tag?
client.on('message', msg => {
  if (isOk(msg)) {
    if ((msg.content.toLowerCase()) == "whats your tag?") {
      msg.channel.send("My tag is " + client.user.tag)
    }
  }
})

// !deleteviaid
client.on('message', msg => {
  if (isOk(msg)) {
    if ((msg.content.toLowerCase()) == "!deleteviaid") {
      for (cha = 0; cha < msg.guild.channels; cha++) {
        if (msg.guild.channels[cha].name == "introduce-yourself") {
          chan = msg.guild.channels[cha]
          chan.fetchMessage().delete()
          msg.delete()
        }
      }
    }
  }
})

/*
// User Removed
client:on('recipientAdd', function(message)
channel.send(user + " was removed from this channel.")
}
*/
//!Tag
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!tag") {
      msg.channel.send("Your tag is ```" + msg.author.tag + "```")
    }
  }
})

// !id
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!id") {
      msg.channel.send("Your Snowflake ID is ```" + msg.author.id + "```")
    }
  }
})
/*
// !me
client.on('message', msg => {
  if (isOk(message)) {
if msg.content.toLowerCase() == "!me" {
message.channel.send("What about you, " + message.author.username + "?")
}
}
}
*/
// !wordmaker
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!wordmaker") {
      msg.channel.send("Give me a `noun`, please!\nNote: Start the message with a semi-colon for me to notice it\ne.g `;apple`")
      var noun1 = 12345789876543
      while (noun1 = 12345789876543) {


        noun1 = messageChecker(msg)
      }
      msg.channel.send("Give me a `plural noun`, please!\nNote: Start the message with a semi-colon for me to notice it\ne.g `;apples`")
      noun2 = messageChecker(msg)
      msg.channel.send("Give me an `adjective`, please!\nNote: Start the message with a semi-colon for me to notice it\ne.g `;red`")
      adj1 = messageChecker(msg)
      num1 = "cheese"
      msg.channel.send("Give me a `number`, please!\nNote: Start the messsage with a semi-colon for me to notice it\ne.g `;12`")
      num1 = messageChecker(msg)
      if (tonumber(num1) != true) {
        msg.channel.send("Are you sure that's a number? >_>")
        while ((tonumber(num1) != true)) {
          msg.channel.send("Give me a `number`, please!\nNote: Start the message with a semi-colon for me to notice it\ne.g `;12`")
          num1 = messageChecker(msg)
        }
      }
      msg.channel.send("Give me a `verb`, please!\nNote:Start the word with a semi-colon for me to notice it\ne.g `;eating`")
      verb1 = messageChecker(msg)
      console.log(msg.guild.name)
      msg.channel.send("ATTENTION!!! \nWe need `" + adj1 + "` men who have a `" + noun1 + "` and they can't be afraid of `" + noun2 + "`. They need to have lots of experience in `" + verb1 + "` and they will get a monthly salary of `$" + num1 * 1000 + "`.")
    }
  }
})


// !end
client.on('message', msg => {
  if (msg.content.toLowerCase() == "!end") {
    msg.delete()
    client.destroy()
  }
})
// !clear
/*
client.on('message', msg => {
textt = msg.content.toLowerCase()
aa = {}
for i in string.gmatch(textt, "%S+") do
table.insert(aa, i)
}
if aa[1] == "!clear" {
loop = tonumber(aa[2])
console.log(type(loop))
for _, val in pairs(aa) do
console.log(val)
}
for oui = 1, (loop + 1) do
message.channel:getLastMessage():delete()
}
}
}

// !fix
client.on('message', msg => {
 if (isOk(message)) {
if msg.content.toLowerCase() == "!fix" {
BotRole = message.guild:createRole(message.guild.me.username)
message.channel.send("Fixing+.")
message.guild.me:addRole(BotRole)
BotRole:enablePermissions("manageRoles")
BotRole:enablePermissions("manageGuild")
message.channel.send("Done!")
}
}
}
// !unfix
client.on('message', msg => {

if msg.content.toLowerCase() == "!unfix" {

message.guild.me.roles:find(function(r) return r.name == "Celle" }:delete()

message.channel.send("Done!")
}
}

// !servers
client.on('message', msg => {
if msg.content.toLowerCase() == "!servers" {
client.guilds:forEach(function(b)
message.author.send(b.name)
}
message:delete()
}
}

// !permissions
client.on('message', msg => {
if msg.content.toLowerCase() == "!permissions" {
message.author.send(tostring(BotRole:getPermissions()))
message:delete()
}
}

// !woomy
client.on('message', msg => {
if msg.content.toLowerCase() == "!woomy" {
 if (isOk(message)) {
message.channel.send("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOMY")
}
}
}

// !add (n1) (n2)
client.on('message', msg => {
 if (isOk(message)) {
text = msg.content.toLowerCase()
a = {}
for i in string.gmatch(text, "%S+") do
table.insert(a, i)
}
if a[1] == "!add" {
if (tonumber(a[2]) and tonumber(a[3])) {
message.channel.send("`" + a[2] + "` plus `" + a[3] + "` is `" + (a[2] + a[3]) + "`. Hope that helped! 😊")
else
message.channel.send("Oops! Check that command. Are the first two arguments after `!add` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
}
}
}
}

// !multiply (n1) (n2)
client.on('message', msg => {
 if (isOk(message)) {
text = msg.content.toLowerCase()
a = {}
for i in string.gmatch(text, "%S+") do
table.insert(a, i)
}
if a[1] == "!multiply" {
if (tonumber(a[2]) and tonumber(a[3])) {
message.channel.send("`" + a[2] + "` times `" + a[3] + "` is `" + (a[2] * a[3]) + "`. Hope that helped! 😊")
else
message.channel.send("Oops! Check that command. Are the first two arguments after `!add` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
}
}
}
}

// !divide (n1) (n2)
client.on('message', msg => {
 if (isOk(message)) {
text = msg.content.toLowerCase()
a = {}
for i in string.gmatch(text, "%S+") do
table.insert(a, i)
}
if a[1] == "!divide" {
if (not(a[2] == 0) and (a[3] == 0)) {
if (tonumber(a[2]) and tonumber(a[3])) {
message.channel.send("`" + a[2] + "` divided by `" + a[3] + "` is `" + (a[2] / a[3]) + "`. Hope that helped! 😊")
else
message.channel.send("Oops! Check that command. Are the first two arguments after `!add` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
}
else
message.channel.send("`0` divided by `0` is `0`")
}
}
}
}

// !minus (n1) (n2)
client.on('message', msg => {
 if (isOk(message)) {
text = msg.content.toLowerCase()
a = {}
for i in string.gmatch(text, "%S+") do
table.insert(a, i)
}
if a[1] == "!minus" {
if (tonumber(a[2]) and tonumber(a[3])) {
message.channel.send("`" + a[2] + "` subtracted by `" + a[3] + "` is `" + (a[2] - a[3]) + "`. Hope that helped! 😊")
else
message.channel.send("Oops! Check that command. Are the first two arguments after `!add` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
}
}
}
}
// !read
client.on('message', msg => {
textt = msg.content.toLowerCase()
aa = {}
for i in string.gmatch(textt, "%S+") do
table.insert(aa, i)
}
if aa[1] == "!read" {
console.log(lines_from("meme.txt"))
}
}




// Running the thing
client:run('Bot NDg3OTE4NTU0Nzc2MzM4NDMy.DnWdEg.0Tm5zm8cNxGi1QUtMCEN1OwlaEk')
*/
//} of jsify
const io = require('@pm2/io');

const Current_req_processed = io.metric({
  name: 'Current req processed',
  type: 'counter',
});
var http = require('http');
http.createServer((req, res) => {
  // Increment the counter, counter will eq 1
  Current_req_processed.inc();
  req.on('end', () => {
    // Decrement the counter, counter will eq 0
    Current_req_processed.dec();
  });
});

client.login(token);

/*
http.createServer(function (req, res) {
  res.write("I'm in");
  res.end();
}).listen(8080);
*/