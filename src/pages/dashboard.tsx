import "./dashboard.css";

const activityItems = [
  { title: "Groceries", time: "Today, 8:40 PM", amount: "-$84.00" },
  { title: "Salary Deposit", time: "Yesterday, 9:00 AM", amount: "+$2,400.00" },
  { title: "Internet Bill", time: "Jun 14, 10:15 AM", amount: "-$45.00" },
];

const budgetItems = [
  { label: "Essentials", spent: "$1,240", limit: "$1,800", width: "69%" },
  { label: "Lifestyle", spent: "$520", limit: "$900", width: "58%" },
  { label: "Savings", spent: "$1,100", limit: "$1,500", width: "73%" },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <p className="dashboard-eyebrow">Financial Overview</p>
          <h1>Welcome back. Your money is moving in the right direction.</h1>
          <p className="dashboard-copy">
            This home screen gives you a quick read on balance, spending pace,
            budget health, and recent activity without leaving the dashboard.
          </p>

          <div className="dashboard-hero-actions">
            <button className="dashboard-button" type="button">
              Add transaction
            </button>
            <button className="dashboard-button dashboard-button--secondary" type="button">
              View reports
            </button>
          </div>
        </div>

        <div className="dashboard-highlight">
          <span className="dashboard-highlight__label">This month</span>
          <strong>$12,480</strong>
          <p>Available balance</p>
          <div className="dashboard-highlight__trend">+12.4% vs last month</div>
        </div>
      </section>

      <section className="dashboard-stats">
        <article className="dashboard-stat">
          <span>Total Balance</span>
          <strong>$12,480</strong>
          <p>Across checking, savings, and cash wallets.</p>
        </article>
        <article className="dashboard-stat">
          <span>Monthly Budget</span>
          <strong>$3,200</strong>
          <p>$1,255 left before the current cycle ends.</p>
        </article>
        <article className="dashboard-stat">
          <span>Expenses</span>
          <strong>$1,945</strong>
          <p>Most spending came from groceries and transport.</p>
        </article>
        <article className="dashboard-stat">
          <span>Savings Goal</span>
          <strong>73%</strong>
          <p>You are on pace to hit your target this month.</p>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-panel dashboard-panel--wide">
          <div className="dashboard-panel__header">
            <div>
              <p className="dashboard-panel__eyebrow">Budget health</p>
              <h2>Where your plan stands</h2>
            </div>
            <span className="dashboard-badge">On track</span>
          </div>

          <div className="dashboard-budget-list">
            {budgetItems.map((item) => (
              <div className="dashboard-budget-item" key={item.label}>
                <div className="dashboard-budget-item__top">
                  <strong>{item.label}</strong>
                  <span>
                    {item.spent} / {item.limit}
                  </span>
                </div>
                <div className="dashboard-budget-item__bar">
                  <span style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="dashboard-panel__eyebrow">Insights</p>
              <h2>Quick notes</h2>
            </div>
          </div>

          <ul className="dashboard-insights">
            <li>Spending dropped 8% compared to last week.</li>
            <li>Your savings contribution landed on schedule.</li>
            <li>Entertainment is the closest category to its cap.</li>
          </ul>
        </article>

        <article className="dashboard-panel dashboard-panel--wide">
          <div className="dashboard-panel__header">
            <div>
              <p className="dashboard-panel__eyebrow">Recent activity</p>
              <h2>Latest transactions</h2>
            </div>
          </div>

          <div className="dashboard-activity">
            {activityItems.map((item) => (
              <div className="dashboard-activity__item" key={`${item.title}-${item.time}`}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.time}</p>
                </div>
                <span>{item.amount}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="dashboard-panel">
          <div className="dashboard-panel__header">
            <div>
              <p className="dashboard-panel__eyebrow">Goals</p>
              <h2>Next milestone</h2>
            </div>
          </div>

          <div className="dashboard-goal">
            <strong>Emergency fund</strong>
            <p>$4,400 saved of a $6,000 target.</p>
            <div className="dashboard-goal__bar">
              <span />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
