import caretActivation from "./caret";
export {domElements, activateCaret, createNewdomElements};

function activateCaret(){
    caretActivation();
}


const domElements = {
    cardsProjects: document.querySelector(".cards-projects"),
    newList: document.querySelector("#new-list"),
    listTitleInput: document.querySelector("#list-title"),
    listDescriptionInput: document.querySelector("#list-description"),
    submitButton: document.querySelector("#submit"),
    enterListForm: document.querySelector("#enter-list"),
    closeButton: document.querySelector("dialog #close-button"),
    dialog: document.querySelector("dialog"),
    button: document.querySelector(".button-task"),
    toggler: document.getElementsByClassName("caret")
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


function createNewdomElements(){
    const newAnchor = document.createElement("a");
    const newButton = document.createElement("button");
    const newCard = document.createElement("div");
    const newCardTextContainer = document.createElement("div");
    const newCardTitle = document.createElement("p");
    const newCardText = document.createElement("p");
    const newIconContainer = document.createElement("div");
    const newCardIconsLists = document.createElement("div");
    const newAddIcon = document.createElement("img");
    const newPenIcon = document.createElement("img");
    const newTrashIcon = document.createElement("img");


    return {newAnchor, newButton, newCard, newCardTextContainer, newCardTitle, newCardText, newIconContainer, newCardIconsLists, newAddIcon, newPenIcon, newTrashIcon};
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

