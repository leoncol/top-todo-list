import { getFromLocalStorage } from "./create-list";
import { domElements, listViewDomElements } from "./dom-update-main";
export {checkSelectedList, getSelectedList}

function getSelectedList(){
    const currentList = localStorage.getItem('currentList');
    return JSON.parse(currentList);
}

function checkSelectedList(){
    let selectedList = listViewDomElements.selectedList();
        selectedList.addEventListener("click", () => {
            console.log(selectedList);
            let selectedListData = getSelectedList();
            console.log(selectedListData.title);
            console.log(selectedListData.description);
        }) 
    
}

function getSelectedListIndex(selectedList){
    let nodeArray = Array.from( domElements.lists());
    let index = nodeArray.indexOf(selectedList);
    return index;
}


function getSelectedListLocalStorage(index){
    let listsFolder = getFromLocalStorage();
    let selectedList = listsFolder[index];

    console.log(listsFolder);
    console.log(selectedList);
    
    // sendListLocalStorage(list);
    console.log(selectedList.title);
    console.log(selectedList.description);
    console.log(selectedList.content);
}


