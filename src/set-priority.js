import { set } from "lodash";
import getTaskIndex from "./get-task-index";
export default

function setPriority(list, task, priority){
    let index = getTaskIndex(list, task);

    if (priority == 1 || priority == 2 || priority == 3 || priority == 4){
        list.content[index].priority = priority;
        console.log(`The status of the task: ${task} has been changed to: ${priority};`)
    }
}

window.setPriority = setPriority;