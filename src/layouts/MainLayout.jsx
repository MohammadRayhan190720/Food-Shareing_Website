import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-background1 font-Roboto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
      
    </div>
  );
};

export default MainLayout;