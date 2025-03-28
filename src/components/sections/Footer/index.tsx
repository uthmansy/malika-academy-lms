import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8 px-6 md:px-20 rounded-t-3xl mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* About */}
        <div>
          <h4 className="text-2xl font-extrabold mb-4 text-white">
            Malika International Academy
          </h4>
          <p className="text-gray-400">
            A beacon of excellence in education, empowering students with
            knowledge, innovation, and a global perspective.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-primary transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-white">Quick Links</h5>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Student Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Programs */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-white">Programs</h5>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Early Years
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Primary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Secondary
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Pre-University
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Extracurricular
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Info & Newsletter */}
        <div>
          <h5 className="text-lg font-semibold mb-4 text-white">Contact Us</h5>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              123 Academy Road, Lagos, Nigeria
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              +234 800 123 4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              info@malikainternationalacademy.com
            </li>
          </ul>
          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-2 text-white">
              Newsletter
            </h5>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white p-2 rounded-r-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Malika International Academy. All rights
          reserved.
        </p>
        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
}
