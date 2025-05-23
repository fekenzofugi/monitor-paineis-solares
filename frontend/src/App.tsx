import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import LandingPage from './pages/Landing/LandingPage'
import { NotFound } from './pages/Errors'
import { Login } from './pages/Auth'
import { Register } from './pages/Auth'
import { Chat } from './pages/Chat'

const router = createBrowserRouter([{
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [{
      index: true,
      element: <LandingPage/>, },
    {
      path: "/login",
      element: <Login/>},
    {
      path: "/register",
      element: <Register/>},
    {
      path: "/chat",
      element: <Chat/>,
    }]
}])

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
