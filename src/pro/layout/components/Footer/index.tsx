import type { CSSProperties } from 'react'
import React, { Fragment } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright'

import { Layout } from '@/base'
import type { WithFalse } from '../../typing'
import { GlobalFooter } from '../GlobalFooter'

const { Footer } = Layout

export type FooterProps = {
  links?: WithFalse<
    {
      key?: string
      title: React.ReactNode
      href: string
      blankTarget?: boolean
    }[]
  >
  copyright?: WithFalse<string>
  style?: CSSProperties
  className?: string
  prefixCls?: string
}

const DefaultFooter: React.FC<FooterProps> = ({
  links,
  copyright,
  style,
  className,
  prefixCls,
}: FooterProps) => (
  <Footer className={className} style={{ padding: 0, ...style }}>
    <GlobalFooter
      links={links}
      prefixCls={prefixCls}
      copyright={
        copyright === false ? null : (
          <Fragment>
            <CopyrightIcon fontSize="small" /> {copyright}
          </Fragment>
        )
      }
    />
  </Footer>
)

export { DefaultFooter }
