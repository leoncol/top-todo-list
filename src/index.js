import "./styles.css";
import createNewTask from "./create-task.js";
import createList from "./create-list.js";
import addToList from "./add-to-list.js";
import deleteFromList from "./delete-from-list.js";
import changeToList from "./change-to-list.js";
import setTaskStatus from "./set-task-status.js";
import setPriority from "./set-priority.js";



const submitButton = document.querySelector("#submit");
const enterListForm = document.querySelector("#enter-list");
const closeButton = document.querySelector("dialog #close-button");

const dialog = document.querySelector("dialog");
const newList = document.querySelector("#new-list");

var button = document.querySelector(".button-task");

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
  });
}

let defaultList = new createList('Default', 'Default list');



// let newTask = new createTask('Do work', 'Finish all tasks for the day', new Date("September 17, 2025"), 'high', "pending");

/* let newTask1 = new createTask(prompt('Insert a title for your task.'),prompt('Insert a description for your task'),
 new Date(prompt('Insert a valid date (Month day, year)')),prompt('Enter the priority (high/low)'),
 prompt('Enter the status(pending, in progress, done')); */

let testThis = 1;
 
// defaultList.content.push(newTask);
/* defaultList.content.push(newTask1); */


// console.log(newTask);
console.log(defaultList);

window.testThis = testThis;


window.defaultList = defaultList;


function clicked() {
  console.log('clicked and working');
}

button.addEventListener("click", clicked);
  // "Show the dialog" button opens the dialog modally
  newList.addEventListener("click", () => {
    dialog.showModal();
  });

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});


  

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

   
  enterListForm.addEventListener("submit", function (event){
    event.preventDefault();
});

submitButton.addEventListener("click", () => {
    createList();
  
});
