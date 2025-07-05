
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import quizzesData from '../../data/quizzes.json'

export async function getServerSideProps(context) {
  const { category } = context.params
  const quizzes = quizzesData[category] || []
  return { props: { quizzes, category } }
}

export default function CategoryPage({ quizzes, category }) {
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'History': return '📚'
      case 'Science': return '🔬'
      case 'Math': return '📊'
      case 'Programming': return '💻'
      default: return '🧠'
    }
  }

  return (
    <Layout>
      <Head>
        <title>{category} Quizzes</title>
        <meta name="description" content={`Quizzes in ${category}`} />
      </Head>
      
      <div className="fade-in">
        <div className="text-center mb-4">
          <div className="text-6xl mb-2">{getCategoryIcon(category)}</div>
          <h1 className="text-4xl font-bold text-white mb-2">{category} Quizzes</h1>
          <p className="text-xl text-white opacity-90">Challenge yourself with these {category.toLowerCase()} quizzes</p>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Available Quizzes</h2>
            <p className="card-description">Choose a quiz to test your knowledge</p>
          </div>
          
          <div className="quiz-list">
            {quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
                  <div className="quiz-item">
                    <h3 className="quiz-title">{quiz.title}</h3>
                    <div className="quiz-meta">
                      <span>📝 Interactive Quiz</span>
                      <span className="quiz-difficulty difficulty-easy">Easy</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Click to start</span>
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No quizzes available</h3>
                <p className="text-gray-600">Quizzes for this category are coming soon!</p>
                <Link href="/">
                  <button className="btn btn-primary mt-4">← Back to Categories</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
