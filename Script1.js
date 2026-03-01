let colors = ["red", "blue", "green", "orange", "purple"];
let tiles = document.getElementsByClassName("tile");
let score = 0;
let targetColor = "";

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function newRound() {
    // Choose the color to match
    targetColor = randomColor();

    // Choose two positions that will have the same color
    let sameIndex1 = Math.floor(Math.random() * 4);
    let sameIndex2;
    do {
        sameIndex2 = Math.floor(Math.random() * 4);
    } while (sameIndex1 === sameIndex2);

    // Assign colors
    for (let i = 0; i < tiles.length; i++) {
        if (i === sameIndex1 || i === sameIndex2) {
            tiles[i].style.backgroundColor = targetColor;
        } else {
            tiles[i].style.backgroundColor = randomColor();
        }
    }
}

function tileClick(index) {
    let clickedColor = tiles[index].style.backgroundColor;

    if (clickedColor === targetColor) {
        score += 10;
    } else {
        score -= 5;
    }

    document.getElementById("score").innerText = "Score: " + score;
}
