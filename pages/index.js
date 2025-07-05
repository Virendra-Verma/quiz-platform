
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import categories from '../data/categories.json'

export async function getStaticProps() {
  return { props: { categories } }
}

export default function Home({ categories }) {
  return (
    <Layout>
      <Head>
        <title>Micro Quiz Platform</title>
        <meta name="description" content="Take short quizzes on various topics." />
      </Head>
      <div className="fade-in">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-white mb-2">🧠 Quiz Platform</h1>
          <p className="text-xl text-white opacity-90">Test your knowledge across various topics</p>
        </div>
        
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Choose Your Category</h2>
            <p className="card-description">Select a quiz category to get started</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Link key={cat} href={`/quizzes/${cat}`}>
                <div className="category-card">
                  <div className="category-icon">
                    {cat === 'History' && '📚'}
                    {cat === 'Science' && '🔬'}
                    {cat === 'Math' && '📊'}
                    {cat === 'Programming' && '💻'}
                  </div>
                  <h3 className="category-title">{cat}</h3>
                  <p className="category-description">
                    {cat === 'History' && 'Test your historical knowledge'}
                    {cat === 'Science' && 'Explore scientific concepts'}
                    {cat === 'Math' && 'Challenge your math skills'}
                    {cat === 'Programming' && 'Code your way to success'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
