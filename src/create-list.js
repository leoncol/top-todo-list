import {getFormValues,displayListsInfo} from "./controller";
export {createNewList, listsFolder}; 
const listsFolder = [];






class NewList {
    constructor(title, description, content){
        this.title = title;
        this.description = description;
        this.content = [];
    }
    
} 

function createNewList() {
    const formValues = getFormValues();
    const title = formValues.listTitleInputValue;
    const description = formValues.listDescriptionInputValue;
    let newList = new NewList(title, description)
   
    
    listsFolder.push(newList);
    displayListsInfo(newList);

}


window.createNewList = createNewList;

window.listsFolder = listsFolder;
