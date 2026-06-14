let btn = document.querySelector("#btn");
let h2 = document.querySelector("#colorCode");
let box = document.querySelector("#box");

btn.addEventListener("click", () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    h2.innerText = color;
    h2.style.color = color;

    box.style.backgroundColor = color;

});