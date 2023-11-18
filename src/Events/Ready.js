require('dotenv').config;
const client = require('../../index');
const chalk = require('chalk');
const prefix = process.env.PREFIX;

client.on('ready', async () => {
    client.user.setActivity(`Live at ${client.guilds.cache.size} servers`, {
        type: 'STREAMING',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    });

    console.log(
        `${chalk.grey.bold('[INFO]  ')}${chalk.blueBright.bold(client.user.tag)} ${chalk.white(
            'is'
        )} ${chalk.green.bold('Online')}`
    );
});
