import { Link } from "react-router-dom";
import Container from "./components/Container";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CampusLife from "./components/sections/CampusLife";
import Academics from "./components/sections/Academics";
import Footer from "./components/sections/Footer";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <Container className="flex justify-between items-center">
          <div className="text-gray-600">
            <span className="mr-6">+1 (000) 000 00 00</span>
            <span>info@companyname.com</span>
          </div>
          <div className="space-x-4">
            <button className="hover:text-primary">Register</button>
            <button className="hover:text-primary">
              <Link to="/dashboard">Login</Link>
            </button>
          </div>
        </Container>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-4">
        <Container className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="text-2xl font-bold text-primary">
            Malika International Academy
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Teachers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu button (for small screens) */}
          <button className="md:hidden text-gray-700 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </Container>
      </nav>
    </header>
  );
};

const Site = () => {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <About />
      <CampusLife />
      <Academics />
      <Footer />
      {/* Add more sections below if needed */}
    </div>
  );
};

export default Site;
