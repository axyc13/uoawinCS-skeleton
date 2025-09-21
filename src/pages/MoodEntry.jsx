import { useEffect, useState } from "react";
import AddMoodButton from "../components/AddMoodButton";
import MoodCard from "../components/MoodCard";

const moods = ["Very Bad", "Bad", "Neutral", "Good", "Very Good"];

function MoodEntry() {
  const [moodEntries, setMoodEntries] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Fetch moods from backend
  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("http://localhost:3001/api/mood");
      const data = await res.json();
      setMoodEntries(data.mood || []);
    };

    fetchMoods();

    // Refresh when new mood is added
    const handleUpdate = () => fetchMoods();
    window.addEventListener("moodAdded", handleUpdate);
    return () => window.removeEventListener("moodAdded", handleUpdate);
  }, []);

  // Check for 7 consecutive negative moods
  useEffect(() => {
    if (moodEntries.length >= 7) {
      const last7 = moodEntries.slice(-7);
      const negativeMoods = ["Bad", "Very Bad"];
      const allNegative = last7.every((m) => negativeMoods.includes(m.mood));
      setShowAlert(allNegative);
    }
  }, [moodEntries]);

  return (
    <section className="bg-[#F4EEE7] py-20">
      {/* Mood buttons */}
      <div className="flex justify-center container mx-auto px-6 py-12 space-x-5">
        {moods.map((mood) => (
          <AddMoodButton key={mood} moodType={mood} className="w-[10px]">
            {mood}
          </AddMoodButton>
        ))}
      </div>

      {/* Mood cards */}
      <main className="flex-grow container mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        <MoodCard moods={moodEntries} />
      </main>

      {/* Popup alert */}
      {showAlert && (
        <div className="fixed bottom-6 right-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-lg max-w-sm">
          <strong className="font-bold block">Feeling down?</strong>
          <p className="mt-1 text-sm">
            We noticed you’ve been logging negative moods for a week straight.  
            Try some exercise, a walk, or reaching out to a friend 💙
          </p>
          <button
            onClick={() => setShowAlert(false)}
            className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}

export default MoodEntry;

/*
import AddMoodButton from "../components/AddMoodButton";
import MoodCard from "../components/MoodCard";

const moods = ["Very Bad", "Bad", "Neutral", "Good", "Very Good"];

function MoodEntry() {
  return (
    
    <section className="bg-[#F4EEE7] py-20">
      <div className="flex justify-center container mx-auto px-6 py-12 space-x-5">
        {moods.map((mood) => (
          <AddMoodButton key={mood} moodType={mood} className="w-[10px]">
            {mood}
          </AddMoodButton>
        ))}
      </div>

      <main className="flex-grow container mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        <MoodCard />
      </main>
    </section>
    
  );
}

export default MoodEntry;
*/