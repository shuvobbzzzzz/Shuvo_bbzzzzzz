const f = require("fs-extra");
const p = require("path");
const a = require("axios");

module.exports.config = {
  name: "cmd",
  version: "0.0.1",
  hasPermssion: 2,
  credits: "ArYAN",
  description: "Manage commands install, load, unload",
  commandCategory: "system",
  usages: "cmd install , load ,unload, loadall",
  cooldowns: 3
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID: t, messageID: m } = event;
  const d = p.join(__dirname);

  if (args[0] === "install") {
    if (!args[1]) return api.sendMessage("⚠️ | Please enter the file name to save (with .js extension)", t, m);
    if (!args[2]) return api.sendMessage("⚠️ | Please enter the url or code of the command file you want to install", t, m);
    const n = args[1];
    const fp = p.join(d, n);
    try {
      let c;
      if (args[2].startsWith("http")) {
        const r = await a.get(args[2]);
        c = r.data;
      } else {
        c = args.slice(2).join(" ");
      }
      await f.writeFile(fp, c, "utf8");
      delete require.cache[require.resolve(fp)];
      global.client.commands.set(n.replace(".js", ""), require(fp));
      return api.sendMessage(`✅ | Installed & loaded command "${n}" successfully\nSaved at: ${fp}`, t, m);
    } catch (e) {
      return api.sendMessage(`❌ | Failed to install command "${n}"\n${e.name}: ${e.message}`, t, m);
    }
  }

  if (args[0] === "load") {
    if (!args[1]) return api.sendMessage("⚠️ | Please enter the command name you want to load", t, m);
    const n = args[1];
    const fp = p.join(d, n);
    if (!f.existsSync(fp)) return api.sendMessage(`⚠️ | Command file "${n}" not found`, t, m);
    try {
      delete require.cache[require.resolve(fp)];
      global.client.commands.set(n.replace(".js", ""), require(fp));
      return api.sendMessage(`✅ | Loaded command "${n}" successfully`, t, m);
    } catch (e) {
      return api.sendMessage(`❌ | Failed to load command "${n}"\n${e.name}: ${e.message}`, t, m);
    }
  }

  if (args[0] === "unload") {
    if (!args[1]) return api.sendMessage("⚠️ | Please enter the command name you want to unload", t, m);
    const n = args[1];
    const fp = p.join(d, n);
    if (!f.existsSync(fp)) return api.sendMessage(`⚠️ | Command file "${n}" not found`, t, m);
    try {
      delete require.cache[require.resolve(fp)];
      global.client.commands.delete(n.replace(".js", ""));
      return api.sendMessage(`✅ | Unloaded command "${n}" successfully`, t, m);
    } catch (e) {
      return api.sendMessage(`❌ | Failed to unload command "${n}"\n${e.name}: ${e.message}`, t, m);
    }
  }

  if (args[0] === "loadall") {
    try {
      const files = f.readdirSync(d).filter(x => x.endsWith(".js") && x !== "cmd.js");
      let s = 0, fl = 0;
      for (const x of files) {
        const fp = p.join(d, x);
        try {
          delete require.cache[require.resolve(fp)];
          global.client.commands.set(x.replace(".js", ""), require(fp));
          s++;
        } catch {
          fl++;
        }
      }
      return api.sendMessage(`✅ | Loaded ${s} commands successfully`, t, m);
    } catch (e) {
      return api.sendMessage(`❌ | Failed to load all commands\n${e.name}: ${e.message}`, t, m);
    }
  }

  return api.sendMessage("⚠️ | Invalid usage. Use: cmd [install/load/unload/loadall]", t, m);
};
