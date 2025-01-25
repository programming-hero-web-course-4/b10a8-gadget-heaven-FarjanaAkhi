import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorPage from './components/ErrorPage.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Homepage from './Layout/Homepage.jsx';
import Details from './Layout/Details.jsx';
import Laptop from './components/Laptop.jsx';

import AllCategories from './components/AllCategories.jsx';
import SmartWatch from './components/SmartWatch.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import Contact from './components/contact.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>,

    children: [
      {
        index: true,
        element: <AllCategories></AllCategories>,
        loader: () => fetch('/Items.json'),
      },
      {
        path: 'laptop',
        element: <Laptop></Laptop>,
        loader: () => fetch('/Laptop.json'),
      },
      
      {
        path: 'smartwatch',
        element: <SmartWatch></SmartWatch>,
        loader: () => fetch('/watch.json'),
      },
    ],
  },
  {
    path: '/details',
    element: <Details></Details>,
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>,
  },

  {
    path: '*',
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    
      <RouterProvider router={router} />
      
  </StrictMode>
);
