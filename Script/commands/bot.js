const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "এত ডাকিস কেন? গালি শুনবি নাকি? 🤬",
    "হুম জান তোমার ওই খানে উম্মহ😘",
    "Hop beda😾 Boss বল boss😼",
    "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋",
    "আর ডাকিস না, প্রেমে পড়ে যাবো কিন্তু 🙈",
    "কি গো কলিজা তোমার কি মন খারাপ🥺",
    "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘",
    "তুই আমারে ডাকলি, আমি আসলাম তোরে চুমু খাইতে 😘",
    "তোর জালায় আমি শেষ",
  ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘  🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "help") || (event.body.toLowerCase() == "help")) {
     return api.sendMessage("type /help", threadID);
   };
  
   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("simsimi কমান্ড এড় নাই টাইপ করুন baby", threadID);
   };
  
   if ((event.body.toLowerCase() == "ওই কিরে") || (event.body.toLowerCase() == "oi keray") ||(event.body.toLowerCase() == "...") || (event.body.toLowerCase() == "...")) {
     return api.sendMessage("মধু মধু রসমালাই 🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "💋")) {
     return api.sendMessage("কিরে হালা লুচ্চা, এগুলো কি ইমুজি দেস ।", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "বাল") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "muhid") || (event.body.toLowerCase() == "muhid bai") || (event.body.toLowerCase() == "@Muhit ッ") || (event.body.toLowerCase() == "মুহিত")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "malik")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞ Muhit ッ ☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ullash.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100061283905511\nতার সাতে যোগা যোগ করবেন tg :-@TXD_MUHID", threadID);
   };

   if ((event.body.toLowerCase() == "Tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:Muhid ❤️ হাই আমি মেছেন্জার ROBOT  আামার বস মুহিত আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "ceo") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is মুহিত ッ❤️ তাকে সবাই মুহিত নামে  চিনে🤙.তার ফুল ইনফু জানতে admin লিখুন", threadID);
   };

   if ((event.body.toLowerCase() == "ai") || (event.body.toLowerCase() == "Ai")) {
     return api.sendMessage("If you want to use the AI command, type /ai ", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ চুপ কর পাগল ছাগল", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "tor boss txd") || (event.body.toLowerCase() == "sala ami muhid") || (event.body.toLowerCase() == "cup ami muhid") || (event.body.toLowerCase() == "stop")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@Muhid Islam Sunny") || (event.body.toLowerCase() == "@Muhid Islam Sunny ")) {
     return api.sendMessage("কি গো মুহিদ এর খবর কেন😠🥰⛏️", threadID);
   };

  if ((event.body.toLowerCase() == "@Muhid Islam Sunny ") || (event.body.toLowerCase() == "sunny")) {
     return api.sendMessage("🥰-sunny-🌺 আমার বস মুহিত'র বন্ধু লাগে লুচ্ছি বেডি'রা দূরে থাক😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "....") || (event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "হুম") || (event.body.toLowerCase() == "Hmm")) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS [ / ] •❦ 𝚂Ꭵ𝙶ɱꪖ ☣ 𝕭𝖔t모", threadID);
   };

   if ((event.body.toLowerCase() == "muhid ER BACCHA") || (event.body.toLowerCase() == "Muhid er bacca")) {
     return api.sendMessage("️muhid vaire kew gali dis kn , tore ki soytane lare!!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss daw")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if ((event.body.toLowerCase() == "cipay") || (event.body.toLowerCase() == "bakira cipay")) {
     return api.sendMessage("️এদের কাদের সাথে আমি থাকি রে বাবা , ভাগ্য ভাল আজ পেয়াম করি নাই😒", threadID);
   };

   if ((event.body.toLowerCase() == "oi") || (event.body.toLowerCase() == "hey") || (event.body.toLowerCase() == "হেই ")) {
     return api.sendMessage("sob jaigay emon kore daka tik na sona 🥺", threadID);
   };

   if ((event.body.toLowerCase() == "তুমি করবে?") || (event.body.toLowerCase() == "tumi korbe?")) {
     return api.sendMessage("️হুম করব গফ এর সাথে আমার বস মুহিত আইডি টা দাও😁😁", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে না দেখে আমার দিকে তাকালেই তো পার😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইতে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না তোর দাঁত খুলে পরবে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা বলদা🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "kmon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️,তুমি কেমন আছো??", threadID);
   };
   
   if ((event.body.toLowerCase() == "tumi kothay") || (event.body.toLowerCase() == "kothay") || (event.body.toLowerCase() == "where are you")) {
     return api.sendMessage("আমি তোমার কাছে,তুমি কোথায়?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ke") || (event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "tumi ke?")) {
     return api.sendMessage("আমি তোমার মেসেঞ্জার বট,তোমার বন্ধু🤖", threadID);
   };

   if ((event.body.toLowerCase() == "tumi kothay thako") || (event.body.toLowerCase() == "kothay thako") || (event.body.toLowerCase() == "where do you live")) {
     return api.sendMessage("আমি তোমার মেসেঞ্জারে থাকি,তুমি কোথায় থাকো?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Alhamdulillah valo") || (event.body.toLowerCase() == "আলহামদুলিল্লাহ") || (event.body.toLowerCase() == "valo") || (event.body.toLowerCase() == "ভালো") ) {
        return api.sendMessage("ভালো থাকো,তুমি হাসলে আমিও হাসি🥰", threadID);
    };
   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmar ki mon kharap") || (event.body.toLowerCase() == "তোমার মন খারাপ") ) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("বুজি বুজি নতুন নতুন সবাই লাপায় 😪🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tumi khaiso") || (event.body.toLowerCase() == "khaicho") || (event.body.toLowerCase() == "খাওয়া করছ")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho") || (event.body.toLowerCase() == "তুমি কি আমাকে ভালোবাসো")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "me_txd") || (event.body.toLowerCase() == "txd")) {
     return api.sendMessage("বস এত দেরি করলা কেন এরা আমাকে মেরে ফেলতাছিল..?☺️", threadID);
   };

   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "Baby")) {
     return api.sendMessage("হুম সোনা বলো কি খাইতে ইচ্ছা করছে🥰", threadID);
   };

    if ((event.body.toLowerCase() == "tumi amar ki") || (event.body.toLowerCase() == "তুমি আমার কি লাগো") || (event.body.toLowerCase() == "tumi amar ki lagho")) {
        return api.sendMessage("আমি তোমার ওইটা লাগি সনা", threadID);
    };

   if ((event.body.toLowerCase() == "কোথায় যাবে") || (event.body.toLowerCase() == "koi jaba") || (event.body.toLowerCase() == "where will you go")) {
     return api.sendMessage("আমি তো তোমার সাতে থাকবো,তুমি কোথায় যাবে?🥹", threadID);
   };

   if ((event.body.toLowerCase()== "khaoya korcho") || (event.body.toLowerCase() == "খাওয়া করছো") || (event.body.toLowerCase() == "খাওয়া হইছে")) {
        return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
    };

    if ((event.body.toLowerCase() == "tumi ki muhid k cino") || (event.body.toLowerCase() == "তুমি কি মুহিত কে চিনো") || (event.body.toLowerCase() == "মুহিত তোমার কি হয়")) {
        return api.sendMessage("আরে ওটা আমার জানু লাগে জানু , ওর জন্নে আমি এখন তমার সাথে কথা বলি", threadID);
    };

    if ((event.body.toLowerCase() == "muhid koi ") || (event.body.toLowerCase() == "মুহিত কই") || (event.body.toLowerCase() == "সানি কই")) {
        return api.sendMessage("ওই মনে হয় বাইরে গেছে আসলে তমাকে জানাব", threadID);
    };



  mess = "{name}"
  
  if (event.body.indexOf("/sunny") == 0 || (event.body.indexOf("/bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
