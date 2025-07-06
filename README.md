
# Micro Quiz Platform

This is a simplified quiz application built using Next.js.

## Features
- Static generation (SSG) for Home page
- Server-side rendering (SSR) for quiz category and individual quiz pages
- API routes serving quiz data
- Dynamic routing using [category] and [id]
- Image optimization using next/image
- Responsive and styled with Tailwind CSS
- Client-side state for quiz progress

## Getting Started

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

## Project Structure
- pages/
  - index.js
  - quizzes/[category].js
  - quiz/[id].js
- pages/api/
  - categories.js
  - quizzes/[category].js
  - quiz/[id].js
- components/
- data/
- styles/
- __tests__/

## Notes
- All data is served from mock JSON files in the `data/` folder.
