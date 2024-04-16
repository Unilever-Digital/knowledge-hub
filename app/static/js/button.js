document.addEventListener("DOMContentLoaded", function() {
        const startButton = document.querySelector(".run-button");
        const endButton = document.querySelector(".stop-button");
        const statusBar = document.querySelector(".status-bar");

        startButton.addEventListener("click", function() {
            statusBar.classList.remove("end-color");
            statusBar.classList.add("start-color");
        });

        endButton.addEventListener("click", function() {
            statusBar.classList.remove("start-color");
            statusBar.classList.add("end-color");
        });
});