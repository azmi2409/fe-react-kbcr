import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login";
import { AppShell } from "@mantine/core";
import SideBar from "./components/Navigation/Sidebar";
import TopBar from "./components/Navigation/TopBar";
import Private from "./components/Private/Private";
import Public from "./components/Public/Public";
import Page404 from "./components/404";
import Dashboard from "./pages/Dashboard";
import Management from "./pages/Management";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<Header />}>
            <Route element={<Private />}>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/management" element={<Management />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
          <Route element={<Public />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

function Header() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <AppShell header={<TopBar />} navbar={<SideBar />} padding="lg">
      {children}
    </AppShell>
  );
}

export default App;
