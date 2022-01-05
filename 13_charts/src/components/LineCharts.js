import React from 'react'
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const LineCharts = () => {

    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May"
        ],
        datasets: [
            {
                label: 'Sales for 2021 (M)',
                data: [3, 2, 2, 1, 5]
            },
            {
                label: "Sales for 2020 (M)",
                data: [1, 3, 2, 4, 5]
            },
        ]
    }

    const option = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
  },
    }

    return (
        <Line
            data={data}
            options={option}
        />
    )
}

export default LineCharts
