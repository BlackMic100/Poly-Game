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

client.login(process.env.BOT_TOKEN);
