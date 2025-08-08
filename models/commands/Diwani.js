const axios = require("axios");

module.exports.config = {
  name: "nano",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AK",
  description: "AK47 create this file without prefix",
  commandCategory: "no prefix",
  usages: "no prefix",
  cooldowns: 2
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;

  if (!body || senderID == api.getCurrentUserID()) return;

  // Message must include the word "bot" (you can change this condition)
  if (body.toLowerCase().includes("diwani")) {
    try {
      const res = await axios.post("YOUR-API-KEY", {
        message: body
      });

      if (!res.data || !res.data.reply) {
        return api.sendMessage("⚠️ Gemini API ne sahi reply nahi diya.", threadID, messageID);
      }

      return api.sendMessage("❤️" + res.data.reply, threadID, messageID);
    } catch (error) {
      console.error("Gemini API error:", error.message);
      return api.sendMessage("⚠️ Gemini API mein kuch issue aaya hai: " + error.message, threadID, messageID);
    }
  }
};

module.exports.run = async function () {
  return;
};
