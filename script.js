const subBody= document.querySelector("#subBody");
subBody.classList.add('focus');
const newGridSettings = document.querySelector("#newGridSettings");
newGridSettings.style.visibility = 'collapse';
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
let eraser = document.querySelector("#boardColor").value;
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
            pixel.style.backgroundColor= "rgb(255,255,255)";
            pixel.classList.add('pixel');
            board.appendChild(pixel);
            pixel.style.gridArea= `${row}/${col}`;
        }
    }
    let everyPixel = Array.from(document.getElementsByClassName("pixel"));
    everyPixel.forEach(pixel => {pixel.addEventListener('mouseover', paint)
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
})

function paint(){
    if(painting){
        switch(buttonMode){
            case "normal":{
                this.style.backgroundColor = document.querySelector("#brushColor").value;
                this.classList.add("alreadyPainted");
                break;
            }
            case "darken":{
                this.style.backgroundColor = darkenMode(this.style.backgroundColor);
                this.classList.add("alreadyPainted");
                break;
            }
            case "lighten":{
                this.style.backgroundColor = lightenMode(this.style.backgroundColor);
                this.classList.add("alreadyPainted");
                break;
            }
            case "random":{
                this.style.backgroundColor = randomColor();
                this.classList.add("alreadyPainted");
                break;
            }
            case "erase":{
                this.style.backgroundColor = eraser;
                this.classList.remove("alreadyPainted");
                break;
            }
        }
    }
}

//Painting functions

function clearBoard(){ //simplemente pinta de blanco los child divs
    for (let i=0; i<pixels.length; i++){
        pixels[i].style.backgroundColor= document.querySelector("#boardColor").value;
        pixels[i].classList.remove("alreadyPainted");
    }

}

function darkenMode(col){
    col = col.toString();
    let rgbStr = col.substring(4, col.length-1)
         .replace(/ /g, '')
         .split(',');
    let R = Math.round(parseInt(rgbStr[0]) - 12.75);
    let G = Math.round(parseInt(rgbStr[1]) - 12.75);
    let B = Math.round(parseInt(rgbStr[2]) - 12.75);
    return "rgb("+R+","+G+","+B+")"
}

function getInputValue(){
    valueInput = document.getElementById("resText").value;
    document.getElementById('board').innerHTML = ''; //limpia el innerHTML del board
    boardGrid(valueInput);
    newGridSettings.classList.add('unfocus');
    newGridSettings.style.visibility="hidden";
    newGridSettings.style.visibility="collapse";
    subBody.classList.remove('unfocus');
    subBody.classList.add('focus')

}

function lightenMode(col){
    col = col.toString();
    let rgbStr = col.substring(4, col.length-1)
         .replace(/ /g, '')
         .split(',');
    let R = Math.round(parseInt(rgbStr[0]) + 12.75);
    console.log(R);
    let G = Math.round(parseInt(rgbStr[1]) + 12.75);
    console.log(G);
    let B = Math.round(parseInt(rgbStr[2]) + 12.75);
    console.log(B);
    return "rgb("+R+","+G+","+B+")"
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
    eraser =  document.querySelector("#boardColor").value;
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

brushColor.addEventListener('change', () => {
    brushColor.style.backgroundColor = document.querySelector("#brushColor").value;
    buttonMode="normal";
});

boardColor.addEventListener('change', changeBoardColor);

function newGrid(){
    newGridSettings.classList.remove('unfocus');
    newGridSettings.classList.remove('focus');
    subBody.classList.remove('focus');
    subBody.classList.add('unfocus');
    newGridSettings.style.visibility="visible";
}
//End Buttons Controls