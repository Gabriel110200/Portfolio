let allInputs = document.querySelectorAll("input");
let nameInput = allInputs[0];
let dateInput = allInputs[1];
let amountInput = allInputs[2];

let button = document.querySelector("button");
// let deleteButton = document.createElement("button");
// deleteButton.innerText = 'X';
// deleteButton.classList.add("buttonDelete");

let tableBody = document.querySelector("tbody");
let notAddedRow = document.querySelector("#notAdded");
var deleteB;



button.addEventListener("click", () => {

    if (!nameInput.value || !dateInput.value || !amountInput.value)
        alert("Please insert all values required");
    else {

        if (notAddedRow == tableBody.firstElementChild) {
            tableBody.removeChild(notAddedRow);

        }

        let row = document.createElement("tr");


        for (let i = 0; i < allInputs.length + 1; i++) {

            let data = document.createElement("td");


            if (i == allInputs.length) {
                let deleteButton = createDeleteButton();
                data.append(deleteButton);

            }
            else
                data.append(allInputs[i].value);


            row.append(data);




        }


        tableBody.append(row);

        // resetInput

        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].value = "";

        }

        deleteB = document.getElementsByClassName("buttonDelete");
        console.log(deleteB);



    }


})




function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.innerText = 'X';
    deleteButton.classList.add("buttonDelete");
    return deleteButton;
}


tableBody.addEventListener("click", (e) => {


    console.log(e);
    console.dir(e);
    console.log(e.target)
    if (e.target.nodeName == "BUTTON") {
        e.path[2].remove();
    };

    if (tableBody.childElementCount == 0) {
        tableBody.appendChild(notAddedRow);
    }



})
