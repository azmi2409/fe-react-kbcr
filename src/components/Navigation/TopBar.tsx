import { useContext } from "react";
import logo from "../../assets/logo-big.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavContext } from "../../contexts/NavContext";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(NavContext);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-gray-100 py-2 px-12 fixed top-0 left-0 right-0 h-24">
      <div className="flex items-center">
        <GiHamburgerMenu
          onClick={toggleSidebar}
          className="text-2xl mr-24 cursor-pointer"
        />
        <img
          src={logo}
          alt="logo"
          className="h-24 cursor-pointer transition-all delay-200 hover:scale-105"
        />
      </div>
      <div className="flex items-center">
        <button
          onClick={() => navigate("login")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Login
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default TopBar;
