const _0x483211 = function () {
  let _0x5df5ca = true;
  return function (_0xa8f217, _0x1c9af6) {
    const _0x1d8083 = _0x5df5ca ? function () {
      if (_0x1c9af6) {
        const _0x172443 = _0x1c9af6.apply(_0xa8f217, arguments);
        _0x1c9af6 = null;
        return _0x172443;
      }
    } : function () {};
    _0x5df5ca = false;
    return _0x1d8083;
  };
}();
const _0x3b062f = _0x483211(this, function () {
  let _0x3a5c4d;
  try {
    const _0x2ab3ba = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3a5c4d = _0x2ab3ba();
  } catch (_0x184ffd) {
    _0x3a5c4d = window;
  }
  const _0x1b94a4 = _0x3a5c4d.console = _0x3a5c4d.console || {};
  const _0x15b821 = ["log", 'warn', 'info', 'error', "exception", "table", 'trace'];
  for (let _0x4dc528 = 0x0; _0x4dc528 < _0x15b821.length; _0x4dc528++) {
    const _0x33cb6f = _0x483211.constructor.prototype.bind(_0x483211);
    const _0x570bf7 = _0x15b821[_0x4dc528];
    const _0x140023 = _0x1b94a4[_0x570bf7] || _0x33cb6f;
    _0x33cb6f.__proto__ = _0x483211.bind(_0x483211);
    _0x33cb6f.toString = _0x140023.toString.bind(_0x140023);
    _0x1b94a4[_0x570bf7] = _0x33cb6f;
  }
});
_0x3b062f();
module.exports.config = {
  'name': 'doggy',
  'version': "2.0.0",
  'hasPermssion': 0x2,
  'credits': "Kamisato Ayaka",
  'description': "Chơi kiểu chó với đứa được tag",
  'commandCategory': "😈যুদ্ধ_করার_কমান্ড😈",
  'usages': "[tag]",
  'cooldowns': 0x5,
  'dependencies': {
    'axios': '',
    'fs-extra': '',
    'path': '',
    'jimp': ''
  }
};
module.exports.onLoad = async () => {
  const {
    resolve: _0xb0b411
  } = global.nodemodule.path;
  const {
    existsSync: _0x5d6162,
    mkdirSync: _0x2c46d9
  } = global.nodemodule["fs-extra"];
  const {
    downloadFile: _0x33a064
  } = global.utils;
  const _0x44222e = __dirname + "/cache/canvas/";
  const _0x13f6f6 = _0xb0b411(__dirname, "cache/canvas", "doggy.png");
  if (!_0x5d6162(_0x44222e + "canvas")) {
    _0x2c46d9(_0x44222e, {
      'recursive': true
    });
  }
  if (!_0x5d6162(_0x13f6f6)) {
    await _0x33a064("https://i.imgur.com/dcxMJVb.jpg", _0x13f6f6);
  }
};
async function makeImage({
  one: _0x2eed8e,
  two: _0x4896ae
}) {
  const _0x52fc06 = global.nodemodule["fs-extra"];
  const _0xc7c1bf = global.nodemodule.path;
  const _0x584268 = global.nodemodule.axios;
  const _0x595675 = global.nodemodule.jimp;
  const _0x49d201 = _0xc7c1bf.resolve(__dirname, "cache", "canvas");
  let _0x1548b2 = await _0x595675.read(_0x49d201 + "/doggy.png");
  let _0x5e460e = _0x49d201 + ("/doggy_" + _0x2eed8e + '_' + _0x4896ae + ".png");
  let _0x34dc08 = _0x49d201 + ("/avt_" + _0x2eed8e + '.png');
  let _0x3126ce = _0x49d201 + ("/avt_" + _0x4896ae + '.png');
  let _0x30b49a = (await _0x584268.get("https://graph.facebook.com/" + _0x2eed8e + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x52fc06.writeFileSync(_0x34dc08, Buffer.from(_0x30b49a, "utf-8"));
  let _0xe672b6 = (await _0x584268.get("https://graph.facebook.com/" + _0x4896ae + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x52fc06.writeFileSync(_0x3126ce, Buffer.from(_0xe672b6, "utf-8"));
  let _0x17b39d = await _0x595675.read(await circle(_0x34dc08));
  let _0x865d07 = await _0x595675.read(await circle(_0x3126ce));
  _0x1548b2.resize(0x1f4, 0x1f4).composite(_0x17b39d.resize(0x46, 0x46), 0xd9, 0x98).composite(_0x865d07.resize(0x50, 0x50), 0x6a, 0x10d);
  let _0x305031 = await _0x1548b2.getBufferAsync("image/png");
  _0x52fc06.writeFileSync(_0x5e460e, _0x305031);
  _0x52fc06.unlinkSync(_0x34dc08);
  _0x52fc06.unlinkSync(_0x3126ce);
  return _0x5e460e;
}
async function circle(_0x112a76) {
  const _0x100e3f = require('jimp');
  _0x112a76 = await _0x100e3f.read(_0x112a76);
  _0x112a76.circle();
  return await _0x112a76.getBufferAsync("image/png");
}
module.exports.run = async function ({
  event: _0x2a75d7,
  api: _0x10b1fb,
  args: _0x492e56
}) {
  const _0x4acbc3 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x36bc12,
    messageID: _0x1dbcdf,
    senderID: _0x24e028
  } = _0x2a75d7;
  var _0x770cdf = Object.keys(_0x2a75d7.mentions)[0x0];
  let _0x450c3b = _0x2a75d7.mentions[_0x770cdf].replace('@', '');
  if (!_0x770cdf) {
    return _0x10b1fb.sendMessage("Vui lòng tag 1 người", _0x36bc12, _0x1dbcdf);
  } else {
    return makeImage({
      'one': _0x24e028,
      'two': _0x770cdf
    }).then(_0x51b479 => _0x10b1fb.sendMessage({
      'body': "🔰𝗦𝗛𝗨𝗩𝗢_𝗕𝗕𝗭𝗭🔰\n ${mentions[targetID]} ➕ You🫵🏻 = ভাবো যদি doggy হতে তাহলে কেমন দেখা যাইতো🐸🙂",
      'mentions': [{
        'tag': _0x450c3b,
        'id': _0x770cdf
      }],
      'attachment': _0x4acbc3.createReadStream(_0x51b479)
    }, _0x36bc12, () => _0x4acbc3.unlinkSync(_0x51b479), _0x1dbcdf));
  }
};
