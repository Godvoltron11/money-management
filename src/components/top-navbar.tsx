import "./top-navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

type TopNavbarProps = {
  onLogout: () => void;
};

export default function TopNavbar({ onLogout }: TopNavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="top-navbar">
      <div className="top-navbar__brand">
        <div className="top-navbar__logo">MM</div>
        <div>
          <p className="top-navbar__eyebrow">Workspace</p>
          <h1>Money Manager</h1>
        </div>
      </div>

      <nav className="top-navbar__nav" aria-label="Primary">
        <button
          type="button"
          className={`top-navbar__link ${isActive("/dashboard") ? "top-navbar__link--active" : ""}`}
          onClick={() => navigate("/dashboard")}
        >
          Overview
        </button>
        <button
          type="button"
          className={`top-navbar__link ${isActive("/budgets") ? "top-navbar__link--active" : ""}`}
          onClick={() => navigate("/budgets")}
        >
          Budgets
        </button>
        <button
          type="button"
          className={`top-navbar__link ${isActive("/transactions") ? "top-navbar__link--active" : ""}`}
          onClick={() => navigate("/transactions")}
        >
          Transactions
        </button>
        <button
          type="button"
          className={`top-navbar__link ${isActive("/reports") ? "top-navbar__link--active" : ""}`}
          onClick={() => navigate("/reports")}
        >
          Reports
        </button>
      </nav>

      <div className="top-navbar__actions">
        <div className="top-navbar__profile">
          <span className="top-navbar__avatar">S</span>
          <div>
            <strong>Sameer</strong>
            <p>Personal account</p>
          </div>
        </div>

        <button className="top-navbar__logout" type="button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </header>
  );
}
