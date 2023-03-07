export const schemaDay = {
    options: {
        title: {
            text: 'Daily Rate',
            offsetX: 500,
            offsetY: 20,
        },
        chart: {
            id: "basic-bar",
            background: '#fff'
        },
        xaxis: {
            categories: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            title: {
                text: 'Day',
                offsetY: 36,
                offsetX: 260,
            },
        },
        yaxis: {
            title: {
                text: 'Value',
            },  
        },
        stroke: {
            show: true,
            colors: undefined,
            width: 2,     
        },
        grid: {
            show: true,
            borderColor: '#90A4AE',
            xaxis: {
                title: 'hrs',
                lines: {
                    show: true
                }
            },   
            yaxis: {
                title: {
                    text: 'Value',
                },
                lines: {
                    show: false
                }
            },  
        }
    },
    series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
};

export const schemaHour = {
    options: {
        title: {
            text: 'Hourly Rate',
            offsetX: 490,
            offsetY: 20,
        },
        chart: {
            id: "basic-bar",
            background: '#fff'
        },
        xaxis: {
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
            '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
            title: {
                text: 'Hrs',
                offsetY: 70,
                offsetX: 260,
            },
        },

        yaxis: {
            title: {
                text: 'Value',
            },  
        },
        stroke: {
            show: true,
            colors: undefined,
            width: 2,     
        },
        grid: {
            show: true,
            borderColor: '#90A4AE',
            xaxis: {
                title: 'hrs',
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },  
        }
    },
    series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ],
};