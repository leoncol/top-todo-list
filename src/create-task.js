export default createNewTask
import addToList from "./add-to-list";


class NewTask {
    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }
    
}

function createNewTask(title, description, dueDate, priority, status) {
    status = 'pending';
    let newTask = new NewTask(title, description, dueDate, priority, status)
    addToList(defaultList, newTask);
    
    
}



window.createNewTask = createNewTask;


