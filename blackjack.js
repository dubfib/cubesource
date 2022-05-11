const blackjack = require("discord-blackjack")

module.exports = async function MessageCommand(client, message, args) {
    blackjack(message);
};
