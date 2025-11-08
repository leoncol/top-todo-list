export {createNewTask, createNewTaskListView, getSelectedListFromLocalStorage}
import {addToList, addToListView} from "./add-to-list";
import { getFromLocalStorage, sendToLocalStorage } from "./create-list";
import { format } from "date-fns";
import { getTaskFormValues } from "./dom-form";


class NewTask {
    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description = description;
        this.dueDate = format(new Date(dueDate), "yyyy-MM-dd");
        switch (priority){
        case 0:
            this.priority = 'Low';
            break;
        case 1:
            this.priority = 'High';
            break;
        }
        switch (status){
        case 0:
            this.status = 'To do';
            break;
        case 1:
            this.status = 'Doing';
            break;
        case 2: 
            this.status = 'Done';    
        }
    }
    
}

function getListContent(){
    let mainList = getFromLocalStorage();
    return mainList
}

function getCurrentList(){
    let currentList = JSON.parse(localStorage.getItem('currentList'));
    console.log(currentList);
    return currentList
}



window.getCurrentList = getCurrentList();

window.getListContent = getListContent;

function createNewTask(title, description, dueDate, priority, status, list) {
    let mainList = getListContent();
    let listContent = mainList[list].content;
    let newTask = new NewTask(title, description, dueDate, priority, status)
    
    addToList(mainList,listContent, newTask);
    
    
}

function createNewTaskListView() {
    let currentList = getCurrentList();
    let content = currentList.content;
    let TaskFormValues = getTaskFormValues();
    let title = TaskFormValues.taskTitleInputValue;
    let description = TaskFormValues.taskDescriptionInputValue;
    let dueDate = TaskFormValues.taskDateInputValue;
    let priority = parseInt(TaskFormValues.taskPriorityInputValue);
    let status = parseInt(TaskFormValues.taskStatusInputValue);
    let newTask = new NewTask(title, description, dueDate, priority, status);
    
    addToListView(currentList, content, newTask);
    
    
}


function getSelectedListFromLocalStorage(){
    const storedSelectedList = JSON.parse(localStorage.getItem('currentList'));
    return storedSelectedList;

}


/* 
function getFromLocalStorage(){
    const storedListsFolder = localStorage.getItem('listsFolder');
    if (storedListsFolder != null) {
    const listsFolderRetrieve = JSON.parse(storedListsFolder);
    return listsFolderRetrieve;
    } else {
        localStorage.setItem('listsFolder', JSON.stringify(listsFolder)); // if it's the first item
        return listsFolder
    }
    
}

*/

window.createNewTask = createNewTask;


