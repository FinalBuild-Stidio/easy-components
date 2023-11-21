import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import FullscreenIcon from '@mui/icons-material/Fullscreen'

import { Tooltip } from '@/components/base'
import { isBrowser } from '../../../utils'

const FullScreenIcon = () => {
  const intl = useIntl()
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  useEffect(() => {
    if (!isBrowser()) {
      return
    }
    document.onfullscreenchange = () => {
      setFullscreen(!!document.fullscreenElement)
    }
  }, [])
  return fullscreen ? (
    <Tooltip title={intl.formatMessage({ id: 'tableToolBar.exitFullScreen', defaultMessage: '全螢幕' })}>
      <FullscreenExitIcon />
    </Tooltip>
  ) : (
    <Tooltip title={intl.formatMessage({ id: 'tableToolBar.fullScreen', defaultMessage: '全螢幕' })}>
      <FullscreenIcon />
    </Tooltip>
  )
}

export default React.memo(FullScreenIcon)
