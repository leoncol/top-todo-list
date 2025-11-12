import caretActivation from "./caret";
export {domElements, listViewDomElements, activateCaret, createNewdomElements, preventButtonBubbling, updateChildButtons};

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
    taskTitleInput: document.querySelector("task-title"),
    taskDescriptionInput: document.querySelector("task-description"),
    taskDateInput: document.querySelector("task-date"),
    taskPriorityInput: document.querySelector("task-priority"),
    taskStatusInput: document.querySelector("task-status"),
    taskSubmitButton: document.querySelector("#task-submit"),
    enterListForm: document.querySelector("#enter-list"),
    enterTaskForm: document.querySelector("#enter-task"),
    closeButton: document.querySelector("#close-button"),
    dialog: document.querySelector(".list-dialog"),
    taskDialog: document.querySelector(".task-dialog"),
    closeButtonTask: document.querySelector("#task-close-button"),
    button: document.querySelector(".button-task"),
    toggler: document.getElementsByClassName("caret"),
    lists: function(){
        let lists = document.querySelectorAll(".anchor-list");
        return lists;
    }
};

const listViewDomElements = {
    taskTitleInput: document.querySelector("#task-title-lview"),
    taskDescriptionInput: document.querySelector("#task-description-lview"),
    taskDateInput: document.querySelector("#task-date-lview"),
    taskPriorityInput: document.querySelector("#task-priority-lview"),
    taskStatusInput: document.querySelector("#task-status-lview"),
    taskSubmitButton: document.querySelector("#task-submit-lview"),
    enterTaskForm: document.querySelector("#enter-task-lview"),
    taskDialog: document.querySelector("#task-dialog-lview"),
    closeButtonTask: document.querySelector("#task-close-button-lview"),
    editListDialog: document.querySelector("#edit-list-dialog"),
    editListTitle: document.querySelector("#edit-list-title"),
    editListDescription: document.querySelector("#edit-list-description"),
    editListCloseButton: document.querySelector("#edit-close-button"),
    editListSubmitButton: document.querySelector("#edit-save-changes"),
    editListForm: document.querySelector("#edit-list"),
    cardsProjects: document.querySelector(".cards-projects"),
    deleteListDialog: document.querySelector("#delete-list-dialog"),
    deleteListButton: document.querySelector("#delete"),
    deleteListCloseButton: document.querySelector("#delete-close-button"),
    selectedList: function(){
        let selectedList = document.querySelector(".card");
        return selectedList;
    },
    listTasks: function(){
        let listTasks = document.querySelectorAll(".card-task");
        return listTasks;
    }
}


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
    const newPenIcon = document.createElement("input");
    const newTrashIcon = document.createElement("input");
    const newMetadata = document.createElement("div");
    const newStatus = document.createElement("div");
    const newStatusTitle = document.createElement("p");
    const newStatusValue = document.createElement("p");
    const newDueDate = document.createElement("div");
    const newDueDateTitle = document.createElement("p");
    const newDueDateValue = document.createElement("p");
    const newPriority = document.createElement("p");
    const newPriotityTitle = document.createElement("p");
    const newPriorityValue = document.createElement("p");




    return {newAnchor, newButton, newCard, newCardTextContainer, newCardTitle, 
        newCardText, newIconContainer, newCardIconsLists, newAddIcon, newPenIcon, newTrashIcon, newMetadata,
    newStatus, newStatusTitle, newStatusValue, newDueDate, newDueDateTitle, newDueDateValue, newPriority, newPriotityTitle, newPriorityValue};
}

 /*
                            
                                <div class="due-date">
                                    <p class="due-date-title">Due date:</p>
                                    <p class="due-date-value">12-02-2100</p>
                                </div>
                                <div class="priority">
                                    <p class="priority-title">Priority:</p>
                                    <p class="priority-value-high">High</p>
                                </div>
                            </div>
                            <div class="card-icons-tasks">
                                <img src="assets/pen-icon.svg" class="icon">
                                <img src="assets/trash-bin-icon.svg" class="icon">
                            </div>
                        </div>
                    </div>
        */


function preventButtonBubbling(){
    let elements = domElements.lists();
    elements.forEach(list =>{
        list.addEventListener('click', (event) => {
            let type = event.target;
            let tag = type.tagName;
            console.log(`${type.tagName} clicked!`);
            if (tag == 'INPUT'){ 
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
