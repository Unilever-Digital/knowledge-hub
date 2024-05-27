export function eventClickButtonSetting(){
    const tab_setting = document.createElement("div");
    tab_setting.classList.add("tab-setting");
    tab_setting.innerHTML =`
            <button class = "setting1">Sub Button 1</button>
            <button class = "setting2">Sub Button 2</button>
            <button class = "setting3">Sub Button 3</button>
            <button class = "close-tab"> close </button>
        `;
    eventcloseTab();
    var tabs = document.querySelector(".tab-setting");
    tabs.style.display = "block";
    return tab_setting;
}

function eventcloseTab(){
    var button =  document.querySelector(".close-tab");
    button.addEventListener('click', () => {
        var tab =  document.querySelector(".tab-setting");
        tab.innerHTML = '';
    });
}