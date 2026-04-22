import './Header.css'

export default function Header({ total, passCount, failCount, avgScore }) {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Top bar */}
        <div className="header-topbar">
          <span className="topbar-tag">REACT APP</span>
          <span className="topbar-tag topbar-tag--dim">WEB DEV II</span>
          <span className="topbar-tag topbar-tag--dim">UNIT–3</span>
        </div>

        {/* Title block */}
        <div className="header-title-block">
          <div className="title-accent-line" />
          <h1 className="header-title">
            STUDENT<br />
            <span className="title-highlight">SCORE</span>BOARD
          </h1>
          <p className="header-subtitle">
            Real-time grade tracker — manage, update, and monitor student performance.
          </p>
        </div>

        {/* Stats row */}
        <div className="header-stats">
          <div className="stat-card stat-card--total">
            <span className="stat-num">{total}</span>
            <span className="stat-label">TOTAL</span>
          </div>
          <div className="stat-card stat-card--pass">
            <span className="stat-num">{passCount}</span>
            <span className="stat-label">PASSED</span>
          </div>
          <div className="stat-card stat-card--fail">
            <span className="stat-num">{failCount}</span>
            <span className="stat-label">FAILED</span>
          </div>
          <div className="stat-card stat-card--avg">
            <span className="stat-num">{avgScore}<span className="stat-unit">%</span></span>
            <span className="stat-label">AVG SCORE</span>
          </div>
        </div>
      </div>
    </header>
  )
}
