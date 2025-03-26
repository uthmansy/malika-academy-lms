// ^ Example icons from Heroicons (https://heroicons.com/).
// Install with: npm install @heroicons/react --save
import {
  VscArchive,
  VscBell,
  VscBriefcase,
  VscBrowser,
  VscBug,
  VscCircuitBoard,
} from "react-icons/vsc";
export default function SideMenu() {
  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r border-gray-200">
      {/* Logo / Brand */}
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        {/* If you have an actual logo image, you can replace this with <img> */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full" />
          <span className="text-xl font-bold tracking-wide">Niond</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {/* Active item example */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 rounded-md 
                         bg-lime-200 font-medium"
            >
              <VscArchive className="w-5 h-5 mr-3" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 
                         hover:bg-gray-100 rounded-md"
            >
              <VscBug className="w-5 h-5 mr-3" />
              Statistics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 
                         hover:bg-gray-100 rounded-md"
            >
              <VscBell className="w-5 h-5 mr-3" />
              Transaction
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 
                         hover:bg-gray-100 rounded-md"
            >
              <VscBrowser className="w-5 h-5 mr-3" />
              My Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 
                         hover:bg-gray-100 rounded-md"
            >
              <VscBriefcase className="w-5 h-5 mr-3" />
              Sell Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-600 
                         hover:bg-gray-100 rounded-md"
            >
              <VscCircuitBoard className="w-5 h-5 mr-3" />
              Settings
            </a>
          </li>
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="px-4 pb-6">
        <div className="flex items-center space-x-3 mb-4">
          {/* Replace src with the user's photo URL */}
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://via.placeholder.com/40"
            alt="User"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Nora Watson</p>
            <p className="text-xs text-gray-500">Sales Manager</p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center w-full px-4 py-2 text-gray-600 
                     hover:bg-gray-100 rounded-md"
        >
          <VscArchive className="w-5 h-5 mr-3" />
          Log Out
        </button>
      </div>
    </div>
  );
}
