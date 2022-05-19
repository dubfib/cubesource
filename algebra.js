const { MessageEmbed } = require('discord.js');
const nerdamer = require("nerdamer/all.min");

module.exports = async function MessageCommand(client, message, args) {
  const filter = m => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector({ filter, time: 8000 });

  message.reply({ content: '```\nAwaiting a response, ex: 4n + 5 = 16\n```'});

  collector.on('collect', m => {
    const sol = nerdamer.solve(m.content.replace("a", "x").replace("b", "x").replace("c", "x").replace("d", "x").replace("e", "x").replace("f", "x").replace("g", "x").replace("h", "x").replace("i", "x").replace("j", "x").replace("k", "x").replace("l", "x").replace("m", "x").replace("n", "x").replace("o", "x").replace("p", "x").replace("q", "x").replace("r", "x").replace("s", "x").replace("t", "x").replace("u", "x").replace("v", "x").replace("w", "x").replace("y", "x").replace("z", "x"), "x");
    const answer = `\`\`\`js\n${parseInt(sol.text().replace("[", "").replace("]", ""))}\n\`\`\``;

    const embed = new MessageEmbed()
    .setColor("DARK_AQUA")
    .setTitle('Algebra Solver')
    .setTimestamp()
    .addField(`Question`, `\`\`\`js\n${m.content}\n\`\`\``)
    .addField(`Solution`, answer)
    .setFooter({ text: 'The Cube' })
    message.reply({ embeds: [ embed ]});
  });
};
