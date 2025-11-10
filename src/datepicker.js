import { format } from "date-fns";

export default

function setMinDate(){
    const datePicker = document.getElementById("task-date-lview");
    const today = format(new Date(), "yyyy-MM-dd");
    datePicker.setAttribute("min", today);
    
    
}
