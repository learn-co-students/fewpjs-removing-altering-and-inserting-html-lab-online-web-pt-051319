// Write your code here!

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "YOUR-NAME is the champion"

document.head.appendChild(newHeader);

let element = document.querySelector("main#main");
element.remove();