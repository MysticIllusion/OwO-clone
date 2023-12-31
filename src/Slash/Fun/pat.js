const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'blush',
    description: 'blush',
    options: [
        {
            type: 6,
            name: 'user',
            description: 'User who you want to blush',
            required: true,
        },
    ],
    userperm: 'SEND_MESSAGES',
    botperm: 'SEND_MESSAGES',
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [user] = args;
        const userUsername = client.users.cache.get(user).username; // <== Dapetin username dari user di args
        fetch('https://api.waifu.pics/sfw/blush')
            .then(res => res.json())
            .then(body => {
                const embed = new MessageEmbed()
                    .setTitle(`${interaction.user.username} Blushing ${userUsername}`)
                    .setImage(body.url)
                    .setColor('#FFC0CB')
                    .setFooter({
                        text: `${interaction.user.tag}`,
                        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
                    })
                    .setTimestamp();

                interaction.followUp({ embeds: [embed] });
            });
    },
};
