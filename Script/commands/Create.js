module.exports.config = {
  'name': "create",
  'version': "1.0.",
  'hasPermssion': 0x0,
  'credits': "Sujon",
  'description': "( 𝙂𝙚𝙣𝙚𝙧𝙖𝙩 𝘼𝙄 𝙞𝙢𝙖𝙜𝙚𝙨 )",
  'commandCategory': "create-images",
  'usages': "( 𝖨𝗆𝖺𝗀𝗂𝗇𝖾 𝖨𝗆𝖺𝗀𝖾 )",
  'cooldowns': 0x2
};
module.exports.run = async ({
  api: _0x1425d6,
  event: _0x3061d2,
  args: _0x1c9cce
}) => {
  const _0x39829f = require("axios");
  const _0x2c71df = require("fs-extra");
  let {
    threadID: _0x1d1ef9,
    messageID: _0x57a33f
  } = _0x3061d2;
  let _0x19ef35 = _0x1c9cce.join("🔰𝗥𝗮𝗵𝗮𝘁_𝗕𝗼𝘁🔰\n𝐒𝐮𝐜𝐜𝐞𝐬𝐟𝐮𝐥 𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐂𝐫𝐞𝐚𝐭𝐞 𝐈𝐦𝐠");
  if (!_0x19ef35) {
    return _0x1425d6.sendMessage("𝖯𝗅𝖾𝖺𝗌𝖾 𝗎𝗌𝖾 ✓𝗀𝖾𝗇𝗆𝖺𝗀𝖾 <𝗍𝖾𝗑𝗍>", _0x1d1ef9, _0x57a33f);
  }
  let _0x49cb86 = __dirname + "/cache/poli.png";
  const _0xe3acf6 = (await _0x39829f.get("https://image.pollinations.ai/prompt/" + _0x19ef35, {
    'responseType': "arraybuffer"
  })).data;
  _0x2c71df.writeFileSync(_0x49cb86, Buffer.from(_0xe3acf6, "utf-8"));
  _0x1425d6.sendMessage({
    'body': "🔰𝗥𝗮𝗵𝗮𝘁_𝗕𝗼𝘁🔰 \n 𝐒𝐮𝐜𝐜𝐞𝐬𝐟𝐮𝐥 𝐅𝐨𝐫 𝐘𝐨𝐮𝐫 𝐂𝐫𝐞𝐚𝐭𝐞 𝐈𝐦𝐠",
    'attachment': _0x2c71df.createReadStream(_0x49cb86)
  }, _0x1d1ef9, () => _0x2c71df.unlinkSync(_0x49cb86), _0x57a33f);
};
