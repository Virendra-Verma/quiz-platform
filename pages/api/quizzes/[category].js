
const data = {
  History: [{ id: 1, title: "World War Quiz" }],
  Science: [{ id: 2, title: "Physics Quiz" }],
  Math: [{ id: 3, title: "Algebra Quiz" }],
  Programming: [{ id: 4, title: "JavaScript Basics" }]
}

export default function handler(req, res) {
  const {
    query: { category },
  } = req
  res.status(200).json(data[category] || [])
}
