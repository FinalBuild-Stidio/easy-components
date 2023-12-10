import devWarning from 'rc-util/lib/warning'
import type { LinterInfo } from './interface'

export function lintWarning(message: string, info: LinterInfo) {
  const { path, parentSelectors } = info

  devWarning(
    false,
    `${path ? `Error in ${path}: ` : ''}${message}${parentSelectors.length ? ` Selector: ${parentSelectors.join(' | ')}` : ''
    }`,
  )
}
