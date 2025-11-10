import { listsFolder, sendToLocalStorage } from "./create-list";
export {addToList, addToListView};
function addToList(mainList, list, task){
    list.push(task);
    sendToLocalStorage(mainList);
    console.log(list);
}

function addToListView(list, content, newTask){
    content.push(newTask);
    sendListLocalStorage(list);

}
window.addToList = addToList;
console.log('working;');

function sendListLocalStorage(list){
    localStorage.setItem('currentList', JSON.stringify(list));
    const index = JSON.parse(localStorage.getItem('currentListIndex'));
    updateListsFolder(list, index);
    
}

function updateListsFolder(list, index){
    const listsFolder = getListsFolderFromLocalStorage();
    listsFolder[index] = list;
    localStorage.setItem('listsFolder', JSON.stringify(listsFolder));

}

function getListsFolderFromLocalStorage(){
    const listsFolder = JSON.parse(localStorage.getItem('listsFolder'));
    return listsFolder;
}

