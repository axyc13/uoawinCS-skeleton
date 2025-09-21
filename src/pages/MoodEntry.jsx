import AddMoodButton from "../components/AddMoodButton";
import MoodCard from "../components/MoodCard";


function MoodEntry() {
  return (
    
    <section className="bg-green-50 py-20">
      <div className="flex justify-center container mx-auto px-6 py-12 space-x-5">
        <AddMoodButton className="w-[10px]">Very Bad</AddMoodButton>
        <AddMoodButton className="w-[10px]">Bad</AddMoodButton>
        <AddMoodButton className="w-[10px]">Neutral</AddMoodButton>
        <AddMoodButton className="w-[10px]">Good</AddMoodButton>
        <AddMoodButton className="w-[10px]">Very Good</AddMoodButton>
      </div>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="How was today?"
          className="w-full border rounded-lg p-3"
        />
      </form>

      <main className="flex-grow container mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        <MoodCard />
      </main>
    </section>
    
  );
}

export default MoodEntry;