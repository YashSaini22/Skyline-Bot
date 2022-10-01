const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
        if (message.author.bot) return;
        let prefix = config.prefix;
        if (!message.content.startsWith(prefix)) return;

        let help = new Discord.MessageEmbed()
                .setAuthor("A Bot By YasH⚡")
                .setColor('#0b99f0')
                .setTitle("Command List & Guide for the Bot")
                .addField("<a:tadaa:828497767953465384> __Giveaway__ <a:tadaa:828497767953465384>", "➤start [channel-name] [Time] [winners] [Prize]\n➤reroll [prize name]\n➤end [prize name]")
                .addField("__Examples__", "➤&start #giveaway 5m 1 Testing\n➤&end Testing\n➤&reroll Testing")
                .addField("__Fun__", "➤ping", true)
                .addField("__Information__", "➤stats", true)
                .addField("__Invite__", "➤Type **&invite** to get link")
                .setTimestamp()
                .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
        message.channel.send(help);
}

module.exports.help = {
        name: "help"
}
//will update this
