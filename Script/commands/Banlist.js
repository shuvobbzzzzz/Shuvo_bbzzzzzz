module.exports.config = {
  name: "banlist",
  version: "2.0.0",
  hasPermssion: 2,
  credits: "🔰𝗥𝗮𝗵𝗮𝘁_𝗜𝘀𝗹𝗮𝗺🔰",
  description: "Show all banned users and allow unban by replying number",
  commandCategory: "group",
  usages: "banlist",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Users }) => {
  const { threadID } = event;
  const bannedUsers = global.data.userBanned;

  if (!bannedUsers || bannedUsers.size === 0)
    return api.sendMessage("✅ Currently no users are banned.", threadID);

  let msg = `🔰𝗥𝗮𝗵𝗮𝘁_𝗕𝗼𝘁🔰\n📋 Banned Users List (${bannedUsers.size} total):\n\n`;
  let userList = [];
  let count = 0;

  for (let [id, info] of bannedUsers) {
    count++;
    const name = global.data.userName.get(id) || await Users.getNameUser(id);
    const date = info.dateAdded || "Unknown date";
    msg += `${count}. ${name} (${id})\n🕒 Banned on: ${date}\n\n`;
    userList.push({ id, name });
  }

  msg += "↩️ Reply with the number to unban that user.";

  // Send the message and store the list for reply handling
  return api.sendMessage(msg, threadID, (err, info) => {
    if (err) return console.error(err);
    global.client.handleReply.push({
      name: module.exports.config.name,
      messageID: info.messageID,
      author: event.senderID,
      userList
    });
  });
};

// Handle reply for unbanning
module.exports.handleReply = async ({ api, event, handleReply, Users }) => {
  const { threadID, senderID, body } = event;

  // Only the person who ran the command can reply
  if (senderID !== handleReply.author)
    return api.sendMessage("⚠️ Only the command user can reply to this message!", threadID, event.messageID);

  const choice = parseInt(body);
  if (isNaN(choice) || choice < 1 || choice > handleReply.userList.length)
    return api.sendMessage("❌ Invalid number! Please reply with a valid user number.", threadID, event.messageID);

  const target = handleReply.userList[choice - 1];
  try {
    let data = (await Users.getData(target.id)).data || {};
    if (!data.banned)
      return api.sendMessage(`ℹ️ User ${target.name} is not currently banned.`, threadID, event.messageID);

    data.banned = false;
    await Users.setData(target.id, { data });
    global.data.userBanned.delete(target.id);

    return api.sendMessage(`✅ Successfully unbanned: ${target.name} (${target.id})`, threadID, event.messageID);
  } catch (e) {
    console.error("Unban reply error:", e);
    return api.sendMessage("❌ Failed to unban user. Try again later.", threadID);
  }
};
