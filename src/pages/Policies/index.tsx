import { ApplicationState } from 'ApplicationState'
import * as React from 'react'
import './index.css'

interface Props {
  data: Readonly<ApplicationState>
}

export default ({ data }: Props) =>
  <div className='Policies page'>
    Policies Page
  </div>