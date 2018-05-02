import { Action, activateSecurityDashboard, ApplicationState } from 'ApplicationState'
import * as React from 'react'
import BulletList from 'reports/BulletList'
import DevicesSummary from 'reports/DevicesSummary'
import ValueComparer from 'reports/ValueComparer'
import './index.css'

interface Props {
  data: Readonly<ApplicationState>
  dispatch: (a: Action) => void
}

export default ({ data, dispatch }: Props) =>
  <div className='SecurityDashboard page' >
    <div className='left'>
      <div>
        <div
          className={data.securityDashboard.active === 'devices' ? 'active' : ''}
          onClick={() => dispatch(activateSecurityDashboard('devices'))}
        >
          <ValueComparer
            title='pages.securityDashboard.devicesComparer.title'
            leftLabel='pages.securityDashboard.devicesComparer.left'
            leftValue={data.devices.total}
            rightLabel='pages.securityDashboard.devicesComparer.right'
            rightValue={data.devices.unclaimed}
          />
        </div>
        <div
          className={data.securityDashboard.active === 'users' ? 'active' : ''}
          onClick={() => dispatch(activateSecurityDashboard('users'))}
        >
          <ValueComparer
            title='pages.securityDashboard.usersComparer.title'
            leftLabel='pages.securityDashboard.usersComparer.left'
            leftValue={data.users.total}
            rightLabel='pages.securityDashboard.usersComparer.right'
            rightValue={data.users.new}
          />
        </div>
        <div
          className={data.securityDashboard.active === 'applications' ? 'active' : ''}
          onClick={() => dispatch(activateSecurityDashboard('applications'))}
        >
          <ValueComparer
            title='pages.securityDashboard.applicationsComparer.title'
            leftLabel='pages.securityDashboard.applicationsComparer.left'
            leftValue={data.application.total}
            rightLabel='pages.securityDashboard.applicationsComparer.right'
            rightValue={data.application.new}
          />
        </div>
      </div>
      <div>
        {data.securityDashboard.active === 'devices' &&
          <DevicesSummary title='pages.securityDashboard.devicesSummary.title' />
        }
      </div>
    </div>
    <div className='right'>
      <BulletList title={'pages.securityDashboard.alerts.title'} data={data.alerts} />
      <BulletList title={'pages.securityDashboard.blockchainStats.title'} data={data.blockchainStats} />
    </div>
  </div>