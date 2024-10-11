import { FiMenu } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import useGetRouter from "../../pages/Layout/hooks/useGetRouter";

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const { routers } = useGetRouter();

  const isActive = (path: string) => path === location.pathname;

  //   return (
  //     <>
  //       <div className="flex justify-between items-center p-4">
  //         <Link
  //           to="/"
  //           className="flex items-center px-4 py-2 hover:bg-gray-700 rounded"
  //         >
  //           <h2
  //             className={`${
  //               isExpanded ? "block" : "hidden"
  //             } text-2xl font-bold`}
  //           >
  //             Dashboard
  //           </h2>
  //         </Link>
  //         <button onClick={toggleSidebar} className="text-white">
  //           <FiMenu size={24} />
  //         </button>
  //       </div>
  //       <ul className="mt-6 space-y-4">
  //         {routers.map((router) => (
  //           <li key={router.path}>
  //             <Link
  //               to={router.path}
  //               className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
  //                 matchRoute ? "text-yellow-400" : ""
  //               }`}
  //             >
  //               {router.icon}
  //               <span
  //                 className={`${
  //                   isExpanded ? "ml-4" : "hidden"
  //                 } transition-all duration-300`}
  //               >
  //                 {router.label}
  //               </span>
  //             </Link>
  //             {isExpanded && router.children && (
  //               <ul>
  //                 {router.children.map((child) => (
  //                   <li key={child.path}>
  //                     <Link
  //                       to={child.path}
  //                       className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
  //                         matchRoute ? "text-yellow-400" : ""
  //                       }`}
  //                     >
  //                       {child.icon}
  //                       <span
  //                         className={`${
  //                           isExpanded ? "ml-4" : "hidden"
  //                         } transition-all duration-300`}
  //                       >
  //                         {child.label}
  //                       </span>
  //                     </Link>
  //                   </li>
  //                 ))}
  //               </ul>
  //             )}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  // };
  return (
    <div className="bg-slate-600 min-h-screen">
      <div className="flex justify-between items-center p-4 ">
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
        {routers.map((router) => (
          <li key={router.path}>
            {router.children && router.children?.length > 0 ? (
              <div
                className={`flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                  isActive(router.path) ? "text-yellow-400" : ""
                }`}
              >
                {router.icon}
                <span
                  className={`${
                    isExpanded ? "ml-4" : "hidden"
                  } transition-all duration-300`}
                >
                  {router.label}
                </span>
              </div>
            ) : (
              <NavLink
                to={router.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                    isActive ? "text-yellow-400" : ""
                  }`
                }
              >
                {router.icon}
                <span
                  className={`${
                    isExpanded ? "ml-4" : "hidden"
                  } transition-all duration-300`}
                >
                  {router.label}
                </span>
              </NavLink>
            )}
            {isExpanded && router.children && (
              <ul className="ml-8 space-y-2 mt-4">
                {router.children.map((child) => (
                  <li key={child.path}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 hover:bg-gray-700 rounded ${
                          isActive ? "text-yellow-100" : ""
                        }`
                      }
                    >
                      {child.icon}
                      <span
                        className={`${
                          isExpanded ? "ml-4" : "hidden"
                        } transition-all duration-300`}
                      >
                        {child.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
