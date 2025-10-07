import {getFormValues,displayListsInfo} from "./controller";
export {createNewList, listsFolder}; 
const listsFolder = [];
localStorage.setItem('listsFolder', JSON.stringify(listsFolder));
const storedListsFolder = localStorage.getItem('listsFolder');
const listsFolderRetrieve = JSON.parse(storedListsFolder);





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
        listsFolderRetrieve.push(newList);
        displayListsInfo(newList);
        
    } else {
        const formValues = getFormValues();
        const title = formValues.listTitleInputValue;
        const description = formValues.listDescriptionInputValue;
        let newList = new NewList(title, description)
        listsFolderRetrieve.push(newList);
        displayListsInfo(newList);
    }
    
   
   
   

}


window.createNewList = createNewList;

window.listsFolder = listsFolder;
