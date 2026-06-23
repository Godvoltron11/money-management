import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import AppShell from "./components/app-shell";
import Budgets from "./pages/budgets";

function Shell() {
  const navigate = useNavigate();
  return (
    <AppShell onLogout={() => navigate('/')}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budgets" element={<Budgets />} />
      </Routes>
    </AppShell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Shell />} />
      </Routes>
    </BrowserRouter>
  );
}