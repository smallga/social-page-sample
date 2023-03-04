import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { setupProdMockServer } from './mockProdServer.js';
import { Provider } from 'react-redux'
import { store } from './store/store'
setupProdMockServer();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='social-page-sample/dist'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
