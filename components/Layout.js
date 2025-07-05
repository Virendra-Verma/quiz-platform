import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Micro Quiz Platform</title>
        <meta name="description" content="Take short quizzes on various topics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className="navbar">
        <div className="container flex justify-between items-center p-4">
          <Link href="/" className="navbar-brand">
            🧠 Quiz Platform
          </Link>
          <div className="navbar-nav">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="container py-8">
        {children}
      </main>
      
      <footer>
        <div className="container text-center">
          <p>&copy; 2025 Micro Quiz Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 