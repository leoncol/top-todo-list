import addToList from "./add-to-list";
import deleteFromList from "./delete-from-list";

export default




function changeToList(originalList, task, newList){
    let newTask = deleteFromList(originalList, task);
    addToList(newList, newTask);
    
    
}

window.changeToList = changeToList;