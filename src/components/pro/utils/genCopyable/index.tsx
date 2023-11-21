import { Typography } from '@/components/base'
import React from 'react'

const isNeedTranText = (item: any): boolean => {
  if (item?.valueType?.toString().startsWith('date')) {
    return true
  }
  if (item?.valueType === 'select' || item?.valueEnum) {
    return true
  }
  return false
}

const getEllipsis = (item: any) => {
  if (item.ellipsis?.showTitle === false) {
    return false
  }

  return item.ellipsis
}

/**
 * 生成 Copyable 或 Ellipsis 的 dom
 *
 * @param dom
 * @param item
 * @param text
 */
export const genCopyable = (dom: React.ReactNode, item: any, text: string) => {
  if (item.copyable || item.ellipsis) {
    const copyable =
      item.copyable && text
        ? {
          text,
          tooltips: ['', ''],
        }
        : undefined

    /** 有些 valueType 需要設置copy的為string */
    const needTranText = isNeedTranText(item)

    const ellipsis =
      getEllipsis(item) && text
        ? {
          tooltip:
            // 支援一下 tooltip 的關閉
            item?.tooltip !== false && needTranText ? (
              <div className="pro-table-tooltip-text">{dom}</div>
            ) : (
              text
            ),
        }
        : false

    return (
      <Typography.Text
        style={{
          width: '100%',
          margin: 0,
          padding: 0,
        }}
        title=""
        copyable={copyable}
        ellipsis={ellipsis}
      >
        {dom}
      </Typography.Text>
    )
  }
  return dom
}
