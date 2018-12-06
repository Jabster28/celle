// Jimp stuffs

var Jimp = require('jimp');

//PM2 stuffs

require('dotenv').config();
const io = require('@pm2/io')
io.init({
  metrics: {
    network: {
      ports: true
    }
  }
})

// Firebase stuffs
var admin = require('firebase-admin');
var serviceAccount = require('./celle-firebase-admin.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.fbdatabase
});
var db = admin.database();
var storage = admin.storage();
var fbtemp = db.ref("temp/");

var fbnotifs = db.ref("notifications/");
fbservers = fbtemp.child("servers");
io.action('FB test', (cb) => {
  var fbservers = fbtemp.child("servers");

  usersRef.set({});
  cb("ree")
});

//Var defs
const fs = require('fs');
var cards = JSON.parse(fs.readFileSync("./cards.json"))
const http = require('http');
const Discord = require('discord.js');
const client = new Discord.Client();
keys = Object.keys(fbservers)
values = Object.values(fbservers)
console.log(values.length);
// TODO: If you're using PM2 (install with "npm install --save pm2"), you can use the code underneath here and add tkn: 'tokenGoesHere' in the config.js file and replace the script name with index.js
// const token = process.env.tkn;
// I'm using PM2 so I'll use
const token = process.env.tkn;
// to get my token.
// if you're not sharing the code (not on github, repl.it, etc) then just uncomment the code underneath here and paste your code in the quotes
//const token = ''
const keep_alive = require('./keep_alive.js')

// Function defs

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * 5) + 1;
}

function chAnn(ch) {
  return ch.name == "announcements";
}

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

function arrayFind(array, item) {
  for (i = 0; i < array.length; i++) {
    if (array[i] == item) {
      isin = array[i]
    }
  }
  if (isin) {
    return isin
  }
}

function arrayObjectFind(item, array) {
  for (i = 0; i < array.length; i++) {
    if (array[i].name == item) {
      isin = array[i]
      return isin
    }
  }
}

function findChannel(guld, channelid) {
  for (var i = 0; i < guld.channels.array().length; i++) {
    chanelll = guld.channels.array()[i]
    if (chanelll.id == channelid) {
      return chanelll
    }
  }
}

function findGuild(id) {
  guildss = client.guilds.array()
  for (i = 0; i < guildss.length; i++) {
    if (guildss[i].id == id) {
      return guildss[i]
    }
  }
}
// Actual stuffs

client.on('ready', () => {
  console.log("Hacking the mainframe with an identity of:");
  console.log(client.user.username);
  console.log("I'm in")
});

// !Celle
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == '!celle') {
      msg.channel.send("Hi! I'm Celle, a bot made by Justyn (Jabster28)! Right now, I'm still learning to do lots of things, but I can do simple things like `!add 1 1` to do arithmetic or `!id` to give you your ID. I hope that I make your server 11 times better! :D")
      msg.channel.send("Tip: Use !commands to see what I can do")
    }
  }
})
//!notify
client.on('message', msg => {
  if (isOk(msg) && msg.member.hasPermission("MANAGE_ROLES")) {
    if (msg.content.toLowerCase() == '!notify') {
      fbnotifs.push({
        channelname: "#" + msg.channel.name,
        channelid: msg.channel.id,
        servername: msg.guild.name,
        serverid: msg.guild.id
      })
      msg.author.send("The channel `" + msg.channel.name + "` from server `" + msg.guild.name + "` has been added to the notifications list! This channel will get updates (usually every 2 weeks) about new/updated features I have! And don't worry, no-one will get pinged.")
      msg.delete()
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
      msg.channel.send("Here's the link to my website! \n https://discordbots.org/bot/487918554776338432\n")
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
// !commands
client.on('message', msg => {
  if (msg.content == '!commands') {
    msg.channel.send("\nI am still learning about things to do, but for now you can type: \n `!me` for a summary of your account \n `!add` add two numbers together \n `!minus` minus two numbers from each other \n `!invite` for my invite code \n  `!divide` divide two numbers \n `!multiply` times two numbers together \n `!id` Gets your unique ID \n `!tag` Gets your 4 Digit identifier \n `!Celle` A brief description of me \n `!commands` Lists these commands \n**-- WARNING --**\n**The commands below this line are still in WIP and thus should not be called.**\n`!permissions` Check the available permissions \n`!wordmaker` to play a sentence-making game \n")
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
// !tag
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
// !card
client.on('message', msg => {
  if (isOk(msg)) {
    text = msg.content.toLowerCase()
    a = text.split(" ")
    if (a[0] == "!card") {
      if (!(a[1])) {
        embed = new Discord.RichEmbed();
        if (arrayObjectFind(msg.author.username, cards)) {
          embed.addField("Name: ", (arrayObjectFind(msg.author.username, cards)).name)
          if (!((arrayObjectFind(msg.author.username, cards)).nnid == 0)) {
            embed.addField("Nintendo Network ID: ", (arrayObjectFind(msg.author.username, cards)).nnid)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).xboxgt == 0)) {
            embed.addField("Xbox gamer tag: ", (arrayObjectFind(msg.author.username, cards)).xboxgt)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).twitter == 0)) {
            embed.addField("Twitter: ", (arrayObjectFind(msg.author.username, cards)).twitter)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).psn == 0)) {
            embed.addField("PlayStation: ", (arrayObjectFind(msg.author.username, cards)).psn)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).switchfc == 0)) {
            embed.addField("Switch Friend Code: ", (arrayObjectFind(msg.author.username, cards)).switchfc)
          }
        } else {
          cards.push({
            "name": msg.author.username,
            "nnid": 0,
            "switchfc": 0,
            "xboxgt": 0,
            "psn": 0,
            "insta": 0,
            "snap": 0,
            "color": BLUE,
            "twitter": 0,
            "g+": 0

          })
          fs.writeFileSync("./cards.json", JSON.stringify(cards))
          embed.addField("Name: ", (arrayObjectFind(msg.author.username, cards)).name)
        }
        msg.channel.send(embed)
      } else if (a[1] == "nnid") {
        nnid = a[2];
        (arrayObjectFind(msg.author.username, cards)).nnid = nnid
        fs.writeFileSync("./cards.json", JSON.stringify(cards))
        embed = new Discord.RichEmbed();
        if (arrayObjectFind(msg.author.username, cards)) {
          embed.addField("Name: ", (arrayObjectFind(msg.author.username, cards)).name)
          if (!((arrayObjectFind(msg.author.username, cards)).nnid == 0)) {
            embed.addField("Nintendo Network ID: ", (arrayObjectFind(msg.author.username, cards)).nnid)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).xboxgt == 0)) {
            embed.addField("Xbox Gamertag: ", (arrayObjectFind(msg.author.username, cards)).xboxgt)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).psn == 0)) {
            embed.addField("PlayStation account: ", (arrayObjectFind(msg.author.username, cards)).psn)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).switchfc == 0)) {
            embed.addField("Nintendo Switch Friend Code: ", (arrayObjectFind(msg.author.username, cards)).switchfc)
          }
          if (!((arrayObjectFind(msg.author.username, cards)).twitter == 0)) {
            embed.addField("Twitter: ", (arrayObjectFind(msg.author.username, cards)).twitter)
          }

        }
      } else if (a[1] == "xbox") {
        nnid = a[2];
        (arrayObjectFind(msg.author.username, cards)).xboxgt = nnid
        fs.writeFileSync("./cards.json", JSON.stringify(cards))
        embed = new Discord.RichEmbed();
        if (arrayObjectFind(msg.author.username, cards)) {
          embed.addField("Name: ", (arrayObjectFind(msg.author.username, cards)).name)
          if (!((arrayObjectFind(msg.author.username, cards)).nnid == 0)) {
            embed.addField("Nintendo Network ID: ", (arrayObjectFind(msg.author.username, cards)).nnid)
          }
        }

      } else if (a[1] == "psn") {
        nnid = a[2];
        (arrayObjectFind(msg.author.username, cards)).psn = nnid
        fs.writeFileSync("./cards.json", JSON.stringify(cards))
        embed = new Discord.RichEmbed();
        if (arrayObjectFind(msg.author.username, cards)) {
          embed.addField("Name: ", (arrayObjectFind(msg.author.username, cards)).name)
          if (!((arrayObjectFind(msg.author.username, cards)).nnid == 0)) {
            embed.addField("Nintendo Network ID: ", (arrayObjectFind(msg.author.username, cards)).nnid)
          }
        }
      } else if (a[1] == "switch") {
        nnid = a[2];
        (arrayObjectFind(msg.author.username, cards)).switchfc = nnid
        fs.writeFileSync("./cards.json", JSON.stringify(cards))
        embed = new Discord.RichEmbed();
        if (arrayObjectFind(msg.author.username, cards)) {
          embed.addField("Name: ", (arrayObjectFind(msg.author.username, cards)).name)
          if (!((arrayObjectFind(msg.author.username, cards)).nnid == 0)) {
            embed.addField("Nintendo Network ID: ", (arrayObjectFind(msg.author.username, cards)).nnid)
          }
        }
      } else if ((a[1] == "colour") || (a[1] == "color")) {

      }
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
// !fix
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!fix") {
      botrole = msg.guild.createRole({
        name: client.user.username,
      })
      msgg = msg.channel.send("Fixing...")
      msg.guild.me.addRole(botrole)
      botrole.enablePermissions("manageRoles")
      botrole.enablePermissions("manageGuild")
      msg.channel.send("Done!")
      msgg.delete()
      msg.delete()
    }
  }
})
//!yds
client.on('message', msg => {
  if (isOk(msg)) {
    if (msg.content.toLowerCase() == "!yds") {
      embed = new Discord.RichEmbed();
      embed.setAuthor(msg.author.username, msg.author.avatarURL)
      embed.setColor("BLUE")
      embed.addFile("./customImages/yds.jpg")
      msg.channel.send(embed)
      msg.delete()
    }
  }
})
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

// Actually do the thing

client.login(token);

// PM2 Metrics

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

// PM2 Actions

io.action('Logging Test', (cb) => {
  console.log("test pm2 log")
  cb("ree");
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
        name: 'with discord.js',
        party: {
          size: [2, 2]
        }
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 2) {
    client.user.setPresence({
      game: {
        name: 'the kazoo',
        party: {
          size: [2, 2]
        }
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 3) {
    client.user.setPresence({
      game: {
        name: 'Splatoon',
        party: {
          size: [2, 2]
        }
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 4) {
    client.user.setPresence({
      game: {
        name: "a game you can't join",
        party: {
          size: [2, 2]
        }
      },
      status: 'online'
    })
    cb("Celle is now online\n");

  } else if (ran == 5) {
    client.user.setPresence({
      game: {
        name: 'Chess with Zeus',
        party: {
          size: [2, 2]
        }
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
  make.anError() //Purposely makes an error
});
io.action('testlogsrvrs', (cb) => {
  fbnotifs.push([{
    hi: "hoi"
  }])
});
io.action('alert', (cb) => {
  fbnotifs.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
      console.log(child.val().serverid)
      if (child.val().serverid) {
        if (child.val().channelid) {
          findChannel(findGuild(child.val().serverid), child.val().channelid).send("Two new commands (yaay)!\n`!card` will show you information like friend codes and such as you choose to display them. You can edit them by doinfg `!card [service] [name]`. For example, `!card nnid BobMaster200` would set your Nintendo Network id to BobMaster200.\nSaying `!notify` in a server where you have the permission to manage roles will subscribe that channel to notifications about Celle's updates (usually) every 2 weeks.\nAlso, bug fixes.")


        } else {
          cb("ERROR, CHECK ISSUES LOG");
          io.notify('aonc not defined');
        }
      } else {
        cb("ERROR, CHECK ISSUES LOG");
        io.notify('aons not defined');
      }
    });
  });
cb("")
  /*
    guildss = client.guilds.array()
    //  console.log(guildss.length)
    channlz = []
    for (i = 0; i < guildss.length; i = i + 1) {
      gld = guildss[i]
    //  if (gld.name == "Testing A Bot" || gld.id == 433228421196414976 || gld.id == 502903541367701534 || gld.id == 439805212107210752 || gld.id == 474778374448087050) {
        //    console.log(i)
    //    if (gld.available) {
          ch = gld.channels.array().filter(chAnn);
          //    console.log(ch.name)
          //console.log(ch[0])
      //    if (ch[0]) {
            sentmess = ch[0].send("_A bot's life only truly begins once it has been verified,_\n-MLK\nWell, Mr King, I suppose my life as a bot\n_Has only just begun_\nhttps://discordbots.org/bot/487918554776338432")
            console.log(sentmess.id)
            channlz.push(ch[0].guild.name)
        //  }
    //    } else {
          io.notifyError(new Error('Unavailable guild'));
      //  }
  //    }
  //  }
  //  if (channlz.length != 0) {
      cb("Succesfully notified " + channlz.length + " server(s).\n");
      io.metric({
        type: 'metric',
        name: 'Alerted servers',
        value: function() {
          return channlz.length;
       }
      });

  //  } else {
      io.notify('Error: Empty array of servers');
      cb("ERROR, CHECK ISSUES LOG\n");
    //}
    */

});
io.action('Servers', (cb) => {
  guildss = client.guilds.array()
  //  console.log(guildss.length)
  guildi = []
  guildn = []
  fbservers.set({})
  require("./cellessupersecretcode.js")
  cb("Done!\n")
})
