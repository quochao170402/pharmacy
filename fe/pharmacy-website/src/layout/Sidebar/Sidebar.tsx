import { FiHome, FiMenu, FiShoppingCart, FiUser } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import FormulaIcon from "../../assets/FormulaIcon";
import PathologyIcon from "../../assets/PathologyIcon";
interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps) => {
  return (
    <div
      className={`bg-gray-800 text-white h-full ${
        isExpanded ? "w-64" : ""
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <Link
          to="/"
          className={
            isExpanded
              ? "flex items-center px-4 py-2 hover:bg-gray-700 rounded"
              : ""
          }
        >
          <h2
            className={`${isExpanded ? "block" : "hidden"} text-2xl font-bold`}
          >
            Dashboard
          </h2>
        </Link>
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
            <HiHome size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Trang chủ
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
          >
            <FiShoppingCart size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Đơn hàng
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
          >
            <FiUser size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Khách hàng
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/drugs"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
          >
            <FiHome size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Thuốc
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/pathologies"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
          >
            <PathologyIcon />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Bệnh lý
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/formulas"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
          >
            <FormulaIcon />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Công thức
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
