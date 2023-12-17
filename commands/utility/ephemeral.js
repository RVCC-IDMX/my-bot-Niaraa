const { SlashCommandBuilder } = require('discord.js');

/* eslint-disable no-undef */
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ephemeral')
    .setDescription('Replies with secret pong!'),
  async execute(interaction) {
    await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
  },
};
