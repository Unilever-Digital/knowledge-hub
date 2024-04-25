import { eventClearWindown, eventCreateButtonBarDEOC } from "../../component/button_bar.js";
import { initDatePicker } from "../../component/datetime.js";
import {clearMachineBar, initMachineBarPacking} from "../../component/machine.js"

async function createChartDashboard() {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    dashboard.id = "bar-chart-deoc-defect";

    // Create chart canvas
    const chartCanvas = document.createElement("canvas"); // Changed ID to avoid duplication
    chartCanvas.width = 690;
    chartCanvas.height = 300;
    dashboard.appendChild(chartCanvas);

    // Initialize Chart.js
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Counter of Bottles', 'Cap', 'Carton'],
            datasets: [{
                label: 'DEOC Top Defect (pcs/cs)',
                data: [12, 19, 3,],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 12 // Adjust the font size as needed
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 10 // Adjust the font size as needed
                        }
                    }
                }
            }
        }
    });

    return dashboard;
}

async function createLineChartDEOCTrend() {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    dashboard.id = "line-chart-deoc";

    // Create chart canvas
    const chartCanvas = document.createElement("canvas");
    chartCanvas.width = 700;
    chartCanvas.height = 300;
    dashboard.appendChild(chartCanvas);

    // Initialize Chart.js
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // Changed to 'bar' type
        data: {
            labels: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            datasets: [{
                label: 'DEOC Trend Realtime',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'DEOC Prediction',
                data: [12, 19, 3, 5, 2, 5, 7, 10 ,6],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });

    return dashboard;
}

async function createLineChartLineTrend() {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    dashboard.id = "line-chart-line";

    // Create chart canvas
    const chartCanvas = document.createElement("canvas");
    chartCanvas.width = 500;
    chartCanvas.height = 300;
    dashboard.appendChild(chartCanvas);

    // Initialize Chart.js
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // Changed to 'bar' type
        data: {
            labels: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            datasets: [{
                label: 'Line Trend Per Week',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Line Trend Prediction',
                data: [12, 19, 3, 5, 2, 5, 7, 10 ,6],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                    display: false // Tắt lưới dọc trên trục x
                },
                    beginAtZero: true
                }
            }
        }
    });

    return dashboard;
}

async function createLineChartSKUTrend() {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    dashboard.id = "line-chart-sku";

    // Create chart canvas
    const chartCanvas = document.createElement("canvas");
    chartCanvas.width = 500;
    chartCanvas.height = 300;
    dashboard.appendChild(chartCanvas);
    // Initialize Chart.js
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // Changed to 'bar' type
        data: {
            labels: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            datasets: [{
                label: 'SKU Trend Per Week',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'SKU Trend Prediction',
                data: [12, 19, 3, 5, 2, 5, 7, 10 ,6],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    grid: {
                        display: false // Tắt lưới dọc trên trục x
                    },
                    beginAtZero: true
                }
            }
        }
    });

    return dashboard;
}

async function createContainerInside() {
    const container_inside = document.createElement("div");
    container_inside.classList.add("inside-container");
    container_inside.innerHTML = "<div class = 'inside-header'> <p class ='inside-header-text'> Inside AI </p></div>"
    return container_inside;
}

// Initialize the date picker

export async function eventClickDeocStnDashBoard(){
    clearMachineBar();
    const dashboardContainer = document.querySelector(".dashboard-container"); // Changed to correct selector
    eventClearWindown();
    const chart = await createChartDashboard();
    const line = await createLineChartLineTrend();
    const deoc = await createLineChartDEOCTrend();
    const container_inside = await createContainerInside();
    const sku = await createLineChartSKUTrend();

    const container_col1 = document.createElement("div");
    container_col1.classList.add("container-column1");
    container_col1.appendChild(chart);
    container_col1.appendChild(deoc);

    const container_col2 = document.createElement("div");
    container_col2.classList.add("container-column2");
    container_col2.appendChild(line);
    container_col2.appendChild(sku);

    dashboardContainer.appendChild(container_col1);
    dashboardContainer.appendChild(container_col2);
    dashboardContainer.appendChild(container_inside);

    initMachineBarPacking();
    initDatePicker();
    eventCreateButtonBarDEOC();
}


