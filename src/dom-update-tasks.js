import penIcon from './assets/pen-icon.svg';
import trashIcon from './assets/trash-bin-icon.svg';
import { listViewDomElements, createNewdomElements } from "./dom-update-main";
import { handleLocalStorageListView, refreshTasksEventListenersListView } from './controller';
export { domUpdateTasks, getTaskIndex };

function domUpdateTasks(){
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
        domNewElements.newIconContainer.className = 'card-icons-container';
        domNewElements.newCard.appendChild(domNewElements.newIconContainer);
        domNewElements.newMetadata.className = 'metadata';
        domNewElements.newIconContainer.appendChild(domNewElements.newMetadata);
        domNewElements.newStatus.className = 'status';
        domNewElements.newMetadata.appendChild(domNewElements.newStatus);
        domNewElements.newStatusTitle.className = 'status-title';
        domNewElements.newStatusTitle.innerText = 'Status:'
        domNewElements.newStatus.appendChild(domNewElements.newStatusTitle);
        switch (status){
            case 'To do':
                domNewElements.newStatusValue.className = 'status-value-todo';
                break;
            case 'Doing':
                domNewElements.newStatusValue.className = 'status-value-doing';
                break;
            case 'Done': 
                domNewElements.newStatusValue.className = 'status-value-done';  
                break; 
            }
        domNewElements.newStatusValue.innerText = status;
        domNewElements.newStatus.appendChild(domNewElements.newStatusValue);
        domNewElements.newDueDate.className = 'due-date';
        domNewElements.newMetadata.appendChild(domNewElements.newDueDate);
        domNewElements.newDueDateTitle.className = 'due-date-title';
        domNewElements.newDueDateTitle.innerText = 'Due date:'
        domNewElements.newDueDate.appendChild(domNewElements.newDueDateTitle);
        domNewElements.newDueDateValue.className = 'due-date-value';
        domNewElements.newDueDateValue.innerText = dueDate;
        domNewElements.newDueDate.appendChild(domNewElements.newDueDateValue);
        domNewElements.newPriority.className = 'priority';
        domNewElements.newMetadata.appendChild(domNewElements.newPriority);
        domNewElements.newPriotityTitle.className = 'priority-title';
        domNewElements.newPriotityTitle.innerText = 'Priority:';
        domNewElements.newPriority.appendChild(domNewElements.newPriotityTitle);
        switch (priority){
            case 'Low':
                domNewElements.newPriorityValue.className = 'priority-value-high';
                break;
            case 'High':
                domNewElements.newPriorityValue.className = 'priority-value-low';
                break;
            }
        domNewElements.newPriorityValue.innerText = priority;
        domNewElements.newPriority.appendChild(domNewElements.newPriorityValue);
        domNewElements.newCardIconsLists.className = 'card-icons-tasks';
        domNewElements.newIconContainer.appendChild(domNewElements.newCardIconsLists);
        domNewElements.newPenIcon.type = 'image';
        domNewElements.newPenIcon.classList.add('icon', 'edit-task');
        domNewElements.newPenIcon.src = penIcon;
        domNewElements.newCardIconsLists.appendChild(domNewElements.newPenIcon);
        domNewElements.newTrashIcon.type = 'image';
        domNewElements.newTrashIcon.classList.add('icon', 'delete-task');
        domNewElements.newTrashIcon.src = trashIcon;
        domNewElements.newCardIconsLists.appendChild(domNewElements.newTrashIcon);
        refreshTasksEventListenersListView();
    }
}

function updateTasks(){
    let tasks =  listViewDomElements.listTasks();
    return tasks;
}

function getTaskIndex(task){
    let nodeArray = Array.from( listViewDomElements.listTasks());
    let index = nodeArray.indexOf(task);

    return index;
}

function refreshTasks(){
    let tasks = updateTasks();
    if (tasks != null){
            tasks.forEach(element => {
            element.remove();
        })
    }     
}