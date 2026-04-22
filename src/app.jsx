import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

const initialStudents = [
  { id: 1, name: 'Arjun Sharma',   score: 78 },
  { id: 2, name: 'Priya Mehta',    score: 34 },
  { id: 3, name: 'Rohan Verma',    score: 55 },
  { id: 4, name: 'Sneha Gupta',    score: 92 },
  { id: 5, name: 'Karan Singh',    score: 38 },
  { id: 6, name: 'Ananya Bose',    score: 61 },
]

export default function App() {
  const [students, setStudents] = useState(initialStudents)

  const updateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: Number(newScore) } : s)
    )
  }

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      score: Number(score),
    }
    setStudents(prev => [...prev, newStudent])
  }

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id))
  }

  const passCount = students.filter(s => s.score >= 40).length
  const failCount = students.length - passCount
  const avgScore = students.length
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / students.length)
    : 0

  return (
    <div className="app-wrapper">
      <Header
        total={students.length}
        passCount={passCount}
        failCount={failCount}
        avgScore={avgScore}
      />
      <main className="app-main">
        <div className="layout-grid">
          <section className="section-table">
            <div className="section-label">
              <span className="section-label__dot" />
              LIVE SCOREBOARD
            </div>
            <StudentTable
              students={students}
              onUpdateScore={updateScore}
              onRemove={removeStudent}
            />
          </section>
          <aside className="section-form">
            <div className="section-label">
              <span className="section-label__dot dot--blue" />
              ENROLL STUDENT
            </div>
            <AddStudentForm onAddStudent={addStudent} />
          </aside>
        </div>
      </main>
      <footer className="app-footer">
        <span className="footer-mono">WEB DEV II — UNIT 3 — REACT COMPONENTS</span>
        <span className="footer-mono footer-right">2025 / LAB ASSIGNMENT 3</span>
      </footer>
    </div>
  )
}
