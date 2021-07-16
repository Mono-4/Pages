const question = ["↑", "→", "↓", "←"];
let q;
let count = -1;

const question_text = document.querySelector(".main__question");
const count_text = document.querySelector(".main__count");
const question_judge = document.querySelector(".main__judge");

function init() {
	let question_n = Math.floor(Math.random() * question.length);
	question_text.textContent = question[question_n];
	q = question[question_n];

	question_text.classList.add("question_green");

	setTimeout(function () {
		question_text.classList.remove("question_green");
	}, 200);

	count++;
	count_text.textContent = count;
}

document.body.addEventListener("keydown", (event) => {
	if (event.key === "p" && event.ctrlKey && q == question[0]) {
		init();
	} else if (event.key === "f" && event.ctrlKey && q == question[1]) {
		init();
	} else if (event.key === "n" && event.ctrlKey && q == question[2]) {
		init();
	} else if (event.key === "b" && event.ctrlKey && q == question[3]) {
		init();
	}
});

init();
