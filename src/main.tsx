import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

if (import.meta.env.MODE === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
