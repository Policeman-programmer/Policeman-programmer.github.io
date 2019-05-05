var gameFild = [];
var moves = 0;

jQuery('document').ready(function startGameAndSetCellsValues() {


    for (i = 0; i < 9; ++i) gameFild[i] = i; //create game fill as array
    //function for filling array by random numbers
    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    //fill our gameField by random numbers which will represent cells position
    gameFild = shuffle(gameFild);
    //refills game filed by cells
    for (i = 0; i < 9; ++i) {
        let tmpValue = gameFild[i];
        gameFild[i] = new Cell(i, tmpValue);
    }


});


function checkWin() {
    document.getElementById("moves").innerHTML = moves;
    let counter = 0;
    for (i = 0; i < 8; i++) {
        if (i === gameFild[i].cellValue - 1) {
            counter++;
        }
    }
    if (counter === 8) alert("You win! Congratulations")
}

function changeCells(clickedCellPosition, emptyCellPosition) {

    gameFild[emptyCellPosition].cellValue = gameFild[clickedCellPosition].cellValue;
    gameFild[clickedCellPosition].cellValue = 0;
    document.getElementById(gameFild[clickedCellPosition].positionAtFild).style.backgroundColor = "white";
    document.getElementById(gameFild[clickedCellPosition].positionAtFild).innerHTML = "";
    document.getElementById(gameFild[emptyCellPosition].positionAtFild).style.backgroundColor = "lightgrey";
    document.getElementById(gameFild[emptyCellPosition].positionAtFild).innerHTML = gameFild[emptyCellPosition].cellValue;
    moves++;
}

$("#0").on("click", function () {
    if (gameFild[1].cellValue === 0) {
        changeCells(0, 1);
    }
    if (gameFild[3].cellValue === 0) {
        changeCells(0, 3);
    }
    checkWin();
});
$("#1").on("click", function () {
    if (gameFild[2].cellValue === 0) {
        changeCells(1, 2);
    }
    if (gameFild[4].cellValue === 0) {
        changeCells(1, 4);
    }
    if (gameFild[0].cellValue === 0) {
        changeCells(1, 0);
    }
    checkWin();
});
$("#2").on("click", function () {
    if (gameFild[1].cellValue === 0) {
        changeCells(2, 1);
    }
    if (gameFild[5].cellValue === 0) {
        changeCells(2, 5);
    }
    checkWin();
});
$("#3").on("click", function () {
    if (gameFild[0].cellValue === 0) {
        changeCells(3, 0);
    }
    if (gameFild[4].cellValue === 0) {
        changeCells(3, 4);
    }
    if (gameFild[6].cellValue === 0) {
        changeCells(3, 6);
    }
    checkWin();
});
$("#4").on("click", function () {
    if (gameFild[1].cellValue === 0) {
        changeCells(4, 1);
    }
    if (gameFild[5].cellValue === 0) {
        changeCells(4, 5);
    }
    if (gameFild[7].cellValue === 0) {
        changeCells(4, 7);
    }
    if (gameFild[3].cellValue === 0) {
        changeCells(4, 3);
    }
    checkWin();
});
$("#5").on("click", function () {
    if (gameFild[2].cellValue === 0) {
        changeCells(5, 2);
    }
    if (gameFild[8].cellValue === 0) {
        changeCells(5, 8);
    }
    if (gameFild[4].cellValue === 0) {
        changeCells(5, 4);
    }
    checkWin();
});
$("#6").on("click", function () {
    if (gameFild[3].cellValue === 0) {
        changeCells(6, 3);
    }
    if (gameFild[7].cellValue === 0) {
        changeCells(6, 7);
    }
    checkWin();

});
$("#7").on("click", function () {
    if (gameFild[4].cellValue === 0) {
        changeCells(7, 4);
    }
    if (gameFild[8].cellValue === 0) {
        changeCells(7, 8);
    }
    if (gameFild[6].cellValue === 0) {
        changeCells(7, 6);
    }
    checkWin();
});
$("#8").on("click", function () {
    if (gameFild[5].cellValue === 0) {
        changeCells(8, 5);
    }
    if (gameFild[7].cellValue === 0) {
        changeCells(8, 7);
    }
    checkWin();
});





