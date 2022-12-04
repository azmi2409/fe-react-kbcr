import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import { AppShell } from "@mantine/core";
import SideBar from "./components/Navigation/Sidebar";
import TopBar from "./components/Navigation/TopBar";

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
    <AuthProvider>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </AuthProvider>
  );
}

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <AppShell header={<TopBar />} navbar={<SideBar />} padding="lg">
      {children}
    </AppShell>
  );
}

function Home() {
  return <div>Home</div>;
}

export default App;
