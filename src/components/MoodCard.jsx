import { useEffect, useState } from 'react';
import Card from './Card';

export default function MoodCard() {
  const [moods, setMoods] = useState([]);

  const fetchMoods = () => {
    fetch("http://localhost:3001/api/mood")
      .then(res => res.json())
      .then(data => setMoods(data.mood));
  }

  useEffect(() => {
    fetchMoods();
    window.addEventListener("moodAdded", fetchMoods);
    return () => window.removeEventListener("moodAdded", fetchMoods);
  }, []);

  return (
      <div className="w-full max-w-full mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {moods.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
  );
}
