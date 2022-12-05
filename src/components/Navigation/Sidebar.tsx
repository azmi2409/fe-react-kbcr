import { Navbar, NavLink } from "@mantine/core";
import { MdOutlineDashboard } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    icon: MdOutlineDashboard,
    link: "/",
  },
  {
    title: "Management",
    icon: SiManageiq,
    link: "/management",
  },
  {
    title: "Reports",
    icon: TbReportAnalytics,
    link: "/reports",
  },
  {
    title: "Settings",
    icon: IoSettingsOutline,
    link: "/settings",
  },
];

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <Navbar
      width={{
        base: 200,
      }}
      height="100vh"
      p="xs"
      className="transition-all delay-200 bg-gray-100"
    >
      <Navbar.Section grow mt="sm" p="md">
        <div className="flex flex-col gap-5">
          {menus.map((menu) => (
            <NavLink
              component={Link}
              key={menu.title}
              icon={<menu.icon />}
              label={menu.title}
              active={pathname === menu.link}
              to={menu.link}
            />
          ))}
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

export default SideBar;
