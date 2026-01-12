window.addEventListener('DOMContentLoaded', function() {


let boxes = document.querySelectorAll('#game-board div');


for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {

        
        this.textContent = "X";

        
        for (let pc = 0; pc < boxes.length; pc++) {
            if (boxes[pc].textContent === "") {
                boxes[pc].textContent = "O";
                break;
            }
        }

    });
}

let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
    }
});
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function win(player) {
    for (let i = 0; i < winCombos.length; i++) {
        let [a,b,c] = winCombos[i];
        if (
            boxes[a].textContent === player &&
            boxes[b].textContent === player &&
            boxes[c].textContent === player
        ) {
            return true;
        }
    }
    return false;
}

function isDraw() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === "") return false;
    }
    return true;
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        if (win("X")) {
            alert("Vous avez gagné !");
            return;
        } else if (win("O")) {
            alert("Vous avez perdu !");
            return;
        } else if (isDraw()) {
            alert("Égalité !");
            return;
        }
    });
}

});
