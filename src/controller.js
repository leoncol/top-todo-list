
import {createNewList, getFromLocalStorage, sendToLocalStorage} from "./create-list.js"
import createNewTask from "./create-task.js"
import { domElements } from "./dom-update-main";
import {domUpdateLists, checkList, updateList} from "./dom-update-lists.js";
import { formCreateNewTask } from "./dom-form.js";
export {getFormValues, activateCreateNewList, displayListsInfo, handleLocalStorage, activateCreateNewTask, activateCreateNewTaskListView};



function activateCreateNewList(){
    createNewList();
    domUpdateLists();
    checkList();
    updateList();
    formCreateNewTask();
    
}

function activateCreateNewTask(){
    createNewTask();
}

function activateCreateNewTaskListView(){
    createNewTask();
}






function getFormValues(){
    const listTitleInputValue = domElements.listTitleInput.value;
    const listDescriptionInputValue = domElements.listDescriptionInput.value



    return {listTitleInputValue, listDescriptionInputValue}
}

function getTaskFormValues(){
    const taskTitleInputValue = domElements.taskTitleInput.value;
    const taskDescriptionInputValue = domElements.taskDescriptionInput.value;
    const taskDateInputValue = domElements.taskDateInput.value;
    const taskPriorityInputValue = domElements.taskPriorityInput.value;
    const taskStatusInputValue = domElements.taskStatusInput.value;

    return {taskTitleInputValue, taskDescriptionInputValue, taskDateInputValue, taskPriorityInputValue, taskStatusInputValue}
}

function handleLocalStorage(){
    let updatedLocalStorage = getFromLocalStorage();
    return updatedLocalStorage;
}

function displayListsInfo(){
    domUpdateLists();
};

