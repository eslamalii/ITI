var info = document.cookie.split(";");

var r = parseInt(info[4].split("=")[1]);

var w = document.getElementById("info");

img.src = `${info[2].split("=")[1]}.jpeg`;

w.innerHTML = `Your name is <span style="color:${info[3].split("=")[1]};}">${
  info[0].split("=")[1]
}</span>  , Your age is ${info[1].split("=")[1]}   Years, Your gender is ${
  info[2].split("=")[1]
}, <span style="color:${
  info[3].split("=")[1]
};}">${r}</span>  refreshing times `;

document.cookie = `count= ${++r}`;
