import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'

import React from 'react'

const PageLoading: React.FC<CircularProgressProps> = () => (
  <div style={{ paddingBlockStart: 100, textAlign: 'center' }}>
    <CircularProgress />
  </div>
)

export { PageLoading }
