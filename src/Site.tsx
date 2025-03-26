import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-gray-600">
            <span className="mr-6">+1 (000) 000 00 00</span>
            <span>info@companyname.com</span>
          </div>
          <div className="space-x-4">
            <button className="hover:text-primary">Register</button>
            <button className="hover:text-primary">
              <Link to={"/dashboard"}>Login</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
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
            {/* You could use a hamburger icon (e.g. Heroicons) here */}
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
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full bg-gray-100 overflow-hidden">
      {/* Background image (replace with your own) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: "brightness(40%)",
        }}
      ></div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center">
        {/* Left text area */}
        <div className="text-white max-w-lg">
          <h3 className="text-lg uppercase font-light tracking-widest mb-2">
            We Are Here To Help You
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Welcome to{" "}
            <span className="text-primary">Malika International</span> Academy
          </h1>
          <p className="mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-x-4">
            <button className="bg-primary hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-md transition-colors">
              Get Started
            </button>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right side example (optional) */}
        {/* You could place an image or slider here, or remove it entirely */}
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&w=400"
            alt="Student"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

function Site() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      {/* Add more sections below */}
    </div>
  );
}

export default Site;
