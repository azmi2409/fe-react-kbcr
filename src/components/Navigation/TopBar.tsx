import logo from "../../assets/logo-big.png";
import { Header, Avatar, Menu } from "@mantine/core";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const TopBar = () => {
  const {
    auth: { user },
    logout,
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
        <Menu trigger="hover" openDelay={100} closeDelay={400} shadow="md">
          <Menu.Target>
            <Avatar
              src={`https://i.pravatar.cc/250?u=${user?.id}`}
              radius="xl"
              component="button"
            />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </Header>
  );
};

export default TopBar;
