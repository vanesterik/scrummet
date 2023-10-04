import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components'

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const root = document.getElementById('root')

// eslint-disable-next-line fp/no-throw
if (!root) throw new Error('No root element found')

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
