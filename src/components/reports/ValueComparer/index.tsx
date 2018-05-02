import { t } from 'i18next'
import * as React from 'react'
import { FaSearch as SearchIcon } from 'react-icons/lib/fa'
import './index.css'

interface ValueComparerProps {
  title: string,
  leftLabel: string,
  leftValue: number,
  rightLabel: string,
  rightValue: number
}

export default ({ title, leftLabel, leftValue, rightLabel, rightValue }: ValueComparerProps) =>
  <div className='ValueComparer report'>
    <h2>{t(title)}</h2>
    <input type='text' placeholder={t('search')} /><SearchIcon />
    <div>
      <div>
        <p>{leftValue}</p>
        <label>{t(leftLabel)}</label>
      </div>
      <div>
        <p>{rightValue}</p>
        <label>{t(rightLabel)}</label>
      </div>
    </div>
  </div>