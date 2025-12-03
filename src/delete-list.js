import { getListsFolderFromLocalStorage } from "./add-to-list";
import { domElements } from "./dom-update-main";
export { deleteList };

function deleteList() {
    let home = domElements.home;
    const index = JSON.parse(localStorage.getItem('currentListIndex'));
    const listsFolder = getListsFolderFromLocalStorage();
    listsFolder.splice(index, 1);
    localStorage.setItem('listsFolder', JSON.stringify(listsFolder));
    home.click();
}