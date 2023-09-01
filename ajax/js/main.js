document.getElementById("send-btn").addEventListener("click", function () {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", "harry.txt", true);

	xhr.onprogress = function () {
		console.log("On progress");
	};
	xhr.onload = function () {
		console.log(this.responseText);
	};
	xhr.send();
});
