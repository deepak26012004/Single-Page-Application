import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Layout from './Layout.jsx'
import Navbar from './Pages/Navbar.jsx'
import Footer from './Pages/Footer.jsx'
import { RouterProvider } from 'react-router'
import router from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

      <Layout />
    </RouterProvider>
  </StrictMode>,
)
