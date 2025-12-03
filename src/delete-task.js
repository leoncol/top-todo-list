import { sendListLocalStorageListView } from "./add-to-list";
import { getSelectedTaskIndexFromLocalStorage, getSelectedListFromLocalStorage } from "./create-task";
export { deleteTask };

function deleteTask() {
   const index = getSelectedTaskIndexFromLocalStorage();
   const list = getSelectedListFromLocalStorage();
   const listContent = list.content;
   listContent.splice(index, 1);
   sendListLocalStorageListView(list);
}