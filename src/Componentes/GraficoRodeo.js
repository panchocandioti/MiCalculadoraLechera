import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function GraficoRodeo(props) {

    const bajas = (props.bajaVacasP);
    const reposicion = (props.porcentajeReposicion);
    
    const data = {
        labels: ["Reposición (%)", "Bajas (%)"],
        datasets: [{
            label: "",
            data: [reposicion, bajas],
            backgroundColor: ["lightgreen", "lightpink"],
            borderColor: "gray",
            borderWidth: 1,
        }]
    }

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <div className='resultados'>
            <div className='grafico'>
                <div style={{ position: "relative", height: "21vh", minWidth: "50vw", maxWidth: "70vw" }}>
                    <Bar data={data} options={options}></Bar>
                </div>
            </div>
        </div>
    )
}

export default GraficoRodeo