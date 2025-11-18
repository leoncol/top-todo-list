import "./styles.css";
import caretActivation from "./caret.js";
import todayDate from "./lists-dates.js"
import { updateSelectedList } from "./dom-update-selected-list.js";
import {checkSelectedList} from "./selected-list";
import { formCreateNewTaskListsView, formTaskEventListenersListsView, editListEventListeners, deleteListEventListeners, formEditTaskListsView} from "./dom-form.js";
import { domElements } from "./dom-update-main.js";
import { activateCreateNewTaskListView, activateDomUpdateTasks } from "./controller.js";
import { checkTasks } from "./dom-update-tasks.js";

updateSelectedList();
todayDate();
checkSelectedList();
formCreateNewTaskListsView();
formTaskEventListenersListsView();
activateDomUpdateTasks();
editListEventListeners();
deleteListEventListeners();
checkTasks();
formEditTaskListsView();

console.log('Hello world!');