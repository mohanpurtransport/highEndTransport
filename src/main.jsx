import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { IndexProvider } from './utils/contexts/index.context.jsx'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './utils/scrolltotop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <IndexProvider>
        <ScrollToTop />
        <App/>
      </IndexProvider>
    </HashRouter>
  </React.StrictMode>,
)
