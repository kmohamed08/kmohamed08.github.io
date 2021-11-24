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



function json(url) {
  return fetch(url).then(res => res.json());
}

let apiKey = '63ee8c011c6283393efec5d56d29a784997e40358d997a8fa79e9942';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.country_code);
  // so many more properties
  var ip = data.ip;
  var city = data.city;
  var ccode = data.country_code;
});




var data = JSON.stringify({
  "name": "Karim",
  "age": 30
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://webhook.site/d25c3833-a31c-4eed-bded-5a03a0570b96");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);


