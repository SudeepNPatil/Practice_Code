import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'
import Some from './component/Some'
import Error from './component/Error'

const myroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "Home",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "Cart",
        element: <Cart />
      },
      {
        path: "Some/:someid",
        element: <Some />
      }

    ]
  },
  {

    path: "/some/:someid",
    element: <Some />
  }
])

createRoot(document.getElementById('root')).render(<RouterProvider router={myroute} />)
