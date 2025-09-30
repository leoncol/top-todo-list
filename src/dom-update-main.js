import domUpdateLists from "./dom-update-lists";
import caretActivation from "./caret";
export {updateDOM, domElements, activateCaret};

function activateCaret(){
    caretActivation();
}

function updateDOM(){
    domUpdateLists();
}

const domElements = {
    cardsProjects: document.querySelector(".cards-projects"),
    newList: document.createElement("div"),
    listTitleInput: document.querySelector("#list-title"),
    listDescriptionInput: document.querySelector("#list-description"),

    submitButton: document.querySelector("#submit"),
    enterListForm: document.querySelector("#enter-list"),
    closeButton: document.querySelector("dialog #close-button"),
    dialog: document.querySelector("dialog"),
    button: document.querySelector(".button-task"),
    toggler: document.getElementsByClassName("caret")
};
window.domElements = domElements;

window.updateDOM = updateDOM;

