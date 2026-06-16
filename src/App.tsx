import "./App.css";
import { useState } from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import AppShell from "./components/app-shell";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <AppShell onLogout={() => setIsLoggedIn(false)}>
        <Dashboard />
      </AppShell>
    );
  }

  return <Login onLogin={() => setIsLoggedIn(true)} />;
}
