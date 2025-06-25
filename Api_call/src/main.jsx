import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Product from './Components/Product.jsx'



const myrouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Product',
        element: <Product />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myrouter} />
  </StrictMode>,
)
