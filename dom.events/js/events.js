function makeRed() {
	document.body.style.backgroundColor = "red";
}
const makeYellow = document.getElementById("make-yellow");
makeYellow.onclick = yellowButton;
function yellowButton() {
	document.body.style.backgroundColor = "yellow";
}
const makePink = document.getElementById("make-pink");
makePink.onclick = function pinkButton() {
	document.body.style.backgroundColor = "pink";
};
const makePurple = document.getElementById("make-purple");
makePurple.addEventListener("click", purpleButton);
function purpleButton() {
	document.body.style.backgroundColor = "purple";
}
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function greenButton() {
	document.body.style.backgroundColor = "green";
});
document.getElementById("make-golden").addEventListener("click", function () {
	document.body.style.backgroundColor = "goldenrod";
});
