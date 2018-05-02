import { t } from 'i18next'
import * as React from 'react'
import { Line, Pie } from 'react-chartjs-2'
import './index.css'

interface DevicesSummaryProps {
  title: string,
}

const pieData = {
  labels: [
    'Commercial',
    'Rogue',
    'Residential',
    'Unclaimed',
    'Industrial'
  ],
  datasets: [{
    data: [40, 20, 15, 15, 5],
    backgroundColor: [
      '#004360',
      '#029ABA',
      '#52E2FF',
      '#FE1D1D',
      '#FEAB1D'
    ],
    borderWidth: 0
  }]
}

const lineData = {
  labels: ['Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  datasets: [
    {
      label: 'Commercial',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#004360',
      borderColor: '#004360',
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65000, 59000, 80000, 81000, 56000]
    },
    {
      label: 'Rogue',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#029ABA',
      borderColor: '#029ABA',
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10000, 11000, 22000, 10000, 5000]
    },
    {
      label: 'Residential',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#52E2FF',
      borderColor: '#52E2FF',
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 10000, 20000, 30000, 40000]
    },
    {
      label: 'Unclaimed',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FE1D1D',
      borderColor: '#FE1D1D',
      pointRadius: 1,
      pointHitRadius: 10,
      data: [4000, 80000, 20000, 11000, 33000]
    },
    {
      label: 'Industrial',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FEAB1D',
      borderColor: '#FEAB1D',
      pointRadius: 1,
      pointHitRadius: 10,
      data: [6, 10000, 10000, 5000, 5000]
    }
  ]
}

export default ({ title }: DevicesSummaryProps) =>
  <div className='DevicesSummary report'>
    <h2>{t(title)}</h2>
    <hr />
    <label>{t('device groups')}</label>
    <div>
      <div>
        <Pie
          data={pieData}
          width={300}
          height={300}
          options={{ responsive: false }}
          legend={{ position: 'bottom', labels: { boxWidth: 10, padding: 10 } }}
        />
      </div>
      <Line
        width={600}
        height={300}
        data={lineData}
        options={{ responsive: false }}
        legend={{ display: false }}
      />
    </div>
  </div>