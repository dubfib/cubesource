const { MessageEmbed } = require('discord.js');

module.exports = async function MessageCommand(client, message, args) {
    function cmd(name, url) {
        return '`' + name + '`' + ' ' + '[`Source`](' + url + ')';
    };

    const embed = new MessageEmbed()
    .setColor("DARK_AQUA")
    .setTitle('Help Menu')
    .setDescription(cmd('?help', 'https://github.com/dubfib/cube'))
    .setTimestamp()
    .setFooter({ text: 'The Cube'})
    message.reply({ embeds: [embed]})
};
