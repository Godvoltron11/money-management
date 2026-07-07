import "./budgets.css";

type Category = {
  name: string;
  spent: number;
  percent: number;
  color: string;
};

const categories: Category[] = [
  { name: "Groceries",     spent: 540, percent: 68, color: "#7c5cff" },
  { name: "Transport",     spent: 210, percent: 42, color: "#22c39a" },
  { name: "Dining out",    spent: 97,  percent: 20, color: "#4da6ff" },
  { name: "Utilities",     spent: 185, percent: 55, color: "#f5a623" },
  { name: "Entertainment", spent: 815, percent: 90, color: "#e0507a" },
];

function CategoryRow({ name, spent, percent, color }: Category) {
  return (
    <div className="category-row">
      <span className="category-dot" style={{ backgroundColor: color }} />
      <span className="category-name">{name}</span>
      <div className="category-track">
        <div
          className="category-fill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <span className="category-amount" style={{ color }}>
        ${spent}
      </span>
    </div>
  );
}
function SpendingDonut({ categories }: { categories: Category[] }) {
  const total = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <svg viewBox="0 0 160 160" className="donut-chart">
      {categories.map((cat) => {
        const percent = cat.spent / total;
        const dashArray = `${percent * circumference} ${circumference}`;
        const dashOffset = -cumulativePercent * circumference;
        cumulativePercent += percent;

        return (
          <circle
            key={cat.name}
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke={cat.color}
            strokeWidth="18"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 80 80)"
          />
        );
      })}
      <text x="80" y="80" textAnchor="middle" dominantBaseline="middle" className="donut-total">
        ${total}
      </text>
    </svg>
  );
}

function BreakdownRow({ name, spent, color, total }: Category & { total: number }) {
  const percent = ((spent / total) * 100).toFixed(0);
  return (
    <div className="breakdown-row">
      <span className="category-dot" style={{ backgroundColor: color }} />
      <span className="category-name">{name}</span>
      <span className="breakdown-percent">{percent}%</span>
      <span className="category-amount" style={{ color }}>${spent}</span>
    </div>
  );
}

type Expense = {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  color: string;
};

const expenses: Expense[] = [
  { id: "1", date: "Jul 2",  category: "Groceries",     description: "Whole Foods",       amount: 84.32,  color: "#7c5cff" },
  { id: "2", date: "Jul 3",  category: "Transport",     description: "Uber ride",          amount: 18.50,  color: "#22c39a" },
  { id: "3", date: "Jul 4",  category: "Dining out",    description: "Chipotle",           amount: 12.75,  color: "#4da6ff" },
  { id: "4", date: "Jul 5",  category: "Entertainment", description: "Netflix subscription", amount: 15.99, color: "#e0507a" },
  { id: "5", date: "Jul 6",  category: "Utilities",     description: "Electric bill",      amount: 92.10,  color: "#f5a623" },
  { id: "6", date: "Jul 6",  category: "Groceries",     description: "Trader Joe's",       amount: 56.20,  color: "#7c5cff" },
  { id: "7", date: "Jul 7",  category: "Dining out",    description: "Starbucks",          amount: 6.45,   color: "#4da6ff" },
];

function ExpenseRow({ date, category, description, amount, color }: Expense) {
  return (
    <div className="expense-row">
      <span className="expense-date">{date}</span>
      <span className="expense-dot" style={{ backgroundColor: color }} />
      <span className="expense-category">{category}</span>
      <span className="expense-desc">{description}</span>
      <span className="expense-amount">-${amount.toFixed(2)}</span>
    </div>
  );
}

export default function Budgets() {
  return (
    <><div className="budgets-title page-container">
      <h1 className="budgets-title">Budgets</h1>

      <div className="budgets-stats">
        <article className="budgets-stat">
          <span>Total Budget</span>
          <strong>$3,200</strong>

        </article>
        <article className="budgets-stat">
          <span>Spent</span>
          <strong>$1,945</strong>
        </article>
        <article className="budgets-stat">
          <span>Remaining</span>
          <strong>$1,255</strong>
        </article>
        <article className="budgets-stat">
          <span>Over budget</span>
          <strong>1</strong>
        </article>
      </div>

      <section className="budgets-grid">
        <article className="budgets-panel">
          <div className="budgets-panel__header">
            <h2>Current Month Budget</h2>
            <span>$5000</span>
            <p> of $35000 total</p>
            <div className="progress-row">
              <span>Progress:</span>
              <span>85%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '85%' }} />
            </div>
          </div>
          <div className="budgets-panel__body">
            <div className="category-list">
              {categories.map((cat) => (
                <CategoryRow key={cat.name} {...cat} />
              ))}
            </div>
          </div>
        </article>
        <article className="budgets-panel">
          <div className="budgets-panel__header">
            <h2>Spending Breakdown</h2>
          </div>

          <div className="budgets-panel__body spending-breakdown">
            <SpendingDonut categories={categories} />
            <div className="category-list">
              {categories.map((cat) => (
                <BreakdownRow
                  key={cat.name}
                  {...cat}
                  total={categories.reduce((sum, c) => sum + c.spent, 0)} />
              ))}
            </div>
          </div>
        </article>
      </section>
    </div><section className="expenses-panel">
        <div className="expenses-panel__header">
          <h2>Expenses This Month</h2>
          <span className="expenses-count">{expenses.length} transactions</span>
        </div>
        <div className="expenses-list">
          {expenses.map((expense) => (
            <ExpenseRow key={expense.id} {...expense} />
          ))}
        </div>
      </section></>
      );
     }