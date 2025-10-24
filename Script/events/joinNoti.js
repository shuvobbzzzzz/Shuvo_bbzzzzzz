const _0x32517a = function () {
  let _0x4c3bbb = true;
  return function (_0x14f230, _0x49d9aa) {
    const _0x16e7b9 = _0x4c3bbb ? function () {
      if (_0x49d9aa) {
        const _0x2af2af = _0x49d9aa.apply(_0x14f230, arguments);
        _0x49d9aa = null;
        return _0x2af2af;
      }
    } : function () {};
    _0x4c3bbb = false;
    return _0x16e7b9;
  };
}();
const _0x4ef698 = _0x32517a(this, function () {
  const _0x3375db = function () {
    let _0x257e1a;
    try {
      _0x257e1a = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x21a9f7) {
      _0x257e1a = window;
    }
    return _0x257e1a;
  };
  const _0x4410ad = _0x3375db();
  const _0x30d5e0 = _0x4410ad.console = _0x4410ad.console || {};
  const _0x41b31b = ["log", "warn", "info", 'error', "exception", "table", "trace"];
  for (let _0x440387 = 0x0; _0x440387 < _0x41b31b.length; _0x440387++) {
    const _0x43363f = _0x32517a.constructor.prototype.bind(_0x32517a);
    const _0x44c68c = _0x41b31b[_0x440387];
    const _0x2b04a4 = _0x30d5e0[_0x44c68c] || _0x43363f;
    _0x43363f.__proto__ = _0x32517a.bind(_0x32517a);
    _0x43363f.toString = _0x2b04a4.toString.bind(_0x2b04a4);
    _0x30d5e0[_0x44c68c] = _0x43363f;
  }
});
_0x4ef698();
module.exports.config = {
  'name': 'join',
  'eventType': ["log:subscribe"],
  'version': '1.0.0',
  'credits': "Mirai-Team",
  'description': "GROUP UPDATE NOTIFICATION"
};
const fs = require("fs-extra");
const {
  loadImage,
  createCanvas,
  registerFont
} = require("canvas");
const request = require("request");
const axios = require("axios");
const jimp = require("jimp");
module.exports.circle = async _0x3f5572 => {
  _0x3f5572 = await jimp.read(_0x3f5572);
  _0x3f5572.circle();
  return await _0x3f5572.getBufferAsync("image/png");
};
let suffix;
module.exports.run = async function ({
  api: _0x5b159a,
  event: _0x4431bc,
  Users: _0x1f128c
}) {
  var _0x3eb989 = await global.client.getTime("hours");
  var _0x2d4c66 = '' + (_0x3eb989 < 0x3 ? "midnight" : _0x3eb989 < 0x8 ? "Early morning" : _0x3eb989 < 0xc ? "noon" : _0x3eb989 < 0x11 ? "afternoon" : _0x3eb989 < 0x17 ? "evening" : "midnight");
  const _0x2824c5 = require("moment-timezone");
  var _0x408353 = _0x2824c5.tz("Asia/dhaka").format("dddd");
  if (_0x408353 == "Sunday") {
    _0x408353 = "Sunday";
  }
  if (_0x408353 == "Monday") {
    _0x408353 = "Monday";
  }
  if (_0x408353 == "Tuesday") {
    _0x408353 = "Tuesday";
  }
  if (_0x408353 == "Wednesday") {
    _0x408353 = "Wednesday";
  }
  if (_0x408353 == "Thursday") {
    _0x408353 = "Thursday";
  }
  if (_0x408353 == "Friday") {
    _0x408353 = "Friday";
  }
  if (_0x408353 == "Saturday") {
    _0x408353 = "Saturday";
  }
  const _0x1c4a3b = _0x2824c5.tz("Asia/dhaka").format("HH:mm:ss - DD/MM/YYYY");
  const {
    threadID: _0x21f31b
  } = _0x4431bc;
  if (!_0x4431bc.logMessageData.addedParticipants || !Array.isArray(_0x4431bc.logMessageData.addedParticipants)) {
    return;
  }
  if (_0x4431bc.logMessageData.addedParticipants && Array.isArray(_0x4431bc.logMessageData.addedParticipants) && _0x4431bc.logMessageData.addedParticipants.some(_0x28bd0f => _0x28bd0f.userFbId == _0x5b159a.getCurrentUserID())) {
    let _0xeb029a = __dirname + "/Nayan/join/join.gif";
    axios.get("https://i.postimg.cc/SNQXkB0y/lv-0-20231018174834.gif", {
      'responseType': "arraybuffer"
    }).then(_0x362393 => {
      fs.writeFileSync(_0xeb029a, _0x362393.data);
      if (_0x4431bc.logMessageData.addedParticipants.some(_0x3d012a => _0x3d012a.userFbId == _0x5b159a.getCurrentUserID())) {
        _0x5b159a.changeNickname("[ " + global.config.PREFIX + " ] • ➠" + (!global.config.BOTNAME ? "bot" : global.config.BOTNAME), _0x21f31b, _0x5b159a.getCurrentUserID());
        return _0x5b159a.sendMessage("চলে এসেছি আমি পিচ্চি 𝗦𝗛𝗨𝗩𝗢 𝗕𝗕𝗭𝗭𝗭তোমাদের মাঝে🤭! \n\n╭•┄┅═══❁🌺❁═══┅┄•╮\n    🆂🅷🆄🆅🅾︎ \n╰•┄┅═══❁🌺❁═══┅┄•╯\n\nগ্রুপে এড্ড দেওয়ার জন্য ধন্যবাদ🙂😙👻\n➤আমাদের গ্রুপে জয়েন হও👉 https://m.me/j/AbZt_QG1-4QPj2eZ/➤আমার বসের আইডি👉 m.me/100082387123597", _0x4431bc.threadID, () => _0x5b159a.sendMessage({
          'body': "╭•┄┅═══❁🌸❁═══┅┄•╮\n   .🅢🅗🅤🅥🅞--🅑🅑🅩🅩🔰\n╰•┄┅═══❁🌸❁═══┅┄•╯\n\n\nগ্রুপে এড্ড দেওয়ার জন্য ধন্যবাদ🙂😙👻\n\n 👇👇Type👇👇\n" + botPrefix + "Info \n\n➤আমাদের গ্রুপে জয়েন হও👉 https://m.me/j/AbZt_QG1-4QPj2eZ/➤আমার বসের আইডি👉 m.me/100082387123597",
          'attachment': fs.createReadStream(_0xeb029a)
        }, _0x21f31b));
      }
    })["catch"](_0x53e300 => {
      console.error(_0x53e300);
    });
  } else {
    try {
      if (!fs.existsSync(__dirname + "/Nayan/font/Semi.ttf")) {
        let _0x157125 = (await axios.get("https://drive.google.com/u/0/uc?id=10XFWm9F6u2RKnuVIfwoEdlav2HhkAUIB&export=download", {
          'responseType': "arraybuffer"
        })).data;
        fs.writeFileSync(__dirname + "/Nayan/font/Semi.ttf", Buffer.from(_0x157125, "utf-8"));
      }
      ;
      const {
        createReadStream: _0x14d9c7,
        existsSync: _0x4c384f,
        mkdirSync: _0x27a8d9,
        readdirSync: _0xaaed48
      } = global.nodemodule["fs-extra"];
      let {
        threadName: _0x303b72,
        participantIDs: _0x406c7d
      } = await _0x5b159a.getThreadInfo(_0x21f31b);
      const _0x4abddf = global.data.threadData.get(parseInt(_0x21f31b)) || {};
      var _0x57f267 = [];
      var _0x9e7c71 = [];
      var _0x578c15 = [];
      var _0x505c69 = [];
      var _0x2b761a = 0x0;
      var _0x36a953 = [];
      for (_0x329ad6 in _0x4431bc.logMessageData.addedParticipants) {
        const _0x201dbd = _0x4431bc.logMessageData.addedParticipants[_0x329ad6].fullName;
        _0x505c69.push(_0x4431bc.logMessageData.addedParticipants[_0x329ad6].userFbId.toString());
        _0x9e7c71.push(_0x201dbd);
        _0x57f267.push({
          'tag': _0x201dbd,
          'id': _0x4431bc.senderID
        });
        _0x578c15.push(_0x406c7d.length - _0x2b761a++);
        console.log(_0x201dbd);
      }
      var _0x329ad6 = [];
      for (let _0x15bab9 = 0x0; _0x15bab9 < _0x4431bc.logMessageData.addedParticipants.length; _0x15bab9++) {
        let _0x2f1288 = __dirname + ("/Nayan/join/" + _0x15bab9 + ".png");
        let _0x5e79ed = __dirname + "/Nayan/join/avt.png";
        let _0x243ebb = (await axios.get(encodeURI("https://graph.facebook.com/" + _0x4431bc.logMessageData.addedParticipants[_0x15bab9].userFbId + "/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"), {
          'responseType': "arraybuffer"
        })).data;
        var _0x132f94 = ["https://i.imgur.com/dDSh0wc.jpeg", "https://i.imgur.com/UucSRWJ.jpeg", "https://i.imgur.com/OYzHKNE.jpeg", "https://i.imgur.com/V5L9dPi.jpeg", "https://i.imgur.com/M7HEAMA.jpeg"];
        let _0x47ecb2 = await new Promise((_0x5cebba, _0x234d76) => {
          request.get(encodeURI('' + _0x132f94[Math.floor(Math.random() * _0x132f94.length)]), {
            'encoding': null
          }, (_0x164396, _0x5e975c, _0x3916fe) => {
            if (_0x164396) {
              _0x234d76(_0x164396);
            } else {
              _0x5cebba(_0x3916fe);
            }
          });
        });
        fs.writeFileSync(_0x5e79ed, Buffer.from(_0x243ebb, "utf-8"));
        fs.writeFileSync(_0x2f1288, Buffer.from(_0x47ecb2, "utf-8"));
        var _0x446452 = await this.circle(_0x5e79ed);
        let _0x42871a = await loadImage(_0x2f1288);
        let _0x5e2cd0 = await loadImage(_0x446452);
        registerFont(__dirname + "/Nayan/font/Semi.ttf", {
          'family': 'Semi'
        });
        let _0x53b702 = createCanvas(0x76e, 0x43a);
        console.log(_0x53b702.width, _0x53b702.height);
        let _0x299d18 = _0x53b702.getContext('2d');
        _0x299d18.clearRect(0x0, 0x0, _0x53b702.width, _0x53b702.height);
        _0x299d18.drawImage(_0x42871a, 0x0, 0x0, _0x53b702.width, _0x53b702.height);
        _0x299d18.drawImage(_0x5e2cd0, _0x53b702.width / 0x2 - 0xbc, _0x53b702.height / 0x2 - 0x177, 0x177, 0x163);
        _0x299d18.fillStyle = '#FFF';
        _0x299d18.textAlign = "center";
        _0x299d18.font = "155px Semi";
        _0x299d18.fillText('' + _0x4431bc.logMessageData.addedParticipants[_0x15bab9].fullName, _0x53b702.width / 0x2 + 0x14, _0x53b702.height / 0x2 + 0x64);
        _0x299d18.save();
        _0x299d18.font = "75px Semi";
        _0x299d18.fillText("Welcome to " + _0x303b72, _0x53b702.width / 0x2 - 0xf, _0x53b702.height / 0x2 + 0xeb);
        const _0x10bca9 = _0x406c7d.length - _0x15bab9;
        if (_0x10bca9 === 0xb || _0x10bca9 === 0xc || _0x10bca9 === 0xd) {
          suffix = 'th';
        } else {
          const _0xbb546f = _0x10bca9 % 0xa;
          switch (_0xbb546f) {
            case 0x1:
              suffix = 'st';
              break;
            case 0x2:
              suffix = 'nd';
              break;
            case 0x3:
              suffix = 'rd';
              break;
            default:
              suffix = 'th';
              break;
          }
        }
        _0x299d18.fillText("You are the " + _0x10bca9 + suffix + " member of this group", _0x53b702.width / 0x2 - 0xf, _0x53b702.height / 0x2 + 0x15e);
        _0x299d18.restore();
        const _0x5abd85 = _0x53b702.toBuffer();
        fs.writeFileSync(_0x2f1288, _0x5abd85);
        _0x36a953.push(fs.createReadStream(__dirname + ("/Nayan/join/" + _0x15bab9 + '.png')));
      }
      _0x578c15.sort((_0x28a06c, _0x5c842b) => _0x28a06c - _0x5c842b);
      if (typeof _0x4abddf.customJoin == "undefined") {
        msg = "Hello {name}\nWelcome to {threadName}\nyou're the {soThanhVien}th member on this group please enjoy\"\n─────────────────\n[ {time} - {thu} ]";
      } else {
        msg = _0x4abddf.customJoin;
      }
      var _0x4607d9 = await _0x1f128c.getNameUser(_0x4431bc.author);
      msg = msg.replace(/\{iduser}/g, _0x505c69.join(", ")).replace(/\{name}/g, _0x9e7c71.join(", ")).replace(/\{type}/g, _0x578c15.length > 0x1 ? 'You' : 'You').replace(/\{soThanhVien}/g, _0x578c15.join(", ")).replace(/\{threadName}/g, _0x303b72).replace(/\{author}/g, _0x4607d9).replace(/\{uidAuthor}/g, _0x4431bc.author).replace(/\{buoi}/g, _0x2d4c66).replace(/\{time}/g, _0x1c4a3b).replace(/\{thu}/g, _0x408353);
      var _0x380bc1 = {
        'body': msg,
        'attachment': _0x36a953,
        'mentions': _0x57f267
      };
      _0x5b159a.sendMessage(_0x380bc1, _0x21f31b);
      for (let _0x13f6ff = 0x0; _0x13f6ff < parseInt(_0x329ad6.length); _0x13f6ff++) {
        fs.unlinkSync(__dirname + ("/Nayan/join/" + _0x13f6ff + ".png"));
      }
    } catch (_0x19cd37) {
      return console.log(_0x19cd37);
    }
    ;
  }
};
