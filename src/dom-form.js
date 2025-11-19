import { domElements, listViewDomElements} from "./dom-update-main";
import { activateCreateNewList, activateCreateNewTask, activateCreateNewTaskListView, activateEditTaskListView } from "./controller";
import { getSelectedList } from "./selected-list";
import { editList } from "./edit-list";
import { deleteList } from "./delete-list.js";
import { checkTasks, getTask } from "./dom-update-tasks.js";
import {datePicker, editTaskDatePicker} from "./datepicker";
import { getSelectedTaskFromLocalStorage } from "./create-task.js";
export {formEventListeners, clicked, formCreateNewTask, formTaskEventListeners, 
  formCreateNewTaskListsView, formTaskEventListenersListsView, getFormValues, 
  getTaskFormValues, editListEventListeners, deleteListEventListeners, editListTitle, editListDescription, formEditTaskListsView, getEditTaskFormValues, formEditTaskEventListenersListsView}
function clicked() {
  console.log('clicked and working');
}

let listTitle = domElements.listTitleInput;
let listDescription = domElements.listDescriptionInput;
let taskDialog = domElements.taskDialog;
let taskCloseButton = domElements.closeButtonTask;
let taskForm = domElements.enterTaskForm;
let taskSubmitButton = domElements.taskSubmitButton;
let taskDialogListView = listViewDomElements.taskDialog;
let taskCloseButtonListView = listViewDomElements.closeButtonTask;
let taskFormListView  = listViewDomElements.enterTaskForm;
let taskSubmitButtonListView = listViewDomElements.taskSubmitButton;
let editListDialog = listViewDomElements.editListDialog;
let editListTitle = listViewDomElements.editListTitle;
let editListDescription = listViewDomElements.editListDescription;
let editListSubmitButton = listViewDomElements.editListSubmitButton;
let editListCloseButton = listViewDomElements.editListCloseButton;
let editListForm = listViewDomElements.editListForm;
let deleteListDialog = listViewDomElements.deleteListDialog;
let deleteListButton = listViewDomElements.deleteListButton;
let deleteListCloseButton = listViewDomElements.deleteListCloseButton;
let editTaskDialog = listViewDomElements.editTaskDialog;
let editTaskForm = listViewDomElements.editTaskForm;
let editTaskTitle = listViewDomElements.editTaskTitle;
let editTaskDescription = listViewDomElements.editTaskDescription;
let editTaskDate = listViewDomElements.editTaskDate;
let editTaskPriority = listViewDomElements.editTaskPriority;
let editTaskStatus = listViewDomElements.editTaskStatus;
let editTaskSubmitButton = listViewDomElements.editTaskSubmitButton;
let closeButtonEditTask = listViewDomElements.closeButtonEditTask;
let dialog = domElements.dialog;
let newList = domElements.newList;
let closeButton = domElements.closeButton;
let enterListForm = domElements.enterListForm;
let submitButton = domElements.submitButton;

window.taskSubmitButtonListView = taskSubmitButtonListView;
function formEventListeners() {
  // "Show the dialog" button opens the dialog modally for the lists form.
  newList.addEventListener("click", () => {
    dialog.showModal();
  });

 
      


// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

   
  enterListForm.addEventListener("submit", function (event){
    event.preventDefault();
});

submitButton.addEventListener("click", () => {
    let validate = validateNewList();
    if (validate == true){
      activateCreateNewList();
      dialog.close();
    } else {
      alert('Fill out all fields!');
    }
  
});

}


function formCreateNewTask(){
  let lists = domElements.lists();
  lists.forEach(list =>{
    list.addEventListener("click", (event) => {
      let type = event.target;
      if (type.tagName === 'INPUT'){
        taskDialog.showModal();
        
      }
    })
  })
    
}

function formTaskEventListeners(){
  taskCloseButton.addEventListener("click", () => {
    taskDialog.close();
  })

  taskForm.addEventListener("submit", function (event){
    event.preventDefault();
  })

  taskSubmitButton.addEventListener("submit", () => {
    activateCreateNewTask();
    taskDialog.close();
  })
}

function formCreateNewTaskListsView(){
      let selectedList = listViewDomElements.selectedList();
      selectedList.addEventListener("click", (event) => {
        let type = event.target;
        let className = type.classList[1]; // we check the className by checking the 1 slot since elements will always have two classes the icon general class
        // and the specific class.
        switch (className){
          case 'add-task':
            datePicker();
            taskDialogListView.showModal();
            break;
          case 'edit-list':
            editListFormValues();
            editListDialog.showModal();
            break;
          case 'delete-list':
            deleteListDialog.showModal();
            break;
        }
        console.log(className);

      })
}

function formTaskEventListenersListsView(){
  taskCloseButtonListView.addEventListener("click", () => {
    taskDialogListView.close();
  })

  taskFormListView.addEventListener("submit", function (event){
    event.preventDefault();
  })

  taskSubmitButtonListView.addEventListener("click", () => {
    let validate = validateNewTask();
    if (validate == true){
      activateCreateNewTaskListView();
      taskDialogListView.close();
    } else {
      alert('Fill out all fields!');
    }
    
  })
}

function editListEventListeners(){
    editListCloseButton.addEventListener("click", () => {
      editListDialog.close();
    })

    editListForm.addEventListener("submit", function (event){
      event.preventDefault();
    })

    editListSubmitButton.addEventListener("click", () => {
      let validate = validateEditList();
      if (validate == true){
        editList();
        editListDialog.close();
      } else {
        alert('Fill out all fields!');
      }
      
    })
}

function deleteListEventListeners(){
  deleteListCloseButton.addEventListener("click", () => {
    deleteListDialog.close();
  })
  deleteListButton.addEventListener("click",() => {
    console.log("Working");
    deleteList();
  } )
}

function formEditTaskListsView(){
  let selectedTask = listViewDomElements.listTasks();
  selectedTask.forEach(task =>{
    task.addEventListener("click", (event) => {
      let type = event.target;
      let className = type.classList[1]; // we check the className by checking the 1 slot since elements will always have two classes the icon general class
      // and the specific class.
      switch (className){
        case 'edit-task':
          editTaskFormValues();
          editTaskDatePicker();
          editTaskDialog.showModal();
          console.log('working');
          break;
        case 'delete-task':
          console.log('working');
          break;
      }
  })
 

  })
}


function formEditTaskEventListenersListsView(){
  closeButtonEditTask.addEventListener("click", () => {
    editTaskDialog.close();
  })

  editTaskForm.addEventListener("submit", function (event){
    event.preventDefault();
  })

  editTaskSubmitButton.addEventListener("click", () => {
    let validate = validateEditTask();
    if (validate == true){
      activateEditTaskListView();
      editTaskDialog.close();
    } else {
      alert('Fill out all fields!');
    }
    
  })
}



function getFormValues(){
    const listTitleInputValue = domElements.listTitleInput.value;
    const listDescriptionInputValue = domElements.listDescriptionInput.value



    return {listTitleInputValue, listDescriptionInputValue}
}


function getTaskFormValues(){
    const taskTitleInputValue = listViewDomElements.taskTitleInput.value;
    const taskDescriptionInputValue = listViewDomElements.taskDescriptionInput.value;
    const taskDateInputValue = listViewDomElements.taskDateInput.value;
    const taskPriorityInputValue = listViewDomElements.taskPriorityInput.value;
    const taskStatusInputValue = listViewDomElements.taskStatusInput.value;

    return {taskTitleInputValue, taskDescriptionInputValue, taskDateInputValue, taskPriorityInputValue, taskStatusInputValue}
}

function getEditTaskFormValues(){
  const editTaskTitle = listViewDomElements.editTaskTitle.value;
  const editTaskDescription = listViewDomElements.editTaskDescription.value;
  const editTaskDate = listViewDomElements.editTaskDate.value;
  const editTaskPriority = listViewDomElements.editTaskPriority.value;
  const editTaskStatus = listViewDomElements.editTaskStatus.value;

  return {editTaskTitle, editTaskDescription, editTaskDate, editTaskPriority, editTaskStatus}
}



function editListFormValues(){
  const currentList = getSelectedList();
  const listTitle = currentList.title;
  const listDescription = currentList.description;
  const listTitleFormField = editListTitle;
  const listDescriptionFormField = editListDescription;
  listTitleFormField.value = listTitle;
  listDescriptionFormField.value = listDescription;
  
}

function editTaskFormValues(){
  const currentTask = getSelectedTaskFromLocalStorage();
  const taskTitle = currentTask.title;
  const taskDescription = currentTask.description;
  const taskDueDate = currentTask.dueDate;
  const taskPriority = currentTask.priority;
  const taskStatus = currentTask.status;
  const currentTaskTitle = editTaskTitle;
  const currentTaskDescription = editTaskDescription;
  const currentTaskDueDate = editTaskDate;
  const currentTaskPriority = editTaskPriority;
  const currentTaskStatus = editTaskStatus;
  currentTaskTitle.value = taskTitle;
  currentTaskDescription.value = taskDescription;
  currentTaskDueDate.value = taskDueDate;
  switch (taskPriority){
    case 'Low':
      currentTaskPriority.value = 0;
      break;
    case 'High':
      currentTaskPriority.value = 1;
      break;
  }
  switch (taskStatus){
    case 'To do':
      currentTaskStatus.value = 0;
      break;
    case 'Doing':
      currentTaskStatus.value = 1;
      break;
    case 'Done':
      currentTaskStatus.value = 2;
      break;
  }
   /*  <option value="0">To do</option>
                                    <option value="1">Doing</option>
                                    <option value="2">Done</option> */
}


function editListChangeValues(){

}

function validateNewList(){
  let listTitleValue = listTitle.value;
  let listDescriptionValue = listDescription.value;
  if (listTitleValue == '' || listDescriptionValue == ''){
    return false;
  } else {
    return true;
  }
}

function validateNewTask(){
    let formValues = getTaskFormValues();
    let title = formValues.taskTitleInputValue;
    let description = formValues.taskDescriptionInputValue;
    let date = formValues.taskDateInputValue;

    if (title == '' || description == '' || date == ''){
      return false;
    } else {
      return true;
    }
}

function validateEditTask(){
  let editFormValues = getEditTaskFormValues();
  let title = editFormValues.editTaskTitle;
  let description = editFormValues.editTaskDescription;
  let date = editFormValues.editTaskDate;

  if (title == '' || description == '' || date == ''){
    return false;
  } else {
    return true;
  }
}

function validateEditList(){
  
  const title = editListTitle.value;
  const description = editListDescription.value;
  
  if (title == '' || description == ''){
    return false;
  } else {
    return true;
  }
}