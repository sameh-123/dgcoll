import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from "../pages/signup/Signup.jsx"
import AboutUs from '../pages/aboutus/About.jsx';
import Main from "../pages/mainpage/Main.jsx"
import Book from '../pages/book/Book.jsx';
import Done from '../pages/bookingDone/Done.jsx';
import Product from '../pages/Products/Product.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'aboutus',
        element: <AboutUs />,
      },
      {
        path: 'book',
        element: <Book />,
      },
      {
        path: 'done',
        element: <Done />,
      },
      {
        path:"products",
        element:<Product/>
      }
    ],
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
