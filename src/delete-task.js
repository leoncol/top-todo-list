import { getListsFolderFromLocalStorage, sendListLocalStorageListView } from "./add-to-list";
import { getSelectedTaskIndexFromLocalStorage, getSelectedListFromLocalStorage, getSelectedListIndex } from "./create-task";
import { domElements } from "./dom-update-main";
export { deleteTask };




function deleteTask() {
   const index = getSelectedTaskIndexFromLocalStorage();
   const list = getSelectedListFromLocalStorage();
   const listContent = list.content;
   listContent.splice(index, 1);
   sendListLocalStorageListView(list);
}






