import caretActivation from "./caret";
export {domElements, activateCaret, createNewdomElements, preventButtonBubbling, updateChildButtons};

function activateCaret(){
    caretActivation();
}


const domElements = {
    headerList: document.querySelector(".header-lists"),
    cardsProjects: document.querySelector(".cards-projects"),
    newList: document.querySelector("#new-list"),
    listTitleInput: document.querySelector("#list-title"),
    listDescriptionInput: document.querySelector("#list-description"),
    submitButton: document.querySelector("#submit"),
    enterListForm: document.querySelector("#enter-list"),
    closeButton: document.querySelector("dialog #close-button"),
    dialog: document.querySelector(".list-dialog"),
    taskDialog: document.querySelector('.task-dialog'),
    button: document.querySelector(".button-task"),
    toggler: document.getElementsByClassName("caret"),
    lists: function(){
        let lists = document.querySelectorAll(".anchor-task");
        return lists;
    },
};


/* const domNewElements = {
    newCardTask: document.createElement("div"),
    newCardTextContainer: document.createElement("div"),
    newCardTitle: document.createElement("p"),
    newCardText: document.createElement("p"),
    newIconContainer: document.createElement("div"),
    newCardIconsTasks: document.createElement("div"),
    newPenIcon: document.createElement("img"),
    newTrashIcon: document.createElement("img")

} */
    let childButtons = document.querySelectorAll(".add-task");

    function updateChildButtons(){
        childButtons = document.querySelectorAll(".add-task");
    }
    window.childButtons = childButtons;


function createNewdomElements(){
    const newAnchor = document.createElement("a");
    const newButton = document.createElement("button");
    const newCard = document.createElement("div");
    const newCardTextContainer = document.createElement("div");
    const newCardTitle = document.createElement("p");
    const newCardText = document.createElement("p");
    const newIconContainer = document.createElement("div");
    const newCardIconsLists = document.createElement("div");
    const newAddIcon = document.createElement("input");
    const newPenIcon = document.createElement("img");
    const newTrashIcon = document.createElement("img");



    return {newAnchor, newButton, newCard, newCardTextContainer, newCardTitle, 
        newCardText, newIconContainer, newCardIconsLists, newAddIcon, newPenIcon, newTrashIcon};
}



function preventButtonBubbling(){
    let elements = domElements.lists();
    elements.forEach(list =>{
        list.addEventListener('click', (event) => {
            let type = event.target;
            console.log(`${type.tagName} clicked!`);
            if (type == 'INPUT'){ 
                event.preventDefault(); // This makes sure we don't go to the next interface when clicking the input button to enter the new task
            }
          });
    })
   
}



// window.domNewElements = domNewElements;
window.domElements = domElements;

/* <div class="cards-projects-container">
                <p class="cards-projects-title">Click on the list you want to explore.</p>
                <div class="cards-projects">
                    <a href="./lists.html">
                        <button class="button-task" type="button">
                            <div class="card">
                                <div class="card-text-container">
                                    <p class="card-text-title">Title card</p>
                                    <p class="card-text">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</p>
                                </div>
                                <div class="card-icons-container-new-list">
                                    <div class="card-icons">
                                        <img src="assets/add-icon.svg" class="icon">
                                    </div>
                                </div>
                            </div>
                        </button>
                    </a>
                        </div>
                    </div>

                */
