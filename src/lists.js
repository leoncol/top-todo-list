import "./styles.css";
import todayDate from "./lists-dates.js"
import { caretActivation, caretEventListener } from "./caret.js";
import { updateSelectedList } from "./dom-update-selected-list.js";
import { formCreateNewTaskListsView, formTaskEventListenersListsView, editListEventListeners, deleteListEventListeners, formEditTaskListsView, formEditTaskEventListenersListsView,
    formDeleteTaskEventListenersListsView } from "./dom-form.js";
import { activateDomUpdateTasks } from "./controller.js";

updateSelectedList();
todayDate();
formCreateNewTaskListsView();
formTaskEventListenersListsView();
activateDomUpdateTasks();
editListEventListeners();
deleteListEventListeners();
formEditTaskListsView();
formEditTaskEventListenersListsView();
formDeleteTaskEventListenersListsView();
caretActivation();
caretEventListener();