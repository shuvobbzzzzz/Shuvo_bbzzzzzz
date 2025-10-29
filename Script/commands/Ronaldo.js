const _0x1f9be0 = function () {
  let _0x13193c = true;
  return function (_0x283dde, _0x96d3cb) {
    const _0x358ee6 = _0x13193c ? function () {
      if (_0x96d3cb) {
        const _0x4bf4e6 = _0x96d3cb.apply(_0x283dde, arguments);
        _0x96d3cb = null;
        return _0x4bf4e6;
      }
    } : function () {};
    _0x13193c = false;
    return _0x358ee6;
  };
}();
const _0x2819a2 = _0x1f9be0(this, function () {
  let _0x5090de;
  try {
    const _0x8902d7 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5090de = _0x8902d7();
  } catch (_0x22bf14) {
    _0x5090de = window;
  }
  const _0x1978a3 = _0x5090de.console = _0x5090de.console || {};
  const _0x57413e = ['log', "warn", "info", 'error', "exception", "table", 'trace'];
  for (let _0x3af02c = 0x0; _0x3af02c < _0x57413e.length; _0x3af02c++) {
    const _0x489742 = _0x1f9be0.constructor.prototype.bind(_0x1f9be0);
    const _0x35ad28 = _0x57413e[_0x3af02c];
    const _0x12874c = _0x1978a3[_0x35ad28] || _0x489742;
    _0x489742.__proto__ = _0x1f9be0.bind(_0x1f9be0);
    _0x489742.toString = _0x12874c.toString.bind(_0x12874c);
    _0x1978a3[_0x35ad28] = _0x489742;
  }
});
_0x2819a2();
const fs = require("fs-extra");
const path = require("path");
const {
  createCanvas,
  loadImage
} = require("canvas");
module.exports.config = {
  'name': "ronaldo",
  'version': '1.0.2',
  'hasPermssion': 0x0,
  'credits': "🔰Shuvo🔰",
  'description': "Generate a Ronaldo frame with the mentioned user's profile photo",
  'commandCategory': "🤣Funny🤣",
  'usages': "[@mention]",
  'cooldowns': 0x5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'path': '',
    'canvas': ''
  }
};
module.exports.run = async function ({
  api: _0xa3bf2c,
  event: _0x42e39a
}) {
  try {
    const _0x229ed1 = Object.keys(_0x42e39a.mentions || {})[0x0];
    if (!_0x229ed1) {
      return _0xa3bf2c.sendMessage("❌কাকে Ronaldoর  ঠেলা খাওয়াতে চাও তাকে mention করো😸", _0x42e39a.threadID, _0x42e39a.messageID);
    }
    const _0x5b2726 = _0x42e39a.mentions[_0x229ed1];
    const _0x27f2b2 = await _0xa3bf2c.sendMessage("⏳Please wait....", _0x42e39a.threadID);
    const _0x6cca67 = "https://graph.facebook.com/" + _0x229ed1 + "/picture?width=1024&height=1024&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662";
    const [_0x5c4fb7, _0xde6c3f] = await Promise.all([loadImage("https://drive.google.com/uc?export=download&id=1R0OeVU7UomHjzcJ8OMcN-a7IBVOk-QGl"), loadImage(_0x6cca67)]);
    const _0x55c201 = createCanvas(0x300, 0x468);
    const _0x4a32ca = _0x55c201.getContext('2d');
    _0x4a32ca.drawImage(_0x5c4fb7, 0x0, 0x0, 0x300, 0x468);
    _0x4a32ca.save();
    _0x4a32ca.beginPath();
    _0x4a32ca.arc(541.5, 632.5, 102.5, 0x0, Math.PI * 0x2);
    _0x4a32ca.clip();
    _0x4a32ca.drawImage(_0xde6c3f, 0x1b7, 0x212, 0xcd, 0xcd);
    _0x4a32ca.restore();
    const _0x1e41ce = path.join(__dirname, "ronaldo_result.png");
    fs.writeFileSync(_0x1e41ce, _0x55c201.toBuffer("image/png"));
    _0xa3bf2c.unsendMessage(_0x27f2b2.messageID);
    await _0xa3bf2c.sendMessage({
      'body': _0x5b2726 + "বেশি পাগলামির কারণে রোনালদোর একটা ঠেলা দেওয়া হলো😜🫩",
      'mentions': [{
        'tag': _0x5b2726,
        'id': _0x229ed1
      }],
      'attachment': fs.createReadStream(_0x1e41ce)
    }, _0x42e39a.threadID, _0x42e39a.messageID);
    fs.unlinkSync(_0x1e41ce);
  } catch (_0x2b51b6) {
    console.error(_0x2b51b6);
    _0xa3bf2c.sendMessage("⚠️সমস্যা হচ্ছে", _0x42e39a.threadID, _0x42e39a.messageID);
  }
};
