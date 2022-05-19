const { MessageEmbed } = require('discord.js');
const math = require('mathjs');

module.exports = async function MessageCommand(client, message, args) {
  const filter = m => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector({ filter, time: 8000 });

  message.reply({ content: '```\nAwaiting a response, ex: 2 + 4 - 5 * 3 / 2\n```'});

  collector.on('collect', m => {
    const answer = `\`\`\`js\n${math.evaluate(m.content)}\`\`\``;

    const embed = new MessageEmbed()
    .setColor("DARK_AQUA")
    .setTitle('Math Solver')
    .setTimestamp()
    .addField(`Question`, `\`\`\`js\n${m.content}\n\`\`\``)
    .addField(`Solution`, answer)
    .setFooter({ text: 'The Cube' })
    message.reply({ embeds: [ embed ]});
  });
};
