import { domElements, createNewdomElements } from "./dom-update-main";
import { sendListLocalStorage } from "./create-list";
import { sendSelectedListIndex } from "./dom-update-lists";
export {caretActivation, caretEventListener, createNewCaretTask, cleanCaret };

function caretActivation(){
    createNewCaretTask();
    let toggler = domElements.toggler;
    var i;
    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
         });
    }
}

function createNewCaretTask(){
    const storedListsFolder = JSON.parse(localStorage.getItem('listsFolder'));
     for (let i = 0; i < storedListsFolder.length; i++) {
        const newDomElements = createNewdomElements();
        let newCaretTask = newDomElements.newCaretTask;
        newCaretTask.className = 'task';
        newCaretTask.href = "./lists.html";
        newCaretTask.innerText = storedListsFolder[i].title;
        let newCaretLi = newDomElements.newCaretLi;
        newCaretLi.appendChild(newCaretTask);
        domElements.nested.appendChild(newCaretLi);
    }
}

function getCaretIndex(caret){
    let nodeArray = Array.from( domElements.caretTasks());
    let index = nodeArray.indexOf(caret);
    return index;
}

function caretEventListener(){
    let carets = domElements.caretTasks();
    carets.forEach(caret =>{
        caret.addEventListener("click", () => {
            let getIndex = getCaretIndex(caret);
            sendListLocalStorage(getIndex);
            sendSelectedListIndex(getIndex);
        }); 
    });
}

function cleanCaret(){
    let carets = domElements.caretTasks();
    carets.forEach(caret =>{
            caret.remove();
    });
}