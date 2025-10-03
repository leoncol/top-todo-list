import { domElements } from "./dom-update-main";
import { activateCreateNewList } from "./controller";
export {formEventListeners, clicked}
function clicked() {
  console.log('clicked and working');
}

let button = domElements.button;
let dialog = domElements.dialog;
let newList = domElements.newList;
let closeButton = domElements.closeButton;
let enterListForm = domElements.enterListForm;
let submitButton = domElements.submitButton;

function formEventListeners() {
  // "Show the dialog" button opens the dialog modally
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
