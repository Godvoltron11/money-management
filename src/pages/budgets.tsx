import "./budgets.css";
export default function Budgets() {
  return (
    <div className="budgets-page">
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

        <section className="budgets-grid">
          <article className="budgets-panel">
            <div className="budgets-panel__header">
              <h2>Current Month Budget</h2>
              <span>$5000</span>
              <span> of $35000 total</span>
            </div>
            <div className="budgets-panel__body">
              <p>Spent: $450</p>
              <p>Remaining: $50</p>
            </div>
          </article>
          </section>

      </div>
    </div>
  );
}