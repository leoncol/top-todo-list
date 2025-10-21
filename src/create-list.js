import {getFormValues,displayListsInfo, } from "./controller";
export {createNewList, listsFolder, sendToLocalStorage, getFromLocalStorage}; 

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






class NewList {
    constructor(title, description, content){
        this.title = title;
        this.description = description;
        this.content = [];
    }
    
} 

function createNewList() {
        let listsFolderCopy = getFromLocalStorage();
        const formValues = getFormValues();
        let allValues = Object.values(formValues); // gets all values from the formValues as an array
    if (listsFolderCopy.length == 0){ // inserts the value for the "default or first list"
        const title = 'First list';
        const description = 'Insert your description here.'
        let newList = new NewList(title, description)
        listsFolderCopy.push(newList);
        localStorage.setItem('listsFolder', JSON.stringify(listsFolderCopy));
        
    
        
        
    } else if (!allValues.includes('')){ // Ensures we don't introduce empty list elements when refreshing
        const title = formValues.listTitleInputValue;
        const description = formValues.listDescriptionInputValue;
        let newList = new NewList(title, description)
        let listsFolderRetrieve = 0;
        listsFolderRetrieve = getFromLocalStorage();
        listsFolderRetrieve.push(newList);
        localStorage.setItem('listsFolder', JSON.stringify(listsFolderRetrieve));
      


    }
    
   
   
   

}


window.createNewList = createNewList;

window.listsFolder = listsFolder;
