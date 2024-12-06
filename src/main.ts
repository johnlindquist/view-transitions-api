import "./style.css";

const messages = [
	"Hello, world! 👋",
	"How are you? 😊",
	"View Transitions are cool! ✨",
	"Try clicking again! 🔄",
];

let currentIndex = 0;

const button = document.querySelector("#button") as HTMLButtonElement;
const content = document.querySelector("#content") as HTMLDivElement;

button.addEventListener("click", () => {
	if (!document.startViewTransition) {
		alert("Your browser doesn't support the View Transitions API");
		return;
	}

	const transition = document.startViewTransition(() => {
		currentIndex = (currentIndex + 1) % messages.length;
		content.textContent = messages[currentIndex];
	});

	transition.ready.then(() => {
		// Visibly disable the button
		button.style.pointerEvents = "none";
		button.style.opacity = "0";
	});

	transition.finished.then(() => {
		// Re-enable the button
		button.style.pointerEvents = "auto";
		button.style.opacity = "1";
	});
});
