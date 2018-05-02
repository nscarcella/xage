export interface ApplicationState {
  readonly devices: {
    total: number,
    unclaimed: number
  },
  readonly users: {
    total: number,
    new: number
  },
  readonly application: {
    total: number,
    new: number
  },
  readonly securityDashboard: {
    active: 'devices' | 'applications' | 'users'
  },
  readonly alerts: ReadonlyArray<Readonly<{ key: string, value: number, className?: string }>>,
  readonly blockchainStats: ReadonlyArray<Readonly<{ key: string, value: number, className?: string }>>
}

export type Action = (s: ApplicationState) => ApplicationState

export function activateSecurityDashboard(active: 'devices' | 'applications' | 'users'): Action {
  return (state: ApplicationState) => ({ ...state, securityDashboard: { ...state.securityDashboard, active } })
}