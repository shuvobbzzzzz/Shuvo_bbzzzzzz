const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
  name: "help",
  version: "3.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU (Modified & Cleaned by SAGOR)",
  description: "Show all commands or specific command details",
  commandCategory: "system",
  usages: "[command name | page number]",
  cooldowns: 5
};

const IMGUR_VIDEO_URL = "https://i.imgur.com/lBHdD85.mp4"; 

async function getVideoStream() {
  try {
    const tempFile = path.join(__dirname, "help_temp.mp4");
    const res = await axios.get(IMGUR_VIDEO_URL, { responseType: "arraybuffer" });
    await fs.writeFile(tempFile, res.data);
    return fs.createReadStream(tempFile);
  } catch (err) {
    console.error("⚠️ Help video load error:", err.message);
    return null;
  }
}

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID } = event;
  const { commands } = global.client;
  const threadData = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadData.PREFIX || global.config.PREFIX;
  const ownerLink = global.config.FACEBOOK_OWNER || "m.me/100082387123597";
  const botName = global.config.BOTNAME || "🔰 SAGOR BOT 🔰";

  if (args[0] && commands.has(args[0].toLowerCase())) {
    const cmd = commands.get(args[0].toLowerCase());
    const video = await getVideoStream();
    const infoMsg = `
╭━━━━━━━━━━━━━━━━╮
┃ ✨ 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗜𝗡𝗙𝗢 ✨
┣━━━━━━━━━━━━━━━┫
┃ 🔖 Name: ${cmd.config.name}
┃ 📄 Usage: ${cmd.config.usages || "Not Provided"}
┃ 📜 Description: ${cmd.config.description || "Not Provided"}
┃ 🔑 Permission: ${cmd.config.hasPermssion}
┃ 👨‍💻 Credit: ${cmd.config.credits || "Unknown"}
┃ 📂 Category: ${cmd.config.commandCategory || "Unknown"}
┃ ⏳ Cooldown: ${cmd.config.cooldowns || 0}s
┣━━━━━━━━━━━━━━━┫
┃ ⚙ Prefix: ${prefix}
┃ 🤖 Bot Name: ${botName}
┃ 👑 Owner👉 ${ownerLink}
╰━━━━━━━━━━━━━━━━╯`;
    return api.sendMessage(
      { body: infoMsg, attachment: video ? [video] : [] },
      threadID,
      messageID
    );
  }

  // Command list
  const allCmds = Array.from(commands.keys()).sort();
  const perPage = 20;
  const page = Math.max(parseInt(args[0]) || 1, 1);
  const totalPages = Math.ceil(allCmds.length / perPage);
  const list = allCmds
    .slice((page - 1) * perPage, page * perPage)
    .map(c => `┃ ✪ ${c}`)
    .join("\n");

  const msg = `
╭━━━━━━━━━━━━━━━━╮
┃ 🔰 ${botName} 🔰
┃ 📜 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓 📜
┣━━━━━━━━━━━━━━━┫
┃ 📄 Page: ${page}/${totalPages}
┃ 🧮 Total: ${allCmds.length}
┣━━━━━━━━━━━━━━━┫
${list}
┣━━━━━━━━━━━━━━━┫
┃ ⚙ Prefix: ${prefix}
┃ 🤖 Bot Name: ${botName}
┃ 👑 Owner👉 ${ownerLink}
╰━━━━━━━━━━━━━━━━╯`;

  const video = await getVideoStream();
  api.sendMessage(
    { body: msg, attachment: video ? [video] : [] },
    threadID,
    messageID
  );
};
