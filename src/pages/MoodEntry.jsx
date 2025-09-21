import AddMoodButton from "../components/AddMoodButton";
import MoodCard from "../components/MoodCard";

const moods = ["Very Bad", "Bad", "Neutral", "Good", "Very Good"];

function MoodEntry() {
  return (
    
    <section className="bg-green-50 py-20">
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