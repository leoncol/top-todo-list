import "./styles.css";
import createNewTask from "./create-task.js";
import {createNewList} from "./create-list.js";
import addToList from "./add-to-list.js";
import deleteFromList from "./delete-from-list.js";
import changeToList from "./change-to-list.js";
import setTaskStatus from "./set-task-status.js";
import setPriority from "./set-priority.js";
import {updateDOM, domElements, activateCaret, preventButtonBubbling} from "./dom-update-main.js";
import { formEventListeners, clicked } from "./dom-form.js";
import caretActivation from "./caret.js";
import { activateCreateNewList } from "./controller.js";


formEventListeners();
activateCreateNewList();
caretActivation();

preventButtonBubbling();




// let newTask = new createTask('Do work', 'Finish all tasks for the day', new Date("September 17, 2025"), 'high', "pending");

/* let newTask1 = new createTask(prompt('Insert a title for your task.'),prompt('Insert a description for your task'),
 new Date(prompt('Insert a valid date (Month day, year)')),prompt('Enter the priority (high/low)'),
 prompt('Enter the status(pending, in progress, done')); */

let testThis = 1;
 
// defaultList.content.push(newTask);
/* defaultList.content.push(newTask1); */


// console.log(newTask);



  

/* function addBookToLibrary() { // This calls the constructor and adds the books to the library.

  const bookTitle = bookTitleInput.value;
  const bookAuthor = bookAuthorInput.value;
  const bookPages = bookPagesInput.value;
  
  retrieveBookStatus();
    let newBook = new CreatedBook(bookTitle, bookAuthor, bookPages, bookStatus);
    newBook.isRead();
    myLibrary.push(newBook);
    displayAndDelete(newBook);
  }
  */

