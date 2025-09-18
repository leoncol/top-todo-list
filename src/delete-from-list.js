import getTaskIndex from "./get-task-index";
export default

function deleteFromList (list, task){
    let index = getTaskIndex(list, task);
    if (index != -1){
        let removedElement = list.content.splice(index, 1);
        return removedElement;
    } 
    



    }   

window.deleteFromList = deleteFromList;