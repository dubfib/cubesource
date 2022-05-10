const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const fetch = require('node-fetch');

module.exports = async function MessageCommand(client, message, args) {
    const api = await fetch('https://meme-api.herokuapp.com/gimme/shitposting');
    const meme = await api.json();

    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('primary')
        .setLabel('Next Shitpost')
        .setStyle('PRIMARY'),
    );

    const embed = new MessageEmbed()
    .setTitle(meme.title)
    .setURL(meme.postLink)
    .setImage(meme.url)
    .setColor('DARK_AQUA')
    .setFooter({ text: `u/${meme.author} | ${meme.ups} upvotes | The Cube` })
    .setTimestamp()
    message.reply({ embeds: [ embed ], components: [row]})

    const filter = i => i.customId === 'primary' && i.user.id === message.author.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });

    collector.on('collect', async i => {
	    if (i.customId === 'primary') {
            const api = await fetch('https://meme-api.herokuapp.com/gimme/shitposting');
            const meme = await api.json();

            const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('primary')
                .setLabel('Next Shitpost')
                .setStyle('PRIMARY'),
            );

            const embed = new MessageEmbed()
            .setTitle(meme.title)
            .setURL(meme.postLink)
            .setImage(meme.url)
            .setColor('DARK_AQUA')
            .setFooter({ text: `u/${meme.author} | ${meme.ups} upvotes | The Cube` })
            .setTimestamp()
	    	await i.update({ embeds: [ embed ], components: [row]});
	    }
    });
};
