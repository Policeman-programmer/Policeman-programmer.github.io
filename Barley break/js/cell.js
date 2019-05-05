class Cell {
    constructor(positionAtField, cellValue) {
        this.positionAtFild = positionAtField;
        this.cellValue = cellValue;

        if (cellValue === 0) {
            document.getElementById(positionAtField).style.backgroundColor = "white";
            document.getElementById(positionAtField).innerHTML = ""
        } else {
            document.getElementById(positionAtField).style.backgroundColor = "lightgrey";
            document.getElementById(positionAtField).innerHTML = cellValue;
        }

    }
}



