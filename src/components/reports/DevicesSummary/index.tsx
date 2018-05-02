import { t } from 'i18next'
import * as React from 'react'
import './index.css'

interface DevicesSummaryProps {
  title: string,
}

export default ({ title }: DevicesSummaryProps) =>
  <div className='DevicesSummary report'>
    <h2>{t(title)}</h2>
    <hr />
  </div>