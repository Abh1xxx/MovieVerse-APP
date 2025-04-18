import {
    createBrowserRouter,
  } from "react-router-dom";
import UserLayouts from "../Layouts/UserLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LandingPage from "../Pages/LandingPage";
import UserHomePage from "../Pages/UserHomePage";
import PrivateRoute from "../Components/PrivateRoute";
import Movies from "../Pages/Movies";
  
export const router = createBrowserRouter([
    {
      path:"/",
      element:<UserLayouts/>,
      children:[
        {
          path:"",
          element:<LandingPage/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/User-Home",
          element: (
          <PrivateRoute>
            <UserHomePage/>
          </PrivateRoute>
        )
        },
        {
          path: "/movies",  
          element: <Movies />
       },
     ]
   }
]);
  