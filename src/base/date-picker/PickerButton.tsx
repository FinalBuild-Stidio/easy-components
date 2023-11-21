import * as React from 'react'
import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'

export default function PickerButton(props: ButtonProps) {
  return <Button size="small" color="primary" {...props} />
}
