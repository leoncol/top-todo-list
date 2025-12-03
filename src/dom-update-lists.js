import addIcon from './assets/add-icon.svg';

import { domElements, createNewdomElements } from "./dom-update-main";
import { handleLocalStorage } from './controller';
import { sendListLocalStorage } from './create-list';
export {domUpdateLists, checkList, updateList, sendSelectedListIndex } 

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
        domNewElements.newAnchor.className = "anchor-list";
        domElements.cardsProjects.appendChild(domNewElements.newAnchor); // appends task container
        domNewElements.newButton.className = "button-list";
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
            sendListLocalStorage(getIndex);
        }) 
    })
}

function getListIndex(list){
    let nodeArray = Array.from( domElements.lists());
    let index = nodeArray.indexOf(list);
    sendSelectedListIndex(index); // sends DOM node to localStorage
    return index;
}



 function refreshLists(){
        let lists = updateList();
        lists.forEach(element => {
            element.remove();
        })
    }

function sendSelectedListIndex(index){
    localStorage.setItem('currentListIndex', JSON.stringify(index));
}
