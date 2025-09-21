import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from './pages/About'
import Home from './pages/Home'
import Resources from './pages/Resources'
import MoodEntry from './pages/MoodEntry'
import Stats from './pages/Stats'
import background from './assets/unnamed.jpg'

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background image absolutely positioned and behind all content */}
      <img
        src={background}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-40 -z-10"
      />
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