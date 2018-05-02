import Header from 'components/Header'
import * as i18n from 'i18next'
import * as xhr from 'i18next-xhr-backend'
import Policies from 'pages/Policies'
import SecurityDashboard from 'pages/SecurityDashboard'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Action, ApplicationState } from './ApplicationState'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

class App extends React.Component<{}, ApplicationState> {

  constructor(props: {}) {
    super(props)

    const initialState: ApplicationState = {
      devices: {
        total: 1000,
        unclaimed: 4
      },
      users: {
        total: 24,
        new: 6
      },
      application: {
        total: 85,
        new: 0
      },
      securityDashboard: {
        active: 'devices'
      },
      alerts: [
        { key: 'rogue devices', value: 112, className: 'bad' },
        { key: 'new devices unclaimed', value: 2 },
        { key: 'enrollment failures', value: 15, className: 'bad' },
        { key: 'failed login attempts', value: 8, className: 'bad' }
      ],
      blockchainStats: [
        { key: 'node count', value: 1260, className: 'good' },
        { key: 'nodes online', value: 1000, className: 'good' },
        { key: 'nodes offline', value: 260, className: 'good' }
      ]
    }

    this.state = initialState
  }

  public render() {
    const dispatch = (action: Action) => this.setState(action)

    return (
      <I18nextProvider i18n={i18nInstance}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/security-dashboard' render={() => <SecurityDashboard data={this.state} dispatch={dispatch} />} />
              <Route path='/policies' render={() => <Policies data={this.state} />} />
              <Redirect to='/security-dashboard' />
            </Switch>
          </div>
        </Router>
      </I18nextProvider>
    )
  }
}

const i18nInstance = i18n.use(xhr).init({
  fallbackLng: 'en',
  preload: ['en'],
  debug: process.env.NODE_ENV === 'development',
  backend: {
    loadPath: 'locales/{{lng}}.json',
    crossDomain: false
  },
  react: {
    wait: true
  }
}, () => {
  ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
  registerServiceWorker()
})