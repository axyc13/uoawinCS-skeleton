import { useState, useEffect } from "react";
import { moodImages } from "../assets/moodImages";

export default function ButtonPopUp({ moodType, onAddMood, onClose }) {
  const initialForm = {
    title: "",
    description: "",
    image: moodImages[moodType] || "",
    mood: moodType || ""
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    // If moodType changes, update image/mood defaults
    setForm((prev) => ({
      ...prev,
      image: moodImages[moodType] || "",
      mood: moodType || ""
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moodType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      description: form.description,
      image: form.image,
      mood: form.mood,
      date: new Date().toISOString()
    };

    try {
      const res = await fetch("http://localhost:3001/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Failed to add mood");

      // Optionally tell parent (if provided) to update local state:
      if (typeof onAddMood === "function") onAddMood(payload);

      // let other listeners fetch from server if you prefer
      window.dispatchEvent(new Event("moodAdded"));

      // reset form to defaults for this moodType
      setForm({
        title: "",
        description: "",
        image: moodImages[moodType] || "",
        mood: moodType || ""
      });

      // close modal
      if (typeof onClose === "function") onClose();
    } catch (err) {
      console.error(err);
      // you can show an error message to the user here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <img src={moodImages[moodType]} alt={moodType} className="w-16 h-16 object-cover rounded" />
        <div>
          <div className="text-sm font-medium">{moodType}</div>
          <div className="text-xs text-gray-500">{new Date().toLocaleString()}</div>
        </div>
      </div>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border px-2 py-1 rounded w-full"
        required
      />

      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="border px-2 py-1 rounded w-full"
        required
      />

      <div className="flex justify-end gap-2 mt-2">
        <button type="button" onClick={onClose} className="px-4 py-2 rounded border">
          Cancel
        </button>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Mood
        </button>
      </div>
    </form>
  );
}
