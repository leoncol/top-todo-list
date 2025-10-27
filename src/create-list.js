import {getFormValues,displayListsInfo, } from "./controller";
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
        // let listsFolderRetrieve = 0;
        // listsFolderRetrieve = getFromLocalStorage();
        // listsFolderRetrieve.push(newList);
        // localStorage.setItem('listsFolder', JSON.stringify(listsFolderRetrieve));
        listsFolderCopy.push(newList);
        localStorage.setItem('listsFolder', JSON.stringify(listsFolderCopy));
      


    }
    
   
   
   

}

function getListLocalStorage(index){
    addTaskToThisList.MainListCopy = getFromLocalStorage();
    addTaskToThisList.listCopy = addTaskToThisList.MainListCopy[index];
    let list = addTaskToThisList.listCopy;
    let mainList = addTaskToThisList.MainListCopy;
    console.log(list);
    console.log(mainList);
    
    sendListLocalStorage(list);
    console.log(list.title);
    console.log(list.description);
    console.log(list.content);
}

function sendListLocalStorage(list){
    localStorage.setItem('currentList', JSON.stringify(list));
    
}



const addTaskToThisList = {
    MainListCopy: [],
    listCopy: [],
} 




window.createNewList = createNewList;

window.listsFolder = listsFolder;
