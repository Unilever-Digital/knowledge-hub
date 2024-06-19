import {eventCreateButtonBarHome, eventCreateButtonBarDEOC} from "./component/button_bar.js";
import {eventInitCatalog} from "./home.js"

// Function to create and style a date input element
function createDateInput() {
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.classList.add("date-picker");
  return dateInput;
}

// Function to initialize the date picker and potentially add event listeners
function initDatePicker() {
    const datePicker = createDateInput();
    const com = document.querySelector(".main-workspace-view-header");
    com.appendChild(datePicker);

    // (Optional) Add event listeners for date selection or other functionalities
    datePicker.addEventListener("change", (event) => {
        const selectedDate = event.target.value;
        console.log("Selected Date:", selectedDate);
    });
}

// Initialize the date picker

function addDateTime() {
    const date = new Date();
    const component_date_time = document.createElement("div");
    component_date_time.classList.add("datetime-component");
    const datatime = document.createElement("a");
    datatime.innerHTML = date.toString();
    component_date_time.appendChild(datatime);
    return component_date_time
}

document.addEventListener("DOMContentLoaded", function() {
    const commer = document.querySelector(".workspace-header");
    const date_time = addDateTime();
    commer.appendChild(date_time);
    eventCreateButtonBarHome();
    eventInitCatalog();
});


