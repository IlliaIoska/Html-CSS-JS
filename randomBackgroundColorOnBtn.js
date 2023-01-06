const form = document.querySelector("form");

function getRundomColor() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;
    return `rgb(${red}, ${green}, ${blue})`;
}

function createButton() {
    for(let i = 0; i < 50; i++) {
        const btn = document.createElement("button");
        btn.style.padding = "30px";
        btn.style.margin = "5px";
        btn.innerText = "Button";
        document.body.insertAdjacentElement("afterend", btn);
    }
}

createButton();

function applyRandomColor(tag) {  
    const tags = document.querySelectorAll(tag);
    for(let tag of tags) {
        tag.addEventListener("click", function () {
            this.style.backgroundColor = getRundomColor();
        })
    }
}

applyRandomColor("button");


