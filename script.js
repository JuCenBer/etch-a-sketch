const board = document.querySelector("#board");

function boardGrid(){
    let row,col;
    for(row=1; row<=16; row++){
        console.log("row= " + row);
        for(col=1; col<=16; col++){
            console.log("col= " + col);    
            let item = document.createElement("div");
            board.appendChild(item);
            item.style.gridArea= `${row}/${col}`;
        }
    }
}

boardGrid();