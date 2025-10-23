
import {createNewList, getFromLocalStorage, sendToLocalStorage} from "./create-list.js"
import { domElements } from "./dom-update-main";
import {domUpdateLists, checkList, updateList} from "./dom-update-lists.js";
import { formCreateNewTask } from "./dom-form.js";
export {getFormValues, activateCreateNewList, displayListsInfo, handleLocalStorage};



function activateCreateNewList(){
    createNewList();
    domUpdateLists();
    checkList();
    updateList();
    formCreateNewTask();
    
}



function getFormValues(){
    const listTitleInputValue = domElements.listTitleInput.value;
    const listDescriptionInputValue = domElements.listDescriptionInput.value



    return {listTitleInputValue, listDescriptionInputValue}
}

function handleLocalStorage(){
    let updatedLocalStorage = getFromLocalStorage();
    return updatedLocalStorage;
}

function displayListsInfo(){
    domUpdateLists();
};

