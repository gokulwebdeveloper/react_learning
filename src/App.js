// ## Namaste React Course by Akshay Saini
// # Chapter 06 - Exploring the world

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from './Components/About';
import Contact from './Components/Contact';
import ErrorBoundary from './Components/Error';
import Footer from "./Components/Footer";
import RestaurantMenu from "./Components/RestaurtantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRouteRef = createBrowserRouter([{
  path:'/',
  element:<AppLayout />,
  children:[{
    path:'/',
    element:<Body />
  },{
    path:'/about',
    element:<About />
  },{
    path:'/contact',
    element:<Contact />
  },{
    path:'/resturtant/:resid',
    element:<RestaurantMenu />
  }],
  errorElement: <ErrorBoundary />
}]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouteRef}  />);
