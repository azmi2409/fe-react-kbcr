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

type RChild = {
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
      <TopBar />
      <SideBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </NavProvider>
  );
}

function Wrapper({ children }: RChild) {
  const { isSidebarOpen } = useContext(NavContext);
  const cName = isSidebarOpen ? "ml-48" : "";

  return (
    <main className={`mt-24 transition-all delay-300 ${cName}`}>
      {children}
    </main>
  );
}

function Home() {
  return <div>Home</div>;
}

function Login() {
  return <div>Login</div>;
}

export default App;
