import { useEffect, useState } from 'react'
import Card from './Card'

export default function MoodCard() {
  const [moods, setMoods] = useState([])

  const fetchMoods = () => {
    fetch("http://localhost:3001/api/mood")
      .then(res => res.json())
      .then(data => setMoods(data.mood))
  }

  useEffect(() => {
    fetchMoods();
    window.addEventListener("moodAdded", fetchMoods);
    return () => window.removeEventListener("moodAdded", fetchMoods);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      {moods.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  )
}