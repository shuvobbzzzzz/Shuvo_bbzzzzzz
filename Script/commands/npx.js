const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "npx",
  version: "10.2",
  hasPermssion: 0,
  credits: "SaGor",
  description: " Will send a cute girl's voice if you give an emoji 😍",
  commandCategory: "noprefix",
  usages: "😀😃😄",
  cooldowns: 5
};

const emojiAudioMap = {
  "😂": "https://drive.google.com/uc?export=download&id=16lIhRUQECuI6k3fUAYh4DXZzN7KtjypB",
  "💋": "https://drive.google.com/uc?export=download&id=17jrnlOiGbGQn-DziZUeEf7wZBubIOBD8",
  "🐸": "https://drive.google.com/uc?export=download&id=17SG67NAbScatZm2tJofC_4zxU-lF9IO_",
  "🤣": "https://drive.google.com/uc?export=download&id=17upphhCIoP6AoTqFo5J_I-Uqv27H-YOO", 
  "😳": "https://drive.google.com/uc?export=download&id=17Ujd7EJ9K-ZW6-dUNi4JkR8wg-_Xja0P",
  "": "https://drive.google.com/uc?export=download&id=",
  "": "https://drive.google.com/uc?export=download&id=",
  "": "https://drive.google.com/uc?export=download&id="
};

module.exports.handleEvent = async ({ api, event }) => {
  const { threadID, messageID, body } = event;
  if (!body || body.length > 15) return;

  const emoji = body.trim();
  const audioUrl = emojiAudioMap[emoji];
  if (!audioUrl) return;

  const cacheDir = path.join(__dirname, "cache");
  if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

  const filePath = path.join(cacheDir, `${encodeURIComponent(emoji)}.mp3`);

  try {
    const response = await axios({
      method: "GET",
      url: audioUrl,
      responseType: "stream"
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    writer.on("finish", () => {
      api.sendMessage(
        { attachment: fs.createReadStream(filePath) },
        threadID,
        () => fs.unlink(filePath, () => {}),
        messageID
      );
    });

    writer.on("error", () => {
      api.sendMessage(" No point in using emojis\nGo eat puffed rice, jaan😘", threadID, messageID);
    });
  } catch (err) {
    api.sendMessage(" No use of emojis\nGo and eat puffed rice, jaan😘", threadID, messageID);
  }
};

module.exports.run = () => {};
