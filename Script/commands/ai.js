const axios = require("axios");
module.exports = {
  'config': {
    'name': 'ai',
    'version': "1.0.1",
    'credit': "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    'description': "google ai",
    'cooldowns': 0x0,
    'hasPermssion': 0x0,
    'commandCategory': "google",
    'usages': {
      'en': "{pn} message | photo reply"
    }
  },
  'run': async ({
    api: _0x4c128a,
    args: _0x52346b,
    event: _0x539439
  }) => {
    const _0x5331c9 = _0x52346b.join(" ");
    const _0x1b97ed = Buffer.from("aHR0cHM6Ly9hcGlzLWtlaXRoLnZlcmNlbC5hcHAvYWkvZGVlcHNlZWtWMz9xPQ==", "base64").toString('utf-8');
    if (_0x539439.type === 'message_reply') {
      try {
        const _0x6b733d = _0x539439.messageReply.attachments[0x0]?.['url'];
        if (!_0x6b733d) {
          return _0x4c128a.sendMessage("Please reply to an image.", _0x539439.threadID, _0x539439.messageID);
        }
        const _0x116a74 = await axios.post('' + _0x1b97ed + encodeURIComponent(_0x5331c9 || "Describe this image."), {
          'image': _0x6b733d
        });
        const _0x154c35 = _0x116a74.data.result || _0x116a74.data.response || _0x116a74.data.message || "No response from AI.";
        _0x4c128a.sendMessage(_0x154c35, _0x539439.threadID, _0x539439.messageID);
      } catch (_0xbc1da8) {
        console.error("Error:", _0xbc1da8.message);
        _0x4c128a.sendMessage('processing.....', _0x539439.threadID, _0x539439.messageID);
      }
    } else {
      if (!_0x5331c9) {
        return _0x4c128a.sendMessage("🔰Shuvo_bot🔰\n\n\nHey I'm Ai Chat Bot\nHow can I assist you today?", _0x539439.threadID, _0x539439.messageID);
      }
      try {
        const _0x26d140 = await axios.get('' + _0x1b97ed + encodeURIComponent(_0x5331c9));
        const _0x30e57d = _0x26d140.data.result || _0x26d140.data.response || _0x26d140.data.message || "No response from AI.";
        _0x4c128a.sendMessage(_0x30e57d, _0x539439.threadID, _0x539439.messageID);
      } catch (_0xcb363c) {
        console.error("Error:", _0xcb363c.message);
        _0x4c128a.sendMessage("Boss Rahat re Dakh ei file gece 😑", _0x539439.threadID, _0x539439.messageID);
      }
    }
  }
};
