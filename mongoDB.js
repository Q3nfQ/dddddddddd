/*
           

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by bad boys!                                               ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/b-b                          ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/


const { Schema, model } = require("mongoose");

const musicbot = Schema({
  guildID: String,
  role: String,
  language: String,
  channels: Array,
});


const playlist = Schema({
  userID: String,
  playlist: Array,
  musics: Array,
});


module.exports = {
  musicbot: model("musicbot", musicbot),
  playlist: model("playlist", playlist)
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

