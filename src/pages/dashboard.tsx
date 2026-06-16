import "./dashboard.css";

type DashboardProps = {
  onLogout: () => void;
};

export default function Dashboard({ onLogout }: DashboardProps) {
  
  
  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <div className="dashboard-navbar-brand">
          <span className="dashboard-navbar-logo">MM</span>
        </div>
        <div>
          <h2>Money Manager</h2>
          <p>Track your finances clearly!</p>
        </div>
      

      <div className="dashboard-navbar-links">
        <button type="button" className="dashboard-navbar-link">
          Overview
        </button>
        <button type="button" className="dashboard-navbar-link">
          Budgets
        </button>
        <button type="button" className="dashboard-navbar-link">
          Expenses
        </button>
        <button type="button" className="dashboard-navbar-link">
          Settings
        </button>
      </div>

      <button 
        className="dashboard-navbar-logout"
        type="button"
        onClick={onLogout}
      >
        Log out
      </button>
    </nav>

      <div className="dashboard-card">
        <p className="dashboard-eyebrow">Dashboard</p>
        <h1>Welcome to your money management dashboard</h1>
        <p className="dashboard-copy">
          Dummy login is enabled for now, so this page opens immediately after
          pressing the login button.
        </p>

        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <span>Total Balance</span>
            <strong>$12,480</strong>
          </div>
          <div className="dashboard-stat">
            <span>Monthly Budget</span>
            <strong>$3,200</strong>
          </div>
          <div className="dashboard-stat">
            <span>Expenses</span>
            <strong>$1,945</strong>
          </div>
        </div>

        <button className="dashboard-button" type="button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
