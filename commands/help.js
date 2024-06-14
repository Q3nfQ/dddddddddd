/*
           

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by bad boys!                                               ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
          { name: '🎹 Play', value: 'Stream a song from a given link or text from sources' },
          { name: '⏹️ Stop', value: 'Makes the bot stop playing music and leave the voice' },
          { name: '📊 Queue', value: 'View and manage the song queue of this server' },
          { name: '⏭️ Skip', value: 'Skip the current playing song' },
          { name: '⏸️ Pause', value: 'Pause the currently playing song' },
          { name: '▶️ Resume', value: 'Resume the current paused song' },
          { name: '🔁 Loop', value: 'Toggle loop mode for queue and current song' },
          { name: '🔄 Autoplay', value: 'Enable or disable autoplay [play random songs ]' },
          { name: '⏩ Seek', value: 'Seek to a specific time in the current song' },
          { name: '⏮️ Previous', value: 'Play the previous song in the queue' },
          { name: '🔀 Shuffle', value: 'Shuffle the songs in queue' },
          { name: '📃 playlist', value: 'manage the playlists' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1163577871265185865/1249117234614243561/standard.gif?ex=666c1154&is=666abfd4&hm=c74d3989f1da8f558525cfdd97673c02c73bd2f6ad3e562fb338b7c3a718ab46&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
          { name: '🏓 Ping', value: "Check the bot's latency" },
          { name: '🗑️ Clear', value: 'Clear the song queue of this server' },
          { name: '⏱️ Time', value: 'Display the current song playback time' },
          { name: '🎧 Filter', value: 'Apply filters to enhance the sound as you love' },
           { name: '🎵 Now Playing', value: 'Display the currently playing song information' },
          { name: '🔊 Volume', value: 'Adjust the music volume [ hearing at high volumes is risky ]' },
        ) 
       .setImage('https://cdn.discordapp.com/attachments/1163577871265185865/1249117234614243561/standard.gif?ex=666c1154&is=666abfd4&hm=c74d3989f1da8f558525cfdd97673c02c73bd2f6ad3e562fb338b7c3a718ab46&')
    
      const button2 = new ButtonBuilder()
        .setLabel('Discord')
        .setURL('https://discord.gg/b-b')
        .setStyle(ButtonStyle.Link);

      const button3 = new ButtonBuilder()
        .setLabel('Code')
        .setURL('https://github.com/GlaceYT/MUSIC-BOT-v3.6')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1, button2, button3);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
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
