import { domElements, createNewdomElements } from "./dom-update-main";
export {caretActivation, caretEventListener}

function caretActivation(){

    createNewCaretTask();
    let toggler = domElements.toggler
    var i;

    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        console.log('caret working');
        
    });
}
}

function clickTask(index){
        let nodeArray = Array.from( domElements.lists());
        let node = nodeArray[index];
        node.click();
        
    
}

function createNewCaretTask(){
    
    const storedListsFolder = JSON.parse(localStorage.getItem('listsFolder'));

     
     for (let i = 0; i < storedListsFolder.length; i++) {
        const newDomElements = createNewdomElements();
        let newCaretTask = newDomElements.newCaretTask;
        newCaretTask.className = 'task';
        newCaretTask.innerText = storedListsFolder[i].title;
        domElements.nested.appendChild(newCaretTask);



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
            clickTask(getIndex);
        }) 
    })
}


function getListTitles(){

    for (let i = 0; i < storedListsFolder.length; i++) {
        
        return storedListsFolder[i].title;

    }
}