import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

function Stats() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch("http://localhost:3001/api/mood");
      const data = await res.json();
      setMoods(data.mood);
    };

    fetchMoods();

    // Refresh when a new mood is added
    const handleUpdate = () => fetchMoods();
    window.addEventListener("moodAdded", handleUpdate);
    return () => window.removeEventListener("moodAdded", handleUpdate);
  }, []);

  const counts = moods.reduce((acc, m) => {
    const key = m.mood || m.title; // use `mood` if available, fallback to title
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(counts).map(([name, value]) => ({ name, value }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}



export default Stats;