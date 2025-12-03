import { getSelectedList } from "./selected-list";
import { editListTitle, editListDescription } from "./dom-form";
import { sendListLocalStorageListView } from "./add-to-list"
import { refreshUpdateSelectedList }  from "./dom-update-selected-list";
export { editList };


function editList() {
        const currentList = getSelectedList();
        let newTitle = editListTitle.value;
        let newDescription = editListDescription.value;
        currentList.title = newTitle;
        currentList.description = newDescription;
        sendListLocalStorageListView(currentList);
        refreshUpdateSelectedList();
    }