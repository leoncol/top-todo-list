import "./styles.css";
import caretActivation from "./caret.js";
import todayDate from "./lists-dates.js"
import { updateSelectedList } from "./dom-update-selected-list.js";
import {checkSelectedList} from "./selected-list";
import { formCreateNewTaskListsView, formTaskEventListenersListsView} from "./dom-form.js";
import { domElements } from "./dom-update-main.js";
import { activateCreateNewTaskListView } from "./controller.js";

updateSelectedList();
todayDate();
checkSelectedList();
formCreateNewTaskListsView();
formTaskEventListenersListsView();

console.log('Hello world!');