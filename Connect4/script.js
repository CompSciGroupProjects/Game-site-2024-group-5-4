let turn = "red"
let matrix = [];
let winner = false;
for (let i = 0; i < 6; i++) {
    matrix[i] = [];
    for (let j = 0; j < 7; j++)
        matrix[i][j] = "empty";
}
function clicked(x,y) {
    if (matrix[x][y] === "empty" && !(winner)) {
        while (x < 5 && matrix[x+1][y] === "empty")
            x++;
        if (turn === "red") {
            document.getElementById("row" + x + "col" + y).innerHTML = "<img src = 'images/redpiece.png' alt = 'red piece' style='height:100%; width: 100%;'>"
            turn = "yellow"
            document.getElementById("turns").innerHTML = "Yellow's turn"
            matrix[x][y] = "red";
        } else {
            document.getElementById("row" + x + "col" + y).innerHTML = "<img src = 'images/yellowpiece.png' alt = 'yellow piece' style='height: 100%; width: 100%;'>"
            turn = "red";
            document.getElementById("turns").innerHTML = "Red's turn"
            matrix[x][y] = "yellow";
        }
        checkWinner();
    }
}
function hoverCol(col) {
//     let rowNum = 5;
//     for (let row = 5; row < 0; row++) {
//         if (matrix[row][col] === "empty") {
//             rowNum = row;
//             break;
//         }
//     }
//     document.getElementById("row" + rowNum + "col" + col).innerHTML = "<img src = 'https://lh6.googleusercontent.com/proxy/2u8JACI6bBeCaamYijrU8jyhZGADPr2Px0MCGuWdzkubPwhW4T7PO40anM6ciozTRaelmP_1jIn9i9Qme59kqnm2Dg0-M2eEmtv9D7DBBxl3tSRX6hZCywdQgkdN9ZJSoYMxcg1AiWXCqhYY0TOTCgInHUd3' alt = 'hover' style='height: 100%; width: 100%;'>"
}
function checkWinner() {
    checkHor();
    checkVert();
    checkUpDiag();
    checkDownDiag();
    let tie = true;
    for (let col = 0; col <= 6; col++) {
        for (let row = 0; row <= 5; row++)
            if (matrix[row][col] === "empty")
                tie = false;
    }
    if (tie)
        document.getElementById("turns").innerHTML = "TIE!!!!"
}
function checkVert() {
    for (let col = 0; col <= 6; col++) {
        let redCt = 0;
        let yellowCt = 0;
        for (let row = 5; row >= 0; row--) {
            if (matrix[row][col] === "red") {
                redCt++;
                yellowCt = 0;
                if (redCt >= 4) {
                    document.getElementById("turns").innerHTML = "RED WINS!!!!"
                    winner = true;
                }
            }
            else if (matrix[row][col] === "yellow") {
                yellowCt++;
                redCt = 0;
                if (yellowCt >= 4) {
                    document.getElementById("turns").innerHTML = "YELLOW WINS!!!!"
                    winner = true;
                }
            }
            else {
                redCt = 0;
                yellowCt = 0;
            }
        }
    }
}
function checkHor() {
    for (let row = 0; row <= 5; row++) {
        let redCt = 0;
        let yellowCt = 0;
        for (let col = 6; col >= 0; col--) {
            if (matrix[row][col] === "red") {
                redCt++;
                yellowCt = 0;
                if (redCt >= 4) {
                    document.getElementById("turns").innerHTML = "RED WINS!!!!"
                    winner = true;
                }
            }
            else if (matrix[row][col] === "yellow") {
                yellowCt++;
                redCt = 0;
                if (yellowCt >= 4) {
                    document.getElementById("turns").innerHTML = "YELLOW WINS!!!!"
                    winner = true;
                }
            }
            else {
                redCt = 0;
                yellowCt = 0;
            }
        }
    }
}
function checkUpDiag() {
for (let col = 0; col <= 3; col++) {
    for (let row = 5; row > 2; row--) {
        let spot1 = matrix[row][col];
        let spot2 = matrix[row-1][col+1];
        let spot3 = matrix[row-2][col+2];
        let spot4 = matrix[row-3][col+3];
        if (spot1 === "red" && spot2 === "red" && spot3 === "red" && spot4 === "red") {
            document.getElementById("turns").innerHTML = "RED WINS!!!!"
            winner = true;
        }
        else if (spot1 === "yellow" && spot2 === "yellow" && spot3 === "yellow" && spot4 === "yellow") {
            document.getElementById("turns").innerHTML = "YELLOW WINS!!!!"
            winner = true;
        }
    }
}
}
function checkDownDiag() {
    for (let col = 0; col <= 3; col++) {
        for (let row = 0; row <= 2; row++) {
            if (matrix[row][col] === "red" && matrix[row+1][col+1] === "red" && matrix[row+2][col+2] === "red" && matrix[row+3][col+3] === "red") {
                document.getElementById("turns").innerHTML = "RED WINS!!!!"
                winner = true;
            }
            else if (matrix[row][col] === "yellow" && matrix[row+1][col+1] === "yellow" && matrix[row+2][col+2] === "yellow" && matrix[row+3][col+3] === "yellow") {
                document.getElementById("turns").innerHTML = "YELLOW WINS!!!!"
                winner = true;
            }
        }
    }
}