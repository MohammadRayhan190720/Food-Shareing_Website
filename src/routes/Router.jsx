import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>

      },
      {
        path: "/avaiableFoods",
        element: <AvailableFoods></AvailableFoods>

      },
      {
        path: "/addFood",
        element: <AddFood></AddFood>

      },
      {
        path: "/manageMyFoods",
        element: <ManageMyFoods></ManageMyFoods>

      },
      {
        path: "/myFoodRequest",
        element: <MyFoodRequest></MyFoodRequest>

      },
    ]
  },
  {
    path: '/signin',
    element:<SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
]);

export default router;