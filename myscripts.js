
const container = document.querySelector("#container");
const divsContainer = document.querySelector("#gridContainer");

let sizeGrid = 16;

function removeAllChild(size){

    for(let i = 0; i < size ; i++){
       
        for(let j = 0; j < size ; j++){
            divsContainer.querySelector(".divRow").removeChild(divsContainer.querySelector(".subDiv"));
        }
        divsContainer.removeChild(divsContainer.querySelector(".divRow"));
          
    }
    sizeGrid = 0;

}

const newGridButton = document.querySelector("#gridSizeButton");
newGridButton.textContent = "New Grid";
newGridButton.addEventListener("click",() => {
            
    let newSizeGrid = +prompt("Enter the new size of the grid (max 100)","");
    
    if(newSizeGrid > 100){
        alert("Too Big! max 100!");
    }
    else if(isNaN(newSizeGrid)){
        alert("only numbers!");
    }
    else{
        removeAllChild(sizeGrid);
        createGrid(newSizeGrid);
    } 
    
});

function createGrid(size){

    sizeGrid = size;
    for(let i = 0; i < sizeGrid; i++){

        const divContainerRow = document.createElement("div");
        divContainerRow.classList.add("divRow");

        for(let j = 0; j < sizeGrid; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("subDiv");

            // add the event listener for each div

            newDiv.addEventListener("mouseover",() => newDiv.setAttribute("style",`background: ${colorDiv}`));

            divContainerRow.appendChild(newDiv);
        }

        divsContainer.appendChild(divContainerRow);

    }
}

createGrid(16);

// creating the color list for the user
const color = document.querySelector("#color");

const label = document.createElement("label");
label.textContent = "Select a color:   ";
const listColors = document.createElement("select");
listColors.setAttribute("name","colors");
listColors.setAttribute("id","colors");

label.setAttribute("for","colors");

const colorsName = ["red", "green", "blue", "orange", "brown", "black", "yellow", "pink"];

let colorDiv = "red";

for(let i = 0; i < colorsName.length; i++){
    
    const colorItem = document.createElement("option");
    colorItem.value = colorsName[i];
    colorItem.textContent = colorsName[i];
    listColors.appendChild(colorItem);

}

listColors.addEventListener("click", () => colorDiv = listColors.value);
color.appendChild(label);
color.appendChild(listColors);





