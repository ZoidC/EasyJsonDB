import { getDatabaseContent, postContentToDatabase, removeToDatabase } from "./api.js";

// Elements
const resultGet = document.getElementById("resultGet");
const toRemove = document.getElementById("toRemove");
const buttonPost = document.getElementById("buttonPost");
const buttonDelete = document.getElementById("buttonDelete");

// Events
buttonPost.addEventListener("click", (e) => {
    postContentToDatabase();
});
buttonDelete.addEventListener("click", (e) => {
    e.preventDefault();
    removeToDatabase(toRemove.value);
});

// Main
getDatabaseContent().then((result) => {
    refreshList(resultGet, result);
});

// Functions
const refreshList = (parent, result) => {
    let ul = document.createElement("ul");
    result.forEach((item) => {
        let li = document.createElement("li");
        for (const key in item) {
            li.innerHTML += `${li.innerHTML.length > 0 ? " • " : ""}${key} : ${item[key]}`;
        }
        ul.appendChild(li);
    });
    parent.appendChild(ul);
};