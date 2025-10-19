module.exports.config = {
  name: "ban",
  version: "2.5.0",
  hasPermssion: 2,
  credits: "SHAHADAT SAHU + Fixed by 🔰𝗥𝗮𝗵𝗮𝘁_𝗜𝘀𝗹𝗮𝗺🔰",
  description: "Ban or unban a user directly, works on reply and tag too",
  commandCategory: "group",
  usages: `${global.config.PREFIX}ban <UID/@tag>\n${global.config.PREFIX}unban <UID/@tag>`,
  cooldowns: 5
};

module.exports.languages = {
  "en": {
    "banSuccess": "✅ [ Ban User ] Successfully banned: %1",
    "unbanSuccess": "✅ [ Unban User ] Successfully unbanned: %1",
    "errorReponse": "❌ %1 Something went wrong while processing your request.",
    "IDNotFound": "⚠️ [ User System ] The user ID you provided doesn't exist or couldn't be added to database.",
    "notBanned": "ℹ️ [ Unban User ] User %1 is not currently banned.",
    "invalidUID": "⚠️ Invalid UID! Please check and try again.",
    "usage": "Usage:\nban <UID/@tag> or reply to a user's message\nunban <UID/@tag> or reply to a user's message"
  }
};

module.exports.run = async ({ event, api, args, Users, getText }) => {
  const { threadID, messageID, messageReply } = event;

  if (!args[0] && !messageReply)
    return api.sendMessage(getText("usage"), threadID, messageID);

  // Extract command name (ban/unban)
  const command = event.body.split(" ")[0].slice(global.config.PREFIX.length).toLowerCase();
  let targetID;

  // Detect target user
  if (messageReply) {
    targetID = messageReply.senderID;
  } else if (Object.keys(event.mentions).length > 0) {
    targetID = Object.keys(event.mentions)[0];
  } else {
    targetID = args[0];
  }

  // Validate target ID
  if (!targetID)
    return api.sendMessage("⚠️ Please mention, reply, or give a valid UID!", threadID, messageID);
  if (isNaN(targetID))
    return api.sendMessage(getText("invalidUID"), threadID, messageID);

  // 🔍 Step 1: Ensure user exists in database
  try {
    if (!global.data.allUserID.includes(targetID)) {
      // Auto add user if missing
      const name = await Users.getNameUser(targetID);
      await Users.createData(targetID, { name, data: {} });
      global.data.allUserID.push(targetID);
      global.data.userName.set(targetID, name);
    }
  } catch (e) {
    console.error("User registration error:", e);
    return api.sendMessage(getText("IDNotFound"), threadID, messageID);
  }

  const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);

  // 🔒 Step 2: Ban or Unban logic
  if (command === "ban") {
    try {
      let userData = (await Users.getData(targetID)).data || {};
      userData.banned = true;

      await Users.setData(targetID, { data: userData });
      global.data.userBanned.set(targetID, {
        reason: null,
        dateAdded: new Date().toLocaleString("en-GB", { timeZone: "Asia/Dhaka" })
      });

      return api.sendMessage(getText("banSuccess", `${targetID} - ${nameTarget}`), threadID, messageID);
    } catch (e) {
      console.error("Ban error:", e);
      return api.sendMessage(getText("errorReponse", "[ Ban User ]"), threadID);
    }
  }

  else if (command === "unban") {
    try {
      let userData = (await Users.getData(targetID)).data || {};
      if (!userData.banned)
        return api.sendMessage(getText("notBanned", `${targetID} - ${nameTarget}`), threadID);

      userData.banned = false;
      await Users.setData(targetID, { data: userData });
      global.data.userBanned.delete(targetID);

      return api.sendMessage(getText("unbanSuccess", `${targetID} - ${nameTarget}`), threadID, messageID);
    } catch (e) {
      console.error("Unban error:", e);
      return api.sendMessage(getText("errorReponse", "[ Unban User ]"), threadID);
    }
  }

  else {
    return api.sendMessage(getText("usage"), threadID, messageID);
  }
};
