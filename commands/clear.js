/*
           

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by bad boys!                                               ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "clear",
  description: "Clears the music queue.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);
    
    try {
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ No music playing!!', ephemeral: true });
      }

      if (!queue.songs[0]) {
        return interaction.reply({ content: '❌ Queue is empty!!', ephemeral: true });
      }

      await queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor('#3498db')
        .setAuthor({
          name: 'Cleared List',
          iconURL: 'https://cdn.discordapp.com/attachments/1163577871265185865/1249117234614243561/standard.gif?ex=666c1154&is=666abfd4&hm=c74d3989f1da8f558525cfdd97673c02c73bd2f6ad3e562fb338b7c3a718ab46&',
          url: 'https://discord.gg/b-b'
        })
        .setDescription('**Queue cleared! Be Ready for a new musical journey.**')
       

      interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e); 
    }
  },
};

/*
           

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by bad boys!                                               ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
