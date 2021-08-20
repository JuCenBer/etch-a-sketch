const board = document.querySelector("#board");
const buttons = document.querySelectorAll("#buttons");
const normal = document.querySelector("#normal");
const clear = document.querySelector("#clear");
const darken = document.querySelector("#darken");
const createGrid = document.querySelector("#createGrid");
let buttonMode= "normal";
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

function normalMode(){
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel =>{
        pixel.addEventListener('mouseenter',()=>{
            pixel.style.backgroundColor="darkgrey";
        })
    })
}

function clearBoard(){ //simplemente pinta de blanco los child divs
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

function darkenMode(){
    let pixels= document.querySelectorAll(".pixel");
    pixels.forEach(pixel =>{
        pixel.addEventListener('mouseenter',()=>{
            pixel.style.backgroundColor="black";
        })
    })
}

boardGrid(30);//por default se inicializa con un grid de 30x30


normal.addEventListener('click', () => {
    buttonMode = "normal";
    normalMode();
})

clear.addEventListener('click', () => {
    if(buttonMode === "clear"){
        buttonMode="normal";
        normalMode();
    }
    else{
        buttonMode= "clear";
        clearBoard();
    }
    
})

darken.addEventListener('click', () => {
    if(buttonMode === "darken"){
        buttonMode="normal";
        normalMode();
    }
    else{
        buttonMode = "darken";
        darkenMode();
    }
     
})

createGrid.addEventListener('click', () => {
    getInputValue();
})