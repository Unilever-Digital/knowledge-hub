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
            labels: ['Barcode of Bottles', 'Barcode of outercase', 'Datecode', 'Cap', 'Counter', 'Checkweight'],
            datasets: [{
                label: 'DEOC Top Defect (pcs/cs)',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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

async function eventClickDeocStnDashBoard(){
    const machine_bar = document.querySelector(".machine-bar");
    const dashboardContainer = document.querySelector(".dashboard-container"); // Changed to correct selector
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
    machine_bar.innerHTML = `
                    <button class ="catalog-button" id = "po2"> Posimat2 </button>
                    <button class ="catalog-button" id = "po2"> STN </button>
                    `;
    
}

export function eventClickDeocStnDashBoardFull(){
    eventClickDeocStnDashBoard();
}
