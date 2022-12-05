import logo from "../../assets/logo-big.png";
import { useNavigate } from "react-router-dom";
import { Header } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const TopBar = () => {
  const {
    auth: { user },
  } = useContext(AuthContext);

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
      <div className="flex items-center mr-5">
        <Avatar src={`https://i.pravatar.cc/250?u=${user?.id}`} radius="xl" />
      </div>
    </Header>
  );
};

export default TopBar;
