import {addToList, addToListView } from "./add-to-list";
import { getFromLocalStorage } from "./create-list";
import { format } from "date-fns";
import { getTaskFormValues, getTaskFormValuesHome } from "./dom-form";
export {createNewTask, createNewTaskListView, getSelectedListFromLocalStorage, sendSelectedTaskToLocalStorage, getSelectedTaskFromLocalStorage, 
    sendSelectedTaskIndexToLocalStorage, getCurrentList, getSelectedTaskIndexFromLocalStorage
}

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
    return mainList;
}

function getCurrentList(){
    let currentList = JSON.parse(localStorage.getItem('currentList'));
    return currentList;
}

function createNewTask() {
    let mainList = getListContent();
    let listIndex = getSelectedListIndex();
    let listContent = mainList[listIndex].content;
    let taskFormValuesHome = getTaskFormValuesHome();
    let title = taskFormValuesHome.taskTitleInputValueHome;
    let description = taskFormValuesHome.taskDescriptionInputValueHome;
    let dueDate = taskFormValuesHome.taskDateInputValueHome;
    let priority = parseInt(taskFormValuesHome.taskPriorityInputValueHome);
    let status = parseInt(taskFormValuesHome.taskStatusInputValueHome);
    let newTask = new NewTask(title, description, dueDate, priority, status);
    addToList(mainList,listContent, newTask);
}

function createNewTaskListView() {
    let currentList = getCurrentList();
    let content = currentList.content;
    let taskFormValues = getTaskFormValues();
    let title = taskFormValues.taskTitleInputValue;
    let description = taskFormValues.taskDescriptionInputValue;
    let dueDate = taskFormValues.taskDateInputValue;
    let priority = parseInt(taskFormValues.taskPriorityInputValue);
    let status = parseInt(taskFormValues.taskStatusInputValue);
    let newTask = new NewTask(title, description, dueDate, priority, status);
    addToListView(currentList, content, newTask);
}

function getSelectedListFromLocalStorage(){
    const storedSelectedList = JSON.parse(localStorage.getItem('currentList'));
    return storedSelectedList;

}

function sendSelectedTaskToLocalStorage(selectedTask){
    localStorage.setItem('selectedTask', JSON.stringify(selectedTask));
}

function sendSelectedTaskIndexToLocalStorage(taskIndex){
    localStorage.setItem('selectedTaskIndex', JSON.stringify(taskIndex));
}

function getSelectedTaskIndexFromLocalStorage(){
    const selectedTaskIndex = JSON.parse(localStorage.getItem('selectedTaskIndex'));
    return selectedTaskIndex;
}

function getSelectedTaskFromLocalStorage(){
    const selectedTask = JSON.parse(localStorage.getItem('selectedTask'));
    return selectedTask;
}

function getSelectedListIndex(){
    let currentListIndex = JSON.parse(localStorage.getItem('currentListIndex'));
    return currentListIndex;
}