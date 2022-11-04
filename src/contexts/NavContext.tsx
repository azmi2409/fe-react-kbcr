import { createContext, useState } from "react";
import { RChild } from "../App";

interface NavContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext({} as NavContextProps);

export default function NavProvider({ children }: RChild) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <NavContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </NavContext.Provider>
  );
}
