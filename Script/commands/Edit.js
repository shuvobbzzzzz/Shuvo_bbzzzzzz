const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports.config = {
 name: "edit",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "editing image",
 commandCategory: "editing",
 usages: "reply to an image",
 cooldowns: 5
};

module.exports.run = async function ({ api, event, args, message }) {
  const prompt = args.join(" ");
  const repliedImage = event.messageReply?.attachments?.[0];

  if (!prompt || !repliedImage || repliedImage.type !== "photo") {
    return message.reply("⚠️ | Please reply to a photo with your prompt to edit it.");
  }

  const imgPath = path.join(__dirname, "cache", `${Date.now()}_edit.jpg`);
  const waitMsg = await message.reply(`𝗦𝗛𝗨𝗩𝗢 𝗕𝗕𝗭𝗭 🧪 Editing image for: "${prompt}"...\nPlease wait...`);

  try {
    const imgURL = repliedImage.url;
    const imageUrl = `https://edit-and-gen.onrender.com/gen?prompt=${encodeURIComponent(prompt)}&image=${encodeURIComponent(imgURL)}`;
    const res = await axios.get(imageUrl, { responseType: "arraybuffer" });

    await fs.ensureDir(path.dirname(imgPath));
    await fs.writeFile(imgPath, Buffer.from(res.data, "binary"));

    await message.reply({
      body: `𝗦𝗛𝗨𝗩𝗢 𝗕𝗕𝗭𝗭 ✅ | Edited image for: "${prompt}"`,
      attachment: fs.createReadStream(imgPath)
    });

  } catch (err) {
    console.error("EDIT Error:", err);
    message.reply("❌সরি শুভ বস হচ্ছে না ");
  } finally {
    await fs.remove(imgPath);
    api.unsendMessage(waitMsg.messageID);
  }
};
