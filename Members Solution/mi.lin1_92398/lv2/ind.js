
let like = 0;

const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");

likeBtn.addEventListener("click", function () {
    like++;
    likeCount.innerHTML = like;
});


const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Veuillez saisir une tâche !");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Supprimer";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});

const form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // empêcher l'envoi

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (name === "" || email === "") {
        alert("Tous les champs sont obligatoires !");
    } else {
        alert("Formulaire envoyé avec succès !");
    }
});
