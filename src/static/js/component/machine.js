export function initMachineBarPacking(){
    const machine_bar = document.querySelector(".machine-bar");
    machine_bar.innerHTML = `
                    <button class ="catalog-button" id = "po2"> Posimat2 </button>
                    <button class ="catalog-button" id = "po2"> STN </button>
                    `;
}

export function clearMachineBar(){
    const machine_bar = document.querySelector(".machine-bar");
    machine_bar.innerHTML = "";
}