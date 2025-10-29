const _0x459d6f = function () {
  let _0x360eb2 = true;
  return function (_0x2a292f, _0x2bc4af) {
    const _0x113538 = _0x360eb2 ? function () {
      if (_0x2bc4af) {
        const _0x2f1e28 = _0x2bc4af.apply(_0x2a292f, arguments);
        _0x2bc4af = null;
        return _0x2f1e28;
      }
    } : function () {};
    _0x360eb2 = false;
    return _0x113538;
  };
}();
const _0x31318a = _0x459d6f(this, function () {
  let _0x14b404;
  try {
    const _0x11b716 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x14b404 = _0x11b716();
  } catch (_0x454125) {
    _0x14b404 = window;
  }
  const _0x88f9df = _0x14b404.console = _0x14b404.console || {};
  const _0x478b43 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x1a3791 = 0x0; _0x1a3791 < _0x478b43.length; _0x1a3791++) {
    const _0x2243de = _0x459d6f.constructor.prototype.bind(_0x459d6f);
    const _0x4e00f3 = _0x478b43[_0x1a3791];
    const _0x66d2a = _0x88f9df[_0x4e00f3] || _0x2243de;
    _0x2243de.__proto__ = _0x459d6f.bind(_0x459d6f);
    _0x2243de.toString = _0x66d2a.toString.bind(_0x66d2a);
    _0x88f9df[_0x4e00f3] = _0x2243de;
  }
});
_0x31318a();
module.exports.config = {
  'name': "shuvo_bot_stop",
  'version': "1.0.0",
  'hasPermssion': 0x2,
  'credits': "𝗦𝗛𝗨𝗩𝗢_𝗕𝗢𝗦𝗦",
  'description': "Show stop",
  'commandCategory': "😈যুদ্ধ_করার_কমান্ড😈",
  'usages': "intro",
  'cooldowns': 0x2
};
module.exports.run = async function ({
  api: _0xd7238d,
  event: _0x1d031e
}) {
  const _0x41d1dd = _0x1d031e.threadID;
  if (!global.clientIntervals || !global.clientIntervals[_0x41d1dd]) {
    return _0xd7238d.sendMessage("কাউকে তো চু*দা হচ্ছে না তাহলে shuvo_bot_stop বলছো কেন🫩🐸", _0x41d1dd);
  }
  clearInterval(global.clientIntervals[_0x41d1dd]);
  delete global.clientIntervals[_0x41d1dd];
  return _0xd7238d.sendMessage("✅ শুভ বস থামতে বলছো কেন😑ওকে আরো চুদতে হবে😈", _0x41d1dd);
};
