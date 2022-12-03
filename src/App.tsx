import React, { useContext, useEffect } from "react";
import TopBar from "./components/Navigation/TopBar";
import SideBar from "./components/Navigation/Sidebar";
import NavProvider from "./contexts/NavContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { NavContext } from "./contexts/NavContext";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";

export type RChild = {
  children: React.ReactNode;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Header() {
  return (
    <NavProvider>
      <AuthProvider>
        <TopBar />
        <SideBar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </AuthProvider>
    </NavProvider>
  );
}

function Wrapper({ children }: RChild) {
  const { isSidebarOpen } = useContext(NavContext);
  const cName = isSidebarOpen ? "ml-48" : "";

  return (
    <main className={`mt-24 py-5 transition-all delay-300 ${cName}`}>
      {children}
    </main>
  );
}

function Home() {
  return <div>Home</div>;
}

export default App;
