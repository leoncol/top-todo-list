import "./styles.css";
import caretActivation from "./caret.js";
import todayDate from "./lists-dates.js"
import { updateSelectedList } from "./dom-update-selected-list.js";
import {checkSelectedList} from "./selected-list";
import { formCreateNewTaskListsView, formTaskEventListenersListsView, editListEventListeners} from "./dom-form.js";
import { domElements } from "./dom-update-main.js";
import { activateCreateNewTaskListView, activateDomUpdateTasks } from "./controller.js";

updateSelectedList();
todayDate();
checkSelectedList();
formCreateNewTaskListsView();
formTaskEventListenersListsView();
activateDomUpdateTasks();
editListEventListeners();
console.log('Hello world!');