import "./top-navbar.css";

type TopNavbarProps = {
  onLogout: () => void;
};

export default function TopNavbar({ onLogout }: TopNavbarProps) {
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
        <button type="button" className="top-navbar__link top-navbar__link--active">
          Overview
        </button>
        <button type="button" className="top-navbar__link">
          Budgets
        </button>
        <button type="button" className="top-navbar__link">
          Transactions
        </button>
        <button type="button" className="top-navbar__link">
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
