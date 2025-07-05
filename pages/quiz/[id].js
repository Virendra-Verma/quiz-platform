
import { useState } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import quizzesData from '../../data/quiz-details.json'

export async function getServerSideProps(context) {
  const { id } = context.params
  const quiz = quizzesData[id]
  if (!quiz) {
    return { notFound: true }
  }
  return { props: { quiz } }
}

export default function QuizPage({ quiz }) {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption)
    setShowFeedback(true)
    
    const isCorrect = selectedOption === quiz.questions[current].answer
    if (isCorrect) {
      setScore(score + 1)
    }
    
    setTimeout(() => {
      const next = current + 1
      if (next < quiz.questions.length) {
        setCurrent(next)
        setSelectedAnswer(null)
        setShowFeedback(false)
      } else {
        setShowResult(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrent(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / quiz.questions.length) * 100
    if (percentage >= 80) return { emoji: '🎉', message: 'Excellent! You\'re a quiz master!' }
    if (percentage >= 60) return { emoji: '👍', message: 'Good job! Keep it up!' }
    if (percentage >= 40) return { emoji: '👌', message: 'Not bad! Try again to improve!' }
    return { emoji: '💪', message: 'Keep practicing! You\'ll get better!' }
  }

  return (
    <Layout>
      <div className="quiz-container fade-in">
        {!showResult ? (
          <div className="quiz-question">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold">{quiz.title}</h1>
                <span className="text-sm text-gray-600">
                  Question {current + 1} of {quiz.questions.length}
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((current + 1) / quiz.questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <h3 className="mb-6">{quiz.questions[current].question}</h3>
            
            <div className="quiz-options">
              {quiz.questions[current].options.map((option, idx) => {
                let optionClass = 'quiz-option'
                
                if (showFeedback && selectedAnswer === option) {
                  optionClass += option === quiz.questions[current].answer ? ' correct' : ' incorrect'
                } else if (showFeedback && option === quiz.questions[current].answer) {
                  optionClass += ' correct'
                }
                
                return (
                  <button
                    key={idx}
                    onClick={() => !showFeedback && handleAnswer(option)}
                    className={optionClass}
                    disabled={showFeedback}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            
            {showFeedback && (
              <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 fade-in">
                <p className="text-blue-800">
                  {selectedAnswer === quiz.questions[current].answer 
                    ? '✅ Correct! Well done!' 
                    : `❌ Incorrect. The correct answer is: ${quiz.questions[current].answer}`
                  }
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="score-display fade-in">
            <div className="text-center">
              <div className="text-8xl mb-4">{getScoreMessage().emoji}</div>
              <div className="score-number">{score}/{quiz.questions.length}</div>
              <div className="score-message">{getScoreMessage().message}</div>
              <div className="text-lg text-gray-600 mb-6">
                You scored {Math.round((score / quiz.questions.length) * 100)}%
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={resetQuiz}
                  className="btn btn-primary"
                >
                  🔄 Try Again
                </button>
                <Link href="/">
                  <button className="btn btn-secondary">
                    🏠 Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
