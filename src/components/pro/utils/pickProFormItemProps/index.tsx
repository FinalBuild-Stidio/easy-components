const ipassFormItemPropsList = [
  'colon',
  'dependencies',
  'extra',
  'getValueFromEvent',
  'getValueProps',
  'hasFeedback',
  'help',
  'htmlFor',
  'initialValue',
  'noStyle',
  'label',
  'labelAlign',
  'labelCol',
  'name',
  'preserve',
  'normalize',
  'required',
  'rules',
  'shouldUpdate',
  'trigger',
  'validateFirst',
  'validateStatus',
  'validateTrigger',
  'valuePropName',
  'wrapperCol',
  'hidden',
  // 我自訂的
  'addonBefore',
  'addonAfter',
]

// eslint-disable-next-line @typescript-eslint/ban-types
export function pickProFormItemProps(props: {}) {
  const attrs = {}
  ipassFormItemPropsList.forEach((key) => {
    // @ts-ignore
    if (props[key] !== undefined) {
      // @ts-ignore
      attrs[key] = props[key]
    }
  })
  return attrs
}
