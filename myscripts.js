
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

            newDiv.addEventListener("mouseover",() => {
               
                let newColorDiv = colorDiv;
                if(colorDiv === "random"){
                    
                    let nextColorIsTheSame = true;
                    while(nextColorIsTheSame){

                        newColorDiv = colorsName[Math.floor(Math.random() * 8)];
                        if(newColorDiv !== previousColorDiv)
                            nextColorIsTheSame = false;

                    }
                    previousColorDiv = newColorDiv;
                   
                }
                newDiv.setAttribute("style",`background-color: ${newColorDiv}; opacity: ${opacity} `);     
                if(opacity < 1)
                    opacity += 0.1; 
                
                
            });

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

const colorsName = ["red", "green", "blue", "orange", "brown", "black", "yellow", "pink","random"];

let colorDiv = "red";
let previousColorDiv = "red";


for(let i = 0; i < colorsName.length; i++){
    
    const colorItem = document.createElement("option");
    colorItem.value = colorsName[i];
    colorItem.textContent = colorsName[i];
    listColors.appendChild(colorItem);

}

listColors.addEventListener("click", () => { colorDiv = listColors.value; 
                                            previousColorDiv = colorDiv;});
color.appendChild(label);
color.appendChild(listColors);


// adding opacity checkbox

let opacity = 1;
const opacityCheckBox = document.querySelector("#opacityCheckbox");
const opacityCheckBoxLabel = document.createElement("label");
opacityCheckBoxLabel.textContent = "Apply progressive opacity";
opacityCheckBoxLabel.setAttribute("for","opacityCheckbox");

opacityCheckBox.addEventListener("click",() => {

    if(opacityCheckBox.checked)
        opacity = 0.1;
    else
        opacity = 1;
});

const userOptions = document.querySelector("#opacity");
userOptions.appendChild(opacityCheckBoxLabel);









