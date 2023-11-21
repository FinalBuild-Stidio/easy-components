import * as React from 'react'
import { forwardRef, useContext, useImperativeHandle } from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CloseIcon from '@mui/icons-material/Close'
import classNames from 'classnames'
import RCPicker from 'rc-picker'
import type { GenerateConfig } from 'rc-picker/lib/generate/index'
import type { PickerMode } from 'rc-picker/lib/interface'

import type { PickerProps, PickerTimeProps } from '.'
import type { InputStatus } from '../../_util/statusUtils'
import { getMergedStatus, getStatusClassNames } from '../../_util/statusUtils'
import { devUseWarning } from '../../_util/warning'
import { ConfigContext } from '../../Config/ConfigContext'
import DisabledContext from '../../Config/DisabledContext'
import useSize from '../../Config/hooks/useSize'
import { FormItemInputContext } from '../../form/context'
import { useLocale } from '../../locale'
import { useCompactItemContext } from '../../space/Compact'
import enUS from '../locale/en_US'
import useStyle from '../style'
import {
  getPlaceholder,
  getTimeProps,
  mergeAllowClear,
  transPlacement2DropdownAlign,
} from '../util'
import Components from './Components'
import type { CommonPickerMethods, DatePickRef, PickerComponentClass } from './interface'

export default function generatePicker<DateType>(generateConfig: GenerateConfig<DateType>) {
  type CustomPickerProps = {
    status?: InputStatus
    hashId?: string
    popupClassName?: string
    rootClassName?: string
  }
  type DatePickerProps = PickerProps<DateType> & CustomPickerProps
  type TimePickerProps = PickerTimeProps<DateType> & CustomPickerProps

  function getPicker<InnerPickerProps extends DatePickerProps>(
    picker?: PickerMode,
    displayName?: string,
  ) {
    const consumerName = displayName === 'TimePicker' ? 'timePicker' : 'datePicker'
    const Picker = forwardRef<DatePickRef<DateType> | CommonPickerMethods, InnerPickerProps>(
      (props, ref) => {
        const {
          prefixCls: customizePrefixCls,
          getPopupContainer: customizeGetPopupContainer,
          style,
          className,
          rootClassName,
          size: customizeSize,
          bordered = true,
          placement,
          placeholder,
          popupClassName,
          dropdownClassName,
          disabled: customDisabled,
          status: customStatus,
          clearIcon,
          allowClear,
          ...restProps
        } = props

        const {
          getPrefixCls,
          getPopupContainer,
          // Consume different styles according to different names
          [consumerName]: consumerStyle,
        } = useContext(ConfigContext)

        const prefixCls = getPrefixCls('picker', customizePrefixCls)
        const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls)
        const innerRef = React.useRef<RCPicker<DateType>>(null)
        const { format, showTime } = props as any

        const [wrapSSR, hashId] = useStyle(prefixCls)

        useImperativeHandle(ref, () => ({
          focus: () => innerRef.current?.focus(),
          blur: () => innerRef.current?.blur(),
        }))

        const additionalProps = {
          showToday: true,
        }

        let additionalOverrideProps: any = {}
        if (picker) {
          additionalOverrideProps.picker = picker
        }
        const mergedPicker = picker || props.picker

        additionalOverrideProps = {
          ...additionalOverrideProps,
          ...(showTime ? getTimeProps({ format, picker: mergedPicker, ...showTime }) : {}),
          ...(mergedPicker === 'time'
            ? getTimeProps({ format, ...props, picker: mergedPicker })
            : {}),
        }
        const rootPrefixCls = getPrefixCls()

        // =================== Warning =====================
        if (process.env.NODE_ENV !== 'production') {
          const warning = devUseWarning(displayName! || 'DatePicker')

          warning(
            picker !== 'quarter',
            'deprecated',
            `DatePicker.${displayName} is legacy usage. Please use DatePicker[picker='${picker}'] directly.`,
          )

          warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName')
        }

        // ===================== Size =====================
        const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx)

        // ===================== Disabled =====================
        const disabled = React.useContext(DisabledContext)
        const mergedDisabled = customDisabled ?? disabled

        // ===================== FormItemInput =====================
        const formItemContext = useContext(FormItemInputContext)
        const { hasFeedback, status: contextStatus, feedbackIcon } = formItemContext

        const suffixNode = (
          <>
            {mergedPicker === 'time' ? <ScheduleIcon /> : <EventNoteIcon />}
            {hasFeedback && feedbackIcon}
          </>
        )

        const [contextLocale] = useLocale('DatePicker', enUS)

        const locale = { ...contextLocale, ...props.locale! }

        return wrapSSR(
          <RCPicker<DateType>
            ref={innerRef}
            placeholder={getPlaceholder(locale, mergedPicker, placeholder)}
            suffixIcon={suffixNode}
            dropdownAlign={transPlacement2DropdownAlign(placement)}
            prevIcon={<span className={`${prefixCls}-prev-icon`} />}
            nextIcon={<span className={`${prefixCls}-next-icon`} />}
            superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
            superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
            transitionName={`${rootPrefixCls}-slide-up`}
            {...additionalProps}
            {...restProps}
            {...additionalOverrideProps}
            locale={locale!.lang}
            className={classNames(
              {
                [`${prefixCls}-${mergedSize}`]: mergedSize,
                [`${prefixCls}-borderless`]: !bordered,
              },
              getStatusClassNames(
                prefixCls,
                getMergedStatus(contextStatus, customStatus),
                hasFeedback,
              ),
              hashId,
              compactItemClassnames,
              consumerStyle?.className,
              className,
              rootClassName,
            )}
            style={{ ...consumerStyle?.style, ...style }}
            prefixCls={prefixCls}
            getPopupContainer={customizeGetPopupContainer || getPopupContainer}
            generateConfig={generateConfig}
            components={Components}
            direction="ltr"
            disabled={mergedDisabled}
            dropdownClassName={classNames(
              hashId,
              rootClassName,
              popupClassName || dropdownClassName,
            )}
            allowClear={mergeAllowClear(allowClear, clearIcon, <CloseIcon />)}
          />,
        )
      },
    )

    if (displayName) {
      Picker.displayName = displayName
    }

    return Picker as unknown as PickerComponentClass<InnerPickerProps>
  }

  const DatePicker = getPicker<DatePickerProps>()
  const WeekPicker = getPicker<Omit<DatePickerProps, 'picker'>>('week', 'WeekPicker')
  const MonthPicker = getPicker<Omit<DatePickerProps, 'picker'>>('month', 'MonthPicker')
  const YearPicker = getPicker<Omit<DatePickerProps, 'picker'>>('year', 'YearPicker')
  // @ts-ignore
  const TimePicker = getPicker<Omit<TimePickerProps, 'picker'>>('time', 'TimePicker')
  // @ts-ignore
  const QuarterPicker = getPicker<Omit<TimePickerProps, 'picker'>>('quarter', 'QuarterPicker')

  return { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker }
}
