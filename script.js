const board = document.querySelector("#board");
let inputVal;

function boardGrid(limit){
    let row,col;
    for(row=1; row<=limit; row++){
        for(col=1; col<=limit; col++){   
            const pixel = document.createElement("div");
            pixel.style.backgroundColor="white";
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseenter',()=>{
                pixel.style.backgroundColor= "darkGrey";
            })
            board.appendChild(pixel);
            pixel.style.gridArea= `${row}/${col}`;
        }
    }
}

function clearBoard(){//hay que hacer este clear
    let pixels= document.querySelector("#board").childNodes;
    for (let i=0; i<pixels.length; i++){
        pixels[i].style.backgroundColor="white";
    }
}

function getInputValue(){
    inputVal = document.getElementById("subText").value;
    document.getElementById('board').innerHTML = ''; //limpia el innerHTML del board
    boardGrid(inputVal);
}