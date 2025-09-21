import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from './pages/About'
import Home from './pages/Home'
import Resources from './pages/Resources'
import MoodEntry from './pages/MoodEntry'
import Stats from './pages/Stats'

function App() {
  return (
    <div className="bg-[#F4EEE7] flex flex-col min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<MoodEntry />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mood-entry" element={<MoodEntry />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}

export default App;
