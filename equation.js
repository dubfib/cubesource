const {
  MessageEmbed
} = require('discord.js');
const mathsteps = require('mathsteps');

module.exports = async function MessageCommand(client, message, args) {
  const filter = m => m.author.id === message.author.id;
  const collector = message.channel.createMessageCollector({
      filter,
      time: 15000
  });

  message.reply({
      content: '```\nAwaiting a response, ex: 4n + 5 = 16\n```'
  });

  collector.on('collect', (m) => {
      const steps = mathsteps.solveEquation(m.content);

      const embed = new MessageEmbed()
          .setColor("DARK_AQUA")
          .setTitle('Equation Solver')
          .setDescription(`\`\`\`js\n${m.content}\n\`\`\``)
          .setTimestamp()
          .setFooter({
              text: 'The Cube'
          })

      steps.forEach(async (step) => {
          function capital_letter(str) {
              str = str.split(" ");

              for (var i = 0, x = str.length; i < x; i++) {
                  str[i] = str[i][0].toUpperCase() + str[i].substr(1);
              }

              return str.join(" ");
          }

          const ste = capital_letter(step.changeType.replaceAll('_', ' ').toLowerCase());
          const equa = step.newEquation.ascii();
          embed.addField(ste, '\`\`\`js\n' + equa + '\n\`\`\`')
      });

      message.reply({
          embeds: [embed]
      });
  });
};
