const RPS = require('discord-rock-paper-scissor');

module.exports = async function MessageCommand(client, message, args) {
    const rps = new RPS({
        choiceReply: "You chose {move}",
        endTitle: "{winner} won!",
        readyMessage: "Choose a game",
        drawEndTitle: "You got a draw!",
        choiceTitle: "Rock Paper Scissors",
        choiceDescription: "Click a button below to select an option!",
        endDescription: "{winner} did: {winnermove}\n{looser} did: {loosermove}",
        chooseIn: "channel",
        colors: {
            drawEmbed: "#FFC300",
            endEmbed: "#50C878",
            errorEmbed: "#FF5733",
            readyEmbed: "#50C878",
        }
    });
        
    rps.solo(message, client);
};
