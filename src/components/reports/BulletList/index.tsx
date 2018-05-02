import { t } from 'i18next'
import * as React from 'react'
import './index.css'

interface BulletListProps {
  title: string,
  data: ReadonlyArray<Readonly<{ key: string, value: number, className?: string }>>
}

export default ({ title, data }: BulletListProps) =>
  <div className='BulletList report'>
    <h2>{t(title)}</h2>
    <hr />
    <ul>{
      data.map(({ key, value, className }) => (
        <li key={key}>
          <span className={className}><i className={className} />{`${value}`}</span>
          <span>{key}</span>
        </li>
      ))
    }</ul>
  </div>