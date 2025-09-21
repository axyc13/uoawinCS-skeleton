import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from './pages/About'
import Home from './pages/Home'
import Resources from './pages/Resources'
import MoodEntry from './pages/MoodEntry'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mood-entry" element={<MoodEntry />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
