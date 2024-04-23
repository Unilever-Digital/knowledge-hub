import {eventClickDeocStnDashBoardFull} from '../hcl/po2.js';
import {eventClickHCL} from '../catalog.js';
import {eventClickButtonSetting} from './setting.js';
import { eventInitCatalog } from '../home.js';

export function eventClearWindown() {
    const workspace_win = document.querySelector(".dashboard-container");
    while(workspace_win.firstChild){
        workspace_win.removeChild(workspace_win.firstChild);
    }
}

function unactiveAll() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.classList.add('unactive');
        button.classList.remove('active');
    });
}

export function eventClickDeoc(){
    eventClearWindown();
    eventClickDeocStnDashBoardFull();
}

export function eventHomeClick(){
    eventClearWindown();
    eventClickHCL();
}

function eventDatabaseClick(){
    eventClearWindown();
}

function eventClickSetting(){
    eventClickButtonSetting();
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


function eventCreateButton(li_class, button_class, class_icon){
    const li_button = document.createElement("li");


    const button = document.createElement("button");
    const button_icon = document.createElement("i");

    // add class list to compnent
    button_class.forEach(element =>{
        button.classList.add(element);
    });
    class_icon.forEach(element =>{
        button_icon.classList.add(element);
    });
    li_class.forEach(element =>{
        li_button.classList.add(element);
    });

    button.appendChild(button_icon);
    li_button.appendChild(button);
    return li_button
}

export function eventCreateButtonBarHome(){
    const button_bar = document.querySelector(".button-bar");
    while(button_bar.firstChild){
        button_bar.removeChild(button_bar.firstChild);
    }
    const button_home = eventCreateButton([], ["button", "home"], ["bi", "bi-grid-3x3-gap-fill"]);
    const button_user = eventCreateButton(["ability-button", "user"], ["button"], ["bi", "bi-person-fill-gear"]);
    const button_setting = eventCreateButton(["ability-button", "setting-button"], ["button"], ["bi", "bi-gear"]);
    


    button_home.addEventListener('click', ()=>{
        eventInitCatalog();
    });

    button_user.addEventListener('click', ()=>{
        
    });

    button_setting.addEventListener('click', ()=>{
        eventClickSetting();
    });

    button_bar.appendChild(button_home);
    button_bar.appendChild(button_user);
    button_bar.appendChild(button_setting);
    buttonGen();
}


export function eventCreateButtonBarDEOC(){
    const button_bar = document.querySelector(".button-bar");
    while(button_bar.firstChild){
        button_bar.removeChild(button_bar.firstChild);
    }

    const button_home = eventCreateButton([], ["button", "home"], ["bi", "bi-grid-3x3-gap-fill"]);
    const button_deoc = eventCreateButton([], ["button", "deoc"], ["bi", "bi-display"]);
    const button_database = eventCreateButton([], ["button", "database"], ["bi", "bi-database"]);
    const button_user = eventCreateButton(["ability-button", "user"], ["button"], ["bi", "bi-person-fill-gear"]);
    const button_setting = eventCreateButton(["ability-button", "setting-button"], ["button"], ["bi", "bi-gear"]);

    

    button_home.addEventListener('click', ()=>{
        eventInitCatalog()
    });
    

    button_deoc.addEventListener('click', ()=>{
        eventClickDeoc();
    });

    button_database.addEventListener('click', ()=>{
        eventDatabaseClick();
    });

    button_user.addEventListener('click', ()=>{
        
    });

    button_setting.addEventListener('click', ()=>{
        eventClickSetting();
    });

    button_bar.appendChild(button_home);
    button_bar.appendChild(button_deoc);
    button_bar.appendChild(button_databse);
    button_bar.appendChild(button_user);
    button_bar.appendChild(button_setting);
    buttonGen();
}
