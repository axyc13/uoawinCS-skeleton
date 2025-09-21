import Button from "../components/Button";

function MoodEntry() {
  return (
    <section className="bg-green-50 py-20">
      <div className="flex justify-center container mx-auto px-6 py-12 space-x-5">
        <Button className="w-[10px]">Very Bad</Button>
        <Button className="w-[10px]">Bad</Button>
        <Button className="w-[10px]">Neutral</Button>
        <Button className="w-[10px]">Good</Button>
        <Button className="w-[10px]">Very Good</Button>
      </div>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="How was today?"
          className="w-full border rounded-lg p-3"
        />
      </form>
    </section>
  );
}

export default MoodEntry;