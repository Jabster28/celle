const io = require('@pm2/io')

io.init({
  metrics: {
    network: {
      ports: true
    }
  }
})

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * 6);
}

const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
//If you're using PM2 (packaged with node), you can use the code underneath here and add
//tkn: 'tokenGoesHere'
//in the config.js file and replace the script name with index.js
// const token = process.env.tkn;
// I'm using PM2 so I'll use
token = process.env.tkn;
// to get my token.
// if you're not sharing the code (not on github, repl.it, etc) then just uncomment the code underneath here and paste your code in the quotes
//const token = ''

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
  return n / 1
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
        //    console.log(lastmesss.content)
        return newMess

      }
    }
  })

}

function tonumber(num) {
  return (num / 1)
}

function isOk(message) {
  if (message.author.bot) {
    return false
  } else if (message.author.username == "Jabster28") {
    return true
  } else if ((message.channel.name == "bot-commands") || (message.channel.name == "bot-craziness") || (message.channel.name == "testing-1") || (message.channel.name == "testing-2") || (message.channel.name == "bot-hell") || (message.channel.name == "celle")) {
    return true
  } else if ((message.guild.name != "Unaccepted fanclub") || (message.guild.name != "Discord Bot List")) {
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
      msg.channel.send("Here's the link to my website! \n https://discordapp.com/api/oauth2/authorize?client_id=487918554776338432&permissions=8&scope=bot\nThis will be updated with a shorter and better link once I gets verified.")
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
    msg.channel.send("\nI am still learning about things to do, but for now you can type: \n `!me` for a summary of your account \n `!add` add two numbers together \n `!minus` minus two numbers from each other \n `!invite` for my invite code \n  `!divide` divide two numbers \n `!multiply` times two numbers together \n `!id` Gets your unique ID \n `!tag` Gets your 4 Digit identifier \n `!Celle` A brief description of me \n `!commands` Lists these commands \n**-- WARNING --**\n**The commands below this line are still in WIP and thus should not be called.**\n`!permissions` Check the available permissions \n`!wordmaker` to play a sentence-making game \n")
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
          //  console.log(i)
          if (gld.available) {
            ch = gld.channels.array().filter(chAnn);
            //console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")


            //      console.log(ch.name)
            //console.log(ch[0])
            if (ch[0]) {
              sentmess = ch[0].send("<@487918554776338432> now has some functioning commands!\nYou can use `!me` to display some information about your user, like your friend tag and current game\n`!celle` will give you a brief description of me\n`tag` will get your unique Snowflake ID if you don't want to do `!me` to fill up your screen.\nI will alert you again once more commands have been restored")
              //      console.log(sentmess.id)
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
        //    console.log(guildss.length)
        for (i = 0; i < guildss.length; i = i + 1) {
          gld = guildss[i]
          chArr = gld.channels.array()
          for (i = 0; i < chArr.length; i = i + 1) {
            chi = chArr[i]
            if (chi) {
              if ((chi.name == "general") || (chi.name == "general-off-topic") || (chi.name == "general-💬")) {
                //          console.log(gld.name)


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
      io.notify("Error: WIP command called")
      client.yemum.gee()
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
*/
// !add (n1) (n2)
client.on('message', msg => {
  if (isOk(msg)) {
    text = msg.content.toLowerCase()
    a = text.split(" ")
    if (a[0] == "!add") {
      if (tonumber(a[1]) && tonumber(a[2])) {
        msg.channel.send("`" + a[1] + "` plus `" + a[2] + "` is `" + (tonumber(a[1]) + tonumber(a[2])) + "`. Hope that helped! 😊")
      } else {
        msg.channel.send("Oops! Check that command. Are the first two arguments after `!add` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
      }
    }
  }
})

// !multiply (n1) (n2)
client.on('message', msg => {
  if (isOk(msg)) {
    text = msg.content.toLowerCase()
    a = text.split(" ")
    if (a[0] == "!multiply") {
      if (tonumber(a[1]) && tonumber(a[2])) {
        msg.channel.send("`" + a[1] + "` times `" + a[2] + "` is `" + ((a[1]) * (a[2])) + "`. Hope that helped! 😊")
      } else {
        msg.channel.send("Oops! Check that command. Are the first two arguments after `!multiply` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
      }
    }
  }
})

// !divide (n1) (n2)
client.on('message', msg => {
  if (isOk(msg)) {
    text = msg.content.toLowerCase()
    a = text.split(" ")
    if (a[0] == "!divide") {
      if (tonumber(a[1]) && tonumber(a[2])) {
        msg.channel.send("`" + a[1] + "` divided by `" + a[2] + "` is `" + ((a[1]) / (a[2])) + "`. Hope that helped! 😊")
      } else {
        msg.channel.send("Oops! Check that command. Are the first two arguments after `!divide` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
      }
    }
  }
})

// !minus (n1) (n2)
client.on('message', msg => {
  if (isOk(msg)) {
    text = msg.content.toLowerCase()
    a = text.split(" ")
    if (a[0] == "!minus") {
      if (tonumber(a[1]) && tonumber(a[2])) {
        msg.channel.send("`" + a[1] + "` minus `" + a[2] + "` is `" + ((a[1]) - (a[2])) + "`. Hope that helped! 😊")
      } else {
        msg.channel.send("Oops! Check that command. Are the first two arguments after `!minus` numbers (Should Be)? Are there spaces between the two numbers (Should Be)? Are there spaces in the numbers themselves (Shouldn't Be)?")
      }
    }
  }
})
/*
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

client.login(token);
var http = require('http');

io.metric({
  type: 'metric',
  name: 'Accessible Servers',
  value: function() {
    return client.guilds.array().length;
  }
});

io.metric({
  type: 'metric',
  name: 'Status',
  value: function() {
    return "N/A";
    //  return client.user.presence.status;
  }
});

io.metric({
  type: 'metric',
  name: 'Ping',
  value: function() {
    return client.ping;
  }
});

io.metric({
  type: 'metric',
  name: 'Accessible Channels',
  value: function() {
    return client.channels.array().length;
  }
});

io.metric({
  type: 'metric',
  name: 'Cached users',
  value: function() {
    return client.users.array().length;
  }
});

io.action('Logging Test', (cb) => {
  console.log("test pm2 log")
  cb({
    success: true
  });
});

io.action('Set Offline', (cb) => {
  client.user.setPresence({
    game: {
      name: 'with discord.js'
    },
    status: 'invisible'
  })
  cb("Celle is now invisible\n");

});
io.action('Set AFK', (cb) => {
  client.user.setPresence({
    game: {
      name: 'with discord.js'
    },
    status: 'idle'
  })
  cb("Celle is now Idle\n");

});

io.action('Set Online', (cb) => {
  ran = generateRandomNumber(1, 6)
  if (ran == 1) {
    client.user.setPresence({
      game: {
        name: 'with discord.js'
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 2) {
    client.user.setPresence({
      game: {
        name: 'the kazoo'
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 3) {
    client.user.setPresence({
      game: {
        name: 'Splatoon'
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 4) {
    client.user.setPresence({
      game: {
        name: "a game you can't join"
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 5) {
    client.user.setPresence({
      game: {
        name: 'Chess with Zeus'
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else {
    io.notify("Error: No matching number. Number was " + ran)
    cb("ERROR, CHECK ISSUES LOG\n");

  }
});

io.action('error test', (cb) => {
  cb("ERROR, CHECK ISSUES LOG");

  io.notify('This is a notify error');

  io.notifyError(new Error('This is an error'));
});

io.action('alert', (cb) => {
  guildss = client.guilds.array()
  //  console.log(guildss.length)
  channlz = []
  for (i = 0; i < guildss.length; i = i + 1) {
    gld = guildss[i]
    //  if (gld.name == "Testing A Bot" || gld.name == "Lol i dunno") {
    //    console.log(i)
    if (gld.available) {
      ch = gld.channels.array().filter(chAnn);
      //    console.log(ch.name)
      //console.log(ch[0])
      if (ch[0]) {
        sentmess = ch[0].send("test")
        console.log(sentmess.id)
        channlz.push(ch[0].guild.name)
      }
    } else {
      io.notifyError(new Error('Unavailable guild'));
    }
    //  }
  }
  if (channlz.length != 0) {
    cb("Succesfully notified " + channlz.length + " server(s).\n");
    io.metric({
      type: 'metric',
      name: 'Alerted servers',
      value: function() {
        return channlz.length;
      }
    });

  } else {
    io.notify('Error: Empty array of servers');
    cb("ERROR, CHECK ISSUES LOG\n");
  }
});
/*
http.createServer(function (req, res) {
  res.write("I'm in");
  res.end();
}).listen(8080);
*/
