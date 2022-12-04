import logo from "../../assets/logo-big.png";
import { useNavigate } from "react-router-dom";
import { Header } from "@mantine/core";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Header
      className="flex justify-between items-center bg-gray-100"
      p="lg"
      height={100}
    >
      <div className="flex items-center">
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
    </Header>
  );
};

export default TopBar;
