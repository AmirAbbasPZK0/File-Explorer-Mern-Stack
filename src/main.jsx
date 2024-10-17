import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import "./index.css"
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import {store} from './redux/store.js'
import { Provider } from 'react-redux'
import Dashboard from './pages/Dashboard.jsx'
import FileManager from './pages/FileManager.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    element : <App/>,
    children : [
      {
        element : <Home/>,
        path : "/"
      },
      {
        element : <SignUp/>,
        path : "/signup"
      },
      {
        element : <Login/>,
        path : "/login"
      },
      {
        element : <Dashboard/>,
        path : "/dashboard"
      },
      {
        element : <FileManager/>,
        path : "/dashboard/file-manager"
      },
      {
        element : <Profile/>,
        path : "/dashboard/profile"
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
  </Provider>
)
