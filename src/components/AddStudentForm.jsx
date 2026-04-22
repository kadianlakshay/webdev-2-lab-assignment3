import { useState } from 'react'
import './AddStudentForm.css'

export default function AddStudentForm({ onAddStudent }) {
  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')
  const [flash, setFlash] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const trimmed = name.trim()
    const num = Number(score)

    if (!trimmed) {
      setError('Student name is required.')
      return
    }
    if (trimmed.length < 2) {
      setError('Name must be at least 2 characters.')
      return
    }
    if (score === '' || isNaN(num) || num < 0 || num > 100) {
      setError('Score must be a number between 0 and 100.')
      return
    }

    onAddStudent(trimmed, num)
    setName('')
    setScore('')
    setFlash(true)
    setTimeout(() => setFlash(false), 1200)
  }

  const isPassing = score !== '' && Number(score) >= 40

  return (
    <div className={`form-card ${flash ? 'form-card--flash' : ''}`}>
      <form onSubmit={handleSubmit} className="add-form" noValidate>

        <div className="form-field">
          <label className="form-label" htmlFor="student-name">
            FULL NAME
          </label>
          <input
            id="student-name"
            type="text"
            className="form-input"
            placeholder="e.g. Arjun Sharma"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="student-score">
            SCORE <span className="label-hint">(0 – 100)</span>
          </label>
          <div className="score-field-wrap">
            <input
              id="student-score"
              type="number"
              className="form-input"
              placeholder="e.g. 72"
              value={score}
              min="0"
              max="100"
              onChange={e => setScore(e.target.value)}
            />
            {score !== '' && (
              <span className={`inline-badge ${isPassing ? 'inline-badge--pass' : 'inline-badge--fail'}`}>
                {isPassing ? 'PASS' : 'FAIL'}
              </span>
            )}
          </div>
        </div>

        {error && (
          <div className="form-error">
            <span className="error-icon">!</span>
            {error}
          </div>
        )}

        <button type="submit" className="btn-add">
          <span>+ ENROLL STUDENT</span>
        </button>

        {flash && (
          <div className="form-success">
            ✓ Student added successfully
          </div>
        )}
      </form>

      {/* Decorative corner mark */}
      <div className="form-corner form-corner--tl" />
      <div className="form-corner form-corner--br" />
    </div>
  )
}
