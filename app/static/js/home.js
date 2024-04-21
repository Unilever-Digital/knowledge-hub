import {eventClickDeocStnDashBoardFull} from './po2.js';
import {eventClickDeoc, eventHomeClick} from "./index.js"

function buttonGen(){
    const buttons = document.querySelectorAll('.button');
    let activeButton = null; // Variable to track active button

    buttons.forEach(button => {
        try{
            button.classList.remove('unactive');
            button.classList.add('unactive');
        }
        catch{button.classList.add('unactive');}
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

function eventClearWindown() {
    const workspace_win = document.querySelector(".dashboard-container");
    workspace_win.innerHTML = "";
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


function activeClickTabDeoc(){
    const button_bar = document.querySelector(".button-bar");
    button_bar.innerHTML = `
            <li><button class = "button home"> <i class="bi bi-grid-3x3-gap-fill"></i></button></li>
            <li><button class = "button deoc"> <i class="bi bi-display"></i></button></li>
            <li><button class = "button database"> <i class="bi bi-database"></i></button></li>
            <li class ="ability-button user"><button class = "button"> <i class ="bi bi-person-fill-gear"></i></button></li> 
            <li class ="ability-button setting-button"><button class = "button"> <i class ="bi bi-gear"></i></button></li>
    `;
    const button_home = document.querySelector(".button.home");
    const button_dec = document.querySelector(".button.deoc");

    button_home.addEventListener('click', () => {
        eventHomeClick();
        unactiveAll();
        buttonGen();
        const button_home_2 = document.querySelector(".button.home");
        button_home_2.classList.remove("unactive");
        button_home_2.classList.add("active");
    });

    button_dec.addEventListener('click', () => {
        const com = document.querySelector(".main-workspace-view-header");
        com.innerHTML = "";
        eventClickDeoc();
        unactiveAll();
        buttonGen();
        const button_dec = document.querySelector(".button.deoc");
        button_dec.classList.add("active");
    });
    
    unactiveAll();
    buttonGen();
    const deoc_button = document.querySelector(".button.deoc");
    deoc_button.classList.add("active");
}

// home button lick
export function eventClickHomespace(){
    const button_bar = document.querySelector(".button-bar");
    button_bar.innerHTML = `
            <li><button class = "button home"> <i class="bi bi-grid-3x3-gap-fill"></i></button></li>
            <li class ="ability-button user"><button class = "button"> <i class ="bi bi-person-fill-gear"></i></button></li> 
            <li class ="ability-button setting-button"><button class = "button"> <i class ="bi bi-gear"></i></button></li>
    `;
    const machine_bar = document.querySelector(".machine-bar");
    machine_bar.innerHTML = "";
    const workspace = document.querySelector(".dashboard-container");
    var component = createComponent("DEOC Dashboard",
        "deoc-button-home",
        "vision-cam.jpg");
    workspace.appendChild(component);

    // small button deoc click 
    const button_deoc = document.querySelector(".deoc-button-home");
    button_deoc.addEventListener('click', () =>{
        eventClearWindown();
        const com = document.querySelector(".main-workspace-view-header");
        com.innerHTML = "";
        eventClickDeocStnDashBoardFull();
        activeClickTabDeoc();
    });
    
    // home button click
    const button_home = document.querySelector(".button.home");
    button_home.addEventListener('click', () => {
        eventHomeClick();
        unactiveAll();
        buttonGen();
        const button_home = document.querySelector(".button.home");
        button_home.classList.remove("unactive");
        button_home.classList.add("active");
    });
    unactiveAll();
    buttonGen();
    const button_home_2 = document.querySelector(".button.home");
    button_home_2.classList.remove("unactive");
    button_home_2.classList.add("active");

    const com = document.querySelector(".main-workspace-view-header");
    com.innerHTML = "";
}
