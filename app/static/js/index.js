import {eventClickDeocStnDashBoardFull} from './po2.js';
import {eventClickHomespace} from './home.js';

const button_start = document.querySelector(".run-button");
const button_end = document.querySelector(".stop-button");

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

async function eventClickStart() {
        // Send a request to your Flask server when the button is clicked
        const response = await fetch("/button_click", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });
        const data = await response.json();
        console.log(data);
}

async function eventClickEnd() {
        // Send a request to your Flask server when the button is clicked
        const response = await fetch("/button_end", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        });
        const data = await response.json();
        console.log(data);
}

function addDateTime() {
    const date = new Date();
    const component_date_time = document.createElement("div");
    component_date_time.classList.add("datetime-component");
    const datatime = document.createElement("a");
    datatime.innerHTML = date.toString();
    component_date_time.appendChild(datatime);
    return component_date_time
}

function buttonGen(){
    const buttons = document.querySelectorAll('.button');
    let activeButton = null; // Variable to track active button

    buttons.forEach(button => {
        button.classList.add('unactive'); 
        button.addEventListener('click', () => {
            if (activeButton) {
                activeButton.classList.add('unactive');
                activeButton.classList.remove('active'); // Deactivate previous button
            }
            activeButton = button;
            button.classList.remove('unactive');
            button.classList.add('active'); // Activate clicked button
        });
    });
}

function eventClearWindown() {
    const workspace_win = document.querySelector(".dashboard-container");
    workspace_win.innerHTML = "";
}

async function eventClickDeoc(){
    eventClearWindown();
    await eventClickDeocStnDashBoardFull();
}

async function eventHomeClick(){
    eventClearWindown();
    await eventClickHomespace();
}

function eventDatabaseClick(){
    eventClearWindown();
}

document.addEventListener("DOMContentLoaded", function() {
    buttonGen();
    const header_workspace = document.querySelector(".workspace-header");
    header_workspace.appendChild(addDateTime());
    initDatePicker();
    
    const button_home = document.querySelector(".button.home");
    const button_deoc = document.querySelector(".button.deoc");

    button_home.addEventListener('click', () => {
        eventHomeClick();
    });

    button_deoc.addEventListener('click',() => {
        eventClickDeoc();
    });
});