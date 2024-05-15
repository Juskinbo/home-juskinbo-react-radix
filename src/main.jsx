import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { router } from './router'
import './index.css'
import '@radix-ui/themes/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
)
