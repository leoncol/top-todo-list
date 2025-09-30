import {formValues} from "./controller";
const listsFolder = [];


export default createNewList;



class NewList {
    constructor(title, description, content){
        this.title = title;
        this.description = description;
        this.content = [];
    }
    
} 

function createNewList() {

    const title = formValues.listTitleInputValue;
    const description = formValues.listDescriptionInputValue;
    let newList = new NewList(title, description)
   
    
    listsFolder.push(newList);
}

window.createNewList = createNewList;

window.listsFolder = listsFolder;
