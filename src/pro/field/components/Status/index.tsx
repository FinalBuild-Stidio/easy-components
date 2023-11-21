import type { CSSProperties } from 'react'
import React from 'react'
import Badge from '@mui/material/Badge'
import type { BadgeProps } from '@mui/material/Badge'

type StatusProps = {
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

/** 快捷操作，用於快速的顯示一個狀態 */
const Status: {
  Success: React.FC<StatusProps>
  Error: React.FC<StatusProps>
  Processing: React.FC<StatusProps>
  Default: React.FC<StatusProps>
  Warning: React.FC<StatusProps>
  success: React.FC<StatusProps>
  error: React.FC<StatusProps>
  processing: React.FC<StatusProps>
  default: React.FC<StatusProps>
  warning: React.FC<StatusProps>
} = {
  Success: ({ children }) => <Badge color="success">{children}</Badge>,
  Error: ({ children }) => <Badge color="error">{children}</Badge>,
  Default: ({ children }) => <Badge color="default">{children}</Badge>,
  Processing: ({ children }) => <Badge color="info">{children}</Badge>,
  Warning: ({ children }) => <Badge color="warning">{children}</Badge>,
  success: ({ children }) => <Badge color="success">{children}</Badge>,
  error: ({ children }) => <Badge color="error">{children}</Badge>,
  default: ({ children }) => <Badge color="default">{children}</Badge>,
  processing: ({ children }) => <Badge color="info">{children}</Badge>,
  warning: ({ children }) => <Badge color="warning">{children}</Badge>,
}

export type ProFieldStatusType = keyof typeof Status

export const ProFieldBadgeColor: React.FC<StatusProps & { color: BadgeProps['color'] }> = ({
  color,
  children,
}) => <Badge color={color}>{children}</Badge>

export default Status
