import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  ProForm,
  ProFormRadio,
} from '@/pro'

const Test = () => {
  window.process = {
    // @ts-ignore
    env: {
      TEST: 'test',
    },
  }
  console.log(process.env.TEST)
  return (
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
  )
}

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
)
