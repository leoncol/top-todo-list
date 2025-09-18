import getTaskIndex from "./get-task-index"
export default

function setTaskStatus(list, task, status){ // three allowed statuses: pending, doing, done;
    let index = getTaskIndex(list, task);

    if (status == 'pending' || status == 'doing' || status == 'done'){
        list.content[index].status = status;
        console.log(`The status of the task: ${task} has been changed to: ${status};`)
    }
    
}

window.setTaskStatus = setTaskStatus;