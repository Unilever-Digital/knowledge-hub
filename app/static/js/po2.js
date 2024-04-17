async function createChartDashboard() {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");

    // Create chart canvas
    const chartCanvas = document.createElement("canvas");
    chartCanvas.id = "myChart";
    chartCanvas.width = 400;
    chartCanvas.height = 400;
    dashboard.appendChild(chartCanvas);

    // Initialize Chart.js
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
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
                    beginAtZero: true
                }
            }
        }
    });

    return dashboard;
}


document.addEventListener("DOMContentLoaded", async function() {
    const dashboardContainer = document.querySelector(".dashboard-container");
    const chart = await createChartDashboard();
    dashboardContainer.appendChild(chart);
});
