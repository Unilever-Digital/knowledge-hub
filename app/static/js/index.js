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
            unactiveAll();
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

export async function eventClickDeoc(){
    eventClearWindown();
    await eventClickDeocStnDashBoardFull();
}

export async function eventHomeClick(){
    eventClearWindown();
    await eventClickHomespace();
}

function eventDatabaseClick(){
    eventClearWindown();
}

function unactiveAll(){
    const button_list = document.querySelectorAll(".button");
    button_list.forEach(element => {
        try{
        element.classList.remove('active');
        }
        catch{}
        try{
            element.classList.remove('unactive');
            element.classList.add('unactive'); 
        }
        catch{
            element.classList.add('unactive'); 
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    eventHomeClick();
});