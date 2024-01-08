import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/preline/dist/preline.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import Background from './components/Background';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Background>
            <App />
          </Background>
        </ThemeProvider>,
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
