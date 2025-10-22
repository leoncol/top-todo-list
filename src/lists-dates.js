import { format } from "date-fns";
export default

function todayDate(){
    const today = new Date();

// 2. Format the date to 'YYYY-MM-DD'
// We use toISOString() and then split to get only the date part,
// as toISOString() returns a string like "2025-10-22T17:33:00.000Z"
const [formattedToday] = today.toISOString().split('T');

// 3. Set the 'min' attribute of the date input
 const dateInput = document.getElementById('task-date'); // Assuming your date input has id="myDateInput"
if (dateInput) {
    dateInput.setAttribute('min', formattedToday);
} 

    console.log(formattedToday);
} 


window.todayDate = todayDate;