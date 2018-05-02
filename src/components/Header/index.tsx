import { t } from 'i18next'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default () =>
  <div className='Header'>
    <img src='logo.png' />
    <NavLink to='/security-dashboard' activeClassName='active'>{t('pages.securityDashboard.title')}</NavLink>
    <NavLink to='/policies' activeClassName='active'>{t('pages.policies.title')}</NavLink>
  </div>