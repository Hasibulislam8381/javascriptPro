// const bokor = document.getElementById("bokor");
// const li = document.createElement("li");
// li.innerText = "My name is Khan";
// bokor.appendChild(li);

const mainContent = document.getElementById("main-content");

//add section

const section1 = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My food";
section1.appendChild(h1);

const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "Apple";
ul.appendChild(li);

const li2 = document.createElement("li");
li2.innerText = "Banana";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Graps";
ul.appendChild(li3);

section1.appendChild(ul);
mainContent.appendChild(section1);
