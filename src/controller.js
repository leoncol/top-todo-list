
import {createNewList, getFromLocalStorage, sendToLocalStorage} from "./create-list.js"
import {createNewTask, createNewTaskListView, getSelectedListFromLocalStorage } from "./create-task.js"
import { domElements } from "./dom-update-main";
import {domUpdateLists, checkList, updateList} from "./dom-update-lists.js";
import { formCreateNewTask } from "./dom-form.js";
import { domUpdateTasks } from "./dom-update-tasks.js";
export {activateCreateNewList, displayListsInfo, handleLocalStorage, activateCreateNewTask, activateCreateNewTaskListView, handleLocalStorageListView};



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
    createNewTaskListView();
    domUpdateTasks();

}









function handleLocalStorage(){
    let updatedLocalStorage = getFromLocalStorage();
    return updatedLocalStorage;
}


function handleLocalStorageListView(){
    let updatedLocalStorageListView = getSelectedListFromLocalStorage();
    return updatedLocalStorageListView;
}

function displayListsInfo(){
    domUpdateLists();
};

