import "./App.css";
import { useState } from "react";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  return <Login onLogin={() => setIsLoggedIn(true)} />;
}
