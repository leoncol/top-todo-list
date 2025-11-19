import { format } from "date-fns";

export {datePicker, editTaskDatePicker}

function datePicker(){
    const datePicker = document.getElementById("task-date-lview");
    const today = format(new Date(), "yyyy-MM-dd");
    datePicker.setAttribute("min", today);
    
    
}

function editTaskDatePicker(){
    const datePicker = document.getElementById("edit-task-date-lview");
    const today = format(new Date(), "yyyy-MM-dd");
    datePicker.setAttribute("min", today);
    
    
}

