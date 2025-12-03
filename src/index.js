import "./styles.css";
import { formEventListeners, formTaskEventListeners } from "./dom-form.js";
import {caretActivation, caretEventListener} from "./caret.js";
import { activateCreateNewList} from "./controller.js";
import { preventButtonBubbling } from "./dom-update-main.js";



formEventListeners();
formTaskEventListeners();
activateCreateNewList();
caretActivation();
caretEventListener();
preventButtonBubbling();