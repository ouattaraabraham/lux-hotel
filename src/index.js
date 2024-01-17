import React from 'react';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout'
import Acceuil from './page/Acceuil'
import Reservation from './page/Reserver'
import Contacter from './page/Contacter'
import ErrorPage from './ErrorPage';
import './index.css';
import App from './App';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index:true,
        element: <Acceuil/>,
      },
      {
        path:"Reservation",
        element: <Reservation/>,
      },
      {
        path:"Contacter",
        element: <Contacter/>,
      },
    ]


}
 ],
 {
  basename: '/lux-hotel'
}

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>
);


