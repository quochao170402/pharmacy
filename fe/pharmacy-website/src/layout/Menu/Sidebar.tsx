import { FiHome, FiMenu, FiSettings } from "react-icons/fi";
import { Link, BrowserRouter as Router } from "react-router-dom";
interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps) => {
  return (
    <Router>
      <div
        className={`bg-gray-800 text-white h-full ${
          isExpanded ? "w-64" : ""
        } transition-all duration-300`}
      >
        <div className="flex justify-between items-center p-4">
          <h2
            className={`${isExpanded ? "block" : "hidden"} text-2xl font-bold`}
          >
            Dashboard
          </h2>
          <button onClick={toggleSidebar} className="text-white">
            <FiMenu size={24} />
          </button>
        </div>
        <ul className="mt-6 space-y-4">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FiHome size={24} />
              <span
                className={`${
                  isExpanded ? "ml-4" : "hidden"
                } transition-all duration-300`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <FiSettings size={24} />
              <span
                className={`${
                  isExpanded ? "ml-4" : "hidden"
                } transition-all duration-300`}
              >
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Sidebar;
