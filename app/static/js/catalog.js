import {eventClickDeocStnDashBoard} from './hcl/deoc/po2.js';
import {eventClickDeoc, eventCreateButtonBarDEOC, eventCreateButtonBarHome } from './component/button_bar.js';
import {eventClearWindown} from './component/button_bar.js'
import {clearDatePicker } from './component/datetime.js';
import { clearMachineBar } from './component/machine.js';
import { eventClickDeocMas140DashBoard } from './pcl/deoc/mas140.js';


function createComponent(content, id, image) {
    const component = document.createElement("div");
    component.classList.add("component-container");
    component.innerHTML = `
        <div class='header-component'>
            <img src = "static/images/home/${image}">
        </div>
        <div class='body-component'>
            <p>${content}</p>
            <button class ='${id}'> Go to </button>
        </div>
    `;
    return component;
}

function activeClickTabDeoc(){
    eventCreateButtonBarDEOC();
    const deoc_button = document.querySelector(".button.deoc");
    deoc_button.classList.add("active");
}

// home button lick
export function eventClickHCL(){
    eventClearWindown();
    clearDatePicker();
    clearMachineBar();
    const machine_bar = document.querySelector(".machine-bar");
    machine_bar.innerHTML = "";
    const workspace = document.querySelector(".dashboard-container");
    var component = createComponent("DEOC Dashboard", "deoc-button-home", "vision-cam.jpg");
    workspace.appendChild(component);
    const button_click_deoc = document.querySelector(".deoc-button-home");
    button_click_deoc.addEventListener('click', ()=>{
        eventClickDeocStnDashBoard();
    });
    eventCreateButtonBarHome();
}

export function eventClickPCL(){
    eventClearWindown();
    clearDatePicker();
    clearMachineBar();
    const machine_bar = document.querySelector(".machine-bar");
    machine_bar.innerHTML = "";
    const workspace = document.querySelector(".dashboard-container");
    var component = createComponent("DEOC Dashboard", "deoc-button-home", "vision-cam.jpg");
    workspace.appendChild(component);
    const button_click_deoc = document.querySelector(".deoc-button-home");
    button_click_deoc.addEventListener('click', ()=>{
        eventClickDeocMas140DashBoard();
    });
    eventCreateButtonBarHome();
}
