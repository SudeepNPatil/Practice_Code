import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Product from './Components/Product.jsx'
import ProductDetails from './Components/ProductDetails.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux_toolkit/store.jsx'



const myrouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'Product',
        element: <Product />,
      },
      {
        path: 'Product/:productid',
        element: <ProductDetails />
      }

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={myrouter} />
    </Provider>
  </StrictMode>,
)
