import type { Meta, StoryObj } from '@storybook/react'

import {
  ProForm,
  ProFormRadio,
} from '@/pro'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'ProComponents/ProForm',
  component: ProForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ProForm>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
  },
  render: (args) => (
    <ProForm {...args} >
      <ProForm.Item name="name" label="姓名" rules={[{ required: true }]} >
        <input />
      </ProForm.Item>
      <ProForm.Item name="age" label="年齡" rules={[{ required: true }]} >
        <input />
      </ProForm.Item>
    </ProForm>
  ),
}

export const ProFormRadio_Group: Story = {
  args: {
  },
  render: (args) => (
    <ProForm>
      <ProFormRadio.Group
        label="類別"
        radioType="button"
        labelCol={{ span: 4 }}
        options={[
          {
            label: '一卡通',
            value: 'ipass',
          },
          {
            label: '客戶',
            value: 'client',
          },
        ]}
        name="clientType"
        initialValue="ipass"
      />
    </ProForm>
  ),
}
