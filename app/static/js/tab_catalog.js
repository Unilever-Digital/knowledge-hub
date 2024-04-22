function factoryCatalog(class_){
    const component_catalog = document.createElement("div");
    const component_catalog_header = document.createElement("div");
    const component_catalog_body = document.createElement("div");
    component_catalog.classList.add(class_);
    component_catalog.appendChild(component_catalog_header);
    component_catalog.appendChild(component_catalog_body);

    return component_catalog;

}


function eventInitCatalog(){
    const workspace = document.querySelector(".dashboard-container");
    
}