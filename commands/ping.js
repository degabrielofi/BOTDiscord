const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

  name: "ping",
  author: "@degabrielofi",

  run: async (client, message, args) => {

    let degabrielofi_pingone = new Discord.MessageEmbed()
      .setColor("#fed900")
      .setAuthor(client.user.username, "https://i.imgur.com/aTW7zoi.png")
      .setDescription(`\\🏓 Olá **${message.author}**. O Meu ping atual é de: \`${client.ws.ping}ms.\``)
      .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))

    let reload = new MessageActionRow().addComponents(new MessageSelectMenu()
      .setCustomId('menu')
      .setPlaceholder('Selecione abaixo para atualizar.')
      .addOptions([{
        label: 'Atualizar ping',
        description: 'Atualize o meu ping.',
        emoji: '🔄',
        value: 'pingmenu',
      }
      ])
    );

    message.reply({ content: `${message.author}`, embeds: [degabrielofi_pingone], components: [reload], ephemeral: true }).then(message => {

      const filtro = (message) =>
        message.isSelectMenu()

      const coletor = message.createMessageComponentCollector({
        filtro
      });

      coletor.on('collect', async (collected) => {

        let valor = collected.values[0]
        collected.deferUpdate()

        if (valor === 'pingmenu') {

          let degabrielofi_pingtwo = new Discord.MessageEmbed()
            .setColor("#fed900")
            .setAuthor(client.user.username, "https://i.imgur.com/aTW7zoi.png")
            .setDescription(`\\🏓 ${message.author} meu novo ping é de: \`${client.ws.ping}ms.\``)
            .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }))
            .setTimestamp()

          message.edit({ embeds: [degabrielofi_pingtwo], components: [reload], ephemeral: true });

        };
      })
    })
  }
}