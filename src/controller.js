
import {createNewList, getFromLocalStorage, sendToLocalStorage} from "./create-list.js"
import {createNewTask, createNewTaskListView, getSelectedListFromLocalStorage } from "./create-task.js"
import { domElements } from "./dom-update-main";
import {domUpdateLists, checkList, updateList} from "./dom-update-lists.js";
import { formCreateNewTask } from "./dom-form.js";
export {activateCreateNewList, displayListsInfo, handleLocalStorage, activateCreateNewTask, activateCreateNewTaskListView};



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
}









function handleLocalStorage(){
    let updatedLocalStorage = getFromLocalStorage();
    return updatedLocalStorage;
}


function hanndleLocalStorageListView(){
    let updatedLocalStorageListView = getSelectedListFromLocalStorage();
    return updatedLocalStorageListView;
}

function displayListsInfo(){
    domUpdateLists();
};

