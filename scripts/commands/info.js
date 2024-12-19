module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : ᴍᴅ ᴋʜᴀɪʀᴜʟ ɪꜱʟᴀᴍ ᴍᴏꜱᴀᴅᴅᴇᴋ
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : ᴍᴅ ᴋʜᴀɪʀᴜʟ ɪꜱʟᴀᴍ ᴍᴏꜱᴀᴅᴅᴇᴋ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : ɪꜱʟᴀᴍ
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: ʙʀᴀʜᴍᴀɴʙᴀʀɪᴀ, ʙᴀɴɢʟᴀᴅᴇꜱʜ
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: ʙʀᴀʜᴍᴀɴʙᴀʀɪᴀ, ʙᴀɴɢʟᴀᴅᴇꜱʜ
𝐆𝐞𝐧𝐝𝐞𝐫.   : ᴍᴀʟᴇ
𝐀𝐠𝐞           : 18+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : ꜱɪɴɢʟᴇ
𝐖𝐨𝐫𝐤        : ꜱᴛᴜᴅᴇɴᴛ
𝐆𝐦𝐚𝐢𝐥       : ᴠɪʀᴜꜱᴍᴀᴅᴇʙʏᴍᴜɴ@ɢᴍᴀɪʟ.ᴄᴏᴍ
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801639067878
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/KIM_MOSADDEK
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100057845471745`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100057845471745/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
