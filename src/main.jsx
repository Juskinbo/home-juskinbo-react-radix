import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import 'animate.css'
import 'qweather-icons/font/qweather-icons.css'
import '@radix-ui/themes/styles.css'
import 'react-blurry-gradient/style.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
