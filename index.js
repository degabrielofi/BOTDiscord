const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767})
const config = require("./config.json");
const techs = require("./techs.json")

client.on("messageCreate", message => {
  if (message.author.bot) return;
  if (message.channel.type == 'degabrielofi')
  return
  if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
  return message.channel.send(`🔮 | Olá ${message.author}, veja meus comandos com **${config.prefix}help**!`)
  }
  }); 

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
      
  let degabrielofierr = new Discord.MessageEmbed()

  .setDescription(`\ ❌ **| Este comando não existe!**`)
  .setFooter(`Requisitado por: ${message.author.tag}`)
  .setColor("RED")

  message.reply({content: `${message.author}`,  embeds: [degabrielofierr]})  
}
});

  client.once('ready', async () => {

    console.log("Estou pronto(a) para ser utilizado(a)!")

}) 

client.on('messageCreate', message => {
  let tecnologias = Object.keys(techs);

  if (tecnologias.includes(message.content)) {
   
    let result = new Discord.MessageEmbed()
    .setAuthor('Leia abaixo e aproveite!', `${techs[message.content].icon}`)
    .setColor(`${techs[message.content].color}`)
    .setThumbnail(`${techs[message.content].thumb}`)
    .setDescription(`\\👥 Olá  **${message.author.tag}**, com a documentação abaixo você consiguirá saber mais sobre a lingaguem que deseja estudar, e como irá conseguir mexer com ela. \n\n 📚 **Bons estudos!** \n\n${techs[message.content].url}`)
    .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
    .setTimestamp()
       

    return message.reply({ content: `${message.author}`, embeds: [result] })
  }
})

client.login(config.token); 