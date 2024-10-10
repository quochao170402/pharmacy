import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiPackage,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import FormulaIcon from "../../assets/FormulaIcon";
import PathologyIcon from "../../assets/PathologyIcon";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps) => {
  const [isUserExpanded, setIsUserExpanded] = useState(false);
  const [isWarehouseExpanded, setIsWarehouseExpanded] = useState(false);
  const location = useLocation(); // Hook to get current route

  // Check if the current path matches the given path
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div
      className={`bg-gray-800 text-white h-full ${
        isExpanded ? "w-64" : "w-16"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <Link
          to="/"
          className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
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
        {/* Order */}
        <li>
          <Link
            to="/order"
            className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
              isActive("/order") ? "text-yellow-400" : ""
            }`}
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

        {/* Drug */}
        <li>
          <Link
            to="/drug"
            className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
              isActive("/drug") ? "text-yellow-400" : ""
            }`}
          >
            <FiPackage size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Thuốc
            </span>
          </Link>
        </li>

        {/* Pathology */}
        <li>
          <Link
            to="/pathology"
            className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
              isActive("/pathology") ? "text-yellow-400" : ""
            }`}
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

        {/* Formula */}
        <li>
          <Link
            to="/formula"
            className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
              isActive("/formula") ? "text-yellow-400" : ""
            }`}
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

        {/* User - Submenu */}
        <li>
          <button
            onClick={() => setIsUserExpanded(!isUserExpanded)}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded w-full ${
              isActive("/user") ? "text-yellow-400" : ""
            }`}
          >
            <FiUser size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Người dùng
            </span>
            {isExpanded && (
              <span className="ml-auto">
                {isUserExpanded ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            )}
          </button>
          {isUserExpanded && isExpanded && (
            <ul className="ml-8 space-y-2">
              <li>
                <Link
                  to="/user/customer"
                  className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                    isActive("/user/customer") ? "text-yellow-400" : ""
                  }`}
                >
                  Khách hàng
                </Link>
              </li>
              <li>
                <Link
                  to="/user/employee"
                  className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                    isActive("/user/employee") ? "text-yellow-400" : ""
                  }`}
                >
                  Nhân viên
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Warehouse - Submenu */}
        <li>
          <button
            onClick={() => setIsWarehouseExpanded(!isWarehouseExpanded)}
            className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded w-full ${
              isActive("/warehouse") ? "text-yellow-400" : ""
            }`}
          >
            <FiPackage size={24} />
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              Kho hàng
            </span>
            {isExpanded && (
              <span className="ml-auto">
                {isWarehouseExpanded ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            )}
          </button>
          {isWarehouseExpanded && isExpanded && (
            <ul className="ml-8 space-y-2">
              <li>
                <Link
                  to="/warehouse/stock"
                  className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                    isActive("/warehouse/stock") ? "text-yellow-400" : ""
                  }`}
                >
                  Tồn kho
                </Link>
              </li>
              <li>
                <Link
                  to="/warehouse/transaction"
                  className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                    isActive("/warehouse/transaction") ? "text-yellow-400" : ""
                  }`}
                >
                  Giao dịch
                </Link>
              </li>
              <li>
                <Link
                  to="/warehouse/in-progress"
                  className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                    isActive("/warehouse/in-progress") ? "text-yellow-400" : ""
                  }`}
                >
                  Đang xử lý
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
