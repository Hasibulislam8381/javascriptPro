const song = "Tumi bondhu kala pakhi ami jeno ki";
const res = song.includes("Pakhi");
console.log(res);

const res1 = song.indexOf("Tumi");
console.log(res1);
if (song.indexOf("Kala") != -1) {
	console.log("Yes,exist");
} else {
	console.log("Does not exist");
}
