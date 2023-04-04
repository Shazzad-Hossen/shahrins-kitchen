import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './layout';
import Home from './pages/Home/Home';
import _404NotFound from './pages/_404NotFound/_404NotFound';
import Details from './pages/Details/Details';
import About from './pages/About/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: '/', 
      element: <Home></Home>,
      loader: async()=> { return fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')}
    
     },
     { path: 'details/:mealID', 
      element: <Details></Details>,
      loader: async({params})=> { return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`)}
    
     },
     { path: 'contact', 
      element: <About></About> ,
     },
     { path: '*', element: <_404NotFound></_404NotFound>},

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
