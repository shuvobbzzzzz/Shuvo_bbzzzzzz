const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "mj",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shuvo",
  description: "Generate AI image (MidJourney style) using Stable Diffusion",
  commandCategory: "fun",
  usages: "/mj <prompt>",
  cooldowns: 5,
};

const API_TOKEN = "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"; // তোমার Hugging Face Token

// Hugging Face Stable Diffusion Model (High Quality)
const MODEL_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2";

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ");
  if (!prompt) {
    return api.sendMessage("⚠️ Usage: /mj <prompt>\n\nExample: /mj cat wearing sunglasses", event.threadID, event.messageID);
  }

  const processingMsg = await api.sendMessage(
    `🎨 MidJourney processing your request...\n📝 Prompt: ${prompt}\n⏳ Please wait 10-15s...`,
    event.threadID,
    event.messageID
  );

  try {
    const response = await axios({
      method: "POST",
      url: MODEL_URL,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        inputs: prompt,
      }),
      responseType: "arraybuffer",
    });

    if (!response.data) {
      return api.sendMessage("❌ Failed to generate image. Please try again later.", event.threadID, event.messageID);
    }

    const imgPath = __dirname + `/cache/mj_${Date.now()}.png`;
    await fs.writeFile(imgPath, Buffer.from(response.data), "binary");

    api.sendMessage(
      {
        body: `✅ MidJourney process completed!\n📝 Prompt: ${prompt}`,
        attachment: fs.createReadStream(imgPath),
      },
      event.threadID,
      () => fs.unlinkSync(imgPath),
      event.messageID
    );
  } catch (err) {
    console.error(err);
    api.sendMessage("⚠️ Error: " + err.message, event.threadID, event.messageID);
  }
};
