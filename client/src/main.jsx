import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import UserLogin from './pages/UserLogin.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
      index: true,
      element: <Home />,
      },
      {
      path:'/UserLogin',  
      element: <UserLogin />,
      },
    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />   

)
