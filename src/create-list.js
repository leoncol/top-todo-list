import first from "ee-first";
import {getFormValues,displayListsInfo, } from "./controller";
export {createNewList, listsFolder, sendToLocalStorage, getFromLocalStorage, getCounter, counter, sendCounter}; 

const listsFolder = [];


const counter = {
    number: 0,
}

function sendCounter(){
    let sentCounter = counter.number;
    localStorage.setItem('counter', JSON.stringify(sentCounter));
    
}


function sendUpdatedCounter(newCounter){
    counter.number = newCounter;
    sendCounter();
}


function getCounter(){
    const gottenCounter = localStorage.getItem('counter');
    if (gottenCounter != null){
    const gottenCounterRetrieve = JSON.parse(gottenCounter);
    return gottenCounterRetrieve;
    } else {
        sendCounter();
        return JSON.parse(localStorage.getItem('counter'));
    }
}


function sendToLocalStorage(){
    let checkLocalStorage = getFromLocalStorage();
    localStorage.setItem('listsFolder', JSON.stringify(checkLocalStorage));
    
    
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
        sendToLocalStorage();
        let listsFolderCopy = getFromLocalStorage();
    if (listsFolderCopy.length == 0){ // inserts the value for the "default or first list"
        const title = 'First list';
        const description = 'Insert your description here.'
        let newList = new NewList(title, description)
        listsFolderCopy.push(newList);
        localStorage.setItem('listsFolder', JSON.stringify(listsFolderCopy));
        
    
        
        
    } else {
        const formValues = getFormValues();
        const title = formValues.listTitleInputValue;
        const description = formValues.listDescriptionInputValue;
        let newList = new NewList(title, description)
        let listsFolderRetrieve = 0;
        listsFolderRetrieve = getFromLocalStorage();
        listsFolderRetrieve.push(newList);
        localStorage.setItem('listsFolder', JSON.stringify(listsFolderRetrieve));
        let updateCounter = getCounter();
        updateCounter = updateCounter += 1;
        sendUpdatedCounter(updateCounter);


    }
    
   
   
   

}


window.createNewList = createNewList;

window.listsFolder = listsFolder;
