import * as React from 'react'

import type { OverridableStringUnion } from '@mui/types'

export type OrginSizeType = OverridableStringUnion<'small' | 'medium' | 'large'>

export type SizeType = OrginSizeType

const SizeContext = React.createContext<SizeType>('medium')

export interface SizeContextProps {
  size?: SizeType
  children?: React.ReactNode
}

export const SizeContextProvider: React.FC<SizeContextProps> = ({ children, size }) => {
  const originSize = React.useContext<SizeType>(SizeContext)
  return <SizeContext.Provider value={size || originSize}>{children}</SizeContext.Provider>
}

export default SizeContext
