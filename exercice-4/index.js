window.addEventListener("DOMContentLoaded", () => {
    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];
    let ul = document.createElement("ul");
    for (let list of todos) {
        let li = document.createElement("li");
        li.textContent = list;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
});
