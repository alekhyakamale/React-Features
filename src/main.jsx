import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorBoundary from './ErrorBoundary'
import App from './App'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
  <StrictMode>
    <App />
  </StrictMode>
  </ErrorBoundary>,
)
