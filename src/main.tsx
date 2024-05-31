import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const enableMocking = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mock/browser.ts')
    await worker.start()
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
