import { eventClickHCL } from "./catalog.js"
import { eventClearWindown } from "./component/button_bar.js";
import { clearDatePicker } from "./component/datetime.js";
import { clearMachineBar } from "./component/machine.js";
import { eventCreateButtonBarHome } from "./component/button_bar.js";
import { eventClickDeocPCL } from "./pcl/component/button_bar.js";

function factoryCatalog(class_, name, func){
    const component_catalog = document.createElement("div");
    const component_catalog_header = document.createElement("div");
    component_catalog_header.innerHTML = `<img class = "catalog-img" src = "static/images/factory.png"></img> <p> ${name}</p> <p class = "catalog-note">${name} dashboard & knowledge insight  </p>` ;
    const component_catalog_body = document.createElement("div");
    component_catalog_header.classList.add("factory-catalog-header");
    component_catalog_body.classList.add("factory-catalog-body");
    component_catalog.classList.add(class_);

    const button = document.createElement("button");
    button.innerHTML = "Go"
    button.addEventListener('click', func);

    component_catalog_header.appendChild(button);
    component_catalog.appendChild(component_catalog_header);
    component_catalog.appendChild(component_catalog_body);

    return component_catalog;
}

export function eventInitCatalog(){
    eventClearWindown();
    clearDatePicker();
    clearMachineBar();

    const workspace = document.querySelector(".main-workspace-body");
    const hcl = factoryCatalog("factory-catalog", "HCL", eventClickHCL);
    const pcl = factoryCatalog("factory-catalog", "PCL", eventClickPCL);
    const oral = factoryCatalog("factory-catalog", "ORAL");

    while(workspace.firstChild){
        workspace.removeChild(workspace.firstChild);
    }
    workspace.appendChild(hcl);
    workspace.appendChild(pcl);
    workspace.appendChild(oral);

    eventCreateButtonBarHome();
}