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
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../pages/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/avaiableFoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch("http://localhost:5000/foods")
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
           
        path: '/foodDetails/:id',
        element: <PrivateRoute> <FoodDetails></FoodDetails> </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/manageMyFoods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;