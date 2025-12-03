import { caretActivation, caretEventListener } from "./caret";
export { domElements, listViewDomElements, activateCaret, createNewdomElements, preventButtonBubbling, updateChildButtons };

function activateCaret(){
    caretActivation();
    caretEventListener();
}

const domElements = {
    headerList: document.querySelector(".header-lists"),
    cardsProjects: document.querySelector(".cards-projects"),
    newList: document.querySelector("#new-list"),
    listTitleInput: document.querySelector("#list-title"),
    listDescriptionInput: document.querySelector("#list-description"),
    submitButton: document.querySelector("#submit"),
    taskTitleInput: document.querySelector("#task-title"),
    taskDescriptionInput: document.querySelector("#task-description"),
    taskDateInput: document.querySelector("#task-date"),
    taskPriorityInput: document.querySelector("#task-priority"),
    taskStatusInput: document.querySelector("#task-status"),
    taskSubmitButton: document.querySelector("#task-submit"),
    enterListForm: document.querySelector("#enter-list"),
    enterTaskForm: document.querySelector("#enter-task"),
    closeButton: document.querySelector("#close-button"),
    dialog: document.querySelector(".list-dialog"),
    taskDialog: document.querySelector("#task-dialog"),
    closeButtonTask: document.querySelector("#task-close-button"),
    button: document.querySelector(".button-task"),
    toggler: document.getElementsByClassName("caret"),
    home: document.querySelector("#home"),
    nested: document.querySelector(".nested"),
    lists: function(){
        let lists = document.querySelectorAll(".anchor-list");
        return lists;
    },
    caretTasks: function(){
        let caretTasks = document.querySelectorAll(".task");
        return caretTasks;
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
    editTaskDialog: document.querySelector("#edit-task-dialog-lview"),
    editTaskTitle: document.querySelector("#edit-task-title-lview"),
    editTaskDescription: document.querySelector("#edit-task-description-lview"),
    editTaskDate: document.querySelector("#edit-task-date-lview"),
    editTaskPriority: document.querySelector("#edit-task-priority-lview"),
    editTaskStatus: document.querySelector("#edit-task-status-lview"),
    editTaskSubmitButton: document.querySelector("#edit-task-submit-lview"),
    editTaskForm: document.querySelector("#edit-task-lview"),
    closeButtonEditTask: document.querySelector("#edit-task-close-button-lview"),
    deleteTaskDialog: document.querySelector("#delete-task-dialog"),
    deleteTaskButton: document.querySelector("#delete-task"),
    deleteTaskCloseButton: document.querySelector("#delete-task-close-button"),

    selectedList: function(){
        let selectedList = document.querySelector(".card");
        return selectedList;
    },
    listTasks: function(){
        let listTasks = document.querySelectorAll(".card-task");
        return listTasks;
    }
}

let childButtons = document.querySelectorAll(".add-task");

function updateChildButtons(){
    childButtons = document.querySelectorAll(".add-task");
    }

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
    const newCaretTask = document.createElement("a");
    const newCaretLi = document.createElement("li");
    
    return {newAnchor, newButton, newCard, newCardTextContainer, newCardTitle, 
        newCardText, newIconContainer, newCardIconsLists, newAddIcon, newPenIcon, newTrashIcon, newMetadata,
    newStatus, newStatusTitle, newStatusValue, newDueDate, newDueDateTitle, newDueDateValue, newPriority, newPriotityTitle, newPriorityValue,
newCaretTask, newCaretLi};
}

function preventButtonBubbling(){
    let elements = domElements.lists();
    elements.forEach(list =>{
        list.addEventListener('click', (event) => {
            let type = event.target;
            let tag = type.tagName;
            if (tag == 'INPUT'){ 
                event.preventDefault(); // This makes sure we don't go to the next interface when clicking the input button to enter the new task
            }
          });
    })
   
}