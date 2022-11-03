import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";

const SideBar = () => {
  const { isSidebarOpen } = useContext(NavContext);

  const sidebarClass = isSidebarOpen ? "w-48" : "w-0";

  return (
    <div
      className={`bg-gray-500 h-screen fixed top-24 left-0 bottom-0 transition-all delay-300 ${sidebarClass}`}
    ></div>
  );
};

export default SideBar;
