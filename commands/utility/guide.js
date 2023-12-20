const {
  ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('guide')
    .setDescription('lovely guide with button'),
  async execute(interaction) {
    const confirm = new ButtonBuilder()
      .setCustomId('confirm')
      .setLabel('Confirm Ban')
      .setStyle(ButtonStyle.Danger);

    const linkButton = new ButtonBuilder()
      .setLabel('Link to Repo')
      .setURL('https://github.com/RVCC-IDMX/my-bot-Niaraa.git')
      .setStyle(ButtonStyle.Link);
    const row = new ActionRowBuilder()
      .addComponents(confirm, linkButton);
    await interaction.reply({
      content: 'this is a button',
      components: [row],
    });
  },
};
