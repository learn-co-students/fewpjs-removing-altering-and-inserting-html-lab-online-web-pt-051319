// Write your code here!

document.querySelector("main").remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "is the champion";
document.querySelector("h1").appendChild(newHeader);
