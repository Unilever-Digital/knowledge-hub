

// Function to create and style a date input element
export function createDateInput() {
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("date-picker");
    return dateInput;
}

// Function to initialize the date picker and potentially add event listeners
export function initDatePicker() {
    const datePicker = createDateInput();
    const com = document.querySelector(".main-workspace-view-header");
    com.appendChild(datePicker);

    // (Optional) Add event listeners for date selection or other functionalities
    datePicker.addEventListener("change", (event) => {
        const selectedDate = event.target.value;
        console.log("Selected Date:", selectedDate);
    });
}

export function clearDatePicker(){
    const com = document.querySelector(".main-workspace-view-header");
    while(com.firstChild){
        com.removeChild(com.firstChild);
    }
}