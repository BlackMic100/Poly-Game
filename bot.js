const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', message => {
    if (message.content === "نجرب") {
        if(!message.channel.guild) return;
        message.member.addRole(message.guild.roles.find("name", "جربتها"));
  }
    
});  




client.on('message', message => {
     if (message.content === "نجرب") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done Activation | 🎮 تــــم تفعيل" , " |  تــــم تفعيل العبه")
     
     
     
  message.channel.sendEmbed(embed);
    }
});









client.on('message',async message => {
    if (message.content.startsWith("-Server")) {
        var cont = message.content.slice(prefix.length).split(" ");

  var args = cont.slice(1);
let mcIP = args[0];


  let {body} = await superagent
  .get('http://mcapi.us/server/status?ip=' + mcIP);
  let status = body.online ? "✅" : "❎";

  let embed = new Discord.RichEmbed()
  .setTitle(• ${mcIP} Info)
  .setThumbnail('https://vignette.wikia.nocookie.net/minecraftpocketedition/images/f/f1/Minecraft_1.2_Logo.png/revision/latest?cb=20171204231225%27)
  .setColor(body.online ? #008000 : #F0141E)
  .addField('• السيرفر شغال', status)
  .addField('• اللاعبين', body.players.now, true)
  .addField('• الحد الاقصى للاعبين', body.players.max, true);
  message.channel.send(embed);

  return
  }
});



client.login(process.env.BOT_TOKEN);
