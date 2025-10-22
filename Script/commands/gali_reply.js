const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Shuvo Bukacuda")==0 || event.body.indexOf("শুভ বোকাচোদা")==0 || event.body.indexOf("বোকাচোদা")==0 || event.body.indexOf("Shuvo nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Shuvo re chudi")==0 ||
event.body.indexOf("khanki")==0 || event.body.indexOf("murgi")==0 || event.body.indexOf("Shuvo Abal")==0 ||
event.body.indexOf("mc")==0 || event.body.indexOf("Shuvo re chod")==0 || event.body.indexOf("Shuvo Abal")==0 ||
event.body.indexOf("magir pola")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("চুদি")==0 ||
event.body.indexOf("magi")==0 || event.body.indexOf("শুভ কে চুদি")==0 || event.body.indexOf("Shuvo ke chudi")==0 ||
event.body.indexOf("মাগীর পোলা")==0 || event.body.indexOf("মাগী")==0 || event.body.indexOf("bal")==0 ||
event.body.indexOf("বাল")==0 || event.body.indexOf("bokachoda")==0 || event.body.indexOf("fuck")==0 || event.body.indexOf("ফাক")==0 || event.body.indexOf(শুভ আবাল")==0 ||
event.body.indexOf("শুভরে চুদি")==0 || event.body.indexOf("চুদির ভাই")==0 || event.body.indexOf("abal")==0 ||
event.body.indexOf("Rahat Boakachoda")==0 || event.body.indexOf("@─ Ẋ͙s S̾h͢uͥvͭo͟ ⪼ 🩷🪽 aye mangger")==0 || event.body.indexOf("Shuvo re chudi")==0 || event.body.indexOf("🥵🥵🥵")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে 𝗦𝗛𝗨𝗩𝗢 𝗕𝗢𝗦𝗦 চু*দা বাদ দিছে🥹🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
