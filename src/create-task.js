export {createNewTask, createNewTaskListView}
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
            this.priority = 'low';
            break;
        case 1:
            this.priority = 'high';
            break;
        }
        switch (status){
        case 0:
            this.status = 'to do';
            break;
        case 1:
            this.status = 'doing';
            break;
        case 2: 
            this.status = 'done';    
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
    let priority = TaskFormValues.taskPriorityInputValue;
    let status = TaskFormValues.taskStatusInputValue;
    let newTask = new NewTask(title, description, dueDate, priority, status);
    
    addToListView(currentList, content, newTask);
    
    
}






window.createNewTask = createNewTask;


