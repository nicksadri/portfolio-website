const hellos = ["Hello", "سلام", "Hola", "你好", "Bonjour", "नमस्ते"];

let curr = 1;
function changeLanguages() {
    helloText = document.getElementById("changing-languages");

    helloText.textContent=hellos[curr];

    curr = (curr + 1) % hellos.length;
}

var timer = window.setInterval(changeLanguages, 3000);