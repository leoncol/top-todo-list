import { listsFolder, sendToLocalStorage } from "./create-list";
import { sendListLocalStorage } from "./create-list";
import { getSelectedList } from "./selected-list";
import { editListTitle, editListDescription } from "./dom-form";
import { sendListLocalStorageListView, updateListsFolder, getListsFolderFromLocalStorage} from "./add-to-list"
import { refreshUpdateSelectedList} from "./dom-update-selected-list";
export { editList };

/* function sendListLocalStorage(list){
    localStorage.setItem('currentList', JSON.stringify(list));
    const index = JSON.parse(localStorage.getItem('currentListIndex'));
    updateListsFolder(list, index);
    
}

function updateListsFolder(list, index){
    const listsFolder = getListsFolderFromLocalStorage();
    listsFolder[index] = list;
    localStorage.setItem('listsFolder', JSON.stringify(listsFolder));

}

function getListsFolderFromLocalStorage(){
    const listsFolder = JSON.parse(localStorage.getItem('listsFolder'));
    return listsFolder;
}


import {getFormValues} from "./dom-form"
export {createNewList, listsFolder, sendToLocalStorage, getFromLocalStorage, addTaskToThisList, getListLocalStorage}; 

const listsFolder = [];



function sendToLocalStorage(updatedList){
    localStorage.setItem('listsFolder', JSON.stringify(updatedList));
    
    
}


function getFromLocalStorage(){
    const storedListsFolder = localStorage.getItem('listsFolder');
    if (storedListsFolder != null) {
    const listsFolderRetrieve = JSON.parse(storedListsFolder);
    return listsFolderRetrieve;
    } else {
        localStorage.setItem('listsFolder', JSON.stringify(listsFolder)); // if it's the first item
        return listsFolder
    }
    
}
*/


function editList() {
        const currentList = getSelectedList();
        let newTitle = editListTitle.value;
        let newDescription = editListDescription.value;
        currentList.title = newTitle;
        currentList.description = newDescription;
        console.log(currentList);
        sendListLocalStorageListView(currentList);
        refreshUpdateSelectedList();
    }
    
   
   




