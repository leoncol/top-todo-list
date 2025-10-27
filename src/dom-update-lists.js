import addIcon from './assets/add-icon.svg'
import { domElements, createNewdomElements, updateChildButtons, preventButtonBubbling, lists } from "./dom-update-main";
import { handleLocalStorage} from './controller';
import { getFromLocalStorage, getListLocalStorage} from './create-list';
export {domUpdateLists, checkList, updateList} 




function domUpdateLists(){
    refreshLists();
    let localStorageCopy = handleLocalStorage();
    for (let i = 0; i < localStorageCopy.length; i++){
        let list = localStorageCopy[i];
        const title = list.title;
        const description = list.description
        console.log(title);
        console.log(description);
        const domNewElements = createNewdomElements();
        domNewElements.newAnchor.href = "./lists.html";
        domNewElements.newAnchor.className = "anchor-task";
        domElements.cardsProjects.appendChild(domNewElements.newAnchor); // appends task container
        domNewElements.newButton.className = "button-task";
        domNewElements.newButton.type = "button";
        domNewElements.newAnchor.appendChild(domNewElements.newButton);
        domNewElements.newCard.className = 'card';
        domNewElements.newButton.appendChild(domNewElements.newCard); // appends task container
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
        // preventButtonBubbling();
        
    }
   
    
    


}


function updateList(){
    let lists =  domElements.lists();
    return lists;
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
    let index = nodeArray.indexOf(list);
    return index;
}

function sendListLocalStorage(list){
    localStorage.setItem('currentList', JSON.stringify(list));
    
}

/* function sendToLocalStorage(){
    let checkLocalStorage = getFromLocalStorage();
    localStorage.setItem('listsFolder', JSON.stringify(checkLocalStorage));
    
    
} */



window.updateList = updateList; 

 function refreshLists(){
        let lists = updateList();
        lists.forEach(element => {
            element.remove();
        })
    }

    window.refreshLists = refreshLists;
    window.childButtons = childButtons;
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