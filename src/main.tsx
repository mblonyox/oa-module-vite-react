import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import RootLayout from './layouts/RootLayout'

ReactDOM.render(
  <React.StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </React.StrictMode>,
  document.getElementById('root')
)
