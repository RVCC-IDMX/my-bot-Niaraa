/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { SlashCommandBuilder, ChannelType } = require('discord.js');

const data = new SlashCommandBuilder()
  .setName('echo')
  .setDescription('Replies with your input!')
  // eslint-disable-next-line arrow-parens
  .addStringOption(option =>
    // eslint-disable-next-line implicit-arrow-linebreak
    option.setName('input')
      .setDescription('The input to echo back')
      .addChannelTypes(discord.js))
  // eslint-disable-next-line arrow-parens
  .addChannelOption(option =>
    // eslint-disable-next-line implicit-arrow-linebreak
    option.setName('channel')
      .setDescription('The channel to echo into')
      .addChannelTypes(ChannelType.GuildText))
  .addBooleanOption(option =>
    option.setName('embed')
      .setDescription('Whether or not the echo should be embedded'));
      	.setRequired(true)
  .addChoices(
    { name: 'Funny' },
    { name: 'Cartoon' },
    { name: 'Movie' }
    // eslint-disable-next-line eol-last
  );