import React from 'react'

import type { IClientRoute } from '@/config/routes'

export interface AppData {
  clientRoutes: IClientRoute[]
}

export const AppContext = React.createContext<AppData>({ clientRoutes: [] })

export function useAppData() {
  return React.useContext(AppContext)
}
