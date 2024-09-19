"use client"
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";

Chartjs.register(ArcElement, Tooltip, Legend);


 
const DoughnutChart = ({}: DoughnutChartProps) => {
    const data ={
        datasets: [
            {
                label: 'Banks',
                data: [1250,2500,3750],
                backgroundColor: ['#0747b7', '#2265d8', '#2f91fa'],
            }

        ],
        labels: ['FNB', 'Standard Bank']
    }
  return <Doughnut 
    data={data} 
    options={{
        cutout: '60%',
        plugins:{
            legend:{
                display: false
            }
        }
    }}
  
  
  />
}

export default DoughnutChart