let keyPressed = document.getElementById("key");
let keyCode = document.getElementById("keycode");
let sound = document.getElementById("sound");

window.addEventListener("keydown", (e) => {
    sound.play();
    keyPressed.innerHTML = `The key pressed is <span>${e.key}</span>`;
    keyCode.innerHTML = `<span>${e.keyCode}</span>`;
});