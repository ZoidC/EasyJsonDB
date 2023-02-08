import { getDatabaseContent, postContentToDatabase, removeToDatabase } from "./api.js";

// Elements
const addForm = document.querySelectorAll("#addForm input");
const addButton = document.getElementById("addButton");

const removeForm = document.querySelectorAll("#removeForm input");
const removeButton = document.getElementById("removeButton");

const resultGet = document.getElementById("resultGet");

// Events
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    postContentToDatabase(convertNodeToObject(addForm));
});

removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    removeToDatabase(convertNodeToObject(removeForm));
});

// Main
getDatabaseContent().then((result) => {
    refreshList(resultGet, result);
});

// Functions
const convertNodeToObject = (node) => {
    return Array.from(node).reduce((result, input) => {
        return {
            ...result,
            [input.id]: input.value
        };
    }, {});
};

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