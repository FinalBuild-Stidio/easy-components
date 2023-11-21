import * as React from 'react'
import { forwardRef, useContext, useImperativeHandle } from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CloseIcon from '@mui/icons-material/Close'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import classNames from 'classnames'
import { RangePicker as RCRangePicker } from 'rc-picker'
import type { GenerateConfig } from 'rc-picker/lib/generate/index'

import type { RangePickerProps } from '.'
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
  getRangePlaceholder,
  getTimeProps,
  mergeAllowClear,
  transPlacement2DropdownAlign,
} from '../util'
import Components from './Components'
import type { CommonPickerMethods, PickerComponentClass } from './interface'

export default function generateRangePicker<DateType>(generateConfig: GenerateConfig<DateType>) {
  type InternalRangePickerProps = RangePickerProps<DateType> & {}
  type DateRangePickerProps = RangePickerProps<DateType> & {
    /**
     * @deprecated `dropdownClassName` is deprecated which will be removed in next major
     *   version.Please use `popupClassName` instead.
     */
    dropdownClassName?: string
    popupClassName?: string
    rootClassName?: string
  }

  const RangePicker = forwardRef<
    InternalRangePickerProps | CommonPickerMethods,
    DateRangePickerProps
  >((props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      getPopupContainer: customGetPopupContainer,
      className,
      placement,
      size: customizeSize,
      disabled: customDisabled,
      bordered = true,
      placeholder,
      popupClassName,
      dropdownClassName,
      status: customStatus,
      clearIcon,
      allowClear,
      rootClassName,
      ...restProps
    } = props

    const innerRef = React.useRef<RCRangePicker<DateType>>(null)
    const { getPrefixCls, getPopupContainer } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('picker', customizePrefixCls)
    const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls)
    const { format, showTime, picker } = props as any
    const rootPrefixCls = getPrefixCls()

    const [wrapSSR, hashId] = useStyle(prefixCls)

    const additionalOverrideProps: any = {
      ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
      ...(picker === 'time' ? getTimeProps({ format, ...props, picker }) : {}),
    }

    // =================== Warning =====================
    if (process.env.NODE_ENV !== 'production') {
      const warning = devUseWarning('DatePicker.RangePicker')

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
        {picker === 'time' ? <ScheduleIcon /> : <EventNoteIcon />}
        {hasFeedback && feedbackIcon}
      </>
    )

    useImperativeHandle(ref, () => ({
      focus: () => innerRef.current?.focus(),
      blur: () => innerRef.current?.blur(),
    }))

    const [contextLocale] = useLocale('Calendar', enUS)

    const locale = { ...contextLocale, ...props.locale! }

    return wrapSSR(
      <RCRangePicker<DateType>
        separator={
          <span aria-label="to" className={`${prefixCls}-separator`}>
            <TrendingFlatIcon />
          </span>
        }
        disabled={mergedDisabled}
        ref={innerRef}
        dropdownAlign={transPlacement2DropdownAlign(placement)}
        placeholder={getRangePlaceholder(locale, picker, placeholder)}
        suffixIcon={suffixNode}
        prevIcon={<span className={`${prefixCls}-prev-icon`} />}
        nextIcon={<span className={`${prefixCls}-next-icon`} />}
        superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
        superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
        transitionName={`${rootPrefixCls}-slide-up`}
        {...restProps}
        {...additionalOverrideProps}
        className={classNames(
          {
            [`${prefixCls}-${mergedSize}`]: mergedSize,
            [`${prefixCls}-borderless`]: !bordered,
          },
          getStatusClassNames(prefixCls, getMergedStatus(contextStatus, customStatus), hasFeedback),
          hashId,
          compactItemClassnames,
          className,
          rootClassName,
        )}
        locale={locale.lang}
        prefixCls={prefixCls}
        getPopupContainer={customGetPopupContainer || getPopupContainer}
        generateConfig={generateConfig}
        components={Components}
        direction="ltr"
        dropdownClassName={classNames(hashId, popupClassName || dropdownClassName, rootClassName)}
        allowClear={mergeAllowClear(allowClear, clearIcon, <CloseIcon />)}
      />,
    )
  })

  if (process.env.NODE_ENV !== 'production') {
    RangePicker.displayName = 'RangePicker'
  }

  return RangePicker as unknown as PickerComponentClass<DateRangePickerProps>
}
