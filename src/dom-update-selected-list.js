import { createNewdomElements, domElements } from "./dom-update-main";
import addIcon from './assets/add-icon.svg'
import trashIcon from './assets/trash-bin-icon.svg';
import penIcon from './assets/pen-icon.svg';
import { getFromLocalStorage } from "./create-list";
import { getSelectedList } from "./selected-list";
export {updateSelectedList};



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
    domNewElements.newIconContainer.className = 'card-icons-container-full-view';
    domNewElements.newCard.appendChild(domNewElements.newIconContainer);
    domNewElements.newCardIconsLists.className = 'card-icons';
    domNewElements.newIconContainer.appendChild(domNewElements.newCardIconsLists);
    domNewElements.newAddIcon.type = 'image';
    domNewElements.newAddIcon.classList.add('icon', 'add-task');
    domNewElements.newAddIcon.src = addIcon;
    domNewElements.newCardIconsLists.appendChild(domNewElements.newAddIcon);
    domNewElements.newPenIcon.type = 'image';
    domNewElements.newPenIcon.classList.add('icon', 'edit-task');
    domNewElements.newPenIcon.src = penIcon;
    domNewElements.newCardIconsLists.appendChild(domNewElements.newPenIcon);
    domNewElements.newTrashIcon.type = 'image';
    domNewElements.newTrashIcon.classList.add('icon', 'delete-task');
    domNewElements.newTrashIcon.src = trashIcon;
    domNewElements.newCardIconsLists.appendChild(domNewElements.newTrashIcon);    


}


