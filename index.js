//document.getElementById("count").innerText=5;

let count = 0
let saveEl = document.getElementById("save-el");
let savedEl = document.getElementById("saved-el");
let countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    savedEl.textContent += " " + count;
    count = 0;
    countEl.textContent = count;
}