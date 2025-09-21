import { useState, useEffect } from "react";
import { moodImages } from "../assets/moodImages";

export default function ButtonPopUp({ moodType }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    mood: ""
  });
  
  useEffect(() => {
    if (moodType) {
      setForm((prev) => ({
        ...prev,
        image: moodImages[moodType] || "",
        mood: moodType
      }));
    }
  }, [moodType]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setForm({ title: "", description: ""});
    window.dispatchEvent(new Event("moodAdded"));
  };

  return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border px-2 py-1 rounded"
          required
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border px-2 py-1 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Mood
        </button>
      </form>
  );
}