import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Proivider from './context/provider.jsx'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById('root')).render(
<Proivider>
  <React.StrictMode>
  
  <App/>
 
</React.StrictMode>
</Proivider>,
)