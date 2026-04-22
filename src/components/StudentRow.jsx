import { useState } from 'react'
import './StudentRow.css'

export default function StudentRow({ student, rank, onUpdateScore, onRemove }) {
  const [inputVal, setInputVal] = useState(student.score)
  const [saved, setSaved] = useState(false)

  const isPassing = student.score >= 40
  const pct = Math.min(student.score, 100)

  const handleSave = () => {
    const val = Number(inputVal)
    if (isNaN(val) || val < 0 || val > 100) return
    onUpdateScore(student.id, val)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSave()
  }

  return (
    <tr className={`student-row ${isPassing ? 'row--pass' : 'row--fail'}`}>
      {/* Rank */}
      <td className="td-rank">
        <span className="rank-num">{String(rank).padStart(2, '0')}</span>
      </td>

      {/* Name */}
      <td className="td-name">
        <span className="student-name">{student.name}</span>
      </td>

      {/* Score */}
      <td className="td-score">
        <span className={`score-value ${isPassing ? 'score--pass' : 'score--fail'}`}>
          {student.score}
        </span>
      </td>

      {/* Progress bar */}
      <td className="td-bar">
        <div className="progress-track">
          <div
            className={`progress-fill ${isPassing ? 'fill--pass' : 'fill--fail'}`}
            style={{ width: `${pct}%` }}
          />
          <span className="progress-label">{pct}%</span>
        </div>
      </td>

      {/* Status badge */}
      <td className="td-status">
        <span className={`badge ${isPassing ? 'badge--pass' : 'badge--fail'}`}>
          {isPassing ? '✓ PASS' : '✗ FAIL'}
        </span>
      </td>

      {/* Update input */}
      <td className="td-update">
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={handleKey}
            className="score-input"
            aria-label={`Update score for ${student.name}`}
          />
          <button
            className={`btn-save ${saved ? 'btn-save--done' : ''}`}
            onClick={handleSave}
          >
            {saved ? '✓' : 'SET'}
          </button>
        </div>
      </td>

      {/* Delete */}
      <td className="td-action">
        <button
          className="btn-delete"
          onClick={() => onRemove(student.id)}
          aria-label={`Remove ${student.name}`}
          title="Remove student"
        >
          ✕
        </button>
      </td>
    </tr>
  )
}
