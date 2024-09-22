import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { legacy_createStore as createStore } from 'redux'
import { reducer } from './Redux/Reducers/index.reducers.jsx'
import { Provider } from 'react-redux'


const store = createStore(reducer)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider >
  </StrictMode >
)
