import { createNewdomElements, domElements } from "./dom-update-main";
import addIcon from './assets/add-icon.svg'


export {updateSelectedList};

function getSelectedList(){
    const currentList = localStorage.getItem('currentList');
    return JSON.parse(currentList);
}

function updateSelectedList(){
    const selectedList = getSelectedList();
    const domNewElements = createNewdomElements();
    domNewElements.newCard.className = 'card';
    domElements.headerList.appendChild(domNewElements.newCard);
    domNewElements.newCardTextContainer.className = 'card-text-container';
    domNewElements.newCard.appendChild(domNewElements.newCardTextContainer);
    domNewElements.newCardTitle.className = 'card-text-title';
    domNewElements.newCardTitle.innerText = selectedList.title;
    domNewElements.newCardText.className = 'card-text';
    domNewElements.newCardText.innerText = selectedList.description;
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


