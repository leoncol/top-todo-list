
import {createNewList, getFromLocalStorage, sendToLocalStorage} from "./create-list.js"
import { domElements } from "./dom-update-main";
import {domUpdateLists} from "./dom-update-lists.js";
export {getFormValues, activateCreateNewList, displayListsInfo, handleLocalStorage};



function activateCreateNewList(){
    createNewList();
    domUpdateLists();
}



function getFormValues(){
    const listTitleInputValue = domElements.listTitleInput.value;
    const listDescriptionInputValue = domElements.listDescriptionInput.value



    return {listTitleInputValue, listDescriptionInputValue}
}

function handleLocalStorage(action){
    if (action == 'set'){
        sendToLocalStorage()
    } else {
        let updatedLocalStorage = getFromLocalStorage();
        return updatedLocalStorage;

    }
}

function displayListsInfo(){
    domUpdateLists();
};

