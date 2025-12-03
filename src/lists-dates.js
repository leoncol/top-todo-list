export default

function todayDate(){
    const today = new Date();
    const [formattedToday] = today.toISOString().split('T');
    const dateInput = document.getElementById('task-date'); // Assuming your date input has id="myDateInput"
    if (dateInput) {
        dateInput.setAttribute('min', formattedToday);
    } 
} 