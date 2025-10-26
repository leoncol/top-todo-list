import { domElements } from "./dom-update-main";
import { activateCreateNewList } from "./controller";
export {formEventListeners, clicked, formCreateNewTask, formTaskEventListeners}
function clicked() {
  console.log('clicked and working');
}


let taskDialog = domElements.taskDialog;
let taskCloseButton = domElements.closeButtonTask;
let dialog = domElements.dialog;
let newList = domElements.newList;
let closeButton = domElements.closeButton;
let enterListForm = domElements.enterListForm;
let submitButton = domElements.submitButton;

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
}