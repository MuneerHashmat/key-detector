let keyPressed = document.getElementById("key");
let keyCode = document.getElementById("keycode");

window.addEventListener("keydown", (e) => {
    keyPressed.innerHTML = `The key pressed is <span>${e.key}</span>`;
    keyCode.innerHTML = `<span>${e.keyCode}</span>`
    console.log(e);
});