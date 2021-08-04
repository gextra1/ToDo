const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.querySelector("ul");
const cleanerButton = document.getElementById("clear");

const removeParent = (event) => event.target.parentElement.remove();

const checked = (event) => event.target.classList.toggle("done");

const createElement = () => {
        const li = document.createElement("li");
        li.textContent = `${input.value} `;
        const destructor = document.createElement("button");
        destructor.textContent="delete";
        destructor.addEventListener("click", removeParent)
        li.appendChild(destructor);
        li.classList.add('done');
        li.classList.toggle('done');
        li.addEventListener('click', checked)
        list.appendChild(li);
        input.value = "";
}

button.addEventListener("click", createElement);

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        createElement();
    }
})

cleanerButton.addEventListener("click", () => {
    list.textContent = "";
})