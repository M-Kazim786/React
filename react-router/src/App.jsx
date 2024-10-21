
import Navbar from './components/Navbar'
import {createBrowserRouter,Form,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import User from './components/User'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
     path: "/user/:username",
     element:<><Navbar/><User/></>

    },
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
