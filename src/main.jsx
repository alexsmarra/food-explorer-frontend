import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ToastContainer />
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
