const h1 = document.querySelector("h1");
const h2 = document.createElement("h2");
h1.append(h2);
h1.addEventListener("click", function () { 
    const red = Math.random() * 256;
    const green = Math.random() * 256;
    const blue = Math.random() * 256;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    h2.innerText = `rgb(${red}, ${green}, ${blue}`;
});