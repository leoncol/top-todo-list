import "./styles.css";
import createNewTask from "./create-task.js";
import createList from "./create-list.js";
import addToList from "./add-to-list.js";
import deleteFromList from "./delete-from-list.js";
import changeToList from "./change-to-list.js";
import setTaskStatus from "./set-task-status.js";

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



