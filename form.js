const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputQty = form.elements["qty"];
    const inputProduct = form.elements["product"];
    const li = document.createElement("li");
    const ul = document.querySelector("#list");
    li.innerText = `${inputQty.value} ${inputProduct.value}`;
    ul.appendChild(li);
    inputQty.value = "";
    inputProduct.value = "";
});