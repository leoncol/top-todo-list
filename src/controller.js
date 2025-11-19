
import {createNewList, getFromLocalStorage, sendToLocalStorage} from "./create-list.js"
import {createNewTask, createNewTaskListView, getSelectedListFromLocalStorage } from "./create-task.js"
import { domElements } from "./dom-update-main";
import {domUpdateLists, checkList, updateList} from "./dom-update-lists.js";
import { deleteListEventListeners, formCreateNewTask, formCreateNewTaskListsView, formEditTaskListsView } from "./dom-form.js";
import { domUpdateTasks } from "./dom-update-tasks.js";
import { editTaskListView } from "./edit-task.js";
export {activateCreateNewList, displayListsInfo, handleLocalStorage, activateCreateNewTask, 
    activateCreateNewTaskListView, handleLocalStorageListView, activateDomUpdateTasks, refreshEventListenersListView,
activateEditTaskListView, refreshTasksEventListenersListView};



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

function activateEditTaskListView(){
    editTaskListView();
    domUpdateTasks();

}

function activateDomUpdateTasks(){
    domUpdateTasks();
}

function refreshEventListenersListView(){
    formCreateNewTaskListsView();
    deleteListEventListeners();
}

function refreshTasksEventListenersListView(){
    formEditTaskListsView();
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

