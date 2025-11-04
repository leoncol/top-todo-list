import { listsFolder, sendToLocalStorage } from "./create-list";
export {addToList, addToListView};
function addToList(mainList, list, task){
    list.push(task);
    sendToLocalStorage(mainList);
    console.log(list);
}

function addToListView(list, content, newTask){
    content.push(newTask);
    sendToLocalStorage(list);

}
window.addToList = addToList;
console.log('working;');