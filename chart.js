const traffic = document.getElementById('traffic-chart').getContext('2d');

var chart1 = new Chart(traffic, {
    // chart type
    type: 'line',

    // data set
    data: {
        labels: ['16-22', '23-29','30-5','6-12','13-19',
        '20-26', '27-3', '4-10','11-17', '18-24','25-31'],
        datasets: [{
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderColor: 'rgba(176, 179, 231, 1)',
            borderWidth: 2,
            pointRadius: 6,
            pointBackgroundColor: 'rgba(251, 251,251, 1)',
            pointBorderWidth:'2',
            pointBorderColor: 'rgba(116, 120, 191, 1)',
            lineTension: 0,
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        _responsive: {
            responsive: true,
            maintainAspectRatio: true
        },
        get responsive() {
            return this._responsive;
        },
        set responsive(value) {
            this._responsive = value;
        },
    }
});
