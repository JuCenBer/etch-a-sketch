const board = document.querySelector("#board");
const buttons = document.querySelectorAll("#buttons");
const normal = document.querySelector("#normal");
const clear = document.querySelector("#clear");
const darken = document.querySelector("#darken");
const lighten = document.querySelector("#lighten");
const createGrid = document.querySelector("#createGrid");
const brushColor = document.querySelector("#brushColor");
const brushActive = document.querySelector("#board");

painting = false;
let buttonMode= "normal";
let colorInput= "#000000";
let valueInput;

function boardGrid(limit){
    let row,col;
    for(row=1; row<=limit; row++){
        for(col=1; col<=limit; col++){   
            const pixel = document.createElement("div");
            pixel.style.backgroundColor="white";
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseenter',()=>{
                if(painting){
                    pixel.style.backgroundColor= colorInput;
                }
            })
            board.appendChild(pixel);
            pixel.style.gridArea= `${row}/${col}`;
        }
    }
}

brushActive.addEventListener('click', () => {
    painting = !painting;
    console.log(painting);
})

function paint(){

}

function normalMode(colorInput){
    let pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel =>{
        pixel.addEventListener('mouseenter',()=>{
            pixel.style.backgroundColor= `colorInput`;
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
    valueInput = document.getElementById("subText").value;
    document.getElementById('board').innerHTML = ''; //limpia el innerHTML del board
    boardGrid(valueInput);
}

function darkenMode(){
    let pixels= document.querySelectorAll(".pixel");
    pixels.forEach(pixel =>{
        pixel.addEventListener('mouseenter',()=>{
            pixel.style.backgroundColor="black";
        })
    })
}

function lightenMode(){

}

boardGrid(30);//por default se inicializa con un grid de 30x30

//Buttons controls
normal.addEventListener('click', () => {
    buttonMode = "normal";
    normalMode(colorInput);
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

lighten.addEventListener('click', ()=>{
    if(buttonMode === "lighten"){
        buttonMode="normal";
        normalMode();
    }
    else{
        buttonMode = "lighten";
        lightenMode();
    }
})

brushColor.addEventListener('mouseout', () => {
    console.log("brushColor");
    colorInput = document.getElementById("brushColor").value;
    normalMode(colorInput);
})
createGrid.addEventListener('click', () => {
    getInputValue();
})
//End Buttons Controls