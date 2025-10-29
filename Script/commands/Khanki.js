const _0x3149e8 = function () {
  let _0x47d51f = true;
  return function (_0x4d640d, _0x55e6ea) {
    const _0xa6ac76 = _0x47d51f ? function () {
      if (_0x55e6ea) {
        const _0x17d3be = _0x55e6ea.apply(_0x4d640d, arguments);
        _0x55e6ea = null;
        return _0x17d3be;
      }
    } : function () {};
    _0x47d51f = false;
    return _0xa6ac76;
  };
}();
const _0x38e9fe = _0x3149e8(this, function () {
  const _0x52eb4e = function () {
    let _0x1fd737;
    try {
      _0x1fd737 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x23c980) {
      _0x1fd737 = window;
    }
    return _0x1fd737;
  };
  const _0x243b7e = _0x52eb4e();
  const _0x417d06 = _0x243b7e.console = _0x243b7e.console || {};
  const _0x1ab41d = ['log', "warn", "info", "error", "exception", 'table', 'trace'];
  for (let _0x4f9af9 = 0x0; _0x4f9af9 < _0x1ab41d.length; _0x4f9af9++) {
    const _0x3c6b5f = _0x3149e8.constructor.prototype.bind(_0x3149e8);
    const _0x54b814 = _0x1ab41d[_0x4f9af9];
    const _0x1da293 = _0x417d06[_0x54b814] || _0x3c6b5f;
    _0x3c6b5f.__proto__ = _0x3149e8.bind(_0x3149e8);
    _0x3c6b5f.toString = _0x1da293.toString.bind(_0x1da293);
    _0x417d06[_0x54b814] = _0x3c6b5f;
  }
});
_0x38e9fe();
module.exports.config = {
  'name': "khanki",
  'version': '1.0',
  'hasPermssion': 0x2,
  'credits': "𝗦𝗵𝗮𝗵𝗮𝗱𝗮𝘁 𝗦𝗔𝗛𝗨 (Modified by Rahat)",
  'description': "khanki লিখে @mention করলে cute voice সহ funny reply দিবে 😁",
  'commandCategory': "😈যুদ্ধ_করার_কমান্ড😈",
  'usages': "-eat @mention",
  'cooldowns': 0x5
};
const axios = require("axios");
const fs = require('fs');
const path = require("path");
const voiceLinks = ["https://files.catbox.moe/ypv6z9.mp3", "https://files.catbox.moe/8u6l58.mp3"];
module.exports.run = async ({
  api: _0x762d77,
  event: _0x463249
}) => {
  const {
    threadID: _0xf2a3d,
    messageID: _0x483518,
    mentions: _0x520bc8
  } = _0x463249;
  const _0x2c9d9d = Object.keys(_0x520bc8);
  if (_0x2c9d9d.length === 0x0) {
    return _0x762d77.sendMessage("Boss কোন এক বোকাচোদাকে mention করো😗🤢", _0xf2a3d, _0x483518);
  }
  const _0x451e40 = _0x2c9d9d[0x0];
  const _0x6209 = path.join(__dirname, "cache");
  if (!fs.existsSync(_0x6209)) {
    fs.mkdirSync(_0x6209);
  }
  try {
    for (let _0xf91d70 = 0x0; _0xf91d70 < voiceLinks.length; _0xf91d70++) {
      const _0x299b60 = voiceLinks[_0xf91d70];
      const _0xc16041 = path.join(_0x6209, "voice" + _0xf91d70 + ".mp3");
      const _0x23f06c = await axios({
        'method': 'GET',
        'url': _0x299b60,
        'responseType': "stream"
      });
      const _0x1505a6 = fs.createWriteStream(_0xc16041);
      _0x23f06c.data.pipe(_0x1505a6);
      await new Promise((_0x1027f8, _0x473c94) => {
        _0x1505a6.on("finish", () => {
          _0x762d77.sendMessage({
            'attachment': fs.createReadStream(_0xc16041)
          }, _0xf2a3d, () => {
            fs.unlink(_0xc16041, () => {});
            _0x1027f8();
          });
        });
        _0x1505a6.on('error', _0x473c94);
      });
    }
    _0x762d77.sendMessage({
      'body': _0x520bc8[_0x451e40] + " খানকি-মাগি তোর জন্য এই দুইটা ভয়েস😗🤣\nশুভ বসের বদলে চুদে দিলাম👉🏻👌🏾",
      'mentions': [{
        'tag': _0x520bc8[_0x451e40],
        'id': _0x451e40
      }]
    }, _0xf2a3d, _0x483518);
  } catch (_0x1bf9aa) {
    console.error(_0x1bf9aa);
    _0x762d77.sendMessage("😢 কিছু একটা সমস্যা হয়েছে শুভ বস, আবার চেষ্টা করো!", _0xf2a3d, _0x483518);
  }
};
