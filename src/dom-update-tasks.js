import addIcon from './assets/add-icon.svg';

import { listViewDomElements, createNewdomElements,  updateChildButtons, preventButtonBubbling,  } from "./dom-update-main";
import { handleLocalStorage, handleLocalStorageListView} from './controller';
import { getFromLocalStorage, getListLocalStorage} from './create-list';
export {domUpdateLists, checkList, updateList} 




function domUpdateLists(){
    refreshTasks();
    let currentListCopy = handleLocalStorageListView(); 
    let currentListCopyContent = currentListCopy.content;
    for (let i = 0; i < currentListCopyContent.length; i++){
        let task = currentListCopyContent[i];
        const title = task.title;
        const description = task.description;
        const dueDate = task.dueDate;
        const priority = task.priority;
        const status = task.status;
        console.log(title);
        console.log(description);
        console.log(dueDate);
        console.log(priority);
        console.log(status);
        const domNewElements = createNewdomElements();
        domNewElements.newCard.className = 'card-task';
        listViewDomElements.cardsProjects.appendChild(domNewElements.newCard); // appends task container
        domNewElements.newCardTextContainer.className = 'card-text-container';
        domNewElements.newCard.appendChild(domNewElements.newCardTextContainer);
        domNewElements.newCardTitle.className = 'card-text-title';
        domNewElements.newCardTitle.innerText = title;
        domNewElements.newCardText.className = 'card-text';
        domNewElements.newCardText.innerText = description;
        
        domNewElements.newCardTextContainer.appendChild(domNewElements.newCardTitle);
        domNewElements.newCardTextContainer.appendChild(domNewElements.newCardText);
        domNewElements.newIconContainer.className = 'card-icons-container-new-list';
        domNewElements.newCard.appendChild(domNewElements.newIconContainer);
        domNewElements.newCardIconsLists.className = 'card-icons';
        domNewElements.newIconContainer.appendChild(domNewElements.newCardIconsLists);
        domNewElements.newAddIcon.type = 'image';
        domNewElements.newAddIcon.classList.add('icon', 'add-task');
        domNewElements.newAddIcon.src = addIcon;
        domNewElements.newCardIconsLists.appendChild(domNewElements.newAddIcon);
        

       /* <div class="card-task">
                        <div class="card-text-container">
                            <p class="card-text-title">Title card</p>
                            <p class="card-text">Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam</p>  
                        </div>
                        <div class="card-icons-container">
                            <div class="metadata">
                                <div class="status">
                                <p class="status-title">Status:</p>
                                <p class="status-value-doing">Doing</p>
                                </div>
                                <div class="due-date">
                                    <p class="due-date-title">Due date:</p>
                                    <p class="due-date-value">12-02-2100</p>
                                </div>
                                <div class="priority">
                                    <p class="priority-title">Priority:</p>
                                    <p class="priority-value-high">High</p>
                                </div>
                            </div>
                            <div class="card-icons-tasks">
                                <img src="assets/pen-icon.svg" class="icon">
                                <img src="assets/trash-bin-icon.svg" class="icon">
                            </div>
                        </div>
                    </div>
        */
    }
   
    
    


}


function updateTasks(){
    let tasks =  listViewDomElements.listTasks();
    return tasks;
}

function checkList(){
    let lists = domElements.lists();
    lists.forEach(list =>{
        list.addEventListener("click", () => {
            console.log(list);
            let getIndex = getListIndex(list);
            getListLocalStorage(getIndex);
        }) 
    })
}

function getListIndex(list){
    let nodeArray = Array.from( domElements.lists());
    sendListNode(nodeArray); // sends DOM node to localStorage
    let index = nodeArray.indexOf(list);
    return index;
}


/* function sendToLocalStorage(){
    let checkLocalStorage = getFromLocalStorage();
    localStorage.setItem('listsFolder', JSON.stringify(checkLocalStorage));
    
    
} */



window.updateList = updateList; 

 function refreshTasks(){
        let tasks = updateList();
        if (tasks != null){
            tasks.forEach(element => {
            element.remove();
        })
        }
        
    }

    window.refreshLists = refreshLists;
    window.childButtons = childButtons;


function sendListNode(listDOMNode){
    localStorage.setItem('nodeList', JSON.stringify(listDOMNode));
}
    
/*              
                        <button class="button-task" type="button">
                            <div class="card">
                                <div class="card-text-container">
                                    <p class="card-text-title">Title card</p>
                                    <p class="card-text">Lorem ipsum
                                        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam</p>
                                </div>
                                <div class="card-icons-container-new-list">
                                    <div class="card-icons">
                                        <img src="assets/add-icon.svg" class="icon">
                                    </div>
                                </div>
                            </div>
                        </button>
                    </a>
                        </div>
                    </div>

                */

/*  href="./lists.html"
                */