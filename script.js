const board = document.querySelector("#board");
const buttons = document.querySelectorAll("#buttons");
const normal = document.querySelector("#normal");
const clear = document.querySelector("#clear");
const darken = document.querySelector("#darken");
const lighten = document.querySelector("#lighten");
const createGrid = document.querySelector("#createGrid");
const brushColor = document.querySelector("#brushColor");
const boardColor = document.querySelector("#boardColor");
const brushActive = document.querySelector("#board");
const random = document.querySelector("#random");
const erase = document.querySelector("#erase");
let pixels;
painting = false;
let buttonMode = "normal";
let valueInput;

boardGrid(30);//por default se inicializa con un grid de 30x30


function boardGrid(limit){
    let row,col;
    for(row=1; row<=limit; row++){
        for(col=1; col<=limit; col++){   
            const pixel = document.createElement("div");
            pixel.style.backgroundColor="white";
            pixel.classList.add('pixel');
            board.appendChild(pixel);
            pixel.style.gridArea= `${row}/${col}`;
        }
    }
    let everyPixel = Array.from(document.getElementsByClassName("pixel"));
    everyPixel.forEach(pixel => {pixel.addEventListener('mouseenter', paint)
    })
    pixels = everyPixel;
}
brushActive.addEventListener('click', () => {
    painting = !painting;
    if(painting){
        board.style.borderColor= "green";
    }
    else{
        board.style.borderColor= "red";
    }
    console.log(painting);
})

function paint(){
    if(painting){
        switch(buttonMode){
            case "normal":{
                this.style.backgroundColor = document.querySelector("#brushColor").value;
                this.classList.add= "alreadyPainted";
                break;
            }
            case "darken":{
                this.style.backgroundColor = darkenMode(this);
                this.classList.add= "alreadyPainted";
                break;
            }
            case "lighten":{
                this.classList.add= "alreadyPainted";
                break;
            }
            case "random":{
                this.style.backgroundColor = randomColor();
                this.classList.add= "alreadyPainted";
                break;
            }
            case "erase":{
                this.style.backgroundColor = "white";
                this.classList.remove= "alreadyPainted";
                break;
            }
        }
    }
}

//Painting functions

function clearBoard(){ //simplemente pinta de blanco los child divs
    let pixels= document.querySelector("#board").childNodes;
    for (let i=0; i<pixels.length; i++){
        pixels[i].style.backgroundColor="white";
    }

}

function darkenMode(pixel){
    color = pixel.style.backgroundColor;
    color[1]-=1;
    color[2]-=9;
    color[3]-=1;
    color[4]-=9;
    color[5]-=1;
    color[6]-=9;
    return pixel;
}

function getInputValue(){
    valueInput = document.getElementById("subText").value;
    document.getElementById('board').innerHTML = ''; //limpia el innerHTML del board
    boardGrid(valueInput);
}

function lightenMode(){

}

function randomColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    return 'rgb(' + r + ',' + g + ',' + b + ')'; 
}

function changeBoardColor(){
    pixels.forEach(pixel => {
       if (!(pixel.classList.contains("alreadyPainted"))){
        pixel.style.backgroundColor = document.querySelector("#boardColor").value;
    } 
    })
    
}
//End painting functions


//Buttons controls
normal.addEventListener('click', () => {
    buttonMode = "normal";
})

clear.addEventListener('click', () => {
    clearBoard();   
})

darken.addEventListener('click', () => {
    if(buttonMode === "darken"){
        buttonMode="normal";
    }
    else{
        buttonMode = "darken";
    }
     
})

lighten.addEventListener('click', ()=>{
    if(buttonMode === "lighten"){
        buttonMode="normal";
    }
    else{
        buttonMode = "lighten";
    }
})

erase.addEventListener('click', () => {
    if(buttonMode === "erase"){
        buttonMode="normal";
    }
    else{
        buttonMode = "erase";
    } 
})

random.addEventListener('click', () => {
    if(buttonMode === "random"){
        buttonMode="normal";
    }
    else{
        buttonMode = "random";
    }
})

boardColor.addEventListener('change', changeBoardColor)

createGrid.addEventListener('click', () => {
    getInputValue();
})
//End Buttons Controls