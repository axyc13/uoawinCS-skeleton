import Welcome from "../components/Welcome";
import MoodCard from "../components/MoodCard";
import Button from "../components/Button";
import AddMoodModal from "../components/AddMoodModal";


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Welcome />
      <AddMoodModal />
      <main className="flex-grow container mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        <MoodCard />
      </main>
    </div>
  );
}

export default Home;