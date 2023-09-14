import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components'

const root = document.getElementById('root')

if (!root) throw new Error('No root element found')

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
