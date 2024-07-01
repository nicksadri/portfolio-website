const hellos = ["Hello", "سلام", "Hola", "你好", "Bonjour", "नमस्ते"];

let curr = 1;
function changeLanguages() {
    helloText = document.getElementById("changing-languages");

    helloText.style.opacity = 0;
    setTimeout(() => {
        helloText.textContent=hellos[curr];
        helloText.style.opacity = 1;
        curr = (curr + 1) % hellos.length;
    }, 750);
    
}

var timer = window.setInterval(changeLanguages, 3000);