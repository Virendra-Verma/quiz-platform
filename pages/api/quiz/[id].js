
const quizzes = {
  1: {
    id: 1,
    title: "World War Quiz",
    questions: [
      { question: "When did WW2 start?", options: ["1935", "1939", "1941"], answer: "1939" }
    ]
  },
  2: {
    id: 2,
    title: "Physics Quiz",
    questions: [
      { question: "Speed of light?", options: ["3x10^8 m/s", "1x10^6 m/s"], answer: "3x10^8 m/s" }
    ]
  },
  3: {
    id: 3,
    title: "Algebra Quiz",
    questions: [
      { question: "Solve: x+2=5", options: ["2", "3", "4"], answer: "3" }
    ]
  },
  4: {
    id: 4,
    title: "JavaScript Basics",
    questions: [
      { question: "typeof null?", options: ["null", "object"], answer: "object" }
    ]
  }
}

export default function handler(req, res) {
  const {
    query: { id },
  } = req
  res.status(200).json(quizzes[id])
}
