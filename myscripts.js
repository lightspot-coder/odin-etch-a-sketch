const divsContainer = document.querySelector("#container");
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

const newGridButton = document.createElement("button");
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

divsContainer.appendChild(newGridButton);

function createGrid(size){

    sizeGrid = size;
    for(let i = 0; i < sizeGrid; i++){

        const divContainerRow = document.createElement("div");
        divContainerRow.classList.add("divRow");

        for(let j = 0; j < sizeGrid; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("subDiv");

            // add the event listener for each div

            newDiv.addEventListener("mouseover",() => newDiv.setAttribute("style","background: green"));

            divContainerRow.appendChild(newDiv);
        }

        divsContainer.appendChild(divContainerRow);

    }
}

createGrid(16);

