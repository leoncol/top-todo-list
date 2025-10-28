import "./styles.css";
import caretActivation from "./caret.js";
import todayDate from "./lists-dates.js"
import { updateSelectedList } from "./dom-update-selected-list.js";
import {checkSelectedList} from "./selected-list";

updateSelectedList();
todayDate();
checkSelectedList();


console.log('Hello world!');