import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRoutes from './Router.jsx'
import './index.css'
import 'bootstrap/dist/js/bootstrap.esm'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>,
)
