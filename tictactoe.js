const TicTacToe = require('discord-tictactoe');

module.exports = async function MessageCommand(client, message, args) {
    const game = new TicTacToe({ language: 'en'});
    game.handleMessage(message);
};
