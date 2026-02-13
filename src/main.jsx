import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorPage from './component/ErrorPage.jsx'
import Valentine from './component/Valentine'

const router = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   errorElement:<ErrorPage/>,
  },
  {
    path: '/valentine',
    element: <Valentine />,
  },
],{
  future : {
    v7_startTransition:true,
  }
}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
