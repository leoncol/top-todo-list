import { domElements, listViewDomElements} from "./dom-update-main";
import { activateCreateNewList, activateCreateNewTask, activateCreateNewTaskListView } from "./controller";
import { getSelectedList } from "./selected-list";
import { editList } from "./edit-list";
import datePicker from "./datepicker";
export {formEventListeners, clicked, formCreateNewTask, formTaskEventListeners, 
  formCreateNewTaskListsView, formTaskEventListenersListsView, getFormValues, 
  getTaskFormValues, editListEventListeners, editListTitle, editListDescription}
function clicked() {
  console.log('clicked and working');
}


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
    activateCreateNewList();
    dialog.close();
  
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
    activateCreateNewTaskListView();
    taskDialogListView.close();
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
      editList();
      editListDialog.close();
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


function editListFormValues(){
  const currentList = getSelectedList();
  const listTitle = currentList.title;
  const listDescription = currentList.description;
  const listTitleFormField = editListTitle;
  const listDescriptionFormField = editListDescription;
  listTitleFormField.value = listTitle;
  listDescriptionFormField.value = listDescription;
  
}


function editListChangeValues(){

}