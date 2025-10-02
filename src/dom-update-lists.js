import addIcon from './assets/add-icon.svg'
import { domElements, createNewdomElements } from "./dom-update-main";
export default 


function domUpdateLists(list){

    const title = list.title;
    const description = list.description
    console.log(title);
    console.log(description);
    const domNewElements = createNewdomElements();
    domNewElements.newAnchor.href = "./lists.html";
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
    domNewElements.newAddIcon.className = 'icon';
    domNewElements.newAddIcon.src = addIcon;
    domNewElements.newCardIconsLists.appendChild(domNewElements.newAddIcon);


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