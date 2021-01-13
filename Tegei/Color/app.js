
var font_size = 800;

function complete0() {
    const o = document.getElementById("box0");
    o.style.width = font_size * Math.random() + "px";
    o.style.height = font_size * Math.random() + "px";
    o.style.top = font_size * Math.random() + "px";
    o.style.left = font_size * Math.random() + "px";
    o.style.fontSize = font_size * Math.random() + "px";
    o.style.background = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

function complete1() {
    const o = document.getElementById("box1");
    o.style.width = font_size * Math.random() + "px";
    o.style.height = font_size * Math.random() + "px";
    o.style.top = font_size * Math.random() + "px";
    o.style.left = font_size * Math.random() + "px";
    o.style.fontSize = font_size * Math.random() + "px";
    o.style.background = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

function complete2() {
    const o = document.getElementById("box2");
    o.style.width = font_size * Math.random() + "px";
    o.style.height = font_size * Math.random() + "px";
    o.style.top = font_size * Math.random() + "px";
    o.style.left = font_size * Math.random() + "px";
    o.style.fontSize = font_size * Math.random() + "px";
    o.style.background = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

function complete3() {
    const o = document.getElementById("box3");
    o.style.width = font_size * Math.random() + "px";
    o.style.height = font_size * Math.random() + "px";
    o.style.top = font_size * Math.random() + "px";
    o.style.left = font_size * Math.random() + "px";
    o.style.fontSize = font_size * Math.random() + "px";
    o.style.background = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

function complete4() {
    const o = document.getElementById("box4");
    o.style.width = font_size * Math.random() + "px";
    o.style.height = font_size * Math.random() + "px";
    o.style.top = font_size * Math.random() + "px";
    o.style.left = font_size * Math.random() + "px";
    o.style.fontSize = font_size * Math.random() + "px";
    o.style.background = "rgba(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

setInterval(complete0, 100);
setInterval(complete1, 200);
setInterval(complete2, 100);
setInterval(complete3, 150);
setInterval(complete4, 180);
