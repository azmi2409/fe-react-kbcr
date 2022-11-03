import { createContext, useState } from "react";

interface NavContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavContext = createContext({} as NavContextProps);

export default function NavProvider({ children }: any) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <NavContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </NavContext.Provider>
  );
}
