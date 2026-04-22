import StudentRow from './StudentRow'
import './StudentTable.css'

export default function StudentTable({ students, onUpdateScore, onRemove }) {
  if (students.length === 0) {
    return (
      <div className="table-empty">
        <span className="empty-icon">◻</span>
        <p>No students enrolled yet.</p>
        <span className="empty-hint">Use the form to add students →</span>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="score-table">
        <thead>
          <tr>
            <th className="th-rank">#</th>
            <th className="th-name">STUDENT NAME</th>
            <th className="th-score">SCORE</th>
            <th className="th-bar">PROGRESS</th>
            <th className="th-status">STATUS</th>
            <th className="th-update">UPDATE</th>
            <th className="th-action">DEL</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              rank={index + 1}
              onUpdateScore={onUpdateScore}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
