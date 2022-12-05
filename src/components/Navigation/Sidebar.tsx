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
    link: "/dashboard",
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
      className="transition-all delay-200 bg-gray-100"
    >
      <Navbar.Section grow mt="md">
        <div className="flex flex-col gap-10 items-center justify-center">
          {menus.map((menu) => (
            <NavLink
              component={Link}
              key={menu.title}
              icon={<menu.icon className="text-2xl" />}
              label={menu.title}
              active={pathname.includes(menu.link)}
              to={menu.link}
              classNames={{
                root: "p-4 flex items-center rounded-md",
              }}
            />
          ))}
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

export default SideBar;
