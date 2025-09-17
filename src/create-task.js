export default createNewTask


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

    title = prompt();
    description = prompt();
    dueDate = prompt();
    priority = prompt();
    status = prompt();
    let newTask = new NewTask(title, description, dueDate, priority, status)
   
    
    return newTask;
}



window.createNewTask = createNewTask;


