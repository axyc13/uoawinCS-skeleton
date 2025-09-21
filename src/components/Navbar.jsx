import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#C2A1ED] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold hover:text-gray-200">HOME</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/stats" className="hover:text-gray-200">STATS</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/resources" className="hover:text-gray-200">RESOURCES</Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;