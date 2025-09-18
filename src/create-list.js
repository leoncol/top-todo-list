export default



class NewList {
    constructor(title, description, content){
        this.title = title;
        this.description = description;
        this.content = [];
    }
    
} 

function createNewList(title, description, content) {

    let newList = new NewList(title, description, content)
   
    
    return newList;
}

window.createNewList = createNewList;
