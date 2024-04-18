

const button_start = document.querySelector(".run-button");
const button_end = document.querySelector(".stop-button");

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

document.addEventListener("DOMContentLoaded", function() {
    const header_workspace = document.querySelector(".workspace-header");
    header_workspace.appendChild(addDateTime());
});