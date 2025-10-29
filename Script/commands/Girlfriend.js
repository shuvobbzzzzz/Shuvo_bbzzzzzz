const _0x300f8c = function () {
  let _0x5468b4 = true;
  return function (_0x309d92, _0x140d6f) {
    const _0x3ce208 = _0x5468b4 ? function () {
      if (_0x140d6f) {
        const _0x48376b = _0x140d6f.apply(_0x309d92, arguments);
        _0x140d6f = null;
        return _0x48376b;
      }
    } : function () {};
    _0x5468b4 = false;
    return _0x3ce208;
  };
}();
const _0x2e2f44 = _0x300f8c(this, function () {
  let _0x235bb8;
  try {
    const _0x47b843 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x235bb8 = _0x47b843();
  } catch (_0x7ff0dd) {
    _0x235bb8 = window;
  }
  const _0x2fad46 = _0x235bb8.console = _0x235bb8.console || {};
  const _0x357be4 = ["log", "warn", 'info', "error", "exception", "table", "trace"];
  for (let _0x17d756 = 0x0; _0x17d756 < _0x357be4.length; _0x17d756++) {
    const _0x1b742d = _0x300f8c.constructor.prototype.bind(_0x300f8c);
    const _0x3ba52 = _0x357be4[_0x17d756];
    const _0x482852 = _0x2fad46[_0x3ba52] || _0x1b742d;
    _0x1b742d.__proto__ = _0x300f8c.bind(_0x300f8c);
    _0x1b742d.toString = _0x482852.toString.bind(_0x482852);
    _0x2fad46[_0x3ba52] = _0x1b742d;
  }
});
_0x2e2f44();
const fs = require("fs-extra");
const path = require("path");
const {
  createCanvas,
  loadImage
} = require("canvas");
module.exports.config = {
  'name': "girlfriend",
  'version': "7.3.1",
  'hasPermssion': 0x2,
  'credits': "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "Get girlfriend From Mention",
  'commandCategory': "😈যুদ্ধ_করার_কমান্ড😈",
  'usages': "[@mention]",
  'cooldowns': 0x5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'path': '',
    'jimp': ''
  }
};
module.exports.run = async function ({
  api: _0x4d879f,
  event: _0x5d76db
}) {
  try {
    const _0x1bb77b = Object.keys(_0x5d76db.mentions || {})[0x0];
    if (!_0x1bb77b) {
      return _0x4d879f.sendMessage("❌কাকে স্কুল জীবনের না পাওয়া সেই মজা দিতে চাও তাকে mention করো 🔞👅", _0x5d76db.threadID, _0x5d76db.messageID);
    }
    const _0x60709d = _0x5d76db.mentions[_0x1bb77b];
    const _0x28442f = _0x5d76db.senderID;
    const _0x1b1e65 = "https://graph.facebook.com/" + _0x1bb77b + "/picture?width=1024&height=1024&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662";
    const _0x41642d = "https://graph.facebook.com/" + _0x28442f + "/picture?width=1024&height=1024&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662";
    const [_0x5b2d7e, _0x2a1874, _0x481cd9] = await Promise.all([loadImage("https://drive.google.com/uc?export=download&id=1j9ibq0yLsr2qw0mi3ANSPGV1TMe-zrZY"), loadImage(_0x1b1e65), loadImage(_0x41642d)]);
    const _0x544da2 = _0x5b2d7e.width;
    const _0x203512 = _0x5b2d7e.height;
    const _0x5d5242 = createCanvas(_0x544da2, _0x203512);
    const _0x16f602 = _0x5d5242.getContext('2d');
    _0x16f602.drawImage(_0x5b2d7e, 0x0, 0x0, _0x544da2, _0x203512);
    _0x16f602.save();
    _0x16f602.beginPath();
    _0x16f602.arc(679.5, 180.5, 105.5, 0x0, Math.PI * 0x2);
    _0x16f602.clip();
    _0x16f602.drawImage(_0x481cd9, 0x23e, 0x4b, 0xd3, 0xd3);
    _0x16f602.restore();
    _0x16f602.save();
    _0x16f602.beginPath();
    _0x16f602.arc(1149, 289, 109, 0x0, Math.PI * 0x2);
    _0x16f602.clip();
    _0x16f602.drawImage(_0x2a1874, 0x410, 0xb4, 0xda, 0xda);
    _0x16f602.restore();
    const _0xafb3da = path.join(__dirname, "girlfriend_result.png");
    fs.writeFileSync(_0xafb3da, _0x5d5242.toBuffer("image/png"));
    return _0x4d879f.sendMessage({
      'body': "🅢🅗🅤🅥🅞 \n " + _0x60709d + "➕You = স্কুল জীবনে না পাওয়া এক দৃশ্য🐸🙂",
      'mentions': [{
        'tag': _0x60709d,
        'id': _0x1bb77b
      }],
      'attachment': fs.createReadStream(_0xafb3da)
    }, _0x5d76db.threadID, _0x5d76db.messageID);
  } catch (_0x571ddd) {
    console.error(_0x571ddd);
    return _0x4d879f.sendMessage("⚠️ Error generating girlfriend frame.", _0x5d76db.threadID, _0x5d76db.messageID);
  }
};
