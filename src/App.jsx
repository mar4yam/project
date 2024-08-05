import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Start from "./Components/Start";
import About from "./Components/About";
import Layout from "./Components/Layout";
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
 export default function App() {


  let routes= createBrowserRouter([{
    path:'/',element:<Layout></Layout>,
    children:[
      {index:true, element:<Start></Start>},
      {path:'/about',element:<About></About>},
      {path:'/portfolio',element:<Portfolio></Portfolio>},
      {path:'/contact',element:<Contact></Contact>},
      
    ]
  }])

  
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
