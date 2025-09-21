import Welcome from "../components/Welcome";
import MoodCard from "../components/MoodCard";
import AddMoodButton from "../components/AddMoodButton";


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Welcome />
      <AddMoodButton />
      <main className="flex-grow container mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        <MoodCard />
      </main>
    </div>
  );
}

export default Home;