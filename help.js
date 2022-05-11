const { MessageEmbed } = require('discord.js');

module.exports = async function MessageCommand(client, message, args) {
    function cmd(name, description) {
        return '`' + name + '`' + ' ' + '`' + description + '`' + ' ' + '[`Source`](' + 'https://github.com/dubfib/cubesource/blob/main/' + name.replace('?', '') + '.js' + ')';
    };

    const embed = new MessageEmbed()
    .setColor("DARK_AQUA")
    .setTitle('Commands List')
    .setDescription(
    cmd('?help', 'Get a command list') + '\n' +
    cmd('?meme', 'Get a random meme') + '\n' +
    cmd('?rps',  'Play RPS vs AI') + '\n' +
    cmd('?shitpost', 'Get a random shitpost') + '\n' +
    cmd('?tictactoe', 'Play TTT vs AI') + '\n' +
    cmd('?blackjack', 'Play Blackjack vs AI')
    )
    .setTimestamp()
    .setFooter({ text: 'The Cube'})
    message.reply({ embeds: [embed]})
};
