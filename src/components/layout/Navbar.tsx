
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 bg-careerspark-purple rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </span>
          <span className="text-xl font-bold bg-gradient-to-r from-careerspark-purple to-careerspark-light-purple bg-clip-text text-transparent">
            CareerSpark
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-careerspark-purple transition-colors">
            Home
          </Link>
          <Link to="/jobs" className="text-gray-700 hover:text-careerspark-purple transition-colors">
            Find Jobs
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-careerspark-purple transition-colors">
            Training
          </Link>
          <Link to="/mentors" className="text-gray-700 hover:text-careerspark-purple transition-colors">
            Mentors
          </Link>
        </nav>

        {/* Desktop Auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-9 pr-4 py-1.5 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-careerspark-purple"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
          <Link to="/login">
            <Button variant="outline" className="border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-careerspark-purple hover:bg-careerspark-light-purple text-white">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-careerspark-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/jobs" 
              className="text-gray-700 hover:text-careerspark-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-careerspark-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
            <Link 
              to="/mentors" 
              className="text-gray-700 hover:text-careerspark-purple transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentors
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-9 pr-4 py-1.5 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-careerspark-purple"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/login">
                <Button variant="outline" className="w-full border-careerspark-purple text-careerspark-purple hover:bg-careerspark-purple hover:text-white">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-careerspark-purple hover:bg-careerspark-light-purple text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
