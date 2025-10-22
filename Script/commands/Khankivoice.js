const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "Khanki",
  version: "3.2",
  author: "𝗦𝗛𝗨𝗩𝗢 𝗕𝗕𝗭𝗭",
  countDown: 5,
  role: 2,
  shortDescription: "মেনশন করলে ভয়েস পাঠায়",
  longDescription: "মেনশন করলেই ২টা ভয়েস ফাইল পাঠাবে 😏",
  category: "fun",
  guide: {
    en: "{pn} @mention"
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  if (!event.mentions || Object.keys(event.mentions).length === 0) {
    return api.sendMessage("কারো মেনশন করো 𝗦𝗛𝗨𝗩𝗢 Boss 🙂", event.threadID, event.messageID);
  }

  try {
    const mentionID = Object.keys(event.mentions)[0];
    const mentionName = event.mentions[mentionID] || (await Users.getName(mentionID));

    // __dirname ব্যবহার করে ভয়েস ফাইলের লোকেশন
    const voice1 = path.join(__dirname, "Khan.mp4.mp3");
    const voice2 = path.join(__dirname, "Khan2.mp4.mp3");

    if (!fs.existsSync(voice1) || !fs.existsSync(voice2)) {
      return api.sendMessage(
        `${mentionName} ⚠️ ভয়েস ফাইল পাওয়া যায়নি।\nদয়া করে Khan.mp4.mp3 এবং Khan2.mp4.mp3 ফাইল এই ফোল্ডারে রাখো।`,
        event.threadID,
        event.messageID
      );
    }

    // ১ম ভয়েস পাঠানো
    await api.sendMessage(
      { attachment: fs.createReadStream(voice1) },
      event.threadID
    );

    // ২য় ভয়েস পাঠানো
    await api.sendMessage(
      { attachment: fs.createReadStream(voice2) },
      event.threadID
    );

    // মেনশন সহ মেসেজ
    return api.sendMessage(
      {
        body: `${mentionName} খানকির পোলা🫦💦\nতোর জন্য এই ২টা ভয়েস 😏\n 𝗦𝗛𝗨𝗩𝗢  বসের বদলে আমি চুদে দিলাম💋💦`,
        mentions: [{ tag: mentionName, id: mentionID }]
      },
      event.threadID
    );

  } catch (err) {
    console.error("❌ Khanki কমান্ডে সমস্যা:", err);
    return api.sendMessage("কিছু একটা গন্ডগোল হয়েছে 😅", event.threadID, event.messageID);
  }
};
