<div align="center">
  <br />
  <p>
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
  </p>
  <br />
  <p>
    <img alt="Github Top Language" src="https://img.shields.io/github/languages/top/degabrielofi/BOTDiscord?color=6563ac">
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/discord.js.svg?maxAge=3600" alt="npm version" /></a>
    <img alt="Github Language Count" src="https://img.shields.io/github/languages/count/degabrielofi/BOTDiscord?color=6563ac">
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/dt/discord.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <img alt="Repository Size" src="https://img.shields.io/github/repo-size/degabrielofi/BOTDiscord?color=6563ac">
  </p>
</div>

<div>
<h3 align="center">Esté é um projeto ainda em desenvolvimento!</h3> <br>
</div>

<div align="center">
<img src="https://i.imgur.com/P4me3Tn.png"/>
</div>

# :clipboard: Sobre o projeto

O Projeto consiste em um simples BOT no qual você manda uma tecnologia desejada no chat é ele responderá com a sua documentação necessária para você iniciar os seus estudos e se aprofundar na linguagem! 📚<br>

O Projeto também contém  alguns comandos como o de "ping" no qual ele mostrá qual é o ping do BOT atualmente. É outros que podem ser criados e adicionandos dentro da pasta `commands`.

## Configurando o ambiente de desenvolvimento

Estou utilizando a versão 16.13.2 do Node.js
1. `npm install discord.js`

## Criando o token do bot para interação com a API do Discord

1. [Developers Potal](https://discord.com/developers/docs/intro).
2. Clicar em `Applications` e criar uma nova, completando com a imagem, nome, descrição e tags que quiser.
3. Vai na aba de `Bot` e crie um novo, também com a personalização que desejar.
4. Copie o token do bot e cole no código.
5. Crie as [permissões necessárias](https://discordapi.com/permissions.html) para esse bot interagir no seu servidor (recomendo usar um servidor teste). Ele pedirá um ID, que você encontra na primeira página de `Application`.

## config.json

Para que o seu bot ligue você irá precisar criar um arquivo no qual chamamos de `config.json` lá você colocará o token no qual conseguiu no passo a passo acima. É também definirá o prefixo desejavél no seu BOT siga o exemplo abaixo e configure o seu `config.json`.
```bash
{
  "token": "OKjusdaopwyPJKYT.YSOZ5SJK.zpLosjapdu8jksgaytLO-bE", // Coloque o Token dentro das aspas e apague o que está escrito aqui!!
  "prefix": "!" // Coloque o Prefixo desejável dentro das aspas e apague o está escrito aqui depois!!
}
```

## Exemplo de uso:

Instale todas as dependências necessárias:

```sh-session
npm install discord.js
```

Exemplo do arquivo principal e limpo no qual você pode adionar outros comandos.

```js
const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767})
const config = require("./config.json");

client.once('ready', async () => {
    console.log("Estou pronto(a) para ser utilizado(a)!")
}) 

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

client.login('token');
```

Depois dos passos anteriores rode o projeto com o seguinte comando.

```sh-session
node .
```

## Links

- [Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
- [Documentation](https://discord.js.org/#/docs)
- [GitHub](https://github.com/debrielofi/BOTDiscord.js)
- [npm](https://www.npmjs.com/package/discord.js)

