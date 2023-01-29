window.onload = function () {
	let font_size = document.getElementById("font_size");

	font_size.addEventListener("change", (e) => {
		document.getElementById("text").style.fontSize = font_size.value + "px";
	});

	let color_text = document.getElementById("color_text");
	color_text.addEventListener("change", (e) => {
		document.getElementById("text").style.color = color_text.value;
	});

	let color_bg = document.getElementById("color_bg");
	color_bg.addEventListener("change", (e) => {
		document.getElementById("body").style.backgroundColor = color_bg.value;
	});
};
