const divsContainer = document.querySelector("#container");

for(let i = 0; i < 16; i++){

    const divContainerRow = document.createElement("div");
    divContainerRow.classList.add("divRow");

    for(let j = 0; j < 16; j++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("subDiv");
        divContainerRow.appendChild(newDiv);
    }

    divsContainer.appendChild(divContainerRow);

}
