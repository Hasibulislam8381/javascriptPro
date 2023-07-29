function myButton() {
	document.getElementById("change-click").innerText =
		"Onclicked function clicked";
}
document.getElementById("eventListener").addEventListener("click", function () {
	document.getElementById("change-click").innerText =
		"click from EventListener";
});
document.getElementById("submit").addEventListener("click", function () {
	document.getElementById("student-form").innerText =
		document.getElementById("input").value;
	document.getElementById("input").value = "";
});
