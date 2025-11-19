import { listsFolder, sendToLocalStorage } from "./create-list";
import { sendListLocalStorage } from "./create-list";
import { getSelectedList } from "./selected-list";
import { editListTitle, editListDescription } from "./dom-form";
import { sendListLocalStorageListView, updateListsFolder, getListsFolderFromLocalStorage} from "./add-to-list"
import { refreshUpdateSelectedList} from "./dom-update-selected-list";
export { editList };


function editList() {
        const currentList = getSelectedList();
        let newTitle = editListTitle.value;
        let newDescription = editListDescription.value;
        currentList.title = newTitle;
        currentList.description = newDescription;
        console.log(currentList);
        sendListLocalStorageListView(currentList);
        refreshUpdateSelectedList();
    }
    
   
   




