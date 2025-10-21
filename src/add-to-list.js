import { listsFolder, sendToLocalStorage } from "./create-list";
export default

function addToList(mainList, list, task){
    list.push(task);
    sendToLocalStorage(mainList);
    console.log(list);
}


window.addToList = addToList;
console.log('working;');