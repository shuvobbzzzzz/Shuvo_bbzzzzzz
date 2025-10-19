module.exports = function ({ models, api }) {
  const Users = models.use('Users');

  async function getInfo(id) {
    try {
      const info = await api.getUserInfo(id);
      return info[id] || { name: `Unknown User (${id})` };
    } catch (e) {
      console.error("getInfo error:", e);
      return { name: `Unknown User (${id})` };
    }
  }

  async function getNameUser(id) {
    try {
      // 1️⃣ Cached name
      if (global.data.userName.has(id)) return global.data.userName.get(id);

      // 2️⃣ Database name
      const data = await this.getData(id);
      if (data && data.name) return data.name;

      // 3️⃣ API
      const info = await api.getUserInfo(id);
      if (info[id] && info[id].name) return info[id].name;

      // 4️⃣ fallback
      return `Unknown User (${id})`;
    } catch (e) {
      console.error("getNameUser error:", e);
      return `Unknown User (${id})`;
    }
  }

  async function getAll(...data) {
    let where, attributes;
    for (const i of data) {
      if (typeof i !== 'object') throw global.getText("users", "needObjectOrArray");
      if (Array.isArray(i)) attributes = i;
      else where = i;
    }
    try {
      return (await Users.findAll({ where, attributes })).map(e => e.get({ plain: true }));
    } catch (error) {
      console.error("getAll error:", error);
      throw new Error(error);
    }
  }

  async function getData(userID) {
    try {
      const data = await Users.findOne({ where: { userID } });
      if (data) return data.get({ plain: true });
      return false;
    } catch (error) {
      console.error("getData error:", error);
      throw new Error(error);
    }
  }

  async function setData(userID, options = {}) {
    if (typeof options !== 'object' && !Array.isArray(options)) throw global.getText("users", "needObject");
    try {
      const user = await Users.findOne({ where: { userID } });
      if (user) await user.update(options);
      else await this.createData(userID, options);
      return true;
    } catch (error) {
      console.error("setData error:", error);
      throw new Error(error);
    }
  }

  async function delData(userID) {
    try {
      const user = await Users.findOne({ where: { userID } });
      if (user) await user.destroy();
      return true;
    } catch (error) {
      console.error("delData error:", error);
      throw new Error(error);
    }
  }

  async function createData(userID, defaults = {}) {
    if (typeof defaults !== 'object' && !Array.isArray(defaults)) throw global.getText("users", "needObject");
    try {
      await Users.findOrCreate({ where: { userID }, defaults });
      return true;
    } catch (error) {
      console.error("createData error:", error);
      throw new Error(error);
    }
  }

  return {
    getInfo,
    getNameUser,
    getAll,
    getData,
    setData,
    delData,
    createData
  };
};
