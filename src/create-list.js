import {getFormValues,displayListsInfo} from "./controller";
export {createNewList, listsFolder, sendToLocalStorage}; 

const listsFolder = [];




function sendToLocalStorage(){
    let checkLocalStorage = getFromLocalStorage();
    localStorage.setItem('listsFolder', JSON.stringify(checkLocalStorage));
    
    
}


function getFromLocalStorage(){
    const storedListsFolder = localStorage.getItem('listsFolder');
    if (storedListsFolder != null) {
    const listsFolderRetrieve = JSON.parse(storedListsFolder);
    return listsFolderRetrieve
    } else {
        localStorage.setItem('listsFolder', JSON.stringify(listsFolder));
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
    if (listsFolder.length == 0){ // inserts the value for the "default or first list"
        const title = 'First list';
        const description = 'Insert your description here.'
        let newList = new NewList(title, description)
        listsFolder.push(newList);
        sendToLocalStorage();
        displayListsInfo(newList);
        
    } else {
        const formValues = getFormValues();
        const title = formValues.listTitleInputValue;
        const description = formValues.listDescriptionInputValue;
        let newList = new NewList(title, description)
        let listsFolderRetrieve = 0;
        listsFolderRetrieve = getFromLocalStorage();
        listsFolderRetrieve.push(newList);
        localStorage.setItem('listsFolder', JSON.stringify(listsFolderRetrieve));
        displayListsInfo(newList);
    }
    
   
   
   

}


window.createNewList = createNewList;

window.listsFolder = listsFolder;
