
import {createNewList} from "./create-list.js"
import { domElements } from "./dom-update-main";
import domUpdateLists from "./dom-update-lists.js";
export {getFormValues, activateCreateNewList, displayListsInfo};

function activateCreateNewList(){
    createNewList();
}

function getFormValues(){
    const listTitleInputValue = domElements.listTitleInput.value;
    const listDescriptionInputValue = domElements.listDescriptionInput.value



    return {listTitleInputValue, listDescriptionInputValue}
}

function displayListsInfo(list){
    domUpdateLists(list);
};

