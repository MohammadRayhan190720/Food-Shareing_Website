
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo.webp'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  
  const { user, handleSignOut } = useContext(AuthContext);
  // console.log(user)

  const email = user?.email;
  // console.log(email)

  const links = (
    <>
      <NavLink className="mr-5 py-3 flex items-center group relative " to="/">
        Home
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary2 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        className="mr-5 py-3 flex items-center group relative"
        to="/avaiableFoods"
      >
        Available Foods
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary2 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        className="mr-5 py-3 flex items-center group relative"
        to="/addFood"
      >
        Add Food
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary2 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        className="mr-5 py-3 flex items-center group relative"
        to="/manageMyFoods"
      >
        Manage My Foods
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary2 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
      <NavLink
        className="mr-5 py-3 flex items-center group relative"
        to="/myFoodRequest"
      >
        My Food Request
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary2 transition-all duration-300 group-hover:w-full"></span>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-primary1 px-10 text-background1">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 text-black rounded-md font-semibold space-y-2 z-50 mt-5 w-40 p-2 shadow border"
          >
            {links}
          </ul>
        </div>
        <img
          className="w-20 h-20 rounded-full invisible md:visible"
          src={Logo}
          alt="logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user && user.email ? (
          <div className="flex gap-5 items-center">
            <img
              className=" w-10 h-10  md:w-16 md:h-16 rounded-full"
              title={user?.displayName}
              src={user?.photoURL}
              alt={user?.displayName}
            />
            <button
              onClick={handleSignOut}
              className="bg-secondary1 px-3 py-1 md:px-5 md:py-3 rounded-lg flex"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-5 md:gap-3 items-center">
            <Link
              className="bg-secondary1 px-3 py-1 md:px-4 md:py-2 xl:px-5 xl:py-3 rounded-lg hover:bg-[#F0836D]"
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              className="bg-secondary2 px-3 py-1 md:px-4 md:py-2 xl:px-5 xl:py-3 rounded-lg hover:bg-[#8BAFBF]"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;