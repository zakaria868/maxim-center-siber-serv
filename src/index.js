import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/products/Products';
import Blogs from './pages/blog/Blogs';
import Contactus from './pages/Contactus/Contactus';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';

import Register from './pages/Regster/Register';
import CartTwo from './pages/CartTwo/CartTwo';
import BlogDetails from './pages/BlogDetails/BlogDetails';

import UpdateSuccess from './pages/UpdateSuccess/UpdateSuccess';
import UserProfile from './pages/UserProfile/UserProfile';

import InvoiceDetails from './pages/tabeeamaliat';
import Tagreba from './pages/Tagreba/Tagreba';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import OrderSummary from './pages/OrderSummary/OrderSummary';

import PaymentMethod from './pages/EtmamEldafaPaymentMethod/EtmamEldafaPaymentMethod';
import ShippingForm from './pages/ShippingForm/ShippingFormAmaliatDafaa';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';

 








const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "About",
    element: <AboutUs/>,
  },
  {
    path: "products",
    element: <Products/>,
  },
  {
    path: "blogs",
    element: <Blogs/>,
  },

  {
    path: "Contactus",
    element: <Contactus/>,
  },



  {
    path: "Cart",
    element: <Cart/>,
  },


  {
    path: "/Login",
    element: <Login/>,
  },


  {
    path: "/Register",
    element: <Register/>,
  },


  {
    path: "/CartTwo",
    element: <CartTwo/>,
  },

   {
    path: "/BlogDetails",
    element: <BlogDetails/>,
  },

  {
    path: "/TermsAndConditions",
    element: <TermsAndConditions/>,
  },


  {
    path: "/UpdateSuccess",
    element: <UpdateSuccess/>,
  },

    {
    path: "/UserProfile",
    element: <UserProfile/>,
  },

 {
    path: "/ShippingForm",
    element: <ShippingForm/>,
  },

   {
    path: "/Tagreba",
    element: <Tagreba/>,
  },
   {
    path: "/OrderSummary",
    element: <OrderSummary/>,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword/>,
  },

    {
    path: "/PaymentMethod",
    element: <PaymentMethod/>,
  },

      {
    path: "/InvoiceDetails",
    element: <InvoiceDetails/>,
  },
 
        {
    path: "/UserProfile",
    element: <UserProfile/>,
  },


 
 
  

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
