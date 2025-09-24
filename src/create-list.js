
const listTitleInput = document.querySelector("#list-title");

const listDescriptionInput = document.querySelector("#list-description");

export default createNewList;



class NewList {
    constructor(title, description, content){
        this.title = title;
        this.description = description;
        this.content = [];
    }
    
} 

function createNewList() {

    const title = listTitleInput.value;
    const description = listDescriptionInput.value;
    let newList = new NewList(title, description)
   
    
    return newList;
}

window.createNewList = createNewList;


