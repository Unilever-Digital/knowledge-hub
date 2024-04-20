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


export function eventClickHomespace(){
    const workspace = document.querySelector(".dashboard-container");
    var component = createComponent("DEOC Dashboad vision camera quality (Cap, Bottles,...)", "deoc-button-home", "vision-cam.jpg");
    workspace.appendChild(component);
}