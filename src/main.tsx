import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div className={'w-full flex h-full justify-center items-center'}>
          <App/>
      </div>
  </React.StrictMode>,
)
