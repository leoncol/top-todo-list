import { getSelectedTaskIndexFromLocalStorage, sendSelectedTaskToLocalStorage  } from "./create-task";
import { getSelectedList } from "./selected-list";
import { sendListLocalStorageListView } from "./add-to-list";
import { getEditTaskFormValues } from "./dom-form";
export { editTaskListView }

function editTaskListView() {
    let currentList = getSelectedList();
    let content = currentList.content;
    let index = getSelectedTaskIndexFromLocalStorage();
    let task = content[index];
    let editTaskFormValues = getEditTaskFormValues()
    let title = editTaskFormValues.editTaskTitle;
    let description = editTaskFormValues.editTaskDescription;
    let dueDate = editTaskFormValues.editTaskDate
    let priority = parseInt(editTaskFormValues.editTaskPriority);
    let status = parseInt(editTaskFormValues.editTaskStatus);
    switch (priority){
        case 0:
            priority = 'Low';
            break;
        case 1:
            priority = 'High';
            break;
        }
        switch (status){
        case 0:
            status = 'To do';
            break;
        case 1:
            status = 'Doing';
            break;
        case 2: 
            status = 'Done';    
            break;
        }
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.status = status;
    sendListLocalStorageListView(currentList);
    sendSelectedTaskToLocalStorage(task);
}