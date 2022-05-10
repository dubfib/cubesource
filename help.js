const { MessageEmbed } = require('discord.js');

module.exports = async function MessageCommand(client, message, args) {
    function cmd(name, url) {
        return '`' + name + '`' + ' ' + '[`Source`](' + url + ')';
    };

    const embed = new MessageEmbed()
    .setColor("DARK_AQUA")
    .setTitle('Commands List')
    .setDescription(
    cmd('?help', 'https://github.com/dubfib/cubesource/blob/main/help.js') + '\n' +
    cmd('?meme', 'https://github.com/dubfib/cubesource/blob/main/meme.js') + '\n' +
    cmd('?rps',  'WORK IN PROGRESS') + '\n' +
    cmd('?shitpost', 'https://github.com/dubfib/cubesource/blob/main/shitpost.js') + '\n' +
    cmd('?tictactoe', 'https://github.com/dubfib/cubesource/blob/main/tictactoe.js')
    )
    .setTimestamp()
    .setFooter({ text: 'The Cube'})
    message.reply({ embeds: [embed]})
};
